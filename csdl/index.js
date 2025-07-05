// Ẩn hiện các section theo sidebar
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
    document.getElementById(sectionId).style.display = '';
    document.getElementById('notification').innerText = '';
}

// Reset form
function resetForm(formId) {
    document.getElementById(formId).reset();
    let hidden = document.getElementById(formId).querySelector('input[type="hidden"]');
    if (hidden) hidden.value = '';
}

// BỆNH NHÂN 
document.getElementById('patientForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const hoTen = document.getElementById('patient_HoTen').value;
    const ngaySinh = document.getElementById('patient_NgaySinh').value;
    const gioiTinh = document.getElementById('patient_GioiTinh').value;
    const diaChi = document.getElementById('patient_DiaChi').value;
    const sdt = document.getElementById('patient_SDT').value;
    const cmnd = document.getElementById('patient_CMND').value;
    const tienSuBenh = document.getElementById('patient_TienSuBenh').value;
    const maBN = 'BN' + Date.now();

    const tbody = document.querySelector('#patientTable tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${maBN}</td>
        <td>${hoTen}</td>
        <td>${ngaySinh}</td>
        <td>${gioiTinh}</td>
        <td>${diaChi}</td>
        <td>${sdt}</td>
        <td>${cmnd}</td>
        <td>${tienSuBenh}</td>
        <td><button type="button" onclick="this.closest('tr').remove()">🗑 Xoá</button></td>
    `;
    tbody.appendChild(newRow);
    this.reset();
});

// BÁC SĨ
document.getElementById('doctorForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const hoTen = document.getElementById('doctor_HoTen').value;
    const chuyenKhoa = document.getElementById('doctor_ChuyenKhoa').value;
    const sdt = document.getElementById('doctor_SDT').value;
    const email = document.getElementById('doctor_Email').value;
    const maBS = 'BS' + Date.now();

    const tbody = document.querySelector('#doctorTable tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${maBS}</td>
        <td>${hoTen}</td>
        <td>${chuyenKhoa}</td>
        <td>${sdt}</td>
        <td>${email}</td>
        <td><button type="button" onclick="this.closest('tr').remove()">🗑 Xoá</button></td>
    `;
    tbody.appendChild(newRow);
    this.reset();
});

// Y TÁ 
document.getElementById('nurseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const hoTen = document.getElementById('nurse_HoTen').value;
    const chuyenMon = document.getElementById('nurse_ChuyenMon').value;
    const sdt = document.getElementById('nurse_SDT').value;
    const caLamViec = document.getElementById('nurse_CaLamViec').value;
    const maYT = 'YT' + Date.now();

    const tbody = document.querySelector('#nurseTable tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${maYT}</td>
        <td>${hoTen}</td>
        <td>${chuyenMon}</td>
        <td>${sdt}</td>
        <td>${caLamViec}</td>
        <td><button type="button" onclick="this.closest('tr').remove()">🗑 Xoá</button></td>
    `;
    tbody.appendChild(newRow);
    this.reset();
});

// KHÁM BỆNH
document.getElementById('examinationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const ngayKham = document.getElementById('examination_NgayKham').value;
    const gioKham = document.getElementById('examination_GioKham').value;
    const trieuChung = document.getElementById('examination_TrieuChung').value;
    const chanDoan = document.getElementById('examination_ChanDoan').value;
    const maKham = 'KB' + Date.now();

    const tbody = document.querySelector('#examinationTable tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${maKham}</td>
        <td>${ngayKham}</td>
        <td>${gioKham}</td>
        <td>${trieuChung}</td>
        <td>${chanDoan}</td>
        <td><button type="button" onclick="this.closest('tr').remove()">🗑 Xoá</button></td>
    `;
    tbody.appendChild(newRow);
    this.reset();
});

//  XÉT NGHIỆM
document.getElementById('testForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const tenXN = document.getElementById('test_TenXetNghiem').value;
    const loaiXN = document.getElementById('test_LoaiXetNghiem').value;
    const giaTien = document.getElementById('test_GiaTien').value;
    const maXN = 'XN' + Date.now();

    const tbody = document.querySelector('#testTable tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${maXN}</td>
        <td>${tenXN}</td>
        <td>${loaiXN}</td>
        <td>${giaTien}</td>
        <td><button type="button" onclick="this.closest('tr').remove()">🗑 Xoá</button></td>
    `;
    tbody.appendChild(newRow);
    this.reset();
});

// KẾT QUẢ XÉT NGHIỆM
document.getElementById('testResultForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const ngayLamXN = document.getElementById('testResult_NgayLamXN').value;
    const ketQua = document.getElementById('testResult_KetQua').value;
    const nhanXet = document.getElementById('testResult_NhanXet').value;
    const maKetQua = 'KQ' + Date.now();

    const tbody = document.querySelector('#testResultTable tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${maKetQua}</td>
        <td>${ngayLamXN}</td>
        <td>${ketQua}</td>
        <td>${nhanXet}</td>
        <td><button type="button" onclick="this.closest('tr').remove()">🗑 Xoá</button></td>
    `;
    tbody.appendChild(newRow);
    this.reset();
});

