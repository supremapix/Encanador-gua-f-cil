import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, PhoneCall, MessageSquare, Tag, MapPin, Sparkles } from 'lucide-react';
import { COMPANY_DATA } from '../data/company';

export const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const images = COMPANY_DATA.heroImages;
  const SLIDE_DURATION_MS = 6000;
  const TICK_MS = 50;

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Auto-play interval & progress bar state
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + (TICK_MS / SLIDE_DURATION_MS) * 100;
        if (nextProgress >= 100) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          return 0;
        }
        return nextProgress;
      });
    }, TICK_MS);

    return () => clearInterval(timer);
  }, [isPaused, images.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setProgress(0);
  };

  const handleSelectSlide = (idx: number) => {
    setCurrentIndex(idx);
    setProgress(0);
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
      className="relative w-full bg-slate-950 overflow-hidden"
    >
      {/* Slider Frame showing purely images without text overlays */}
      <div
        className="relative w-full overflow-hidden bg-slate-950 flex items-center justify-center aspect-[2/3] sm:aspect-none sm:h-[480px] md:h-[540px] lg:h-[620px] xl:h-[680px]"
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
              key={`${img.url}-${idx}`}
              className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              aria-hidden={!isActive}
            >
              {/* Blurred backdrop for ultra-wide screens to eliminate harsh cuts */}
              <div
                className="absolute inset-0 bg-cover bg-center blur-2xl opacity-30 scale-110 pointer-events-none"
                style={{ backgroundImage: `url(${img.mobileUrl || img.url})` }}
              />

              <picture className="relative z-10 w-full h-full flex items-center justify-center">
                {img.mobileUrl && (
                  <source media="(max-width: 639px)" srcSet={img.mobileUrl} />
                )}
                <img
                  src={img.url}
                  alt={img.alt}
                  fetchPriority={idx === 0 ? 'high' : 'auto'}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  decoding={idx === 0 ? 'sync' : 'async'}
                  className="w-full h-full object-contain sm:object-cover object-center"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (img.mobileUrl && target.src !== img.url) {
                      target.src = img.url;
                    }
                  }}
                />
              </picture>
            </div>
          );
        })}

        {/* Slide Controls (Left/Right Navigation Buttons) */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white border border-slate-700/60 backdrop-blur-md shadow-md transition-all active:scale-95"
          aria-label="Slide anterior"
          id="hero-slider-prev-btn"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white border border-slate-700/60 backdrop-blur-md shadow-md transition-all active:scale-95"
          aria-label="Próximo slide"
          id="hero-slider-next-btn"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2 bg-slate-950/70 px-2.5 py-1 rounded-full border border-slate-800/80 backdrop-blur-md shadow-lg">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelectSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex ? 'w-6 sm:w-7 bg-cyan-400' : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Ir para o slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar OUTSIDE / BELOW the images */}
      <div className="w-full bg-slate-800 dark:bg-slate-900 h-2 relative overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 transition-all ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Animated Letreiro Marquee Bar with Clickable Phone Numbers & Promo */}
      <div className="bg-gradient-to-r from-amber-500 via-emerald-600 to-cyan-700 text-white py-2.5 shadow-md overflow-hidden border-b border-amber-400/30">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs sm:text-sm font-extrabold uppercase tracking-wide">
            {/* Ticker Group 1 */}
            <div className="flex items-center gap-8">
              <span className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 px-3 py-1 rounded-full font-black text-xs shadow-xs shrink-0">
                <Tag className="w-3.5 h-3.5" /> PROMOÇÃO HOJE: A PARTIR DE R$ 50,00!
              </span>
              <span className="flex items-center gap-2 shrink-0">
                <PhoneCall className="w-4 h-4 text-yellow-300 animate-pulse" />
                LIGUE HOJE:
                <a
                  href={`tel:${COMPANY_DATA.phoneRaw}`}
                  className="underline decoration-2 underline-offset-2 text-yellow-200 hover:text-white transition-colors"
                >
                  {COMPANY_DATA.phoneDisplay}
                </a>
              </span>
              <span className="flex items-center gap-2 shrink-0">
                <MessageSquare className="w-4 h-4 text-emerald-200" />
                WHATSAPP 24H:
                <a
                  href={COMPANY_DATA.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-2 underline-offset-2 text-emerald-100 hover:text-white transition-colors"
                >
                  (41) 99569-4912
                </a>
              </span>
              <span className="flex items-center gap-2 text-cyan-100 shrink-0">
                <MapPin className="w-4 h-4 text-cyan-300" />
                SEDE NA CIC: RUA DAS ÁGUIAS, 320 - CURITIBA/PR
              </span>
              <span className="flex items-center gap-2 text-amber-100 shrink-0">
                <Sparkles className="w-4 h-4 text-amber-300" />
                REPARO DE VAZAMENTOS, TORNEIRAS E REGISTROS
              </span>
            </div>

            {/* Ticker Group 2 (Duplicate for Seamless Loop) */}
            <div className="flex items-center gap-8">
              <span className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 px-3 py-1 rounded-full font-black text-xs shadow-xs shrink-0">
                <Tag className="w-3.5 h-3.5" /> PROMOÇÃO HOJE: A PARTIR DE R$ 50,00!
              </span>
              <span className="flex items-center gap-2 shrink-0">
                <PhoneCall className="w-4 h-4 text-yellow-300 animate-pulse" />
                LIGUE HOJE:
                <a
                  href={`tel:${COMPANY_DATA.phoneRaw}`}
                  className="underline decoration-2 underline-offset-2 text-yellow-200 hover:text-white transition-colors"
                >
                  {COMPANY_DATA.phoneDisplay}
                </a>
              </span>
              <span className="flex items-center gap-2 shrink-0">
                <MessageSquare className="w-4 h-4 text-emerald-200" />
                WHATSAPP 24H:
                <a
                  href={COMPANY_DATA.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-2 underline-offset-2 text-emerald-100 hover:text-white transition-colors"
                >
                  (41) 99569-4912
                </a>
              </span>
              <span className="flex items-center gap-2 text-cyan-100 shrink-0">
                <MapPin className="w-4 h-4 text-cyan-300" />
                SEDE NA CIC: RUA DAS ÁGUIAS, 320 - CURITIBA/PR
              </span>
              <span className="flex items-center gap-2 text-amber-100 shrink-0">
                <Sparkles className="w-4 h-4 text-amber-300" />
                REPARO DE VAZAMENTOS, TORNEIRAS E REGISTROS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

