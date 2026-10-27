"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, LoaderCircle, Phone } from "lucide-react";

export default function VoraServiceForm() {
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    setPending(true);
    setStatus(null);
    try {
      const response = await fetch("/api/service-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: fields.get("fullName"),
          phone: fields.get("phone"),
          deviceType: fields.get("deviceType"),
          consent: fields.get("consent") === "on",
          website: fields.get("website"),
        }),
        signal: AbortSignal.timeout(15000),
      });
      const result = await response.json();
      setStatus({
        success: response.ok,
        message:
          result.message ||
          "Talep gönderilemedi. Lütfen telefonla bize ulaşın.",
      });
      if (response.ok) form.reset();
    } catch {
      setStatus({
        success: false,
        message:
          "Bağlantı kurulamadı. Lütfen bizi arayın veya WhatsApp üzerinden yazın.",
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      className="vora-request-form"
      action="/api/service-request"
      method="post"
      onSubmit={handleSubmit}
      aria-busy={pending}
    >
      <div className="form-heading">
        <span className="eyebrow">SİZİ DİNLEYELİM</span>
        <span aria-hidden="true">↗</span>
      </div>
      <h3>Nasıl yardımcı olabiliriz?</h3>
      <p>Bilgilerinizi bırakın, servis planlaması için sizi arayalım.</p>
      <fieldset disabled={pending}>
        <legend className="sr-only">İletişim ve servis bilgileri</legend>
        <div className="form-field">
          <label htmlFor="fullName">Adınız soyadınız</label>
          <input
            id="fullName"
            name="fullName"
            autoComplete="name"
            placeholder="Adınız ve soyadınız"
            minLength={2}
            maxLength={100}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Telefon numaranız</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="05XX XXX XX XX"
            pattern={String.raw`[+\(\)0-9 .\-]{10,20}`}
            maxLength={20}
            required
            aria-describedby="phone-hint"
          />
          <span id="phone-hint" className="sr-only">
            Türkiye alan koduyla veya başında sıfır olacak şekilde
            yazabilirsiniz.
          </span>
        </div>
        <div className="form-field">
          <label htmlFor="deviceType">Hangi hizmete ihtiyacınız var?</label>
          <select id="deviceType" name="deviceType" defaultValue="" required>
            <option value="" disabled>
              Hizmet seçin
            </option>
            <option value="Kombi">Kombi servisi ve bakım</option>
            <option value="Klima">Klima servisi ve montaj</option>
            <option value="Petek">Petek temizliği</option>
            <option value="Diğer">Birlikte değerlendirelim</option>
          </select>
        </div>
        <div className="form-honeypot" aria-hidden="true">
          <label htmlFor="website">Web siteniz</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <label className="form-consent">
          <input type="checkbox" name="consent" required />
          <span>
            Servis talebim için benimle iletişime geçilmesini kabul ediyorum.
          </span>
        </label>
        <button
          type="submit"
          className="vora-button vora-button-dark form-submit"
          disabled={pending}
        >
          {pending ? (
            <>
              <span>Gönderiliyor</span>
              <LoaderCircle size={19} className="animate-spin" />
            </>
          ) : (
            <>
              <span>Servis talebi oluştur</span>
              <ArrowUpRight size={20} />
            </>
          )}
        </button>
      </fieldset>
      <noscript>
        <style>{".vora-request-form fieldset { display: none; }"}</style>
        <div className="form-status">
          <p>
            Servis talebinizi telefon veya WhatsApp üzerinden iletebilirsiniz.
          </p>
          <a href="tel:+905365281116">0536 528 11 16 — Hemen arayın</a>
          <a href="https://wa.me/905365281116">WhatsApp’tan yazın</a>
        </div>
      </noscript>
      {status && (
        <div
          className={`form-status ${status.success ? "is-success" : "is-error"}`}
          role="status"
          aria-live="polite"
        >
          {status.success && <CheckCircle2 size={20} aria-hidden="true" />}
          <span>{status.message}</span>
          {!status.success && (
            <a href="tel:+905365281116">
              <Phone size={15} /> Hemen arayın
            </a>
          )}
        </div>
      )}
      <p className="form-note">
        Bilgileriniz yalnızca servis talebinizle ilgili iletişim için alınır.
      </p>
    </form>
  );
}
