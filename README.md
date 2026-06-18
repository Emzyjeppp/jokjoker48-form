# JokJoker48 - Premium JKT48 2-Shot Jockey Service Form

Formulir web premium interaktif untuk Jasa Joki 2-Shot JKT48 bernama **"JokJoker48"**. Website ini dirancang dengan estetika modern bertema *dark chocolate* (cokelat gelap) dan aksen emas hangat (*gold*), serta dilengkapi berbagai fitur otomatisasi untuk mempermudah pemesanan jasa joki.

## 🌟 Fitur Utama

1. **Aestetika Premium & Responsif**:
   - Skema warna cokelat gelap (`#120804`), emas hangat (`#d4af37`), dan krem lembut.
   - Desain modern menggunakan efek *glassmorphism* transparan.
   - Responsif dan ramah seluler (mobile-friendly).

2. **Pricelist Joki Interaktif**:
   - Menampilkan daftar harga member JKT48 berdasarkan kategori Team (**Love**, **Dream**, **Passion**, dan **Trainee**).
   - Dilengkapi fitur pencarian member secara real-time dan penyaringan tab tim.
   - **Fitur Auto-Fill Bertingkat (Cascading)**: Cukup klik nama member di daftar harga untuk mengisi kolom pilihan joki prioritas/cadangan secara otomatis.

3. **Pratinjau Tiket Virtual (Live Ticket Generator)**:
   - Membuat pratinjau tiket konser/joki virtual secara real-time berdasarkan input formulir.
   - **Unduh Tiket (.PNG)**: Pengguna dapat mengunduh tiket joki virtual beresolusi tinggi langsung dari browser.

4. **Integrasi Google Sheets & WhatsApp**:
   - **Auto-Save Google Sheets**: Mengirimkan data pemesanan secara aman ke Google Spreadsheet admin via Google Apps Script Web App.
   - **Kirim ke WhatsApp**: Mengalihkan detail pesanan secara terstruktur langsung ke chat WhatsApp Admin.

---

## 🔄 Alur Pengguna (UX Flow)

Berikut adalah diagram alur pengalaman pengguna (user experience flow) dalam menggunakan web form pemesanan JokJoker48:

```mermaid
graph TD
    A[Pengguna Buka Website] --> B{Layar Landing: Pilih Layanan}
    B -- Joki 2-Shot --> C1[Formulir 2-Shot]
    B -- Joki Meet & Greet --> C2[Formulir Meet & Greet]
    B -- Joki Video Call --> C3[Formulir Video Call]
    
    C1 --> D1[Tampilkan Pilihan Kota <br>Jabodetabek / Jogja / Surabaya]
    C2 --> D1
    C3 --> D2[Sembunyikan Pilihan Kota <br>Kota Otomatis: ONLINE]
    
    D1 --> E[Isi Data & Pilihan Member <br>Dapat klik member di Pricelist untuk Auto-Fill]
    D2 --> E
    
    E --> F[Preview Tiket Virtual Berubah Real-Time]
    F --> G{Persetujuan & Validasi Form?}
    G -- Belum Lengkap --> H[Tombol Aksi Dinonaktifkan]
    G -- Ya --> I[Tombol Aksi Aktif]
    
    I --> J1[Salin Format Teks]
    I --> J2[Unduh Tiket .PNG]
    I --> J3[Kirim Form ke WhatsApp Admin <br>Data tersimpan ke Google Sheets]
    
    E --> K[Kembali ke Layar Pilihan Layanan <br>Mengosongkan form & pilihan]
```

### Rincian Alur UX:
1. **Layar Landing (Layanan Joki)**: Pengguna memilih salah satu dari 3 jasa joki: **2-Shot**, **Meet & Greet**, atau **Video Call**.
2. **Kondisional Kota**: Pada pemesanan *2-Shot* & *Meet & Greet*, form menampilkan dropdown kota (**Jabodetabek**, **Jogja**, dan **Surabaya**). Untuk *Video Call* (layanan virtual), kolom kota otomatis disembunyikan dan diatur ke `"ONLINE"`.
3. **Pencarian & Auto-fill**: Pengguna bisa mencari nama member dan mengkliknya pada tabel pricelist dinamis untuk mengisi kolom Prioritas & Cadangan secara otomatis (bertumpuk).
4. **Validasi & Aksi**: Tombol salin teks, unduh tiket, dan kirim WhatsApp hanya akan aktif setelah pengguna mencentang checkbox persetujuan ketentuan dan melengkapi data form.

