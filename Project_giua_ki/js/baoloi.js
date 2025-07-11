// Hiện popup khi bấm nút 'Tạo báo cáo'
document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.querySelector('.baoloi-create-btn');
    const popup = document.getElementById('baoloiPopup');
    const closeBtn = document.getElementById('closeBaoloiPopup');
    const form = document.getElementById('baoloiForm');
    const tableBody = document.querySelector('.baoloi-table tbody');

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

    // Thêm chức năng lưu dữ liệu vào bảng
    if (form && tableBody) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const tieuDe = document.getElementById('tieuDe').value.trim();
            const loaiBaoCao = document.getElementById('loaiBaoCao').value;
            const ngayTao = document.getElementById('ngayTao').value;
            if (!tieuDe || !loaiBaoCao || !ngayTao) return;
            // Xóa dòng trống nếu có
            const emptyRow = tableBody.querySelector('.baoloi-empty');
            if (emptyRow) emptyRow.parentNode.removeChild(emptyRow);
            // Thêm dòng mới
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${tieuDe}</td>
                <td>${loaiBaoCao}</td>
                <td>${ngayTao}</td>
                <td><input type="checkbox" class="baoloi-check"></td>
            `;
            tableBody.appendChild(tr);
            // Đóng popup và reset form
            popup.style.display = 'none';
            form.reset();
        });
    }
});


