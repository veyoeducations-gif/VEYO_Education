export default function AboutHero() {
  return (
    <section className="relative px-margin-mobile md:px-margin-desktop py-unit-xl overflow-hidden">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-unit-lg">
        <span className="text-secondary text-label-md uppercase tracking-wider bg-secondary/10 w-fit px-3 py-1 rounded-full">
          Biz Kimiz?
        </span>
        <h1 className="text-headline-2xl-mobile md:text-headline-2xl text-primary">
          Eğitimde Mükemmelliğe Giden Yolculuğunuz
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-xl">
          VEYO Education olarak, öğrencilerin potansiyellerini en üst düzeye
          çıkarmaları için global ölçekte prestijli eğitim danışmanlığı
          sunuyoruz. Güven, şeffaflık ve uzmanlık temel değerlerimizdir.
        </p>
      </div>
    </section>
  );
}
