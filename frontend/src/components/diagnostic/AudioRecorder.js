import { ProgressBar } from 'react-bootstrap';

export const AudioRecorder = () => {
    return (
        <div className="container pt-2">
            <button className="btn btn-success">Grabar</button>
            <div className="pt-3">
                <ProgressBar now={0} animated label={`0s`} />
                <small className="text-center">Tiempo: 0s</small>
            </div>
            <div className="mt-3">
                <audio controls />
            </div>
        </div>
    );
};
