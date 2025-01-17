import { useState } from 'react';
import { AudioRecorder } from './AudioRecorder';

export const Form = ({ needs, audioTitle }) => {
    const [selectedNeeds, setSelectedNeeds] = useState([]); 
    const [audioUrl, setAudioUrl] = useState(null); 

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setSelectedNeeds((prevNeeds) => {
            if (checked) {
                return [...prevNeeds, value];
            } else {
                return prevNeeds.filter((need) => need !== value);
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const dataToSend = {
            needs: selectedNeeds,
            audio: audioUrl,
        };

        console.log(dataToSend);
        setSelectedNeeds([]);
        setAudioUrl(null);
        console.log(dataToSend);
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <div className="form-group">
                {needs?.map((need, index) => (
                    <div key={index}>
                        <input
                            type="checkbox"
                            value={need}
                            onChange={handleCheckboxChange}
                            id={`need-${index}`}
                            checked={selectedNeeds.includes(need)}
                        />
                        <label htmlFor={`need-${index}`}>{need}</label>
                    </div>
                ))}
            </div>
            <div className="form-group">
                <label htmlFor="audio">{audioTitle} (30-60 segundos)</label>
                <AudioRecorder setAudioUrl={setAudioUrl} /> 
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    );
};
