const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

const geocode = require("./utils/geocode");
const forecast = require("./utils/prediksiCuaca");
const berita = require("./utils/berita");

const direktoriPublic = path.join(__dirname, "../public");
const direktoriViews = path.join(__dirname, "../templates/views");
const direktoriPartials = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", direktoriViews);
hbs.registerPartials(direktoriPartials);

app.use(express.static(direktoriPublic));

// Halaman Utama
app.get("", (req, res) => {
  res.render("index", {
    judul: "Aplikasi Cek Cuaca",
    nama: "Muhammad Ghazian Tza",
    ikon: "/img/cuacaIcon.png",
  });
});

// Halaman Tentang
app.get("/tentang", (req, res) => {
  res.render("tentang", {
    judul: "Halaman Tentang",
    nama: "Muhammad Ghazian Tza",
    ikon: "/img/cuacaIcon.png",
  });
});

// Halaman Bantuan
app.get("/bantuan", (req, res) => {
  res.render("bantuan", {
    judul: "Halaman Bantuan",
    teksBantuan: "Ini adalah teks bantuan",
    nama: "Muhammad Ghazian Tza",
    ikon: "/img/cuacaIcon.png",
  });
});

// Halaman Info Cuaca
app.get("/infocuaca", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "[ Kamu harus memasukan lokasi yang ingin dicari! ]",
    });
  }
  geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({ error });
    }
    forecast(latitude, longitude, (error, dataPrediksi) => {
      if (error) {
        return res.send({ error });
      }
      res.send({
        prediksiCuaca: dataPrediksi,
        lokasi: location,
        latitude,
        longitude,
        address: req.query.address,
      });
    });
  });
});

// Halaman Berita
app.get("/berita", (req, res) => {
  berita((error, dataBerita) => {
    if (error) {
      console.log("Gagal mengambil berita:", error);
      return res.render("berita", {
        judul: "Berita Terkini",
        nama: "Muhammad Ghazian Tza",
        ikon: "/img/cuacaIcon.png",
        berita: [],
        error,
      });
    }

    // Tampilkan hasil JSON di console
    console.log("Data berita dari API:");
    console.log(JSON.stringify(dataBerita, null, 2)); // tampilkan dengan format rapi

    res.render("berita", {
      judul: "Berita Terkini",
      nama: "Muhammad Ghazian Tza",
      ikon: "/img/cuacaIcon.png",
      berita: dataBerita,
    });
  });
});

// Halaman 404 untuk /bantuan/*
app.get(/^\/bantuan\/.*/, (req, res) => {
  res.render("404", {
    judul: "404",
    nama: "Muhammad Ghazian Tza",
    pesanKesalahan: "Artikel yang dicari tidak ditemukan.",
    ikon: "/img/cuacaIkon.png",
  });
});

// Halaman 404 umum untuk semua rute lain
app.get(/.*/, (req, res) => {
  res.render("404", {
    judul: "404",
    nama: "Muhammad Ghazian Tza",
    pesanKesalahan: "Halaman tidak ditemukan.",
    ikon: "/img/cuacaIkon.png",
  });
});

app.listen(4000, () => {
  console.log("Server berjalan di http://localhost:4000");
});
