export type DestinationCategory = "europe" | "other";

export interface LanguageSchoolDestination {
  id: string;
  slug: string;
  name: string;
  flagCode: string;
  category: DestinationCategory;
  popularCities: string[];
  overview: string;
  programHighlights: string;
  costRange: string;
  lifestyle: string;
  pitch: string;
}

export const LANGUAGE_SCHOOL_DESTINATIONS: LanguageSchoolDestination[] = [
  // ================= AVRUPA =================
  {
    id: "uk",
    slug: "uk",
    name: "Birleşik Krallık",
    flagCode: "gb",
    category: "europe",
    popularCities: ["Londra", "Oxford", "Cambridge", "Brighton"],
    overview:
      "İngilizcenin anavatanında dil eğitimi almak, hem aksanınızı hem de özgüveninizi kalıcı şekilde geliştirir. Birleşik Krallık, dünyanın en köklü ve en çok tercih edilen dil okulu ağına sahiptir.",
    programHighlights:
      "Genel İngilizce, akademik İngilizce, iş İngilizcesi ve sınav hazırlık (IELTS/Cambridge) programları 2 haftadan 1 yıla kadar esnek sürelerle sunulur; çoğu okul Cambridge English ve British Council akreditasyonuna sahiptir.",
    costRange:
      "Haftalık kurs ücretleri şehre ve yoğunluğa göre yaklaşık £250-400 arasında değişir; konaklama (aile yanı veya rezidans) ayrı ücretlendirilir.",
    lifestyle:
      "Çok kültürlü şehirleri, güçlü öğrenci destek sistemleri ve zengin sosyal aktiviteleriyle uyum süreci hızlı ve keyiflidir.",
    pitch:
      "Yaz sezonunda kontenjanlar hızla dolar; özellikle popüler şehirlerde erken kayıt hem yer garantisi hem de daha uygun fiyat avantajı sağlar.",
  },
  {
    id: "de",
    slug: "de",
    name: "Almanya",
    flagCode: "de",
    category: "europe",
    popularCities: ["Berlin", "Münih", "Frankfurt"],
    overview:
      "Goethe-Institut gibi dünyaca tanınan kurumlarıyla Almanya, Almanca öğrenmek isteyenler için en güvenilir destinasyonlardan biridir; Avrupa'nın en güçlü ekonomisinde kariyer kapılarını aralar.",
    programHighlights:
      "Yoğun ve standart Almanca kursları, Goethe-Zertifikat sınav hazırlığı ve üniversite öncesi dil programları (studienkolleg hazırlığı) 2 haftadan 6 aya kadar sunulur.",
    costRange:
      "Haftalık kurs ücretleri yaklaşık €150-280 arasındadır; Almanya'nın genel yaşam maliyeti Batı Avrupa ortalamasının altındadır.",
    lifestyle:
      "Güçlü toplu taşıma, güvenlik ve düzenli şehir yaşamıyla, dil öğrenirken günlük hayatı organize bir şekilde sürdürmek kolaydır.",
    pitch:
      "Almanca seviyenizi B2'ye taşımak, hem üniversite hem de iş başvurularında ciddi bir rekabet avantajı sağlar; doğru kurs seçimiyle bu süreç hızlanır.",
  },
  {
    id: "fr",
    slug: "fr",
    name: "Fransa",
    flagCode: "fr",
    category: "europe",
    popularCities: ["Paris", "Nice", "Lyon"],
    overview:
      "Alliance Française akreditasyonlu okullarıyla Fransa, sanatın ve kültürün başkentinde Fransızcayı en otantik haliyle öğrenme fırsatı sunar.",
    programHighlights:
      "Genel Fransızca, DELF/DALF sınav hazırlığı ve kültür-sanat temalı özel programlar 1 haftadan 9 aya kadar farklı yoğunluklarda sunulur.",
    costRange:
      "Haftalık kurs ücretleri yaklaşık €200-320 arasındadır; Paris dışındaki şehirlerde maliyet belirgin şekilde düşer.",
    lifestyle:
      "Zengin kültürel yaşam, kafe kültürü ve güçlü öğrenci indirimleriyle, dili günlük hayatın içinde pratik etme fırsatı boldur.",
    pitch:
      "Fransızca, İngilizceden sonra en çok konuşulan ikinci yabancı dil statüsündedir; bu programlar hem akademik hem diplomatik kariyer kapıları açar.",
  },
  {
    id: "it",
    slug: "it",
    name: "İtalya",
    flagCode: "it",
    category: "europe",
    popularCities: ["Roma", "Floransa", "Milano"],
    overview:
      "Tarihi şehirlerinin sokaklarında İtalyanca öğrenmek, hem dil hem de sanat tarihiyle iç içe benzersiz bir deneyim sunar.",
    programHighlights:
      "Genel İtalyanca, sanat tarihi temalı özel kurslar ve CILS/CELI sınav hazırlık programları 1 haftadan 6 aya kadar seçeneklerle sunulur.",
    costRange:
      "Haftalık kurs ücretleri yaklaşık €180-300 arasındadır; küçük şehirlerde konaklama dahil toplam maliyet daha uygun olabilir.",
    lifestyle:
      "Gastronomi, sanat ve sosyal yaşamın iç içe geçtiği İtalya'da, dil öğrenimi gündelik kültürel keşifle harmanlanır.",
    pitch:
      "Kısa süreli yaz programları özellikle liseli ve üniversiteli gençler arasında yoğun talep görür; erken planlama en iyi okul ve şehir seçeneklerine erişim sağlar.",
  },
  {
    id: "es",
    slug: "es",
    name: "İspanya",
    flagCode: "es",
    category: "europe",
    popularCities: ["Barcelona", "Madrid", "Valencia"],
    overview:
      "İspanya, dünya çapında İspanyolca dil okulu denince akla gelen ilk destinasyonlardan biridir; canlı sosyal yaşamı dil öğrenimiyle mükemmel şekilde birleştirir.",
    programHighlights:
      "Instituto Cervantes akreditasyonlu genel İspanyolca kursları, DELE sınav hazırlığı ve flamenko/gastronomi temalı kültürel programlar geniş bir yelpazede sunulur.",
    costRange:
      "Haftalık kurs ücretleri yaklaşık €150-250 arasındadır; bu, Batı Avrupa'nın en uygun maliyetli seçeneklerinden biridir.",
    lifestyle:
      "Sıcak iklim, canlı sokak yaşamı ve misafirperver kültürüyle, dil öğrenimi sosyal bir deneyime dönüşür.",
    pitch:
      "İspanyolca, dünya çapında 500 milyondan fazla konuşanıyla küresel bir kariyer aracıdır; uygun maliyetiyle İspanya bu yatırımı erişilebilir kılar.",
  },
  {
    id: "pt",
    slug: "pt",
    name: "Portekiz",
    flagCode: "pt",
    category: "europe",
    popularCities: ["Lizbon", "Porto"],
    overview:
      "Güneşli sahil şehirleri ve düşük yaşam maliyetiyle Portekiz, bütçe dostu bir Avrupa dil deneyimi arayanlar için hızla popülerleşen bir seçenektir.",
    programHighlights:
      "Genel Portekizce kursları ve CAPLE sınav hazırlık programları, esnek başlangıç tarihleriyle 2 haftadan itibaren sunulur.",
    costRange:
      "Haftalık kurs ücretleri yaklaşık €120-200 arasındadır; Batı Avrupa'nın en uygun maliyetli destinasyonlarından biridir.",
    lifestyle:
      "Güvenli sokakları, sörf kültürü ve sıcak iklimiyle, dil eğitimini tatille birleştirmek isteyenler için idealdir.",
    pitch:
      "Henüz çok fazla öğrencinin keşfetmediği bu destinasyon, erken davrananlara hem maliyet hem de sakin bir öğrenim ortamı sunuyor.",
  },
  {
    id: "nl",
    slug: "nl",
    name: "Hollanda",
    flagCode: "nl",
    category: "europe",
    popularCities: ["Amsterdam", "Rotterdam"],
    overview:
      "Neredeyse herkesin akıcı İngilizce konuştuğu Hollanda, hem İngilizce hem Hollandaca dil kursları için modern ve organize bir sahne sunar.",
    programHighlights:
      "Yoğun İngilizce ve Hollandaca programları, iş dünyasına yönelik özel kurslarla birlikte 2 haftadan 6 aya kadar seçeneklerle sunulur.",
    costRange:
      "Haftalık kurs ücretleri yaklaşık €180-280 arasındadır; yaşam maliyeti orta-yüksek seviyededir.",
    lifestyle:
      "Bisiklet dostu şehirleri, uluslararası topluluğu ve yüksek yaşam kalitesiyle, uyum süreci oldukça hızlı geçer.",
    pitch:
      "Hollanda'daki dil okulları, sonrasında yüksek öğrenime geçiş yapmak isteyen öğrenciler için ideal bir köprü programı işlevi görür.",
  },
  {
    id: "be",
    slug: "be",
    name: "Belçika",
    flagCode: "be",
    category: "europe",
    popularCities: ["Brüksel", "Antwerp"],
    overview:
      "Fransızca ve Hollandacanın iç içe geçtiği Belçika, çok dilli bir ortamda dil eğitimi almak isteyenler için benzersiz bir sahne sunar.",
    programHighlights:
      "Fransızca ve Hollandaca genel kurslar, AB kurumlarına yönelik özel iş dili programlarıyla desteklenir.",
    costRange:
      "Haftalık kurs ücretleri yaklaşık €160-260 arasındadır; yaşam maliyeti orta seviyededir.",
    lifestyle:
      "AB kurumlarının kalbinde, kozmopolit ve merkezi bir konumda, Avrupa'nın diğer şehirlerine kolay erişim sağlar.",
    pitch:
      "Uluslararası ilişkiler veya diplomasi kariyeri hedefleyen öğrenciler için Belçika'da dil eğitimi, stratejik bir ilk adımdır.",
  },
  {
    id: "ch",
    slug: "ch",
    name: "İsviçre",
    flagCode: "ch",
    category: "europe",
    popularCities: ["Zürih", "Cenevre", "Lozan"],
    overview:
      "Almanca, Fransızca ve İtalyancanın bir arada konuşulduğu İsviçre, premium bir dil eğitimi ortamı ve kusursuz bir organizasyon sunar.",
    programHighlights:
      "Yüksek standartlı genel dil kursları ve otelcilik/finans sektörüne yönelik özel programlar, uluslararası öğrencilere yönelik zengin bir seçenek sunar.",
    costRange:
      "Haftalık kurs ücretleri yaklaşık CHF 300-450 arasındadır; yaşam maliyeti Avrupa'nın en yükseklerinden biridir.",
    lifestyle:
      "Son derece güvenli, düzenli ve doğayla iç içe bir ortamda, premium bir öğrenim deneyimi yaşanır.",
    pitch:
      "Yüksek maliyetine rağmen İsviçre'deki bir dil okulu deneyimi, CV'nizde uzun vadede karşılığını fazlasıyla veren bir marka değeri taşır.",
  },
  {
    id: "at",
    slug: "at",
    name: "Avusturya",
    flagCode: "at",
    category: "europe",
    popularCities: ["Viyana", "Salzburg"],
    overview:
      "Viyana'nın tarihi atmosferinde Almanca öğrenmek, kaliteli ve güvenli bir Orta Avrupa dil okulu deneyimi sunar.",
    programHighlights:
      "ÖSD sınav hazırlığı dahil genel Almanca kursları, müzik ve sanat temalı özel programlarla zenginleştirilebilir.",
    costRange:
      "Haftalık kurs ücretleri yaklaşık €180-280 arasındadır; yaşam maliyeti orta seviyededir.",
    lifestyle:
      "Dünyanın en yaşanabilir şehirleri sıralamalarında düzenli yer alan Viyana, kültürel açıdan zengin bir öğrenci hayatı sunar.",
    pitch:
      "Almanya'ya kıyasla daha az bilinen ama aynı derecede kaliteli bu destinasyon, sakin bir öğrenim ortamı arayanlar için avantajlıdır.",
  },
  {
    id: "ie",
    slug: "ie",
    name: "İrlanda",
    flagCode: "ie",
    category: "europe",
    popularCities: ["Dublin", "Cork", "Galway"],
    overview:
      "İngilizce dil okullarıyla ünlü İrlanda, sıcak yerel kültürü ve mezuniyet sonrası çalışma hakkı avantajıyla özellikle genç öğrenciler arasında öne çıkar.",
    programHighlights:
      "Genel İngilizce, akademik İngilizce ve IELTS/Cambridge sınav hazırlık programları, ACELS akreditasyonlu okullarda 2 haftadan 1 yıla kadar sunulur.",
    costRange:
      "Haftalık kurs ücretleri yaklaşık €200-320 arasındadır; Dublin dışındaki şehirlerde yaşam maliyeti daha erişilebilirdir.",
    lifestyle:
      "Misafirperver yerel halkı, canlı müzik kültürü ve İngilizce'nin doğal kullanımıyla hızlı bir dil gelişimi sağlar.",
    pitch:
      "Google, Meta gibi şirketlerin Avrupa merkezlerine ev sahipliği yapan İrlanda, dil eğitimini uzun vadeli bir kariyer planına dönüştürme fırsatı sunar.",
  },
  {
    id: "se",
    slug: "se",
    name: "İsveç",
    flagCode: "se",
    category: "europe",
    popularCities: ["Stockholm", "Gothenburg"],
    overview:
      "İsveççe dil kursları ve neredeyse herkesin akıcı İngilizce konuştuğu bir ortamda, İsveç güvenli ve modern bir dil okulu deneyimi sunar.",
    programHighlights:
      "Genel İsveççe kursları ve SFI (Svenska för invandrare) benzeri yoğunlaştırılmış programlar mevcuttur.",
    costRange:
      "Haftalık kurs ücretleri yaklaşık €180-280 arasındadır; genel yaşam maliyeti yüksek seviyededir.",
    lifestyle:
      "Sürdürülebilirlik odaklı yaşam tarzı ve yüksek yaşam standardıyla, öğrenci dostu bir toplum sunar.",
    pitch:
      "İskandinav iş kültürünü yakından tanımak isteyen öğrenciler için İsveç'te dil eğitimi, benzersiz bir kapı aralayıcıdır.",
  },
  {
    id: "no",
    slug: "no",
    name: "Norveç",
    flagCode: "no",
    category: "europe",
    popularCities: ["Oslo", "Bergen"],
    overview:
      "Doğayla iç içe bir ortamda Norveççe öğrenmek isteyenler için sakin, güvenli ve düzenli bir dil okulu seçeneği sunar.",
    programHighlights:
      "Genel Norveççe kursları ve yerel entegrasyon odaklı yoğunlaştırılmış programlar mevcuttur.",
    costRange:
      "Haftalık kurs ücretleri yaklaşık €200-320 arasındadır; Norveç, Avrupa'nın en yüksek yaşam maliyetine sahip ülkelerinden biridir.",
    lifestyle:
      "Muhteşem doğası, güvenliği ve yüksek yaşam kalitesiyle, sakin bir öğrenim deneyimi arayanlar için idealdir.",
    pitch:
      "Az sayıda öğrencinin tercih ettiği bu niş destinasyon, rekabetin düşük olduğu, kişiye özel bir öğrenim ortamı sunar.",
  },
  {
    id: "dk",
    slug: "dk",
    name: "Danimarka",
    flagCode: "dk",
    category: "europe",
    popularCities: ["Kopenhag"],
    overview:
      "Danca dil kursları ve yüksek yaşam kalitesiyle Danimarka, İskandinav kültürünü yakından tanımak isteyenler için uygun bir seçenektir.",
    programHighlights:
      "Genel Danca kursları ve İngilizce destekli entegrasyon programları mevcuttur.",
    costRange:
      "Haftalık kurs ücretleri yaklaşık €180-280 arasındadır; genel yaşam maliyeti yüksek seviyededir.",
    lifestyle:
      "Bisiklet kültürü, güçlü sosyal güvenlik ağı ve İngilizce'nin yaygınlığıyla uluslararası öğrencilere kolay bir uyum sunar.",
    pitch:
      "Dünyanın en mutlu ülkeleri sıralamalarında düzenli yer alan Danimarka, dil eğitimini yüksek yaşam kalitesiyle birleştirir.",
  },
  {
    id: "fi",
    slug: "fi",
    name: "Finlandiya",
    flagCode: "fi",
    category: "europe",
    popularCities: ["Helsinki"],
    overview:
      "Fince dil okulları sınırlı sayıda olsa da, İngilizce dil kursları ve sakin yaşam tarzıyla niş bir tercih sunar.",
    programHighlights:
      "Kısa süreli yoğunlaştırılmış Fince kursları ve İngilizce destekli oryantasyon programları mevcuttur.",
    costRange:
      "Haftalık kurs ücretleri yaklaşık €160-250 arasındadır; genel yaşam maliyeti orta-yüksek seviyededir.",
    lifestyle:
      "Güvenli, sakin ve doğayla iç içe bir yaşam sunar; kamusal hizmetlerin kalitesi yüksektir.",
    pitch:
      "Az bilinen ama son derece kaliteli bu destinasyon, sıra dışı bir dil öğrenimi deneyimi arayan öğrenciler için değerlendirilmeye değer.",
  },
  {
    id: "is",
    slug: "is",
    name: "İzlanda",
    flagCode: "is",
    category: "europe",
    popularCities: ["Reykjavik"],
    overview:
      "Küçük ama etkileyici bir dil okulu sahnesine sahip İzlanda, eşsiz doğası içinde sıra dışı bir öğrenim deneyimi sunar.",
    programHighlights:
      "Kısa süreli İzlandaca kursları ve İngilizce destekli kültürel oryantasyon programları mevcuttur.",
    costRange:
      "Kurs ücretleri sınırlı okul sayısı nedeniyle değişkendir; genel yaşam maliyeti yüksektir.",
    lifestyle:
      "Volkanik manzaraları, düşük suç oranı ve küçük ama sıkı bir uluslararası öğrenci topluluğuyla farklı bir deneyim sunar.",
    pitch:
      "Sıra dışı bir akademik macera arayan öğrenciler için İzlanda, az bilinen ama unutulmaz bir dil okulu seçeneğidir.",
  },
  {
    id: "pl",
    slug: "pl",
    name: "Polonya",
    flagCode: "pl",
    category: "europe",
    popularCities: ["Varşova", "Krakow"],
    overview:
      "Uygun maliyetli Lehçe dil kursları ve canlı şehir yaşamıyla Polonya, bütçe dostu bir Orta Avrupa seçeneği sunar.",
    programHighlights:
      "Genel Lehçe kursları ve üniversite hazırlık dil programları esnek sürelerle sunulur.",
    costRange:
      "Haftalık kurs ücretleri yaklaşık €100-180 arasındadır; yaşam maliyeti Batı Avrupa'ya kıyasla belirgin şekilde düşüktür.",
    lifestyle:
      "Canlı şehir yaşamı, güvenlik ve büyüyen bir uluslararası öğrenci topluluğuyla bütçe dostu bir deneyim sunar.",
    pitch:
      "Düşük maliyeti ve yüksek eğitim kalitesiyle Polonya, sınırlı bütçeyle Avrupa deneyimi arayan aileler için güçlü bir alternatiftir.",
  },
  {
    id: "cz",
    slug: "cz",
    name: "Çek Cumhuriyeti",
    flagCode: "cz",
    category: "europe",
    popularCities: ["Prag"],
    overview:
      "Prag'ın tarihi sokaklarında Çekçe öğrenmek, Orta Avrupa'nın en güzel şehirlerinden birinde yaşama fırsatı sunar.",
    programHighlights:
      "Genel Çekçe kursları ve üniversite öncesi hazırlık dil programları mevcuttur.",
    costRange:
      "Haftalık kurs ücretleri yaklaşık €120-200 arasındadır; yaşam maliyeti oldukça erişilebilirdir.",
    lifestyle:
      "Prag'ın tarihi dokusu, güvenliği ve canlı öğrenci yaşamıyla Avrupa'nın en çok tercih edilen şehirlerinden biridir.",
    pitch:
      "Uygun maliyeti ve etkileyici şehir dokusuyla Çek Cumhuriyeti, dil eğitimini unutulmaz bir kültürel deneyimle birleştirir.",
  },
  {
    id: "sk",
    slug: "sk",
    name: "Slovakya",
    flagCode: "sk",
    category: "europe",
    popularCities: ["Bratislava"],
    overview:
      "Düşük maliyetli dil kursları ve merkezi konumuyla Slovakya, Orta Avrupa'yı keşfetmek için pratik bir üs sunar.",
    programHighlights:
      "Genel Slovakça kursları ve İngilizce destekli programlar sınırlı sayıda okulda sunulur.",
    costRange:
      "Haftalık kurs ücretleri yaklaşık €100-170 arasındadır; yaşam maliyeti düşük seviyededir.",
    lifestyle:
      "Küçük ama merkezi konumu sayesinde Viyana ve Budapeşte gibi şehirlere kolay erişim sağlar.",
    pitch:
      "Az bilinen ama son derece uygun maliyetli bu destinasyon, bütçe önceliği olan öğrenciler için değerlendirilmeye değer.",
  },
  {
    id: "hu",
    slug: "hu",
    name: "Macaristan",
    flagCode: "hu",
    category: "europe",
    popularCities: ["Budapeşte"],
    overview:
      "Macarca dil okulları sınırlı sayıda olsa da, İngilizce hazırlık programlarıyla üniversite öncesi güçlü bir seçenek sunar.",
    programHighlights:
      "Üniversite öncesi İngilizce hazırlık programları ve kısa süreli Macarca oryantasyon kursları mevcuttur.",
    costRange:
      "Haftalık kurs ücretleri yaklaşık €110-190 arasındadır; yaşam maliyeti düşük seviyededir.",
    lifestyle:
      "Budapeşte'nin tarihi güzelliği, düşük yaşam maliyeti ve canlı öğrenci yaşamı öne çıkan avantajlarıdır.",
    pitch:
      "Sonrasında tıp veya mühendislik eğitimi almayı planlayan öğrenciler için Macaristan'daki hazırlık programları ideal bir başlangıçtır.",
  },
  {
    id: "si",
    slug: "si",
    name: "Slovenya",
    flagCode: "si",
    category: "europe",
    popularCities: ["Ljubljana"],
    overview:
      "Küçük ölçekli ama kaliteli dil okullarıyla Slovenya, sakin ve güvenli bir öğrenim ortamı arayanlar için uygundur.",
    programHighlights:
      "Genel Slovence kursları ve doğa temalı kültürel programlar sınırlı sayıda okulda sunulur.",
    costRange:
      "Haftalık kurs ücretleri yaklaşık €120-200 arasındadır; yaşam maliyeti oldukça makuldür.",
    lifestyle:
      "Güvenli, yeşil ve sakin bir öğrenci yaşamı sunar; Alp dağları ve Akdeniz kıyısına yakınlığıyla dikkat çeker.",
    pitch:
      "Kalabalık olmayan sınıflarda, kişiye özel bir dil öğrenimi deneyimi arayan öğrenciler için Slovenya değerli bir alternatiftir.",
  },
  {
    id: "hr",
    slug: "hr",
    name: "Hırvatistan",
    flagCode: "hr",
    category: "europe",
    popularCities: ["Zagreb", "Split"],
    overview:
      "Adriyatik kıyısında dil eğitimini tatille birleştirmek isteyenler için Hırvatistan cazip bir yaz dil okulu seçeneğidir.",
    programHighlights:
      "Yaz sezonuna özel yoğunlaştırılmış Hırvatça kursları ve kültürel aktivite paketleri mevcuttur.",
    costRange:
      "Haftalık kurs ücretleri yaklaşık €120-200 arasındadır; yaşam maliyeti oldukça uygundur.",
    lifestyle:
      "Adriyatik kıyısına yakınlığı, güvenliği ve sıcak kültürüyle özellikle yaz aylarında cazip bir öğrenci yaşamı sunar.",
    pitch:
      "Yaz aylarında dil eğitimini tatille birleştirmek isteyen öğrenciler için Hırvatistan, hem eğitim hem deneyim sunan nadir seçeneklerden biridir.",
  },
  {
    id: "gr",
    slug: "gr",
    name: "Yunanistan",
    flagCode: "gr",
    category: "europe",
    popularCities: ["Atina", "Selanik"],
    overview:
      "Antik tarihin içinde Yunanca öğrenmek, Akdeniz'in sıcak kültürünü ve misafirperverliğini deneyimleme fırsatı sunar.",
    programHighlights:
      "Genel Yunanca kursları ve tarih/arkeoloji temalı özel kültür programları mevcuttur.",
    costRange:
      "Haftalık kurs ücretleri yaklaşık €130-210 arasındadır; yaşam maliyeti Batı Avrupa'ya kıyasla oldukça erişilebilirdir.",
    lifestyle:
      "Sıcak iklimi, zengin tarihi ve misafirperver kültürüyle Türk öğrenciler için kültürel açıdan da yakın bir uyum sunar.",
    pitch:
      "Coğrafi yakınlığı ve uygun maliyetiyle Yunanistan, aileler için hem ulaşım hem bütçe açısından pratik bir dil okulu seçeneğidir.",
  },
  {
    id: "ro",
    slug: "ro",
    name: "Romanya",
    flagCode: "ro",
    category: "europe",
    popularCities: ["Bükreş"],
    overview:
      "Uygun maliyetli dil kursları ve büyüyen uluslararası öğrenci topluluğuyla Romanya, erişilebilir bir seçenek sunar.",
    programHighlights:
      "Genel Rumence kursları ve üniversite öncesi hazırlık programları mevcuttur.",
    costRange:
      "Haftalık kurs ücretleri yaklaşık €100-170 arasındadır; yaşam maliyeti düşük seviyededir.",
    lifestyle:
      "Büyüyen bir uluslararası öğrenci topluluğu ve düşük yaşam maliyetiyle bütçe dostu bir seçenektir.",
    pitch:
      "Özellikle tıp eğitimi öncesi hazırlık planlayan öğrenciler için Romanya, uygun maliyetli ve pratik bir başlangıç noktasıdır.",
  },
  {
    id: "bg",
    slug: "bg",
    name: "Bulgaristan",
    flagCode: "bg",
    category: "europe",
    popularCities: ["Sofya"],
    overview:
      "Avrupa'nın en düşük maliyetli dil okulu seçeneklerinden biri olan Bulgaristan, sınırlı bütçeyle AB deneyimi arayanlar için idealdir.",
    programHighlights:
      "Genel Bulgarca kursları ve İngilizce destekli üniversite hazırlık programları mevcuttur.",
    costRange:
      "Haftalık kurs ücretleri yaklaşık €90-150 arasındadır; yaşam maliyeti Avrupa'nın en düşükleri arasındadır.",
    lifestyle:
      "Düşük yaşam maliyeti ve güvenli şehirleriyle sınırlı bütçeyle AB eğitimi arayanlar için pratik bir seçenektir.",
    pitch:
      "Bütçe önceliği olan aileler için Bulgaristan, düşük maliyetle kaliteli bir dil eğitimi deneyimi sunan nadir seçeneklerden biridir.",
  },
  {
    id: "lt",
    slug: "lt",
    name: "Litvanya",
    flagCode: "lt",
    category: "europe",
    popularCities: ["Vilnius"],
    overview:
      "Baltık bölgesinin tarihi başkentinde, güvenli ve uygun maliyetli bir dil okulu deneyimi sunar.",
    programHighlights:
      "Genel Litvanca kursları ve İngilizce destekli oryantasyon programları mevcuttur.",
    costRange:
      "Haftalık kurs ücretleri yaklaşık €100-170 arasındadır; yaşam maliyeti oldukça erişilebilirdir.",
    lifestyle:
      "Güvenli, düzenli ve gittikçe daha uluslararası hale gelen bir öğrenci yaşamı sunar.",
    pitch:
      "Gelişmekte olan bir Baltık merkezinde erken yer edinmek, hem maliyet hem de özgün bir deneyim açısından avantaj sağlar.",
  },
  {
    id: "lv",
    slug: "lv",
    name: "Letonya",
    flagCode: "lv",
    category: "europe",
    popularCities: ["Riga"],
    overview:
      "Riga'nın tarihi mimarisi eşliğinde, az bilinen ama değerli bir Baltık dil okulu seçeneği sunar.",
    programHighlights:
      "Genel Letonca kursları ve İngilizce destekli üniversite hazırlık programları mevcuttur.",
    costRange:
      "Haftalık kurs ücretleri yaklaşık €100-170 arasındadır; yaşam maliyeti oldukça uygundur.",
    lifestyle:
      "Riga'nın tarihi mimarisi ve kompakt şehir yapısı, güvenli ve erişilebilir bir öğrenci yaşamı sunar.",
    pitch:
      "Az bilinen ama AB tanınırlığına sahip bu destinasyon, bütçe dostu bir Avrupa dil deneyimi arayanlar için değerlendirilmeye değer.",
  },
  {
    id: "ee",
    slug: "ee",
    name: "Estonya",
    flagCode: "ee",
    category: "europe",
    popularCities: ["Tallinn"],
    overview:
      "Dijital yenilikçiliğin başkentinde, modern bir yaşam tarzıyla dil eğitimini bir arada sunan Estonya, teknoloji meraklıları için ilgi çekicidir.",
    programHighlights:
      "Genel Estonca kursları ve İngilizce destekli dijital girişimcilik temalı özel programlar mevcuttur.",
    costRange:
      "Haftalık kurs ücretleri yaklaşık €110-180 arasındadır; yaşam maliyeti orta-düşük seviyededir.",
    lifestyle:
      "Skype'ın doğduğu bu dijital toplumda, teknoloji odaklı genç bir nüfus ve son derece dijitalleşmiş kamu hizmetleri öne çıkar.",
    pitch:
      "Girişimcilik ve teknoloji odaklı kariyer hedefleyen öğrenciler için Estonya, Avrupa'nın en yenilikçi ekosistemlerinden birine erken erişim sağlar.",
  },
  {
    id: "mt",
    slug: "mt",
    name: "Malta",
    flagCode: "mt",
    category: "europe",
    popularCities: ["Valletta", "Sliema", "St. Julian's"],
    overview:
      "İngilizcenin resmi dil olduğu güneşli bir Akdeniz adası olan Malta, Avrupa'nın en yoğun İngilizce dil okulu merkezlerinden biridir.",
    programHighlights:
      "Genel İngilizce, akademik İngilizce ve IELTS/Cambridge sınav hazırlık programları, yıl boyu güneşli havada, esnek başlangıç tarihleriyle sunulur.",
    costRange:
      "Haftalık kurs ücretleri yaklaşık €150-260 arasındadır; Batı Avrupa standartlarına göre oldukça rekabetçidir.",
    lifestyle:
      "Yıl boyu güneşli iklimi, güvenliği ve tamamen İngilizce konuşulan ortamıyla özellikle genç öğrenciler arasında çok popülerdir.",
    pitch:
      "Dil okulu yoğunluğu en yüksek destinasyonlardan biri olan Malta, hem tatil hem eğitim isteyen öğrenciler için mükemmel bir denge sunar; yaz sezonunda kontenjanlar hızla dolar.",
  },
  {
    id: "cy",
    slug: "cy",
    name: "Kıbrıs",
    flagCode: "cy",
    category: "europe",
    popularCities: ["Girne", "Lefkoşa"],
    overview:
      "Coğrafi yakınlığı ve İngilizce eğitim seçenekleriyle Kıbrıs, Türk öğrenciler için pratik bir dil okulu destinasyonudur.",
    programHighlights:
      "Genel İngilizce kursları ve üniversite hazırlık dil programları, kısa uçuş mesafesiyle aileler için erişilebilir seçeneklerdir.",
    costRange:
      "Haftalık kurs ücretleri yaklaşık €140-220 arasındadır; yaşam maliyeti Türkiye'ye yakın öğrenciler için oldukça erişilebilirdir.",
    lifestyle:
      "Akdeniz iklimi, kültürel yakınlığı ve kısa uçuş mesafesiyle aileler için pratik bir tercih sebebidir.",
    pitch:
      "Coğrafi yakınlığı sayesinde sık ziyaret imkânı sunan Kıbrıs, ailesine yakın kalmak isteyen genç öğrenciler için ideal bir denge noktasıdır.",
  },
  {
    id: "lu",
    slug: "lu",
    name: "Lüksemburg",
    flagCode: "lu",
    category: "europe",
    popularCities: ["Lüksemburg"],
    overview:
      "Üç dilin bir arada konuşulduğu bu finans merkezinde, çok dilli bir dil eğitimi deneyimi yaşama fırsatı sunar.",
    programHighlights:
      "Fransızca, Almanca ve İngilizce kombinasyonlu özel dil programları, finans sektörüne yönelik iş dili kurslarıyla desteklenir.",
    costRange:
      "Haftalık kurs ücretleri yaklaşık €200-320 arasındadır; genel yaşam maliyeti yüksektir.",
    lifestyle:
      "Üç dilin (Fransızca, Almanca, Lüksemburgca) konuşulduğu çok kültürlü bir ortamda, AB kurumlarına ve büyük finans şirketlerine kolay erişim sağlar.",
    pitch:
      "Finans sektöründe kariyer hedefleyen öğrenciler için Lüksemburg'daki çok dilli dil eğitimi, mezuniyet sonrası doğrudan istihdam fırsatlarına açılan bir kapıdır.",
  },

  // ================= DİĞER POPÜLER DESTİNASYONLAR =================
  {
    id: "us",
    slug: "us",
    name: "Amerika",
    flagCode: "us",
    category: "other",
    popularCities: ["New York", "Los Angeles", "Boston"],
    overview:
      "Dünyanın en büyük dil okulu ağına sahip Amerika, akademik İngilizce ve iş İngilizcesi programlarında eşi benzeri olmayan bir çeşitlilik sunar.",
    programHighlights:
      "Genel İngilizce, akademik İngilizce (üniversite şartlı kabul dahil), TOEFL/IELTS sınav hazırlık ve iş İngilizcesi programları, CEA akreditasyonlu okullarda 2 haftadan 1 yıla kadar sunulur.",
    costRange:
      "Haftalık kurs ücretleri şehre göre yaklaşık $300-500 arasında değişir; büyük şehirlerde konaklama maliyeti ayrıca hesaba katılmalıdır.",
    lifestyle:
      "Kampüs kültürü, geniş sosyal aktivite yelpazesi ve çok kültürlü şehirleriyle, dil öğrenimini bütünsel bir üniversite deneyimine dönüştürür.",
    pitch:
      "Şartlı kabul (conditional admission) programlarıyla dil okulu, doğrudan bir Amerikan üniversitesine geçişin de kapısını aralar; bu programlar sınırlı kontenjanla yürütülür.",
  },
  {
    id: "ca",
    slug: "ca",
    name: "Kanada",
    flagCode: "ca",
    category: "other",
    popularCities: ["Toronto", "Vancouver", "Montreal"],
    overview:
      "Güvenli ve çok kültürlü şehirleriyle Kanada, hem İngilizce hem Fransızca dil okulu seçenekleriyle esnek ve göçmen dostu bir program sunar.",
    programHighlights:
      "Genel İngilizce/Fransızca, akademik hazırlık ve iş dili programları, Languages Canada akreditasyonlu okullarda geniş bir yelpazede sunulur.",
    costRange:
      "Haftalık kurs ücretleri yaklaşık CAD 250-400 arasındadır; şehir seçimine göre yaşam maliyeti değişkenlik gösterir.",
    lifestyle:
      "Yüksek yaşam kalitesi, güvenlik ve çok kültürlü toplumsal yapısıyla, uzun vadeli göç ve kariyer planları için de güçlü bir zemin sunar.",
    pitch:
      "Dil okulu sonrası çalışma izni ve göç yollarına açık esnek politikalarıyla Kanada, sadece dil değil, uzun vadeli bir yaşam planı sunan destinasyonlardan biridir.",
  },
];
