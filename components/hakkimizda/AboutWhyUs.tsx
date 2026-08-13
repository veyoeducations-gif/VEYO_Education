import Icon from "@/components/ui/Icon";

export default function AboutWhyUs() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-unit-xl bg-surface">
      <div className="max-w-container-max mx-auto flex flex-col gap-unit-xl">
        <div className="text-center flex flex-col gap-unit-sm">
          <h2 className="text-headline-xl text-primary">Neden VEYO Education?</h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Yılların getirdiği tecrübe ve güçlü küresel ağımızla, eğitim
            hedeflerinizi gerçeğe dönüştürmek için yanınızdayız.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter auto-rows-[250px]">
          {/* Deneyimden Gelen Uzmanlık - geniş glass panel */}
          <div className="md:col-span-3 glass-panel rounded-xl p-unit-lg flex flex-col justify-center soft-shadow relative overflow-hidden group">
            <div className="z-10 max-w-2xl">
              <Icon name="school" className="!text-4xl text-secondary mb-4" />
              <h3 className="text-headline-lg text-primary mb-2">
                Deneyimden Gelen Uzmanlık
              </h3>
              <p className="text-body-lg text-on-surface-variant">
                VEYO Education, bizzat yurt dışında eğitim almış ve bu süreci
                her aşamasıyla deneyimlemiş profesyoneller tarafından
                kurulmuştur. Her öğrencimiz, hedeflediği ülkede bizzat eğitim
                görmüş, oradaki akademik ve sosyal hayata hakim danışmanlar
                tarafından birebir ilgiyle yönlendirilir.
              </p>
            </div>
            <Icon
              name="travel_explore"
              className="!text-[200px] absolute right-0 bottom-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
            />
          </div>

          {/* Birebir Danışmanlık */}
          <div className="bg-white rounded-xl p-unit-lg flex flex-col justify-center border border-outline-variant/30 soft-shadow">
            <Icon name="support_agent" className="!text-4xl text-secondary mb-4" />
            <h3 className="text-headline-md text-primary mb-2">
              Birebir Danışmanlık
            </h3>
            <p className="text-body-md text-on-surface-variant">
              Her öğrencinin profili ve hedefleri benzersizdir. Stratejilerimizi
              size özel tasarlıyoruz.
            </p>
          </div>

          {/* Geleceğe Yatırım */}
          <div className="md:col-span-2 glass-panel rounded-xl p-unit-lg flex items-center justify-between soft-shadow overflow-hidden relative">
            <div className="z-10 max-w-lg">
              <h3 className="text-headline-lg text-primary mb-2">Geleceğe Yatırım</h3>
              <p className="text-body-md text-on-surface-variant">
                Sadece bir okula yerleşmek değil, başarılı bir kariyerin
                temellerini atmak için kapsamlı rehberlik sağlıyoruz.
              </p>
            </div>
            <Icon
              name="trending_up"
              className="!text-[160px] absolute -right-6 -bottom-6 text-secondary/10 select-none pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
