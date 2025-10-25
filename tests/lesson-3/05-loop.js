// 1. Tính tổng từ 1 đến 100
let tongTu1Den100 = 0;
for (let i = 1; i <= 100; i++) {
    tongTu1Den100 += i;
}
console.log("Tổng từ 1 đến 100 là: ", tongTu1Den100);

// 2. In bảng cửu chương từ 2 đến 9
for (let i = 2; i <= 9; i++) {
    console.log("Bảng cửu chương " + i);
    for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
};

// 3. Tạo một mảng chứa các số lẻ từ 1 đến 99
const mangSoLe = [];
for (let i = 1; i <= 99; i += 2) {
    mangSoLe.push(i);
}
console.log("Mảng số lẻ từ 1 đến 99:", mangSoLe);

// 4. In ra 10 email dựa trên tên người dùng và số thứ tự
console.log("Danh sách 10 email: ");
for (let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`);
};

// 5. Tính tổng doanh thu của 12 tháng
const revenueData = [
    {month: 1, total: 100},
    {month: 2, total: 110},
    {month: 3, total: 150},
    {month: 4, total: 130},
    {month: 5, total: 120},
    {month: 6, total: 160},
    {month: 7, total: 140},
    {month: 8, total: 170},
    {month: 9, total: 180},
    {month: 10, total: 200},
    {month: 11, total: 190},
    {month: 12, total: 220}
];

let tongDoanhThu = 0;
for (const month of revenueData) {
  tongDoanhThu += month.total;
}
console.log("Tổng doanh thu 12 tháng là:", tongDoanhThu);