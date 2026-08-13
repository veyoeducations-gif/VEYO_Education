import Link from "next/link";
import Icon from "@/components/ui/Icon";

export default function EarlyApplicationExpertNote() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="bg-primary-container rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="md:w-2/3 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Icon name="lightbulb" className="text-secondary-fixed" />
            <h3 className="text-headline-md text-on-primary-fixed">Danışman Notu</h3>
          </div>
          <p className="text-body-lg text-inverse-on-surface mb-6 italic">
            &quot;Bizzat yurt dışında eğitim görmüş danışmanlarımızdan stratejik
            takvim planlaması alın. Hangi ülkenin ve üniversitenin hangi
            tarihlerde avantajlı olduğunu bilmek, başarı şansınızı kritik
            ölçüde artırır.&quot;
          </p>
        </div>

        <div className="md:w-1/3 relative z-10 flex justify-end w-full">
          <Link
            href="/basvuru"
            className="w-full md:w-auto bg-secondary text-on-secondary text-label-md px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            Hemen Başvurun
            <Icon name="arrow_forward" />
          </Link>
        </div>
      </div>
    </section>
  );
}
