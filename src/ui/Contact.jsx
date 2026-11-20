import { useLanguage } from "../language";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiMail } from "react-icons/fi";
import { Download } from "./shared";
import { email } from "../profile";
export default function Contact() {
  const { t } = useLanguage();
  /** @type {import("react").MutableRefObject<HTMLFormElement | null>} */
  const form = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  /** @param {import("react").FormEvent<HTMLFormElement>} event */
  async function submit(event) {
    event.preventDefault();
    if (sending || !form.current) return;
    setSending(true);
    setStatus("");
    try {
      await emailjs.sendForm(
        "service_40ows8i",
        "template_k7ww5ce",
        form.current,
        "rDJNcz2q0f8nQhmOf",
      );
      setStatus("Thanks! Your message has been sent.");
      form.current.reset();
    } catch {
      setStatus(
        "Your message could not be sent. Please try again or use the email link.",
      );
    } finally {
      setSending(false);
    }
  }
  return (
    <section id="Contact" className="contact-section">
      <div className="contact-banner">
        <div>
          <p className="eyebrow">{t("Let\u2019s work together")}</p>
          <h2>
            {t("Good software starts with")}
            <br />
            {t("a great conversation.")}
          </h2>
          <p>
            {t(
              "Have a project or opportunity in mind? Let\u2019s talk about how I can contribute.",
            )}
          </p>
        </div>
        <div className="button-row">
          <a href={`mailto:${email}`} className="button primary">
            <FiMail />
            {t("Contact me")}
          </a>
          <Download />
        </div>
      </div>
      <details className="contact-details">
        <summary>{t("Prefer to leave a message?")}</summary>
        <div className="contact-grid">
          <div>
            <h3>{t("Tell me what you\u2019re building.")}</h3>
            <p>
              {t(
                "Based in Thailand. Interested in thoughtful engineering and real business problems.",
              )}
            </p>
            <a href={`mailto:${email}`}>{email}</a>
            <a href="tel:+66946765524">094-676-5524</a>
          </div>
          <form ref={form} onSubmit={submit}>
            <div className="form-row">
              <label>
                {t("Your name")}
                <input
                  name="to_name"
                  autoComplete="name"
                  required
                  maxLength={120}
                />
              </label>
              <label>
                {t("Email address")}
                <input
                  name="from_name"
                  autoComplete="email"
                  type="email"
                  required
                  maxLength={254}
                />
              </label>
            </div>
            <label>
              {t("Message")}
              <textarea name="message" rows={5} required maxLength={5000} />
            </label>
            <button className="button primary" disabled={sending}>
              {t(sending ? "Sending…" : "Send message")}
            </button>
            <p role="status" aria-live="polite">
              {t(status)}
            </p>
          </form>
        </div>
      </details>
    </section>
  );
}
