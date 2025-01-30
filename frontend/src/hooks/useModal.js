import { useState } from "react";

export const useModal = () => {
    const [showModal, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return { showModal, openModal, closeModal };
};