---

## 🛠️ Panduan Konfigurasi Google Sheets

Agar form dapat mengirimkan data otomatis ke Google Spreadsheet Anda sebelum mengalihkan ke WhatsApp, ikuti langkah-langkah penyiapan di bawah ini:

### 1. Salin Kode Google Apps Script (`Code.gs`)
Buka Google Spreadsheet Anda, klik menu **Extensions (Ekstensi)** -> **Apps Script**, hapus semua kode bawaan lalu tempel kode berikut:

```javascript
// Kata sandi admin untuk mengamankan data
var ADMIN_SECRET_PASSWORD = "#aurhelucunchgemas"; // SILAKAN GANTI KATA SANDI AMAN ANDA DI SINI

function doPost(e) {
  var data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch(err) {
    data = e.parameter;
  }

  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var service = data.keterangan || "2-Shot"; // "2-Shot", "Meet & Greet", "Video Call"
  
  // Memilih tab lembar kerja secara dinamis berdasarkan jenis layanan
  var sheetName = "Form Responses 1"; // default/cadangan
  if (service === "2-Shot") {
    sheetName = spreadsheet.getSheetByName("2-Shot") ? "2-Shot" : "Book 2s theater sementara (Responses)";
  } else if (service === "Meet & Greet") {
    sheetName = spreadsheet.getSheetByName("Meet & Greet") ? "Meet & Greet" : "MnG";
  } else if (service === "Video Call") {
    sheetName = spreadsheet.getSheetByName("Video Call") ? "Video Call" : "VC";
  }
  
  // Ambil sheet berdasarkan nama, jika tidak ada pakai sheet aktif utama
  var sheet = spreadsheet.getSheetByName(sheetName) || spreadsheet.getActiveSheet();
  
  var headers = sheet.getRange(1, 1, 1, Math.max(1, sheet.getLastColumn())).getValues()[0];
  var rowData = new Array(headers.length);
  
  var fieldMapping = {
    "Timestamp": new Date(),
    "Email address": data.personalEmail || "",
    "Sudah membaca deskripsi diatas?": data.agree || "Sudah",
    "Tipe akun": data.accountType || "",
    "Nama": data.userName || "",
    "Kota": data.city || "",
    "Email Akun JKT48 Pastikan diisi dengan benar !": data.jkt48Email || "",
    "Password Akun JKT48 Pastikan diisi dengan benar !": data.jkt48Password || "",
    "Nomor WhatsApp Aktif (Untuk Dihubungi)": data.whatsapp || "",
    "2Shot Prioritas NAMA LENGKAP MEMBER - TEAM": data.priorities || "",
    "2Shot Cadangan (kalau prioritas habis) NAMA LENGKAP MEMBER - TEAM": data.backups || "",
    "Penjoko": "",
    "Keterangan": data.keterangan || ""
  };
  
  if (headers.length > 0 && headers[0] !== "") {
    for (var i = 0; i < headers.length; i++) {
      var header = headers[i].trim();
      var matchedValue = "";
      for (var key in fieldMapping) {
        if (header.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
          matchedValue = fieldMapping[key];
          break;
        }
      }
      rowData[i] = matchedValue !== "" ? matchedValue : "";
    }
    sheet.appendRow(rowData);
  } else {
    // Jika sheet kosong, buat baris header terlebih dahulu
    var headerNames = [
      "Timestamp",
      "Email address",
      "Sudah membaca deskripsi diatas?",
      "Tipe akun",
      "Nama",
      "Kota",
      "Email Akun JKT48 Pastikan diisi dengan benar !",
      "Password Akun JKT48 Pastikan diisi dengan benar !",
      "Nomor WhatsApp Aktif (Untuk Dihubungi)",
      "2Shot Prioritas NAMA LENGKAP MEMBER - TEAM",
      "2Shot Cadangan (kalau prioritas habis) NAMA LENGKAP MEMBER - TEAM",
      "Penjoko",
      "Keterangan"
    ];
    sheet.appendRow(headerNames);
    
    // Susunan kolom default jika sheet kosong tanpa header
    rowData = [
      new Date(),
      data.personalEmail || "",
      data.agree || "Sudah",
      data.accountType || "",
      data.userName || "",
      data.city || "",
      data.jkt48Email || "",
      data.jkt48Password || "",
      data.whatsapp || "",
      data.priorities || "",
      data.backups || "",
      "",
      data.keterangan || ""
    ];
    sheet.appendRow(rowData);
  }
  
  return ContentService.createTextOutput(JSON.stringify({ "result": "success", "sheetUsed": sheet.getName() }))
                       .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  var action = e.parameter.action;
  
  if (action === "getData") {
    var pass = e.parameter.pass;
    
    // Verifikasi kata sandi admin
    if (pass !== ADMIN_SECRET_PASSWORD) {
      return ContentService.createTextOutput(JSON.stringify({ "result": "error", "message": "Unauthorized" }))
                           .setMimeType(ContentService.MimeType.JSON);
    }
    
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheets = ["2-Shot", "Meet & Greet", "Video Call"];
    var allData = {};
    
    for (var s = 0; s < sheets.length; s++) {
      var sheetName = sheets[s];
      var sheet = spreadsheet.getSheetByName(sheetName);
      if (sheet) {
        var dataRange = sheet.getDataRange();
        var values = dataRange.getValues();
        if (values.length > 1) {
          var headers = values[0];
          var rows = [];
          for (var r = 1; r < values.length; r++) {
            var rowObj = {};
            for (var c = 0; c < headers.length; c++) {
              rowObj[headers[c]] = values[r][c];
            }
            rows.push(rowObj);
          }
          allData[sheetName] = rows;
        } else {
          allData[sheetName] = [];
        }
      } else {
        allData[sheetName] = [];
      }
    }
    
    return ContentService.createTextOutput(JSON.stringify({ "result": "success", "data": allData }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
  
  return ContentService.createTextOutput("Script running successfully. Use POST method to submit data.");
}
```

