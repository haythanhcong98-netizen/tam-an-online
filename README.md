# Tâm An – Website tụng kinh online

Website tĩnh responsive bằng HTML, CSS và JavaScript. Có thể xuất bản miễn phí bằng GitHub Pages.

## Chạy thử trên máy tính
1. Tải và giải nén `tam-an-website.zip`.
2. Mở thư mục, nhấp đúp `index.html` (hoặc dùng VS Code + Live Server).
3. Các mục đọc kinh, lọc tìm kiếm, lịch cá nhân và audio chọn từ máy có thể thử ngay.

## Đưa website lên GitHub Pages miễn phí
1. Đăng nhập GitHub và tạo repository mới, ví dụ `tam-an`.
2. Chọn Public, sau đó tải lên toàn bộ file trong thư mục này (`index.html`, `style.css`, `app.js`...).
3. Trong repository, mở **Settings → Pages**.
4. Ở **Build and deployment**, chọn **Deploy from a branch**.
5. Chọn branch `main`, thư mục `/(root)`, nhấn **Save**.
6. Đợi GitHub xuất bản. Địa chỉ thường có dạng `https://TEN-TAI-KHOAN.github.io/tam-an/`.

Mỗi lần cập nhật, tải file mới lên repository; GitHub Pages sẽ tự triển khai lại.

## Quan trọng: tài khoản và lưu lịch
Bản hiện tại là bản frontend khởi đầu:
- Tài khoản là **DEMO**: dữ liệu nằm trong `localStorage` của trình duyệt. Không dùng mật khẩu thật. Không có đồng bộ giữa người dùng/thiết bị.
- Lịch tụng cũng lưu trên trình duyệt hiện tại.
- Audio được chọn từ thiết bị và phát tại chỗ, không tải lên máy chủ.
- Nội dung kinh trong giao diện là phần giới thiệu/trích đoạn mẫu, chưa phải toàn văn kinh đã thẩm định.

Muốn website có tài khoản thật, đăng nhập an toàn và lịch đồng bộ cho cộng đồng, cần kết nối dịch vụ backend như Supabase.

## Kết nối Supabase (bước nâng cấp)
1. Tạo project tại https://supabase.com/ (gói miễn phí có giới hạn sử dụng).
2. Mở **Project Settings → API** và lấy Project URL cùng anon/public key.
3. Trong `index.html`, trước `app.js`, thêm thư viện Supabase JS v2:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
   ```
4. Tạo file cấu hình riêng `supabase-config.js`:
   ```js
   window.TAMAN_SUPABASE_URL = "https://YOUR-PROJECT.supabase.co";
   window.TAMAN_SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";
   ```
   Thêm file này trước `app.js`. Anon key có thể nằm ở frontend khi Row Level Security (RLS) được bật đúng; tuyệt đối không đưa `service_role` key lên GitHub.
5. Chạy nội dung `supabase-schema.sql` trong Supabase **SQL Editor**.
6. Sau đó cần thay phần tài khoản demo và lịch localStorage trong `app.js` bằng Supabase Auth và truy vấn bảng `chant_schedule`. Đừng coi tài khoản demo là đăng nhập thật.

## Nội dung và bản quyền
Chỉ đăng tải bản kinh, bản dịch, bài giảng và audio mà bạn có quyền sử dụng hoặc được phép chia sẻ. Ghi rõ dịch giả, ấn bản, nguồn và điều kiện sử dụng. Nội dung kinh nên được đối chiếu với ấn bản đáng tin cậy trước khi công bố rộng rãi.

## Tuỳ chỉnh hình ảnh
Ảnh nền hero hiện dùng ảnh từ Unsplash qua URL trong `style.css`. Khi triển khai chính thức, nên thay bằng ảnh có giấy phép phù hợp, tải về repository và dùng đường dẫn ảnh nội bộ để website không phụ thuộc nguồn ngoài.


## Bản nâng cấp: không gian chùa 3D (MVP thử nghiệm)
- Sân chùa 3D phong cách hoạt hình nhẹ, dựng bằng Three.js.
- Nhập tên hiển thị và điều khiển nhân vật bằng W/A/S/D hoặc phím mũi tên; điện thoại có nút điều hướng.
- Có thể kết nối Supabase Realtime để đồng bộ vị trí và danh sách người trong cùng một phòng.

### Bật phòng nhiều người
1. Tạo project Supabase.
2. Lấy **Project URL** và **anon/public key** trong Project Settings → API.
3. Mở website, vào **Chùa 3D → Kết nối phòng nhiều người**, dán hai giá trị và lưu.
4. Mở website ở hai thiết bị/trình duyệt khác nhau, nhập tên khác nhau và vào chùa.

Chỉ dùng anon/public key. Không bao giờ đưa `service_role` key lên GitHub.

**Giới hạn hiện tại:** tên nhân vật hiện là tên khách theo trình duyệt, chưa gắn với Supabase Auth; tài khoản demo cũ không phải tài khoản thật. Muốn mỗi tài khoản có một nhân vật bền vững cần bước tiếp theo: tích hợp Supabase Auth và bảng `player_profiles` liên kết `auth.users`, kèm chính sách RLS. Chưa có chat, giọng nói, phòng riêng, hoạt ảnh ngồi tụng kinh hay quản trị viên. Thư viện Three.js và Supabase tải từ CDN nên cần internet.
