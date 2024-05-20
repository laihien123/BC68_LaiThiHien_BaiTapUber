const UBER_CAR = "uberCar";
const UBER_SUV = "uberSUV";
const UBER_BLACK = "uberBlack";

const kiemTraGiaTienKmDauTien = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 8000;
    case UBER_SUV:
      return 9000;
    case UBER_BLACK:
      return 10000;
    default:
      break;
  }
};

const kiemTraGiaTienKmTu1Den19 = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 7500;
    case UBER_SUV:
      return 8500;
    case UBER_BLACK:
      return 9500;
    default:
      break;
  }
};

const kiemTraGiaTienKmTu19TroLen = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 7000;
    case UBER_SUV:
      return 8000;
    case UBER_BLACK:
      return 9000;
    default:
      break;
  }
};

const kiemTraGiaTienCho = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 2000;
    case UBER_SUV:
      return 3000;
    case UBER_BLACK:
      return 3500;
    default:
      break;
  }
};

const soKmDauTienSuDung = (soKm) => {
  if (soKm < 1 && soKm > 0) {
    return soKm;
  } else {
    return 1;
  }
};

const soKmTu1Den19SuDung = (soKm) => {
  if (soKm > 1 && soKm < 19) {
    return soKm - 1;
  } else if (soKm >= 19) {
    return 18;
  } else {
    return 0;
  }
};

const soKmTu19TroDiSuDung = (soKm) => {
  if (soKm >= 19) {
    return soKm - 19;
  } else {
    return 0;
  }
};

const giaTriChoSuDung = (thoiGianCho) => {
  let count = 0;
  let time = thoiGianCho;
  for (let i = 0; i < thoiGianCho; i++) {
    if (time - 3 >= 0) {
      count++;
    }
    time -= 3;
  }
  return count;
};

document.getElementById("btnTinhTien").onclick = () => {
  let km = document.getElementById("txt-km").value * 1;
  let cho = document.getElementById("txt-thoiGianCho").value * 1;
  let loaiXe = document.querySelector("input[type='radio']:checked").value;

  let giaTriKmDauTien = kiemTraGiaTienKmDauTien(loaiXe);
  let giaTriKmTu1Den19 = kiemTraGiaTienKmTu1Den19(loaiXe);
  let giaTriKm19TroLen = kiemTraGiaTienKmTu19TroLen(loaiXe);
  let giaTriCho = kiemTraGiaTienCho(loaiXe);
  let soLanCho = giaTriChoSuDung(cho);

  let tongTien = 0;
  if (km <= 1 && km > 0) {
    tongTien = giaTriKmDauTien;
  } else if (km > 1 && km <= 19) {
    tongTien = giaTriKmDauTien + (km - 1) * giaTriKmTu1Den19;
  } else {
    tongTien = giaTriKmDauTien + 18 * giaTriKmTu1Den19 + (km - 19) * giaTriKm19TroLen;
  }
  let giaTienCho = soLanCho * giaTriCho;
  tongTien += giaTienCho;

  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = tongTien.toLocaleString("vi", {
    currency: "VND",
    style: "currency",
  });
};

document.getElementById("btnHoaDon").onclick = () => {
  let km = document.getElementById("txt-km").value * 1;
  let cho = document.getElementById("txt-thoiGianCho").value * 1;
  let loaiXe = document.querySelector("input[type='radio']:checked").value;

  let giaTriKmDauTien = kiemTraGiaTienKmDauTien(loaiXe);
  let giaTriKmTu1Den19 = kiemTraGiaTienKmTu1Den19(loaiXe);
  let giaTriKm19TroLen = kiemTraGiaTienKmTu19TroLen(loaiXe);
  let giaTriCho = kiemTraGiaTienCho(loaiXe);
  let kmDauTienSuDung = soKmDauTienSuDung(km);
  let kmTu1Den19SuDung = soKmTu1Den19SuDung(km);
  let kmTu19TroDiSuDung = soKmTu19TroDiSuDung(km);
  let soLanCho = giaTriChoSuDung(cho);

  let tongTien = 0;
  if (km <= 1 && km > 0) {
    tongTien = giaTriKmDauTien;
  } else if (km > 1 && km <= 19) {
    tongTien = giaTriKmDauTien + (km - 1) * giaTriKmTu1Den19;
  } else {
    tongTien = giaTriKmDauTien + 18 * giaTriKmTu1Den19 + (km - 19) * giaTriKm19TroLen;
  }
  let giaTienCho = soLanCho * giaTriCho;
  tongTien += giaTienCho;

  $("#myModal").modal("show");
  document.querySelector(".modal-body").innerHTML = `
    <table class="table table-bordered text-center text-uppercase fw-bold">
      <thead class="thead-dark">
        <tr>
          <th class="text-center" colspan="5" scope="col" >Chi tiết hóa đơn</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Chi tiết</td>
          <td>Sử dụng</td>
          <td>Đơn giá (1000đ)</td>
          <td>Thành tiền (1000đ)</td>
        </tr>
        <tr>
          <td>Km đầu tiên</td>
          <td>${kmDauTienSuDung}</td>
          <td>${giaTriKmDauTien}</td>
          <td>${giaTriKmDauTien}</td>
        </tr>
        <tr>
          <td>Từ 1 đến 19</td>
          <td>${kmTu1Den19SuDung}</td>
          <td>${giaTriKmTu1Den19}</td>
          <td>${kmTu1Den19SuDung * giaTriKmTu1Den19}</td>
        </tr>
        <tr>
          <td>Từ 19 trở đi</td>
          <td>${kmTu19TroDiSuDung}</td>
          <td>${giaTriKm19TroLen}</td>
          <td>${kmTu19TroDiSuDung * giaTriKm19TroLen}</td>
        </tr>
        <tr>
          <td>Thời gian chờ</td>
          <td>${soLanCho}</td>
          <td>${giaTriCho}</td>
          <td>${soLanCho * giaTriCho}</td>
        </tr>
        <tr>
          <td colspan="4">Tổng tiền: ${tongTien.toLocaleString('vi-VN')} VNĐ</td>
        </tr>
      </tbody>
    </table>`;
};
