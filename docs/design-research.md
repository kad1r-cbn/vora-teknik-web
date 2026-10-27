# Vora Teknik: tasarım ve SEO araştırması

Araştırma tarihi: **27 Ekim 2026**. Aşağıdaki resmi sitelerin HTML içerikleri HTTPS üzerinden incelendi; dört adres de HTTP 200 döndürdü. Bu notlar sayfa içeriği ve bilgi mimarisine dayanır. Harici sitelerin tarayıcı görüntüleri, ortamın sertifika güveni nedeniyle doğrulanamadı; görsel veya animasyon karşılaştırması yapıldığı iddia edilmez.

| Kaynak | Gözlemlenen yaklaşım | Vora Teknik için karar |
| --- | --- | --- |
| [Vaillant Türkiye](https://www.vaillant.com.tr/) | Isıtma çözümleri, ürün grupları, servis desteği ve açıklayıcı içerikler ayrı başlıklarla sunuluyor. | Kombi, klima ve petek hizmetlerini açıkça ayırmak; ziyaretçiyi ilgili hizmete ve servis talebine yönlendirmek. |
| [Bosch Home Comfort Türkiye](https://www.bosch-homecomfort.com/tr/tr/) | Ürünler ve hizmetler ayrılıyor; kombi seçim aracı, müşteri hizmetleri ve kullanım rehberleri yer alıyor. | İlk ekranda anlaşılır hizmet seçimi ve telefon bağlantısı; sayfanın devamında süreç, bakım bilgisi ve kısa talep formu. |
| [Daikin Türkiye](https://www.daikin.com.tr/) | Sık sorulan sorular, kullanım önerileri ve cihaz sorunlarını açıklayan bilgi içerikleri bulunuyor. | Kullanıcının bakım, arıza ve servis planlaması sorularını yanıtlayan görünür SSS; ilgili hizmet sayfalarına bağlantılar. |
| [Aira](https://www.airahome.com/en-gb) | Faydaya odaklanan ana başlık, tekrarlanan teklif çağrısı, dört soruluk ön değerlendirme ve konfor/verimlilik/kontrol sıralaması kullanılıyor. | Uzun sayfayı okunabilir bir hikâye halinde kurmak: ihtiyaç, hizmetler, çalışma süreci, İstanbul kapsamı ve iletişim. Kısa formu kolay erişilebilir tutmak. |

## Tasarım kararları

- Markanın mevcut lacivert, turkuaz ve beyaz renkleri; büyük, okunabilir başlıklar ve dengeli boşluklar.
- Mevcut cihaz fotoğrafları ve İstanbul görselleri; hizmet kartları, net başlık hiyerarşisi ve mobilde rahat dokunma hedefleri.
- Kaydırma ilerlemesi, kontrollü paralaks ve bölümlerin hafifçe görünmesi. Hareket azaltma tercihi uygulanır; temel içerik animasyon veya JavaScript çalışmasa da erişilebilir kalır.
- İletişim ve hizmet bağlantıları kalıcı biçimde bulunabilir olmalı; telefon, WhatsApp ve talep formu gerçek işlevlerine yönelmeli.

## SEO ve güven kararları

- Her hizmet ve ilçe için anlamlı başlık, açıklama, kendi adresine işaret eden canonical ve tek ana başlık.
- İşletmenin doğrulanabilen adı, adresi, telefonu ve hizmet kapsamıyla tutarlı yapılandırılmış veri; gerçek olmayan yıldız, müşteri sayısı, sertifika veya yetkili servis iddiası kullanılmaz.
- Site haritasında mevcut hizmet/ilçe adresleri; açıklayıcı iç bağlantılar, görsel alternatif metinleri ve klavye erişimi.
- Form yapılandırması eksik olsa bile bilgilendirici site içeriği açılmalı. Supabase değerleri ortam değişkenlerinde tutulur; kaynak koda, dokümana veya Git geçmişine yazılmaz.
