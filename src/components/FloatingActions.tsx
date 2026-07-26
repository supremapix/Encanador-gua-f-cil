import React, { useState, useEffect } from 'react';
import {
  Share2,
  ArrowUp,
  PhoneCall,
  MessageSquare,
  X,
  Copy,
  Check,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { COMPANY_DATA } from '../data/company';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const [pageTitle, setPageTitle] = useState('');

  // Update current URL & Title when mounted or route changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
      setPageTitle(document.title || 'Encanador Água Fácil 24H Curitiba');
    }
  }, []);

  // Monitor Scroll Position for Back to Top Button
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

  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl || window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const encodedUrl = encodeURIComponent(currentUrl || 'https://www.encanador.servicosnobairro.com.br');
  const encodedTitle = encodeURIComponent(`Encanador em Curitiba e Região: ${pageTitle}`);

  // Social Share Platforms
  const sharePlatforms = [
    {
      name: 'WhatsApp',
      color: 'bg-emerald-600 hover:bg-emerald-500 text-white',
      shadow: 'shadow-emerald-500/30',
      url: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      color: 'bg-blue-600 hover:bg-blue-500 text-white',
      shadow: 'shadow-blue-500/30',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    {
      name: 'Twitter (X)',
      color: 'bg-slate-900 hover:bg-slate-800 text-white border border-slate-700',
      shadow: 'shadow-slate-900/40',
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      name: 'Pinterest',
      color: 'bg-red-600 hover:bg-red-500 text-white',
      shadow: 'shadow-red-500/30',
      url: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`,
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      color: 'bg-sky-700 hover:bg-sky-600 text-white',
      shadow: 'shadow-sky-700/30',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      name: 'Threads',
      color: 'bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700',
      shadow: 'shadow-zinc-900/40',
      url: `https://www.threads.net/intent/post?text=${encodedTitle}%20${encodedUrl}`,
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.186 24c-2.613 0-4.88-.718-6.736-2.133-2.022-1.543-3.238-3.791-3.614-6.685-.387-2.981.258-5.83 1.868-8.243 1.611-2.414 3.966-4.148 6.81-5.015C12.333 1.36 14.28 1.253 16.293 1.62c2.015.367 3.847 1.282 5.297 2.646l-2.025 2.148c-1.127-1.061-2.529-1.76-4.053-2.021-1.524-.26-3.003-.178-4.39.243-2.187.663-3.993 2.001-5.223 3.87-1.231 1.868-1.727 4.048-1.43 6.338.288 2.21 1.218 3.923 2.762 5.099 1.42 1.082 3.151 1.63 5.147 1.63 2.502 0 4.544-.803 6.071-2.386 1.332-1.382 2.053-3.218 2.14-5.457H12.186v-2.883h10.42c.115 1.041.05 2.145-.194 3.284-.467 2.184-1.532 4.102-3.167 5.702C17.397 22.84 15.013 24 12.186 24z" />
        </svg>
      )
    }
  ];

  return (
    <>
      {/* LEFT-SIDE FLOATING SHARE WIDGET */}
      <div className="fixed bottom-5 left-4 z-50 flex flex-col items-start gap-3">
        {/* Expanded Share Panel Modal / Popup */}
        {isShareOpen && (
          <div className="bg-slate-900/95 backdrop-blur-xl border border-cyan-500/30 p-4 rounded-2xl shadow-2xl shadow-cyan-950/80 w-72 mb-2 animate-in fade-in slide-in-from-bottom-4 duration-300 text-white">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 text-cyan-400 font-extrabold text-sm">
                <Sparkles className="w-4 h-4 text-cyan-300 animate-spin-slow" />
                <span>Compartilhar Página</span>
              </div>
              <button
                type="button"
                onClick={() => setIsShareOpen(false)}
                className="p-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Fechar menu de compartilhamento"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Platform Grid */}
            <div className="grid grid-cols-2 gap-2.5 mb-3">
              {sharePlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-bold transition-all transform active:scale-95 shadow-md ${platform.color} ${platform.shadow}`}
                >
                  <span className="shrink-0">{platform.icon}</span>
                  <span className="truncate">{platform.name}</span>
                </a>
              ))}
            </div>

            {/* Quick Copy Link Button */}
            <button
              type="button"
              onClick={handleCopyLink}
              className={`w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-extrabold transition-all border ${
                copied
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md shadow-emerald-500/20'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-slate-950 stroke-[3]" />
                  <span>Link Copiado com Sucesso!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-cyan-400" />
                  <span>Copiar Link da Página</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* Floating Share Launcher Button */}
        <button
          type="button"
          onClick={() => setIsShareOpen(!isShareOpen)}
          className={`group relative flex items-center gap-2 px-4 py-3 rounded-full font-black text-xs sm:text-sm text-white shadow-xl transition-all duration-300 transform active:scale-95 border ${
            isShareOpen
              ? 'bg-cyan-600 border-cyan-400 shadow-cyan-500/40 ring-4 ring-cyan-500/20'
              : 'bg-slate-900/90 hover:bg-slate-900 border-cyan-500/50 shadow-slate-950/60 backdrop-blur-md hover:border-cyan-400'
          }`}
          aria-label="Compartilhar esta página"
        >
          {/* Pulse Glow Effect */}
          <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-40 blur-sm group-hover:opacity-100 transition duration-500 animate-pulse -z-10" />

          <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300 group-hover:rotate-12 transition-transform" />
          <span className="hidden xs:inline font-extrabold tracking-wide">Compartilhar</span>

          {/* Social Icons Badge */}
          <span className="flex items-center -space-x-1 ml-1 bg-slate-800/80 px-1.5 py-0.5 rounded-full border border-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="w-2 h-2 rounded-full bg-amber-400" />
          </span>
        </button>
      </div>

      {/* RIGHT-SIDE FLOATING ACTION BUTTONS (PHONE, WHATSAPP & BACK-TO-TOP) */}
      <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 pointer-events-none">
        <div className="flex flex-col items-end gap-3 pointer-events-auto">
          {/* Quick Direct Call Button */}
          <a
            href={`tel:${COMPANY_DATA.phoneRaw}`}
            id="floating-call-btn"
            className="group relative flex items-center justify-center p-3.5 sm:px-4 sm:py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-amber-500/30 border border-yellow-300/60 transition-all duration-300 hover:scale-105 active:scale-95"
            aria-label="Ligar Agora"
          >
            {/* Pulsing ring */}
            <span className="absolute -inset-1 rounded-full bg-amber-400/40 animate-ping -z-10" />

            <PhoneCall className="w-5 h-5 text-slate-950 animate-bounce" />
            <span className="hidden sm:inline ml-2 text-slate-950 uppercase font-black tracking-wider">
              Ligar Agora
            </span>
          </a>

          {/* Quick WhatsApp 24H Button */}
          <a
            href={COMPANY_DATA.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="floating-whatsapp-btn"
            className="group relative flex items-center justify-center p-3.5 sm:px-4 sm:py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black text-xs sm:text-sm shadow-2xl shadow-emerald-500/40 border border-emerald-300/50 transition-all duration-300 hover:scale-105 active:scale-95"
            aria-label="Atendimento WhatsApp 24 Horas"
          >
            {/* Pulsing Outer Glow */}
            <span className="absolute -inset-1 rounded-full bg-emerald-400/50 animate-pulse -z-10" />

            {/* Online Indicator Dot */}
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-slate-950" />
            </span>

            <MessageSquare className="w-5 h-5 fill-white text-emerald-500 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline ml-2 font-black tracking-wider uppercase">
              WhatsApp 24h
            </span>
          </a>

          {/* Back to Top Button */}
          {showScrollTop && (
            <button
              type="button"
              onClick={scrollToTop}
              id="floating-scroll-top-btn"
              className="group p-3 rounded-full bg-slate-900/90 hover:bg-slate-900 text-cyan-400 border border-cyan-500/50 hover:border-cyan-400 shadow-xl shadow-cyan-950/60 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-90"
              aria-label="Voltar ao topo da página"
            >
              <ArrowUp className="w-5 h-5 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};
