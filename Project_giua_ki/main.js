document.querySelector('.nav-item.has-dropdown').addEventListener('click', function(e) {
    // Ngăn chặn chuyển trang
    e.preventDefault();
    // Toggle class active
    this.classList.toggle('active');
});