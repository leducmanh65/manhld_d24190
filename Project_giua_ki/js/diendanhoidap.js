document.addEventListener('DOMContentLoaded', function() {
    const chatInput = document.querySelector('.chat-input');
    const chatBody = document.querySelector('.chat-body');
    // Nút gửi là nút cuối cùng trong .chat-footer-btn
    const sendBtns = document.querySelectorAll('.chat-footer-btn');
    const sendBtnPaper = sendBtns[sendBtns.length - 1];

    function appendMessage(text) {
        const msg = document.createElement('div');
        msg.className = 'chat-message chat-message-right';
        msg.innerHTML = `
            <div class=\"chat-message-box chat-message-row2\">
                <div class=\"chat-message-row-top\">
                    <span class=\"chat-message-text\">${text}</span>
                    <span class=\"chat-message-name\">Bạn</span>
                </div>
                <div class=\"chat-message-time\">${new Date().getHours()}:${String(new Date().getMinutes()).padStart(2,'0')}</div>
            </div>
        `;
        chatBody.appendChild(msg);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    sendBtnPaper.addEventListener('click', function() {
        const text = chatInput.value.trim();
        if (!text) return;
        appendMessage(text);
        chatInput.value = '';
        setTimeout(() => {
            chatBody.innerHTML = '';
        }, 2000);
    });
});
