# Vora Teknik Web

İstanbul kombi, klima ve petek servisleri için Next.js 16 / React 19 sitesi. Ana sayfa ve hizmet içerikleri sunucuda oluşturulur; kaydırma anlatımı, mobil menü, ilçe araması ve servis formu etkileşimli bileşenlerdir.

## Geliştirme

Node.js 22 veya üzeri gerekir; Node.js 24 ile doğrulanmıştır.

```bash
npm ci
npm run dev
```

Mevcut çalışma dizinini kullanın. Bulut görevleri zaten yalıtılmıştır; ayrıca Git worktree oluşturmak gerekmez.

## Supabase yapılandırması

Değerleri bulut ortamı / dağıtım ayarlarında tanımlayın veya yerel geliştirmede Git tarafından yok sayılan `.env.local` dosyasında tutun:

- `NEXT_PUBLIC_SUPABASE_URL`: gerçek Supabase proje URL’si.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: projenin public anon/publishable anahtarı. Service-role anahtarı kullanmayın.

Gerçek değerleri kaynak koda, belgelere veya Git geçmişine eklemeyin. `.env*` dosyaları `.gitignore` kapsamındadır. Değerler değiştiğinde sunucuyu yeniden başlatın; dağıtımda yeniden derleyin.

Form, aynı origin üzerindeki `POST /api/service-request` uç noktasını kullanır. Supabase istemcisi yalnızca sunucuda oluşturulur. İstekler ad, Türkiye telefon numarası, hizmet türü ve iletişim onayı için doğrulanır. Kayıt hedefi mevcut `web_requests` tablosundaki `full_name`, `phone_number`, `device_type` sütunlarıdır; proje erişim politikaları bu işlemi desteklemelidir.

Yapılandırma eksikse site içeriği açılmaya devam eder; form açık bir hata mesajıyla telefon/WhatsApp seçeneklerini gösterir. Başarı mesajı yalnızca kayıt onaylandığında gösterilir. Canlı sisteme test müşteri talepleri göndermeyin.

## Kontroller

```bash
npm run lint
npx next typegen
npx tsc --noEmit --incremental false
npm run build
npm run start
```

Tarayıcıda mobil menü ve Escape/focus davranışını, ilçe aramasını, SSS açılırlarını, üç adımlı kaydırma anlatımını ve formun doğrulama/hata/başarı durumlarını kontrol edin. Başarı akışını ağ isteğini taklit ederek test edin; üretim veritabanına sahte kayıt yazmayın. Hareket azaltma tercihi ve JavaScript kapalıyken temel içerik/telefon erişimi korunur.

## SEO ve içerik

Ana adres `https://vorateknik.com` olarak `app/lib/seo.ts` içinde tanımlıdır. Her hizmet ve ilçe sayfası kendi canonical, başlık ve açıklamasını üretir. İşletme/hizmet/SSS yapılandırılmış verileri, 44 mevcut adreslik sitemap ve yerel üretilen sosyal paylaşım görseli bulunur. Harici font isteği gerekmez.

Telefon, adres veya hizmet kapsamı değiştiğinde görünür içerik ile yapılandırılmış verileri birlikte güncelleyin. Araştırma kaynakları ve tasarım kararları: [docs/design-research.md](docs/design-research.md).
