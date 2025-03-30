import "../styles/contactInfo.css"
import axios from 'axios';
import { useState } from "react";

export const ContactInfo = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        topic: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await  axios.post(process.env.REACT_APP_BASE_URL, formData)
          alert('El formulario fue enviado con éxito!')
          setFormData({name: '', email: '', topic: '', message: ''})
        } catch(error){
            alert('Error al enviar el formulario')
        }   
    }

    return (
        <section className="contactInfoContainer">
            <div className="block1">
                <h2>Contactar al equipo de Vocaltech</h2>
                <p>Las mejores ideas cobran vida cuando se comunican con claridad y estrategia. En VocalTech, te ayudamos a conectar, liderar y construir con impacto.</p>
                <p>Escríbenos y comencemos a crear juntos.</p>
                <p class="blurredParagraph">Miles de emprendedores y empresas ya confían en VocalTech para impulsar su comunicación y desarrollo, ¿te sumas?</p>
                <div className="imagesContainer">
                    <img src="./images/brand1.png" alt="brand1" style={{ maxHeight: '45px' }}/>
                    <img src="./images/brand2.png" alt="brand2" style={{ maxHeight: '45px' }}/>
                    <img src="./images/brand3.png" alt="brand3" style={{ maxHeight: '45px' }}/>
                    <img src="./images/brand4.png" alt="brand4" style={{ maxHeight: '45px' }}/>
                </div>
            </div>
            <div className="block2">
                <form className="form" onSubmit={handleSubmit}>
                <h3>Formulario de Contacto</h3>
                    <div className="inputBlock">
                        <label for="name">Nombre *</label>
                        <input id="name" 
                        type="text" 
                        name="name" 
                        placeholder="Tu nombre / Empresa"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        ></input>
                    </div>
                    <div className="inputBlock">
                        <label for="email">Email *</label>
                        <input id="email" 
                        type="email" 
                        name="email" 
                        placeholder="tucorreo@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        ></input>
                    </div>
                    <div className="inputBlock">
                        <label for="topic">Asunto *</label>
                        <input id="topic" 
                        type="text" 
                        name="topic" 
                        placeholder="Asunto de la consulta"
                        value={formData.topic}
                        onChange={(e) => setFormData({...formData, topic: e.target.value})}
                        ></input>
                    </div>
                    <div className="inputBlock">
                        <label for="message">Mensaje *</label>
                        <textarea id="message" 
                        type="text" 
                        name="message" 
                        placeholder="¿En qué te podemos ayudar?"
                        value={formData.message}
                        onSubmit={(e) => setFormData({...formData, message: e.target.value})}
                        ></textarea>
                    </div>
                    <div className="buttonContainer">
                        <button className="submitButton" type="submit">
                            Enviar Consulta
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}