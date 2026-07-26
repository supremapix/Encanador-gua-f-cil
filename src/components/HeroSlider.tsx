import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, MessageSquare, PhoneCall, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_DATA } from '../data/company';

export const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const images = COMPANY_DATA.heroImages;

  // Auto-play interval
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, images.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      aria-label="Destaques dos Serviços de Encanador"
      className="relative w-full bg-slate-950 overflow-hidden min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slides */}
      {images.map((img, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={img.url}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            aria-hidden={!isActive}
          >
            <img
              src={img.url}
              alt={img.alt}
              width="1920"
              height="1080"
              fetchPriority={idx === 0 ? 'high' : 'auto'}
              loading={idx === 0 ? 'eager' : 'lazy'}
              decoding={idx === 0 ? 'sync' : 'async'}
              className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105 motion-safe:transition-transform motion-safe:duration-10000"
              onError={(e) => {
                // Fallback visual if image load fails
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
          </div>
        );
      })}

      {/* Hero Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full text-white">
        <div className="max-w-3xl space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/30 text-cyan-200 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Sede na CIC | Atendimento em Curitiba e Região</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-white drop-shadow-md">
            Encanador em Curitiba <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">Água Fácil 24H</span>
          </h1>

          {/* Subtitle / Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl">
            {images[currentIndex].subtitle}. Reparo rápido de vazamentos, substituição de registros, torneiras, louças e manutenção hidráulica com máxima transparência.
          </p>

          {/* Quick Info Pills */}
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300 font-medium pt-1">
            <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-md border border-slate-800">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Rua das Águias, 320 – CIC
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-md border border-slate-800">
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" /> (41) 99569-4912
            </span>
          </div>

          {/* Call-to-action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
            <a
              href={COMPANY_DATA.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-primary-whatsapp-btn"
              className="inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-base px-6 py-4 rounded-xl shadow-lg hover:shadow-emerald-500/20 transition-all active:scale-95 text-center"
            >
              <MessageSquare className="w-5 h-5 fill-slate-950" />
              <span>Solicitar Atendimento no WhatsApp</span>
            </a>
            <a
              href="#local-search-section"
              id="hero-secondary-search-btn"
              className="inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-800 text-white font-bold text-base px-6 py-4 rounded-xl border border-slate-700 backdrop-blur-sm hover:border-slate-600 transition-all text-center"
            >
              <span>Ver Bairros & Cidades Atendidas</span>
            </a>
          </div>
        </div>
      </div>

      {/* Slide Navigation Controls */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white border border-slate-700/50 backdrop-blur-md transition-colors"
        aria-label="Slide anterior"
        id="hero-slider-prev-btn"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={handleNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white border border-slate-700/50 backdrop-blur-md transition-colors"
        aria-label="Próximo slide"
        id="hero-slider-next-btn"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            className={`h-2.5 rounded-full transition-all ${
              idx === currentIndex ? 'w-8 bg-cyan-400' : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Ir para o slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
