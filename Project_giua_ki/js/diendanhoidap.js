document.addEventListener('DOMContentLoaded', function() {
    const chatInput = document.querySelector('.chat-input');
    const chatBody = document.querySelector('.chat-body');
    // Nút gửi là nút cuối cùng trong .chat-footer-btn
    const sendBtns = document.querySelectorAll('.chat-footer-btn');
    const sendBtnPaper = sendBtns[sendBtns.length - 1];
    const imageBtn = sendBtns[0];

    function appendMessage(text) {
        const msg = document.createElement('div');
        msg.className = 'chat-message chat-message-right';
        msg.innerHTML = `
            <div class=\"chat-message-row3\">
                <div class=\"chat-message-row3-top\">
                    <div class=\"chat-message-text chat-message-bubble\">${text}</div>
                    <span class=\"chat-message-name\">Bạn</span>
                </div>
                <div class=\"chat-message-time\">${new Date().getHours()}:${String(new Date().getMinutes()).padStart(2,'0')}</div>
            </div>
        `;
        chatBody.appendChild(msg);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Biến lưu ảnh tạm khi dán vào ô nhập
    let pendingImage = null;
    let previewImg = null;

    // Gửi ảnh khi dán vào ô nhập chat (chỉ preview, chưa gửi)
    chatInput.addEventListener('paste', function(e) {
        const items = (e.clipboardData || window.clipboardData).items;
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (item.type.indexOf('image') !== -1) {
                const file = item.getAsFile();
                const reader = new FileReader();
                reader.onload = function(event) {
                    pendingImage = event.target.result;
                    showImagePreview(pendingImage);
                };
                reader.readAsDataURL(file);
                e.preventDefault();
                break;
            }
        }
    });

    function showImagePreview(imgSrc) {
        removeImagePreview();
        previewImg = document.createElement('img');
        previewImg.src = imgSrc;
        previewImg.alt = 'Ảnh chuẩn bị gửi';
        previewImg.style.maxWidth = '80px';
        previewImg.style.maxHeight = '80px';
        previewImg.style.borderRadius = '8px';
        previewImg.style.margin = '6px 0 0 0';
        previewImg.style.display = 'block';
        previewImg.style.boxShadow = '0 2px 8px rgba(60,40,20,0.13)';
        chatInput.parentNode.insertBefore(previewImg, chatInput.nextSibling);
    }
    function removeImagePreview() {
        if (previewImg && previewImg.parentNode) previewImg.parentNode.removeChild(previewImg);
        previewImg = null;
    }

    sendBtnPaper.addEventListener('click', function() {
        const text = chatInput.value.trim();
        if (pendingImage) {
            appendImageMessage(pendingImage);
            pendingImage = null;
            removeImagePreview();
            chatInput.value = '';
            return;
        }
        if (!text) return;
        appendMessage(text);
        chatInput.value = '';
        setTimeout(() => {
            chatBody.innerHTML = '';
        }, 2000);
    });

    imageBtn.addEventListener('click', function() {
        window.open('https://vn.images.search.yahoo.com/search/images;_ylt=AwrPrm9te3FoawIAujZrUwx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=%E1%BA%A3nh+ielts&fr2=piv-web&type=E210VN91215G0&fr=mcafee', '_blank');
    });

    function appendImageMessage(imgSrc) {
        const msg = document.createElement('div');
        msg.className = 'chat-message chat-message-right';
        msg.innerHTML = `
            <div class="chat-message-row3">
                <div class="chat-message-row3-top">
                    <div class="chat-message-bubble" style="padding:8px 8px;max-width:220px;max-height:220px;display:flex;align-items:center;justify-content:center;">
                        <img src="${imgSrc}" alt="Ảnh gửi" style="max-width:200px;max-height:200px;border-radius:12px;box-shadow:0 2px 8px rgba(60,40,20,0.13);">
                    </div>
                    <span class="chat-message-name">Bạn</span>
                </div>
                <div class="chat-message-time">${new Date().getHours()}:${String(new Date().getMinutes()).padStart(2,'0')}</div>
            </div>
        `;
        chatBody.appendChild(msg);
        chatBody.scrollTop = chatBody.scrollHeight;
        setTimeout(() => {
            chatBody.innerHTML = '';
        }, 2000);
    }

    // Nút điện thoại là nút đầu tiên trong .chat-header-btn
    const headerBtns = document.querySelectorAll('.chat-header-btn');
    const phoneBtn = headerBtns[0];
    // Popup danh thiếp Zalo
    function showZaloPopup() {
        if (document.getElementById('zalo-popup')) return;
        const popup = document.createElement('div');
        popup.id = 'zalo-popup';
        popup.style.position = 'fixed';
        popup.style.top = '0';
        popup.style.left = '0';
        popup.style.width = '100vw';
        popup.style.height = '100vh';
        popup.style.background = 'rgba(0,0,0,0.35)';
        popup.style.display = 'flex';
        popup.style.alignItems = 'center';
        popup.style.justifyContent = 'center';
        popup.style.zIndex = '9999';
        popup.innerHTML = `
            <div style="position:relative;background:#fff;padding:18px 18px 10px 18px;border-radius:18px;box-shadow:0 8px 32px rgba(30,180,80,0.18),0 2px 8px rgba(60,40,20,0.13);max-width:90vw;max-height:90vh;display:flex;flex-direction:column;align-items:center;">
                <button id="close-zalo-popup" style="position:absolute;top:8px;right:12px;background:none;border:none;font-size:28px;cursor:pointer;color:#222;">&times;</button>
                <img src="/WEB_HLS_CODE/Project_giua_ki/ảnh/danhthiepzalo.jpg" alt="Danh thiếp Zalo" style="max-width:70vw;max-height:70vh;border-radius:12px;box-shadow:0 2px 8px rgba(60,40,20,0.13);margin-bottom:8px;">
            </div>
        `;
        document.body.appendChild(popup);
        document.getElementById('close-zalo-popup').onclick = function() {
            popup.remove();
        };
        popup.onclick = function(e) {
            if (e.target === popup) popup.remove();
        };
    }
    phoneBtn.addEventListener('click', function() {
        showZaloPopup();
    });

    // Nút back (mũi tên) chuyển về trang chủ
    const backBtn = document.querySelector('.chat-back-btn');
    backBtn.addEventListener('click', function() {
        window.location.href = '/WEB_HLS_CODE/Project_giua_ki/html/trangchu.html';
    });
});
