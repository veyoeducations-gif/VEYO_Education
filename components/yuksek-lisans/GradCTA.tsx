import Link from "next/link";

export default function GradCTA() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-primary-container text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/30 rounded-full mix-blend-screen filter blur-[100px] transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-fixed/20 rounded-full mix-blend-screen filter blur-[100px] transform -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-headline-2xl-mobile md:text-headline-2xl mb-6">
          Akademik Geleceğinizi Şansa Bırakmayın
        </h2>
        <p className="text-body-lg text-on-primary-container mb-10">
          Master ve Doktora başvurularınızda profesyonel rehberlik almak ve
          süreci hemen başlatmak için bizimle iletişime geçin.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/basvuru"
            className="bg-secondary text-white px-8 py-4 rounded-xl text-label-md hover:bg-white hover:text-secondary hover:shadow-lg transition-all active:scale-95 text-center shadow-md"
          >
            Hemen Başvur
          </Link>
          <a
            href="https://wa.me/393489094166"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/30 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-label-md hover:bg-white/20 transition-all text-center"
          >
            Ücretsiz Ön Görüşme
          </a>
        </div>
      </div>
    </section>
  );
}
