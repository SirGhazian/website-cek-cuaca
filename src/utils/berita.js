const request = require("postman-request");

const berita = (callback) => {
  const apiKey = "41427ed0d4ac5296c6f6cb7962e3ee6a";
  const url =
    "http://api.mediastack.com/v1/news?access_key=" +
    apiKey +
    "&keywords=weather,climate&sort=popularity&limit=10";

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Tidak dapat terkoneksi ke layanan berita.", undefined);
    } else if (body.error) {
      callback("Gagal mengambil berita: " + body.error.message, undefined);
    } else {
      callback(undefined, body.data);
    }
  });
};

module.exports = berita;
