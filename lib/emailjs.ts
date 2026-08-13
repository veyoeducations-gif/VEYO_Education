import emailjs from "@emailjs/browser";

// EmailJS kimlik bilgileri. Public Key, EmailJS'in resmi kullanım şekli
// gereği tarayıcıda görünür olacak şekilde tasarlanmıştır; e-posta
// gönderimini tetiklemek için kullanılır, gizli bir sunucu anahtarı
// değildir (bkz. https://www.emailjs.com/docs/sdk/installation/).
export const EMAILJS_SERVICE_ID = "service_rgy2kd2";
export const EMAILJS_TEMPLATE_ID = "template_2h1nscg";
export const EMAILJS_PUBLIC_KEY = "88og-uhvsbpXNj4Sq";

/**
 * Bir <form> elemanının mevcut alanlarını (name="..." özniteliğine sahip
 * tüm input/select/textarea'ları) doğrudan EmailJS üzerinden gönderir.
 *
 * ÖNEMLİ: Formdaki `name` öznitelikleri (örn. `firstName`, `email`,
 * `phone`, `message`), EmailJS panelindeki e-posta şablonunuzda kullanılan
 * değişken adlarıyla ({{firstName}}, {{email}} gibi) eşleşmelidir.
 * Şablonunuzda farklı değişken isimleri kullanıyorsanız, ya şablonu bu
 * projedeki alan adlarına göre güncelleyin ya da formlardaki `name`
 * değerlerini şablonunuza göre uyarlayın.
 */
export async function sendFormEmail(form: HTMLFormElement) {
  return emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, {
    publicKey: EMAILJS_PUBLIC_KEY,
  });
}
