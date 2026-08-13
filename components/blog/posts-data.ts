export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  categorySlug: string;
  excerpt: string;
  readTime: string;
  date: string;
  content: ContentBlock[];
}

export const BLOG_POSTS: BlogPost[] = [
  // ================= DANIŞMANLIK VE KARAR SÜRECİ =================
  {
    slug: "danismanlik-almak-neden-onemlidir",
    title: "Yurt Dışı Eğitim Danışmanlığı Almak Neden Önemlidir?",
    categorySlug: "danismanlik-ve-karar-sureci",
    excerpt:
      "Yurt dışı eğitim danışmanlığının başvuru sürecinizde neden kritik bir fark yarattığını, kendi başınıza başvurmanın risklerini ve profesyonel destek almanın somut avantajlarını anlatıyoruz.",
    readTime: "6 dk okuma",
    date: "12 Ocak 2026",
    content: [
      {
        type: "paragraph",
        text: "\"Yurt dışı eğitim danışmanlığı almalı mıyım, yoksa başvuruyu kendim mi yapmalıyım?\" sorusu, yurt dışında okumayı planlayan hemen her öğrencinin ve ailenin karşısına çıkar. İnternet üzerinden tek başına başvuru yapmak teorik olarak mümkün olsa da, pratikte üniversite seçiminden vize başvurusuna kadar onlarca değişkenin doğru yönetilmesi gerekir. Bir yurt dışı eğitim danışmanlığı hizmeti, bu karmaşık süreci sizin için sadeleştirir.",
      },
      {
        type: "heading",
        text: "Danışmansız Başvurunun Riskleri",
      },
      {
        type: "paragraph",
        text: "Öğrenci vizesi başvurularının reddedilme sebeplerinin büyük bölümü, eksik veya hatalı hazırlanmış evraklardan kaynaklanır. Yurt dışı eğitim danışmanlığı almadan ilerleyen öğrenciler genellikle şu hatalarla karşılaşır:",
      },
      {
        type: "list",
        items: [
          "Hedef ülkenin ve okulun gerçek kabul kriterlerini tam olarak bilmeden başvuru yapmak",
          "Niyet mektubunu (motivation letter) vize memurunun beklentilerine uygun kurgulayamamak",
          "Finansal yeterlilik belgelerini eksik veya yanlış formatta sunmak",
          "Başvuru ve vize son tarihlerini kaçırarak dönem kaybetmek",
        ],
      },
      {
        type: "heading",
        text: "Profesyonel Danışmanlığın Somut Faydaları",
      },
      {
        type: "paragraph",
        text: "İyi bir eğitim danışmanlığı hizmeti, sadece evrak hazırlamakla sınırlı değildir. Profilinize uygun ülke ve okul seçiminden, vize başvuru stratejisine, konaklama planlamasından varış sonrası oryantasyona kadar uçtan uca bir süreç yönetimi sunar. Bu sayede zamandan tasarruf eder, gereksiz masraflardan kaçınır ve en önemlisi, başvurunuzu güçlü bir dosyayla sunarsınız.",
      },
      {
        type: "quote",
        text: "Doğru danışmanlık, sadece 'evrak hazırlamak' değil; doğru ülkeyi, doğru zamanı ve doğru stratejiyi birlikte kurgulamaktır.",
      },
      {
        type: "heading",
        text: "VEYO Education Farkı",
      },
      {
        type: "paragraph",
        text: "VEYO Education'da danışmanlarımızın büyük bir kısmı, bizzat yurt dışında eğitim almış eski uluslararası öğrencilerdir. Bu deneyim, size sadece teorik bilgi değil, gerçek yaşanmışlıklardan süzülen pratik tavsiyeler sunmamızı sağlar. Eğitim yolculuğunuzun her adımında yanınızda olacak bir ekiple çalışmak, hem stresinizi azaltır hem de kabul ve vize alma şansınızı önemli ölçüde artırır.",
      },
      {
        type: "paragraph",
        text: "Yurt dışı eğitim danışmanlığı almayı düşünüyorsanız, ilk adım ücretsiz bir ön görüşme planlamaktır. Hedeflerinizi dinleyip, size özel bir yol haritası çıkarmaktan mutluluk duyarız.",
      },
    ],
  },
  {
    slug: "neden-yurtdisi-egitim",
    title: "Neden Yurt Dışında Eğitim Almalısınız?",
    categorySlug: "danismanlik-ve-karar-sureci",
    excerpt:
      "Yurt dışında eğitim almanın akademik, kültürel ve kariyer açısından sağladığı avantajları; hangi öğrenciler için gerçekten mantıklı bir seçim olduğunu detaylıca inceliyoruz.",
    readTime: "5 dk okuma",
    date: "18 Ocak 2026",
    content: [
      {
        type: "paragraph",
        text: "\"Neden yurt dışı eğitim?\" sorusu, günümüzde giderek daha fazla öğrencinin ve velinin gündemine giriyor. Küreselleşen iş dünyasında, sadece yerel bir diplomaya sahip olmak yerine uluslararası tanınırlığı olan bir eğitim geçmişine sahip olmak, kariyer fırsatlarını önemli ölçüde genişletiyor.",
      },
      {
        type: "heading",
        text: "Akademik ve Kariyer Avantajları",
      },
      {
        type: "list",
        items: [
          "Dünya çapında tanınan üniversite diplomaları ve güçlü mezun ağları",
          "Farklı öğretim metodolojileriyle eleştirel düşünme ve problem çözme becerilerinin gelişmesi",
          "Uluslararası şirketlerin öncelikli olarak tercih ettiği bir özgeçmiş profili",
          "Staj ve araştırma projeleriyle erken yaşta profesyonel deneyim kazanma imkânı",
        ],
      },
      {
        type: "heading",
        text: "Kişisel Gelişim ve Kültürel Kazanımlar",
      },
      {
        type: "paragraph",
        text: "Yurt dışında eğitim, sadece akademik bir yatırım değildir. Farklı bir kültürde bağımsız yaşamayı öğrenmek, yeni bir dili günlük hayatta aktif kullanmak ve çok kültürlü ortamlarda iletişim kurmak, öğrencinin özgüvenini ve uyum yeteneğini kalıcı şekilde geliştirir. Bu deneyim, iş görüşmelerinde ve profesyonel hayatta fark yaratan bir kişisel gelişim hikâyesi sunar.",
      },
      {
        type: "heading",
        text: "Hangi Öğrenciler İçin Uygundur?",
      },
      {
        type: "paragraph",
        text: "Yurt dışı eğitim, sadece akademik olarak çok başarılı öğrenciler için değil; hedef odaklı, yeni deneyimlere açık ve bağımsız yaşamaya istekli her öğrenci için değerlendirilebilecek bir seçenektir. Bütçe ve hedeflere göre; Avrupa'nın uygun maliyetli destinasyonlarından, İngiltere ve Amerika gibi prestijli sistemlere kadar geniş bir yelpaze mevcuttur.",
      },
      {
        type: "quote",
        text: "Yurt dışında eğitim, bir diploma almaktan çok daha fazlasıdır — kendinizi ve dünyayı yeniden keşfetme fırsatıdır.",
      },
      {
        type: "paragraph",
        text: "Sizin için doğru ülke ve programın hangisi olduğuna karar vermek zor olabilir. VEYO Education'ın uzman danışmanları, profilinizi analiz ederek size özel, gerçekçi bir yol haritası sunar.",
      },
    ],
  },
  {
    slug: "yurtdisi-egitim-bana-neler-katacak",
    title: "Yurt Dışında Eğitim Bana Neler Katacak?",
    categorySlug: "danismanlik-ve-karar-sureci",
    excerpt:
      "Yurt dışı eğitimin kariyerinize, dil becerinize, network'ünüze ve kişisel gelişiminize somut olarak neler katacağını madde madde ele alıyoruz.",
    readTime: "5 dk okuma",
    date: "24 Ocak 2026",
    content: [
      {
        type: "paragraph",
        text: "Yurt dışında eğitim almayı düşünen pek çok öğrenci ve veli, kararı vermeden önce çok somut bir soru sorar: \"Bu yatırım bana gerçekte ne kazandıracak?\" Bu yazıda, yurt dışı eğitimin size kazandıracağı somut çıktıları başlıklar halinde inceliyoruz.",
      },
      {
        type: "heading",
        text: "1. Akıcı ve İş Hayatına Hazır Dil Yeterliliği",
      },
      {
        type: "paragraph",
        text: "Sınıf ortamının ötesinde, günlük hayatta ve akademik ortamda sürekli yabancı dil kullanmak, dil becerinizi kısa sürede iş dünyasında rahatlıkla kullanabileceğiniz bir seviyeye taşır.",
      },
      {
        type: "heading",
        text: "2. Uluslararası Bir Network",
      },
      {
        type: "paragraph",
        text: "Farklı ülkelerden sınıf arkadaşları, akademisyenler ve staj yaptığınız şirketlerdeki profesyonellerle kurduğunuz bağlantılar, mezuniyet sonrası kariyerinizde uzun yıllar boyunca değerli bir ağ oluşturur.",
      },
      {
        type: "heading",
        text: "3. Güçlü ve Fark Yaratan Bir Özgeçmiş",
      },
      {
        type: "list",
        items: [
          "Uluslararası tanınırlığı olan bir üniversite diploması",
          "Farklı bir kültürde bağımsız yaşama ve problem çözme deneyimi",
          "Genellikle müfredata dahil olan staj ve saha projeleri",
          "İşverenlerin özellikle aradığı 'küresel bakış açısı'",
        ],
      },
      {
        type: "heading",
        text: "4. Kişisel Özgüven ve Bağımsızlık",
      },
      {
        type: "paragraph",
        text: "Yeni bir ülkede kendi kararlarınızı almak, bütçenizi yönetmek ve günlük hayatın pratik zorluklarını aşmak, akademik başarının ötesinde kalıcı bir özgüven ve olgunluk kazandırır.",
      },
      {
        type: "quote",
        text: "Yurt dışı eğitim size sadece bir diploma değil; dil, network, özgüven ve küresel bir bakış açısını bir arada kazandırır.",
      },
      {
        type: "paragraph",
        text: "Bu kazanımların sizin hedefleriniz için ne anlama geldiğini birlikte değerlendirmek isterseniz, VEYO Education danışmanlarıyla ücretsiz bir ön görüşme planlayabilirsiniz.",
      },
    ],
  },

  // ================= BÜTÇE VE MALİYET =================
  {
    slug: "yurtdisi-egitim-masraflari",
    title: "Yurt Dışı Eğitim Masrafları: Bütçenizi Nasıl Planlamalısınız?",
    categorySlug: "butce-ve-maliyet",
    excerpt:
      "Yurt dışında okumanın gerçek maliyeti nedir? Eğitim ücretinden konaklamaya, sigorta masraflarından günlük yaşam giderlerine kadar bütçenizi planlarken dikkat etmeniz gereken tüm kalemleri inceliyoruz.",
    readTime: "7 dk okuma",
    date: "2 Şubat 2026",
    content: [
      {
        type: "paragraph",
        text: "\"Yurt dışı eğitim masrafları ne kadar tutar?\" sorusu, süreç planlamasının en kritik adımlarından biridir. Maliyet, hedef ülkeye, şehre ve program türüne göre büyük farklılıklar gösterir. Bu yazıda, bütçenizi gerçekçi şekilde planlamanız için dikkate almanız gereken tüm masraf kalemlerini ele alıyoruz.",
      },
      {
        type: "heading",
        text: "1. Eğitim Ücreti (Tuition Fee)",
      },
      {
        type: "paragraph",
        text: "En büyük kalem genellikle eğitim ücretidir. Almanya gibi devlet üniversitelerinin neredeyse ücretsiz olduğu ülkelerden, İngiltere ve Amerika gibi yıllık on binlerce dolara varan ücretlere sahip sistemlere kadar geniş bir yelpaze mevcuttur. Doğru ülke seçimi, bütçenizi doğrudan etkileyen en önemli karardır.",
      },
      {
        type: "heading",
        text: "2. Konaklama ve Günlük Yaşam Giderleri",
      },
      {
        type: "list",
        items: [
          "Öğrenci yurdu, aile yanı (homestay) veya özel kiralık konaklama seçenekleri",
          "Market, ulaşım ve iletişim gibi aylık düzenli giderler",
          "Şehir merkezine yakınlık ve ülke/şehir bazında değişen yaşam maliyeti farkları",
        ],
      },
      {
        type: "heading",
        text: "3. Sağlık Sigortası",
      },
      {
        type: "paragraph",
        text: "Neredeyse tüm ülkeler, öğrenci vizesi başvurusunun bir parçası olarak geçerli bir sağlık sigortası talep eder. Bu, hem vize onayı için zorunlu bir belge hem de yurt dışındaki sağlık giderlerinize karşı önemli bir güvencedir.",
      },
      {
        type: "heading",
        text: "4. Vize ve Başvuru Ücretleri",
      },
      {
        type: "paragraph",
        text: "Vize başvuru harcı, biyometrik veri ücreti ve bazı durumlarda üniversite başvuru ücretleri de bütçenize dahil edilmesi gereken kalemlerdir.",
      },
      {
        type: "quote",
        text: "Gerçekçi bir bütçe planı, sürprizlerle karşılaşmamanın ve süreci sağlıklı tamamlamanın en önemli garantisidir.",
      },
      {
        type: "paragraph",
        text: "VEYO Education olarak, hedeflediğiniz ülke ve program için size özel, kalem kalem bir bütçe planlaması sunuyoruz. Böylece sürpriz maliyetlerle karşılaşmadan, gerçekçi bir hazırlık yapabilirsiniz.",
      },
    ],
  },
  {
    slug: "banka-hesabima-ne-kadar-gondermeliyim",
    title: "Öğrenci Vizesi İçin Banka Hesabıma Ne Kadar Göndermeliyim?",
    categorySlug: "butce-ve-maliyet",
    excerpt:
      "Öğrenci vizesi başvurusunda istenen finansal yeterlilik (bakiye) tutarı nasıl belirlenir? Banka hesabınıza ne zaman ve ne kadar para yatırmanız gerektiğini anlatıyoruz.",
    readTime: "5 dk okuma",
    date: "9 Şubat 2026",
    content: [
      {
        type: "paragraph",
        text: "Öğrenci vizesi başvurularında en sık sorulan sorulardan biri: \"Banka hesabıma ne kadar para göndermeliyim?\" Bu tutar, hedef ülkeye, şehre ve eğitim süresine göre değişir; ancak genel mantığı anlamak, süreci çok daha az stresli hale getirir.",
      },
      {
        type: "heading",
        text: "Finansal Yeterlilik Neden İsteniyor?",
      },
      {
        type: "paragraph",
        text: "Konsolosluklar, öğrencinin eğitim süresi boyunca kendini finansal olarak idare edebileceğinden emin olmak ister. Bu nedenle banka hesap dökümü, sponsor beyanı veya burs belgesi gibi belgelerle finansal yeterliliğinizi kanıtlamanız istenir.",
      },
      {
        type: "heading",
        text: "Tutar Nasıl Hesaplanır?",
      },
      {
        type: "list",
        items: [
          "Bir yıllık (veya programın toplam süresi kadar) eğitim ücreti",
          "Hedef şehrin tahmini yıllık yaşam maliyeti (konaklama, market, ulaşım)",
          "Sağlık sigortası ve diğer zorunlu masraflar",
          "Bazı ülkelerde ayrıca dönüş bileti masrafının da gösterilmesi istenebilir",
        ],
      },
      {
        type: "heading",
        text: "Bakiyenin Ne Kadar Süre Hesapta Kalması Gerekir?",
      },
      {
        type: "paragraph",
        text: "Çoğu ülke, başvuru öncesinde belirli bir süre (genellikle 28 ila 90 gün) boyunca istenen tutarın hesapta düzenli olarak bulunmasını şart koşar. Son anda büyük bir tutar yatırmak, bazı ülkelerde ek belge talebine veya reddedilme riskine yol açabilir.",
      },
      {
        type: "quote",
        text: "Finansal belgelerinizi son güne bırakmadan, danışmanınızla birlikte erken planlamak, hem doğru tutarı hem doğru zamanlamayı garanti eder.",
      },
      {
        type: "paragraph",
        text: "Her ülkenin ve konsolosluğun finansal yeterlilik kriterleri farklıdır. VEYO Education danışmanlarımız, hedeflediğiniz ülkeye özel güncel rakamları sizinle paylaşarak, bu süreci baştan doğru planlamanıza yardımcı olur.",
      },
    ],
  },
  {
    slug: "ekstra-hangi-masraflarim-cikacak",
    title: "Yurt Dışında Okurken Ekstra Hangi Masraflarım Çıkacak?",
    categorySlug: "butce-ve-maliyet",
    excerpt:
      "Eğitim ücreti ve konaklama dışında, öğrencilerin genellikle unuttuğu ama bütçeyi etkileyen ekstra masraf kalemlerini listeliyoruz.",
    readTime: "5 dk okuma",
    date: "16 Şubat 2026",
    content: [
      {
        type: "paragraph",
        text: "Yurt dışı eğitim bütçesi planlanırken, çoğu öğrenci eğitim ücreti ve konaklama gibi büyük kalemlere odaklanır; ancak bütçeyi zamanla zorlayan pek çok küçük ama önemli ekstra masraf vardır. Bu yazıda, sık sık göz ardı edilen bu kalemleri derledik.",
      },
      {
        type: "heading",
        text: "Sıkça Unutulan Masraf Kalemleri",
      },
      {
        type: "list",
        items: [
          "Ders kitapları ve akademik materyaller",
          "Öğrenci kulüpleri, sosyal aktiviteler ve kültürel geziler",
          "Şehir içi ve şehirler arası ulaşım kartları",
          "Kış/yaz kıyafetleri gibi iklime özel ihtiyaçlar",
          "Telefon hattı ve internet aboneliği",
          "Vize uzatma veya oturum izni yenileme ücretleri",
          "Yerel banka hesabı açma ve para transferi komisyonları",
        ],
      },
      {
        type: "heading",
        text: "Bütçenize Nasıl Pay Ayırmalısınız?",
      },
      {
        type: "paragraph",
        text: "Genel bir kural olarak, aylık bütçenizin en az %10-15'ini bu tür öngörülemeyen veya küçük ama düzenli masraflar için ayırmanız önerilir. Bu, ilk birkaç ay içinde yaşayabileceğiniz finansal sürprizleri en aza indirir.",
      },
      {
        type: "quote",
        text: "Küçük masrafları göz ardı etmek, büyük bütçe planlarını bile raydan çıkarabilir — gerçekçi bir planlama her zaman en güvenli yoldur.",
      },
      {
        type: "paragraph",
        text: "VEYO Education olarak, sadece başvuru sürecinizde değil, varış sonrası ilk aylarınızda da bütçe planlaması konusunda pratik tavsiyeler sunuyoruz. Danışmanlarımızla görüşerek, hedeflediğiniz şehir için gerçekçi bir yaşam maliyeti tablosu oluşturabilirsiniz.",
      },
    ],
  },

  // ================= VİZE REHBERİ =================
  {
    slug: "dil-okulu-vize-basvuru-sartlari",
    title: "Dil Okulu İçin Vize Başvuru Şartları Nelerdir?",
    categorySlug: "vize-rehberi",
    excerpt:
      "Dil okulu hazırlık sürecinde vize başvurusu için gereken belgeleri, süreleri ve dikkat edilmesi gereken kritik noktaları adım adım anlatıyoruz.",
    readTime: "6 dk okuma",
    date: "23 Şubat 2026",
    content: [
      {
        type: "paragraph",
        text: "Dil okulu için vize başvuru şartları, çoğu zaman üniversite başvurularına kıyasla daha az bilinir ama aynı derecede titizlik gerektirir. Bu yazıda, dil okulu vize sürecinde genel olarak istenen belgeleri ve dikkat edilmesi gereken noktaları derledik.",
      },
      {
        type: "heading",
        text: "Genel Olarak İstenen Belgeler",
      },
      {
        type: "list",
        items: [
          "Dil okulundan alınan kabul mektubu (Letter of Acceptance)",
          "Kurs süresine uygun geçerli pasaport",
          "Finansal yeterlilik belgeleri (banka hesap dökümü veya sponsor beyanı)",
          "Geçerli sağlık sigortası poliçesi",
          "Konaklama planı (aile yanı, rezidans veya kira sözleşmesi)",
          "Bazı ülkelerde ayrıca niyet mektubu veya mülakat talep edilebilir",
        ],
      },
      {
        type: "heading",
        text: "Süreye Göre Değişen Kurallar",
      },
      {
        type: "paragraph",
        text: "Kısa süreli (genellikle 90 güne kadar) dil kursları için bazı ülkelerde turist vizesi kapsamında başvuru yapılabilirken, daha uzun süreli programlar için özel bir öğrenci vizesi gereklidir. Hedef ülkenin süreye bağlı vize kategorilerini doğru belirlemek, başvurunun ilk ve en kritik adımıdır.",
      },
      {
        type: "heading",
        text: "Sık Yapılan Hatalar",
      },
      {
        type: "paragraph",
        text: "Dil okulu vize başvurularında en sık karşılaşılan sorunlar arasında eksik finansal belgeler, kabul mektubuyla uyumsuz bir konaklama planı ve son başvuru tarihlerinin kaçırılması yer alır. Bu hatalar, süreci geciktirmenin yanı sıra ek maliyetlere de yol açabilir.",
      },
      {
        type: "quote",
        text: "Dil okulu vizesi, üniversite vizesi kadar 'büyük' görünmese de, aynı titizlikle hazırlanmadığında aynı oranda reddedilme riski taşır.",
      },
      {
        type: "paragraph",
        text: "VEYO Education'ın vize danışmanlığı ekibi, dil okulu başvurunuzdan vize sürecine kadar tüm evrakları sizin için eksiksiz hazırlar ve güncel regülasyonlara uygun şekilde yönetir.",
      },
    ],
  },
  {
    slug: "vize-garantisi-var-mi",
    title: "Öğrenci Vizesi Garantisi Var mı? Gerçekler ve Yanılgılar",
    categorySlug: "vize-rehberi",
    excerpt:
      "\"Vize garantisi\" veren danışmanlık firmalarına karşı dikkatli olmanız gerektiğini, gerçekçi beklentilerin ve kabul şansını artıran faktörlerin neler olduğunu açıklıyoruz.",
    readTime: "5 dk okuma",
    date: "2 Mart 2026",
    content: [
      {
        type: "paragraph",
        text: "\"Vize garantisi var mı?\" sorusu, öğrenci vizesi sürecine giren hemen herkesin merak ettiği bir konudur. Bu yazıda, bu konudaki gerçekleri şeffafça ele alıyoruz.",
      },
      {
        type: "heading",
        text: "Neden %100 Garanti Verilemez?",
      },
      {
        type: "paragraph",
        text: "Öğrenci vizesi kararı, nihayetinde ilgili ülkenin konsolosluğuna veya göçmenlik makamına aittir. Hiçbir danışmanlık firması veya kurum, bağımsız bir devlet makamının kararını garanti edemez. \"%100 vize garantisi\" vaadiyle hizmet sunan yapılar konusunda dikkatli olunmasını öneririz.",
      },
      {
        type: "heading",
        text: "Kabul Şansını Artıran Gerçek Faktörler",
      },
      {
        type: "list",
        items: [
          "Eksiksiz ve tutarlı bir başvuru dosyası",
          "Finansal yeterliliğin doğru ve zamanında belgelendirilmesi",
          "Niyet mektubunun (özellikle 'geri dönüş niyeti' gibi kritik unsurların) doğru kurgulanması",
          "Geçmiş vize ihlali veya olumsuz sicil bulunmaması",
          "Başvurunun, ilgili ülkenin güncel regülasyonlarına tam uyumlu şekilde hazırlanması",
        ],
      },
      {
        type: "heading",
        text: "Profesyonel Danışmanlığın Rolü",
      },
      {
        type: "paragraph",
        text: "Bir danışmanlık firması vize kararını garanti edemez, ancak başvurunuzun reddedilme risklerini en aza indirecek şekilde hazırlanmasını sağlayabilir. VEYO Education olarak, her başvuruyu ilgili ülkenin güncel kriterlerine göre titizlikle hazırlıyor ve olası eksiklikleri başvuru öncesinde tespit ediyoruz.",
      },
      {
        type: "quote",
        text: "Gerçekçi bir danışmanlık, size garanti değil; başvurunuzu mümkün olan en güçlü haliyle sunma sözü verir.",
      },
      {
        type: "paragraph",
        text: "Vize sürecinizle ilgili şeffaf ve gerçekçi bir değerlendirme için VEYO Education danışmanlarıyla görüşebilirsiniz.",
      },
    ],
  },
  {
    slug: "vize-reddedilirse-ucret-iadesi",
    title: "Vizem Reddedilirse Ödediğim Ücreti Geri Alabilir Miyim?",
    categorySlug: "vize-rehberi",
    excerpt:
      "Vize reddi durumunda danışmanlık ücreti, okul ücreti ve vize harcının iade koşullarını; sözleşmelerde nelere dikkat etmeniz gerektiğini anlatıyoruz.",
    readTime: "5 dk okuma",
    date: "9 Mart 2026",
    content: [
      {
        type: "paragraph",
        text: "Vize reddi, yurt dışı eğitim sürecinde karşılaşılabilecek en stresli senaryolardan biridir. Bu durumda \"Ödediğim ücretleri geri alabilir miyim?\" sorusunun cevabı, hangi ücretten bahsedildiğine göre değişir.",
      },
      {
        type: "heading",
        text: "Devlet Harçları ve Resmi Ücretler",
      },
      {
        type: "paragraph",
        text: "Vize başvuru harcı ve biyometrik veri ücreti gibi resmi devlet ücretleri, başvurunun sonucundan bağımsız olarak genellikle iade edilmez. Bu, tüm ülkelerde geçerli standart bir uygulamadır; çünkü bu ücretler başvurunun değerlendirilmesi karşılığında alınır, sonucu garanti etmez.",
      },
      {
        type: "heading",
        text: "Okul/Kurs Ücretleri",
      },
      {
        type: "paragraph",
        text: "Çoğu saygın üniversite ve dil okulu, vize reddi durumunda ödenen kurs ücretinin (bazen küçük bir işlem masrafı düşülerek) iade edilmesine yönelik politikalar sunar. Ancak bu koşullar okuldan okula değişir; kayıt öncesinde iade politikasının yazılı olarak teyit edilmesi büyük önem taşır.",
      },
      {
        type: "heading",
        text: "Danışmanlık Ücreti",
      },
      {
        type: "paragraph",
        text: "Danışmanlık ücretinin iade koşulları, hizmet aldığınız firmanın sözleşmesine bağlıdır. Güvenilir bir danışmanlık firması, vize reddi senaryosundaki iade veya yeniden başvuru politikasını size hizmet almadan önce açık ve yazılı şekilde bildirir.",
      },
      {
        type: "list",
        items: [
          "Sözleşmede iade koşullarının açıkça yazılı olup olmadığını kontrol edin",
          "Okulun/kursun kendi iade politikasını ayrıca teyit edin",
          "Devlet harçlarının genel olarak iade edilmediğini göz önünde bulundurun",
        ],
      },
      {
        type: "quote",
        text: "Şeffaf bir danışmanlık firması, olası bir ret senaryosunda ne olacağını size baştan, açıkça anlatır.",
      },
      {
        type: "paragraph",
        text: "VEYO Education olarak, hizmet sözleşmemizde iade ve yeniden başvuru koşullarını netleştiriyor, sürecin her aşamasında şeffaf bilgilendirme yapıyoruz.",
      },
    ],
  },
  {
    slug: "vize-reddedilirse-sonraki-surec",
    title: "Vize Başvurum Reddedilirse Sonrasında Süreç Nasıl İlerliyor?",
    categorySlug: "vize-rehberi",
    excerpt:
      "Vize reddi sonrası yeniden başvuru hakkı, itiraz süreci ve dosyanızı güçlendirmek için atmanız gereken adımları anlatıyoruz.",
    readTime: "6 dk okuma",
    date: "16 Mart 2026",
    content: [
      {
        type: "paragraph",
        text: "Vize reddi, sürecin sonu anlamına gelmez. Doğru adımlarla ilerlendiğinde, pek çok öğrenci ikinci başvurusunda kabul alabilir. Bu yazıda, bir ret sonrası izlenmesi gereken yol haritasını anlatıyoruz.",
      },
      {
        type: "heading",
        text: "1. Ret Gerekçesini Anlayın",
      },
      {
        type: "paragraph",
        text: "Konsolosluklar genellikle ret kararıyla birlikte bir gerekçe bildirir (finansal yetersizlik, tutarsız niyet beyanı, eksik belge vb.). Bu gerekçeyi doğru yorumlamak, ikinci başvurunun stratejisini belirlemede kritik öneme sahiptir.",
      },
      {
        type: "heading",
        text: "2. İtiraz mı, Yeniden Başvuru mu?",
      },
      {
        type: "paragraph",
        text: "Bazı ülkelerde ret kararına itiraz etmek mümkünken, çoğu durumda dosyayı güçlendirerek yeniden başvurmak daha etkili bir yoldur. Hangi yolun sizin durumunuz için daha uygun olduğu, ret gerekçesine ve ülkenin prosedürlerine göre değişir.",
      },
      {
        type: "heading",
        text: "3. Dosyanızı Güçlendirin",
      },
      {
        type: "list",
        items: [
          "Eksik veya zayıf bulunan finansal belgeleri güçlendirin",
          "Niyet mektubunu, ret gerekçesindeki noktaları ele alacak şekilde yeniden kurgulayın",
          "Gerekiyorsa ek destekleyici belgeler (sponsorluk, taahhütname vb.) ekleyin",
          "Başvuru zamanlamasını, yoğun dönemlerden kaçınacak şekilde planlayın",
        ],
      },
      {
        type: "quote",
        text: "Bir vize reddi, doğru analiz edildiğinde ikinci başvuruyu çok daha güçlü hale getirebilecek değerli bir geri bildirimdir.",
      },
      {
        type: "paragraph",
        text: "VEYO Education'ın vize danışmanlığı ekibi, ret sonrası dosya analizini titizlikle yaparak, yeniden başvurunuzu en güçlü haliyle hazırlar. Bu süreçte yalnız değilsiniz.",
      },
    ],
  },
  {
    slug: "yesil-pasaport-sahipleri-icin-surec",
    title: "Yeşil Pasaport Sahipleri İçin Yurt Dışı Eğitim Süreci Nasıl İşliyor?",
    categorySlug: "vize-rehberi",
    excerpt:
      "Hususi (yeşil) pasaport sahibi öğrenciler için vize süreçlerinde ne gibi farklılıklar olduğunu, avantajları ve dikkat edilmesi gereken noktaları anlatıyoruz.",
    readTime: "5 dk okuma",
    date: "23 Mart 2026",
    content: [
      {
        type: "paragraph",
        text: "Yeşil pasaport (hususi damgalı pasaport) sahibi öğrenciler, bazı ülkelere seyahatte vize muafiyeti gibi avantajlardan yararlanabilir. Ancak bu durumun öğrenci vizesi süreçlerine etkisi, sık merak edilen ama net bilinmeyen bir konudur.",
      },
      {
        type: "heading",
        text: "Vize Muafiyeti Eğitim İçin de Geçerli mi?",
      },
      {
        type: "paragraph",
        text: "Yeşil pasaportla sağlanan vizesiz seyahat hakkı, genellikle turistik veya kısa süreli iş amaçlı ziyaretler içindir. Uzun süreli bir eğitim programı için, yeşil pasaport sahibi olsanız dahi çoğu ülke ayrı bir öğrenci vizesi veya öğrenci ikamet izni başvurusu talep eder.",
      },
      {
        type: "heading",
        text: "Yeşil Pasaportun Sağladığı Pratik Avantajlar",
      },
      {
        type: "list",
        items: [
          "Bazı ülkelerde standart öğrenci vizesi başvuru sürecinin nispeten daha hızlı ilerlemesi",
          "Ön hazırlık veya okul ziyareti gibi kısa süreli seyahatlerde vize aranmaması",
          "Bazı vize kategorilerinde ek belge taleplerinin azalması",
        ],
      },
      {
        type: "heading",
        text: "Dikkat Edilmesi Gereken Noktalar",
      },
      {
        type: "paragraph",
        text: "Hususi pasaportun geçerlilik süresi genellikle görevle bağlantılıdır ve bu durum değiştiğinde pasaport iptal edilebilir. Bu nedenle, uzun süreli bir eğitim planlıyorsanız, pasaport statünüzün eğitim süreniz boyunca geçerli kalıp kalmayacağını başvuru öncesinde netleştirmeniz önemlidir.",
      },
      {
        type: "quote",
        text: "Yeşil pasaport bazı kapıları kolaylaştırır, ancak yurt dışı eğitim için doğru vize kategorisini belirlemek yine de şarttır.",
      },
      {
        type: "paragraph",
        text: "VEYO Education danışmanlarımız, pasaport statünüze özel en doğru vize stratejisini birlikte belirlemenize yardımcı olur.",
      },
    ],
  },

  // ================= BAŞVURU ŞARTLARI =================
  {
    slug: "mezun-olmadan-basvuru-yapabilir-miyim",
    title: "Liseden veya Üniversiteden Mezun Olmadan Başvuru Yapabilir Miyim?",
    categorySlug: "basvuru-sartlari",
    excerpt:
      "Henüz mezun olmadan yurt dışı üniversite veya dil okulu başvurusu yapmanın mümkün olup olmadığını, 'şartlı kabul' sürecini ve zamanlama stratejisini anlatıyoruz.",
    readTime: "5 dk okuma",
    date: "30 Mart 2026",
    content: [
      {
        type: "paragraph",
        text: "\"Henüz mezun olmadım, yine de başvuru yapabilir miyim?\" sorusu, özellikle son sınıf öğrencileri arasında sıkça sorulur. İyi haber şu ki, çoğu üniversite ve dil okulu, mezuniyet öncesinde başvuru yapılmasına izin verir.",
      },
      {
        type: "heading",
        text: "Şartlı Kabul (Conditional Offer) Nedir?",
      },
      {
        type: "paragraph",
        text: "Pek çok üniversite, henüz mezun olmamış öğrencilere \"şartlı kabul\" sunar. Bu kabul mektubunda, belirli bir mezuniyet notu veya sınav sonucu gibi koşulların karşılanması halinde kaydın kesinleşeceği belirtilir. Mezuniyet belgeniz ve nihai notlarınız elinize geçtiğinde, bu belgeleri üniversiteye ileterek kaydınızı kesinleştirirsiniz.",
      },
      {
        type: "heading",
        text: "Hangi Aşamada Başvurmalısınız?",
      },
      {
        type: "list",
        items: [
          "Lise son sınıf öğrencileri, genellikle son dönem not döküm belgesiyle başvuru yapabilir",
          "Üniversite son sınıf öğrencileri, transkript ve mezuniyet tarihini gösteren bir belgeyle başvurabilir",
          "Dil okulu başvuruları için mezuniyet şartı genellikle aranmaz",
        ],
      },
      {
        type: "heading",
        text: "Zamanlamanın Önemi",
      },
      {
        type: "paragraph",
        text: "Şartlı kabul süreciyle erken başvurmak, hem kabul şansınızı artırır hem de vize ve konaklama planlamasına daha geniş bir zaman tanır. Mezuniyeti bekleyip başvuruyu geciktirmek, özellikle popüler programlarda kontenjan kaybına yol açabilir.",
      },
      {
        type: "quote",
        text: "Mezuniyeti beklemek yerine, şartlı kabul süreciyle erken harekete geçmek, zamanı sizin lehinize çevirir.",
      },
      {
        type: "paragraph",
        text: "VEYO Education, henüz mezun olmamış öğrencilerin şartlı kabul süreçlerini uçtan uca yöneterek, doğru zamanlamayla başvuru yapmanızı sağlar.",
      },
    ],
  },

  // ================= YAŞAM VE KARİYER =================
  {
    slug: "yurtdisinda-egitim-alirken-calisabilir-miyim",
    title: "Yurt Dışında Eğitim Alırken Çalışabilir Miyim?",
    categorySlug: "yasam-ve-kariyer",
    excerpt:
      "Öğrenci vizesiyle çalışma hakkının hangi ülkelerde, hangi koşullarda ve haftada kaç saat mümkün olduğunu; dikkat etmeniz gereken yasal sınırları anlatıyoruz.",
    readTime: "6 dk okuma",
    date: "6 Nisan 2026",
    content: [
      {
        type: "paragraph",
        text: "\"Yurt dışında okurken çalışabilir miyim?\" sorusu, hem bütçe planlaması hem de deneyim kazanma açısından öğrencilerin en çok merak ettiği konulardan biridir. Cevap, büyük ölçüde hedef ülkenin öğrenci vizesi politikalarına bağlıdır.",
      },
      {
        type: "heading",
        text: "Genel Kural: Kısıtlı Çalışma Hakkı",
      },
      {
        type: "paragraph",
        text: "Çoğu ülke, öğrenci vizesiyle sınırlı sayıda saat çalışmaya izin verir. Yaygın uygulama, dönem içinde haftada 15-20 saat, tatil dönemlerinde ise tam zamanlı çalışma şeklindedir. Ancak bu sınırlar ülkeden ülkeye, hatta bazen vize alt kategorisine göre değişir.",
      },
      {
        type: "heading",
        text: "Neden Bu Sınırlamalar Var?",
      },
      {
        type: "paragraph",
        text: "Öğrenci vizesinin temel amacı eğitimdir; çalışma hakkı, öğrencinin akademik performansını olumsuz etkilememesi için sınırlandırılır. Kurallara uyulmaması, vize ihlali sayılabilir ve gelecekteki vize başvurularını olumsuz etkileyebilir.",
      },
      {
        type: "heading",
        text: "Çalışma İzninin Faydaları",
      },
      {
        type: "list",
        items: [
          "Günlük yaşam giderlerine katkı sağlama",
          "Yerel iş kültürünü ve dili aktif kullanarak deneyimleme",
          "Mezuniyet sonrası kariyer için erken network kurma",
          "Özgeçmişe yerel iş deneyimi ekleme",
        ],
      },
      {
        type: "quote",
        text: "Çalışma hakkınızı bilinçli ve kurallara uygun kullanmak, hem bütçenize katkı sağlar hem de gelecekteki vize süreçlerinizi güvence altına alır.",
      },
      {
        type: "paragraph",
        text: "Hedeflediğiniz ülkenin çalışma hakkı kurallarını netleştirmek için VEYO Education danışmanlarımızla görüşebilir, güncel ve doğru bilgiye ulaşabilirsiniz.",
      },
    ],
  },
  {
    slug: "konaklama-ve-okul-degisimi-onemli-mi",
    title: "Konaklama ve Okul Değişimi Önemli mi? Doğru Seçimin Etkisi",
    categorySlug: "yasam-ve-kariyer",
    excerpt:
      "Yurt dışında konaklama türünüzün ve okul/şehir seçiminizin akademik başarınıza ve uyum sürecinize nasıl etki ettiğini; doğru kararı vermenin ipuçlarını paylaşıyoruz.",
    readTime: "5 dk okuma",
    date: "13 Nisan 2026",
    content: [
      {
        type: "paragraph",
        text: "Yurt dışı eğitim planlamasında genellikle üniversite veya program seçimine odaklanılır; ancak konaklama türü ve okul/şehir seçimi de akademik başarı ve genel memnuniyet üzerinde en az o kadar belirleyicidir.",
      },
      {
        type: "heading",
        text: "Konaklama Türünün Etkisi",
      },
      {
        type: "list",
        items: [
          "Aile yanı (homestay): Dili hızlı öğrenmek ve yerel kültüre uyum için idealdir",
          "Öğrenci yurdu/rezidansı: Sosyalleşme ve kampüs hayatına entegrasyon açısından güçlüdür",
          "Özel kiralık konaklama: Daha fazla bağımsızlık isteyen, biraz daha deneyimli öğrenciler için uygundur",
        ],
      },
      {
        type: "heading",
        text: "Okul/Şehir Değişikliği Ne Zaman Gündeme Gelir?",
      },
      {
        type: "paragraph",
        text: "Bazı öğrenciler, ilk yerleştikleri okul veya şehrin beklentilerini karşılamadığını fark edebilir. Böyle bir durumda okul veya program değişikliği mümkün olabilir, ancak bu süreç vize statünüzü, kayıt tarihlerinizi ve bazen finansal yükümlülüklerinizi doğrudan etkiler.",
      },
      {
        type: "heading",
        text: "Doğru Kararı Baştan Vermenin Önemi",
      },
      {
        type: "paragraph",
        text: "Konaklama ve okul seçimini yaparken sadece maliyeti değil; ulaşım süresini, sosyal çevreyi ve kişisel öğrenme tarzınızı da göz önünde bulundurmalısınız. Bu kararı profesyonel bir danışmanlık desteğiyle almak, sonradan yaşanabilecek uyumsuzluk ve ek maliyetlerin önüne geçer.",
      },
      {
        type: "quote",
        text: "Doğru okul kadar doğru konaklama da, yurt dışı deneyiminizin kalitesini doğrudan belirler.",
      },
      {
        type: "paragraph",
        text: "VEYO Education, konaklama organizasyonunuzu okul ve şehir seçiminizle uyumlu şekilde planlayarak, varış öncesinden itibaren yanınızda olur.",
      },
    ],
  },
  {
    slug: "mezuniyet-sonrasi-o-ulkede-kalabilir-miyim",
    title: "Mezuniyet Sonrası Eğitim Aldığım Ülkede Kalabilir Miyim?",
    categorySlug: "yasam-ve-kariyer",
    excerpt:
      "Mezuniyet sonrası çalışma vizesi (post-study work visa) imkânı sunan ülkeleri, bu vizelerin genel şartlarını ve uzun vadeli göç yollarına nasıl açıldığını anlatıyoruz.",
    readTime: "6 dk okuma",
    date: "20 Nisan 2026",
    content: [
      {
        type: "paragraph",
        text: "\"Mezun olduktan sonra o ülkede kalabilir miyim?\" sorusu, yurt dışı eğitim kararının en stratejik boyutlarından biridir. Pek çok popüler destinasyon, mezuniyet sonrası çalışma vizesi (post-study work visa) imkânı sunarak öğrencilere bu fırsatı tanır.",
      },
      {
        type: "heading",
        text: "Mezuniyet Sonrası Çalışma Vizesi Nedir?",
      },
      {
        type: "paragraph",
        text: "Bu vize kategorisi, mezuniyetten sonra belirli bir süre (ülkeye göre genellikle 1 ila 3 yıl) boyunca herhangi bir iş sponsorluğuna ihtiyaç duymadan o ülkede çalışmanıza izin verir. Bu süre, hem iş deneyimi kazanmak hem de uzun vadeli bir çalışma vizesine veya göç yoluna geçiş yapmak için değerlendirilebilir.",
      },
      {
        type: "heading",
        text: "Bu İmkânı Sunan Popüler Destinasyonlar",
      },
      {
        type: "list",
        items: [
          "İrlanda: Google, Meta gibi şirketlerin Avrupa merkezlerine ev sahipliği yapması sayesinde güçlü bir istihdam ekosistemi",
          "Almanya: Mezuniyet sonrası iş arama süresi tanıyan esnek düzenlemeler",
          "Kanada: Dil okulu sonrası bile bazı programlarla göç yollarına açılan esnek politikalar",
          "Güney Kore ve Japonya: Belirli şartlarla iş bulma ve çalışma vizesine geçiş imkânı",
        ],
      },
      {
        type: "heading",
        text: "Uzun Vadeli Planlama Neden Önemli?",
      },
      {
        type: "paragraph",
        text: "Eğer hedefiniz sadece eğitim almak değil, uzun vadede o ülkede kariyer inşa etmekse, üniversite ve program seçimini bu hedefe göre yapmanız gerekir. Bazı programlar ve şehirler, mezuniyet sonrası istihdam açısından çok daha güçlü fırsatlar sunar.",
      },
      {
        type: "quote",
        text: "Doğru ülke ve program seçimi, sadece bir diploma değil; uzun vadeli bir kariyer ve yaşam planının da temelini atar.",
      },
      {
        type: "paragraph",
        text: "VEYO Education danışmanlarımız, sadece eğitim sürecinizi değil, mezuniyet sonrası hedeflerinizi de göz önünde bulundurarak size en uygun ülke ve program stratejisini birlikte belirler.",
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost, count = 2) {
  const sameCategory = BLOG_POSTS.filter(
    (p) => p.categorySlug === post.categorySlug && p.slug !== post.slug,
  );
  const others = BLOG_POSTS.filter(
    (p) => p.categorySlug !== post.categorySlug && p.slug !== post.slug,
  );
  return [...sameCategory, ...others].slice(0, count);
}
