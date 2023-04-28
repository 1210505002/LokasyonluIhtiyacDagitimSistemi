import Graph from "./AStarAlgoritmasi.js";
import { ihtiyacSiralamasiCoktanAza } from "./ihtiyacSiralamasiCoktanAza.js";
import yardimNoktalariIhtiyacTalepleri from "./yardimNoktalariIhtiyacTalepleri.js";
import { yardimNoktalari, merkez } from "./yardimNoktalariveMerkez.js";
import { stoklar } from "./stoklar.js";
import { calculateDistanceFromURL } from "./calculateDistanceFromURL.js";
import { iconUrls } from "./iconUrls.js";

// Yardım dağıtım noktası koordinatları alindi ve atandi
var yardimDagitimNoktasi = merkez;

// Yardim yapilirken kullanilacak onceligi dikkate alan ihtiyac karsilama fonksiyonu
function ihtiyacKarsila(ihtiyacIndeks) {
  let yardimNoktasi = yardimNoktalariIhtiyacTalepleri[ihtiyacIndeks];
  let yardimNoktasiTalepler = yardimNoktasi.talepler;
  for (let i = 0; i < yardimNoktasiTalepler.length; i++) {
    let yardimTalep = yardimNoktasiTalepler[i];
    for (let j = 0; j < stoklar.length; j++) {
      let stok = stoklar[j];
      if (
        yardimTalep.tur == "Sağlık Malzemesi" &&
        stok.oncelik == 1 &&
        stok.adet > 0 &&
        yardimTalep.talep > 0
      ) {
        if (stok.adet < yardimTalep.talep) {
          yardimNoktasiTalepler[i].talep -= stok.adet;
          stoklar[j].adet = 0;
        } else if (stok.adet > yardimTalep.talep) {
          stoklar[j].adet -= yardimNoktasiTalepler[i].talep;
          yardimNoktasiTalepler[i].talep = 0;
        } else if (stok.adet == yardimTalep.talep) {
          stoklar[j].adet = 0;
          yardimNoktasiTalepler[i].talep = 0;
        }
      }
      if (
        yardimTalep.tur == "Temel Gıda" &&
        stok.oncelik == 2 &&
        stok.adet > 0 &&
        yardimTalep.talep > 0
      ) {
        if (stok.adet < yardimTalep.talep) {
          yardimNoktasiTalepler[i].talep -= stok.adet;
          stoklar[j].adet = 0;
        } else if (stok.adet > yardimTalep.talep) {
          stoklar[j].adet -= yardimNoktasiTalepler[i].talep;
          yardimNoktasiTalepler[i].talep = 0;
        } else if (stok.adet == yardimTalep.talep) {
          stoklar[j].adet = 0;
          yardimNoktasiTalepler[i].talep = 0;
        }
      }
      if (
        yardimTalep.tur == "Isınma Gereci" &&
        stok.oncelik == 3 &&
        stok.adet > 0 &&
        yardimTalep.talep > 0
      ) {
        if (stok.adet < yardimTalep.talep) {
          yardimNoktasiTalepler[i].talep -= stok.adet;
          stoklar[j].adet = 0;
        } else if (stok.adet > yardimTalep.talep) {
          stoklar[j].adet -= yardimNoktasiTalepler[i].talep;
          yardimNoktasiTalepler[i].talep = 0;
        } else if (stok.adet == yardimTalep.talep) {
          stoklar[j].adet = 0;
          yardimNoktasiTalepler[i].talep = 0;
        }
      }
      if (
        yardimTalep.tur == "Giyecek" &&
        stok.oncelik == 4 &&
        stok.adet > 0 &&
        yardimTalep.talep > 0
      ) {
        if (stok.adet < yardimTalep.talep) {
          yardimNoktasiTalepler[i].talep -= stok.adet;
          stoklar[j].adet = 0;
        } else if (stok.adet > yardimTalep.talep) {
          stoklar[j].adet -= yardimNoktasiTalepler[i].talep;
          yardimNoktasiTalepler[i].talep = 0;
        } else if (stok.adet == yardimTalep.talep) {
          stoklar[j].adet = 0;
          yardimNoktasiTalepler[i].talep = 0;
        }
      }
    }
  }
}

