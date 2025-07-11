// Script xóa bài tập động trên trang tự chọn bài tập

// Đa hoàn tác: dùng mảng lưu các bài tập đã xóa
let deletedStack = [];
let undoBtn = null;

function showUndoButton() {
    if (!undoBtn) {
        undoBtn = document.createElement('button');
        undoBtn.innerHTML = '<i class="fa-solid fa-rotate-left"></i> Hoàn tác';
        undoBtn.className = 'undo-btn';
        undoBtn.addEventListener('click', function() {
            if (deletedStack.length > 0) {
                const { node, index } = deletedStack.pop();
                const baitapList = document.querySelector('.baitap-list');
                const items = baitapList.querySelectorAll('.baitap-item');
                if (index >= items.length) {
                    baitapList.appendChild(node);
                } else {
                    baitapList.insertBefore(node, items[index]);
                }
                if (deletedStack.length === 0) {
                    undoBtn.remove();
                    undoBtn = null;
                }
            }
        });
    }
    if (!document.body.contains(undoBtn)) {
        document.body.appendChild(undoBtn);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.baitap-list').forEach(function(list) {
        list.addEventListener('click', function(e) {
            if (e.target && e.target.classList.contains('btn-outline') && e.target.textContent.trim() === 'Xóa bài tập') {
                // Tìm tới .baitap-item gần nhất và xóa nó
                const baitapItem = e.target.closest('.baitap-item');
                if (baitapItem) {
                    // Lưu lại node và vị trí vào stack
                    const items = Array.from(list.querySelectorAll('.baitap-item'));
                    const index = items.indexOf(baitapItem);
                    deletedStack.push({ node: baitapItem, index });
                    baitapItem.remove();
                    showUndoButton();
                }
            }
        });
    });
});
