'use client';

import Link from 'next/link';
import Image from 'next/image';
import { VoraHeroBackground, VoraReveal, VoraScrollProgress } from './components/VoraScrollEffects';
import VoraHeader from './components/VoraHeader';
import VoraBrandsMarquee from './components/VoraBrandsMarquee';
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

      <VoraScrollProgress />

      {/* HEADER + NAVBAR */}
      <VoraHeader active="home" />

      {/* HERO - VORA_CINEMATIC_CORPORATE_V3 */}
      <section className="relative isolate overflow-hidden bg-[#041126] text-white" aria-labelledby="vora-hero-title">
        <VoraHeroBackground />
        {/* VORA_TRANSPARENT_NAVBAR_V3_1: Ustte okunaklilik icin ince ton gecisi. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[190px] bg-linear-to-b from-[#020b20]/40 via-[#020b20]/15 to-transparent" />

        {/* Cinematic Corporate: ust bolumde dengeli editoryal kompozisyon. */}
        <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-12 px-5 pb-12 pt-[140px] sm:px-8 sm:pt-[166px] lg:min-h-svh lg:grid-cols-[minmax(0,1.08fr)_minmax(370px,0.92fr)] lg:gap-14 lg:px-12 lg:pb-20 lg:pt-[184px] 2xl:px-16">
          <div className="max-w-[790px]">
            <div className="mb-8 flex items-center gap-3 sm:mb-9">
              <span className="h-px w-9 bg-cyan-300/75 sm:w-12" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.19em] text-cyan-100/95 sm:text-xs sm:tracking-[0.24em]">
                İstanbul Genelinde Teknik Servis
              </span>
            </div>

            <h1
              id="vora-hero-title"
              className="max-w-[820px] text-[clamp(2.85rem,5.4vw,5.75rem)] font-black leading-[1.045] tracking-[-0.055em] text-white drop-shadow-[0_12px_38px_rgba(0,0,0,0.33)]"
            >
              <span className="block">İstanbul&apos;da</span>
              <span className="mt-1 block bg-linear-to-r from-white via-[#b9effb] to-[#52d2f0] bg-clip-text text-transparent">
                Kombi, Klima
              </span>
              <span className="mt-1 block">ve Petek Servisi</span>
            </h1>

            <div className="mt-8 max-w-[610px] border-l-2 border-cyan-300/75 pl-5 sm:pl-6">
              <p className="text-base font-medium leading-[1.8] text-slate-100/90 sm:text-lg lg:text-[1.15rem]">
                Vora Teknik Servis ile kombi bakımı, klima servisi ve petek temizliği
                taleplerinizi kolayca iletin. İstanbul genelinde servis planlaması
                için ekibimizle iletişime geçin.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3 sm:mt-11">
              <a
                href="#servis-talebi"
                className="inline-flex min-h-13 items-center justify-center gap-3 rounded-xl bg-[#11cce9] px-6 py-3 text-sm font-extrabold text-[#031226] shadow-[0_12px_32px_rgba(0,162,215,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#70e9f8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base"
              >
                Servis Talebi Oluştur <ArrowRight size={18} />
              </a>
              <a
                href="tel:+905365281116"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-white/35 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:border-cyan-200/70 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base"
              >
                <Phone size={18} /> Hemen Ara
              </a>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] font-medium text-slate-200/95">
              <a
                href="https://wa.me/905365281116?text=Merhaba%2C%20Vora%20Teknik%20Servis%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-cyan-200 underline-offset-4 transition hover:text-white hover:underline"
              >
                WhatsApp&apos;tan Yaz <ArrowRight size={15} />
              </a>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-cyan-300/60" />
              <a href="tel:+905388188236" className="transition hover:text-cyan-200">0538 818 82 36</a>
              <span className="text-slate-300/80">Her gün 00:00–23:59</span>
            </div>

            <div className="mt-12 grid max-w-[760px] gap-0 border-t border-white/20 pt-6 sm:mt-14 sm:grid-cols-3 sm:divide-x sm:divide-white/15">
              <div className="flex items-center gap-3 py-3 sm:pr-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-200/25 bg-cyan-200/10 text-cyan-200"><ShieldCheck size={19} /></div>
                <div>
                  <p className="text-sm font-extrabold text-white">Açık Bilgilendirme</p>
                  <p className="mt-0.5 text-xs text-slate-300">İşlem öncesi koşullar</p>
                </div>
              </div>
              <div className="flex items-center gap-3 py-3 sm:px-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-200/25 bg-cyan-200/10 text-cyan-200"><Clock size={19} /></div>
                <div>
                  <p className="text-sm font-extrabold text-white">Planlı Servis</p>
                  <p className="mt-0.5 text-xs text-slate-300">Randevuya göre hizmet</p>
                </div>
              </div>
              <div className="flex items-center gap-3 py-3 sm:pl-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-200/25 bg-cyan-200/10 text-cyan-200"><CheckCircle size={19} /></div>
                <div>
                  <p className="text-sm font-extrabold text-white">Özenli Çalışma</p>
                  <p className="mt-0.5 text-xs text-slate-300">Cihaz odaklı yaklaşım</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form veri akisi degismez; yalnizca cevre paneli V3. */}
          <div
            id="servis-talebi"
            className="relative mx-auto w-full max-w-[520px] scroll-mt-28 overflow-hidden rounded-[28px] border border-white/35 bg-white/[0.98] text-[#08213b] shadow-[0_35px_110px_rgba(0,7,26,0.55)] ring-1 ring-cyan-200/15 lg:ml-auto"
          >
            <div className="relative overflow-hidden bg-[#081d35] px-6 pb-7 pt-6 text-white sm:px-8 sm:pb-8 sm:pt-8">
              <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-24 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />
              <div className="relative mb-5 flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.19em] text-cyan-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" /> SERVİS TALEBİ
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.13em] text-slate-300/75">VORA TEKNİK</span>
              </div>
              <h2 className="relative max-w-[360px] text-[clamp(1.5rem,2.5vw,2rem)] font-extrabold leading-tight tracking-[-0.035em]">
                Servis talebinizi oluşturalım.
              </h2>
              <p className="relative mt-3 max-w-[360px] text-sm leading-relaxed text-slate-300">
                İletişim bilgilerinizi paylaşın, servis ekibimiz sizinle iletişime geçsin.
              </p>
            </div>
            <div className="px-6 pb-6 pt-6 sm:px-8 sm:pb-8 sm:pt-7">
