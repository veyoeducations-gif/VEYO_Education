# VEYO Education — Next.js Projesi

Bu proje, Google Stitch ile üretilen çok sayfalı tasarımın modern, sürdürülebilir bir
kod tabanına dönüştürülmesi için oluşturuldu. Next.js (App Router) + TypeScript +
Tailwind CSS (npm build sistemi) kullanılıyor.

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini açın.

## Proje Yapısı

```
app/
  layout.tsx        → Kök layout: font yükleme, <head>, metadata
  page.tsx           → Ana sayfa (/) — bölümleri birleştirir
  globals.css        → Tailwind katmanları + glass-panel/soft-shadow gibi ortak sınıflar

components/
  layout/            → Sayfalar arası ortak bileşenler (Navbar, Footer, WhatsAppButton)
  home/               → Sadece ana sayfaya özel bölümler (Hero, ServicesBento, vb.)
  ui/                 → Küçük, tekrar kullanılabilir yardımcılar (Icon)

tailwind.config.ts   → DESIGN.md'deki tüm renk/tipografi/spacing token'larının
                        birebir karşılığı. Tasarım sistemini güncellemek için
                        tek kaynak burasıdır.

public/logo.svg       → Yer tutucu logo. Gerçek logo dosyanızla değiştirin.
```

## Yeni Sayfa Eklemek

Next.js App Router'da her klasör bir route'a karşılık gelir. Örneğin
"Hakkımızda" sayfası için:

```
app/
  hakkimizda/
    page.tsx
```

`page.tsx` içinde `Navbar`, `Footer` ve `WhatsAppButton` bileşenlerini
`components/layout` altından import edip yalnızca o sayfaya özel bölümleri
`components/[sayfa-adi]/` altında oluşturmanız yeterli. Ortak layout mantığını
tekrarlamamak için ileride bunu `app/layout.tsx` içine de taşıyabiliriz — şu an
her sayfada `Navbar`/`Footer` bilinçli olarak ayrı tutuldu, çünkü bazı
sayfalarda (ör. bir "giriş" sayfası) bunlar hiç görünmeyebilir.

## Tasarım Sistemi Notları

- Tüm renkler, tipografi ölçekleri ve spacing birimleri `DESIGN.md` dosyasından
  birebir `tailwind.config.ts` içine taşındı. Örn. `text-headline-2xl`,
  `bg-primary-container`, `px-margin-desktop` gibi sınıflar doğrudan
  kullanılabilir.
- Orijinal Stitch çıktısındaki `font-headline-*` gibi tekrarlayan font-family
  sınıflarına gerek kalmadı: `next/font/google` ile Plus Jakarta Sans tek
  seferde `<html>` seviyesinde yükleniyor ve `font-sans` olarak tanımlı.
- Material Symbols ikon seti hâlâ Google Fonts üzerinden `<link>` ile
  yükleniyor (next/font bu tip ikon fontlarını desteklemiyor). İkonlar artık
  tekil `<span class="material-symbols-outlined">` yerine `components/ui/Icon.tsx`
  üzerinden kullanılıyor.

## Sırada Ne Var

- **Kritik mobil uyumluluk düzeltmesi — çalışan bir hamburger menü:**
  `Navbar.tsx`'te menü linkleri (`Ana Sayfa`, `Hakkımızda`, `Hizmetlerimiz`
  alt menüsü, `Blog`, `İletişim` vb.) daha önce `hidden md:flex` ile
  **sadece masaüstünde görünüyordu** — mobil kullanıcıların logo ve "Hemen
  Başvur" butonu dışında siteyi gezecek hiçbir menüsü yoktu. Bu, bu turun en
  kritik düzeltmesiydi:
  - Mobilde (`md:` altında) artık gerçek bir hamburger ikonu var; tıklayınca
    navbar'ın altında akıcı bir `max-height` animasyonuyla açılan, tüm
    sayfa linklerini içeren bir panel beliriyor.
  - "Hizmetlerimiz" alt menüsü mobilde hover değil, **akordeon** mantığıyla
    çalışıyor: üzerine dokunulduğunda 6 alt seçenek (Lisans, Yüksek Lisans,
    Dil Okulları, Öğrenci Vize İşlemleri, IELTS Hazırlık, Burs Fırsatları)
    aşağı doğru açılıyor.
  - Menü açıkken arka plan sayfası kaymıyor (`document.body.style.overflow`
    kontrolü); bir linke tıklandığında veya sayfa değiştiğinde menü otomatik
    kapanıyor.
  - "Hemen Başvur" butonu artık en dar ekranlarda (`<sm`, ~640px altı) üst
    barda görünmüyor (kalabalık/taşma riskini önlemek için), bunun yerine
    mobil menü panelinin en altında tam genişlikte bir buton olarak yer
    alıyor; `sm:` ve üzerinde üst barda görünmeye devam ediyor.
