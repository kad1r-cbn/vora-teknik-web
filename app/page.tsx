'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ShieldCheck,
  Clock,
  CheckCircle,
  MapPin,
  Phone,
  Wrench,
  Flame,
  Wind,
  Droplets,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
} from 'lucide-react';
import { supabase } from '../utils/supabase';
import { istanbulIlceleri } from './data/istanbul-ilceleri';

export default function Home() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [deviceType, setDeviceType] = useState('Kombi');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: '',
    message: '',
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleServiceRequest = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !phone) {
      setSubmitStatus({
        type: 'error',
        message: 'Lütfen adınızı ve telefonunuzu eksiksiz girin.',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({
      type: '',
      message: '',
    });

    try {
      const { error } = await supabase
        .from('web_requests')
        .insert([
          {
            full_name: fullName,
            phone_number: phone,
            device_type: deviceType,
          },
        ]);

      if (error) throw error;

      setSubmitStatus({
        type: 'success',
        message:
          'Talebiniz alındı! Servis ekibimiz en kısa sürede sizinle iletişime geçecektir.',
      });

      setFullName('');
      setPhone('');

      setTimeout(() => {
        setSubmitStatus({
          type: '',
          message: '',
        });
      }, 5000);
    } catch (error: any) {
      console.error('Form Gönderim Hatası:', error);

      setSubmitStatus({
        type: 'error',
        message:
          'Sistem yoğunluğu nedeniyle talep gönderilemedi. Lütfen WhatsApp üzerinden ulaşın.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 relative selection:bg-cyan-500 selection:text-white pb-28 lg:pb-0 overflow-x-hidden">

      {/* HEADER + NAVBAR */}
      <header className="w-full bg-slate-900 border-b border-slate-800 sticky top-0 z-100">

        <div className="w-full px-6 lg:px-20 2xl:px-32 py-4">

          <div className="flex items-center justify-between">

            {/* LOGO */}
            <Link
              href="/"
              className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white"
            >
              Vora<span className="text-cyan-500">Teknik</span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-2">

              <Link
                href="/"
                className="px-4 py-2.5 rounded-lg text-white bg-slate-800 hover:bg-slate-700 font-semibold transition-colors"
              >
                Ana Sayfa
              </Link>

              <Link
                href="/kombi-servisi"
                className="px-4 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 font-semibold transition-colors"
              >
                Kombi Servisi
              </Link>

              <Link
                href="/klima-servisi"
                className="px-4 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 font-semibold transition-colors"
              >
                Klima Servisi
              </Link>

              <Link
                href="/petek-temizligi"
                className="px-4 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 font-semibold transition-colors"
              >
                Petek Temizliği
              </Link>

              <a
                href="#servis-talebi"
                className="px-4 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 font-semibold transition-colors"
              >
                İletişim
              </a>

            </nav>

            {/* DESKTOP PHONE */}
            <div className="hidden lg:flex items-center gap-4">

              <a
                href="tel:+905365281116"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors font-bold"
              >
                <Phone size={18} className="text-cyan-500" />
                0536 528 11 16
              </a>

              <a
                href="tel:+905365281116"
                className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2.5 rounded-lg font-black transition-colors"
              >
                <Phone size={17} />
                Hemen Ara
              </a>

            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              aria-label="Menüyü aç"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </button>

          </div>

          {/* MOBILE NAV */}
          {mobileMenuOpen && (
            <div className="lg:hidden pt-4 pb-2 border-t border-slate-800 mt-4">

              <nav className="flex flex-col gap-2">

                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl bg-slate-800 text-white font-bold"
                >
                  Ana Sayfa
                </Link>

                <Link
                  href="/kombi-servisi"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white font-bold transition-colors"
                >
                  🔥 Kombi Servisi
                </Link>

                <Link
                  href="/klima-servisi"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white font-bold transition-colors"
                >
                  ❄️ Klima Servisi
                </Link>

                <Link
                  href="/petek-temizligi"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white font-bold transition-colors"
                >
                  💧 Petek Temizliği
                </Link>

                <a
                  href="#servis-talebi"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white font-bold transition-colors"
                >
                  📞 İletişim
                </a>

                <a
                  href="tel:+905365281116"
                  className="flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-3 rounded-xl font-black mt-2"
                >
                  <Phone size={18} />
                  0536 528 11 16
                </a>

              </nav>

            </div>
          )}

        </div>
      </header>

      {/* HERO */}
      <section className="w-full px-6 lg:px-20 2xl:px-32 py-12 lg:py-0 lg:min-h-[calc(100vh-80px)] grid lg:grid-cols-2 gap-12 lg:gap-24 2xl:gap-32 items-center relative z-10">

        <div className="space-y-8">

          <div className="inline-flex items-center gap-2 bg-cyan-950 border border-cyan-800 text-cyan-400 px-5 py-2 rounded-full text-sm font-bold tracking-wide">
            <ShieldCheck size={17} />
            İstanbul Teknik Servis
          </div>

          <h1 className="text-4xl lg:text-5xl 2xl:text-7xl font-black text-white leading-tight">
            İstanbul Kombi ve Klima Servisi
            <br />
            <span className="text-cyan-500">
              Hızlı ve Profesyonel Çözüm
            </span>
          </h1>

          <p className="text-lg lg:text-xl 2xl:text-2xl text-slate-300 font-medium leading-relaxed">
            Vora Teknik Servis, Bahçelievler merkezli olarak İstanbul
            genelinde kombi, klima ve petek servis hizmetleri için servis
            planlaması yapar.
          </p>

          <div className="space-y-4 pt-4 max-w-2xl">

            <div className="flex items-start gap-5 p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50">
              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                <Clock size={28} />
              </div>

              <div>
                <h3 className="font-bold text-white text-lg">
                  Planlı Servis
                </h3>

                <p className="text-sm text-slate-400 mt-1">
                  Servis talepleriniz adres ve randevu durumuna göre
                  planlanır.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50">

              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                <CheckCircle size={28} />
              </div>

              <div>
                <h3 className="font-bold text-white text-lg">
                  Temiz İşçilik
                </h3>

                <p className="text-sm text-slate-400 mt-1">
                  Servis sırasında çalışma alanının düzenli tutulmasına
                  önem verilir.
                </p>
              </div>

            </div>

            <div className="flex items-start gap-5 p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50">

              <div className="p-3 bg-orange-500/10 rounded-xl text-orange-500">
                <ShieldCheck size={28} />
              </div>

              <div>
                <h3 className="font-bold text-white text-lg">
                  Garanti Seçenekleri
                </h3>

                <p className="text-sm text-slate-400 mt-1">
                  Yapılan işleme ve kullanılan parçaya göre garanti
                  koşulları servis öncesinde açıklanır.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* SERVICE FORM */}
        <div
          id="servis-talebi"
          className="bg-white p-8 lg:p-10 2xl:p-12 rounded-3xl shadow-2xl border-4 border-slate-800 relative z-20 w-full max-w-xl 2xl:max-w-2xl mx-auto lg:ml-auto"
        >

          <div className="absolute -top-6 right-4 bg-orange-500 text-white p-4 rounded-2xl shadow-xl rotate-12">
            <Wrench size={28} />
          </div>

          <h2 className="text-3xl 2xl:text-4xl font-black text-slate-900 mb-2">
            Hemen Servis Çağır
          </h2>

          <p className="text-slate-500 font-medium mb-8">
            Formu doldurun, servis ekibimiz sizinle iletişime geçsin.
          </p>

          <form
            onSubmit={handleServiceRequest}
            className="space-y-6"
          >

            <div>

              <label
                htmlFor="fullName"
                className="block text-sm font-bold text-slate-700 mb-2"
              >
                Adınız Soyadınız
              </label>

              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-cyan-500 outline-none transition-all bg-slate-50 font-medium text-slate-900"
                placeholder="Örn: Ahmet Yılmaz"
                disabled={isSubmitting}
              />

            </div>

            <div>

              <label
                htmlFor="phone"
                className="block text-sm font-bold text-slate-700 mb-2"
              >
                Telefon Numaranız
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-cyan-500 outline-none transition-all bg-slate-50 font-medium text-slate-900"
                placeholder="05XX XXX XX XX"
                disabled={isSubmitting}
              />

            </div>

            <div>

              <label
                htmlFor="deviceType"
                className="block text-sm font-bold text-slate-700 mb-2"
              >
                Hizmet Türü
              </label>

              <select
                id="deviceType"
                name="deviceType"
                value={deviceType}
                onChange={(e) => setDeviceType(e.target.value)}
                className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-cyan-500 outline-none transition-all bg-slate-50 appearance-none font-bold text-slate-900 cursor-pointer"
                disabled={isSubmitting}
              >
                <option value="Kombi">
                  Kombi Arızası / Bakımı
                </option>

                <option value="Klima">
                  Klima Arızası / Montajı
                </option>

                <option value="Petek">
                  Petek Temizliği
                </option>

                <option value="Diğer">
                  Diğer / Emin Değilim
                </option>
              </select>

            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-5 rounded-xl font-black text-white text-lg tracking-wide transition-all ${
                isSubmitting
                  ? 'bg-slate-400 cursor-not-allowed'
                  : 'bg-linear-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 shadow-lg'
              }`}
            >
              {isSubmitting
                ? 'Gönderiliyor...'
                : 'SERVİS TALEBİ OLUŞTUR'}
            </button>

            {submitStatus.message && (
              <div
                className={`p-4 rounded-xl text-sm font-bold border ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 text-green-700 border-green-200'
                    : 'bg-red-50 text-red-700 border-red-200'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <p className="text-[11px] text-center text-slate-400">
              Kişisel verileriniz KVKK kapsamında korunmaktadır.
            </p>

          </form>

        </div>

      </section>

      {/* BRANDS */}
      <section className="w-full bg-slate-950 py-8 border-y border-slate-800">

        <div className="w-full px-6 lg:px-20 2xl:px-32">

          <p className="text-center text-slate-500 text-sm font-bold uppercase tracking-widest mb-6">
            Servis Verilen Markalar
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 opacity-70">

            {[
              'BOSCH',
              'Vaillant',
              'DemirDöküm',
              'DAIKIN',
              'BAYMAK',
              'E.C.A',
              'Buderus',
            ].map((brand) => (
              <span
                key={brand}
                className="text-2xl font-black text-white"
              >
                {brand}
              </span>
            ))}

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section
        id="hizmetler"
        className="w-full bg-white py-24 relative z-10"
      >

        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-[1800px] mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">
              Kombi, Klima ve Petek Hizmetleri
            </h2>

            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              İhtiyacınız olan teknik servis hizmetini seçerek ilgili
              hizmet sayfamıza ulaşabilirsiniz.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* KOMBI */}
            <Link
              href="/kombi-servisi"
              className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-cyan-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <Flame size={32} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Kombi Servisi
              </h3>

              <p className="text-slate-600 mb-6 leading-relaxed">
                Kombi arıza tespiti, bakım, ısıtma problemleri ve
                servis işlemleri.
              </p>

              <ul className="space-y-2 text-sm font-bold text-slate-700 mb-7">

                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-cyan-500" />
                  Arıza Tespiti
                </li>

                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-cyan-500" />
                  Kombi Bakımı
                </li>

                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-cyan-500" />
                  Isıtma Problemleri
                </li>

              </ul>

              <span className="inline-flex items-center gap-2 text-cyan-600 font-black">
                Kombi Servisini İncele
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>

            </Link>

            {/* KLİMA */}
            <Link
              href="/klima-servisi"
              className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-cyan-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center text-cyan-600 mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                <Wind size={32} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Klima Servisi
              </h3>

              <p className="text-slate-600 mb-6 leading-relaxed">
                Klima bakım, arıza tespiti, soğutmama problemleri ve
                montaj hizmetleri.
              </p>

              <ul className="space-y-2 text-sm font-bold text-slate-700 mb-7">

                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-cyan-500" />
                  Klima Bakımı
                </li>

                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-cyan-500" />
                  Arıza Tespiti
                </li>

                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-cyan-500" />
                  Klima Montajı
                </li>

              </ul>

              <span className="inline-flex items-center gap-2 text-cyan-600 font-black">
                Klima Servisini İncele
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>

            </Link>

            {/* PETEK */}
            <Link
              href="/petek-temizligi"
              className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-cyan-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Droplets size={32} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Petek Temizliği
              </h3>

              <p className="text-slate-600 mb-6 leading-relaxed">
                Petek ve ısıtma tesisatı kontrolü, temizlik ve ısınma
                problemlerinin değerlendirilmesi.
              </p>

              <ul className="space-y-2 text-sm font-bold text-slate-700 mb-7">

                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-cyan-500" />
                  Petek Temizliği
                </li>

                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-cyan-500" />
                  Tesisat Kontrolü
                </li>

                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-cyan-500" />
                  Isınma Problemleri
                </li>

              </ul>

              <span className="inline-flex items-center gap-2 text-cyan-600 font-black">
                Petek Hizmetini İncele
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>

            </Link>

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="w-full bg-slate-50 py-20 border-t border-slate-200">

        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-300 mx-auto">

          <div className="text-center mb-12">

            <h2 className="text-3xl font-black text-slate-900 mb-4">
              Sıkça Sorulan Sorular
            </h2>

            <p className="text-slate-500">
              Kombi, klima ve petek servisleriyle ilgili sık sorulan
              sorular.
            </p>

          </div>

          <div className="space-y-4">

            {[
              {
                q: 'Kombi bakımı ne zaman yapılmalıdır?',
                a: 'Kombi bakımının cihazın çalışma durumuna göre düzenli olarak yapılması önerilir. Özellikle yoğun kullanım dönemi öncesinde cihazın kontrol edilmesi faydalı olabilir.',
              },
              {
                q: 'Klima neden yeterince soğutmuyor?',
                a: 'Filtrelerin kirli olması, hava akışının engellenmesi veya teknik bir problem gibi farklı nedenler olabilir. Kesin neden için cihazın kontrol edilmesi gerekir.',
              },
              {
                q: 'Petekler neden yeterince ısınmıyor?',
                a: 'Peteklerin yeterince ısınmaması hava, tesisat akışı, kirlenme veya farklı teknik nedenlerle ilişkili olabilir. Sistem kontrol edilerek uygun işlem belirlenmelidir.',
              },
            ].map((faq, idx) => {

              const isOpen = openFaq === idx;

              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
                >

                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenFaq(isOpen ? null : idx)
                    }
                    className="w-full p-5 flex justify-between items-center gap-5 text-left font-bold text-slate-800 hover:bg-slate-50 transition-colors"
                  >

                    <span>{faq.q}</span>

                    <ChevronDown
                      className={`shrink-0 transition-transform ${
                        isOpen
                          ? 'rotate-180 text-cyan-500'
                          : 'text-slate-400'
                      }`}
                    />

                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  )}

                </div>
              );

            })}

          </div>

        </div>

      </section>

      {/* SERVICE AREA */}
      <section className="w-full bg-slate-900 py-20 border-t border-slate-800">

        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-[1800px] mx-auto grid lg:grid-cols-2 gap-12 items-start">

          <div>

            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
              <MapPin className="text-cyan-500" />
              Bahçelievler Merkezli İstanbul Servisi
            </h2>

            <p className="text-slate-400 mb-8 leading-relaxed">
              Vora Teknik Servis, Bahçelievler merkezli olarak İstanbul'un
              farklı ilçelerinde kombi, klima ve petek servis taleplerini
              planlamaktadır.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-3">

              {istanbulIlceleri.map((ilce) => (

                <Link
                  key={ilce.slug}
                  href={`/istanbul/${ilce.slug}`}
                  className="group flex items-center gap-2 rounded-lg px-3 py-2.5 text-slate-300 text-sm font-medium hover:text-white hover:bg-slate-800 transition-colors"
                >

                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-700 group-hover:bg-cyan-400 shrink-0 transition-colors" />

                  <span>{ilce.name}</span>

                  <ArrowRight
                    size={14}
                    className="ml-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 text-cyan-400 transition-all"
                  />

                </Link>

              ))}

            </div>

          </div>

          <div className="bg-slate-800 p-2 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden h-87.5">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48174.52445892015!2d28.81057410041214!3d41.00511894751433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb62086e3381%3A0xe2128b97394db437!2zQmFow6dlbGlldmxlci_EsHN0YW5idWw!5e0!3m2!1str!2str"
              width="100%"
              height="100%"
              style={{
                border: 0,
                borderRadius: '20px',
              }}
              allowFullScreen={true}
              loading="lazy"
              title="Vora Teknik Servis Bahçelievler İstanbul haritası"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="w-full bg-slate-950 pt-16 pb-8 border-t border-slate-800">

        <div className="w-full px-6 lg:px-20 2xl:px-32 max-w-[1800px] mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            {/* COMPANY */}
            <div className="space-y-4">

              <Link
                href="/"
                className="text-2xl font-extrabold tracking-tight text-white"
              >
                Vora<span className="text-cyan-500">Teknik</span>
              </Link>

              <p className="text-slate-400 text-sm leading-relaxed">
                İstanbul geneli kombi, klima ve petek servis hizmetleri.
                Bahçelievler merkezli servis planlaması.
              </p>

              <div className="space-y-3">

                <div className="flex items-start gap-3 text-slate-300 text-sm">

                  <MapPin
                    size={18}
                    className="text-cyan-500 shrink-0 mt-0.5"
                  />

                  <span>
                    Kocasinan Merkez Mah. Irmak Sokak
                    <br />
                    Bahçelievler / İstanbul
                  </span>

                </div>

                <a
                  href="tel:+905365281116"
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 text-sm transition-colors"
                >

                  <Phone
                    size={18}
                    className="text-cyan-500 shrink-0"
                  />

                  0536 528 11 16

                </a>

                <a
                  href="tel:+905388188236"
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 text-sm transition-colors"
                >

                  <Phone
                    size={18}
                    className="text-cyan-500 shrink-0"
                  />

                  0538 818 82 36

                </a>

              </div>

            </div>

            {/* SERVICES */}
            <div>

              <h3 className="text-white font-bold mb-6">
                Hizmetler
              </h3>

              <ul className="space-y-3 text-sm">

                <li>
                  <Link
                    href="/kombi-servisi"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    Kombi Servisi
                  </Link>
                </li>

                <li>
                  <Link
                    href="/klima-servisi"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    Klima Servisi
                  </Link>
                </li>

                <li>
                  <Link
                    href="/petek-temizligi"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    Petek Temizliği
                  </Link>
                </li>

              </ul>

            </div>

            {/* QUICK LINKS */}
            <div>

              <h3 className="text-white font-bold mb-6">
                Hızlı Bağlantılar
              </h3>

              <ul className="space-y-3 text-sm">

                <li>
                  <Link
                    href="/"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    Ana Sayfa
                  </Link>
                </li>

                <li>
                  <a
                    href="#hizmetler"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    Hizmetlerimiz
                  </a>
                </li>

                <li>
                  <a
                    href="#servis-talebi"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    Servis Talebi
                  </a>
                </li>

                <li>
                  <a
                    href="tel:+905365281116"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    İletişim
                  </a>
                </li>

              </ul>

            </div>

            {/* WORKING HOURS */}
            <div>

              <h3 className="text-white font-bold mb-6">
                Çalışma Saatleri
              </h3>

              <ul className="space-y-3 text-sm text-slate-400">

                <li className="flex justify-between gap-4 border-b border-slate-800 pb-2">
                  <span>Pzt - Cmt:</span>
                  <span className="text-white font-medium">
                    08:00 - 23:59
                  </span>
                </li>

                <li className="flex justify-between gap-4 pb-2">
                  <span>Pazar:</span>
                  <span className="text-orange-500 font-bold">
                    7/24
                  </span>
                </li>

              </ul>

              <a
                href="tel:+905365281116"
                className="inline-flex items-center justify-center gap-2 w-full mt-5 py-3 px-4 bg-slate-800 hover:bg-cyan-600 text-white rounded-xl font-bold transition-all"
              >
                <Phone size={18} />
                Hemen Ara
              </a>

            </div>

          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-slate-500 text-xs text-center md:text-left">
              © {new Date().getFullYear()} Vora Teknik Servis. Tüm hakları saklıdır.
            </p>

            <p className="text-slate-600 text-xs">
              İstanbul / Bahçelievler
            </p>

          </div>

        </div>

      </footer>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/905365281116"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp üzerinden Vora Teknik Servis ile iletişime geç"
        className="fixed bottom-6 right-6 lg:bottom-8 lg:right-10 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform z-50 flex items-center justify-center"
      >
        <Phone size={27} />
      </a>

    </main>
  );
}