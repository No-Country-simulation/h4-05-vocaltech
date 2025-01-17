import { useState, useEffect } from "react";
import { useReactMediaRecorder } from "react-media-recorder";

export const AudioRecorder = ({ setAudioUrl }) => {
    const [isRecording, setIsRecording] = useState(false);
    const [time, setTime] = useState(0);
    const [audioPlayed, setAudioPlayed] = useState(false);
    const { startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({ audio: true });
    const maxTime = 5; 

    useEffect(() => {
        setAudioUrl(mediaBlobUrl);
    }, [mediaBlobUrl, setAudioUrl])
  
    useEffect(() => {
        let interval;
        if (isRecording && time < maxTime) {
            interval = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000); 
        } else if (time >= maxTime) {
            setIsRecording(false);
            setAudioPlayed(true);
            stopRecording();
        }

        return () => clearInterval(interval); 
    }, [isRecording, time, stopRecording, mediaBlobUrl]);

    const handleStartRecording = () => {
        setAudioPlayed(false);
        setTime(0); 
        setIsRecording(true); 
        startRecording(); 
    };

    const handleStopRecording = () => {
        setIsRecording(false);
        setAudioPlayed(true);
        stopRecording(); 
    };

    return (
        <div className="container">
            <p>Grabar voz</p>
            <button type="button"
                onClick={() => (isRecording ? handleStopRecording() : handleStartRecording())}>
                {isRecording ? "Detener Grabación" : "Iniciar Grabación"}
            </button>
            <p>00:{time.toString().padStart(2, "0")} / 01:00</p>
            {
                mediaBlobUrl && audioPlayed && (
                    <div className="mt-4">
                        <p>Reproducir Grabación:</p>
                        <audio controls src={mediaBlobUrl} />
                        <p>Si no fue de tu agrado podes darle nuevamente a "Iniciar Grabación" y listo</p>
                    </div>
                )
            }
        </div>
    );
};
