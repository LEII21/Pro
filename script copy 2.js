document.addEventListener('DOMContentLoaded', function () {
    const messageInput = document.getElementById('message-input');
    const messageContainer = document.getElementById('message-container');

    function sendMessage() {
        const messageText = messageInput.value;
        if (messageText.trim() !== '') {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.textContent = messageText;
            messageContainer.appendChild(messageElement);
            messageInput.value = '';
            messageContainer.scrollTop = messageContainer.scrollHeight;
        }
    }

    window.sendMessage = sendMessage;
});
