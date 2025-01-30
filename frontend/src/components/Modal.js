import { Modal } from 'react-bootstrap';

export const Modall = ({ showModal, closeModal, title, children, size = "" }) => {
    return (
        <Modal show={showModal} onHide={closeModal} centered className={`modal-${size}`}>
            <Modal.Header closeButton className='p-4'>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='p-4'>
                {children}
            </Modal.Body>
        </Modal>
    );
};
