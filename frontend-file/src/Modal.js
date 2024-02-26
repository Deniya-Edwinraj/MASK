import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        height: '500px',
        background: '#000',
        borderRadius: '10px',
        boxShadow: '0 0 6px 0 #FFD700',
  },
  buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
      },
      productList: {
         width: '90%',
         borderRadius: '10px',
         height: '90%',
      },
};

const ModalComponent = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      {children}
    </Modal>
  );
};

export default ModalComponent;

