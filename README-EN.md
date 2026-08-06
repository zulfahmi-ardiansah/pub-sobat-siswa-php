# Sobat Siswa

> An open-source web & REST API School Information System (SIS) designed to empower the digitalization of the education ecosystem in Indonesia. Developed since 2019 by me and the team I led, the concept for this application won 3rd Winner Smart School at SEACC Batch 3.

**English** | [Bahasa Indonesia](README.md)

![Language](https://img.shields.io/badge/language-PHP-777BB4?style=flat-square&logo=php&logoColor=white)
![Framework](https://img.shields.io/badge/framework-Laravel_8-FF2D20?style=flat-square&logo=laravel&logoColor=white)
![Database](https://img.shields.io/badge/database-MySQL_8.0-4479A1?style=flat-square&logo=mysql&logoColor=white)
![Award](https://img.shields.io/badge/Award-3rd_Winner_SEACC_Batch_3_Smart_School-gold?style=flat-square)
![Version](https://img.shields.io/badge/version-1.0.0-blue?style=flat-square)
[![GitBook](https://img.shields.io/badge/Documentation-GitBook-3884FF?style=flat-square&logo=gitbook&logoColor=white)](https://sobat-siswa.gitbook.io/sobat-siswa/)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

---

## Application Overview

**Sobat Siswa** is an open-source School Information System platform engineered to integrate academic management, student discipline tracking, e-Report cards, and new student admission digitally. First developed in 2019 by the team I led, the Sobat Siswa concept was recognized as the **3rd Winner Smart School** at **SEACC Batch 3**. The platform supports multi-tenant (multi-school) architecture and separates access roles between the **Teacher/Admin Portal** and the **Student Portal**, alongside a comprehensive **REST API** for mobile application or external system integrations.

---

## Official Links & Documentation

- **Official GitBook Documentation**: [https://sobat-siswa.gitbook.io/sobat-siswa/](https://sobat-siswa.gitbook.io/sobat-siswa/)
- **Official Instagram**: [@sobatsiswa.id](https://www.instagram.com/sobatsiswa.id/)

---

## Key Features & Modules

### 1. Admin & Teacher Portal
- **Master Data Management**:
  - **School**: Configure school identity and profile settings.
  - **Classes & Class Groups**: Manage grade levels and class sections/rombel.
  - **Subjects**: Manage academic subjects catalog.
  - **Extracurriculars**: Manage extracurricular activities catalog.
  - **Student Registry**: Complete student directory with personal info, parent/guardian details, photos, NIS/NISN, and active/alumni status.
  - **Teacher & Staff Directory**: Manage teaching and administrative personnel directory.
  - **Alumni Archive**: Archive graduated student records.
  - **Rules & Point Systems**: Catalog for disciplinary violation points and achievement awards.
- **Behavior & Discipline**:
  - **Awards & Achievements**: Record student trophies, accomplishments, and merit points.
  - **Violations**: Log code-of-conduct violations and deduct discipline points.
  - **Counseling (BK)**: Schedule and manage student counseling records.
  - **Violation Statistics**: Analytics and graphical reports on school-wide discipline metrics.
- **Teaching & Learning (KBM) & Academics**:
  - **Announcements**: Broadcast official school notifications to students.
  - **E-Report & Grade Cards**: Input grades and export/print academic and extracurricular report cards.

### 2. Student Portal
- **Student Dashboard**: Overview of academic status, cumulative achievement/violation points, and latest announcements.
- **Student Profile**: View personal biodata and parent/guardian contact information.
- **Discipline Transparency**: View personal achievement history, violation records, and counseling history.
- **Academics & Announcements**: Access school announcements and download e-Report cards.

### 3. Student Registration / PPDB Module
- Self-service online registration pipeline for prospective new students divided into distinct steps:
  - **Step 1**: Target school selection & basic identity info.
  - **Step 2**: Detailed student & parent/guardian biodata.
  - **Final & Finish**: Application review and submission confirmation.

### 4. REST API & Swagger Documentation
- Student authentication & profile API endpoints.
- Achievement, violation, and counseling endpoints.
- Fully integrated documentation via **Swagger UI**.

---

## Project Directory Structure

```text
personal-sobat-siswa-php/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── Application/   # Web application controllers (Teacher & Student)
│   │   │   └── Rest/          # REST API controllers (Mobile/External)
│   │   └── Middleware/        # Authentication middlewares (auth.teacher, auth.student, rest.student)
│   └── Models/                # Eloquent Models (Adm*, Beh*, Kbm*)
├── config/                    # Laravel application configuration
├── database/
│   ├── migrations/            # Database schema migrations
│   └── seeders/               # Database seeders
├── public/                    # Web root & static assets (CSS, JS, media)
├── resources/
│   └── views/                 # Blade templates (application, applicationst, login, registration)
├── routes/
│   ├── web.php                # Web routes
│   └── api.php                # REST API routes & Swagger UI
├── docker-compose.yml         # Docker Sail configuration (Laravel Sail)
└── composer.json              # PHP dependencies & packages
```

---

## Architecture & Database Models

Sobat Siswa uses a structured MySQL database schema following these table prefix conventions:
- **`adm_*`**: Core administration tables (`adm_school`, `adm_class`, `adm_class_group`, `adm_subject`, `adm_subject_ex`, `adm_student`, `adm_teacher`, `adm_alumn`, `adm_rule`, `adm_token`).
- **`beh_*`**: Student discipline and behavior tables (`beh_trophy`, `beh_violation`, `beh_counseling`).
- **`kbm_*`**: Teaching and learning academic tables (`kbm_announcement`, `kbm_report`, `kbm_report_det`, `kbm_report_det_ex`).

---

## Getting Started

### System Prerequisites

- **PHP**: `>= 7.3` or `>= 8.0`
- **Composer**: `>= 2.0`
- **MySQL**: `>= 5.7` or `>= 8.0`
- *(Optional)* **Docker & Docker Compose** (if using Laravel Sail)

---

### Option 1: Manual Local Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/zulfahmi-ardiansah/pub-sobat-siswa-php.git
   cd personal-sobat-siswa-php
   ```

2. **Install PHP dependencies via Composer**:
   ```bash
   composer install
   ```

3. **Copy environment configuration (.env)**:
   ```bash
   cp .env.example .env
   ```

4. **Generate Application Key**:
   ```bash
   php artisan key:generate
   ```

5. **Configure Database in `.env`**:
   Adjust your MySQL database credentials:
   ```ini
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=sobatedu
   DB_USERNAME=root
   DB_PASSWORD=
   ```

6. **Run Database Migrations**:
   ```bash
   php artisan migrate
   ```

7. **Start Development Server**:
   ```bash
   php artisan serve
   ```
   The application will run at `http://localhost:8000`.

---

### Option 2: Docker Installation (Laravel Sail)

This application includes Docker Sail configuration (`docker-compose.yml`):

1. **Start Docker Containers**:
   ```bash
   ./vendor/bin/sail up -d
   ```

2. **Run Migrations inside Container**:
   ```bash
   ./vendor/bin/sail artisan migrate
   ```

3. Access the application at `http://localhost`.

---

## Usage & Route Access

### Primary Web Routes:

- **Student Login**: `http://localhost:8000/login-student`
- **Teacher/Admin Login**: `http://localhost:8000/login-teacher`
- **Admin/Teacher Portal**: `http://localhost:8000/dashboard` *(requires teacher auth)*
- **Student Portal**: `http://localhost:8000/stdashboard` *(requires student auth)*
- **New Student Registration**: `http://localhost:8000/registration`
- **REST API Documentation**: `http://localhost:8000/api/swagger-ui`
- **GitBook Documentation**: `https://sobat-siswa.gitbook.io/sobat-siswa/`

---

## Testing

Run unit & feature tests using PHPUnit:

```bash
php artisan test
# or
./vendor/bin/phpunit
```

---

## License

This project is licensed under the [MIT License](LICENSE).