// Grafiği temsil eden veri yapısı (agirliklari api ile cekilerek daha sonra eklendi)
let graphData = [
  {
    source: yardimNoktalari[1],
    target: yardimDagitimNoktasi,
    weight: "",
  },
  {
    source: yardimDagitimNoktasi,
    target: yardimNoktalari[2],
    weight: "",
  },
  {
    source: yardimDagitimNoktasi,
    target: yardimNoktalari[3],
    weight: "",
  },
  {
    source: yardimNoktalari[4],
    target: yardimDagitimNoktasi,
    weight: "",
  },
  {
    source: yardimDagitimNoktasi,
    target: yardimNoktalari[6],
    weight: "",
  },
  {
    source: yardimNoktalari[7],
    target: yardimDagitimNoktasi,
    weight: "",
  },
  {
    source: yardimDagitimNoktasi,
    target: yardimNoktalari[8],
    weight: "",
  },
  {
    source: yardimNoktalari[0],
    target: yardimNoktalari[3],
    weight: "",
  },
  {
    source: yardimNoktalari[0],
    target: yardimNoktalari[5],
    weight: "",
  },
  {
    source: yardimNoktalari[8],
    target: yardimNoktalari[0],
    weight: "",
  },
  {
    source: yardimNoktalari[1],
    target: yardimNoktalari[3],
    weight: "",
  },
  {
    source: yardimNoktalari[4],
    target: yardimNoktalari[1],
    weight: "",
  },
  {
    source: yardimNoktalari[2],
    target: yardimNoktalari[6],
    weight: "",
  },
  {
    source: yardimNoktalari[7],
    target: yardimNoktalari[2],
    weight: "",
  },
  {
    source: yardimNoktalari[2],
    target: yardimNoktalari[9],
    weight: "",
  },
  {
    source: yardimNoktalari[3],
    target: yardimNoktalari[8],
    weight: "",
  },
  {
    source: yardimNoktalari[4],
    target: yardimNoktalari[7],
    weight: "",
  },
  {
    source: yardimNoktalari[6],
    target: yardimNoktalari[5],
    weight: "",
  },
  {
    source: yardimNoktalari[8],
    target: yardimNoktalari[5],
    weight: "",
  },
  {
    source: yardimNoktalari[9],
    target: yardimNoktalari[5],
    weight: "",
  },
  {
    source: yardimNoktalari[6],
    target: yardimNoktalari[8],
    weight: "",
  },
  {
    source: yardimNoktalari[6],
    target: yardimNoktalari[9],
    weight: "",
  },
];

// Graf verileri hesaplanarak graphData dizisine ekleme islemleri
function addGraphWeight() {
  for (let i = 0; i < graphData.length; i++) {
    let startLocations = graphData[i].source;
    let endLocations = graphData[i].target;
    let distance = graphData[i].weight;
    // Graf agirliklari hesaplanip eklendi.
    if (distance == "") {
      calculateDistanceFromURL(
        startLocations[0],
        startLocations[1],
        endLocations[0],
        endLocations[1]
      ).then((distanceInMeters) => {
        graphData[i].weight = distanceInMeters;

        if (i == graphData.length - 1) {
          // Tüm graf verileri hesaplandıktan sonra graf olusturulup A* algortimasina gonderildi
          let graf, ihtiyacIndeksleri;
          graf = grafOlustur();
          ihtiyacIndeksleri = ihtiyacSiralamasiCoktanAza(
            yardimNoktalariIhtiyacTalepleri
          );
          let son = AStarAlgoritmasiCalistir(ihtiyacIndeksleri, graf);
          if (son) {
            var kontrol = L.control();

            kontrol.onAdd = function (harita) {
              var div = L.DomUtil.create("div", "my-control");

              var butonKarayolu = L.DomUtil.create("button", "", div);
              butonKarayolu.innerHTML = "Karayolu Rotası";

              var butonDrone = L.DomUtil.create("button", "", div);
              butonDrone.innerHTML = "Drone Rotası";

              var butonTemizle = L.DomUtil.create("button", "", div);
              butonTemizle.innerHTML = "Temizle";

              var p = L.DomUtil.create("p", "", div);

              p.style.color = "black";
              p.style.fontSize = "16px";
              p.style.fontWeight = "bold";
              p.style.backgroundColor = "white";
              butonKarayolu.style.marginRight = "10px";
              butonKarayolu.style.backgroundColor = " #0583D2";
              butonKarayolu.style.color = " white";
              butonKarayolu.style.border = " none";
              butonKarayolu.style.borderRadius = " 5px";
              butonKarayolu.style.padding = " 10px";
              butonKarayolu.style.fontWeight = " bold";
              butonKarayolu.style.cursor = " pointer";

              butonDrone.style.backgroundColor = " #0583D2";
              butonDrone.style.color = " white";
              butonDrone.style.border = " none";
              butonDrone.style.borderRadius = " 5px";
              butonDrone.style.padding = " 10px";
              butonDrone.style.fontWeight = " bold";
              butonDrone.style.cursor = " pointer";
              butonDrone.style.marginRight = "10px";

              butonTemizle.style.backgroundColor = " #0583D2";
              butonTemizle.style.color = " white";
              butonTemizle.style.border = " none";
              butonTemizle.style.borderRadius = " 5px";
              butonTemizle.style.padding = " 10px";
              butonTemizle.style.fontWeight = " bold";
              butonTemizle.style.cursor = " pointer";

              L.DomEvent.addListener(butonKarayolu, "click", function () {
                haritayaCizKarayolu(son);
                p.innerHTML =
                  "M, MERKEZ YARDIM DAĞITIM NOKTASI <br>OLMAK ÜZERE SIRASIYLA DAĞITIM ROTASI:<br> M-C-D-H-J-B-E-F-K-G-A";
              });
              L.DomEvent.addListener(butonDrone, "click", function () {
                let polyline = haritayaCizDrone(son);
                // fit the map bounds to the polyline
                harita.fitBounds(polyline.getBounds());
              });
              L.DomEvent.addListener(butonTemizle, "click", function () {
                harita.eachLayer(function (layer) {
                  if (layer instanceof L.Polyline) {
                    harita.removeLayer(layer);
                  }
                });
                p.innerHTML = "";
                // Yonlendirme paneli kapatildi
                var panel = document.getElementsByClassName(
                  "leaflet-routing-container"
                )[0];
                if (panel) {
                  panel.style.display = "none";
                }

                // Yonlendirme kontrolu kaldırildi
                var routingControl = document.getElementsByClassName(
                  "leaflet-routing-container"
                )[0];
                if (routingControl) {
                  routingControl.parentNode.removeChild(routingControl);
                }
              });

              return div;
            };

            kontrol.addTo(harita);
          }
        }
      });
    }
  }
}

