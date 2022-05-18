// hooks/useFetch.js

import { useState, useEffect } from 'react';

export const useToggle = () => {

    const [isModalOpen, setIsModalOpen] = useState(true);

    

        const toggleModal = () => {
            setIsModalOpen(!isModalOpen);
          }
    

    // {isModalOpen: isModalOpen, toggleModal: toggleModal }

    return { isModalOpen, toggleModal }; // should be an array [], setIsdARKmODE is just toggleModal
}

// if returning pure state and a function back to a container use [] as an array. if returning object like data or error use {}