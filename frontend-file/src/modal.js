// YourMainComponent.js
import React, { useState } from 'react';
import CustomizeModal from './CustomizeModal';

const YourMainComponent = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // Close the modal after submission if needed
    closeModal();
  };

  return (
    <div>
      {/* Your other components and content */}
      <button className="card__button" onClick={openModal}>Customize</button>

      {isModalVisible && (
        <CustomizeModal onClose={closeModal} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default YourMainComponent;
