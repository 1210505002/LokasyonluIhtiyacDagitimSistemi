// OpenStreetMap OSRM'i kullanarak iki nokta arasındaki rota üzerindeki mesafeyi URL kullanarak hesaplamandi
function calculateDistanceFromURL(startLat, startLon, endLat, endLon) {
  const url = `http://router.project-osrm.org/route/v1/driving/${startLon},${startLat};${endLon},${endLat}?overview=false&steps=false`;

  return new Promise((resolve, reject) => {
    const delay = 1000; // 1 saniye gecikme
    const timer = setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          let distanceInMeters = data.routes[0].distance;
          let steps = data.routes[0].legs[0].steps;
          resolve({ distanceInMeters, steps });
        })
        .catch((error) => reject(error));
    }, delay);

    return timer;
  });
}

export { calculateDistanceFromURL };
