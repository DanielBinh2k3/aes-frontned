// Notification.js
import React, { useState, useEffect } from 'react';
import { Container, Toast, ToastContainer } from 'react-bootstrap';

const Notification = ({ show, message, onClose }) => {
  const [showToast, setShowToast] = useState(show);

  useEffect(() => {
    setShowToast(show);
  }, [show]);

  return (
    
    <ToastContainer position="top-center" className="p-3" style={{"marginTop": "3.5rem", }}>
      <Toast onClose={onClose} show={showToast} delay={10000} autohide bg="warning">
        <Toast.Header>
          <strong className="me-auto">Notification</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default Notification;
