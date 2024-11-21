const API_KEY = "d58bc087f815807a9763cafc99584ea8";
//fonksiyon sehir ve birim bilgilerini parametre olarak alir
export const fetchWeatherData = async (city, units) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
    );
    if (!response.ok) {
      throw new Error(`HTTP Hatası: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    if (data) {
      console.log("İstek başarılı");
      return data;
    }
  } catch (err) {
    console.error("Hata:", err.message || err);
  }
};
//fetchweatherdata fonkdiyonunu diger dosyalarda kullanilabilir hale getir
export default fetchWeatherData;
