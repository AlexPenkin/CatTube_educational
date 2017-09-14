import Modal from 'react-modal';
import React from 'react';
import modalStyle from './modalStyle';


const ModalDialog = ({isOpen}) => (
    <Modal
        isOpen={isOpen}
        style={modalStyle}
        contentLabel="CatTube Dialog"
    >
        <h1>Modal Content</h1>
        <p>Etc.</p>
    </Modal>
);

export default ModalDialog;
