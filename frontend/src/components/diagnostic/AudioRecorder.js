import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faStopCircle, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { useReactMediaRecorder } from "react-media-recorder";
import { audioRecorderService } from "../../services/audioRecorder";

export const AudioRecorder = ({ file, setFile, disabled }) => {
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
            <p className="lead">Estás en un ascensor con un inversor. En menos de 30 segundos (en lo posible), 
                cuéntanos tu propuesta para obtener un diagnóstico personalizado.
            </p>
            <p>Pulse para iniciar la grabación de voz o adjunte un archivo</p>
            <button type="button" className="btn btn-audio-recorder" 
                disabled={fileInputValue || disabled}
                onClick={() => (isRecording ? handleStopRecording() : handleStartRecording())}>
                {
                    isRecording ?
                        <FontAwesomeIcon icon={faStopCircle} className="fs-1 text-black" />
                        : <FontAwesomeIcon icon={faMicrophone} className="fs-1 text-black" />
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
                <input className="w-100" disabled={isRecording || (mediaBlobUrl && file) || (disabled)}
                    type="file" accept="audio/*" onChange={handleAudioUpload} value={fileInputValue} />
            </div>
            {
                file && (
                    <button type="button" className="btn btn-danger rounded-pill"
                        onClick={handleAudioDelete} disabled={disabled}>
                        Eliminar grabación o archivo <FontAwesomeIcon icon={faTimes} />
                    </button>
                )
            }
        </>
    );
};
