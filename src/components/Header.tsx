import React, { useState } from 'react';
import { Phone, Menu, X, Droplet, MapPin, Wrench } from 'lucide-react';
import { COMPANY_DATA } from '../data/company';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs">
      {/* Top Banner Bar */}
      <div className="bg-cyan-900 text-white text-xs sm:text-sm py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
            <span className="truncate">Sede na CIC: Rua das Águias, 320 – Curitiba/PR</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-cyan-200">Atendimento em Curitiba e Região Metropolitana</span>
            <a
              href={`tel:${COMPANY_DATA.phoneRaw}`}
              className="font-bold underline hover:text-cyan-200 transition-colors flex items-center gap-1"
              id="top-call-link"
            >
              <Phone className="w-3 h-3" />
              {COMPANY_DATA.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-2.5 group focus:outline-none" id="header-brand-logo">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-800 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <Droplet className="w-6 h-6 fill-white/20" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white leading-tight tracking-tight">
              ÁGUA FÁCIL <span className="text-cyan-600 dark:text-cyan-400">24H</span>
            </span>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wider">
              ENCANADOR EM CURITIBA
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700 dark:text-slate-200">
          <a href="/" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            Início
          </a>
          <a href="/servicos" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            Serviços
          </a>
          <a href="/bairros" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            Bairros
          </a>
          <a href="/regioes" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            Vilas & Regiões
          </a>
          <a href="/cidades" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            Cidades
          </a>
          <a href="/duvidas" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            Dúvidas
          </a>
          <a href="/sobre" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            Sobre
          </a>
          <a href="/contato" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            Contato
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={COMPANY_DATA.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="header-whatsapp-btn"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all active:scale-95"
          >
            <Wrench className="w-4 h-4" />
            <span>WhatsApp (41) 99569-4912</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-label="Alternar menu de navegação"
          id="mobile-menu-toggle-btn"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2 text-base font-medium text-slate-800 dark:text-slate-100">
            <a href="/" className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
              Início
            </a>
            <a href="/servicos" className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
              Serviços de Encanador
            </a>
            <a href="/encanador-curitiba" className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
              Encanador Curitiba
            </a>
            <a href="/encanador-cic" className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
              Encanador CIC
            </a>
            <a href="/bairros" className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
              75 Bairros de Curitiba
            </a>
            <a href="/regioes" className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
              Vilas e Regiões Populares
            </a>
            <a href="/cidades" className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
              15 Cidades Atendidas
            </a>
            <a href="/duvidas" className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
              Dúvidas Frequentes
            </a>
            <a href="/sobre" className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
              Sobre a Empresa
            </a>
            <a href="/contato" className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
              Contato
            </a>
          </nav>
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <a
              href={COMPANY_DATA.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full justify-center inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-4 py-3 rounded-lg shadow"
            >
              <Wrench className="w-4 h-4" />
              <span>WhatsApp: (41) 99569-4912</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
