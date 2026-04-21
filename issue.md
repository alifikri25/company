# Task: Optimalisasi Responsivitas (Responsive Design) Website PT. Tangguh Jaya Semesta

## Latar Belakang
Website saat ini sudah memiliki desain premium dan *glassmorphism* untuk resolusi desktop. Namun, untuk memastikan pengalaman pengguna yang sempurna di berbagai perangkat (Mobile, Tablet, Desktop), struktur *layouting* perlu dimodifikasi agar fully responsive. 

Tugas ini dirancang agar dapat dieksekusi secara terstruktur oleh Junior Programmer atau AI Assistant. Sebagian besar komponen saat ini menggunakan *inline styles* di React, sehingga perbaikan akan berfokus pada transisi *grid/flexbox* ke format *mobile-friendly* dan modifikasi ukuran teks/padding.

---

## 📋 Langkah-Langkah Pengerjaan

### 1. Standarisasi Media Queries (Persiapan CSS)
Pertama-tama, siapkan fondasi *responsive* di dalam file CSS global agar tidak perlu membuat *inline style* terlalu rumit.
- [ ] Buka file `app/globals.css`.
- [ ] Tambahkan konfigurasi Media Queries standar di bagian bawah file:
  ```css
  /* Mobile Devices (Portrait) */
  @media (max-width: 767px) {
    .hide-on-mobile { display: none !important; }
    .stack-on-mobile { flex-direction: column !important; }
    .grid-1-on-mobile { grid-template-columns: 1fr !important; }
    .section-padding-mobile { padding: 40px 16px !important; }
    .hero-title-mobile { font-size: 32px !important; }
  }

  /* Tablet Devices */
  @media (min-width: 768px) and (max-width: 1024px) {
    .grid-2-on-tablet { grid-template-columns: repeat(2, 1fr) !important; }
  }
  ```
  *(Catatan: Anda juga diizinkan mengubah inline styles menjadi kelas CSS biasa secara bertahap jika dirasa lebih baik daripada menggunakan `!important`)*.

### 2. Header & Navigasi (`components/Navbar.tsx`)
Menu utama akan hancur jika layar terlalu kecil. Kita perlu mengimplementasikan "Hamburger Menu".
- [ ] Implementasikan `useState` untuk mengatur state `isMobileMenuOpen` (true/false).
- [ ] Sembunyikan tautan menu utama (Home, Layanan, dll.) jika layar berada pada resolusi mobile (`max-width: 768px`), lalu ganti dengan *icon* hamburger (garis tiga).
- [ ] Buat *dropdown* atau *side menu* yang muncul jika *icon* hamburger diklik untuk menampilkan menu-menu tersebut.
- [ ] Pastikan tombol "Hubungi Kami" tetap responsif atau dipindahkan ke dalam menu *hamburger* pada versi mobile.

### 3. Halaman Beranda (`app/page.tsx`)
Halaman beranda memiliki grid yang saat ini dipaksa menjadi 2 kolom (atau lebih) di *inline styles*.
- [ ] **Hero Section:** Pastikan font judul utama menggunakan fungsi `clamp(...)` atau kelas CSS untuk mengecil di mobile. Ubah juga `flex-direction` kontainer dari horizontal menjadi vertikal pada perangkat mobile sehingga susunan teks pahlawan dan kotak statistik (50+, 5000+, dsb.) bertumpuk secara rapi.
- [ ] **Kartu Statistik:** Pastikan grid kartu statistik beradaptasi (misalnya 1 kolom pada mobile, 2 kolom di tablet).
- [ ] **Grid Daftar Layanan, Berita, & Partner:** Ubah definisi layout (seperti `gridTemplateColumns: "1fr 1fr"`) menjadi dinamis untuk perangkat yang lebih kecil agar jatuh menjadi vertikal (satu kolom `1fr`).

### 4. Skalabilitas Halaman Internal (Tentang Kami, Karir, Berita, Dll)
Banyak *padding* yang terlalu besar untuk layar HP.
- [ ] **app/tentang-kami/page.tsx:** Ubah layout foto profil direktur dan pesannya (`flex-direction: column` untuk mobile) dan kurangi padding (misal dari `48px` menjadi `24px`).
- [ ] **app/kontak/page.tsx:** Pada halaman kontak, buat form dan info alamat yang tadinya bersisian, menjadi bertumpuk vertikal dengan cara mengganti parameter `gridTemplateColumns` agar bersahabat dengan layar sempit.
- [ ] Cari semua elemen yang mendefinisikan *padding* statis yang besar (contoh `padding: '100px 24px'`) dan konversikan agar responsif.

### 5. Pengujian & Tweak Akhir (QA/Testing)
- [ ] Jalankan `npm run dev`.
- [ ] Gunakan fitur **Device Toolbar (F12)** di peramban (Chrome/Firefox/Edge) untuk melihat website pada berbagai resolusi (iPhone SE, iPad Air, dll).
- [ ] Lakukan scroll navigasi dan buka hamburger menu, pastikan tidak ada teks yang menembus keluar layar (overflow).

---

## Aturan Khusus (Guideline)
1. **Pertahankan Konsep '*Glassmorphism*':** Jika terpaksa menata ulang elemen (misalnya *box padding* diperkecil), *backdrop-filter: blur* dan *background transparan* tidak boleh hilang.
2. **Prioritaskan Keterbacaan (Legibility):** Gunakan fungsi bawaan CSS `clamp()` pada judul untuk memastikan ukuran responsif yang luwes antara PC dan Mobile.
3. **Penyatuan (Consistency):** Utamakan penambahan tag class (`className="stack-on-mobile"`) ke elemen-elemen yang sudah ada, ketimbang menulis script JavaScript rumit untuk mendeteksi `window.innerWidth`.
