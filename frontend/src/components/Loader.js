const GeneralLoader = () => {
    return (
        <div className="spinner-border text-light spinner-border-sm" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};

const ChatbotLoader = () => {
    return (
        <div className="chatbot-message chatbot-loading-bot d-flex">
            <div className="spinner-grow spinner-grow-sm mx-1 custom-loader delay-1" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow spinner-grow-sm mx-1 custom-loader delay-2" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow spinner-grow-sm mx-1 custom-loader delay-3" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export const loader = {
    GeneralLoader,
    ChatbotLoader
}