// Sayfa yüklendiğinde addGraphWeight fonksiyonu calistirildi. Yani api verileri cekildi
window.onload = addGraphWeight;

// A* icin graf olusturma islemi grafOlustur fonksiyonu ile yapildi
function grafOlustur() {
  let AStarGraf;
  AStarGraf = {
    0: {
      2: graphData[0].weight,
      3: graphData[1].weight,
      4: graphData[2].weight,
      5: graphData[3].weight,
      7: graphData[4].weight,
      8: graphData[5].weight,
      9: graphData[6].weight,
    },
    1: {
      4: graphData[7].weight,
      6: graphData[8].weight,
      9: graphData[9].weight,
    },
    2: {
      4: graphData[10].weight,
      5: graphData[11].weight,
      0: graphData[0].weight,
    },
    3: {
      7: graphData[12].weight,
      8: graphData[13].weight,
      10: graphData[14].weight,
      0: graphData[1].weight,
    },
    4: {
      1: graphData[7].weight,
      2: graphData[10].weight,
      9: graphData[15].weight,
      0: graphData[2].weight,
    },
    5: {
      2: graphData[11].weight,
      8: graphData[16].weight,
      0: graphData[3].weight,
    },
    6: {
      1: graphData[8].weight,
      7: graphData[17].weight,
      9: graphData[18].weight,
      10: graphData[19].weight,
    },
    7: {
      3: graphData[12].weight,
      6: graphData[17].weight,
      9: graphData[20].weight,
      10: graphData[21].weight,
      0: graphData[4].weight,
    },
    8: {
      3: graphData[13].weight,
      5: graphData[16].weight,
      0: graphData[5].weight,
    },
    9: {
      1: graphData[9].weight,
      4: graphData[15].weight,
      6: graphData[18].weight,
      7: graphData[20].weight,
      0: graphData[6].weight,
    },
    10: {
      3: graphData[14].weight,
      6: graphData[19].weight,
      7: graphData[21].weight,
    },
  };
  return AStarGraf;
}

// Haritaya cizdirme islemleri
function haritayaCizDrone(koordinatDegerler) {
  var polyline = L.polyline(koordinatDegerler, { color: "blue" }).addTo(harita);
  return polyline;
}

