# BÁO CÁO THỰC HÀNH CHƯƠNG 4: JAVASCRIPT
### HỌC PHẦN: PHÁT TRIỂN ỨNG DỤNG THƯƠNG MẠI ĐIỆN TỬ
**Trường:** Đại học Kinh tế TP. Hồ Chí Minh (UEH)  
**Giảng viên hướng dẫn:** TS. Nguyễn Mạnh Tuấn 

---

## 1. THÔNG TIN SINH VIÊN
* **Họ và tên:** Phạm Nguyễn Minh Trang
* **Mã số sinh viên (MSSV):** 31241024211
* **Lớp học phần:** 26C1ÌN50902702
* **GitHub Cá nhân:** [trangkth3012-ship-it](https://github.com/trangkth3012-ship-it)
* **GitHub Repository:** [https://github.com/trangkth3012-ship-it/BTVN-3](https://github.com/trangkth3012-ship-it/BTVN-3)

---

## 2. MỤC TIÊU THỰC HIỆN 03 BÀI LAB
Chuỗi bài thực hành JavaScript nhằm trang bị cho sinh viên năng lực xây dựng và phát triển các tính năng tương tác động trên nền tảng website thương mại điện tử:
* Nắm vững cú pháp nền tảng, các kiểu dữ liệu cơ sở, hàm và mô hình đối tượng trong JavaScript.
* Thành thạo kỹ thuật thao tác trực tiếp trên cây Document Object Model (DOM) và xử lý sự kiện người dùng (click, hover, focus, blur, submit).
* Xây dựng cơ chế kiểm tra tính hợp lệ của dữ liệu biểu mẫu (Form Validation) phục vụ quy trình đăng ký, đăng nhập và đặt hàng.
* Khai thác thư viện jQuery để tối ưu hóa cú pháp viết mã, xây dựng hiệu ứng hoạt ảnh sinh động và thực hiện giao tiếp bất đồng bộ (AJAX/GET Requests) với Web Service ngoài.

---

## 3. CẤU TRÚC THƯ MỤC DỰ ÁN
Toàn bộ mã nguồn của chuỗi bài thực hành được tổ chức khoa học bên trong thư mục `JavaScript-Labs/`:

```text
BTVN-3/
├── index.html                       # Trang chủ bài tập tuần 3 (gốc repo)
├── images/                          # Thư mục hình ảnh chung
└── JavaScript-Labs/                 # Thư mục bài thực hành JavaScript
    ├── README.md                    # File tài liệu mô tả bài thực hành
    ├── index.html                   # Trang chủ Portfolio điều hướng toàn bộ 3 bài Lab
    ├── css/
    │   └── style.css                # Tùy biến giao diện Responsive cho trang Portfolio
    ├── js/
    │   └── main.js                  # Kịch bản tương tác cho trang chủ
    │
    ├── Lab08/                       # Lab 08 - JavaScript 1: Language Foundations
    │   ├── index.html               # Menu danh mục các bài tập Lab 08
    │   ├── lab08-walkthrough02.html # Exercise 8.2 - 8.5 (Embedded, External JS, Console)
    │   ├── lab08-walkthrough06.html # Exercise 8.6 (String, Date, Math Objects)
    │   ├── lab08-walkthrough07.html # Exercise 8.7 (Arrays & Loop Calendar)
    │   ├── lab08-exercise08.html    # Exercise 8.8 (Functions & Scope)
    │   ├── lab08-exercise09.html    # Exercise 8.9 (Functions as Objects / Callbacks)
    │   ├── lab08-exercise10.html    # Exercise 8.10 (Objects & Constructor)
    │   ├── lab08-exercise11.html    # Exercise 8.11 (Arrays of Objects)
    │   ├── flags/                   # Thư mục hình ảnh cờ các quốc gia
    │   └── js/                      # Thư mục chứa các file mã nguồn .js tương ứng
    │
    ├── Lab09/                       # Lab 09 - JavaScript 2: DOM and Events
    │   ├── index.html               # Menu danh mục các bài tập Lab 09
    │   ├── lab09-walkthrough01.html # Exercise 9.1 (DOM Selection & Styles)
    │   ├── lab09-walkthrough02.html # Exercise 9.2 (DOM Family & Node Types)
    │   ├── lab09-walkthrough03.html # Exercise 9.3 (Modifying DOM Nodes)
    │   ├── lab09-walkthrough04.html # Exercise 9.4 (Simple Events & Hide/Show)
    │   ├── lab09-walkthrough05.html # Exercise 9.5 & 9.6 (Load Events & Debugging)
    │   ├── lab09-walkthrough07.html # Exercise 9.7 (Forms Focus & Blur)
    │   ├── lab09-walkthrough08.html # Exercise 9.8 (Form Validation)
    │   └── js/                      # Thư mục chứa các file mã nguồn .js tương ứng
    │
    └── Lab10/                       # Lab 10 - JavaScript 3: jQuery
        ├── index.html               # Menu danh mục các bài tập Lab 10
        ├── lab10-walkthrough01.html # Exercise 10.1 & 10.2 (Setup & Basic Selectors)
        ├── lab10-walkthrough03.html # Exercise 10.3 (Advanced Selectors)
        ├── lab10-walkthrough04.html # Exercise 10.4 (jQuery Event Listeners)
        ├── lab10-walkthrough05.html # Exercise 10.5 (Inserting DOM Elements)
        ├── lab10-walkthrough06.html # Exercise 10.6 (Fade & Slide Animations)
        ├── lab10-walkthrough07.html # Exercise 10.7 (Quick View Image Preview)
        ├── lab10-walkthrough08.html # Exercise 10.8 (Complex Animations Chaining)
        ├── lab10-walkthrough09.html # Exercise 10.9 (Asynchronous GET Requests)
        ├── lab10-walkthrough10.html # Exercise 10.10 (jqXHR Handling & Loading State)
        └── js/                      # Thư mục chứa các file mã nguồn .js tương ứng
```

---

## 4. MÔ TẢ NỘI DUNG TỪNG BÀI LAB

### 🔹 Lab 08: JavaScript 1 – Language Foundations
* **Exercise 8.1 - 8.5:** Kỹ thuật nhúng JavaScript (nội tuyến, file ngoài), sử dụng thẻ `<noscript>` khi tắt JS và kỹ năng quan sát biến, bắt lỗi và phân loại cấp độ log trên DevTools Console.
* **Exercise 8.6:** Phân biệt kiểu đối tượng String và kiểu nguyên thủy (`==` và `===`), khởi tạo đối tượng thời gian `Date` và áp dụng các hàm tính toán `Math`.
* **Exercise 8.7:** Thao tác thêm phần tử vào mảng với `push()`, `unshift()` và lặp tạo bảng lịch tự động.
* **Exercise 8.8 - 8.9:** Khảo sát phạm vi biến (Global vs Function scope), ứng dụng hàm dưới dạng đối tượng (Functions as Objects) và hàm ẩn danh làm tham số tính toán thuế giỏ hàng.
* **Exercise 8.10 - 8.11:** Xây dựng đối tượng với Constructor Function và duyệt mảng chứa danh sách các đối tượng dữ liệu để kết xuất giao diện trực quan.

### 🔹 Lab 09: JavaScript 2 – DOM and Events
* **Exercise 9.1 - 9.3:** Lựa chọn phần tử DOM bằng `querySelector`, `getElementById`, đọc/ghi thuộc tính, định dạng CSS, duyệt quan hệ phân cấp nút (`childNodes`) và tạo/xóa nút động trên trang.
* **Exercise 9.4:** Bắt sự kiện di chuột `mouseover`/`mouseout` đổi lớp giao diện và sự kiện click nút bấm để đóng/mở nội dung với độ trễ `setTimeout`.
* **Exercise 9.5 - 9.6:** Sử dụng sự kiện `load` để đồng bộ tải trang và thực hành kỹ thuật đặt điểm dừng (Breakpoint) để gỡ lỗi trên trình duyệt.
* **Exercise 9.7 - 9.8:** Tương tác với sự kiện biểu mẫu `focus`/`blur` đổi màu nền trường nhập liệu, ngăn chặn hành vi gửi mặc định (`e.preventDefault()`) và kiểm tra dữ liệu bỏ trống (Form Validation).

### 🔹 Lab 10: JavaScript 3 – jQuery
* **Exercise 10.1 - 10.5:** Tích hợp jQuery qua CDN, áp dụng các bộ chọn CSS nâng cao (`:nth-child`, `:contains`), liên kết chuỗi sự kiện chuột và thao tác chèn phần tử DOM (`append`, `prepend`, `after`, `before`).
* **Exercise 10.6 - 10.8:** Xây dựng các chuyển động hoạt ảnh (`fadeIn`, `fadeOut`, `slideToggle`), hiệu ứng xem nhanh phóng to ảnh sản phẩm (Quick View Popup) và chuỗi hiệu ứng `.animate()` đa thuộc tính.
* **Exercise 10.9 - 10.10:** Gửi yêu cầu `$.get()` bất đồng bộ đến Web Service lấy dữ liệu JSON, quản lý vòng đời yêu cầu bằng đối tượng `jqXHR` (`.done()`, `.fail()`, `.always()`) và quản lý trạng thái tải (Loading Spinner).

---

## 5. ĐƯỜNG DẪN TRIỂN KHAI GITHUB PAGES

Sản phẩm thực hành được triển khai trực tiếp trên nền tảng **GitHub Pages** tại các địa chỉ sau:

* 🌐 **Trang chủ JavaScript Labs Portfolio:**  
  [https://trangkth3012-ship-it.github.io/BTVN-3/JavaScript-Labs/](https://trangkth3012-ship-it.github.io/BTVN-3/JavaScript-Labs/)
* 📂 **Lab 08 – Language Foundations:**  
  [https://trangkth3012-ship-it.github.io/BTVN-3/JavaScript-Labs/Lab08/](https://trangkth3012-ship-it.github.io/BTVN-3/JavaScript-Labs/Lab08/)
* 📂 **Lab 09 – DOM and Events:**  
  [https://trangkth3012-ship-it.github.io/BTVN-3/JavaScript-Labs/Lab09/](https://trangkth3012-ship-it.github.io/BTVN-3/JavaScript-Labs/Lab09/)
* 📂 **Lab 10 – jQuery Library:**  
  [https://trangkth3012-ship-it.github.io/BTVN-3/JavaScript-Labs/Lab10/](https://trangkth3012-ship-it.github.io/BTVN-3/JavaScript-Labs/Lab10/)

---

## 6. HƯỚNG DẪN TRUY CẬP CÁC BÀI THỰC HÀNH

### Xem trực tiếp qua trình duyệt web 
1. Nhấp trực tiếp vào đường dẫn **[Trang chủ JavaScript Labs](https://trangkth3012-ship-it.github.io/BTVN-3/JavaScript-Labs/)**.
2. Trên giao diện Portfolio, người dùng có thể nhấp vào các thẻ bài tập:
   * **Xem bài Lab 08:** Dẫn đến danh mục và demo các Exercise từ 8.2 đến 8.11.
   * **Xem bài Lab 09:** Dẫn đến danh mục các bài thực hành DOM, xử lý sự kiện và Form Validation.
   * **Xem bài Lab 10:** Dẫn đến danh mục các hiệu ứng hoạt ảnh jQuery và gọi API bất đồng bộ.

