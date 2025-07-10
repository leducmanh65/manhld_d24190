document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.login-container form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const robotCheck = document.getElementById('robot-check');

    // Tạo vùng hiển thị lỗi nếu chưa có
    let errorDiv = document.querySelector('.login-error');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'login-error';
        errorDiv.style.color = 'red';
        errorDiv.style.margin = '10px 0 0 0';
        errorDiv.style.textAlign = 'center';
        form.insertBefore(errorDiv, form.querySelector('.btn-login').nextSibling);
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        if (!robotCheck.checked) {
            errorDiv.textContent = 'Bạn chưa check robot';
            return;
        }
        if (username === '0386525889' && password === '0386525889') {
            window.location.href = '/WEB_HLS_CODE/Project_giua_ki/html/trangchu.html';
        } else {
            errorDiv.textContent = 'Tài khoản hoặc mật khẩu không đúng!';
        }
    });
});
