import React from 'react';
import "./AlertModal.css";

const AlertModal = ({ isOpen, onClose }) => {
    const handleClose = () => {
        console.log('Close button clicked');
        if (typeof onClose === 'function') {
            onClose();
        } else {
            console.error('onClose is not a function');
        }
    };

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title">Alert</h2>
                    <span className="modal-close" onClick={handleClose}>&times;</span>
                </div>
                <div className="modal-body">
                    <p>Task Field  is empty</p>
                </div>
                <div className="modal-footer">
                    <button className="modal-button" onClick={handleClose}>OK</button>
                </div>
            </div>
        </div>
    );
};

export default AlertModal;
