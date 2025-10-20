1. Git & Version Control System (VCS)
1.1. VCS (Hệ thống quản lý phiên bản):
Giúp xem lịch sử thay đổi (ai, cái gì, khi nào).
Cho phép quay lại phiên bản cũ (restore).

1.2. Các loại VCS:
Local: Lưu ở máy cá nhân.
Centralized: Lưu ở một máy chủ tập trung.
Distributed (DVCS): Lưu ở nhiều máy khác nhau; đây là loại phổ biến nhất hiện nay.

1.3. Git:
Là một DVCS.
Do Linus Torvalds (cha đẻ Linux) tạo ra.
Hiện là DVCS phổ biến nhất thế giới.

1.4. Git vs. GitHub:
Git: Là phần mềm , command line tool , được cài trên máy của bạn.
GitHub: Là dịch vụ web , có giao diện , là nơi để host (chứa) Git repository.

1.5. 3 Trạng thái (Three States) của Git:
Working Directory: Chứa file mới hoặc file đã thay đổi.
Staging Area: Vùng chuẩn bị commit.
Repository: Nơi chứa các commit (phiên bản).

1.6. Luồng làm việc cơ bản:
git add: Chuyển file từ Working Directory -> Staging Area.
git commit: Chuyển file từ Staging Area -> Repository.

1.7. Các lệnh Git quan trọng:
git config --global user...: Cấu hình "danh tính" (bắt buộc để commit).
git init: Khởi tạo repo local.
git status: Xem trạng thái file (file màu đỏ ở working directory , file màu xanh ở staging ).
git commit -m "<message>": Tạo một phiên bản mới (commit).
git remote add origin <url>: Kết nối repo local với repo trên GitHub.
git push origin main: Đẩy code (các commit) lên GitHub.
git log: Xem lịch sử commit.

1.8. Commit Convention (Quy tắc commit):
Giúp team làm việc nhất quán , chuyên nghiệp hơn.
Cú pháp: <type>: <short_description>.
Ví dụ type: feat (thêm tính năng) , fix (sửa lỗi) , chore (sửa nhỏ lẻ, xóa file).


2. JavaScript Basic
2.1. JavaScript (JS):
Là một ngôn ngữ lập trình.
Ra đời năm 1995 bởi Brendan Eich.
Được ví là "bộ não" (Brain) của website (HTML là khung xương , CSS là da ).

2.2. Môi trường chạy JS:
Trình duyệt (Browser): Chạy được nhờ các engine như V8 (Chrome) , SpiderMonkey (Firefox).
Ngoài trình duyệt (trên máy): Cần dùng NodeJS.

2.3. Cú pháp cơ bản:
Hello World: Dùng console.log("nội dung");.
Chạy file: Dùng lệnh node <tên file> (hoặc node <đường dẫn tới file> ).
Comment (Vô hiệu hóa code): 
Comment 1 dòng: Dùng //.
Comment nhiều dòng: Bắt đầu bằng /* và kết thúc bằng */.

2.4. Biến (Variables) & Hằng (Constants):
Biến: Là giá trị có thể thay đổi. Dùng từ khóa let (cú pháp hiện đại, an toàn ) hoặc var (cú pháp cũ, ít dùng ).
Hằng: Là giá trị không thay đổi. Dùng từ khóa const.
Quy tắc sử dụng: Mặc định dùng const. Chỉ dùng let khi chắc chắn cần gán lại giá trị. Không dùng var.

2.5. Kiểu dữ liệu (Data Types): 
Primitive (Nguyên thủy): Number (dùng cho cả số nguyên và số thực) , String (chuỗi ký tự) , Boolean (giá trị logic true/false) , Null , Undefined , Symbol , BigInt.
Reference (Tham chiếu): Object.
Kiểm tra kiểu dữ liệu: Dùng typeof <variable>.

2.6. Toán tử (Operators):
Toán tử so sánh: Dùng để so sánh 2 toán hạng, kết quả trả về là boolean.
== (Loose Equality): Chỉ so sánh giá trị (có chuyển đổi kiểu).
=== (Strict Equality): So sánh cả giá trị VÀ kiểu dữ liệu.

Khuyến nghị: Luôn dùng ===.

Các toán tử khác: != , !==, >, <, >= , <=.
Toán tử logic: Dùng để kết hợp nhiều điều kiện.
&& (AND): Trả về true nếu cả hai vế đều true.
|| (OR): Trả về true nếu một trong hai vế là true.
Toán tử toán học: Gồm +, -, *, /.
Toán tử một ngôi: Là toán tử chỉ cần một toán hạng.
++x (Prefix): Tăng giá trị trước, rồi trả về giá trị.
x++ (Postfix): Trả về giá trị trước, rồi mới tăng giá trị.

2.7. Câu điều kiện (Conditional):
Mục đích: Dùng để kiểm tra một đoạn logic, chỉ chạy code bên trong nếu điều kiện đúng.
Các loại: if , if...else , if...else if...else , switch...case.
Cú pháp if cơ bản: if (<điều kiện>) { // code... }.

2.8. Vòng lặp (Loop):
Mục đích: Dùng để lặp lại 1 đoạn logic.
Các loại: for (i) , for (of) , for (each) , for (in) , while , do...while.
Cú pháp for (i): for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>) { ... }.
Điều kiện khởi tạo: Chạy một lần duy nhất khi bắt đầu.
Điều kiện lặp: Kiểm tra trước mỗi vòng lặp, nếu true thì chạy, false thì dừng.
Cập nhật: Chạy vào cuối mỗi vòng lặp.