### 2. Deploy sebagai Web App
1. Klik tombol **Save** (ikon disket) di atas editor.
2. Klik tombol **Deploy** di kanan atas -> Pilih **New deployment**.
3. Pilih tipe deployment dengan klik ikon gerigi -> Pilih **Web app**.
4. Set konfigurasi berikut:
   - **Execute as**: Pilih `Me (email-anda@gmail.com)`
   - **Who has access**: Pilih **`Anyone`** (agar server menerima request dari website).
5. Klik **Deploy**.
6. Setujui perizinan akun (pilih akun Google Anda -> klik *Advanced* -> klik *Go to Untitled project* -> klik *Allow*).
7. Salin **Web App URL** yang diberikan (URL berakhiran `/exec`).

### 3. Konfigurasi di Web Form
1. Buka file `app.js`.
2. Pada baris ke-66, cari variabel `GOOGLE_SHEET_SCRIPT_URL` dan tempelkan URL yang sudah disalin:
   ```javascript
   const GOOGLE_SHEET_SCRIPT_URL = "https://script.google.com/macros/s/xxxx/exec";
   ```
3. Simpan perubahan file.

---

## 📂 Struktur File

- `index.html` — Struktur layout halaman web, formulir pemesanan, dan pratinjau tiket.
- `style.css` — Styling visual premium bertema cokelat-emas dan glassmorphism.
- `app.js` — Logika interaktif form, filter pencarian pricelist, pembuat tiket dengan HTML5 Canvas, serta request HTTP POST ke Google Sheets.
- `.gitignore` — Konfigurasi Git untuk mengabaikan berkas sistem dan log sementara.

---

## 💻 Cara Menjalankan Lokal

1. Clone repositori ini:
   ```bash
   git clone https://github.com/Emzyjeppp/jokjoker48-form.git
   ```
2. Masuk ke direktori proyek:
   ```bash
   cd jokjoker48-form
   ```
3. Klik dua kali file `index.html` untuk membukanya di browser secara langsung, atau jalankan menggunakan server lokal (seperti Live Server di VS Code atau perintah `npx http-server`).