- **`HoverDropdown.tsx` dokunmatik cihazlar için sağlamlaştırıldı:**
  Önceki sürümde tetikleyiciye tıklamak state'i "toggle" ediyordu; bazı
  mobil tarayıcılarda dokunuşun hem `mouseenter` hem `click` olayını art
  arda tetikleyebilmesi, menünün anında açılıp kapanmasına (yarış durumu)
  yol açabiliyordu. Artık tıklama her zaman "aç" olarak çalışıyor, kapatma
  ise **dışarı tıklama/dokunma** ile sağlanıyor (`mousedown`/`touchstart`
  dinleyicileri) — hem masaüstünde hem dokunmatik cihazlarda güvenilir.
  Panel genişliği de `max-w-[calc(100vw-2rem)]` ile sınırlandı; dar
  ekranlarda panel viewport dışına taşmıyor.
- **Genel yatay taşma güvenliği** (`globals.css`): `html`/`body`'ye
  `overflow-x: hidden` eklendi. Sitede birçok yerde kullanılan dekoratif,
  negatif konumlu (`-right-8`, `-bottom-8` gibi) ikon/görsel filigranları,
  dar ekranlarda birkaç piksellik yatay taşmaya yol açabiliyordu; bu artık
  görünmez şekilde kırpılıyor, yatay kaydırma çubuğu oluşmuyor.
- **Mobil yerleşim taraması:** Formlar (`grid-cols-1 md:grid-cols-2`), CTA
  buton grupları (`flex-col sm:flex-row`), zaman çizelgeleri
  (`flex-col md:flex-row`), blog kenar çubuğu (`md:sticky`) ve ülke/dil
  okulu panellerinin (`grid-cols-2 sm:grid-cols-3 md:grid-cols-4...`) tümü
  tek tek kontrol edildi; bunlar zaten önceki oturumlarda responsive
  kalıplarla inşa edilmişti, ek bir düzeltme gerektirmediler.
