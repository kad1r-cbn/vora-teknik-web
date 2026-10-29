export type BlogCategory = "Kombi" | "Klima" | "Petek" | "Rehber";

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  category: BlogCategory;
  image: string;
  imageAlt: string;
  serviceHref: string;
  serviceLabel: string;
  sections: {
    id: string;
    title: string;
    paragraphs: string[];
    checklist?: string[];
  }[];
  faqs: { q: string; a: string }[];
  wordCount: number;
  readMinutes: number;
  publishedAt: string;
  updatedAt: string;
};

// Original editorial guidance, reviewed for this website on the displayed date.
export const blogPosts: BlogPost[] = [
  {
    slug: "kombi-bakimi-ne-zaman-yapilmali",
    seoTitle: "Kombi Bakımı Ne Zaman Yapılmalı? | Vora Teknik",
    title: "Kombi Bakımı Ne Zaman Yapılmalı?",
    description:
      "Kombi bakımını ne zaman planlamalı, randevu öncesinde hangi bilgileri hazırlamalısınız? Kullanım koşullarına göre bakım sürecini adım adım inceleyin.",
    category: "Kombi",
    image: "/images/hizmet-kombi.webp",
    imageAlt: "Duvara monte kombi ve düzenli tesisat bağlantıları",
    serviceHref: "/kombi-servisi",
    serviceLabel: "Kombi servisi",
    sections: [
      {
        id: "bakim-zamanini-belirlemek",
        title: "Bakım zamanı cihazınızın koşullarına bağlıdır",
        paragraphs: [
          "Kombi bakımını planlarken önce cihazın kullanım kılavuzuna ve önceki servis kaydına bakın. Model, yaş, kullanım yoğunluğu, tesisatın durumu ve üreticinin önerileri bakım kapsamını etkiler. Her ev ve her cihaz için aynı takvimi kullanmak yerine, son yapılan işlemin tarihini ve cihazın çalışma durumunu birlikte değerlendirmek daha yararlıdır.",
          "Isıtma sezonu başlamadan önce kontrol randevusu oluşturmak planlama açısından avantaj sağlar. Böylece yoğun kullanım dönemine girmeden mevcut belirtileri anlatabilir, gerekli görülürse işlem ve parça ihtiyacı hakkında bilgi alabilirsiniz. Yaz boyunca sıcak su için çalışan bir kombinin de kullanım geçmişi devam eder; yalnızca peteklerin kapalı olması bakım ihtiyacını tek başına belirlemez.",
        ],
      },
      {
        id: "belirtileri-kaydetmek",
        title: "Takvimden önce fark ettiğiniz belirtileri not edin",
        paragraphs: [
          "Cihazın sesinde değişiklik, sık devreye girip çıkma, sıcak suda dalgalanma veya ekrandaki hata kodları servis talebinde önemli bilgilerdir. Belirtinin ne zaman başladığını, yalnızca sıcak suda mı yoksa ısıtmada da mı oluştuğunu ve son dönemde tesisata bir işlem yapılıp yapılmadığını not edin. Bu kayıtlar sorunun daha anlaşılır aktarılmasını sağlar.",
          "Bakım randevusu, sürekli tekrarlayan bir arızanın değerlendirilmesini ertelemek için kullanılmamalıdır. Belirgin su kaçağı, yanık kokusu veya olağan dışı çalışma varsa cihazı zorlamayın. Gaz kokusunda cihaz üzerinde deneme yapmadan güvenli bir yerden doğal gaz dağıtım kuruluşunun acil yönlendirmesine başvurun.",
        ],
      },
      {
        id: "randevu-oncesi-hazirlik",
        title: "Servis randevusuna nasıl hazırlanabilirsiniz?",
        paragraphs: [
          "Marka ve model bilgisi, cihazın ekranındaki uyarı ve önceki bakım tarihi randevu planlamasını kolaylaştırır. Fotoğraf paylaşırken yalnızca cihazın ilgili bölümünü gösterin; evinize veya kişisel belgelerinize ait ayrıntıları görüntüye dahil etmeyin. Cihazın çevresini erişilebilir bırakın, ancak kapağını açmayın ve gaz ya da elektrik bağlantılarına müdahale etmeyin.",
          "Talep sırasında servis kapsamını, kontrolün nasıl yapılacağını, ücretlendirme koşullarını ve ek işlem gerektiğinde onayınızın nasıl alınacağını sorabilirsiniz. Bakımda yapılacak işlemler cihazın teknik özelliklerine ve yerinde değerlendirmeye göre netleşmelidir. Bir kontrolün her arızayı ortadan kaldıracağı veya belirli bir tasarruf sağlayacağı söylenemez.",
        ],
        checklist: [
          "Marka, model ve varsa hata kodunu hazırlayın.",
          "Belirtinin hangi kullanımda oluştuğunu not edin.",
          "Önceki servis kaydını erişilebilir tutun.",
          "İşlem kapsamı ve ücret koşullarını randevu öncesinde sorun.",
        ],
      },
      {
        id: "bakim-sonrasi-takip",
        title: "İşlem sonrasında kaydı saklayın",
        paragraphs: [
          "Yapılan işlemleri ve varsa değiştirilen parçaları içeren servis kaydını saklayın. Kullanım için verilen önerileri üreticinin kılavuzuyla birlikte değerlendirin. Aynı belirti tekrar ederse ne zaman ve hangi çalışma koşulunda oluştuğunu aktarın. Böylece sonraki değerlendirme, yalnızca hafızaya dayanan bir tarif yerine cihazın bakım geçmişi üzerinden ilerleyebilir.",
        ],
      },
    ],
    faqs: [
      {
        q: "Kombi bakımı için kışı beklemek gerekir mi?",
        a: "Gerekmez. Üreticinin önerileri ve kullanım geçmişi dikkate alınarak ısıtma sezonu öncesinde randevu planlanabilir. Devam eden bir arıza belirtisi varsa mevsimi beklemeden değerlendirme istenmelidir.",
      },
      {
        q: "Bakım öncesinde kombinin kapağını açmalı mıyım?",
        a: "Hayır. Cihazı dışarıdan erişilebilir bırakmanız yeterlidir. İç parçalar, gaz ve elektrik bağlantıları için kullanıcı müdahalesi yerine teknik değerlendirme gerekir.",
      },
      {
        q: "Kombi bakımı her arızayı çözer mi?",
        a: "Bakım ve arıza tespiti farklı ihtiyaçları kapsayabilir. Sorunun nedeni, işlem kapsamı ve varsa parça ihtiyacı cihazın değerlendirilmesiyle belirlenir.",
      },
    ],
    wordCount: 459,
    readMinutes: 3,
    publishedAt: "2026-10-28",
    updatedAt: "2026-10-28",
  },
  {
    slug: "kombi-su-basinci-neden-duser",
    seoTitle: "Kombi Su Basıncı Neden Düşer? | Vora Teknik",
    title: "Kombi Su Basıncı Neden Düşer?",
    description:
      "Kombi su basıncı tekrar düşüyorsa hangi belirtileri not etmelisiniz? Görünür kaçak, tesisat ve servis değerlendirmesi için güvenli kontrol rehberi.",
    category: "Kombi",
    image: "/images/hizmet-kombi.webp",
    imageAlt: "Kontrol paneli görünen duvara monte kombi",
    serviceHref: "/kombi-servisi",
    serviceLabel: "Kombi servisi",
    sections: [
      {
        id: "basinci-dogru-yorumlamak",
        title: "Basınç değerini çalışma koşuluyla birlikte okuyun",
        paragraphs: [
          "Kombi ekranında veya manometrede gördüğünüz basınç, tesisattaki suyun durumuna ilişkin bir bilgidir. Değeri yorumlarken cihazın soğuk mu sıcak mı olduğunu ve üreticinin önerdiği aralığı dikkate alın. İnternette verilen tek bir sayıyı bütün kombilere uygulamak yerine kendi modelinizin kullanım kılavuzuna bakın. Çalışma sırasında görülen değişimin anlamı bu koşullara göre değerlendirilir.",
          "Basıncın bir kez değişmesi ile her gün ya da birkaç gün içinde tekrar düşmesi aynı durum değildir. Sık su ekleme ihtiyacı varsa yalnızca ekrandaki değeri düzeltmek sorunun nedenini açıklamaz. Değişimin zamanını ve sıklığını not etmek, servis talebinde en yararlı başlangıç bilgilerinden biridir.",
        ],
      },
      {
        id: "olasi-nedenler",
        title:
          "Görünür kaçaktan sistem bileşenlerine kadar farklı nedenler olabilir",
        paragraphs: [
          "Radyatör vanaları, görülebilen boru bağlantıları veya cihazın altındaki damlama basınç kaybıyla ilişkili olabilir. Bunun yanında görünmeyen tesisat bölümleri ve cihazın bazı bileşenleri de teknik inceleme gerektirebilir. Dışarıdan gözlem yaparak her nedenin ayırt edilmesi mümkün değildir; tek bir belirtiye bakarak parça değişimi kararı verilmemelidir.",
          "Yakın zamanda petek havası alma, tesisat onarımı veya farklı bir servis işlemi yapıldıysa bunu da aktarın. Cihaz kapalıyken ve çalışırken kaydettiğiniz değerler karşılaştırmayı kolaylaştırır. Gözlemin amacı bağlantıları sökmek ya da cihazın içini açmak değil, değişimi güvenilir biçimde tarif etmektir.",
        ],
      },
      {
        id: "guvenli-gozlem",
        title: "Kullanıcı olarak güvenli biçimde neleri kontrol edebilirsiniz?",
        paragraphs: [
          "Ekrandaki uyarıyı okuyabilir, erişilebilir zemin ve bağlantı çevresinde su izi olup olmadığına bakabilirsiniz. Cihaz çevresinde birikmiş suyu elektrikli bölümlere dokunarak temizlemeye çalışmayın. Islaklık, olağan dışı koku veya güvenli kullanımdan kuşku duyduğunuz bir durum varsa cihaz üzerinde deneme yapmadan teknik destek alın.",
          "Su ekleme işlemi yalnızca üreticinin kendi modeliniz için açıkladığı yöntemle ve uygun koşullarda ele alınmalıdır. Doldurma musluğunu tanımıyorsanız rastgele vana çevirmeyin. Basıncı yükseltmek için sürekli su eklemek, tekrar eden kaybın incelenmesini geciktirebilir. Gaz hattı, emniyet elemanları ve cihaz içi parçalar kullanıcı müdahalesi için uygun değildir.",
        ],
        checklist: [
          "Soğuk ve sıcak durumdaki basınç değerlerini not edin.",
          "Düşüşün kaç saatte veya kaç günde tekrarlandığını kaydedin.",
          "Görülebilen damlama ve su izlerini yalnızca dışarıdan gözlemleyin.",
          "Hata kodunu ve yakın zamanda yapılan işlemleri servise bildirin.",
        ],
      },
      {
        id: "servis-talebini-netlestirmek",
        title: "Tekrarlayan kayıpta değerlendirme planlayın",
        paragraphs: [
          "Servis talebinde basıncın hangi koşulda düştüğünü anlatın; yalnızca düşük olduğunu söylemek yerine sıklığı ve eşlik eden belirtileri paylaşın. Kontrol kapsamı, önerilen işlem ve ücret koşulları hakkında bilgi isteyin. Kesin neden ve çözüm, cihazla tesisatın birlikte değerlendirilmesinden sonra belirlenebilir. İşlem sonrası kayıtları saklamak tekrar eden durumların takibini kolaylaştırır.",
        ],
      },
    ],
    faqs: [
      {
        q: "Kombiye sık sık su eklemek normal mi?",
        a: "Tekrarlayan su ekleme ihtiyacı değerlendirilmelidir. Basınç kaybının sıklığını kaydetmek ve olası kaçak ya da teknik nedenler için servis talep etmek daha yararlıdır.",
      },
      {
        q: "Hangi basınç değeri benim kombim için uygundur?",
        a: "Cihazınızın kullanım kılavuzundaki öneriyi izleyin. Model ve ölçümün soğuk ya da sıcak çalışma sırasında yapılması yorumu etkileyebilir.",
      },
      {
        q: "Basınç düşmesi mutlaka kombinin bozulduğu anlamına mı gelir?",
        a: "Hayır. Görünür bağlantılar, tesisat ve cihaz bileşenleri gibi farklı nedenler olabilir. Kaynağın ayırt edilmesi için teknik değerlendirme gerekebilir.",
      },
    ],
    wordCount: 467,
    readMinutes: 3,
    publishedAt: "2026-10-28",
    updatedAt: "2026-10-28",
  },
  {
    slug: "klima-neden-yeterince-sogutmaz",
    seoTitle: "Klima Neden Soğutmaz? Kontrol Rehberi | Vora Teknik",
    title: "Klima Neden Yeterince Soğutmaz? Güvenli Kontrol Rehberi",
    description:
      "Klimanız çalışıyor ama oda serinlemiyorsa mod, filtre ve hava akışını nasıl değerlendirebilirsiniz? İlk kontrolleri ve servis gereken belirtileri öğrenin.",
    category: "Klima",
    image: "/images/hizmet-klima.webp",
    imageAlt: "Yaşam alanında duvara monte klima",
    readMinutes: 3,
    serviceHref: "/klima-servisi",
    serviceLabel: "Klima servisi",
    sections: [
      {
        id: "belirtiyi-tanimlayin",
        title: "Önce değişen durumu tarif edin",
        paragraphs: [
          "Klimanın üflemesi, odanın yeterince serinlediği anlamına gelmez. Önce sorunun ne zaman başladığını düşünün: Cihaz daha önce aynı odada yeterli miydi, yalnızca öğleden sonra mı zorlanıyor, yoksa üfleme gücü de mi azaldı? Bu ayrım, ayar veya kullanım koşullarıyla teknik bir arızayı birbirinden ayırmaya yardımcı olur.",
          "Servis görüşmesi için marka ve modeli, varsa ekrandaki hata kodunu ve sorunun sürekli mi aralıklı mı olduğunu not edin. Kodun fotoğrafını çekmek faydalıdır; anlamını bilmeden art arda sıfırlama yapmayın. Gözleminizi paylaşın, kesin teşhisi cihaz kontrol edilmeden koymaya çalışmayın.",
        ],
      },
      {
        id: "mod-ve-ayar",
        title: "Çalışma modunu ve ortamı kontrol edin",
        paragraphs: [
          "Kumandada soğutma modunun seçili olduğundan emin olun. Yalnızca fan modu odadaki havayı dolaştırır; beklenen soğutmayı sağlamaz. Hedef sıcaklık, zamanlayıcı ve kullanım kılavuzundaki çalışma koşullarını inceleyin. En düşük dereceyi seçmek, her durumda odanın daha hızlı soğuyacağı anlamına gelmez.",
          "Kapı veya pencerelerin açık kalması, yoğun güneş ve odadaki ısı üreten cihazlar yükü artırır. Perde veya güneşlik kullanmak ve gereksiz hava alışverişini azaltmak yardımcı olabilir. Klima kapasitesinin alanla uyumu da önemlidir; kapasite kararı yalnızca oda metrekaresine bakılarak verilmemelidir.",
        ],
      },
      {
        id: "filtre-ve-akis",
        title: "Filtre ve hava yolunu gözden geçirin",
        paragraphs: [
          "Kirli filtre hava geçişini sınırlayabilir. Kullanıcı tarafından sökülebilen filtre için yalnızca üreticinin temizleme adımlarını izleyin; cihazı kapatın ve kılavuzdaki güvenli enerji kesme yöntemine uyun. Elektrikli bölümlere sıvı uygulamayın. Tam kurumamış bir filtreyi yerine takmayın.",
          "Üfleme veya emiş bölümünü perde, mobilya ya da dekorun kapatmadığını kontrol edin. Dış ünitenin çevresinde belirgin bir engel varsa durumu servise bildirin. Yüksekteki üniteye ulaşmaya çalışmayın; kapakları açmak veya fanın yakınına müdahale etmek kullanıcı kontrolünün parçası değildir.",
        ],
      },
      {
        id: "her-sorun-gaz-degil",
        title: "Her soğutma sorunu gaz eksikliği değildir",
        paragraphs: [
          "Soğutucu akışkan eksikliği olası nedenlerden yalnızca biridir. Sensör, fan, elektrik beslemesi veya bakım ihtiyacı da benzer belirtiler oluşturabilir. Bu nedenle kontrol yapılmadan yalnızca gaz dolumu istemek sorunun kaynağını çözmeyebilir. Akışkan ölçümü, kaçak değerlendirmesi ve dolum işlemleri uygun ekipmanla teknik personel tarafından yapılmalıdır.",
        ],
      },
      {
        id: "servis-gerektiren-belirtiler",
        title: "Ne zaman teknik kontrol gerekir?",
        paragraphs: [
          "Ayarlar uygun olduğu halde performans düzelmiyorsa servis talebi oluşturun. Buzlanma, tekrarlayan hata kodu, alışılmadık ses, su kaçağı veya sigorta attırma da kontrol gerektirir. Yanık kokusu ya da elektriksel bir belirti varsa cihazı kullanmayı bırakın; güvenli biçimde enerjisini kesebiliyorsanız kesin ve teknik destek alın.",
        ],
      },
    ],
    faqs: [
      {
        q: "Klimayı en düşük dereceye almak sorunu çözer mi?",
        a: "Her zaman değil. Yanlış mod, hava akışı sorunu veya teknik arıza varsa sıcaklığı daha fazla düşürmek nedenini ortadan kaldırmaz. Önce kullanım ayarlarını ve cihazın belirtilerini değerlendirin.",
      },
      {
        q: "Soğutmayan klimaya mutlaka gaz mı eklenir?",
        a: "Hayır. Gaz ekleme kararı ölçüm ve gerekli kontrollerden sonra verilir. Eksiklik varsa nedeni de araştırılmalıdır; işlem yapılmadan teşhis veya sonuç sözü verilmemelidir.",
      },
      {
        q: "Filtreyi kendim temizleyebilir miyim?",
        a: "Yalnızca modelin kılavuzunda kullanıcıya ayrılan filtre bakımı yapılabilir. İç ünite kimyasal temizliği, elektrikli bölümler veya dış üniteye erişim için teknik destek gerekir.",
      },
    ],
    wordCount: 455,
    publishedAt: "2026-10-28",
    updatedAt: "2026-10-28",
  },
  {
    slug: "klima-temizligi-ne-zaman-yapilmali",
    seoTitle: "Klima Temizliği Ne Zaman Yapılmalı? | Vora Teknik",
    title: "Klima Temizliği Ne Zaman Yapılmalı? Pratik Bakım Rehberi",
    description:
      "Klima temizliği için tek takvim herkese uymaz. Kullanım yoğunluğu, filtre durumu ve üretici önerileriyle bakım ihtiyacını nasıl değerlendireceğinizi okuyun.",
    category: "Klima",
    image: "/images/hizmet-klima.webp",
    imageAlt: "Aydınlık bir odada iç duvar klima ünitesi",
    readMinutes: 3,
    serviceHref: "/klima-servisi",
    serviceLabel: "Klima bakımı",
    sections: [
      {
        id: "tek-takvim-yok",
        title: "Temizlik aralığını kullanım koşulları belirler",
        paragraphs: [
          "Günde birkaç saat çalışan bir ev klimasıyla uzun süre kullanılan bir iş yeri klimasının bakım ihtiyacı aynı değildir. Toz, evcil hayvanlar, açık pencere kullanımı ve cihazın bulunduğu ortam filtrelerin kirlenme hızını etkiler. Bu nedenle bütün klimalar için geçerli kesin bir temizlik süresi söylemek doğru olmaz.",
          "Başlangıç noktası, cihazın kullanım kılavuzundaki önerilerdir. Filtreyi önerilen aralıklarla gözden geçirmek ve kullanım yoğunluğu değiştiğinde kontrol sıklığını yeniden değerlendirmek gerekir. Mevsim başında bakım planlamak pratik olabilir; ancak belirgin bir sorun ortaya çıktıysa sezonu beklemek yerine cihazı değerlendirtin.",
        ],
      },
      {
        id: "ihtiyac-belirtileri",
        title: "Hangi belirtiler bakım ihtiyacını düşündürür?",
        paragraphs: [
          "Hava akışının azalması, iç ünitede gözle görülen kir, normalden farklı ses veya cihaz çalışırken fark edilen koku kontrol gerektirebilir. Kötü koku yalnızca kirli filtreyle açıklanmayabilir; drenaj veya başka bir sorun da söz konusu olabilir. Belirtiyi kaydedin ve ne zaman oluştuğunu servise anlatın.",
          "Bakım, mevcut bir arızanın kesin tedavisi olarak sunulmamalıdır. Örneğin cihaz su damlatıyorsa yalnızca filtre yıkamak yeterli olmayabilir. İşlemin kapsamı, gözlenen sorun ve cihazın durumuna göre belirlenmelidir. Temizlik yapılmış olması da bütün bileşenlerin sorunsuz olduğu anlamına gelmez.",
        ],
      },
      {
        id: "kullanici-bakimi",
        title: "Kullanıcının yapabileceği bölüm sınırlıdır",
        paragraphs: [
          "Kılavuzda kullanıcı tarafından çıkarılabildiği belirtilen filtreleri, üreticinin önerdiği yöntemle temizleyebilirsiniz. Önce cihazı kapatın ve kılavuzdaki güvenli enerji kesme adımını uygulayın. Filtreye uygun olmayan kimyasal, aşırı sıcak su veya sert fırça kullanmayın. Yerine takmadan önce tamamen kuruduğundan emin olun.",
          "İç ünitenin dış yüzeyini temizlerken de üreticinin talimatları geçerlidir. Elektrikli alanlara su püskürtmeyin; cihazın içine temizlik ürünü dökmeyin. Yüksek veya erişilmesi zor dış üniteyi kendi başınıza temizlemeye çalışmayın. Ulaşmak için dengesiz sandalye ya da benzeri destekler kullanmak güvenli değildir.",
        ],
      },
      {
        id: "profesyonel-bakim",
        title: "Profesyonel bakımda kapsamı sorun",
        paragraphs: [
          "Servis talebinde yalnızca 'klima temizliği' demek yerine beklentinizi paylaşın. Filtre, iç ünite, hava yolu ve drenaj kontrollerinden hangilerinin planlandığını; modele uygun yöntemi ve varsa ek işlemleri sorun. Bakım ile arıza tespiti veya parça değişiminin aynı işlem olmadığını netleştirin.",
          "İşlem öncesinde ücret ve kapsam hakkında bilgi isteyin. Ek bir ihtiyaç belirlenirse uygulanacak yöntem ve maliyetin önce sizinle konuşulmasını talep edin. Temizlik sonrası belirli bir enerji tasarrufu yüzdesi veya bütün kokuların kesin giderileceği gibi sonuçlar, cihaz değerlendirilmeden vaat edilmemelidir.",
        ],
      },
      {
        id: "bakim-sonrasi",
        title: "Bakım sonrasında cihazı gözlemleyin",
        paragraphs: [
          "İşlem sonrasında kullanım önerilerini ve bir sonraki kontrolün hangi koşullarda planlanacağını öğrenin. Hava akışı, ses veya su tahliyesinde farklılık devam ederse bunu gecikmeden servise bildirin. Tarih, yapılan işlemler ve varsa değişen parçaları not etmek, sonraki değerlendirmelerde daha sağlıklı bir geçmiş sunar.",
        ],
      },
    ],
    faqs: [
      {
        q: "Klima her yıl aynı tarihte mi temizlenmeli?",
        a: "Kullanım ve ortam koşulları farklı olduğu için yalnızca takvime bağlı kalmak yeterli değildir. Modelin üretici önerilerini izleyin; belirti veya yoğun kullanım varsa aralığı yeniden değerlendirin.",
      },
      {
        q: "Filtre temizliği bütün klima bakımının yerine geçer mi?",
        a: "Hayır. Filtre kontrolü kullanıcı bakımının bir bölümüdür. Drenaj, iç bileşenler ve çalışma performansı gibi konular için modele uygun teknik değerlendirme gerekebilir.",
      },
      {
        q: "Koku varsa cihazı kullanmaya devam edebilir miyim?",
        a: "Kokunun nedeni değerlendirilmelidir. Özellikle yanık veya elektriksel koku varsa kullanımı bırakıp teknik destek alın. Kesin nedeni bilmeden temizlik ürünü püskürtmeyin.",
      },
    ],
    wordCount: 492,
    publishedAt: "2026-10-28",
    updatedAt: "2026-10-28",
  },
  {
    slug: "peteklerin-alti-neden-soguk",
    seoTitle: "Peteklerin Altı Neden Soğuk? | Vora Teknik",
    title: "Peteklerin Altı Neden Soğuk? Isınma Sorunları Rehberi",
    description:
      "Peteklerin altının soğuk kalması her zaman temizlik gerektirmez. Hava, vana ve dolaşım belirtilerini ayırarak teknik kontrolü nasıl planlayacağınızı öğrenin.",
    category: "Petek",
    image: "/images/hizmet-petek.webp",
    imageAlt: "Pencere yanında beyaz panel radyatör",
    readMinutes: 3,
    serviceHref: "/petek-temizligi",
    serviceLabel: "Petek temizliği ve kontrolü",
    sections: [
      {
        id: "normal-fark-mi",
        title: "Önce sıcaklık farkının boyutuna bakın",
        paragraphs: [
          "Petek yüzeyinin her noktasının aynı sıcaklıkta olmaması tek başına arıza kanıtı değildir. Sistemin çalışma biçimine göre üst ve alt arasında bir miktar fark görülebilir. Ancak belirgin soğuk alanlar, odanın yeterince ısınmaması veya önceki kullanıma göre performans kaybı varsa değerlendirme yapılmalıdır.",
          "Sorun yalnızca bir petekte mi, birkaç odada mı, yoksa bütün evde mi görülüyor? Isıtma ilk açıldığında mı oluyor, çalışma ilerledikçe değişiyor mu? Bu gözlemler, tek bir radyatörle ilgili durum ile sistem genelindeki dolaşım sorununu ayırmak için önemlidir. Kesin sonuca yalnızca dokunarak varmayın.",
        ],
      },
      {
        id: "vanalar-ve-ortam",
        title: "Vana konumu ve hava dolaşımını inceleyin",
        paragraphs: [
          "Kullanım için tasarlanmış vana veya termostatik başlıkların ayarını, modelin talimatlarına göre kontrol edin. Kapalı bir vana veya uygun olmayan ayar, peteğe giden akışı etkileyebilir. Sıkışmış vanayı zorlamayın; bağlantı noktalarını sökmeyin. Ayardan emin değilseniz durumunu fotoğraflayıp servisle paylaşın.",
          "Kalın perde, büyük mobilya veya petek üstünü kapatan eşyalar odanın ısı almasını zorlaştırabilir. Güvenli mesafeyi koruyarak hava dolaşımını açık tutun. Odanın serin olması her zaman peteğin kirli olduğunu göstermez; ısı kaybı, kullanım ayarı ve sistemin çalışması birlikte değerlendirilmelidir.",
        ],
      },
      {
        id: "hava-ve-dolasim",
        title: "Hava ile dolaşım sorununu karıştırmayın",
        paragraphs: [
          "Hava, pompa çalışması, tesisat dengesi veya akıştaki başka bir sorun farklı ısınma belirtileri oluşturabilir. Kombi basıncı da modelin önerileriyle birlikte değerlendirilir; bütün cihazlara tek bir değer veya işlem tarifi uygulanmaz. Basınç sürekli değişiyorsa bunun nedenini araştırmak gerekir.",
          "Sıcak ve basınçlı tesisatta bilinçsiz müdahale su kaçağına veya yanmaya yol açabilir. Petek havası alma dâhil kullanıcı işlemlerinde üretici kılavuzunun sınırları geçerlidir. İşlemi bilmiyorsanız veya sistemde kaçak varsa vana açarak deneme yapmak yerine teknik destek isteyin.",
        ],
      },
      {
        id: "temizlik-karari",
        title: "Temizlik kararı kontrolden sonra verilmeli",
        paragraphs: [
          "Tesisatta birikinti bulunması bazı durumlarda akışı etkileyebilir. Fakat bütün dengesiz ısınmaların tek çözümü temizlik değildir. Servis, gözlenen belirtilere göre sistemin durumunu ve uygun işlem kapsamını değerlendirmelidir. Kullanılacak yöntemin tesisat malzemesi ve cihazla uyumunu da sorun.",
          "Petek temizliğinden önce hangi sorunun hedeflendiğini, işlem kapsamını ve ücretini netleştirin. Parça değişimi veya başka bir uygulama gerekirse bunun ayrıca açıklanmasını isteyin. Cihaz ve bina koşulları incelenmeden kesin sıcaklık artışı ya da belirli tasarruf yüzdesi vaat edilmesi sağlıklı bir yaklaşım değildir.",
        ],
      },
      {
        id: "talep-hazirligi",
        title: "Servis görüşmesine hangi bilgilerle hazırlanmalı?",
        paragraphs: [
          "Kombi modelini, etkilenen odaları, sistemdeki hata kodunu ve varsa sızıntıyı not edin. Yakın zamanda yapılan işlem veya ayar değişikliğini paylaşın. Bu bilgiler servis planlamasını kolaylaştırır; yerinde yapılması gereken kontrolün yerine geçmez. Akıntı veya anormal çalışma varsa kullanıma ilişkin güvenli adımı teknik personele danışın.",
        ],
      },
    ],
    faqs: [
      {
        q: "Petek altının soğuk olması mutlaka kir belirtisi mi?",
        a: "Hayır. Birikinti olası nedenlerden biridir; vana, hava, dolaşım ve sistem ayarları da değerlendirilmelidir. İşlem seçimi, yalnızca tek belirtiye dayanarak yapılmamalıdır.",
      },
      {
        q: "Sadece bir petek ısınmıyorsa ne söylemeliyim?",
        a: "Hangi odada olduğunu, diğer peteklerin durumunu ve vananın mevcut ayarını paylaşın. Ses, sızıntı veya yakın zamanda yapılmış işlem varsa bunları da belirtin.",
      },
      {
        q: "Temizlik sonrası kesin tasarruf olur mu?",
        a: "Sonuç; tesisatın durumu, bina, kullanım ve cihaz koşullarına bağlıdır. Kontrol yapılmadan sabit tasarruf oranı veya kesin fatura düşüşü sözü verilmemelidir.",
      },
    ],
    wordCount: 483,
    publishedAt: "2026-10-28",
    updatedAt: "2026-10-28",
  },
  {
    slug: "evde-enerji-verimliligi-onerileri",
    seoTitle: "Evde Isıtma ve Soğutmada Verimlilik | Vora Teknik",
    title: "Evde Isıtma ve Soğutmada Verimli Kullanım",
    description:
      "Kombi, klima ve petek kullanımında konforu korumaya yönelik pratik öneriler. Hava akışı, ayarlar ve bakım alışkanlıklarını birlikte değerlendirin.",
    category: "Rehber",
    image: "/images/hizmet-klima.webp",
    imageAlt: "Düzenli bir yaşam alanında duvara monte klima",
    serviceHref: "/klima-servisi",
    serviceLabel: "Klima servisi",
    sections: [
      {
        id: "evin-ihtiyacini-tanimak",
        title: "Konfor hedefini ve evin koşullarını birlikte değerlendirin",
        paragraphs: [
          "Enerji kullanımı yalnızca cihazın ayarına bağlı değildir. Evin yalıtımı, pencere durumu, güneş alması, oda büyüklüğü ve kullanım süresi de sonucu etkiler. Bu nedenle herkes için aynı faturayı veya sabit bir tasarruf oranını vadetmek doğru olmaz. Önce hangi odalarda, hangi saatlerde ve hangi koşullarda konfor sorunu yaşadığınızı belirleyin.",
          "Termostat veya kumanda ayarlarını sürekli en uç değerlere taşımak yerine ihtiyaca uygun ve izlenebilir bir düzen oluşturun. Kullanmadığınız saatler için cihazın desteklediği programlama özelliklerini kılavuzdan inceleyin. Isıtma ve soğutma sistemlerini aynı anda birbirine karşı çalıştırmamak, gereksiz kullanımın önüne geçmek için basit bir başlangıçtır.",
        ],
      },
      {
        id: "hava-ve-isi-dolasimi",
        title: "Hava ve ısı dolaşımının önünü açın",
        paragraphs: [
          "Peteklerin önüne yerleştirilen büyük koltuklar ve radyatörü tamamen örten perdeler ısının odaya dağılmasını etkileyebilir. Klimanın hava giriş ve çıkışının mobilya veya başka eşyalarla kapanmamasına dikkat edin. Cihaz çevresindeki açıklıklar konusunda üreticinin montaj ve kullanım koşullarını esas alın; dış ünitenin yerini kendiniz değiştirmeyin.",
          "Güneşin güçlü olduğu saatlerde uygun gölgelendirme, soğutma ihtiyacını etkileyen çevresel koşullardan biridir. Kapı ve pencerelerin açık kalıp kalmadığını kontrol edin. Havalandırmayı tamamen bırakmak yerine kısa ve planlı biçimde yapmak, evin kullanım koşullarını yönetmeye yardımcı olabilir. Rutubet, koku veya iç hava sorunu varsa yalnızca sıcaklık ayarıyla çözüm beklemeyin.",
        ],
      },
      {
        id: "bakim-ve-kontrol",
        title: "Bakımı kullanım alışkanlıklarının bir parçası yapın",
        paragraphs: [
          "Klima filtresinin kullanıcı tarafından temizlenebilen bir parçası varsa işlemi yalnızca kılavuzdaki yöntemle ve cihaz güvenli biçimde kapalıyken yapın. Islak filtreyi yerine takmayın; cihazın içine su veya rastgele temizlik kimyasalı uygulamayın. İç bileşenlere erişim, elektrik bağlantıları ve soğutucu akışkanla ilgili işlemler teknik değerlendirme gerektirir.",
          "Kombi ve tesisat tarafında dengesiz ısınma, tekrarlayan basınç kaybı veya olağan dışı ses varsa bunları kaydedin. Her sorunun çözümü aynı bakım veya temizlik işlemi değildir. Doğru değerlendirme, ihtiyaç olmayan bir işlemin yapılmasını da önleyebilir. Servis kapsamının cihazın durumuna göre açıklanmasını ve işlem öncesi bilgilendirme yapılmasını isteyin.",
        ],
        checklist: [
          "Kumanda ve termostat programlarını kılavuzdan inceleyin.",
          "Petek ve klima çevresindeki hava akışını açık tutun.",
          "Pencere, kapı ve gölgelendirme alışkanlıklarını gözden geçirin.",
          "Tekrarlayan teknik belirtiler için kayıt tutup destek isteyin.",
        ],
      },
      {
        id: "sonuclari-izlemek",
        title: "Değişikliklerin etkisini aynı koşullarda izleyin",
        paragraphs: [
          "Kullanımı değerlendirirken dış hava sıcaklığını, evde geçirilen süreyi ve diğer tüketimleri de hesaba katın. Bir aydaki fatura değişimini tek bir ayara bağlamak yanıltıcı olabilir. Konfor, güvenli kullanım ve cihazın önerilen çalışma koşullarını birlikte izleyin. Daha düşük tüketim hedefi, cihazın emniyet elemanlarına veya tesisata kullanıcı müdahalesi için gerekçe olmamalıdır.",
        ],
      },
    ],
    faqs: [
      {
        q: "Bakım yaptırınca belirli oranda tasarruf sağlanır mı?",
        a: "Her ev ve cihaz için sabit bir oran verilemez. Kullanım süresi, yalıtım, dış hava ve sistemin durumu tüketimi birlikte etkiler.",
      },
      {
        q: "Klimayı en düşük sıcaklığa ayarlamak daha hızlı çözüm sağlar mı?",
        a: "Kullanım kılavuzundaki uygun çalışma modunu ve konfor hedefini izleyin. Uç ayarlar, mevcut teknik bir sorunun nedenini ortadan kaldırmaz.",
      },
      {
        q: "Peteklerin önünü açmak neden öneriliyor?",
        a: "Büyük mobilya veya örtüler ısının odaya yayılmasını etkileyebilir. Radyatör çevresini uygun biçimde açık tutmak değerlendirilmesi kolay bir kullanım adımıdır.",
      },
    ],
    wordCount: 472,
    readMinutes: 3,
    publishedAt: "2026-10-28",
    updatedAt: "2026-10-28",
  },
  {
    slug: "teknik-servis-secerken-sorulacak-sorular",
    seoTitle: "Teknik Servis Seçerken Ne Sorulmalı? | Vora Teknik",
    title: "Teknik Servis Seçerken Sorulacak Sorular ve Ücretler",
    description:
      "Kombi ve klima servisi seçerken kapsam, değerlendirme ücreti, parça ihtiyacı ve randevu için ne sormalısınız? Açık iletişim sağlayan kontrol listesini okuyun.",
    category: "Rehber",
    image: "/images/hizmet-kombi.webp",
    imageAlt: "Düzenli tesisat bağlantıları olan kombi ünitesi",
    readMinutes: 3,
    serviceHref: "/kombi-servisi",
    serviceLabel: "Kombi servisi",
    sections: [
      {
        id: "ihtiyaci-anlatin",
        title: "İhtiyacınızı kısa ve somut anlatın",
        paragraphs: [
          "Servis ararken yalnızca cihazın çalışmadığını söylemek yerine ne olduğunu tarif edin. Marka ve model, ekrandaki hata, sorunun ne zaman başladığı ve daha önce yapılan işlem temel bilgilerdir. Klima için soğutma veya su damlatma, kombi için ısıtma ya da sıcak su gibi işlevi de belirtin.",
          "Adrese uygun hizmet kapsamı ve randevu durumu birlikte değerlendirilir. Cihazın konumu, dış üniteye erişim veya bina içindeki çalışma koşulları planlamayı etkileyebilir. Bir sonraki adımı netleştirecek kadar bilgi paylaşın; telefon görüşmesinde yapılacak açıklamanın her zaman yerinde teknik kontrolün yerine geçmeyeceğini bilin.",
        ],
      },
      {
        id: "hizmet-kapsami",
        title: "Bakım, arıza tespiti ve onarımı ayırın",
        paragraphs: [
          "Bakım, belirli kontroller veya temizlik işlemleri içerebilir; arıza tespiti ise sorunun kaynağını anlamayı hedefler. Onarım, tespit edilen ihtiyaca göre ayrıca planlanır. Bu başlıklar aynı hizmet değildir. Talebinizin hangi kapsamda değerlendirileceğini ve ücret bilgisinin neye ait olduğunu sorun.",
          "Marka adlarının veya ürün görsellerinin bulunması yetkili servis ilişkisini kanıtlamaz. Yetkili servis arıyorsanız üreticinin resmî kanallarından doğrulama yapın. Özel servis hizmeti alırken de işletmenin kimliğini, iletişim bilgisini ve sunduğu kapsamı açıkça öğrenin. Doğrulanmamış belge veya iş ortaklığı ifadelerine dayanarak karar vermeyin.",
        ],
      },
      {
        id: "ucret-sorulari",
        title: "Ücretin hangi koşulları kapsadığını sorun",
        paragraphs: [
          "İlk görüşmede değerlendirme veya servis ziyaretinin ücretli olup olmadığını öğrenin. Açıklanan tutarın yalnızca işçiliği mi, belirli bir işlemi mi, yoksa başka kalemleri de mi kapsadığını sorun. Parça ihtiyacı belirlenirse maliyetin nasıl paylaşılacağını ve işlem öncesinde onayınızın alınıp alınmayacağını netleştirin.",
          "Cihaz kontrol edilmeden verilen tek bir rakam, bütün olasılıkları kapsamayabilir. Bu nedenle kapsamı belirsiz en düşük fiyat yerine karşılaştırılabilir bilgi isteyin. Yazılı teklif veya işlem açıklaması, sonradan hatırlama güçlüğünü azaltır. Açıklanmayan ek işlem yapılmasını istemiyorsanız bunu görüşmenin başında belirtin.",
        ],
      },
      {
        id: "randevu-ve-hazirlik",
        title: "Randevu ve erişim koşullarını netleştirin",
        paragraphs: [
          "Randevu aralığını, değişiklik olduğunda nasıl haber verileceğini ve teknisyenin gelişinde hangi bilginin paylaşılacağını konuşun. Cihazın çevresini güvenli erişim için düzenleyebilirsiniz; fakat ağır bir cihazı taşımayın, bağlantı sökmeyin veya yüksekteki dış üniteyi kendiniz ulaşılabilir hâle getirmeye çalışmayın.",
          "Telefon, WhatsApp veya servis formundan ilettiğiniz talebin alındığını görmek, işlemin kapsamının ve zamanının kesinleştiği anlamına gelmez. Size dönüş yapıldığında adres ve cihaz bilgilerini teyit edin. Müsaitlik doğrulanmadan aynı gün ya da belirli bir sürede hizmet verileceğini varsaymayın.",
        ],
      },
      {
        id: "islem-sonrasi",
        title: "İşlem sonunda hangi bilgileri alın?",
        paragraphs: [
          "Yapılan kontrolü, uygulanan işlemi ve varsa değiştirilen parçayı sorun. Kullanım önerileri ile sorun devam ederse başvuracağınız iletişim yolunu öğrenin. Varsa işlem belgesi veya açıklamayı saklayın. Bu kayıtlar sonraki servis değerlendirmesini kolaylaştırır; açıklanmamış garanti koşulları yerine size yazılı verilen kapsamı esas alın.",
        ],
      },
    ],
    faqs: [
      {
        q: "Telefonla kesin onarım fiyatı verilebilir mi?",
        a: "Bazı işlemlerin kapsamı önceden açıklanabilir; ancak arıza ve parça ihtiyacı kontrol gerektirebilir. Paylaşılan ücretin hangi işlemi kapsadığını ve olası ek kalemleri mutlaka sorun.",
      },
      {
        q: "Talep formu doldurmak randevuyu kesinleştirir mi?",
        a: "Form genellikle iletişim ve planlama talebidir. Uygunluk, adres ve cihaz bilgileri görüşüldükten sonra randevu ayrıntıları birlikte netleştirilmelidir.",
      },
      {
        q: "İşlem sonunda sorun sürerse ne yapmalıyım?",
        a: "Belirtinin devam ettiğini, ne zaman ortaya çıktığını ve yapılan işlemi paylaşarak aynı iletişim kanalından geri bildirim verin. Yeni müdahaleye geçmeden önce değerlendirme isteyin.",
      },
    ],
    wordCount: 489,
    publishedAt: "2026-10-28",
    updatedAt: "2026-10-28",
  },
  {
    slug: "kis-oncesi-kombi-petek-kontrol-listesi",
    seoTitle: "Kış Öncesi Kombi ve Petek Kontrolü | Vora Teknik",
    title: "Kış Öncesi Kombi ve Petek Kontrol Listesi",
    description:
      "Kış öncesinde kombi ve petekleri nasıl gözlemleyebilirsiniz? Ekran, görünür kaçak, ısı dağılımı ve servis randevusu için pratik hazırlık listesi.",
    category: "Petek",
    image: "/images/hizmet-petek.webp",
    imageAlt: "Aydınlık bir odada panel radyatör",
    serviceHref: "/petek-temizligi",
    serviceLabel: "Petek temizliği",
    sections: [
      {
        id: "onceki-kayitlari-toplamak",
        title: "Önce cihazın geçmişini gözden geçirin",
        paragraphs: [
          "Isıtma sezonundan önce kısa bir hazırlık yapmak, servis ihtiyacını daha net anlatmanıza yardımcı olur. Kombinin kullanım kılavuzunu ve varsa önceki servis kaydını bulun. Geçen kış bazı odaların geç ısınması, sıcak suda dalgalanma veya sık basınç düşmesi yaşandıysa bunları not edin. Yeni sezonu yalnızca cihazı çalıştırarak değerlendirmek yerine önceki belirtileri de hatırlayın.",
          "Bu liste kullanıcı tarafından yapılabilecek dış gözlemler içindir. Kombi kapağını açmak, gaz bağlantılarını kontrol amacıyla sökmek veya tesisat elemanlarını değiştirmek hazırlık adımı değildir. Cihazın güvenli kullanımına ilişkin kuşku varsa deneme yapmadan uygun teknik destek isteyin.",
        ],
      },
      {
        id: "gorunur-kontroller",
        title: "Ekran, çevre ve erişilebilir bağlantıları gözlemleyin",
        paragraphs: [
          "Ekranda hata ya da uyarı bulunup bulunmadığını okuyun. Basınç değerini kendi modelinizin kılavuzundaki koşullarla karşılaştırın; farklı marka ve modellere ait genel internet önerilerini doğrudan uygulamayın. Cihazın altında veya radyatörlerin çevresinde görülebilen su izi varsa konumunu not edin. Elektrikli bölümlere ulaşan suya dokunarak müdahale etmeyin.",
          "Kombi çevresindeki eşyaları erişimi engellemeyecek şekilde düzenleyin. Hava girişleri ve üreticinin açık kalmasını istediği alanlar kapatılmamalıdır. Baca veya dış bağlantılara kendi başınıza işlem uygulamayın. Randevu sırasında erişimin nasıl sağlanacağını ve varsa apartmanla ilgili düzenlemeleri önceden konuşmak servis planlamasını kolaylaştırır.",
        ],
        checklist: [
          "Ekran uyarısını ve model bilgisini not edin.",
          "Görünür su izlerini dışarıdan gözlemleyin.",
          "Cihaz çevresini erişilebilir bırakın.",
          "Üreticinin önerdiği kullanım koşullarını kılavuzdan kontrol edin.",
        ],
      },
      {
        id: "peteklerde-isi-dagilimi",
        title: "Peteklerdeki ısı dağılımını tek belirtiyle yorumlamayın",
        paragraphs: [
          "Sistem uygun koşullarda çalışırken odalar arasındaki ısınma farkını ve peteklerin hangi bölümlerinin soğuk kaldığını gözlemleyebilirsiniz. Hava, vana ayarı, dolaşım sorunları veya tesisat birikintisi gibi farklı nedenler benzer belirtiler oluşturabilir. Altı soğuk bir petek için doğrudan temizlik ya da parça değişimi kararı vermek yerine sistemin birlikte değerlendirilmesini isteyin.",
          "Radyatörlerin önünü kapatan mobilya ve perdeleri de kontrol edin. Kullanmadığınız odaların ayarları konusunda tesisatın çalışma biçimini ve üretici önerilerini dikkate alın. Kılavuzu ve doğru uygulama koşullarını bilmiyorsanız rastgele vana çevirmeyin veya sistemden su boşaltmayın. Güvenli dış gözlem, kontrol randevusu için yeterli bilgi sağlayabilir.",
        ],
      },
      {
        id: "servis-planlamasi",
        title: "Gerekli işlemi birlikte netleştirin",
        paragraphs: [
          "Servis talebinde cihazın marka-modelini, gözlemlediğiniz belirtileri, hangi odaların etkilendiğini ve önceki işlemleri paylaşın. Bakım, arıza tespiti ve petek temizliği farklı kapsamlar içerebilir. İşlemin neden önerildiğini, nasıl ücretlendirileceğini ve ek ihtiyaç çıkarsa nasıl bilgilendirileceğinizi sorun. Yapılan işlemleri kaydetmek, sezon boyunca aynı belirti tekrarlandığında daha tutarlı bir takip sağlar.",
          "Kontrol listesi cihazın sorunsuz veya güvenli çalıştığına dair teknik bir onay yerine geçmez. Amaç, evinizin ihtiyacını daha iyi tarif etmek ve uygun servis planını oluşturmak için hazırlanmaktır.",
        ],
      },
    ],
    faqs: [
      {
        q: "Kış öncesi bütün petekler mutlaka temizlenmeli mi?",
        a: "Temizlik ihtiyacı sistemin durumuna göre değerlendirilir. Dengesiz ısınmanın hava, vana ayarı veya dolaşım gibi farklı nedenleri de olabilir.",
      },
      {
        q: "Kontrol için kombinin içini açmam gerekiyor mu?",
        a: "Hayır. Kullanıcı hazırlığı ekran bilgilerini okumak, dışarıdan görülebilen izleri not etmek ve erişimi düzenlemekle sınırlıdır.",
      },
      {
        q: "Servis talebinde hangi bilgileri vermeliyim?",
        a: "Marka-model, hata kodu, belirtinin ne zaman oluştuğu, etkilenen odalar ve önceki servis işlemleri planlama için yararlıdır.",
      },
    ],
    wordCount: 471,
    readMinutes: 3,
    publishedAt: "2026-10-28",
    updatedAt: "2026-10-28",
  },
];

export const blogCategories = ["Kombi", "Klima", "Petek", "Rehber"] as const;

export function findBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
