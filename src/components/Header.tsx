import React, { useState } from 'react';
import { Phone, Menu, X, ShieldAlert, MapPin, MessageSquare, Clock } from 'lucide-react';
import { COMPANY_DATA } from '../data/company';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0B2545] text-white shadow-md">
      {/* Top Banner Bar with Warning Stripe Accent */}
      <div className="bg-[#07192F] text-slate-200 text-xs sm:text-sm py-1.5 px-4 border-b border-[#1368AA]/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#FFC107] shrink-0" />
            <span className="truncate font-medium text-slate-300">
              Sede: Rua Luiz Maltaca, 36, CIC – Curitiba/PR
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="tag-24h text-[11px] py-0.5 px-2">
              <Clock className="w-3 h-3 text-[#0B2545]" />
              PLANTÃO 24H
            </span>
            <a
              href={`tel:${COMPANY_DATA.phoneRaw}`}
              className="text-[#FFC107] hover:underline font-bold flex items-center gap-1"
              id="top-call-link"
            >
              <Phone className="w-3 h-3" />
              {COMPANY_DATA.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Thin Warning Stripe Line */}
      <div className="h-1 warning-stripe-sm w-full" />

      {/* Main Header Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-3 group focus:outline-none" id="header-brand-logo">
          <div className="w-10 h-10 rounded-md bg-[#1368AA] border border-[#FFC107]/40 flex items-center justify-center text-white shadow-sm group-hover:bg-[#1577c2] transition-colors">
            <ShieldAlert className="w-6 h-6 text-[#FFC107]" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-xl sm:text-2xl text-white leading-none tracking-wide">
              ÁGUA FÁCIL <span className="text-[#FFC107]">DESENTUPIDORA</span>
            </span>
            <span className="text-[11px] font-bold text-slate-300 tracking-wider uppercase font-body mt-0.5">
              CURITIBA & REGIÃO METROPOLITANA
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-bold text-slate-200 uppercase font-heading tracking-wider">
          <a href="/" className="hover:text-[#FFC107] transition-colors py-1 border-b-2 border-transparent hover:border-[#FFC107]">
            Início
          </a>
          <a href="/servicos" className="hover:text-[#FFC107] transition-colors py-1 border-b-2 border-transparent hover:border-[#FFC107]">
            Serviços
          </a>
          <a href="/desentupidora-curitiba" className="hover:text-[#FFC107] transition-colors py-1 border-b-2 border-transparent hover:border-[#FFC107]">
            Curitiba
          </a>
          <a href="/desentupidora-cic" className="hover:text-[#FFC107] transition-colors py-1 border-b-2 border-transparent hover:border-[#FFC107]">
            CIC Sede
          </a>
          <a href="/bairros" className="hover:text-[#FFC107] transition-colors py-1 border-b-2 border-transparent hover:border-[#FFC107]">
            Bairros
          </a>
          <a href="/cidades" className="hover:text-[#FFC107] transition-colors py-1 border-b-2 border-transparent hover:border-[#FFC107]">
            Cidades RMC
          </a>
          <a href="/duvidas" className="hover:text-[#FFC107] transition-colors py-1 border-b-2 border-transparent hover:border-[#FFC107]">
            Dúvidas
          </a>
          <a href="/contato" className="hover:text-[#FFC107] transition-colors py-1 border-b-2 border-transparent hover:border-[#FFC107]">
            Contato
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={COMPANY_DATA.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="header-whatsapp-btn"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0B2545] font-black text-xs uppercase font-heading tracking-wider px-4 py-2.5 rounded-md shadow-sm transition-all active:scale-95"
          >
            <MessageSquare className="w-4 h-4 fill-[#0B2545]" />
            <span>WhatsApp {COMPANY_DATA.phoneDisplay}</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-md text-slate-200 hover:bg-[#1368AA]/40 transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-label="Alternar menu de navegação"
          id="mobile-menu-toggle-btn"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07192F] border-t border-[#1368AA]/40 px-4 pt-3 pb-6 space-y-3 font-heading uppercase tracking-wider text-sm font-bold">
          <nav className="flex flex-col space-y-1 text-slate-200">
            <a href="/" className="px-3 py-2 rounded-md hover:bg-[#1368AA]/30 hover:text-[#FFC107]">
              Início
            </a>
            <a href="/servicos" className="px-3 py-2 rounded-md hover:bg-[#1368AA]/30 hover:text-[#FFC107]">
              Serviços de Desentupimento
            </a>
            <a href="/desentupidora-curitiba" className="px-3 py-2 rounded-md hover:bg-[#1368AA]/30 hover:text-[#FFC107]">
              Desentupidora Curitiba
            </a>
            <a href="/desentupidora-cic" className="px-3 py-2 rounded-md hover:bg-[#1368AA]/30 hover:text-[#FFC107]">
              Desentupidora CIC (Sede)
            </a>
            <a href="/bairros" className="px-3 py-2 rounded-md hover:bg-[#1368AA]/30 hover:text-[#FFC107]">
              Bairros de Curitiba
            </a>
            <a href="/cidades" className="px-3 py-2 rounded-md hover:bg-[#1368AA]/30 hover:text-[#FFC107]">
              Cidades na RMC
            </a>
            <a href="/duvidas" className="px-3 py-2 rounded-md hover:bg-[#1368AA]/30 hover:text-[#FFC107]">
              Dúvidas Frequentes
            </a>
            <a href="/sobre" className="px-3 py-2 rounded-md hover:bg-[#1368AA]/30 hover:text-[#FFC107]">
              Sobre a Empresa
            </a>
            <a href="/contato" className="px-3 py-2 rounded-md hover:bg-[#1368AA]/30 hover:text-[#FFC107]">
              Contato
            </a>
          </nav>
          <div className="pt-2 border-t border-[#1368AA]/40 flex flex-col gap-2 font-body">
            <a
              href={COMPANY_DATA.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full justify-center inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0B2545] font-black text-sm px-4 py-3 rounded-md shadow"
            >
              <MessageSquare className="w-4 h-4 fill-[#0B2545]" />
              <span>WhatsApp: {COMPANY_DATA.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