function haritayaCizKarayolu(koordinatDegerler) {
  var waypoints = [];
  for (let i = 0; i < koordinatDegerler.length; i++) {
    waypoints.push(L.latLng(koordinatDegerler[i]));
  }

  L.Routing.control({
    waypoints: waypoints,
    lineOptions: {
      styles: [{ color: "green", opacity: 0.7, weight: 6 }],
    },
    draggableWaypoints: false, //to set draggable option to false
    addWaypoints: false,
    routeWhileDragging: false,
    show: "collapsed",
    collapsible: true,
    alternatives: false,
  }).addTo(harita);
  // Haritada noktalari belirttik
  L.marker(yardimDagitimNoktasi, { icon: yardimDagitimNoktasiIcon })
    .addTo(harita)
    .bindPopup("Yardım Dağıtım Noktası");
  for (var i = 0; i < yardimNoktalari.length; i++) {
    var noktaKoordinatlari = yardimNoktalari[i];
    var harfler = "ABCDEFGHJK";

    L.marker(noktaKoordinatlari, {
      icon: L.icon({
        iconUrl: iconUrls[i],
        iconAnchor: [12, 41], // İkonun anchor noktası
        popupAnchor: [1, -34], // Popup pencerenin anchor noktası
      }),
    })
      .addTo(harita)
      .bindPopup("Yardım Noktası " + harfler[i]);
  }
}
// A* algoritmasi ile en kisa yol hesaplamaliri ihtiyac siralamalarina gore yaptirildi
function AStarAlgoritmasiCalistir(indeksler, graf) {
  let graph = new Graph(graf);
  let aStarIndeksler = [];
  let izlenecekYol = [];
  let yolAdimlari = [];

  for (let i = 0; i < indeksler.length; i++) {
    let indeks = indeksler[i];
    if (indeks !== null) {
      ihtiyacKarsila(indeks);
      aStarIndeksler.push(indeksler[i] + 1);
    }
    if (i == indeksler.length - 1) {
      aStarIndeksler.unshift(0);
      for (let i = 0; i < aStarIndeksler.length - 1; i++) {
        let aStarIndeks = aStarIndeksler[i].toString();
        izlenecekYol.push(
          graph.a_star_algorithm(aStarIndeks, aStarIndeksler[i + 1].toString())
        );
        if (i == aStarIndeksler.length - 2) {
          for (let i = 0; i < izlenecekYol.length; i++) {
            for (let j = 0; j < izlenecekYol[i].length; j++) {
              let dugum = izlenecekYol[i][j];
              if (dugum == "0") {
                dugum = yardimDagitimNoktasi;
                yolAdimlari.push(dugum);
              } else {
                dugum -= 1;
                yolAdimlari.push(yardimNoktalari[dugum]);
              }
            }
            if (i == izlenecekYol.length - 1) {
              return yolAdimlari;
            }
          }
        }
      }
    }
  }
}

// Harita oluşturma ve görüntüleme
var harita = L.map("map").setView(merkez, 14);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(harita);

// Yardım dağıtım noktasının ikonunu özelleştirmek için ikon stilini tanımla
var yardimDagitimNoktasiIcon = L.icon({
  iconUrl:
    "data:image/svg+xml;charset=utf-8," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="25" height="25"><circle fill="#0583D2" cx="12.5" cy="12.5" r="12.5"/><text x="50%" y="50%" fill="white" dominant-baseline="middle" text-anchor="middle" font-size="16" font-weight="bold">M</text></svg>'
    ),
  iconAnchor: [12, 41], // İkonun anchor noktası
  popupAnchor: [1, -34], // Popup pencerenin anchor noktası
});

// Yardım dağıtım noktasını haritaya ekleyip popup penceresine adını ekledik
L.marker(yardimDagitimNoktasi, { icon: yardimDagitimNoktasiIcon })
  .addTo(harita)
  .bindPopup("Yardım Dağıtım Noktası");

// Yardım noktalarını döngü ile haritaya ekleyip popup penceresine adını ekledik
for (var i = 0; i < yardimNoktalari.length; i++) {
  var noktaKoordinatlari = yardimNoktalari[i];
  var harfler = "ABCDEFGHJK";
  L.marker(noktaKoordinatlari, {
    icon: L.icon({
      iconUrl: iconUrls[i],
      iconAnchor: [12, 41], // İkonun anchor noktası
      popupAnchor: [1, -34], // Popup pencerenin anchor noktası
    }),
  })
    .addTo(harita)
    .bindPopup("Yardım Noktası " + harfler[i]);
}

// Kırmızı daireyi oluşturduk ve haritaya ekledik
L.circle(merkez, {
  color: "red",
  fillColor: "red",
  fillOpacity: 0.3,
  radius: 1100,
}).addTo(harita);
