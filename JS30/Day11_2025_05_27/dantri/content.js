const newTitle = "Sinh viên UDU top1 server Hoàng Quốc Việt";

// Tìm phần tử chứa tiêu đề (tùy bài mà cấu trúc HTML có thể khác nhau)
const changeTitle = () => {
  // 1. Thay tiêu đề trang (trên tab trình duyệt)
  document.title = newTitle;

  // 2. Thay tiêu đề hiển thị trong bài
  const heading = document.querySelector("h1");
  if (heading) {
    heading.textContent = newTitle;
  }
};