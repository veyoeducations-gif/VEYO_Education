import Icon from "@/components/ui/Icon";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/393489094166"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp üzerinden iletişime geçin"
      className="fixed bottom-6 right-6 w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
    >
      <Icon name="chat" className="!text-3xl" />
    </a>
  );
}
