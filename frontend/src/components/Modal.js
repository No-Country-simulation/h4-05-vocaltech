import { Modal } from 'react-bootstrap';

export const Modall = ({ showModal, closeModal, title, children, size = "" }) => {
    return (
        <Modal show={showModal} onHide={closeModal} centered className={`modal-${size}`}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    );
};
