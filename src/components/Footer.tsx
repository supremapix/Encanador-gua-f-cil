import React from 'react';
import { MapPin, Phone, MessageSquare, ShieldAlert, Clock, Mail } from 'lucide-react';
import { COMPANY_DATA } from '../data/company';
import { SupremaCredit } from './SupremaCredit';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B2545] text-slate-300 pt-12 pb-8 border-t border-[#1368AA]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-md bg-[#1368AA] border border-[#FFC107]/40 flex items-center justify-center text-white">
                <ShieldAlert className="w-6 h-6 text-[#FFC107]" />
              </div>
              <span className="font-heading font-black text-xl text-white tracking-wide">
                ÁGUA FÁCIL <span className="text-[#FFC107]">DESENTUPIDORA</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
              Atendimento técnico de desentupimento residencial, comercial e predial em todos os 75 bairros de Curitiba e Região Metropolitana.
            </p>

            <div className="space-y-2 text-xs sm:text-sm pt-1">
              <div className="flex items-start gap-2 text-slate-200">
                <MapPin className="w-4 h-4 text-[#FFC107] shrink-0 mt-0.5" />
                <span>Base: {COMPANY_DATA.address.formatted}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>WhatsApp: </span>
                <a href={`tel:${COMPANY_DATA.phoneRaw}`} className="hover:text-[#25D366] transition-colors font-bold text-white">
                  {COMPANY_DATA.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Phone className="w-4 h-4 text-[#FFC107] shrink-0" />
                <span>Fixo: </span>
                <a href={`tel:${COMPANY_DATA.landlineRaw}`} className="hover:text-[#FFC107] transition-colors font-bold text-white">
                  {COMPANY_DATA.landlineDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Clock className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Atendimento 24 horas sob consulta</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Mail className="w-4 h-4 text-[#1368AA] shrink-0" />
                <a href={`mailto:${COMPANY_DATA.email}`} className="hover:text-amber-300 transition-colors truncate">
                  {COMPANY_DATA.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_DATA.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0B2545] font-black font-heading text-xs uppercase tracking-wider px-4 py-2.5 rounded-md shadow transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-[#0B2545]" />
                <span>Pedir Orçamento no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Principal Services */}
          <div className="space-y-3">
            <h3 className="text-base font-heading font-extrabold uppercase tracking-wider text-[#FFC107] border-b border-[#1368AA]/40 pb-2">
              Serviços de Desentupimento
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-body">
              <li>
                <a href="/servicos/desentupimento-de-pia" className="hover:text-[#FFC107] transition-colors">Desentupimento de Pia</a>
              </li>
              <li>
                <a href="/servicos/desentupimento-de-vaso-sanitario" className="hover:text-[#FFC107] transition-colors">Desentupimento de Vaso Sanitário</a>
              </li>
              <li>
                <a href="/servicos/desentupimento-de-ralo" className="hover:text-[#FFC107] transition-colors">Desentupimento de Ralo</a>
              </li>
              <li>
                <a href="/servicos/desentupimento-de-esgoto" className="hover:text-[#FFC107] transition-colors">Desentupimento de Esgoto</a>
              </li>
              <li>
                <a href="/servicos/desentupimento-caixa-de-gordura" className="hover:text-[#FFC107] transition-colors">Limpeza de Caixa de Gordura</a>
              </li>
              <li>
                <a href="/servicos/reparo-vazamentos" className="hover:text-[#FFC107] transition-colors">Caça Vazamentos e Reparos</a>
              </li>
              <li>
                <a href="/servicos/troca-torneiras-registros" className="hover:text-[#FFC107] transition-colors">Troca de Torneiras e Registros</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Principal Neighborhoods & Areas */}
          <div className="space-y-3">
            <h3 className="text-base font-heading font-extrabold uppercase tracking-wider text-[#FFC107] border-b border-[#1368AA]/40 pb-2">
              Bairros em Destaque
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-body">
              <li>
                <a href="/desentupidora-cic" className="hover:text-[#FFC107] transition-colors font-bold text-white">Cidade Industrial (CIC - Sede)</a>
              </li>
              <li>
                <a href="/bairro/agua-verde" className="hover:text-[#FFC107] transition-colors">Desentupidora Água Verde</a>
              </li>
              <li>
                <a href="/bairro/batel" className="hover:text-[#FFC107] transition-colors">Desentupidora Batel</a>
              </li>
              <li>
                <a href="/bairro/portao" className="hover:text-[#FFC107] transition-colors">Desentupidora Portão</a>
              </li>
              <li>
                <a href="/bairro/centro" className="hover:text-[#FFC107] transition-colors">Desentupidora Centro</a>
              </li>
              <li>
                <a href="/bairro/boqueirao" className="hover:text-[#FFC107] transition-colors">Desentupidora Boqueirão</a>
              </li>
              <li>
                <a href="/regioes/vila-sandra" className="hover:text-[#FFC107] transition-colors">Vila Sandra (CIC)</a>
              </li>
              <li>
                <a href="/regioes/caiua" className="hover:text-[#FFC107] transition-colors">Conjunto Caiuá</a>
              </li>
            </ul>
          </div>

          {/* Column 4: RMC Cities & Institutional Links */}
          <div className="space-y-3">
            <h3 className="text-base font-heading font-extrabold uppercase tracking-wider text-[#FFC107] border-b border-[#1368AA]/40 pb-2">
              Cidades RMC & Links
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-body">
              <li>
                <a href="/cidade/sao-jose-dos-pinhais" className="hover:text-[#FFC107] transition-colors">São José dos Pinhais</a>
              </li>
              <li>
                <a href="/cidade/araucaria" className="hover:text-[#FFC107] transition-colors">Araucária</a>
              </li>
              <li>
                <a href="/cidade/pinhais" className="hover:text-[#FFC107] transition-colors">Pinhais</a>
              </li>
              <li>
                <a href="/cidade/colombo" className="hover:text-[#FFC107] transition-colors">Colombo</a>
              </li>
              <li>
                <a href="/duvidas" className="hover:text-[#FFC107] transition-colors">Dúvidas Frequentes</a>
              </li>
              <li>
                <a href="/sobre" className="hover:text-[#FFC107] transition-colors">Sobre a Empresa</a>
              </li>
              <li>
                <a href="/sitemap" className="hover:text-[#FFC107] transition-colors">Mapa do Site</a>
              </li>
              <li>
                <a href="/politica-de-privacidade" className="hover:text-[#FFC107] transition-colors">Política de Privacidade</a>
              </li>
              <li>
                <a href="/termos-de-uso" className="hover:text-[#FFC107] transition-colors">Termos de Uso</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-[#1368AA]/30 pt-6 text-center text-xs text-slate-400 space-y-2 max-w-4xl mx-auto font-body">
          <p>
            © {new Date().getFullYear()} Água Fácil Desentupidora. Todos os direitos reservados. URL Oficial: <a href={COMPANY_DATA.baseUrl} className="underline hover:text-white">{COMPANY_DATA.baseUrl}</a>
          </p>
          <p>
            Atendimento técnico residencial, comercial e predial em Curitiba/PR (Rua Luiz Maltaca, 36 – CIC) e municípios da Região Metropolitana.
          </p>
        </div>

        {/* Suprema Credit Component */}
        <SupremaCredit />
      </div>
    </footer>
  );
};
