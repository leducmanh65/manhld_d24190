const backgroundselect = document.getElementById('background-select')
const changebackgroundbtn = document.getElementById('change-background-btn')

const backgroundImages = {
    mountain:"/JS30/day9_2025_05_25/anh/anh1.png", 
    sea: "/JS30/day9_2025_05_25/anh/anh2.png",
    forest: "/JS30/day9_2025_05_25/anh/anh3.png",
    city: "/JS30/day9_2025_05_25/anh/anh4.png"
}

changebackgroundbtn.addEventListener('click', function() {
    const selectedValue = backgroundselect.value
    const imageUrl = backgroundImages[selectedValue]
    
    if (imageUrl) {
        document.body.style.backgroundImage = `url("${imageUrl}")`
    }else {
        console.warn("không tìm thấy ảnh url", selectedValue)
    }
})