// THUỐC
document.getElementById('medicineForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const tenThuoc = document.getElementById('medicine_TenThuoc').value;
    const hoatChat = document.getElementById('medicine_HoatChat').value;
    const donViTinh = document.getElementById('medicine_DonViTinh').value;
    const gia = document.getElementById('medicine_Gia').value;
    const maThuoc = 'TH' + Date.now();

    const tbody = document.querySelector('#medicineTable tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${maThuoc}</td>
        <td>${tenThuoc}</td>
        <td>${hoatChat}</td>
        <td>${donViTinh}</td>
        <td>${gia}</td>
        <td><button type="button" onclick="this.closest('tr').remove()">🗑 Xoá</button></td>
    `;
    tbody.appendChild(newRow);
    this.reset();
});

// DƠN THUỐC
document.getElementById('prescriptionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const ngayKe = document.getElementById('prescription_NgayKe').value;
    const tongTien = document.getElementById('prescription_TongTien').value;
    const maDonThuoc = 'DT' + Date.now();

    const tbody = document.querySelector('#prescriptionTable tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${maDonThuoc}</td>
        <td>${ngayKe}</td>
        <td>${tongTien}</td>
        <td><button type="button" onclick="this.closest('tr').remove()">🗑 Xoá</button></td>
    `;
    tbody.appendChild(newRow);
    this.reset();
});

//CHI TIẾT ĐƠN THUỐC
document.getElementById('prescriptionDetailForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const maDonThuoc = document.getElementById('prescriptionDetail_MaDonThuoc').value;
    const maThuoc = document.getElementById('prescriptionDetail_MaThuoc').value;
    const soLuong = document.getElementById('prescriptionDetail_SoLuong').value;
    const lieuDung = document.getElementById('prescriptionDetail_LieuDung').value;

    const tbody = document.querySelector('#prescriptionDetailTable tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${maDonThuoc}</td>
        <td>${maThuoc}</td>
        <td>${soLuong}</td>
        <td>${lieuDung}</td>
        <td><button type="button" onclick="this.closest('tr').remove()">🗑 Xoá</button></td>
    `;
    tbody.appendChild(newRow);
    this.reset();
});

// GIƯỜNG BỆNH
document.getElementById('bedForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const loaiPhong = document.getElementById('bed_LoaiPhong').value;
    const tang = document.getElementById('bed_Tang').value;
    const trangThai = document.getElementById('bed_TrangThai').value;
    const maGiuong = 'GB' + Date.now();

    const tbody = document.querySelector('#bedTable tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${maGiuong}</td>
        <td>${loaiPhong}</td>
        <td>${tang}</td>
        <td>${trangThai}</td>
        <td><button type="button" onclick="this.closest('tr').remove()">🗑 Xoá</button></td>
    `;
    tbody.appendChild(newRow);
    this.reset();
});

//NHẬP VIỆN
document.getElementById('admissionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const ngayNhapVien = document.getElementById('admission_NgayNhapVien').value;
    const ngayXuatVien = document.getElementById('admission_NgayXuatVien').value;
    const lyDoNhapVien = document.getElementById('admission_LyDoNhapVien').value;
    const maNhapVien = 'NV' + Date.now();

    const tbody = document.querySelector('#admissionTable tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${maNhapVien}</td>
        <td>${ngayNhapVien}</td>
        <td>${ngayXuatVien}</td>
        <td>${lyDoNhapVien}</td>
        <td><button type="button" onclick="this.closest('tr').remove()">🗑 Xoá</button></td>
    `;
    tbody.appendChild(newRow);
    this.reset();
});

// HÓA ĐƠN
document.getElementById('billForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const ngayLap = document.getElementById('bill_NgayLap').value;
    const tongTienGoc = parseFloat(document.getElementById('bill_TongTien').value) || 0;
    const maBHYT = document.getElementById('bill_MaBHYT').value.trim();
    const phuongThuc = document.getElementById('bill_PhuongThucThanhToan').value;
    const maHoaDon = 'HD' + Date.now();

    // Tính toán giảm giá BHYT
    let giamGia = 0;
    let tongTienSauGiam = tongTienGoc;
    
    if (maBHYT && maBHYT.length > 0) {
        giamGia = tongTienGoc * 0.2; // Giảm 20%
        tongTienSauGiam = tongTienGoc - giamGia;
    }

    const tbody = document.querySelector('#billTable tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${maHoaDon}</td>
        <td>${ngayLap}</td>
        <td>${tongTienGoc.toLocaleString('vi-VN')} VNĐ</td>
        <td>${giamGia > 0 ? giamGia.toLocaleString('vi-VN') + ' VNĐ' : '0 VNĐ'}</td>
        <td>${tongTienSauGiam.toLocaleString('vi-VN')} VNĐ</td>
        <td>${maBHYT || 'Không có'}</td>
        <td>${phuongThuc}</td>
        <td><button type="button" onclick="this.closest('tr').remove()">🗑 Xoá</button></td>
    `;
    tbody.appendChild(newRow);
    this.reset();
    
    // Ẩn thông tin giảm giá
    document.getElementById('discountInfo').style.display = 'none';
});

// Thêm event listener để tính toán giảm giá real-time
document.getElementById('bill_TongTien').addEventListener('input', calculateDiscount);
document.getElementById('bill_MaBHYT').addEventListener('input', calculateDiscount);

function calculateDiscount() {
    const tongTienGoc = parseFloat(document.getElementById('bill_TongTien').value) || 0;
    const maBHYT = document.getElementById('bill_MaBHYT').value.trim();
    const discountInfo = document.getElementById('discountInfo');
    
    if (maBHYT && maBHYT.length > 0 && tongTienGoc > 0) {
        const giamGia = tongTienGoc * 0.2;
        const tongTienSauGiam = tongTienGoc - giamGia;
        
        document.getElementById('originalAmount').textContent = tongTienGoc.toLocaleString('vi-VN');
        document.getElementById('discountAmount').textContent = giamGia.toLocaleString('vi-VN');
        document.getElementById('finalAmount').textContent = tongTienSauGiam.toLocaleString('vi-VN');
        
        discountInfo.style.display = 'block';
    } else {
        discountInfo.style.display = 'none';
    }
}

// Mặc định hiển thị section đầu tiên
showSection('patients');