console.log("Client-side JavaScript aktif");

const searchInput = document.getElementById("locationInput");
const weatherContainer = document.getElementById("weatherContainer");

// Fungsi menentukan emoji berdasarkan deskripsi cuaca
function getWeatherEmoji(deskripsi) {
  const text = deskripsi.toLowerCase();

  if (text.includes("sun") || text.includes("clear")) return "☀️";
  if (text.includes("cloud")) return "⛅";
  if (text.includes("rain")) return "🌧️";
  if (text.includes("thunder")) return "⛈️";
  if (text.includes("snow")) return "❄️";
  if (text.includes("fog") || text.includes("mist")) return "🌫️";
  if (text.includes("wind")) return "💨";
  return "🌈";
}

// Fungsi utama cari cuaca
async function searchWeather() {
  const lokasi = searchInput.value.trim();

  if (!lokasi) {
    weatherContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">❗</div>
        <div class="empty-state-text">Masukkan nama kota untuk mencari cuaca</div>
      </div>`;
    return;
  }

  weatherContainer.innerHTML = `
    <div class="empty-state">
      <div class="empty-state-icon">⏳</div>
      <div class="empty-state-text">Mengambil data cuaca untuk "${lokasi}"...</div>
    </div>`;

  try {
    const response = await fetch(`/infocuaca?address=${encodeURIComponent(lokasi)}`);
    const data = await response.json();

    if (data.error) {
      weatherContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">⚠️</div>
          <div class="empty-state-text">${data.error}</div>
        </div>`;
      return;
    }

    const info = data.prediksiCuaca;
    const emoji = getWeatherEmoji(info.deskripsi);

    weatherContainer.innerHTML = `
      <div class="weather-card">
        <div class="location-name">${data.lokasi}</div>
        <div class="coordinates">🌍 Koordinat: ${data.latitude.toFixed(
          4
        )}, ${data.longitude.toFixed(4)}</div>

        <div class="temperature" style="display: flex; justify-content: center; align-items: center; gap: 0.5rem;">
            <div class="weather-icon"><span>${emoji}</span></div>
        <span style="font-size: 2.5rem; font-weight: 700;">${info.suhu}°C</span>
      </div>


        <div class="weather-description">${info.deskripsi}</div>
        
        <div class="weather-details">
          <div class="detail-item">
            <div class="detail-label">Terasa Seperti</div>
            <div class="detail-value">${info.terasa}°C</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Kelembaban</div>
            <div class="detail-value">💧 ${info.kelembaban}%</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Angin</div>
            <div class="detail-value">🌬️ ${info.kecepatanAngin} km/h (${info.arahAngin})</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Tekanan</div>
            <div class="detail-value">📈 ${info.tekanan} mb</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Visibilitas</div>
            <div class="detail-value">👁️ ${info.jarakPandang} km</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Waktu Lokal</div>
            <div class="detail-value">⏰ ${info.waktuLokal}</div>
          </div>
        </div>
      </div>`;
  } catch (err) {
    console.error(err);
    weatherContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">❌</div>
        <div class="empty-state-text">Terjadi kesalahan saat mengambil data cuaca. Periksa koneksi internet Anda.</div>
      </div>`;
  }
}

// Event listener tombol dan Enter key
document.querySelector("button").addEventListener("click", searchWeather);
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") searchWeather();
});

function toggleFaq(element) {
  const toggle = element.querySelector(".faq-toggle");
  const answer = element.nextElementSibling;
  const isActive = answer.classList.contains("active");

  document.querySelectorAll(".faq-answer").forEach((a) => {
    a.style.maxHeight = null;
    a.classList.remove("active");
  });
  document.querySelectorAll(".faq-toggle").forEach((t) => t.classList.remove("active"));

  if (!isActive) {
    toggle.classList.add("active");
    answer.classList.add("active");
    answer.style.maxHeight = answer.scrollHeight + "px"; // tinggi sesuai isi
  }
}
