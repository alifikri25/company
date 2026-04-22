# Issue: Responsivitas Dashboard Admin & Fitur Minimize Sidebar

**Tingkat Kesulitan:** Junior / Menengah
**Tujuan:** Mengoptimalkan tampilan dashboard admin PT. Tangguh Jaya Semesta agar responsif di semua ukuran layar (Mobile, Tablet, Desktop) serta merapikan logika dan tampilan dari fitur minimize (collapse) sidebar.

## Konteks Saat Ini
Saat ini, komponen `AdminSidebar` dan `AdminMobileHeader` sudah dibuat, namun masih menggunakan manipulasi DOM secara langsung (seperti `document.querySelector(...)` dan manipulasi properti `style`) yang kurang sesuai dengan praktik terbaik React. Selain itu, tampilan grid di dalam dashboard admin (`admin-stats-grid` dan `admin-content-grid`) perlu disesuaikan agar rapi di layar yang lebih kecil. Banyak *inline styles* yang membuat kode sulit dikelola.

## Langkah-Langkah Pengerjaan

### 1. Refactor Logika Minimize Sidebar (Desktop)
*   **File Tujuan:** `components/AdminSidebar.tsx`
*   **Tugas:**
    *   Fitur *minimize/collapse* saat ini menggunakan state `isCollapsed` dan mencoba memanipulasi elemen `.admin-main` di DOM. 
    *   **Perbaikan:** Buat agar styling untuk `collapsed` lebih bertumpu pada class CSS dibandingkan *inline styles*. Pindahkan styling *inline* yang panjang ke dalam file CSS (misal `app/globals.css` atau CSS module khusus admin).
    *   Pastikan transisi saat sidebar mengecil atau membesar berjalan dengan mulus (smooth transition) dan lebar konten utama (`.admin-main`) menyesuaikan secara otomatis.

### 2. Perbaikan Toggle Sidebar Mobile
*   **File Tujuan:** `components/AdminMobileHeader.tsx` dan `components/AdminSidebar.tsx`
*   **Tugas:**
    *   Di `AdminMobileHeader.tsx`, hindari mengubah `style.transform` secara langsung via DOM (`sidebar.style.transform = ...`).
    *   **Perbaikan:** Gunakan pendekatan penambahan/penghapusan class (misalnya class `.mobile-open`). 
    *   Tambahkan elemen **Overlay** (lapisan gelap semi-transparan dengan `z-index` tinggi) yang muncul di belakang sidebar saat sidebar terbuka di mode mobile. Jika pengguna mengklik overlay ini, sidebar harus menutup.
    *   Gunakan transisi CSS untuk animasi buka-tutup sidebar (`transform: translateX(-100%)` ke `translateX(0)`).

### 3. Responsivitas Layout & Konten Dashboard
*   **File Tujuan:** `app/admin/dashboard/page.tsx` dan file CSS terkait.
*   **Tugas:**
    *   Pastikan `.admin-stats-grid` (kartu statistik) menggunakan struktur grid yang responsif:
        *   **Desktop:** 4 kolom
        *   **Tablet:** 2 kolom
        *   **Mobile:** 1 kolom
    *   Pastikan `.admin-content-grid` (Berita Terbaru dan Pesan Masuk) berubah dari 2 kolom menjadi 1 kolom di ukuran layar Tablet dan Mobile.
    *   Sesuaikan margin, padding, dan ukuran *font* (terutama judul H1) di mobile agar tidak memakan terlalu banyak ruang. Hindari menggunakan *inline style* untuk margin dan padding besar di kontainer utama.

### 4. Standarisasi Styling (Best Practice)
*   Kurangi penggunaan *inline styles* (`style={{ ... }}`) secara berlebihan pada komponen `AdminSidebar.tsx` dan `app/admin/dashboard/page.tsx`.
*   Pindahkan *styling* tersebut ke file CSS agar ukuran komponen lebih ringkas dan *media queries* dapat diterapkan dengan lebih mudah.

### 5. Pengujian di Berbagai Device
*   **Mobile (< 768px):** Header mobile terlihat, sidebar tersembunyi (bisa di-toggle), grid 1 kolom, font menyesuaikan.
*   **Tablet (768px - 1023px):** Header desktop/mobile disesuaikan, grid menyesuaikan, perhatikan apakah sidebar sebaiknya tetap terlihat atau tidak.
*   **Desktop (> 1024px):** Layout normal (Sidebar di kiri, konten utama di kanan). Tombol minimize sidebar berfungsi dengan baik (hanya menyisakan icon).

## Referensi File
- `components/AdminSidebar.tsx`
- `components/AdminMobileHeader.tsx`
- `app/admin/dashboard/page.tsx`

---
*Catatan untuk Programmer:* Jika membutuhkan state global untuk status sidebar, pertimbangkan untuk menggunakan React Context atau Zustand agar `AdminMobileHeader` dan `AdminSidebar` bisa berkomunikasi tanpa memanipulasi DOM secara langsung.
