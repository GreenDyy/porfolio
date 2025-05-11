import React, { useState, useEffect } from 'react';
import './Message.scss';

const Message = {
    success: (content, duration = 3000) => {
        showMessage(content, 'success', duration);
    },
    warning: (content, duration = 3000) => {
        showMessage(content, 'warning', duration);
    },
    error: (content, duration = 3000) => {
        showMessage(content, 'error', duration);
    },
};

let messageContainer = null;

const showMessage = (content, type, duration) => {
    if (!messageContainer) {
        messageContainer = document.createElement('div');
        messageContainer.className = 'message-container';
        document.body.appendChild(messageContainer);
    }

    const messageElement = document.createElement('div');
    messageElement.className = `message ${type}`;
    messageElement.textContent = content;

    messageContainer.appendChild(messageElement);

    // Thêm animation khi hiển thị
    setTimeout(() => {
        messageElement.classList.add('show');
    }, 10);

    // Tự động xóa sau duration
    setTimeout(() => {
        messageElement.classList.remove('show');
        setTimeout(() => {
            messageContainer.removeChild(messageElement);
            if (messageContainer.children.length === 0) {
                document.body.removeChild(messageContainer);
                messageContainer = null;
            }
        }, 300); // Thời gian animation fade out
    }, duration);
};

export default Message; 