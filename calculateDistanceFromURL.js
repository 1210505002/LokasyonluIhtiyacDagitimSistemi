// OpenStreetMap OSRM'i kullanarak iki nokta arasındaki rota üzerindeki mesafeyi URL kullanarak hesaplamandi
const cache = new Map(); // Önbellek

async function calculateDistanceFromURL(startLat, startLon, endLat, endLon) {
  const cacheKey = `${startLat},${startLon},${endLat},${endLon}`; // Önbellek anahtarı
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey); // Önbellekte veri varsa, önbellekten döndür
  }

  const url = `http://router.project-osrm.org/route/v1/driving/${startLon},${startLat};${endLon},${endLat}?overview=false&steps=false`;
  const response = await fetch(url);
  const data = await response.json();
  const distanceInMeters = data.routes[0].distance;
  const steps = data.routes[0].legs[0].steps;
  const result = { distanceInMeters, steps };

  cache.set(cacheKey, result); // Önbelleğe ekle

  return result;
}

