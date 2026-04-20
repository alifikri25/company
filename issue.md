# Modifikasi Konten Layanan PT Prima Abadi

## Deskripsi Masalah (Issue)
Berdasarkan arahan terbaru, portofolio bisnis dan layanan (Lini Bisnis) PT Prima Abadi disederhanakan dan dibatasi hanya pada dua sektor utama:
1. **Penyewaan Kendaraan** (Armada Korporat/Fleet)
2. **Peralatan IT & Furnitur Penunjang**

Layanan ketiga, yaitu **Layanan Pengemudi Profesional / Managed Facilities (Jasa SDM)**, serta **Penjualan Bekas (Used Car)** harus dihapus dari seluruh struktur website.

## Area yang Terdampak (To-Do List)

Perubahan ini membutuhkan modifikasi pada beberapa komponen dan halaman utama untuk memastikan konsistensi informasi:

### 1. Navigasi & Tata Letak (`app/layout.js`)
- [ ] **Navbar Dropdown**: Hapus link `Layanan SDM` pada dropdown menu *Layanan & Solusi*.
- [ ] **Mega Footer**: Pada kolom *Lini Bisnis*, hapus tautan ke `Jasa Pengemudi Profesi` dan `Penjualan Bekas (Used Car)`.

### 2. Halaman Layanan Utama (`app/layanan/page.js`)
- [ ] Hapus seluruh blok *section* untuk **Layanan Pengemudi Profesional / Services & Managed Facilities** (elemen dengan ID `#driver`).
- [ ] (Opsional) Sesuaikan porsi/lebar visual antara *section* Penyewaan Kendaraan dan Peralatan IT jika diperlukan agar halaman tidak terlihat kosong.

### 3. Halaman Beranda (`app/page.js`) - Jika ada
- [ ] Jika terdapat bagian *Services Grid* atau *Highlights* di halaman utama yang menampilkan *Layanan Pengemudi* / *Managed Facilities*, elemen tersebut harus dihapus.
- [ ] Perbarui teks pengantar lini bisnis dari "tiga pilar" menjadi "dua lini operasional utama" (jika eksis).

## Catatan Eksekusi
- Pastikan tidak ada *broken link* (tautan mati) akibat penghapusan *anchor* `#driver`.
- Penggantian ini bersifat penghapusan baris kode (*content trimming*), tidak akan merusak gaya desain (Patra Jasa-style) yang telah diimplementasikan sebelumnya.

---

*Silakan berikan instruksi lebih lanjut jika modifikasi ini dapat langsung dieksekusi atau jika ada detail revisi redaksional lainnya sebelum diimplementasikan ke dalam *branch/commit*.*
