import { useState, useEffect, useRef } from "react";
import { Toaster, toast } from "sonner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { loader } from "./Loader";
import { chatbotService } from "../services/chatbot";
import "../styles/chatbot.css";


export const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null); 
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]); 

    const handleSubmit = async(e) => {
        e.preventDefault();

        const userMessage = { role: "user", content: input }
        const newMessages = [...messages, userMessage]
        setMessages(newMessages);
        setInput("");
        setIsTyping(true);

        try {
            const response = await chatbotService.openai(newMessages);
            const botMessage = response.choices[0].message;
            setMessages([...newMessages, botMessage]);
        } catch {
            toast.error("Error al comunicarse con Voltebot. Intenté nuevamente!");
        } finally {
            setIsTyping(false); 
        }
    } 

    return (
        <>
            {
                isOpen ? (
            
                <div className="chatbot-window d-flex">
                    <div className="chatbot-header d-flex align-items-center justify-content-between">
                        <img 
                            src="/images/chatbot-avatar.jpg" 
                            alt="Avatar" 
                            className="chatbot-avatar"
                        />
                        <h5 className="chatbot-title fw-bolder">Voltebot</h5>
                        <button className="btn chatbot-close" onClick={() => setIsOpen(false)}>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                    </div>
                    <div className="chatbot-body">
                        <p>Bienvenido/a! Tus dudas serán aclaradas por Voltebot, nuestro asistente virtual.</p>
                        {
                            messages.map((message, index) => (
                                <div key={index}
                                    className={`chatbot-message ${ message.role === "user" ? 
                                    "chatbot-message-user text-end" : "chatbot-message-bot text-start"}`}>
                                    {message.content}
                                </div>
                            ))
                        }
                        {
                            isTyping && (
                                <loader.ChatbotLoader />
                            )
                        }
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="form-group chatbot-footer">
                        <textarea type="text" value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="form-control"
                            placeholder="Escribe tu mensaje..."
                            rows={1}
                            name="messages"
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && input.trim()) {
                                    e.preventDefault(); 
                                    handleSubmit(e);
                                }
                            }}
                        />
                        <button className="btn btn-chatbot border-0" disabled={!input} onClick={handleSubmit}>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                </div>
            ) : (
                <div className="btn-open-chat" onClick={() => setIsOpen(true)}>
                    <img 
                        src="/images/chatbot-avatar.jpg" 
                        alt="Chatbot" 
                        className="" 
                    />
                </div>
            )}
            <Toaster
                richColors
                position="top-center"
            />
        </>
    );
};
