import React from 'react';
import { MapPin, Phone, MessageSquare, ShieldCheck, Droplet } from 'lucide-react';
import { COMPANY_DATA } from '../data/company';
import { SupremaCredit } from './SupremaCredit';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-cyan-600 flex items-center justify-center text-white">
                <Droplet className="w-5 h-5 fill-white/20" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                ÁGUA FÁCIL <span className="text-cyan-400">24H</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Atendimento especializado de encanador para residências, condomínios e estabelecimentos comerciais em Curitiba e Região Metropolitana.
            </p>
            <div className="space-y-2 text-xs sm:text-sm pt-1">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.address.formatted}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${COMPANY_DATA.phoneRaw}`} className="hover:text-emerald-400 transition-colors font-bold">
                  {COMPANY_DATA.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="pt-2">
              <a
                href={COMPANY_DATA.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg shadow transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Atendimento pelo WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Principal Services */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Serviços de Encanamento
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="/servicos/reparo-vazamentos" className="hover:text-cyan-400 transition-colors">Conserto de Vazamentos</a>
              </li>
              <li>
                <a href="/servicos/troca-torneiras-registros" className="hover:text-cyan-400 transition-colors">Troca de Torneiras e Registros</a>
              </li>
              <li>
                <a href="/servicos/manutencao-hidraulica" className="hover:text-cyan-400 transition-colors">Manutenção Hidráulica Geral</a>
              </li>
              <li>
                <a href="/servicos/instalacao-loucas-metais" className="hover:text-cyan-400 transition-colors">Instalação de Louças e Vasos</a>
              </li>
              <li>
                <a href="/servicos/desentupimento-emergencial" className="hover:text-cyan-400 transition-colors">Desentupimento de Pias e Ralos</a>
              </li>
              <li>
                <a href="/servicos/troca-tubulacoes" className="hover:text-cyan-400 transition-colors">Troca de Tubulações de PVC/Cobre</a>
              </li>
              <li>
                <a href="/servicos/inspecao-diagnostico" className="hover:text-cyan-400 transition-colors">Inspeção Hidráulica Preventiva</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Principal Neighborhoods & Areas */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Regiões em Destaque
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="/encanador-cic" className="hover:text-cyan-400 transition-colors font-semibold text-cyan-300">Cidade Industrial de Curitiba (CIC)</a>
              </li>
              <li>
                <a href="/bairros/agua-verde" className="hover:text-cyan-400 transition-colors">Encanador no Água Verde</a>
              </li>
              <li>
                <a href="/bairros/batel" className="hover:text-cyan-400 transition-colors">Encanador no Batel</a>
              </li>
              <li>
                <a href="/bairros/portao" className="hover:text-cyan-400 transition-colors">Encanador no Portão</a>
              </li>
              <li>
                <a href="/bairros/centro" className="hover:text-cyan-400 transition-colors">Encanador no Centro</a>
              </li>
              <li>
                <a href="/bairros/boqueirao" className="hover:text-cyan-400 transition-colors">Encanador no Boqueirão</a>
              </li>
              <li>
                <a href="/regioes/vila-sandra" className="hover:text-cyan-400 transition-colors">Vila Sandra (CIC)</a>
              </li>
              <li>
                <a href="/regioes/caiua" className="hover:text-cyan-400 transition-colors">Conjunto Caiuá</a>
              </li>
            </ul>
          </div>

          {/* Column 4: RMC Cities & Institutional Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Cidades & Institucional
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="/cidades/sao-jose-dos-pinhais" className="hover:text-cyan-400 transition-colors">São José dos Pinhais</a>
              </li>
              <li>
                <a href="/cidades/pinhais" className="hover:text-cyan-400 transition-colors">Pinhais</a>
              </li>
              <li>
                <a href="/cidades/araucaria" className="hover:text-cyan-400 transition-colors">Araucária</a>
              </li>
              <li>
                <a href="/cidades/colombo" className="hover:text-cyan-400 transition-colors">Colombo</a>
              </li>
              <li>
                <a href="/duvidas" className="hover:text-cyan-400 transition-colors">Dúvidas Frequentes (FAQ)</a>
              </li>
              <li>
                <a href="/sobre" className="hover:text-cyan-400 transition-colors">Sobre a Empresa</a>
              </li>
              <li>
                <a href="/sitemap" className="hover:text-cyan-400 transition-colors">Mapa do Site (HTML)</a>
              </li>
              <li>
                <a href="/politica-de-privacidade" className="hover:text-cyan-400 transition-colors">Política de Privacidade</a>
              </li>
              <li>
                <a href="/termos-de-uso" className="hover:text-cyan-400 transition-colors">Termos de Uso</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-slate-900 pt-6 text-center text-xs text-slate-500 space-y-2 max-w-4xl mx-auto">
          <p>
            © {new Date().getFullYear()} Encanador Água Fácil 24H. Todos os direitos reservados. URL Oficial e Canônica: <a href={COMPANY_DATA.baseUrl} className="underline hover:text-slate-300">{COMPANY_DATA.baseUrl}</a>
          </p>
          <p>
            Atendimento residencial e comercial em Curitiba/PR (Rua das Águias, 320 – Cidade Industrial de Curitiba – CIC) e municípios num raio aproximado de até 100 km. Consulte disponibilidade técnica.
          </p>
        </div>

        {/* Suprema Credit */}
        <SupremaCredit />
      </div>
    </footer>
  );
};
