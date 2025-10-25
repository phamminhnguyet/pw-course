// 1. Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng.
function multiply(a, b) {
    console.log(a * b);
}

console.log("In ra kết quả hảm multiply: ");
multiply(5, 10);

// 2. Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất.
function findMin(a, b, c) {
    return Math.min(a, b, c);
}

console.log("In hàm findMin: ");
const min1 = findMin(10, 5, 1);
console.log("Giá trị nhỏ nhất của (10, 5, 1 là: ", min1);

// 3. Viết hàm getTopStudents
function getTopStudents(students, threshold) {
    const topStudentsNames = [];
    for (const student of students) {
        if (student.score >= threshold) {
            topStudentsNames.push(student.name);
    }
}
return topStudentsNames;
}

const studentList = [
    {name: "An", score: 9},
    {name: "Bình", score: 8.2},
    {name: "Châu", score: 7.5},
    {name: "Đào", score: 8.8}
];

console.log("Gọi hàm getTopStudents (ngưỡng 8.5): ");
const topStudents = getTopStudents(studentList, 8.5);
console.log("Danh sách học sinh top: ", topStudents);

// 4. Viết hàm calculateInterest
function calculateInterest(principal, rate, years) {
    const total = principal + (principal * rate * years / 100);
  return total;
}

console.log("Gọi hàm calculateInterest: ");
const tongTien = calculateInterest(10000000, 5, 3);
console.log("Gửi 10,000,000 với lãi 5% trong 3 năm sẽ nhận được: " , tongTien);