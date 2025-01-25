import { useState, useEffect } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { audioRecorderService } from "../../services/audioRecorder";

export const AudioRecorder = ({ file, setFile }) => {
    const [isRecording, setIsRecording] = useState(false);
    const [time, setTime] = useState(0);
    const [fileInputValue, setFileInputValue] = useState('');
    const { startRecording, stopRecording, clearBlobUrl, mediaBlobUrl } = useReactMediaRecorder({ audio: true });
    const maxTime = 60; 

    useEffect(() => {
        if (mediaBlobUrl) {
            const audioFile = async () => {
                try {
                    const audioFile = await audioRecorderService.audioFile(mediaBlobUrl); 
                    setFile(audioFile); 
                } catch (error) {
                    console.error('Error al obtener el audio:', error);
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
        if(!file) {
            setTime(0);
            setFileInputValue(''); 
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
        <div className="container">
            <p>Grabar voz</p>
            <button type="button" className="btn btn-success" disabled={fileInputValue}
                onClick={() => (isRecording ? handleStopRecording() : handleStartRecording())}>
                {isRecording ? "Detener Grabación" : "Iniciar Grabación"}
            </button>
            <p>00:{time.toString().padStart(2, "0")} / 01:00</p>
            {
                mediaBlobUrl && file && (
                    <div className="mt-4">
                        <p>Reproducir Grabación:</p>
                        <audio controls src={mediaBlobUrl} />
                        <p>Si no fue de tu agrado podes darle nuevamente a "Iniciar Grabación" y listo</p>
                    </div>
                )
            }
            <input disabled={isRecording || (mediaBlobUrl && file)} type="file" accept="audio/*" onChange={handleAudioUpload} value={fileInputValue} />
            {
                file && (
                    <button type="button" className="btn btn-danger" onClick={handleAudioDelete}>X</button>
                )
            }
        </div>
    );
};
