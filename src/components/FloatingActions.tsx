import React, { useState, useEffect } from 'react';
import {
  Share2,
  ArrowUp,
  PhoneCall,
  MessageSquare,
  X,
  Copy,
  Check,
  ShieldAlert
} from 'lucide-react';
import { COMPANY_DATA } from '../data/company';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
      setPageTitle(document.title || 'Água Fácil Desentupidora Curitiba');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const encodedUrl = encodeURIComponent(currentUrl || COMPANY_DATA.baseUrl);
  const encodedTitle = encodeURIComponent(`Água Fácil Desentupidora Curitiba: ${pageTitle}`);

  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      const url = currentUrl || window.location.href;
      const shareText = `Água Fácil Desentupidora Curitiba: ${pageTitle} (${url})`;
      navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const sharePlatforms = [
    {
      name: 'WhatsApp',
      color: 'bg-[#25D366] hover:bg-[#20bd5a] text-[#0B2545]',
      shadow: 'shadow-md',
      url: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      color: 'bg-blue-600 hover:bg-blue-500 text-white',
      shadow: 'shadow-md',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    }
  ];

  return (
    <>
      {/* LEFT-SIDE SHARE BUTTON */}
      <div className="fixed bottom-5 left-4 z-50 flex flex-col items-start gap-3">
        {isShareOpen && (
          <div className="bg-[#0B2545] border border-[#1368AA]/50 p-4 rounded-md shadow-2xl w-72 mb-2 text-white font-body">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1368AA]/30">
              <div className="flex items-center gap-2 text-[#FFC107] font-heading font-extrabold text-sm uppercase">
                <ShieldAlert className="w-4 h-4 text-[#FFC107]" />
                <span>Compartilhar Página</span>
              </div>
              <button
                type="button"
                onClick={() => setIsShareOpen(false)}
                className="p-1 rounded-md bg-[#07192F] hover:bg-[#1368AA]/40 text-slate-300 transition-colors"
                aria-label="Fechar menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-3">
              {sharePlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-xs font-bold transition-all active:scale-95 ${platform.color}`}
                >
                  <span className="shrink-0">{platform.icon}</span>
                  <span className="truncate">{platform.name}</span>
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={handleCopyLink}
              className={`w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md text-xs font-bold transition-all border ${
                copied
                  ? 'bg-[#25D366] text-[#0B2545] border-[#25D366]'
                  : 'bg-[#07192F] hover:bg-[#1368AA]/30 text-slate-200 border-[#1368AA]/40'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Link Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#FFC107]" />
                  <span>Copiar Link</span>
                </>
              )}
            </button>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsShareOpen(!isShareOpen)}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-md font-heading font-bold uppercase text-xs text-white bg-[#0B2545] hover:bg-[#07192F] border border-[#FFC107]/50 shadow-lg transition-all"
          aria-label="Compartilhar página"
        >
          <Share2 className="w-4 h-4 text-[#FFC107]" />
          <span className="hidden xs:inline">Compartilhar</span>
        </button>
      </div>

      {/* RIGHT-SIDE FLOATING ACTION BUTTONS */}
      <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-2.5 pointer-events-none">
        <div className="flex flex-col items-end gap-2.5 pointer-events-auto">
          {/* Central Call Button */}
          <a
            href={`tel:${COMPANY_DATA.landlineRaw}`}
            id="floating-call-btn"
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-[#FFC107] hover:bg-amber-400 text-[#0B2545] font-heading font-black text-xs uppercase tracking-wider shadow-lg border border-amber-300 transition-all hover:scale-105 active:scale-95"
            aria-label="Ligar na Central"
          >
            <PhoneCall className="w-4 h-4 text-[#0B2545]" />
            <span className="hidden sm:inline">LIGAR CENTRAL: {COMPANY_DATA.landlineDisplay}</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={COMPANY_DATA.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="floating-whatsapp-btn"
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-[#25D366] hover:bg-[#20bd5a] text-[#0B2545] font-heading font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl border border-emerald-300 transition-all hover:scale-105 active:scale-95"
            aria-label="WhatsApp Plantão 24h"
          >
            <MessageSquare className="w-5 h-5 fill-[#0B2545] text-[#25D366]" />
            <span>WHATSAPP {COMPANY_DATA.phoneDisplay}</span>
          </a>

          {/* Scroll Top Button */}
          {showScrollTop && (
            <button
              type="button"
              onClick={scrollToTop}
              id="floating-scroll-top-btn"
              className="p-2.5 rounded-md bg-[#0B2545] text-[#FFC107] border border-[#1368AA]/50 shadow-md transition-all hover:scale-110 active:scale-90"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};
