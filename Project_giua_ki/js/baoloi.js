// Hiện popup khi bấm nút 'Tạo báo cáo'
document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.querySelector('.baoloi-create-btn');
    const popup = document.getElementById('baoloiPopup');
    const closeBtn = document.getElementById('closeBaoloiPopup');

    if (openBtn && popup && closeBtn) {
        openBtn.addEventListener('click', function() {
            popup.style.display = 'flex';
        });
        closeBtn.addEventListener('click', function() {
            popup.style.display = 'none';
        });
        // Đóng popup khi bấm ra ngoài nội dung
        popup.addEventListener('click', function(e) {
            if (e.target === popup) {
                popup.style.display = 'none';
            }
        });
    }
});

