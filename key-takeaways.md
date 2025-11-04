1. JavaScript - Function Nâng cao:
Function Expression: Là cách định nghĩa hàm bằng cách gán nó cho một biến (ví dụ: const add = function(a, b) {...}).
Lambda Function (Arrow Function): Là cú pháp viết hàm ngắn gọn hơn, sử dụng dấu => (ví dụ: const add = (a, b) => a + b;).
Anonymous Function (Hàm ẩn danh): Là hàm không có tên, thường được gán cho biến hoặc dùng làm hàm callback (hàm được gọi lại sau một tác vụ khác).

2. DOM (Document Object Model):
Khái niệm: DOM là cách máy tính "nhìn" một trang web dưới dạng một "cây cấu trúc" (cây DOM). Bạn có thể xem cấu trúc này bằng cách nhấn F12 (Inspect) và chọn tab "Element".

Thuật ngữ quan trọng:
Element (Phần tử): Toàn bộ một khối, ví dụ: <option value="usa">United States</option>.
Tag (Thẻ): Tên của phần tử, ví dụ: <option>.
Attribute (Thuộc tính): Đặc tính của thẻ, ví dụ: value.
Value (Giá trị thuộc tính): Giá trị của thuộc tính, ví dụ: "usa".
Text: Nội dung văn bản nằm giữa thẻ mở và thẻ đóng, ví dụ: "United States".
Các thẻ Form (Quan trọng cho Test): <input>, <button>, <select>, <option>, <textarea>.

3. Selector (Bộ chọn):
Khái niệm: Là "công cụ" giúp ta tìm các phần tử (elements) trên trang web để thực hiện tương tác (như click, điền chữ...).

3 loại Selector chính:
XPath: Rất linh hoạt, dùng được trong 99% trường hợp, hơi dài. (ví dụ: //button[@id="login"]). Nên dùng XPath Tương đối (bắt đầu bằng //).
CSS Selector: Ngắn gọn, hiệu năng cao, nhưng ít linh hoạt hơn XPath.
Playwright Selector: Dành riêng cho Playwright, cú pháp ngắn gọn, mô phỏng cách người dùng nhìn trang web (ví dụ: page.getByText("Đăng nhập")).
Thứ tự ưu tiên (khuyến nghị): Playwright Selector > CSS Selector > XPath.

4. Cú pháp cơ bản của Playwright:
Cấu trúc test: Sử dụng test('tên test', ...) để định nghĩa một test case.
Cấu trúc step: Sử dụng await test.step('tên bước', ...) để chia nhỏ test case thành các bước.
Các lệnh tương tác chính:
await page.goto('...'): Đi đến một trang web.
page.locator('<selector>'): Tìm một phần tử (dùng XPath, CSS, hoặc Playwright selector).
.click(): Nhấn vào phần tử.
.fill('...'): Điền nhanh text vào ô input (giống như paste).
.pressSequentially('...'): Gõ text vào ô input (giống gõ phím).
.check() / .uncheck(): Tích/bỏ tích checkbox, radio.
.selectOption(...): Chọn giá trị trong dropdown (<select>).
.setInputFiles(...): Upload file.