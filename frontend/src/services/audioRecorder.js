import axios from "axios";

const audioFile = async (mediaBlobUrl) => {
    try {
        const response = await axios.get(mediaBlobUrl, { responseType: 'blob' });
        const blob = response.data; 
          
        const audioFile = new File([blob], 'audio.wav', { type: 'audio/wav' });

        return audioFile;
    } catch  {
        throw new Error("Error al obtener el blob. Inténtalo de nuevo más tarde.");
    }
};

const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);  
    formData.append('upload_preset', 'vocaltech_preset'); 

    try {
        const response = await axios.post('https://api.cloudinary.com/v1_1/dc2j8zklr/upload', formData);
        const url = response.data.secure_url; 

        return url;
    } catch {
        throw new Error("Error al subir audio al servidor. Inténtalo de nuevo más tarde.");
    }
};

export const audioRecorderService = {
    audioFile,
    uploadToCloudinary,
}; 
