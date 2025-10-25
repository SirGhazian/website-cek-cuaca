# 🌦️ Cek Cuaca

Aplikasi web interaktif untuk menampilkan **informasi cuaca terkini**, **koordinat lokasi**, dan **berita cuaca dunia**.  
Dibangun menggunakan **Node.js**, **Express**, dan **Handlebars (HBS)** dengan data dari **Mapbox**, **Weatherstack**, dan **Mediastack API**.  
Website ini dibuat dalam rangka **pemenuhan Ujian Tengah Semester (UTS) Praktikum Pemrograman Jaringan** di **Universitas Negeri Padang**.

Live Demo: https://website-cek-cuaca.vercel.app/

---

## 【 🚀 Fitur Utama 】

- 🔍 Cari cuaca berdasarkan nama kota
- 🌡️ Tampilkan suhu, kelembaban, arah angin, tekanan udara, dan visibilitas
- 📍 Menampilkan koordinat lokasi (latitude & longitude) dari Mapbox
- 📰 Halaman berita cuaca dari Mediastack API
- 💬 Halaman Bantuan (FAQ) interaktif
- 🎨 Desain modern dan responsif dengan animasi ringan

---

## 【 🧩 Teknologi yang Digunakan 】

| Komponen                | Deskripsi                                 |
| ----------------------- | ----------------------------------------- |
| **Frontend**            | HTML, CSS, JavaScript (Fetch API)         |
| **Template Engine**     | Handlebars (HBS)                          |
| **Backend**             | Node.js + Express                         |
| **API Cuaca**           | [Weatherstack](https://weatherstack.com/) |
| **API Lokasi**          | [Mapbox](https://www.mapbox.com/)         |
| **API Berita**          | [Mediastack](https://mediastack.com/)     |
| **Server Port Default** | 4000                                      |

---

## 【 ⚙️ Instalasi dan Menjalankan Proyek 】

1. Clone repository ini:
   ```bash
   git clone https://github.com/USERNAME/cek-cuaca.git
   ```
2. Masuk ke folder proyek:
   ```bash
   cd cek-cuaca
   ```
3. Install semua dependensi:
   ```bash
   npm install
   ```
4. Jalankan server:
   ```bash
   node src/app.js
   ```
5. Buka browser dan akses:
   ```
   http://localhost:4000
   ```

---

## 【 💡 Cara Kerja Singkat 】

1. Pengguna memasukkan nama kota → aplikasi memanggil API Mapbox untuk mendapatkan koordinat.
2. Koordinat dikirim ke API Weatherstack untuk mengambil data cuaca terkini.
3. Data dikirim kembali ke browser dalam format JSON dan ditampilkan di halaman utama.
4. Halaman Berita menampilkan berita cuaca global dari API Mediastack.

---

## 【 📸 Tampilan Halaman 】

- **Beranda:** Form pencarian cuaca
- **Tentang:** Profil pengembang
- **Berita:** Daftar berita cuaca terbaru
- **Bantuan:** FAQ interaktif

---

## 【 📄 Informasi Dosen 】

<img align="left" width="160" src="https://github.com/SirGhazian/praktikum-struktur-data-UNP/assets/142916107/58bffcd0-9983-4a84-9fc6-857c625cb609">

**Randi Proska Sandra, S.Pd, M.Sc** </br>
`Lecturer in Informatics` </br></br>
Randi completed his graduate degree at the Graduate Institute of Network Learning Technology, National Central University, Taiwan. He is a lecturer in the Informatics Bachelor Program at Universitas Negeri Padang, with interests in learning analytics, UI/UX design, software engineering project management, AI-supported educational technologies, and educational data mining. He has training from Microsoft, INTEL, AWS, and the Python Institute, and is a Google Certified Educator and Adobe Creative Educator.

---

## 【 👨‍💻 Informasi Pengembang 】

Untuk bantuan dan pertanyaan, silahkan hubungi sosial media saya:
<img align="right" width="100" src="https://github.com/SirGhazian/praktikum-struktur-data-UNP/assets/142916107/b140fe43-3a57-4295-8493-79d929a5e3b0">

- [![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white)](https://instagram.com/ghazian_tza)
- [![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?logo=YouTube&logoColor=white)](https://www.youtube.com/channel/UCIp_064wQ8RqNSEy1asx_4w)
