# SỮA HẠT — Quản lý nguyên phụ liệu

Ứng dụng React/Vite responsive, giao diện xanh lá–kem, quản lý danh mục NPL, lô nhập, giá theo ngày, tồn kho FEFO và phiếu xuất theo ngày/mẻ sữa.

## Chạy local

```bash
npm install
npm run dev
```

Không có `.env.local`, app tự chạy bằng dữ liệu demo trong trình duyệt. Xóa key `sua-hat-demo` trong Local Storage để khôi phục dữ liệu mẫu.

## Kết nối Supabase

1. Tạo project, chạy `supabase/schema.sql` trong SQL Editor.
2. Bật Email/Password trong Authentication và tạo người dùng.
3. Copy `.env.example` thành `.env.local`, điền URL và **anon key**.
4. Không dùng `service_role` ở frontend. RPC `post_issue` và `reverse_issue` chịu trách nhiệm khóa lô, phân bổ FEFO và đảo giao dịch nguyên tử.

Schema bật RLS cho toàn bộ bảng. Phiếu nháp không tác động kho; ghi nhận mới trừ; đưa phiếu về nháp hoặc hủy sẽ hoàn lại đúng từng lô đã phân bổ.

## Dán Excel

Tại Phiếu xuất, copy hai cột `Mã NPL` và `Số lượng`, rồi dán vào ô nhập. App dò mã, lấy giá lô FEFO và tính thành tiền.

## GitHub Pages

Push nhánh `main`, vào **Settings → Pages → Source: GitHub Actions**. Tạo repository secrets `VITE_SUPABASE_URL` và `VITE_SUPABASE_ANON_KEY`; workflow sẽ build và deploy. `vite.config.js` dùng `base: './'` nên chạy được dưới project path.

## Kiểm tra

```bash
npm run lint
npm run build
```
