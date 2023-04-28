/* Oncelik siralarina gore katsayi verildi. Ve bu katsayilarla carpilarak
hepsi toplandi. Bu son toplanmis degerler birbirleriyle karsilastirildi. 
Yuksek cikan degerden aza dogru siralanarak diziyle donduruldu.
*/
function ihtiyacSiralamasiCoktanAza(taleplerNokta) {
    var talepler = [];
    for (var i = 0; i < taleplerNokta.length; i++) {
      var id = taleplerNokta[i].id;
      var miktarToplam = 0;
      var talepListesi = taleplerNokta[i].talepler;
  
      for (var j = 0; j < talepListesi.length; j++) {
        var miktar = talepListesi[j].talep;
        var tur = talepListesi[j].tur;
        if (tur == "Sağlık Malzemesi") {
          miktarToplam += miktar * 4;
        }
        if (tur == "Temel Gıda") {
          miktarToplam += miktar * 3;
        }
        if (tur == "Isınma Gereci") {
          miktarToplam += miktar * 2;
        }
        if (tur == "Giyecek") {
          miktarToplam += miktar * 1;
        }
      }
      talepler.push({
        id: id,
        toplamMiktar: miktarToplam,
      });
    }
    talepler.sort(function (a, b) {
      return b.toplamMiktar - a.toplamMiktar;
    });
  
    var siraliIdler = [];
    for (var k = 0; k < talepler.length; k++) {
      siraliIdler.push(talepler[k].id);
    }
    return siraliIdler;
  }
  export {ihtiyacSiralamasiCoktanAza}