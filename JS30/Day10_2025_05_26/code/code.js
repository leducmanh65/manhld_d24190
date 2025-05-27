document.addEventListener('DOMContentLoaded', () => {
    images = [
       "/JS30/Day10_2025_05_26/ảnh/anh1.jpg",
       "/JS30/Day10_2025_05_26/ảnh/anh2.jpg",
       "/JS30/Day10_2025_05_26/ảnh/anh3.jpg",
       "/JS30/Day10_2025_05_26/ảnh/anh4.jpg"
    ]

    let currentImgIndex = 0;
    const currentImgElement = document.getElementById('currentImage');
    const prevbtn = document.getElementById('prevBtn')
    const nextbtn = document.getElementById('nextBtn')
    function updateImage() {
        currentImgElement.src = images[currentImgIndex]
    }

    prevbtn.addEventListener('click', () => {
        currentImgIndex--;
        if (currentImgIndex < 0) {
            currentImgIndex = images.length - 1;
        };
        updateImage();
    });
    nextbtn.addEventListener('click', () => {
        currentImgIndex++;
        if (currentImgIndex >= images.length) {
            currentImgIndex = 0;
        }
        updateImage()
    })
    updateImage()

});