- **İki yeni sayfa + ana menü/Hizmetlerimiz yönlendirmeleri:**
  - **`/ielts`**: IELTS'in 4 modülü (Listening/Reading/Writing/Speaking),
    hedef banda göre yaklaşık hazırlık süresi (5.5-6.0 / 6.5-7.0 / 7.5+) ve
    VEYO'nun 4 adımlı hazırlık süreci (seviye tespiti → kişiye özel plan →
    speaking/writing pratiği → deneme sınavları) + CTA.
  - **`/burslar`**: 4 burs türü (başarı, ihtiyaç, devlet — Chevening/DAAD/
    Stipendium Hungaricum/MEXT/CSC örnekleriyle —, üniversiteye özel), genel
    başvuru şartları listesi ve VEYO'nun burs danışmanlığı CTA'sı.
  - Her ikisi de `Navbar`'daki "Hizmetlerimiz" dropdown'ına eklendi ("IELTS
    Hazırlık", "Burs Fırsatları") — talebinizde "ana menüden" ifadesi
    geçtiği için sadece Hizmetlerimiz sayfasındaki kartlarla sınırlı
    kalınmadı.
  - Hizmetlerimiz sayfasındaki (`ServicesGrid.tsx`) "Sınav Hazırlık
    (IELTS/TOEFL)" ve "Burs Başvuruları" kartları artık gerçekten bu
    sayfalara bağlı (önceden `href: null` idi).
  - `app/sitemap.ts`'e her iki sayfa da eklendi.
- **E-posta bağlantısı geliştirildi:** Footer ve İletişim sayfasındaki
  `mailto:veyoeducations@gmail.com` linklerine artık otomatik bir konu
  başlığı da ekleniyor (`?subject=Bilgi%20Talebi%20-%20VEYO%20Education`),
  böylece açılan taslak e-posta tamamen hazır geliyor. Not: `mailto:`
  linkleri tarayıcının/işletim sisteminin kayıtlı "varsayılan e-posta
  istemcisi" ayarını kullanır — bu istemci Gmail olarak ayarlanmışsa link
  doğrudan Gmail taslağı açar; farklıysa o istemci açılır. Kullanıcının her
  koşulda özellikle Gmail web arayüzünün açılmasını istiyorsanız (istemci
  ayarından bağımsız olarak), bunun yerine sabit bir
  `https://mail.google.com/mail/?view=cm&fs=1&to=...` linki kullanılması
  gerekir; isterseniz bunu da ekleyebilirim.
- **EmailJS entegrasyonu — formlar artık gerçekten e-posta gönderiyor:**
  Projedeki 4 form (ana sayfa "Eğitim Yolculuğunuza Başlayın", `/basvuru`,
  `/vize-danismanligi`, `/dil-okullari` sayfasındaki "Hemen Danışmanlık Alın"
  mini formu) artık sahte `setTimeout` yerine gerçekten
  [EmailJS](https://www.emailjs.com) üzerinden e-posta gönderiyor.
  - Kimlik bilgileri `lib/emailjs.ts` içinde merkezi olarak tanımlı:
    `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, `EMAILJS_PUBLIC_KEY`.
  - Gönderim, `emailjs.sendForm()` ile yapılıyor — yani formdaki her
    `name="..."` özniteliğine sahip alan, EmailJS şablonunuza olduğu gibi
    aktarılıyor (ayrıca hangi formdan geldiğini ayırt etmeniz için her forma
    gizli bir `form_type` alanı eklendi, örn. "Başvuru Formu (/basvuru)").
  - **Kontrol etmeniz gereken tek şey:** EmailJS panelindeki
    `template_2h1nscg` şablonunuzda kullandığınız değişken adlarının
    (`{{firstName}}`, `{{email}}`, `{{phone}}`, `{{message}}`,
    `{{form_type}}` vb.) buradaki form alanlarıyla eşleştiğinden emin olun.
    Şablonunuz farklı değişken isimleri kullanıyorsa, ya şablonu ya da
    ilgili formdaki `name` değerlerini güncellemeniz yeterli — kodun geri
    kalanına dokunmanıza gerek yok.
  - Public Key tarayıcı tarafında görünür olacak şekilde kullanılıyor; bu
    EmailJS'in resmi ve güvenli kullanım şeklidir (gizli bir sunucu anahtarı
    değildir), ek bir API route veya sunucu tarafı işlem gerekmiyor.
  - Her form, gönderim başarılı olduğunda kartın içeriğini şık bir
    onay ekranına (yeşil onay ikonu + "Başarılı Bir Şekilde Gönderildi" /
    "Başvurunuz Alındı" mesajı) dönüştürüyor; hata durumunda kullanıcıya
    tekrar denemesi veya WhatsApp'tan ulaşması söyleniyor.
- **Sabit hat kaldırıldı:** `+90 541 838 68 65` telefon alanı hem Footer'dan
  hem İletişim sayfasından tamamen kaldırıldı — sitede artık ayrı bir
  "telefon" temas noktası yok, sadece WhatsApp, e-posta ve sosyal medya var.
- **YouTube entegrasyonu:** Footer ve İletişim sayfasındaki YouTube ikonu
  artık `https://www.youtube.com/@Veyoeducations` kanalına gerçek bir linkle
  bağlı (önceden `#` placeholder'dı).
- **E-posta:** `veyoeducations@gmail.com` hem Footer'da hem İletişim
  sayfasında `mailto:` linkiyle aktif olmaya devam ediyor.
- **Logo → Ana Sayfa:** `Navbar.tsx`'teki VEYO logosu artık `next/link` ile
  `/`'e sarmalandı; sol üstteki logoya tıklamak her sayfadan doğrudan ana
  sayfaya dönüyor.
- **Lisans sayfası metni:** "Butik Akademik Danışmanlık" rozeti artık
  "Bireysel Danışmanlık" olarak güncellendi (`LisansHero.tsx`).
- **İletişim bilgileri sitede eksiksiz aktif hale getirildi:**
  - **Telefon:** `+90 541 838 68 65` artık `tel:+905418386865` linkiyle
    tıklanabilir (Footer'da yeni bir "İletişim Bilgileri" satırı olarak).
  - **WhatsApp:** Sitedeki **tüm** WhatsApp bağlantıları (yüzen buton,
    Footer "Randevu Oluştur", her sayfadaki "WhatsApp'tan Yazın/Danışın"
    CTA'ları, İletişim sayfasındaki sosyal ikon — toplam 8 dosya) artık
    `https://wa.me/393489094166` adresine yönleniyor. Not: bu, telefon
    numarasından **farklı** bir hat olduğu için (talebinizde iki ayrı numara
    verilmişti), site genelinde tek ve tutarlı bir WhatsApp hattı olması
    adına eski Türkiye numarası tüm kullanım noktalarında bu yeni numarayla
    değiştirildi. Farklı bir yapı istiyorsanız (örn. bazı sayfalarda eski
    numara kalsın) belirtmeniz yeterli.
  - **Instagram:** `@veyoeducations` hesabına (`instagram.com/veyoeducations`)
    hem Footer'da hem İletişim sayfasındaki sosyal ikonda gerçek link
    eklendi (önceden `#` placeholder'dı).
  - **E-posta:** `veyoeducations@gmail.com` artık hem Footer'da hem İletişim
    sayfasında `mailto:` linkiyle aktif; İletişim sayfasına ayrıca bir e-posta
    ikonu da eklendi.
  - Tüm yeni linkler harici olanlarda (`http`) `target="_blank"` +
    `rel="noopener noreferrer"` ile açılıyor; `tel:`/`mailto:` linkleri ise
    cihazın kendi arama/posta uygulamasını tetikleyecek şekilde bırakıldı.
- **Kullanıcının kendi gönderdiği 4 fotoğraf entegre edildi** (dosya boyutları
  8-9MB'tan JPG'ye çevrilip 175-260KB'a optimize edildi):
  - Kampüste kitaplarıyla yürüyen öğrenci → Lisans sayfası "Neden Yurt
    Dışında Lisans Eğitimi" (`lisans-why-abroad-v3.jpg`)
  - Diploma ve defne tacıyla mezuniyet fotoğrafı → Ana sayfa "Size Özel,
    Ayrıcalıklı Bir Kabul Deneyimi" (`consulting-advisor-meeting-v3.jpg`)
  - Kütüphanede ders çalışan öğrenci → Erken Başvuru sayfası hero'su
    (`erken-basvuru-library.jpg` — bu görsel daha önce hiç indirilmemiş,
    hâlâ bir Google önizleme linkine bağlıydı, bu arada gerçek bir dosyaya
    da kavuşturuldu)
  - Sınıf/seminer ortamı → Yüksek Lisans sayfası hero'su
    (`yuksek-lisans-classroom.jpg`)
- **İki fotoğraf tamamen kaldırıldı, görsel olmadan yeniden tasarlandı:**
  - Hakkımızda hero'su artık görselsiz, ortalanmış tek sütunlu bir başlık
    bloğu (`AboutHero.tsx`).
  - Hakkımızda "Geleceğe Yatırım" kutusundaki fotoğraf kaldırıldı; yerine
    bento grid'in geri kalanıyla tutarlı olması için dekoratif bir
    `trending_up` ikon filigranı eklendi (`AboutWhyUs.tsx`).
- Eski, artık kullanılmayan görsel dosyaları (`about-hero-v2.jpg`,
  `about-future-investment.jpg`, `consulting-advisor-meeting-v2.jpg`,
  `lisans-why-abroad-v2.jpg`, `gradlisans-hero-students.jpg`) projeden
  silindi.
- **Görsel revizeleri (Türk öğrenci fenotipi):** Aşağıdaki 5 görsel, Unsplash'ten
  yeni, yüksek çözünürlüklü fotoğraflarla değiştirildi; hepsinde Türk
  öğrencilerin genel görünümüne (koyu saç, esmer/buğday teni) yakın modeller
  tercih edildi:
  - Ana sayfa "Size Özel, Ayrıcalıklı Bir Kabul Deneyimi" → `consulting-advisor-meeting-v2.jpg`
  - Hakkımızda hero ("Eğitimde Mükemmelliğe Giden Yolculuğunuz") → `about-hero-v2.jpg`
  - Hakkımızda "Geleceğe Yatırım" kutusu → `about-future-investment.jpg`
    (bu görsel daha önce hiç indirilmemiş, hâlâ bir Google önizleme linkine
    bağlıydı — bu arada gerçek bir dosyaya da kavuşturuldu)
  - Lisans sayfası "Neden Yurt Dışında Lisans Eğitimi" → `lisans-why-abroad-v2.jpg`
  - Dil Okulları hero → `language-schools-hero-v2.jpg`
  - Eski, artık kullanılmayan görsel dosyaları (`consulting-advisor-meeting.jpg`,
    `about-hero-advisor-meeting.jpg`, `lisans-why-abroad-library.jpg`,
    `language-schools-hero-europe.jpg`) projeden silindi.
  - **Dürüst olmam gereken bir nokta:** Stok fotoğraf arama motorları
    "fenotip" gibi fiziksel özelliklere göre hassas/güvenilir bir filtreleme
    sunmuyor; seçimlerimi Türk fotoğrafçıların (`Zeki Okur` gibi) çektiği
    veya "turkish" etiketli havuzlardan, akademik/profesyonel bağlama uygun
    fotoğrafları elle inceleyerek yaptım. Bu, %100 kesin bir "fenotip eşleşmesi"
    garantisi vermez — sonuçtan memnun kalmazsanız, `public/images/` altındaki
    ilgili dosyayı değiştirmeniz yeterli, kod tarafında başka bir şey
    değişmesine gerek yok.
- **Lisans sayfasından "Global Destinasyonlar & Fakülteler" bölümü kaldırıldı:**
  `LisansDestinations.tsx` bileşeni ve `app/lisans/page.tsx`'teki kullanımı
  tamamen silindi. Sayfa artık Hero → Neden Yurt Dışında Lisans Eğitimi →
  VEYO Farkı (koyu bölüm) sırasıyla akıyor; sayfanın sonu VEYO Farkı
  bölümünün kendi `py-24 md:py-40` iç boşluğuyla doğal ve boşluksuz şekilde
  bitiyor.
- **Yeni Blog Modülü (`/blog`):** Paylaştığınız iki tasarımdan (liste + tekil
  yazı) yola çıkarak tam bir blog sistemi kuruldu.
  - **Listeleme sayfası** (`app/blog/page.tsx`): Hero + kategori/bülten
    kenar çubuğu (`BlogSidebar.tsx`) + öne çıkan yazı kartı
    (`FeaturedPostCard.tsx`) + grid kartları (`PostCard.tsx`). Kenar
    çubuğundaki bir kategoriye tıklamak (`/blog?kategori=<slug>`) sayfayı o
    kategoriye göre filtreler — ayrı bir client component gerekmeden, Next.js
    `searchParams` ile sunucu tarafında filtreleniyor.
  - **Tekil yazı sayfası** (`app/blog/[slug]/page.tsx`): `generateStaticParams`
    ile 15 yazının tamamı statik olarak üretiliyor. Hero (kategori rozeti,
    okuma süresi, yazar bilgisi, banner) + zengin makale içeriği
    (`ArticleContent.tsx` — başlık/paragraf/liste/alıntı blokları) + CTA
    kartı + "İlginç Yazılar" kenar çubuğu (aynı kategoriden, yoksa diğer
    kategorilerden).
  - **Görsel yaklaşımı:** 15 yazı için 15 ayrı stok fotoğraf aramak yerine,
    her kategoriye özel bir renk geçişi (gradient) + büyük ikon banner'ı
    (`CategoryBanner.tsx`) kullanıldı — sitenin marka renkleriyle (indigo,
    lacivert) birebir uyumlu, hızlı yüklenen ve tutarlı bir görsel dil
    sağlıyor. Gerçek fotoğraf tercih ederseniz, `CategoryBanner`'ı ilgili
    yazının `next/image` kullanan bir bileşenle değiştirmeniz yeterli.
  - **15 SEO odaklı yazı, 5 kategoride** (`components/blog/posts-data.ts`):
    - *Danışmanlık ve Karar Süreci* — danışmanlık almanın önemi, neden
      yurt dışı eğitim, yurt dışı eğitimin size katacakları
    - *Bütçe ve Maliyet* — eğitim masrafları, banka hesabı bakiyesi,
      ekstra masraflar
    - *Vize Rehberi* — dil okulu vize şartları, vize garantisi, vize reddi
      sonrası ücret iadesi, vize reddi sonrası süreç, yeşil pasaport süreci
    - *Başvuru Şartları* — mezun olmadan başvuru yapma
    - *Yaşam ve Kariyer* — çalışma hakkı, konaklama/okul seçimi, mezuniyet
      sonrası ülkede kalma
  - Bülten abonelik formu şu an sadece arayüz — bir e-posta pazarlama
    servisine (Mailchimp, Brevo vb.) bağlanması gerekiyor.
- **"Yurt Dışında Lisans & Yüksek Lisans" kartı — taşan popover yerine kart
  içi panel:** Önceki sürümde "Hemen Bilgi Alın" küçük, kartın dışına taşan
  bir popover açıyordu. Şimdi `components/home/ServicesBentoSection.tsx`'te
  bu tamamen kaldırıldı; Lisans/Yüksek Lisans seçenekleri artık **kartın
  kendi boş alanı içinde** beliriyor:
  - **Masaüstü (`md:` ve üzeri):** Panel `absolute` konumlandırılmış ve
    varsayılan olarak `opacity-0` — kart hover edildiğinde (`group-hover`)
    `opacity-100` + hafif bir yukarı kayma ile 500ms'lik akıcı bir geçişle
    beliriyor. Panel absolute olduğu için **kartın gerçek yüksekliğini asla
    değiştirmiyor** — bu sayede sağdaki Dil Okulları/Vize kartlarının ve alt
    taraftaki Erken Başvuru kartının hizası kesinlikle bozulmuyor.
  - **Mobil:** Aynı panel normal doküman akışında, her zaman görünür halde
    render ediliyor (mobilde tek sütunlu grid olduğu için yükseklik
    değişiminin başka bir bileşeni etkileme riski yok).
  - "Hemen Bilgi Alın" yanındaki ok ikonu artık hover'da 180° dönerek
    panelin açık/kapalı durumunu görsel olarak da işaret ediyor.
- **Animasyonlu hover popover'lar (`components/ui/HoverDropdown.tsx`):** Ana
  sayfadaki "Hemen Bilgi Alın" (Lisans/Yüksek Lisans) ve Hizmetlerimiz
  sayfasındaki "Detaylı İncele" ile Navbar'daki "Hizmetlerimiz" dropdown'ı
  artık ortak, gerçekten interaktif bir bileşen kullanıyor:
  - Saf CSS `group-hover` yerine küçük bir client component (`useState` +
    `onMouseEnter`/`onMouseLeave`) kullanıldı; kapanışta **150ms gecikme**
    uygulanıyor. Böylece kullanıcı fareyi tetikleyiciden panele doğru
    hareket ettirirken aradaki mikro an yüzünden menü aniden kapanmıyor —
    önceki saf CSS çözümünün kırılgan olduğu tam da bu noktaydı.
  - Açılış/kapanış artık `opacity` + `scale` + `translate-y` ile yumuşak bir
    geçiş animasyonuyla (`transition-all duration-200 ease-out`) destekleniyor.
  - Klavye kullanıcıları için `onFocus`/`onBlur` ile aynı gecikmeli
    açma/kapama mantığı uygulanıyor; dokunmatik cihazlar için tetikleyiciye
    tıklamak da menüyü açıp kapatıyor (hover'ı olmayan cihazlarda "tıkla-bekle"
    yerine tek dokunuşla erişim).
  - Navbar'daki "Hizmetlerimiz" tetikleyicisi hâlâ gerçek bir `next/link` —
    tıklamak `/hizmetlerimiz`'e gitmeye devam ediyor, hover ise dropdown'ı
    gösteriyor.
- **Gerçek bayrak görselleri (emoji yerine):** Ülke panellerinde ve detay
  sayfalarında kullanılan emoji bayraklar (🇬🇧, 🇩🇪 vb.), bazı işletim
  sistemlerinde (özellikle Windows) ülke kodu harfleri olarak (GB, DE gibi)
  render edildiği için tamamen kaldırıldı. Yerine, `flag-icons` (MIT lisanslı,
  açık kaynak) paketinin SVG dosyalarından alınan 37 gerçek bayrak görseli
  `public/flags/` altına gömüldü ve `components/ui/Flag.tsx` adında ortak bir
  bileşenle (`next/image`, `unoptimized` — SVG'ler optimize edilemediği için)
  her yerde tutarlı şekilde kullanılıyor:
  - `components/ulkeler/CountriesExplorer.tsx` (panel kartları) ve
    `CountryHero.tsx` (detay sayfası sol üst köşe) artık gerçek bayrak
    gösteriyor.
  - `components/dil-okullari/LanguageSchoolDestinationsPanel.tsx` ve
    `LanguageSchoolCountryContent.tsx` için de aynı bileşen kullanıldı.
  - `countries-data.ts` ve `language-school-destinations.ts` içindeki her
    ülkeye ISO 3166-1 alpha-2 koduna karşılık gelen bir `flagCode` alanı
    eklendi (örn. Birleşik Krallık için `"gb"`).
- **Dil Okulları içerik zenginleştirmesi:** `language-school-destinations.ts`
  artık her ülke için tek bir kısa cümle yerine 5 ayrı, satış odaklı alan
  içeriyor: `overview` (neden bu ülke), `programHighlights` (program
  çeşitliliği/akreditasyon), `costRange` (haftalık kurs ücreti aralığı),
  `lifestyle` (yaşam/kültür deneyimi) ve `pitch` (kapanış/aciliyet cümlesi).
  Detay sayfaları (`LanguageSchoolCountryContent.tsx`) artık `/ulkeler`
  sayfalarındaki gibi 4 kartlı bir bilgi düzeni + ayrı bir CTA bölümü
  kullanıyor — panel yapısı ve genel tasarım aynı kalırken içerik derinliği
  `/ulkeler` ile eşdeğer hale getirildi.
  - **Not:** Haftalık kurs ücreti aralıkları da (`/ulkeler`'deki program
    sayıları gibi) makul ama temsili rakamlardır; gerçek fiyatlandırmanızla
    güncellenmesi gerekir.
- **3D dünya haritası kaldırıldı, yerine kompakt panel geldi:** `react-globe.gl`
  ve `three` bağımlılıkları projeden tamamen çıkarıldı (`Globe3D.tsx` ve
  `public/textures/` silindi). `CountriesExplorer.tsx` artık Avrupa/Asya
  sekmesine göre filtrelenen, her hücresinde bayrak + ülke ismi alt alta yer
  alan şık ve kompakt bir grid paneli.
- **Her ülke için ayrı, detaylı sayfa:** `app/ulkeler/[slug]/page.tsx`
  dinamik route'u ile 35 ülkenin (30 Avrupa + 5 Asya) tamamı için otomatik
  olarak statik sayfa üretiliyor (`generateStaticParams`) — 35 ayrı dosya
  yazmak yerine tek şablon + `countries-data.ts` içindeki içerik kullanılıyor.
  Panelde bir ülkeye tıklamak artık doğrudan `/ulkeler/<ülke-kodu>` sayfasına
  yönlendiriyor (örn. İtalya → `/ulkeler/it`).
  - **İstatistik alanı** (`CountryStats.tsx`): İngilizce Lisans programı,
    İngilizce Yüksek Lisans programı, Dil Okulu ve Hazırlık Sınıfı sayıları.
  - **Satış odaklı özet** (`CountrySummary.tsx`): eğitim kalitesi, prestijli
    üniversiteler, maliyet aralığı, yaşam koşulları ve danışmanlık satışına
    yönlendiren bir kapanış CTA'sı (`/basvuru` + WhatsApp).
  - **Önemli not:** Program sayıları (`stats`) ve maliyet aralıkları
    ikna edici ama **temsili/placeholder** rakamlardır — her ülkenin gerçek
    program envanteri ve güncel ücretleriyle `countries-data.ts` üzerinden
    güncellenmesi gerekir. Nitel içerik (üniversite isimleri, eğitim
    sistemi özellikleri) ise doğru ve genel bilgiye dayanmaktadır.
  (`components/ulkeler/Globe3D.tsx`, client-only, `next/dynamic` ile
  `ssr:false`) artık sayfanın merkezinde; sağ tarafta ise Avrupa/Asya
  sekmesine göre filtrelenen, dikeyde kaydırılabilir bir ülke listesi
  (`CountriesExplorer.tsx`) yer alıyor.
  - Her ülkenin başkentine ait gerçek enlem/boylam koordinatı ve bayrak
    emojisi `countries-data.ts` içinde tanımlı (30 Avrupa + 5 Asya ülkesi).
  - Listeden bir ülkeye tıklandığında (örn. İtalya), globe `pointOfView()`
    ile 1.6 saniyelik yumuşak bir kamera animasyonuyla o ülkenin başkentine
    (Roma) odaklanıyor; haritadaki ilgili bayrak büyüyüp parlayarak ve nabız
    gibi atarak öne çıkıyor (`globals.css`'teki `.country-marker.is-selected`
    ve `marker-pulse` animasyonu).
  - Harita dokuları (`earth-blue-marble.jpg`, `earth-topology.png` bump map,
    `night-sky.png` arka plan) `three-globe` paketinin kendi örnek
    varlıklarından (`node_modules/three-globe/example/img/`) alınıp
    `public/textures/` altına kopyalandı — bu görseller kütüphanenin resmi
    demo varlıkları olduğu için lisans açısından güvenli ve stabil.
  - Her liste satırında ayrıca "Başvuru Yapın" (Avrupa → `/basvuru`) veya
    "Vize Danışmanlığını İncele" (Asya → `/vize-danismanligi`) linki var;
    satıra tıklamak haritada odaklanır, link'e tıklamak ilgili sayfaya
    götürür (`stopPropagation` ile ayrıştırıldı).
  - Not: `react-globe.gl` ve `three` paketleri projeye eklendi
    (`package.json`), `npm install` bunları otomatik kuracaktır.
- **Görsel güncellemeleri:** Ana sayfadaki "Size Özel, Ayrıcalıklı Bir Kabul
  Deneyimi" bölümündeki (`PersonalConsultingSection.tsx`) görsel, yeni ve daha
  net bir danışmanlık fotoğrafıyla (`consulting-advisor-meeting.jpg`)
  değiştirildi. Hizmetlerimiz sayfasına (`ServicesHero.tsx`) daha önce hiç
  fotoğrafı olmadığı için yeni bir profesyonel danışmanlık görseli
  (`services-hero-consulting.jpg`) eklendi — iki sütunlu bir hero düzeniyle.
  İkisi de `public/images/` altına indirilip gömüldü, artık dış bir servise
  bağımlı değiller.
- **Dropdown ok düzeltmesi:** Ana sayfadaki "Hemen Bilgi Alın" ve
  Hizmetlerimiz sayfasındaki "Detaylı İncele" dropdown tetikleyicilerinde ok
  ikonu (`arrow_forward`), üstündeki `font-bold`/`text-label-md` gibi
  sınıflardan kalınlık/boyut miras aldığı için bozuk görünüyordu. İkonu
  `chevron_right`'a çevirdim ve `font-normal leading-none` ile metinden
  bağımsız, sağa doğru temiz ve tutarlı görünecek şekilde sabitledim.
- **Hover dropdown genişletmesi:** `Navbar`'daki "Hizmetlerimiz" dropdown'ı
  artık 4 seçenek içeriyor: Lisans, Yüksek Lisans, Dil Okulları, Öğrenci Vize
  İşlemleri. Ayrıca hem ana sayfadaki "Hemen Bilgi Alın" (`ServicesBentoSection`)
  hem de Hizmetlerimiz sayfasındaki "Detaylı İncele" (`ServicesGrid`, ilk
  kart) artık aynı stil dropdown'ı açıyor (Lisans / Yüksek Lisans).
- **`app/ulkeler/`:** Yeni sayfa — Avrupa/Asya sekmeli bir yapı
  (`CountriesExplorer.tsx`, client component). Avrupa sekmesi geniş bir
  Avrupa ülkeleri listesini rozet olarak gösterir ve "Avrupa Üniversiteleri
  İçin Başvurun" butonuyla `/basvuru`'ya yönlendirir. Asya sekmesi yalnızca
  Rusya, Çin, Güney Kore, Japonya ve Singapur'u kart olarak gösterir, her
  kart `/vize-danismanligi`'ye bağlıdır (bu 5 ülke, `VisaConsultationForm`
  ve `ApplicationForm`'daki bölge seçenekleriyle birebir tutarlı).
- **Görsel kalitesi:** `lisans` ve `yuksek-lisans` sayfalarındaki tüm
  fotoğraflar, gerçek ve doğrulanmış yüksek çözünürlüklü Unsplash görselleriyle
  değiştirildi ve `public/images/` altına indirilip gömüldü (artık hiçbir
  `lh3.googleusercontent.com` linki kalmadı bu iki sayfada):
  `lisans-hero-graduation.jpg`, `lisans-why-abroad-library.jpg`,
  `lisans-destination-uk.jpg`, `lisans-destination-usa.jpg`,
  `gradlisans-hero-students.jpg`, `gradlisans-disciplines-abstract.jpg`,
  `gradlisans-placement-campus.jpg`.
- **İçerik temizliği:** "Yüksek Lisans" sayfasındaki "%98 Top 50
  Üniversitelere Yerleştirme Oranı" rozeti ve "Ivy League ve Russell Group"
  ifadesi geçen "Kabul Edildi" kutusu tamamen kaldırıldı. Aynı prensiple,
  "Lisans" sayfasındaki iki "Ivy League" ifadesi de daha genel, doğrulanabilir
  bir dille yeniden yazıldı — sitede abartılı/asılsız başarı iddiaları
  kalmasın diye.
- `app/lisans/` ve `app/yuksek-lisans/` sayfaları eklendi ve `Navbar`'daki
  "Hizmetlerimiz" artık hover ile açılan bir dropdown menüsü: "Lisans" →
  `/lisans`, "Yüksek Lisans" → `/yuksek-lisans`. "Hizmetlerimiz" yazısına
  tıklamak hâlâ `/hizmetlerimiz` sayfasına götürüyor — dropdown sadece ek bir
  kısayol. Dropdown salt CSS (`group`/`group-hover`) ile kuruldu, JS state
  gerekmedi; `group-focus-within` ile klavye kullanıcıları da menüyü
  açabiliyor.
  - `lisans`: hero (animasyonlu gradyan başlık) + "Neden Yurt Dışında Lisans
    Eğitimi" + "VEYO Farkı" (koyu bölüm) + destinasyon/fakülte kartları +
    numaralı "Başarı Yol Haritanız" (id="surec").
  - `yuksek-lisans`: hero + uzmanlık alanı bento grid + "Kritik Başvuru
    Adımları" (id="adimlar") + stratejik yerleştirme bölümü + kapanış CTA'sı.
  - Orijinal tasarımlardaki vanilla-JS scroll efektleri (navbar küçülme,
    IntersectionObserver ile sahne girişi animasyonları) birebir taşınmadı;
    yerine sayfa yüklendiğinde bir kez oynayan CSS `animate-reveal`/
    `animate-gradient-text` animasyonları eklendi (`globals.css`).
- `app/basvuru/`, `app/hizmetlerimiz/`, `app/vize-danismanligi/`,
  `app/hakkimizda/`, `app/iletisim/`, `app/erken-basvuru/` ve
  `app/dil-okullari/` sayfaları eklendi — hepsi paylaşılan
  `Navbar`/`Footer`/`WhatsAppButton` kullanıyor ve kendi
  `components/<sayfa>/` klasörlerinde organize edildi.
  - `hakkimizda`: Hero + "Neden VEYO Education?" bento grid + `/iletisim`'e
    yönlendiren bir kapanış CTA'sı (verilen tasarımdaki tekrarlayan sosyal
    medya bloğu yerine, tek kaynak olması için doğrudan İletişim sayfasına
    link verildi).
  - `iletisim`: glass-panel + animasyonlu arka plan blob'ları (`animate-blob`,
    `globals.css`'e eklendi), WhatsApp (gerçek numaraya bağlı), Instagram ve
    YouTube sosyal butonları (`.social-btn` hover efekti de `globals.css`'te).
  - `erken-basvuru`: hero + 4 avantaj kartı + numaralı "İdeal Başvuru
    Takvimi" zaman çizelgesi + danışman notu/CTA.
  - `dil-okullari`: hero + popüler destinasyon kartları (İngiltere, Amerika,
    Kanada, İrlanda) + program seçenekleri + konaklama/sosyal hayat
    bölümünde gömülü, çalışan bir mini danışmanlık formu (`use client`,
    aynı başarı-ekranı deseni).
  - `vize-danismanligi`'nde elimizde hazır bir Stitch tasarımı olmadığı
    dönemlerde içerik, projenin mevcut tasarım diliyle sıfırdan kurgulandı:
    numaralı süreç adımları, evrak kontrol listesi, client-side accordion
    SSS ve kendi başvuru formu (`ApplicationForm.tsx` ile aynı başarı-ekranı
    deseni, ülke/bölge seçenekleri: Avrupa, Rusya, Çin, Japonya, Güney Kore,
    Singapur).
- Bağlantılar tamamlandı:
  - `Navbar`'da "Hakkımızda" ve yeni eklenen "İletişim"; `Footer`'da
    "Kurumsal" ve yeni eklenen "İletişim" linki.
  - Ana sayfadaki "Erken Başvuru Avantajı" kartı → `/erken-basvuru`.
  - Hem ana sayfadaki hem Hizmetlerimiz'deki "Dil Okulları" kartı →
    `/dil-okullari`; "Öğrenci Vizesi Danışmanlığı" / "Vize Danışmanlığı"
    kartları → `/vize-danismanligi`.
  - Tüm "Hemen Başvur" butonları (`Navbar`, `Hero`) → `/basvuru`;
    "Hizmetlerimiz" menü linki ve "Hizmetlerimizi Keşfedin" butonu →
    `/hizmetlerimiz`. `Navbar` artık `usePathname` ile hangi sayfada
    olduğunuzu algılayıp aktif menü öğesini buna göre vurguluyor.
- WhatsApp entegrasyonu: yüzen WhatsApp butonu, footer'daki "Randevu Oluştur",
  `/hizmetlerimiz` sayfasındaki "Hemen İletişime Geçin", `/vize-danismanligi`
  sayfasındaki "WhatsApp'tan Yazın", `/iletisim` sayfasındaki WhatsApp butonu
  ve `/yuksek-lisans` sayfasındaki "Ücretsiz Ön Görüşme" artık
  `https://wa.me/905418386865` adresine yönleniyor. Numarayı değiştirmek
  isterseniz bu bileşenlerdeki `wa.me` linklerini güncelleyin.
- Formlar şu an sadece arayüz — gönderim mantığını gerçek API route'larına
  veya harici bir CRM/e-posta servisine bağlamamız gerekiyor.
- Gerçek logo dosyası `public/logo.svg` yerine konulmalı (ideal olarak SVG).
  Yeni eklenen `hakkimizda`, `erken-basvuru`, `dil-okullari`, `lisans` ve
  `yuksek-lisans` sayfalarındaki fotoğraflar, verdiğiniz Stitch
  tasarımlarındaki `lh3.googleusercontent.com` linklerini doğrudan
  kullanıyor — bunlar Google'ın önizleme CDN'i olduğundan kalıcı olmaları
  garanti değildir; production'a geçmeden önce indirip `public/images/`
  altına almanızı öneririm (daha önce ana sayfa görselleri için yaptığımız
  gibi).
