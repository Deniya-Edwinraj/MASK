import React from 'react'
import Modal from 'react-modal'

const ModalComponent = (props) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false)
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
    },
  }

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>{props.buttonText}</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Modal"
      >
        {props.children}
      </Modal>
    </div>
  )
}

export default ModalComponent