<form onSubmit={handleServiceRequest} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="mb-1.5 block text-sm font-bold text-slate-700">Adınız Soyadınız</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Örn: Ahmet Yılmaz"
                  disabled={isSubmitting}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 font-medium text-vora-bg outline-none transition focus:border-vora-primary focus:ring-2 focus:ring-cyan-100 disabled:opacity-60"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-bold text-slate-700">Telefon Numaranız</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="05XX XXX XX XX"
                  disabled={isSubmitting}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 font-medium text-vora-bg outline-none transition focus:border-vora-primary focus:ring-2 focus:ring-cyan-100 disabled:opacity-60"
                />
              </div>
              <div>
                <label htmlFor="deviceType" className="mb-1.5 block text-sm font-bold text-slate-700">Hizmet Türü</label>
                <select
                  id="deviceType"
                  name="deviceType"
                  value={deviceType}
                  onChange={(e) => setDeviceType(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 font-bold text-vora-bg outline-none transition focus:border-vora-primary focus:ring-2 focus:ring-cyan-100 disabled:opacity-60"
                >
                  <option value="Kombi">Kombi Arızası / Bakımı</option>
                  <option value="Klima">Klima Arızası / Montajı</option>
                  <option value="Petek">Petek Temizliği</option>
                  <option value="Diğer">Diğer / Emin Değilim</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full rounded-xl px-5 py-4 text-base font-black transition sm:text-lg ${isSubmitting ? 'cursor-not-allowed bg-slate-400 text-white' : 'bg-linear-to-r from-[#009BE8] to-[#00C9EE] text-white shadow-lg shadow-cyan-500/20 hover:brightness-110'}`}
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Servis Talebi Oluştur →'}
              </button>
              {submitStatus.message && (
                <div className={`rounded-xl border p-3 text-sm font-bold ${submitStatus.type === 'success' ? 'border-green-200 bg-green-50 text-green-700' : 'border-red-200 bg-red-50 text-red-700'}`} role="status">
                  {submitStatus.message}
                </div>
              )}
              <p className="text-center text-xs text-slate-500">İletişim bilgileriniz yalnızca servis talebiniz için kullanılır.</p>
            </form>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto hidden w-full max-w-[1600px] items-center justify-between gap-4 px-12 pb-8 text-[11px] font-semibold uppercase tracking-[0.17em] text-slate-300/85 lg:flex 2xl:px-16">
          <span className="flex items-center gap-3"><span className="h-px w-7 bg-cyan-300/60" /> Vora Teknik Servis — İstanbul</span>
          <span className="flex items-center gap-2">Hizmetlerimizi keşfedin <span aria-hidden="true" className="text-cyan-200">↓</span></span>
        </div>
      </section>

            {/* VORA_ANASAYFA_V4_MAPS_YORUMLAR — tekrarsiz servis sureci */}
      <section
        id="servis-sureci"
        aria-labelledby="vora-surec-baslik"
        className="relative z-20 border-b border-slate-200 bg-[#f4f8fd] px-5 pb-17 pt-16 sm:px-8 sm:pb-20 lg:px-12 lg:pt-20 2xl:px-16"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-9 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
            <div className="max-w-[720px]">
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-700">
                VORA İLE SERVİS SÜRECİ
              </p>
              <h2 id="vora-surec-baslik" className="text-[clamp(1.85rem,3.2vw,2.9rem)] font-black leading-tight tracking-[-0.04em] text-[#081b34]">
                Üç adımda teknik servis desteği
              </h2>
              <p className="mt-4 max-w-[610px] text-base leading-relaxed text-slate-600 sm:text-lg">
                İhtiyacınızı paylaşın, cihaz bilgilerinizi değerlendirelim ve uygun servis planlamasını oluşturalım.
              </p>
            </div>
            <a href="#servis-talebi" className="inline-flex items-center gap-2 self-start text-sm font-extrabold text-cyan-800 transition hover:text-cyan-600 md:self-auto">
              Servis talebi oluştur <ArrowRight size={17} />
            </a>
          </div>
          <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
            {[
              {
                number: "01", title: "Talebinizi iletin",
                description: "Servis formunu doldurun veya telefon ve WhatsApp üzerinden bize ulaşın.",
                icon: Phone,
              },
              {
                number: "02", title: "İhtiyacınızı değerlendirelim",
                description: "Cihaz türü, arıza belirtileri ve adres bilgilerine göre servis sürecini planlayalım.",
                icon: CheckCircle,
              },
              {
                number: "03", title: "Teknik servis planlaması",
                description: "Uygun randevu ve işlem kapsamı hakkında bilgi paylaşalım.",
                icon: Wrench,
              },
            ].map((step, index) => (
              <VoraReveal key={step.number} delay={index * 0.07} className="h-full">
                <div className="group relative flex h-full min-h-[205px] flex-col overflow-hidden rounded-[22px] border border-slate-200 bg-white p-7 shadow-[0_14px_40px_rgba(0,18,48,0.06)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-[0_22px_48px_rgba(0,18,48,0.10)] sm:p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                      <step.icon size={25} strokeWidth={1.8} />
                    </div>
                    <span className="text-4xl font-black tracking-tight text-slate-100" aria-hidden="true">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-black tracking-tight text-[#081b34]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-[1.7] text-slate-600 sm:text-base">{step.description}</p>
                  <div className="mt-auto pt-6"><span className="block h-px w-14 bg-cyan-500/65 transition-all duration-300 group-hover:w-24" /></div>
                </div>
              </VoraReveal>
            ))}
          </div>
        </div>
      </section>

{/* BRANDS - VORA_MARKA_SERIDI_V1 */}
      <VoraBrandsMarquee />

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
            <VoraReveal delay={0.02} className="h-full min-w-0">
<Link
              href="/kombi-servisi"
              className="group block h-full bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-cyan-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
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
          </VoraReveal>

            {/* KLİMA */}
            <VoraReveal delay={0.11} className="h-full min-w-0">
<Link
              href="/klima-servisi"
              className="group block h-full bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-cyan-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
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
          </VoraReveal>

            {/* PETEK */}
            <VoraReveal delay={0.2} className="h-full min-w-0">
<Link
              href="/petek-temizligi"
              className="group block h-full bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-cyan-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
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
          </VoraReveal>

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
              İstanbul Genelinde Teknik Servis
            </h2>

            <p className="text-slate-400 mb-8 leading-relaxed">
              Vora Teknik Servis, İstanbul'un
              farklı ilçelerinde kombi, klima ve petek servis taleplerini
              planlamaktadır.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-3">

              {istanbulIlceleri.filter((ilce) => [
                "bahcelievler", "bagcilar", "bakirkoy", "gungoren",
                "kucukcekmece", "besiktas", "kadikoy", "uskudar",
              ].includes(ilce.slug)).map((ilce) => (

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
             <details className="group mt-5 rounded-xl border border-slate-700/80 bg-slate-800/30 p-4">
               <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-bold text-cyan-200 marker:hidden">
                 Diğer ilçeleri göster <ChevronDown size={17} className="transition-transform group-open:rotate-180" />
               </summary>
               <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                 {istanbulIlceleri.filter((ilce) => ![
                   "bahcelievler", "bagcilar", "bakirkoy", "gungoren",
                   "kucukcekmece", "besiktas", "kadikoy", "uskudar",
                 ].includes(ilce.slug)).map((ilce) => (
                   <Link key={ilce.slug} href={`/istanbul/${ilce.slug}`}
                     className="rounded-lg px-2 py-2 text-xs font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-white sm:text-sm">
                     {ilce.name}
                   </Link>
                 ))}
               </div>
             </details>
             <Link
               href="/hizmet-bolgeleri"
               className="mt-7 inline-flex items-center gap-2 rounded-xl border border-cyan-400/35 bg-cyan-400/10 px-5 py-3 text-sm font-extrabold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
             >
               Tüm hizmet bölgelerini keşfedin <ArrowRight size={17} />
             </Link>

          </div>

                    {/* Google Maps: q= isletme aramasi; dogrudan resmi yorum baglantisi asagidadir. */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-[26px] border border-slate-700 bg-slate-800 p-2 shadow-2xl">
              <iframe
                src="https://www.google.com/maps?q=VORA%20Kombi%20Klima%20Servisi%20Irmak%20Sokak%20Bahcelievler%20Istanbul&output=embed"
                width="100%"
                height="355"
                style={{ border: 0, borderRadius: "18px", display: "block" }}
                allowFullScreen
                loading="lazy"
                title="VORA Kombi Klima Servisi için Google Haritalar araması"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <section aria-labelledby="vora-google-yorum-baslik" className="rounded-[25px] border border-cyan-300/20 bg-[#0b203b] p-6 shadow-[0_16px_38px_rgba(0,7,24,0.2)] sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-cyan-200">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" aria-hidden="true" />
                  GOOGLE HARİTALAR
                </span>
                <span className="text-xs font-semibold text-slate-400">Bağımsız müşteri değerlendirmeleri</span>
              </div>
              <h3 id="vora-google-yorum-baslik" className="mt-4 text-[clamp(1.35rem,2.5vw,1.85rem)] font-black tracking-tight text-white">
                Müşterilerimizin yorumlarını inceleyin
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                VORA Kombi Klima Servisi hakkında yapılan değerlendirmeleri ve güncel yorumları doğrudan Google Haritalar işletme profilimizde görüntüleyebilirsiniz.
              </p>
              <a
                href="https://maps.app.goo.gl/qCyBbZmu6GyEoBWL9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VORA müşteri yorumlarını Google Haritalar'da aç (yeni sekme)"
                className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-extrabold text-[#06172b] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base"
              >
                Google yorumlarını görüntüle <ArrowRight size={18} />
              </a>
            </section>
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
                className="inline-flex items-center rounded-xl p-1 transition-opacity hover:opacity-90"
                aria-label="VORA Teknik Servis ana sayfa"
              >
                <Image
                  src="/images/vora-logo-header.webp"
                  alt="VORA Kombi Klima Teknik Servis"
                  width={260}
                  height={118}
                  className="h-auto w-[184px] object-contain sm:w-[215px]"
                />
              </Link>

              <p className="text-slate-400 text-sm leading-relaxed">
                İstanbul geneli kombi, klima ve petek servis hizmetleri.
                İstanbul genelinde servis planlaması.
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
                  <Link href="/hizmet-bolgeleri" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    Hizmet Bölgelerimiz
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
                  <span>Pazartesi – Pazar:</span>
                  <span className="font-bold text-white">00:00 – 23:59</span>
                </li>
                <li className="flex justify-between gap-4 pb-2">
                  <span>Hizmet:</span>
                  <span className="font-bold text-vora-cyan">7/24</span>
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
