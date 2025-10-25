// 1. Tạo object car và in ra năm sản xuất
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};
console.log("Năm sản xuất của xe: ", car.year);


// 2. Tạo object person và in ra tên đường
const person = {
    name: "Nguyen Van A",
    address: {
        street: "123 Street ABC",
        city: "Ho Chi Minh",
        country: "Vietnam"
  }
};
console.log("Tên đường: ", person.address.street);

// 3. Tạo object student và truy cập điểm toán bằng ngoặc vuông
const student = {
    name: "Nguyen Thi B",
    grades: {
        math: 9,
        english: 8
  }
};
console.log("Điểm môn toán: ", student.grades["math"]);

// 4. Tạo object settings, thay đổi volume và in ra object
const settings = {
    volume: 50,
    brightness: 75
};

settings.volume = 80;
console.log("Settings sau khi thay đổi: ", settings);

// 5. Tạo object bike và thêm thuộc tính color
const bike = {
    make: "Yamaha",
    type: "Scooter"
};

bike.color = "red";
console.log("Bike sau khi thêm màu: ", bike);

// 6. Tạo object employee và xóa thuộc tính age
const employee = {
    name: "Le Van C",
    age: 30
};

delete employee.age;
console.log("Employee sau khi xóa tuổi: ", employee);

// 7. Tạo object school với các lớp học
const school = {
  classA: ["An", "Bình", "Châu"],
  classB: ["Đào", "Hương", "Giang"]
};
