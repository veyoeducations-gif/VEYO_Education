export type Region = "europe" | "asia";

export interface CountryStats {
  bachelorPrograms: number;
  masterPrograms: number;
  languageSchools: number;
  prepPrograms: number;
}

export interface CountrySummary {
  quality: string;
  universities: string;
  cost: string;
  lifestyle: string;
  pitch: string;
}

export interface CountryPoint {
  id: string;
  slug: string;
  name: string;
  region: Region;
  flag: string;
  flagCode: string;
  capital: string;
  stats: CountryStats;
  summary: CountrySummary;
}

export const COUNTRIES: CountryPoint[] = [
  // ================= AVRUPA =================
  {
    id: "uk",
    slug: "uk",
    name: "Birleşik Krallık",
    region: "europe",
    flag: "🇬🇧",
    flagCode: "gb",
    capital: "Londra",
    stats: { bachelorPrograms: 142, masterPrograms: 118, languageSchools: 26, prepPrograms: 18 },
    summary: {
      quality:
        "Birleşik Krallık, yüzyıllardır süregelen akademik geleneğiyle dünyanın en saygın yükseköğretim sistemlerinden birine sahiptir; küresel sıralamalarda düzenli olarak ilk 10'da yer alan üniversiteleri barındırır.",
      universities:
        "Oxford, Cambridge, Imperial College London, UCL ve LSE gibi dünya çapında tanınan Russell Group üniversiteleri, mezunlarına açılan kapıları önemli ölçüde genişletir.",
      cost:
        "Yıllık eğitim ücretleri programa göre yaklaşık £15.000-£35.000 arasında değişir; Londra dışındaki şehirlerde yaşam maliyeti daha erişilebilir seviyelerdedir.",
      lifestyle:
        "Geniş uluslararası öğrenci topluluğu, çok kültürlü şehirler ve gelişmiş öğrenci destek sistemleriyle yabancı öğrenciler için son derece uyum sağlanabilir bir ortam sunar.",
      pitch:
        "Kontenjanlar ve vize süreçleri her yıl daha rekabetçi hale geliyor; doğru üniversite ve programı erken planlamak, İngiltere'de okuma hayalinizi gerçeğe dönüştürmenin en kritik adımıdır.",
    },
  },
  {
    id: "de",
    slug: "de",
    name: "Almanya",
    region: "europe",
    flag: "🇩🇪",
    flagCode: "de",
    capital: "Berlin",
    stats: { bachelorPrograms: 98, masterPrograms: 104, languageSchools: 19, prepPrograms: 14 },
    summary: {
      quality:
        "Almanya, mühendislik ve uygulamalı bilimlerdeki köklü akademik disipliniyle Avrupa'nın en güçlü eğitim sistemlerinden birine sahiptir.",
      universities:
        "TU Munich, RWTH Aachen ve Karlsruhe Institute of Technology gibi teknik üniversiteler, küresel şirketlerin tercih ettiği mühendislik mezunları yetiştirir.",
      cost:
        "Devlet üniversitelerinin çoğunda eğitim ücreti neredeyse yok denecek kadar düşüktür (sembolik dönem katkı payı); yaşam maliyeti aylık yaklaşık €800-1.200 civarındadır.",
      lifestyle:
        "Güçlü toplu taşıma ağı, güvenli şehirler ve geniş bir uluslararası öğrenci ekosistemiyle bütçe dostu bir Avrupa deneyimi sunar.",
      pitch:
        "Neredeyse ücretsiz eğitim fırsatı sınırlı kontenjanlarla sunulur; dil şartları ve başvuru takvimini doğru yönetmek, bu avantajdan yararlanmanın anahtarıdır.",
    },
  },
  {
    id: "fr",
    slug: "fr",
    name: "Fransa",
    region: "europe",
    flag: "🇫🇷",
    flagCode: "fr",
    capital: "Paris",
    stats: { bachelorPrograms: 87, masterPrograms: 93, languageSchools: 22, prepPrograms: 13 },
    summary: {
      quality:
        "Fransa, işletme, sanat ve mühendislik alanlarında uzun bir akademik geçmişe sahip, Avrupa'nın kültürel ve entelektüel merkezlerinden biridir.",
      universities:
        "Sorbonne Üniversitesi, Sciences Po ve HEC Paris gibi kurumlar, özellikle işletme ve sosyal bilimlerde dünya çapında tanınırlığa sahiptir.",
      cost:
        "Devlet üniversitelerinde yıllık ücretler yaklaşık €2.800-3.800 gibi oldukça erişilebilir seviyelerdedir; büyük şehirler dışında yaşam maliyeti de makuldür.",
      lifestyle:
        "Zengin kültürel yaşamı, güçlü öğrenci indirimleri ve gelişmiş ulaşım ağıyla uluslararası öğrencilere kolay bir uyum süreci sunar.",
      pitch:
        "Fransızca dil şartı olan programlarla İngilizce yürütülen programlar arasında doğru seçimi yapmak büyük fark yaratır; danışmanlık desteğiyle bu süreç çok daha az stresli ilerler.",
    },
  },
  {
    id: "it",
    slug: "it",
    name: "İtalya",
    region: "europe",
    flag: "🇮🇹",
    flagCode: "it",
    capital: "Roma",
    stats: { bachelorPrograms: 76, masterPrograms: 81, languageSchools: 20, prepPrograms: 11 },
    summary: {
      quality:
        "Dünyanın en eski üniversitesine (Bologna) ev sahipliği yapan İtalya, sanat, tasarım ve mimarlıkta benzersiz bir akademik miras sunar.",
      universities:
        "Bologna Üniversitesi, Politecnico di Milano ve Sapienza Üniversitesi, özellikle tasarım, mühendislik ve sanat tarihinde uluslararası prestije sahiptir.",
      cost:
        "Devlet üniversitelerinde yıllık ücretler gelir durumuna göre yaklaşık €900-4.000 arasında değişir; bu da İtalya'yı bütçe dostu bir Avrupa seçeneği yapar.",
      lifestyle:
        "Zengin tarih, gastronomi ve sosyal yaşamıyla İtalya, akademik hayatı gündelik kültürel deneyimle harmanlamak isteyen öğrenciler için idealdir.",
      pitch:
        "Düşük eğitim maliyeti ve yüksek yaşam kalitesi birleşimi, doğru şehir ve program seçimiyle mükemmel bir yatırım getirisi sunar.",
    },
  },
  {
    id: "es",
    slug: "es",
    name: "İspanya",
    region: "europe",
    flag: "🇪🇸",
    flagCode: "es",
    capital: "Madrid",
    stats: { bachelorPrograms: 71, masterPrograms: 68, languageSchools: 24, prepPrograms: 10 },
    summary: {
      quality:
        "İspanya, işletme ve dil eğitiminde güçlü bir akademik altyapıya sahip, Avrupa'nın en sıcak kültürlerinden birine sahip bir eğitim destinasyonudur.",
      universities:
        "IE Business School, Universidad Complutense de Madrid ve Universitat de Barcelona, özellikle işletme ve uluslararası ilişkiler alanında öne çıkar.",
      cost:
        "Devlet üniversitelerinde yıllık ücretler yaklaşık €750-2.500 arasındadır; özel üniversitelerde bu rakam daha yüksek olabilir.",
      lifestyle:
        "Sıcak iklimi, canlı sosyal yaşamı ve İspanyolca pratiği için eşsiz fırsatlarıyla uyum süreci hızlı ve keyifli geçer.",
      pitch:
        "Hem uygun maliyeti hem de yaşam kalitesiyle İspanya, bütçe bilinci yüksek aileler için değerli bir alternatiftir; doğru şehir seçimi memnuniyeti doğrudan etkiler.",
    },
  },
  {
    id: "pt",
    slug: "pt",
    name: "Portekiz",
    region: "europe",
    flag: "🇵🇹",
    flagCode: "pt",
    capital: "Lizbon",
    stats: { bachelorPrograms: 42, masterPrograms: 39, languageSchools: 12, prepPrograms: 6 },
    summary: {
      quality:
        "Portekiz, son yıllarda uluslararası öğrenci sayısını hızla artıran, Batı Avrupa standartlarında ama daha uygun maliyetli bir eğitim sistemine sahiptir.",
      universities:
        "Porto Üniversitesi ve Lizbon Üniversitesi, mühendislik ve işletme programlarıyla bölgesel ölçekte güçlü bir itibara sahiptir.",
      cost:
        "Yıllık eğitim ücretleri yaklaşık €1.000-7.000 arasında değişir; yaşam maliyeti Batı Avrupa'nın çoğu ülkesinden belirgin şekilde düşüktür.",
      lifestyle:
        "Güneşli iklimi, güvenli şehirleri ve büyüyen uluslararası topluluğuyla Portekiz, bütçesi sınırlı ama Avrupa deneyimi isteyen öğrenciler için cazip bir seçenektir.",
      pitch:
        "Henüz çok fazla öğrencinin keşfetmediği bu destinasyon, erken davrananlara hem maliyet hem de kabul şansı açısından belirgin bir avantaj sunuyor.",
    },
  },
  {
    id: "nl",
    slug: "nl",
    name: "Hollanda",
    region: "europe",
    flag: "🇳🇱",
    flagCode: "nl",
    capital: "Amsterdam",
    stats: { bachelorPrograms: 88, masterPrograms: 96, languageSchools: 15, prepPrograms: 9 },
    summary: {
      quality:
        "Hollanda, tamamen İngilizce yürütülen program çeşitliliğiyle Avrupa'da öne çıkan, yenilikçi ve uygulamalı eğitim modeliyle tanınan bir ülkedir.",
      universities:
        "Delft Teknoloji Üniversitesi ve Amsterdam Üniversitesi, mühendislik ve sosyal bilimlerde dünya sıralamalarında düzenli olarak üst sıralarda yer alır.",
      cost:
        "Avrupa Birliği dışı öğrenciler için yıllık ücretler yaklaşık €8.000-15.000 arasındadır; yaşam maliyeti orta-yüksek seviyededir.",
      lifestyle:
        "Neredeyse herkesin akıcı İngilizce konuştuğu, bisiklet dostu ve uluslararası öğrencilere son derece açık bir kültüre sahiptir.",
      pitch:
        "Program çeşitliliği ve İngilizce eğitim oranı yüksek olduğundan doğru programı bulmak kritik; profesyonel danışmanlıkla en uygun eşleşme çok daha hızlı sağlanır.",
    },
  },
  {
    id: "be",
    slug: "be",
    name: "Belçika",
    region: "europe",
    flag: "🇧🇪",
    flagCode: "be",
    capital: "Brüksel",
    stats: { bachelorPrograms: 44, masterPrograms: 51, languageSchools: 10, prepPrograms: 5 },
    summary: {
      quality:
        "Avrupa Birliği'nin kalbinde yer alan Belçika, uluslararası ilişkiler ve hukuk başta olmak üzere güçlü akademik programlara sahiptir.",
      universities:
        "KU Leuven, dünya sıralamalarında düzenli olarak üst sıralarda yer alan, özellikle mühendislik ve tıpta güçlü bir üniversitedir.",
      cost:
        "Yıllık eğitim ücretleri yaklaşık €4.000-12.000 arasında değişir; yaşam maliyeti orta seviyededir.",
      lifestyle:
        "Çok dilli yapısı ve kompakt coğrafyasıyla, Avrupa'nın diğer büyük şehirlerine kolay erişim sağlayan merkezi bir konum sunar.",
      pitch:
        "AB kurumlarına yakınlığı, uluslararası kariyer hedefleyen öğrenciler için stratejik bir başlangıç noktası oluşturur.",
    },
  },
  {
    id: "ch",
    slug: "ch",
    name: "İsviçre",
    region: "europe",
    flag: "🇨🇭",
    flagCode: "ch",
    capital: "Bern",
    stats: { bachelorPrograms: 38, masterPrograms: 47, languageSchools: 14, prepPrograms: 6 },
    summary: {
      quality:
        "İsviçre, otelcilik ve finans alanlarında dünya lideri, mühendislikte ise küresel çapta saygın bir eğitim sistemine sahiptir.",
      universities:
        "ETH Zürih, dünya sıralamalarında ilk 10'a giren, mühendislik ve doğa bilimlerinde efsanevi bir üniversitedir.",
      cost:
        "Devlet üniversitelerinde eğitim ücreti şaşırtıcı derecede düşüktür (yıllık yaklaşık CHF 1.000-4.000); ancak yaşam maliyeti Avrupa'nın en yüksekleri arasındadır.",
      lifestyle:
        "Son derece güvenli, düzenli ve doğayla iç içe bir yaşam sunar; çok dilli ortamı uluslararası öğrencilere kolay uyum sağlar.",
      pitch:
        "Premium bir eğitim ve kariyer yatırımı arayan aileler için İsviçre, maliyetin ötesinde bir marka değeri sunar; doğru program seçimiyle bu yatırım kesinlikle karşılığını verir.",
    },
  },
  {
    id: "at",
    slug: "at",
    name: "Avusturya",
    region: "europe",
    flag: "🇦🇹",
    flagCode: "at",
    capital: "Viyana",
    stats: { bachelorPrograms: 47, masterPrograms: 52, languageSchools: 11, prepPrograms: 7 },
    summary: {
      quality:
        "Avusturya, müzik, sanat ve bilim alanlarında zengin bir akademik mirasa sahip, yaşam kalitesi dünya sıralamalarında sürekli ilk sıralarda yer alan bir ülkedir.",
      universities:
        "Viyana Üniversitesi ve TU Wien, özellikle doğa bilimleri ve mühendislikte güçlü bir akademik itibara sahiptir.",
      cost:
        "Yıllık eğitim ücretleri yaklaşık €1.500-6.000 arasındadır; yaşam maliyeti orta seviyededir.",
      lifestyle:
        "Dünyanın en yaşanabilir şehirleri sıralamalarında düzenli yer alan Viyana, güvenli ve kültürel açıdan zengin bir öğrenci hayatı sunar.",
      pitch:
        "Uygun maliyetle premium bir Orta Avrupa deneyimi arayan öğrenciler için Avusturya, gözden kaçırılmaması gereken bir seçenektir.",
    },
  },
  {
    id: "ie",
    slug: "ie",
    name: "İrlanda",
    region: "europe",
    flag: "🇮🇪",
    flagCode: "ie",
    capital: "Dublin",
    stats: { bachelorPrograms: 58, masterPrograms: 63, languageSchools: 18, prepPrograms: 9 },
    summary: {
      quality:
        "İrlanda, tamamen İngilizce eğitim veren güçlü bir yükseköğretim sistemine ve Avrupa'nın en dinamik teknoloji ekonomilerinden birine sahiptir.",
      universities:
        "Trinity College Dublin ve University College Dublin, işletme ve bilgisayar bilimlerinde uluslararası öğrenciler arasında oldukça popülerdir.",
      cost:
        "Yıllık eğitim ücretleri yaklaşık €10.000-25.000 arasında değişir; Dublin dışındaki şehirlerde yaşam maliyeti daha erişilebilirdir.",
      lifestyle:
        "Google, Meta ve Apple gibi şirketlerin Avrupa merkezlerine ev sahipliği yapması, mezuniyet sonrası kariyer fırsatlarını doğrudan artırır.",
      pitch:
        "Mezuniyet sonrası çalışma vizesi avantajlarıyla İrlanda, sadece eğitim değil uzun vadeli bir kariyer planı sunar; bu fırsatı doğru zamanlamayla değerlendirmek önemlidir.",
    },
  },
  {
    id: "se",
    slug: "se",
    name: "İsveç",
    region: "europe",
    flag: "🇸🇪",
    flagCode: "se",
    capital: "Stockholm",
    stats: { bachelorPrograms: 39, masterPrograms: 58, languageSchools: 9, prepPrograms: 5 },
    summary: {
      quality:
        "İsveç, sürdürülebilirlik, teknoloji ve tasarım alanlarında yenilikçi, uygulamalı bir eğitim modeliyle öne çıkar.",
      universities:
        "KTH Kraliyet Teknoloji Enstitüsü, Lund Üniversitesi ve Uppsala Üniversitesi, mühendislik ve doğa bilimlerinde güçlü bir akademik itibara sahiptir.",
      cost:
        "AB dışı öğrenciler için yıllık ücretler yaklaşık €10.000-20.000 arasındadır; çok sayıda burs imkânı mevcuttur.",
      lifestyle:
        "Cinsiyet eşitliği, sürdürülebilirlik odaklı yaşam tarzı ve yüksek yaşam standardıyla öğrenci dostu bir toplumdur.",
      pitch:
        "Spotify ve Klarna gibi küresel teknoloji şirketlerinin çıktığı bir ekosistemde eğitim almak, girişimci ruhlu öğrenciler için ciddi bir kariyer avantajı sağlar.",
    },
  },
  {
    id: "no",
    slug: "no",
    name: "Norveç",
    region: "europe",
    flag: "🇳🇴",
    flagCode: "no",
    capital: "Oslo",
    stats: { bachelorPrograms: 28, masterPrograms: 34, languageSchools: 7, prepPrograms: 4 },
    summary: {
      quality:
        "Norveç, yüksek yaşam standardı ve güçlü kamu üniversiteleriyle Kuzey Avrupa'nın kaliteli eğitim seçeneklerinden biridir.",
      universities:
        "Oslo Üniversitesi, doğa bilimleri ve sosyal bilimlerde bölgesel ölçekte saygın bir kurumdur.",
      cost:
        "Kamu üniversitelerinde eğitim ücretleri makul seviyelerdedir; yaşam maliyeti ise Avrupa'nın en yüksekleri arasında yer alır.",
      lifestyle:
        "Doğayla iç içe, güvenli ve düzenli bir yaşam sunar; İngilizce yaygın olarak konuşulur.",
      pitch:
        "Az sayıda ama kaliteli program sunan Norveç'te doğru bölüm ve burs fırsatlarını yakalamak, profesyonel bir yönlendirmeyle çok daha kolay hale gelir.",
    },
  },
  {
    id: "dk",
    slug: "dk",
    name: "Danimarka",
    region: "europe",
    flag: "🇩🇰",
    flagCode: "dk",
    capital: "Kopenhag",
    stats: { bachelorPrograms: 33, masterPrograms: 45, languageSchools: 8, prepPrograms: 5 },
    summary: {
      quality:
        "Danimarka, yenilikçi öğretim yöntemleri ve yüksek öğrenci memnuniyetiyle dünyanın en mutlu ülkeleri sıralamalarında öne çıkan bir eğitim sistemine sahiptir.",
      universities:
        "Kopenhag Üniversitesi ve DTU (Danimarka Teknik Üniversitesi), mühendislik ve yaşam bilimlerinde uluslararası tanınırlığa sahiptir.",
      cost:
        "AB dışı öğrenciler için yıllık ücretler yaklaşık €6.000-16.000 arasındadır.",
      lifestyle:
        "Bisiklet kültürü, güçlü sosyal güvenlik ağı ve İngilizce'nin yaygınlığıyla uluslararası öğrencilere kolay bir uyum sunar.",
      pitch:
        "Yüksek yaşam kalitesiyle bilinen Danimarka'da doğru program seçimi, hem akademik hem de kişisel gelişim açısından güçlü bir yatırım anlamına gelir.",
    },
  },
  {
    id: "fi",
    slug: "fi",
    name: "Finlandiya",
    region: "europe",
    flag: "🇫🇮",
    flagCode: "fi",
    capital: "Helsinki",
    stats: { bachelorPrograms: 31, masterPrograms: 42, languageSchools: 7, prepPrograms: 4 },
    summary: {
      quality:
        "Dünyaca örnek gösterilen eğitim sistemiyle Finlandiya, öğrenci odaklı öğretim felsefesi ve güçlü Ar-Ge ekosistemiyle tanınır.",
      universities:
        "Helsinki Üniversitesi ve Aalto Üniversitesi, teknoloji ve tasarım alanlarında uluslararası öğrenciler arasında popülerdir.",
      cost:
        "Yıllık eğitim ücretleri yaklaşık €8.000-18.000 arasındadır; çok sayıda İngilizce program mevcuttur.",
      lifestyle:
        "Güvenli, sakin ve doğayla iç içe bir yaşam sunar; kamusal hizmetlerin kalitesi yüksektir.",
      pitch:
        "Nokia ve oyun endüstrisinin (Supercell, Rovio) çıktığı bir teknoloji kültüründe eğitim almak, teknoloji odaklı kariyer hedefleyen öğrenciler için değerli bir fırsattır.",
    },
  },
  {
    id: "is",
    slug: "is",
    name: "İzlanda",
    region: "europe",
    flag: "🇮🇸",
    flagCode: "is",
    capital: "Reykjavik",
    stats: { bachelorPrograms: 12, masterPrograms: 15, languageSchools: 3, prepPrograms: 2 },
    summary: {
      quality:
        "Küçük ama kaliteli akademik yapısıyla İzlanda, özellikle doğa bilimleri ve yenilenebilir enerji alanlarında niş ama güçlü programlar sunar.",
      universities:
        "İzlanda Üniversitesi, jeotermal enerji ve deniz bilimleri gibi alanlarda uluslararası araştırma işbirlikleriyle dikkat çeker.",
      cost:
        "Kamu üniversitelerinde kayıt ücreti oldukça düşüktür; ancak genel yaşam maliyeti yüksektir.",
      lifestyle:
        "Eşsiz doğası, düşük suç oranı ve küçük ama sıkı bir uluslararası öğrenci topluluğuyla farklı bir deneyim sunar.",
      pitch:
        "Sıra dışı bir akademik macera arayan, niş alanlarda uzmanlaşmak isteyen öğrenciler için İzlanda az bilinen ama değerli bir seçenektir.",
    },
  },
  {
    id: "pl",
    slug: "pl",
    name: "Polonya",
    region: "europe",
    flag: "🇵🇱",
    flagCode: "pl",
    capital: "Varşova",
    stats: { bachelorPrograms: 54, masterPrograms: 49, languageSchools: 13, prepPrograms: 8 },
    summary: {
      quality:
        "Polonya, son yıllarda uluslararası öğrenci sayısını hızla artıran, AB standartlarında ama oldukça uygun maliyetli bir eğitim sistemine sahiptir.",
      universities:
        "Varşova Üniversitesi ve Jagiellonian Üniversitesi (Avrupa'nın en eski üniversitelerinden biri), özellikle tıp ve mühendislik programlarıyla dikkat çeker.",
      cost:
        "Yıllık eğitim ücretleri yaklaşık €2.000-6.000 arasında değişir; yaşam maliyeti Batı Avrupa'ya kıyasla belirgin şekilde düşüktür.",
      lifestyle:
        "Canlı şehir yaşamı, güvenlik ve büyüyen bir uluslararası öğrenci topluluğuyla bütçe dostu bir Avrupa deneyimi sunar.",
      pitch:
        "Uygun maliyeti ve İngilizce tıp programlarıyla Polonya, özellikle sınırlı bütçeyle kaliteli bir Avrupa eğitimi arayan aileler için güçlü bir alternatiftir.",
    },
  },
  {
    id: "cz",
    slug: "cz",
    name: "Çek Cumhuriyeti",
    region: "europe",
    flag: "🇨🇿",
    flagCode: "cz",
    capital: "Prag",
    stats: { bachelorPrograms: 46, masterPrograms: 41, languageSchools: 11, prepPrograms: 7 },
    summary: {
      quality:
        "Orta Avrupa'nın tarihi akademik merkezlerinden biri olan Çek Cumhuriyeti, özellikle tıp ve mühendislik alanlarında güçlü bir eğitim geleneğine sahiptir.",
      universities:
        "Charles Üniversitesi (1348'de kurulmuş, Orta Avrupa'nın en eski üniversitesi), tıp fakültesiyle uluslararası öğrenciler arasında oldukça popülerdir.",
      cost:
        "İngilizce programlarda yıllık ücretler yaklaşık €3.000-12.000 arasındadır; yaşam maliyeti oldukça erişilebilirdir.",
      lifestyle:
        "Prag'ın tarihi dokusu, güvenliği ve canlı öğrenci yaşamıyla Avrupa'nın en çok tercih edilen şehirlerinden biridir.",
      pitch:
        "Özellikle tıp eğitiminde İngilizce programların uygun maliyetle sunulması, Çek Cumhuriyeti'ni doğru danışmanlıkla değerlendirilmesi gereken bir fırsata dönüştürür.",
    },
  },
  {
    id: "sk",
    slug: "sk",
    name: "Slovakya",
    region: "europe",
    flag: "🇸🇰",
    flagCode: "sk",
    capital: "Bratislava",
    stats: { bachelorPrograms: 21, masterPrograms: 18, languageSchools: 5, prepPrograms: 3 },
    summary: {
      quality:
        "Slovakya, AB standartlarında eğitim sunan, özellikle tıp alanında uluslararası öğrencilere açık kompakt bir sisteme sahiptir.",
      universities:
        "Comenius Üniversitesi, tıp ve doğa bilimleri programlarıyla bölgesel ölçekte tanınan bir kurumdur.",
      cost:
        "Yıllık eğitim ücretleri oldukça düşüktür (yaklaşık €3.000-9.000); yaşam maliyeti de düşük seviyededir.",
      lifestyle:
        "Küçük ama merkezi konumu sayesinde Viyana ve Budapeşte gibi şehirlere kolay erişim sağlar.",
      pitch:
        "Düşük maliyetle AB diploması arayan öğrenciler için Slovakya, gözden kaçırılan ama değerli bir seçenektir.",
    },
  },
  {
    id: "hu",
    slug: "hu",
    name: "Macaristan",
    region: "europe",
    flag: "🇭🇺",
    flagCode: "hu",
    capital: "Budapeşte",
    stats: { bachelorPrograms: 49, masterPrograms: 44, languageSchools: 10, prepPrograms: 6 },
    summary: {
      quality:
        "Macaristan, özellikle tıp eğitiminde uzun bir gelenek taşıyan ve devlet burslarıyla desteklenen güçlü bir yükseköğretim sistemine sahiptir.",
      universities:
        "Semmelweis Üniversitesi, tıp alanında Avrupa'nın en çok tercih edilen kurumlarından biridir; Eötvös Loránd Üniversitesi ise sosyal bilimlerde öne çıkar.",
      cost:
        "Yıllık eğitim ücretleri yaklaşık €4.000-16.000 arasında değişir; Stipendium Hungaricum bursu birçok öğrenciye tam burs imkânı sunar.",
      lifestyle:
        "Budapeşte'nin tarihi güzelliği, düşük yaşam maliyeti ve canlı öğrenci yaşamı öne çıkan avantajlarıdır.",
      pitch:
        "Devlet bursu imkânları ve güçlü tıp programlarıyla Macaristan, doğru başvuru stratejisiyle son derece avantajlı bir seçenek haline gelir.",
    },
  },
  {
    id: "si",
    slug: "si",
    name: "Slovenya",
    region: "europe",
    flag: "🇸🇮",
    flagCode: "si",
    capital: "Ljubljana",
    stats: { bachelorPrograms: 18, masterPrograms: 16, languageSchools: 4, prepPrograms: 3 },
    summary: {
      quality:
        "Slovenya, küçük ölçekli ama AB standartlarında kaliteli bir eğitim sistemine ve doğayla iç içe bir kampüs kültürüne sahiptir.",
      universities:
        "Ljubljana Üniversitesi, bölgenin en büyük ve en köklü yükseköğretim kurumudur.",
      cost:
        "Yıllık eğitim ücretleri düşük-orta seviyededir; yaşam maliyeti de oldukça makuldür.",
      lifestyle:
        "Güvenli, yeşil ve sakin bir öğrenci yaşamı sunar; Alp dağları ve Akdeniz kıyısına yakınlığıyla dikkat çeker.",
      pitch:
        "Kalabalık olmayan kampüslerde, kişiye özel bir akademik deneyim arayan öğrenciler için Slovenya değerli bir alternatiftir.",
    },
  },
  {
    id: "hr",
    slug: "hr",
    name: "Hırvatistan",
    region: "europe",
    flag: "🇭🇷",
    flagCode: "hr",
    capital: "Zagreb",
    stats: { bachelorPrograms: 24, masterPrograms: 20, languageSchools: 6, prepPrograms: 3 },
    summary: {
      quality:
        "Hırvatistan, Orta Avrupa akademik standartlarını Akdeniz yaşam tarzıyla birleştiren, gelişmekte olan bir eğitim destinasyonudur.",
      universities:
        "Zagreb Üniversitesi, bölgenin en eski ve en büyük üniversitelerinden biridir.",
      cost:
        "Yıllık eğitim ücretleri düşük-orta seviyededir; yaşam maliyeti oldukça uygundur.",
      lifestyle:
        "Adriyatik kıyısına yakınlığı, güvenliği ve sıcak kültürüyle özellikle yaz aylarında cazip bir öğrenci yaşamı sunar.",
      pitch:
        "Henüz yoğun rekabetin olmadığı bu pazarda erken başvuru, hem kabul hem de burs şansını belirgin şekilde artırır.",
    },
  },
  {
    id: "gr",
    slug: "gr",
    name: "Yunanistan",
    region: "europe",
    flag: "🇬🇷",
    flagCode: "gr",
    capital: "Atina",
    stats: { bachelorPrograms: 29, masterPrograms: 25, languageSchools: 8, prepPrograms: 4 },
    summary: {
      quality:
        "Antik akademik köklere sahip Yunanistan, günümüzde uygun maliyetli bir Akdeniz eğitim destinasyonu olarak öne çıkar.",
      universities:
        "Atina Ulusal ve Kapodistrias Üniversitesi, ülkenin en köklü ve en büyük yükseköğretim kurumudur.",
      cost:
        "Yıllık eğitim ücretleri düşük-orta seviyededir; yaşam maliyeti Batı Avrupa'ya kıyasla oldukça erişilebilirdir.",
      lifestyle:
        "Sıcak iklimi, zengin tarihi ve misafirperver kültürüyle Türk öğrenciler için kültürel açıdan da yakın bir uyum sunar.",
      pitch:
        "Coğrafi yakınlığı ve uygun maliyetiyle Yunanistan, aileler için hem ulaşım hem bütçe açısından pratik bir Avrupa seçeneğidir.",
    },
  },
  {
    id: "ro",
    slug: "ro",
    name: "Romanya",
    region: "europe",
    flag: "🇷🇴",
    flagCode: "ro",
    capital: "Bükreş",
    stats: { bachelorPrograms: 36, masterPrograms: 31, languageSchools: 9, prepPrograms: 5 },
    summary: {
      quality:
        "Romanya, özellikle İngilizce yürütülen tıp programlarıyla uluslararası öğrenciler arasında hızla popülerlik kazanan bir eğitim sistemine sahiptir.",
      universities:
        "Bükreş Üniversitesi ve çeşitli tıp fakülteleri, uygun maliyetli ve AB tanınırlığına sahip diplomalar sunar.",
      cost:
        "Yıllık eğitim ücretleri yaklaşık €3.000-8.000 arasındadır; yaşam maliyeti düşük seviyededir.",
      lifestyle:
        "Büyüyen bir uluslararası öğrenci topluluğu ve düşük yaşam maliyetiyle bütçe dostu bir seçenektir.",
      pitch:
        "Özellikle tıp eğitiminde uygun maliyet-kalite dengesi arayan öğrenciler için Romanya değerlendirilmesi gereken bir seçenektir.",
    },
  },
  {
    id: "bg",
    slug: "bg",
    name: "Bulgaristan",
    region: "europe",
    flag: "🇧🇬",
    flagCode: "bg",
    capital: "Sofya",
    stats: { bachelorPrograms: 22, masterPrograms: 19, languageSchools: 6, prepPrograms: 3 },
    summary: {
      quality:
        "Bulgaristan, AB üyesi olmasına rağmen bölgenin en düşük maliyetli eğitim sistemlerinden birine sahiptir.",
      universities:
        "Sofya Üniversitesi ve çeşitli tıp fakülteleri, İngilizce eğitim veren erişilebilir programlarıyla dikkat çeker.",
      cost:
        "Yıllık eğitim ücretleri yaklaşık €2.500-7.000 arasındadır; yaşam maliyeti Avrupa'nın en düşükleri arasındadır.",
      lifestyle:
        "Düşük yaşam maliyeti ve güvenli şehirleriyle sınırlı bütçeyle AB eğitimi arayanlar için pratik bir seçenektir.",
      pitch:
        "Bütçe önceliği olan aileler için Bulgaristan, AB diploması ile düşük maliyeti bir araya getiren nadir seçeneklerden biridir.",
    },
  },
  {
    id: "lt",
    slug: "lt",
    name: "Litvanya",
    region: "europe",
    flag: "🇱🇹",
    flagCode: "lt",
    capital: "Vilnius",
    stats: { bachelorPrograms: 26, masterPrograms: 23, languageSchools: 6, prepPrograms: 4 },
    summary: {
      quality:
        "Litvanya, Baltık bölgesinde hızla büyüyen, özellikle mühendislik ve işletme alanlarında güçlenen bir eğitim sistemine sahiptir.",
      universities:
        "Vilnius Üniversitesi, Kuzey/Doğu Avrupa'nın en eski üniversitelerinden biri olarak köklü bir akademik geleneğe sahiptir.",
      cost:
        "Yıllık eğitim ücretleri düşük-orta seviyededir; yaşam maliyeti oldukça erişilebilirdir.",
      lifestyle:
        "Güvenli, düzenli ve gittikçe daha uluslararası hale gelen bir öğrenci yaşamı sunar.",
      pitch:
        "Gelişmekte olan bir Baltık merkezinde erken yer edinmek, hem maliyet hem de kariyer fırsatları açısından avantaj sağlar.",
    },
  },
  {
    id: "lv",
    slug: "lv",
    name: "Letonya",
    region: "europe",
    flag: "🇱🇻",
    flagCode: "lv",
    capital: "Riga",
    stats: { bachelorPrograms: 19, masterPrograms: 16, languageSchools: 4, prepPrograms: 3 },
    summary: {
      quality:
        "Letonya, uygun maliyetli AB eğitimi sunan, özellikle işletme ve bilgi teknolojileri alanında gelişen bir sisteme sahiptir.",
      universities:
        "Letonya Üniversitesi ve Riga Teknik Üniversitesi, bölgenin önde gelen yükseköğretim kurumlarıdır.",
      cost:
        "Yıllık eğitim ücretleri düşük-orta seviyededir; yaşam maliyeti oldukça uygundur.",
      lifestyle:
        "Riga'nın tarihi mimarisi ve kompakt şehir yapısı, güvenli ve erişilebilir bir öğrenci yaşamı sunar.",
      pitch:
        "Az bilinen ama AB tanınırlığına sahip bu destinasyon, bütçe dostu bir Avrupa deneyimi arayanlar için değerlendirilmeye değer.",
    },
  },
  {
    id: "ee",
    slug: "ee",
    name: "Estonya",
    region: "europe",
    flag: "🇪🇪",
    flagCode: "ee",
    capital: "Tallinn",
    stats: { bachelorPrograms: 23, masterPrograms: 27, languageSchools: 5, prepPrograms: 3 },
    summary: {
      quality:
        "Estonya, dijital yenilikçilikte dünya lideri konumuyla, teknoloji ve girişimcilik odaklı modern bir eğitim sistemine sahiptir.",
      universities:
        "Tartu Üniversitesi, büyüklüğüne oranla dünya sıralamalarında oldukça yüksek performans gösteren bir kurumdur.",
      cost:
        "Yıllık eğitim ücretleri yaklaşık €3.500-9.000 arasındadır; yaşam maliyeti orta-düşük seviyededir.",
      lifestyle:
        "Skype'ın doğduğu bu dijital toplumda, teknoloji odaklı genç bir nüfus ve son derece dijitalleşmiş kamu hizmetleri öne çıkar.",
      pitch:
        "Girişimcilik ve teknoloji odaklı kariyer hedefleyen öğrenciler için Estonya, Avrupa'nın en yenilikçi ekosistemlerinden birine erken erişim sağlar.",
    },
  },
  {
    id: "mt",
    slug: "mt",
    name: "Malta",
    region: "europe",
    flag: "🇲🇹",
    flagCode: "mt",
    capital: "Valletta",
    stats: { bachelorPrograms: 14, masterPrograms: 12, languageSchools: 16, prepPrograms: 3 },
    summary: {
      quality:
        "Malta, İngilizcenin resmi dil olduğu, AB üyesi güneşli bir ada olarak hem akademik hem dil eğitiminde benzersiz bir konum sunar.",
      universities:
        "Malta Üniversitesi, ada genelinde tek kamu üniversitesi olarak işletme ve turizm yönetiminde güçlü programlar sunar.",
      cost:
        "Yıllık eğitim ücretleri orta seviyededir; dil okulları için maliyetler oldukça rekabetçidir.",
      lifestyle:
        "Yıl boyu güneşli iklimi, güvenliği ve tamamen İngilizce konuşulan ortamıyla özellikle dil eğitimi için ideal bir destinasyondur.",
      pitch:
        "Dil okulu yoğunluğu en yüksek destinasyonlardan biri olan Malta, kısa süreli İngilizce programları için mükemmel bir başlangıç noktasıdır.",
    },
  },
  {
    id: "cy",
    slug: "cy",
    name: "Kıbrıs",
    region: "europe",
    flag: "🇨🇾",
    flagCode: "cy",
    capital: "Lefkoşa",
    stats: { bachelorPrograms: 31, masterPrograms: 27, languageSchools: 8, prepPrograms: 5 },
    summary: {
      quality:
        "Kıbrıs, İngilizce eğitim veren özel üniversiteleriyle bilinen, Türk öğrenciler için coğrafi ve kültürel olarak en yakın Avrupa destinasyonlarından biridir.",
      universities:
        "Doğu Akdeniz Üniversitesi ve çok sayıda İngilizce eğitim veren özel üniversite, geniş bir program yelpazesi sunar.",
      cost:
        "Yıllık eğitim ücretleri orta seviyededir; yaşam maliyeti Türkiye'ye yakın öğrenciler için oldukça erişilebilirdir.",
      lifestyle:
        "Akdeniz iklimi, kültürel yakınlığı ve kısa uçuş mesafesiyle aileler için pratik bir tercih sebebidir.",
      pitch:
        "Coğrafi yakınlığı sayesinde sık ziyaret imkânı sunan Kıbrıs, ailesine yakın kalmak isteyen öğrenciler için ideal bir denge noktasıdır.",
    },
  },
  {
    id: "lu",
    slug: "lu",
    name: "Lüksemburg",
    region: "europe",
    flag: "🇱🇺",
    flagCode: "lu",
    capital: "Lüksemburg",
    stats: { bachelorPrograms: 9, masterPrograms: 14, languageSchools: 3, prepPrograms: 2 },
    summary: {
      quality:
        "Küçük ama son derece zengin bu ülke, finans ve hukuk alanında Avrupa'nın en yoğun kurumsal ekosistemlerinden birine sahiptir.",
      universities:
        "Lüksemburg Üniversitesi, çok dilli yapısı ve finans odaklı programlarıyla niş ama etkili bir akademik kurumdur.",
      cost:
        "Yıllık eğitim ücretleri düşük seviyededir; ancak genel yaşam maliyeti yüksektir.",
      lifestyle:
        "Üç dilin (Fransızca, Almanca, Lüksemburgca) konuşulduğu çok kültürlü bir ortamda, AB kurumlarına ve büyük finans şirketlerine kolay erişim sağlar.",
      pitch:
        "Finans sektöründe kariyer hedefleyen öğrenciler için Lüksemburg, mezuniyet sonrası doğrudan istihdam fırsatlarına açılan bir kapıdır.",
    },
  },

  // ================= ASYA =================
  {
    id: "ru",
    slug: "ru",
    name: "Rusya",
    region: "asia",
    flag: "🇷🇺",
    flagCode: "ru",
    capital: "Moskova",
    stats: { bachelorPrograms: 64, masterPrograms: 57, languageSchools: 11, prepPrograms: 9 },
    summary: {
      quality:
        "Rusya, özellikle tıp, mühendislik ve doğa bilimlerinde güçlü bir akademik geleneğe ve geniş bir üniversite ağına sahiptir.",
      universities:
        "Lomonosov Moskova Devlet Üniversitesi, bölgenin en köklü ve en yüksek sıralamaya sahip kurumlarından biridir.",
      cost:
        "Yıllık eğitim ücretleri Batı Avrupa'ya kıyasla oldukça düşüktür (yaklaşık $2.500-7.000); yaşam maliyeti de erişilebilir seviyededir.",
      lifestyle:
        "Geniş coğrafyası ve zengin kültürel mirasıyla farklı bir akademik deneyim sunar; büyük şehirlerde uluslararası öğrenci toplulukları mevcuttur.",
      pitch:
        "Düşük maliyetle özellikle tıp ve mühendislikte kaliteli bir eğitim arayan öğrenciler için Rusya, doğru danışmanlıkla değerlendirilmesi gereken bir seçenektir.",
    },
  },
  {
    id: "cn",
    slug: "cn",
    name: "Çin",
    region: "asia",
    flag: "🇨🇳",
    flagCode: "cn",
    capital: "Pekin",
    stats: { bachelorPrograms: 79, masterPrograms: 71, languageSchools: 14, prepPrograms: 10 },
    summary: {
      quality:
        "Çin, son yirmi yılda üniversitelerini küresel sıralamalarda hızla yükselten, dünyanın en büyük yatırımı yapılan eğitim sistemlerinden birine sahiptir.",
      universities:
        "Tsinghua Üniversitesi ve Pekin Üniversitesi, mühendislik ve doğa bilimlerinde Asya'nın en yüksek sıralamalı kurumlarıdır.",
      cost:
        "Yıllık eğitim ücretleri yaklaşık $3.000-8.000 arasındadır; Çin Hükümeti Bursu (CSC) gibi kapsamlı burs programları mevcuttur.",
      lifestyle:
        "Hızla gelişen şehirleri, güvenliği ve büyüyen İngilizce program yelpazesiyle uluslararası öğrenciler için giderek daha erişilebilir hale gelmektedir.",
      pitch:
        "Zengin burs imkânları ve yükselen üniversite kalitesiyle Çin, düşük maliyetle dünya çapında tanınan bir diploma elde etmenin en stratejik yollarından biridir.",
    },
  },
  {
    id: "kr",
    slug: "kr",
    name: "Güney Kore",
    region: "asia",
    flag: "🇰🇷",
    flagCode: "kr",
    capital: "Seul",
    stats: { bachelorPrograms: 52, masterPrograms: 48, languageSchools: 13, prepPrograms: 7 },
    summary: {
      quality:
        "Güney Kore, teknoloji ve mühendislik alanlarında dünya çapında saygın, son derece disiplinli bir eğitim sistemine sahiptir.",
      universities:
        "Seul Ulusal Üniversitesi ve KAIST, özellikle mühendislik ve bilgisayar bilimlerinde Asya'nın en iyileri arasında yer alır.",
      cost:
        "Yıllık eğitim ücretleri yaklaşık $4.000-10.000 arasındadır; yaşam maliyeti Seul dışında oldukça makuldür.",
      lifestyle:
        "K-pop ve K-drama'nın küresel etkisiyle genç öğrenciler arasında popülerliği hızla artan, modern ve teknolojik bir yaşam sunar.",
      pitch:
        "Samsung, LG ve Hyundai gibi küresel devlerin ana vatanında eğitim almak, mühendislik ve teknoloji kariyeri hedefleyenler için güçlü bir referans oluşturur.",
    },
  },
  {
    id: "jp",
    slug: "jp",
    name: "Japonya",
    region: "asia",
    flag: "🇯🇵",
    flagCode: "jp",
    capital: "Tokyo",
    stats: { bachelorPrograms: 45, masterPrograms: 41, languageSchools: 17, prepPrograms: 8 },
    summary: {
      quality:
        "Japonya, akademik disiplini ve araştırma olanaklarıyla öne çıkan, köklü ve son derece saygın bir eğitim sistemine sahiptir.",
      universities:
        "Tokyo Üniversitesi ve Kyoto Üniversitesi, Asya'nın en eski ve en prestijli araştırma üniversiteleri arasında yer alır.",
      cost:
        "Yıllık eğitim ücretleri yaklaşık $4.000-9.000 arasındadır; MEXT bursu gibi devlet destekli programlar tam burs imkânı sunar.",
      lifestyle:
        "Son derece güvenli, düzenli ve teknolojik bir toplumda, benzersiz bir kültürel deneyim sunar.",
      pitch:
        "MEXT bursu gibi cömert devlet burslarından yararlanmak için başvuru takvimini doğru yönetmek kritik önem taşır; bu süreçte profesyonel rehberlik büyük fark yaratır.",
    },
  },
  {
    id: "sg",
    slug: "sg",
    name: "Singapur",
    region: "asia",
    flag: "🇸🇬",
    flagCode: "sg",
    capital: "Singapur",
    stats: { bachelorPrograms: 27, masterPrograms: 34, languageSchools: 9, prepPrograms: 4 },
    summary: {
      quality:
        "Singapur, Asya'nın en prestijli eğitim sistemine sahip, İngilizce eğitim veren ve küresel sıralamalarda ilk 20'de yer alan üniversiteleriyle tanınır.",
      universities:
        "National University of Singapore (NUS) ve Nanyang Technological University (NTU), Asya'nın en yüksek sıralamalı üniversiteleri arasındadır.",
      cost:
        "Yıllık eğitim ücretleri yaklaşık $18.000-30.000 arasında, premium bir yatırım seviyesindedir; yaşam maliyeti de yüksektir.",
      lifestyle:
        "Asya'nın önde gelen finans ve teknoloji merkezinde, son derece güvenli, temiz ve çok kültürlü bir yaşam sunar.",
      pitch:
        "Yüksek maliyetine rağmen sunduğu küresel network ve istihdam olanaklarıyla Singapur, uzun vadeli kariyer yatırımı yapmak isteyen aileler için mükemmel bir seçimdir.",
    },
  },
];
