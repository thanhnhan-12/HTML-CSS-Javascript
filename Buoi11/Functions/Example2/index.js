var a = kiemTra("Moi nhap gia tri A: ");
var b = kiemTra("Moi nhap gia tri B: ");

// Call function or invoke
tinhTong(a, b);
tinhHieu(a, b);
tinhTich(a, b);
tinhThuong(a, b);

function kiemTra(thongBao) {
  var n;
  do {
    // Hàm built-in: parseInt, prompt
    n = parseInt(prompt(thongBao));
  }
  while(n <=0 )
  return n;
}

function tinhTong(x, y) {
  var Tong = x + y;

  alert("Result of Sum : " + Tong);
}

function tinhHieu(x, y) {
  var Hieu = x - y;

  alert("Result of Subtraction: " + Hieu);
}

function tinhTich(x, y) {
  var Tich = x * y;

  alert("Result of Multiple : " + Tich);
}

function tinhThuong(x, y) {
  var Thuong = x * 1.0 / y;

  alert("Result of Divide : " + Thuong);
}


