import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, PhoneCall, MessageSquare, MapPin, Clock, ShieldAlert } from 'lucide-react';
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
      aria-label="Destaques dos Serviços de Desentupimento"
      className="relative w-full bg-[#0B2545] overflow-hidden"
    >
      {/* Slider Frame */}
      <div
        className="relative w-full overflow-hidden bg-[#07192F] flex items-center justify-center aspect-[4/3] sm:aspect-none sm:h-[450px] md:h-[500px] lg:h-[560px]"
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
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (img.mobileUrl && target.src !== img.url) {
                      target.src = img.url;
                    }
                  }}
                />
              </picture>

              {/* Scrim overlay with brand title in Barlow Condensed (hidden on mobile to keep mobile banner clean) */}
              <div className="hidden sm:flex absolute inset-0 z-20 bg-gradient-to-t from-[#0B2545] via-[#0B2545]/40 to-transparent items-end p-6 sm:p-10">
                <div className="max-w-4xl space-y-2">
                  <div className="inline-flex items-center gap-2 bg-[#FFC107] text-[#0B2545] font-heading font-black text-xs uppercase px-3 py-1 rounded-sm shadow-md">
                    <ShieldAlert className="w-4 h-4" />
                    <span>DESENTUPIDORA EM CURITIBA E RMC</span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-black text-white uppercase tracking-wide leading-none drop-shadow-md">
                    {img.title}
                  </h2>
                  <p className="text-slate-200 text-xs sm:text-base font-body max-w-2xl leading-relaxed drop-shadow-xs">
                    {img.subtitle}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Slide Controls */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-md bg-[#0B2545]/80 hover:bg-[#0B2545] text-white border border-[#FFC107]/40 shadow-md transition-all active:scale-95"
          aria-label="Slide anterior"
          id="hero-slider-prev-btn"
        >
          <ChevronLeft className="w-5 h-5 text-[#FFC107]" />
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-md bg-[#0B2545]/80 hover:bg-[#0B2545] text-white border border-[#FFC107]/40 shadow-md transition-all active:scale-95"
          aria-label="Próximo slide"
          id="hero-slider-next-btn"
        >
          <ChevronRight className="w-5 h-5 text-[#FFC107]" />
        </button>

        {/* Slide Dots */}
        <div className="absolute bottom-3 right-4 sm:right-8 z-30 flex items-center gap-2 bg-[#0B2545]/90 px-3 py-1.5 rounded-md border border-[#1368AA]/50 shadow-md">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelectSlide(idx)}
              className={`h-2 rounded-sm transition-all ${
                idx === currentIndex ? 'w-6 bg-[#FFC107]' : 'w-2 bg-white/40 hover:bg-white/80'
              }`}
              aria-label={`Ir para o slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-[#07192F] h-1.5 relative overflow-hidden">
        <div
          className="h-full bg-[#FFC107] transition-all ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Marquee Bar with Operating Facts */}
      <div className="bg-[#07192F] text-white py-2.5 shadow-md overflow-hidden border-b border-[#1368AA]/40 font-heading font-extrabold uppercase tracking-wider text-xs sm:text-sm">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
            <div className="flex items-center gap-8">
              <span className="inline-flex items-center gap-2 bg-[#FFC107] text-[#0B2545] px-3 py-0.5 rounded-sm font-black text-xs shrink-0">
                <Clock className="w-3.5 h-3.5" /> ATENDIMENTO 24H TODOS OS DIAS
              </span>
              <span className="flex items-center gap-2 text-slate-200 shrink-0">
                <PhoneCall className="w-4 h-4 text-[#FFC107]" />
                CENTRAL FIXA:
                <a href={`tel:${COMPANY_DATA.landlineRaw}`} className="underline text-[#FFC107]">
                  {COMPANY_DATA.landlineDisplay}
                </a>
              </span>
              <span className="flex items-center gap-2 text-slate-200 shrink-0">
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                WHATSAPP PLANTÃO:
                <a href={COMPANY_DATA.whatsAppUrl} target="_blank" rel="noopener noreferrer" className="underline text-[#25D366]">
                  {COMPANY_DATA.phoneDisplay}
                </a>
              </span>
              <span className="flex items-center gap-2 text-slate-300 shrink-0">
                <MapPin className="w-4 h-4 text-[#1368AA]" />
                SEDE PRÓPRIA: RUA LUIZ MALTACA, 36 - CIC, CURITIBA/PR
              </span>
            </div>

            <div className="flex items-center gap-8">
              <span className="inline-flex items-center gap-2 bg-[#FFC107] text-[#0B2545] px-3 py-0.5 rounded-sm font-black text-xs shrink-0">
                <Clock className="w-3.5 h-3.5" /> ATENDIMENTO 24H TODOS OS DIAS
              </span>
              <span className="flex items-center gap-2 text-slate-200 shrink-0">
                <PhoneCall className="w-4 h-4 text-[#FFC107]" />
                CENTRAL FIXA:
                <a href={`tel:${COMPANY_DATA.landlineRaw}`} className="underline text-[#FFC107]">
                  {COMPANY_DATA.landlineDisplay}
                </a>
              </span>
              <span className="flex items-center gap-2 text-slate-200 shrink-0">
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                WHATSAPP PLANTÃO:
                <a href={COMPANY_DATA.whatsAppUrl} target="_blank" rel="noopener noreferrer" className="underline text-[#25D366]">
                  {COMPANY_DATA.phoneDisplay}
                </a>
              </span>
              <span className="flex items-center gap-2 text-slate-300 shrink-0">
                <MapPin className="w-4 h-4 text-[#1368AA]" />
                SEDE PRÓPRIA: RUA LUIZ MALTACA, 36 - CIC, CURITIBA/PR
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
