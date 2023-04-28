# Lokasyonlu İhtiyaç Dağıtım Sistemi

### Uygulamanın Amacı

Uygulamada Bursa Merkez'inden 10 lokasyona sahip bir alan seçilmiş ve belirlenen ihtiyaç miktarlarının öncelik sırasına göre yardım dağıtım noktasından bu yardım noktalarına  karayolu ve drone rotalarının en kısa mesafe olmak koşuluyla çizdirilmesi amaçlanmıştır.

---

### Uygulama Hakkında

Uygulama localde çalıştırılıp javaScript programlama dili kullanılmıştır. OpenStreetMap harita servisinin verileri üzerinde çalışan açık kaynaklı bir yol bulma motoru olan Osrm'in api'si ile harita verileri çekilmiştir. Bu verileri haritalamak ve haritada çeşitli işlevleri yerine getirmek için açık kaynak kodlu bir JavaScript harita kütüphanesi olan Leaflet kullanılmıştır. Haritadaki rotaları planlayıp çizdirmek içinse Leaflet Routing Machine açık kaynaklı bir JavaScript kütüphanesinden yararlanılmıştır.


---

### Uygulamayı Çalıştırmak İçin

<br>Aşağıdaki adımları izleyerek uygulamayı localinizde çalıştırabilirsiniz:<br>

1. Bilgisayarınızda javascript dosyasının çalışabilmesi için Nodejs kurulu olması gerekmektedir. Yüklü değilse indirmek için [nodejs](https://nodejs.org/en/download) sitesine gidin.
2. Repodaki tüm dosyaları indirin. Ve masaüstünüzde bir klasör oluşturun. Oluşturduğunuz klasöre hepsini taşıyın.
3. Uygulamayı çalıştırmak için  Visual Studio Code kurulu olması gerekmektedir. Yüklü değilse indirmek için [vscode](https://code.visualstudio.com/download) sitesine gidin.
4. Uygulamanın olduğu klasöre sağ tıklayıp vscode ile açın.
5. Vscode extensions bölümünden Live Server eklentisini indirin.
6. Ardından harita.html dosyasına gelin ve sağ tıklayarak Open with Live Server seçeneğine basın. Uygulama tarayıcıda açılarak çalıştırılmış olacak.

