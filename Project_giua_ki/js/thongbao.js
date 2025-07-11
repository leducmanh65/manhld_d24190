// Hiển thị và ẩn popup tạo ticket

document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('openTicketPopup');
    const popup = document.getElementById('ticketPopup');
    const closeBtn = document.getElementById('closeTicketPopup');
    const ticketForm = document.getElementById('ticketForm');
    const notificationTable = document.querySelector('.notification-table tbody');
    const notificationTotal = document.querySelector('.notification-total');
    let currentReplyRow = null;
    const replyPopup = document.getElementById('replyPopup');
    const closeReplyPopup = document.getElementById('closeReplyPopup');
    const replyForm = document.getElementById('replyForm');
    const replyStatus = document.getElementById('replyStatus');

    openBtn.addEventListener('click', function() {
        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Khóa cuộn trang
    });
    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
        document.body.style.overflow = '';
    });
    // Đóng popup khi bấm ra ngoài nội dung
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            popup.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    ticketForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Lấy dữ liệu từ form
        const title = document.getElementById('ticketTitle').value;
        const sender = document.getElementById('ticketSender').value;
        const receiver = document.getElementById('ticketReceiver').value;
        const date = document.getElementById('ticketDate').value;
        const status = document.getElementById('ticketStatus').value;

        // Định dạng ngày giờ
        let dateDisplay = date;
        if (date) {
            const d = new Date(date);
            const pad = n => n.toString().padStart(2, '0');
            dateDisplay = pad(d.getHours()) + ':' + pad(d.getMinutes()) + ' ' + pad(d.getDate()) + '/' + pad(d.getMonth()+1) + '/' + d.getFullYear();
        }

        // Thêm dòng mới vào bảng
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><a href="#" class="notification-title">${title}</a></td>
            <td>${sender}</td>
            <td>${receiver}</td>
            <td>${dateDisplay}</td>
            <td>${status}</td>
            <td><button class="reply-btn">Trả lời</button></td>
        `;
        notificationTable.appendChild(tr);

        // Cập nhật tổng số
        const count = notificationTable.querySelectorAll('tr').length;
        notificationTotal.textContent = 'Tổng: ' + count;

        // Đóng popup, mở lại cuộn, reset form
        document.getElementById('ticketPopup').style.display = 'none';
        document.body.style.overflow = '';
        ticketForm.reset();
    });

    // Dropdown trạng thái cho nút Trả lời
    let replyDropdown = null;
    let currentReplyRowDropdown = null;
    document.addEventListener('click', function(e) {
        // Nếu bấm vào nút Trả lời
        if (e.target.classList.contains('reply-btn')) {
            e.preventDefault();
            // Xóa dropdown cũ nếu có
            if (replyDropdown) replyDropdown.remove();
            // Lưu lại dòng đang chọn
            currentReplyRowDropdown = e.target.closest('tr');
            // Tạo dropdown
            replyDropdown = document.createElement('div');
            replyDropdown.className = 'reply-dropdown';
            replyDropdown.innerHTML = `
                <div class="reply-dropdown-item" data-value="Waiting">Waiting</div>
                <div class="reply-dropdown-item" data-value="Done">Done</div>
                <div class="reply-dropdown-item" data-value="Closed">Closed</div>
            `;
            // Vị trí: dưới nút Trả lời
            const rect = e.target.getBoundingClientRect();
            replyDropdown.style.position = 'fixed';
            replyDropdown.style.left = rect.left + 'px';
            replyDropdown.style.top = (rect.bottom + 4) + 'px';
            replyDropdown.style.zIndex = 3000;
            document.body.appendChild(replyDropdown);
        } else if (replyDropdown && !e.target.classList.contains('reply-dropdown-item')) {
            // Nếu click ra ngoài dropdown thì ẩn dropdown
            replyDropdown.remove();
            replyDropdown = null;
            currentReplyRowDropdown = null;
        }
        // Nếu bấm vào item trong dropdown
        if (e.target.classList.contains('reply-dropdown-item')) {
            if (currentReplyRowDropdown) {
                const statusCell = currentReplyRowDropdown.querySelector('td:nth-child(5)');
                if (statusCell) {
                    statusCell.textContent = e.target.dataset.value;
                }
            }
            replyDropdown.remove();
            replyDropdown = null;
            currentReplyRowDropdown = null;
        }
    });
});
