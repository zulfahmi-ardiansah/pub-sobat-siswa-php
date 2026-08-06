# Sobat Siswa

> Sistem Informasi Sekolah (SIS) berbasis web & REST API dengan sumber terbuka untuk mendukung digitalisasi ekosistem pendidikan di Indonesia. Dikembangkan sejak tahun 2019 oleh saya dan tim yang saya pimpin, konsep aplikasi ini berhasil meraih penghargaan Juara 3 (3rd Winner Smart School) pada SEACC Batch 3.

[English Version](README-EN.md) | **Bahasa Indonesia**

![Language](https://img.shields.io/badge/language-PHP-777BB4?style=flat-square&logo=php&logoColor=white)
![Framework](https://img.shields.io/badge/framework-Laravel_8-FF2D20?style=flat-square&logo=laravel&logoColor=white)
![Database](https://img.shields.io/badge/database-MySQL_8.0-4479A1?style=flat-square&logo=mysql&logoColor=white)
![Award](https://img.shields.io/badge/Award-3rd_Winner_SEACC_Batch_3_Smart_School-gold?style=flat-square)
![Version](https://img.shields.io/badge/version-1.0.0-blue?style=flat-square)
[![GitBook](https://img.shields.io/badge/Dokumentasi-GitBook-3884FF?style=flat-square&logo=gitbook&logoColor=white)](https://sobat-siswa.gitbook.io/sobat-siswa/)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

---

## Deskripsi Aplikasi

**Sobat Siswa** adalah platform Sistem Informasi Sekolah berbasis open-source yang dirancang untuk mengintegrasikan manajemen akademik, kedisiplinan siswa, e-Rapor, serta pendaftaran siswa baru secara digital. Dikembangkan pertama kali pada tahun 2019 oleh tim yang saya pimpin, konsep Sobat Siswa telah diakui dengan meraih **Juara 3 (3rd Winner Smart School)** pada ajang **SEACC Batch 3**. Platform ini mendukung multi-tenant (multi-sekolah) dan memisahkan hak akses antara **Portal Guru/Admin** dan **Portal Siswa**, serta dilengkapi dengan **REST API** untuk integrasi ke aplikasi mobile atau sistem eksternal.

---

## Tautan Resmi & Dokumentasi

- **Dokumentasi Resmi GitBook**: [https://sobat-siswa.gitbook.io/sobat-siswa/](https://sobat-siswa.gitbook.io/sobat-siswa/)
- **Instagram Resmi**: [@sobatsiswa.id](https://www.instagram.com/sobatsiswa.id/)

---

## Fitur & Modul Utama

### 1. Portal Admin & Guru
- **Manajemen Master Data**:
  - **Sekolah**: Pengaturan identitas dan profil sekolah.
  - **Kelas & Rombel**: Pengelolaan tingkat kelas dan kelompok belajar (rombel).
  - **Mata Pelajaran**: Pengelolaan daftar mata pelajaran akademik.
  - **Ekstrakurikuler**: Pengelolaan daftar kegiatan ekstrakurikuler.
  - **Data Siswa**: Direktori siswa lengkap dengan biodata, orang tua/wali, foto, NIS/NISN, serta status aktif/alumni.
  - **Data Guru & Staf**: Pengelolaan direktori tenaga pendidik.
  - **Data Alumni**: Pengarsipan data lulusan/alumni.
  - **Tata Tertib & Point Rules**: Katalog poin pelanggaran dan penghargaan/prestasi.
- **Sikap & Kedisiplinan**:
  - **Penghargaan & Prestasi**: Pencatatan capaian dan trophy siswa.
  - **Pelanggaran**: Pencatatan pelanggaran tata tertib beserta pengurangan poin kedisiplinan.
  - **Bimbingan Konseling / BK**: Pengelolaan agenda dan catatan konseling siswa.
  - **Statistik Pelanggaran**: Analisis dan grafik rekapitulasi tingkat kedisiplinan.
- **Kegiatan Belajar Mengajar & Akademik**:
  - **Pengumuman**: Penyiaran informasi resmi sekolah ke siswa.
  - **E-Rapor & Laporan Nilai**: Penginputan dan pencetakan laporan nilai akademik dan ekstrakurikuler.

### 2. Portal Siswa
- **Dashboard Siswa**: Ringkasan status akademik, akumulasi poin prestasi/pelanggaran, dan pengumuman terbaru.
- **Biodata Siswa**: Informasi profil pribadi dan data orang tua/wali.
- **Kedisiplinan**: Transparansi riwayat prestasi, catatan pelanggaran, dan riwayat bimbingan konseling.
- **Akademik & Pengumuman**: Akses ke pengumuman sekolah dan pengunduhan e-Rapor.

### 3. Modul Pendaftaran / PPDB
- Alur pendaftaran mandiri calon siswa baru yang terbagi menjadi beberapa tahapan:
  - **Langkah 1**: Pemilihan sekolah target & identitas dasar.
  - **Langkah 2**: Pengisian biodata lengkap siswa & orang tua/wali.
  - **Final & Finish**: Peninjauan data dan konfirmasi pendaftaran.

### 4. REST API & Dokumentasi Swagger
- Endpoint autentikasi siswa dan profil.
- Endpoint catatan prestasi, pelanggaran, dan bimbingan konseling.
- Dokumentasi terintegrasi dengan **Swagger UI**.

---

## Struktur Direktori Proyek

```text
personal-sobat-siswa-php/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── Application/   # Controller untuk aplikasi web (Teacher & Student)
│   │   │   └── Rest/          # Controller untuk REST API (Mobile/External)
│   │   └── Middleware/        # Middleware autentikasi (auth.teacher, auth.student, rest.student)
│   └── Models/                # Eloquent Models (Adm*, Beh*, Kbm*)
├── config/                    # Konfigurasi aplikasi Laravel
├── database/
│   ├── migrations/            # Skema migrasi basis data
│   └── seeders/               # Database seeder
├── public/                    # Web root & aset statis (CSS, JS, media)
├── resources/
│   └── views/                 # Blade templates (application, applicationst, login, registration)
├── routes/
│   ├── web.php                # Rute aplikasi web
│   └── api.php                # Rute REST API & Swagger UI
├── docker-compose.yml         # Konfigurasi Docker Sail (Laravel Sail)
└── composer.json              # Dependensi PHP & paket eksternal
```

---

## Arsitektur & Model Basis Data

Sobat Siswa menggunakan skema database MySQL dengan konvensi penamaan tabel berikut:
- **`adm_*`**: Tabel administrasi utama (`adm_school`, `adm_class`, `adm_class_group`, `adm_subject`, `adm_subject_ex`, `adm_student`, `adm_teacher`, `adm_alumn`, `adm_rule`, `adm_token`).
- **`beh_*`**: Tabel kedisiplinan dan perilaku (`beh_trophy`, `beh_violation`, `beh_counseling`).
- **`kbm_*`**: Tabel kegiatan belajar mengajar (`kbm_announcement`, `kbm_report`, `kbm_report_det`, `kbm_report_det_ex`).

---

## Getting Started

### Prasyarat Sistem

- **PHP**: `>= 7.3` atau `>= 8.0`
- **Composer**: `>= 2.0`
- **MySQL**: `>= 5.7` atau `>= 8.0`
- *(Opsional)* **Docker & Docker Compose** (jika ingin menggunakan Laravel Sail)

---

### Opsi 1: Instalasi Lokal Manual

1. **Clone repositori**:
   ```bash
   git clone https://github.com/zulfahmi-ardiansah/pub-sobat-siswa-php.git
   cd personal-sobat-siswa-php
   ```

2. **Install dependensi PHP via Composer**:
   ```bash
   composer install
   ```

3. **Salin file konfigurasi lingkungan (.env)**:
   ```bash
   cp .env.example .env
   ```

4. **Generate Application Key**:
   ```bash
   php artisan key:generate
   ```

5. **Konfigurasi Database di `.env`**:
   Sesuaikan kredensial koneksi database MySQL Anda:
   ```ini
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=sobatedu
   DB_USERNAME=root
   DB_PASSWORD=
   ```

6. **Jalankan Migrasi Database**:
   ```bash
   php artisan migrate
   ```

7. **Jalankan Server Pengembang (Development Server)**:
   ```bash
   php artisan serve
   ```
   Aplikasi akan berjalan di `http://localhost:8000`.

---

### Opsi 2: Instalasi Menggunakan Docker (Laravel Sail)

Aplikasi ini sudah dilengkapi konfigurasi Docker Sail (`docker-compose.yml`):

1. **Jalankan Container Docker**:
   ```bash
   ./vendor/bin/sail up -d
   ```

2. **Jalankan Migrasi di dalam Container**:
   ```bash
   ./vendor/bin/sail artisan migrate
   ```

3. Akses aplikasi melalui `http://localhost`.

---

## Penggunaan & Akses Rute

### Rute Utama Web:

- **Login Siswa**: `http://localhost:8000/login-student`
- **Login Guru/Admin**: `http://localhost:8000/login-teacher`
- **Portal Admin/Guru**: `http://localhost:8000/dashboard` *(memerlukan autentikasi guru)*
- **Portal Siswa**: `http://localhost:8000/stdashboard` *(memerlukan autentikasi siswa)*
- **Pendaftaran Siswa Baru**: `http://localhost:8000/registration`
- **Dokumentasi REST API**: `http://localhost:8000/api/swagger-ui`
- **Dokumentasi GitBook**: `https://sobat-siswa.gitbook.io/sobat-siswa/`

---

## Pengujian / Testing

Jalankan pengujian menggunakan PHPUnit:

```bash
php artisan test
# atau
./vendor/bin/phpunit
```

---

## Lisensi

Proyek ini dilesensikan di bawah [MIT License](LICENSE).