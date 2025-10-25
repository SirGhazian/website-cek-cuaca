const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=b5fbef7791867b6a91ae0f28a07b49cc&query=" +
    encodeURIComponent(latitude) +
    "," +
    encodeURIComponent(longitude) +
    "&units=m";

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Tidak dapat terkoneksi ke layanan cuaca.", undefined);
    } else if (body.error) {
      callback("Lokasi tidak ditemukan. Coba gunakan nama kota yang lain.", undefined);
    } else {
      const data = body.current;
      const lokasi = body.location;

      callback(undefined, {
        deskripsi: data.weather_descriptions[0],
        suhu: data.temperature,
        terasa: data.feelslike,
        kelembaban: data.humidity,
        kecepatanAngin: data.wind_speed,
        arahAngin: data.wind_dir,
        tekanan: data.pressure,
        jarakPandang: data.visibility,
        ikon: data.weather_icons[0],
        waktuLokal: lokasi.localtime,
      });
    }
  });
};

module.exports = forecast;
