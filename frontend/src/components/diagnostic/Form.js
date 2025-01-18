import { useState } from 'react';
import { AudioRecorder } from './AudioRecorder';
import { audioRecorderService } from '../../services/audioRecorder';

export const Form = ({ needs, audioTitle }) => {
    const [selectedNeeds, setSelectedNeeds] = useState([]); 
    const [file, setFile] = useState(null); 

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const uploadedAudioUrl = await audioRecorderService.uploadToCloudinary(file);
            
            const dataToSend = {
                needs: selectedNeeds,
                audio: uploadedAudioUrl,
            };
    
            console.log(dataToSend);
            setSelectedNeeds([]);
            setFile(null);
        } catch (error) {
            console.log(error)
        }
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
                <AudioRecorder file={file} setFile={setFile} /> 
            </div>
            <button 
                disabled={selectedNeeds.length === 0 || !file} 
                type="submit" className="btn btn-primary">Enviar</button>
        </form>
    );
};
