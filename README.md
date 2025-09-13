# gaxtawu - Useless WhatsApp Bot

> [!WARNING]
>
> `gaxtawu` **tidak berafiliasi dengan WhatsApp, Meta, atau pihak terkait mana pun**. Ini adalah **proyek sumber terbuka** yang dibuat untuk tujuan edukasi dan pengembangan.
>
> Bot ini menggunakan **API WhatsApp tidak resmi**, yang berarti **akun WhatsApp Anda berpotensi diblokir**.
>
> Gunakan dengan bertanggung jawab dan risiko Anda sendiri. Kami **tidak bertanggung jawab atas penyalahgunaan atau kerusakan** yang diakibatkan dari penggunaan proyek ini.

## 🚀 Getting Started

Ikuti langkah-langkah ini untuk menyiapkan dan menjalankan `gaxtawu`:

### 1. Clone Repository

Klon repositori dan navigasi ke direktori proyek:

```bash
git clone https://github.com/itsreimau/gaxtawu.git
cd gaxtawu
```

### 2. Install Dependencies

Instal semua dependensi yang diperlukan:

```bash
npm install
```

### 3. Configuration

Ubah nama `config.example.js` menjadi `config.js` dan sesuaikan konfigurasi termasuk nama bot, pesan default, nomor pemilik, dll.

## 🔌 Authentication Adapter

`gaxtawu` mendukung penyimpanan sesi autentikasi menggunakan **MySQL**, **MongoDB**, atau **Firebase**. Konfigurasikan database pilihan Anda:

### 1. Select Database Adapter

Di file `config.js`, konfigurasikan bagian `authAdapter` dengan adapter database pilihan Anda.

### 2. Install Database Module (Optional)

Setelah memilih adapter, jalankan perintah berikut untuk menginstal modul yang diperlukan:

```bash
npm run install:adapter
```

### 3. Ensure Database Availability

Pastikan server database Anda aktif dan dapat diakses sebelum menjalankan bot:

- Untuk **MySQL**, verifikasi kredensial pengguna dan nama database
- Untuk **MongoDB**, pastikan URL koneksi benar
- Untuk **Firebase**, konfirmasi bahwa kredensial akun layanan dikonfigurasi dengan benar

## ▶️ Running the Bot

Setelah konfigurasi, Anda dapat menjalankan bot menggunakan salah satu metode:

### 1. Run Directly

Jalankan bot langsung di terminal:

```bash
npm start
```

### 2. Run with PM2

Jalankan bot sebagai layanan latar belakang menggunakan PM2:

```bash
npm run start:pm2
```

## 🔐 WhatsApp Authentication

Dua metode autentikasi tersedia:

### 1. Using Pairing Code

- Setelah memulai bot, kode pairing akan muncul di terminal
- Buka WhatsApp di ponsel Anda, buka **Perangkat Tertaut**, lalu ketuk **Tautkan Perangkat**
- Masukkan kode pairing dari terminal

### 2. Using QR Code

- Setelah memulai bot, kode QR akan muncul di terminal
- Buka WhatsApp di ponsel Anda, buka **Perangkat Tertaut**, lalu ketuk **Tautkan Perangkat**
- Pindai kode QR dari terminal

Setelah autentikasi berhasil, bot siap untuk menerima dan membalas pesan.

## 🛠️ Customization

### Adding New Commands

Untuk menambah perintah baru:

1. Buat file JavaScript baru di folder `commands`:

```javascript
// commands/test/helloworld.js

module.exports = {
    name: "helloworld",
    aliases: ["hello"],
    category: "test",
    permissions: {
        admin: Boolean,
        botAdmin: Boolean,
        coin: Number,
        group: Boolean,
        owner: Boolean,
        premium: Boolean,
        private: Boolean
    },
    code: async (ctx) => {
        await ctx.reply("Hello, World!");
    }
};
```

2. Perintah dapat dipicu dengan mengirim `/helloworld` di chat.

### Documentation

`gaxtawu` menggunakan versi modifikasi dari `@mengkodingan/ckptw` yang khusus di-fork dan disesuaikan untuk bot ini. Pustaka ini dibangun di atas `@yupra/baileys` yang menawarkan fitur lebih lengkap dibandingkan `@whiskeysockets/baileys`.

Untuk dokumentasi lengkap, silakan kunjungi:

- [@mengkodingan/ckptw](https://www.npmjs.com/package/@mengkodingan/ckptw) - Referensi struktur perintah dasar
- [itsreimau/gktw](https://github.com/itsreimau/gktw) - Dokumentasi fork kustom
- [@yupra/baileys](https://www.npmjs.com/package/@yupra/baileys) - Panduan pengiriman pesan/media

## 🤝 Contribution

Kami menerima kontribusi! Jika Anda menemukan bug atau memiliki ide fitur, jangan ragu untuk membuka issue atau mengirim pull request.

## 📄 License

Proyek ini dilisensikan di bawah [Lisensi MIT](LICENSE).