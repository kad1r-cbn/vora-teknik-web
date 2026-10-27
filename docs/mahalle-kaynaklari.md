# İstanbul ilçe ve mahalle verileri

Erişim / uygulamaya aktarma tarihi: **27 Ekim 2026**.

## Ana kaynak

[TürkiyeAPI](https://github.com/ubeydeozdmr/turkiye-api) projesinin v2 API’sinden alınan **2025 veri seti** kullanılır. API metadata’sındaki son güncelleme tarihi **21 Mayıs 2026**’dır:

- [İstanbul ilçeleri](https://api.turkiyeapi.dev/v2/provinces/34/districts?limit=100): 39 ilçe.
- [İstanbul mahalleleri](https://api.turkiyeapi.dev/v2/provinces/34/neighborhoods?limit=1000): tek yanıtta 963 mahalle; `count` ve `total` değerleri 963.
- İlçe/mahalle eşlemesi isim benzerliğine göre yapılmaz; kaynaktaki `districtId` kullanılır.
- Her ilçe için aktarılan mahalle sayısı, API’nin aynı veri setindeki `stats.neighborhoodCount` değeriyle eşleştirilmiştir. Tekrarlanan ilçe/mahalle çifti bulunmaz.
- Yalnızca herkese açık idari adlar aktarılır; nüfus, posta kodu, kişisel bilgi veya iletişim bilgisi kopyalanmaz.

Kaynak proje veri kökenleri arasında TÜİK MEDAS, PTT ve Harita Genel Müdürlüğü kaynaklarını belirtir. Bu uygulamadaki liste, kaynağın tarihli bir kopyasıdır; 2026 için canlı ve kesin idari sınır/mahalle sayımı iddiası değildir. Birleşme, isim değişikliği veya yeni mahalle oluşması durumunda ilçe belediyesi kayıtlarıyla birlikte güncellenmelidir.

## Bağımsız kontrol

[Bahçelievler Belediyesi’nin mahalleler sayfasındaki](https://www.bahcelievler.istanbul/mahalleler) 11 isim API listesiyle ayrıca karşılaştırılmıştır: Bahçelievler, Çobançeşme, Cumhuriyet, Fevzi Çakmak, Hürriyet, Kocasinan Merkez, Şirinevler, Siyavuşpaşa, Soğanlı, Yenibosna Merkez, Zafer.

[İBB Açık Veri Portalı muhtarlık konumları](https://data.ibb.gov.tr/dataset/c310cde9-92b1-4c51-9575-d71b1dc7ac43/resource/71f75529-7fae-4a85-b05f-664c62eda422/download/muhtarlik_lokasyon.geojson) da incelendi. 5 Haziran 2025 tarihli bu kaynak, tüm idari mahallelerin eksiksiz listesi olmadığı için ana listeyi oluşturmakta kullanılmadı.

## Uygulamadaki kapsam

- `app/data/istanbul-ilceleri.ts`: 39 ilçe; önceki 32 kayda Çekmeköy, Kartal, Pendik, Sancaktepe, Sultanbeyli, Şile ve Tuzla eklendi.
- `app/data/istanbul-mahalleleri.ts`: 39 ilçe için toplam 963 mahalle adı, Türkçe alfabetik sırada.
- Her ilçe sayfasında mahalle adları sunucunun ilk HTML yanıtında bulunur. Uzun listelerde ilk 12 isim gösterilir, kalanı klavye ile de kullanılabilen yerel `details` öğesinden açılır.
- Mahalle listesi her adreste kesin servis verildiği anlamına gelmez. Görünür açıklama, adres için kapsamın ve randevunun telefonla doğrulanmasını ister.

## Kaynak lisansı

TürkiyeAPI MIT lisansı altında sunulmaktadır. Kaynak lisans metni aşağıda aynen korunmuştur:

```text
MIT License

Copyright (c) 2022-2026 Ubeyde Emir Özdemir

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
