import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faPauseCircle, faTimes, faStopCircle, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { useReactMediaRecorder } from "react-media-recorder";
import { audioRecorderService } from "../../services/audioRecorder";

export const AudioRecorder = ({ file, setFile }) => {
    const [isRecording, setIsRecording] = useState(false);
    const [time, setTime] = useState(0);
    const [fileInputValue, setFileInputValue] = useState("");
    const { startRecording, stopRecording, clearBlobUrl, mediaBlobUrl } = useReactMediaRecorder({ audio: true });
    const maxTime = 60;

    useEffect(() => {
        if (mediaBlobUrl) {
            const audioFile = async () => {
                try {
                    const audioFile = await audioRecorderService.audioFile(mediaBlobUrl);
                    setFile(audioFile);
                } catch (error) {
                    console.error("Error al obtener el audio:", error);
                }
            };

            audioFile();
        }
    }, [mediaBlobUrl, setFile]);

    useEffect(() => {
        let interval;
        if (isRecording && time < maxTime) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else if (time >= maxTime) {
            setIsRecording(false);
            stopRecording();
        }

        return () => clearInterval(interval);
    }, [isRecording, time, stopRecording, mediaBlobUrl]);

    useEffect(() => {
        if (!file) {
            setTime(0);
            setFileInputValue("");
        }
    }, [file])

    const handleStartRecording = () => {
        clearBlobUrl();
        setTime(0);
        setIsRecording(true);
        startRecording();
    };

    const handleStopRecording = () => {
        setIsRecording(false);
        stopRecording();
    };

    const handleAudioUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setFile(file);
        setFileInputValue(e.target.value);
    };

    const handleAudioDelete = () => {
        setTime(0);
        clearBlobUrl();
        setFile(null);
    };

    return (
        <>
            <p className="pb-2">Pulse para iniciar la grabación de voz</p>
            <button type="button" className="btn btn-audio-recorder rounded-circle p-3" disabled={fileInputValue}
                onClick={() => (isRecording ? handleStopRecording() : handleStartRecording())}>
                {
                    isRecording ?
                        <FontAwesomeIcon icon={faStopCircle} className="fs-1 align-middle icon-audio-recorder" />
                        : <FontAwesomeIcon icon={faMicrophone} className="fs-1 align-middle icon-audio-recorder" />
                }
            </button>
            <small className="d-block pt-2">00:{time.toString().padStart(2, "0")} / 01:00</small>
            {
                mediaBlobUrl && file && (
                    <div className="mt-4">
                        <p className="pb-2">Reproducir Grabación</p>
                        <audio controls src={mediaBlobUrl} />
                        <small className="d-block">Si no fue de tu agrado podes
                            volver a iniciar una nueva grabación y listo.
                        </small>
                    </div>
                )
            }
            <div className="py-4">
                <input className="w-100" disabled={isRecording || (mediaBlobUrl && file)}
                    type="file" accept="audio/*" onChange={handleAudioUpload} value={fileInputValue} />
            </div>
            {
                file && (
                    <button type="button" className="btn btn-danger rounded-pill"
                        onClick={handleAudioDelete}>
                        Eliminar grabación o archivo <FontAwesomeIcon icon={faTimes} />
                    </button>
                )
            }
        </>
    );
};
