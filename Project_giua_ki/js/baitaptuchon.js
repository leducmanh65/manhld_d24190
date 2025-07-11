// Script xóa bài tập động trên trang tự chọn bài tập

let lastDeleted = null;
let lastDeletedIndex = null;
let undoBtn = null;

function showUndoButton() {
    if (!undoBtn) {
        undoBtn = document.createElement('button');
        undoBtn.innerHTML = '<i class="fa-solid fa-rotate-left"></i> Hoàn tác';
        undoBtn.className = 'undo-btn';
        undoBtn.addEventListener('click', function() {
            if (lastDeleted && lastDeletedIndex !== null) {
                const baitapList = document.querySelector('.baitap-list');
                const items = baitapList.querySelectorAll('.baitap-item');
                if (lastDeletedIndex >= items.length) {
                    baitapList.appendChild(lastDeleted);
                } else {
                    baitapList.insertBefore(lastDeleted, items[lastDeletedIndex]);
                }
                lastDeleted = null;
                lastDeletedIndex = null;
                undoBtn.remove();
            }
        });
    }
    document.body.appendChild(undoBtn);
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.baitap-list').forEach(function(list) {
        list.addEventListener('click', function(e) {
            if (e.target && e.target.classList.contains('btn-outline') && e.target.textContent.trim() === 'Xóa bài tập') {
                // Tìm tới .baitap-item gần nhất và xóa nó
                const baitapItem = e.target.closest('.baitap-item');
                if (baitapItem) {
                    // Lưu lại node và vị trí
                    lastDeleted = baitapItem;
                    const items = Array.from(list.querySelectorAll('.baitap-item'));
                    lastDeletedIndex = items.indexOf(baitapItem);
                    baitapItem.remove();
                    showUndoButton();
                }
            }
        });
    });
});
