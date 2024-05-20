//  tính điểm trung bình
 function tinhDiemTrungBinh (diemToan, diemVan) {
    // let diemToan = 8;
    // let diemVan = 6;
    console.log(diemToan);
    console.log(diemVan);
    // console.log ((diemToan + diemVan) / 2);
    // return ( diemToan + diemVan) / 2;
    // console.log("Hello");
    let diemTrungBinh = (diemToan + diemVan) /2;
    if (diemTrungBinh > 7) {
        return diemTrungBinh;
    }else {
        return "Thi hơi kém"
    }
 }

 
 // nhu T8, V4 
 let diemTrungBinhNhu = tinhDiemTrungBinh( 9, 4);
 console.log(diemTrungBinhNhu);
// hien T7, V6
let diemTrungBinhHien = tinhDiemTrungBinh(7, 9);
console.log(diemTrungBinhHien);

// sử dụng hàm có tham số mà không truyền giá trị vào
tinhDiemTrungBinh();

// Default Parameter (ES6)
function tinhKhuyenMaiMonAn( giaTienMonAn, khuyenMai = 10) {
    // kiểm tra giá trị của khuyến mĩa trước khi tính
    // if (!khuyenMai){
    //     console.log("hehe");
    //     khuyenMai = 10;
    // }
    let giaMonAn = giaTienMonAn * (1 - khuyenMai / 100);
    return giaMonAn;
}

// Mì sủi cảo giá 55000, 30
let miSuiCao = tinhKhuyenMaiMonAn (55000, 30);
console.log (miSuiCao);

let boKho = tinhKhuyenMaiMonAn(40000);
console.log(boKho);

// hiển thị chức vụ và tên nhân viên
let hienThiTenVaChucVu = function (nhanVien, chucVu) {
    // Họ tên: Lại Hiền - Chức Vụ: Sinh viên
    alert (`Họ tên: ${nhanVien} - Chức Vụ: ${chucVu}`);
};

// hienThiTenVaChucVu("Lại Hiền","Sinh viên");

// arrow function
// 1kg cân thịt heo = 90000
// Hàm tính toán cân nặng
// let tinhToanCanNang = () => {
//     console.log("tôi là hàm tính cân nặng");
//     return canNang * 90000;
// };


let tinhToanCanNang = (canNang) => canNang * 90000;


let heoLamĐong = tinhToanCanNang (200);
console.log(heoLamĐong);



// sự kiện onChange và sự kiện onInput
document.getElementById("keyWord").onchange = () => {
    console.log("tôi mới chạy onchange");
};

document.getElementById("keyWord").oninput = (event) => {
    // với event.target tương đương với 1 lệnh dom tói thẻ đang chạy event
    // Sản phẩm: Chảo Không Dính ==>chảo không dính ==>chao khong dinh
    // keywork: 
 let keyWord = event.target;
 console.log(keyWord);
};