import React from 'react';
import { MapPin, ShieldAlert, ChevronRight, MessageSquare, Phone, Wrench } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LiteYouTube } from '../components/LiteYouTube';
import { ContactForm } from '../components/ContactForm';
import { POPULAR_AREAS } from '../data/popularAreas';
import { COMPANY_DATA } from '../data/company';

export const CicPage: React.FC = () => {
  const canonical = `${COMPANY_DATA.baseUrl}/desentupidora-cic`;
  const breadcrumbs = [{ label: 'Desentupidora na CIC', href: canonical }];

  const cicVilas = POPULAR_AREAS.filter(p => p.parentNeighborhood.includes('Cidade Industrial'));

  const waMessage = encodeURIComponent('Olá! Gostaria de solicitar um orçamento para desentupimento na CIC (Cidade Industrial).');
  const waUrl = `https://wa.me/${COMPANY_DATA.phoneRaw}?text=${waMessage}`;

  return (
    <>
      <EnhancedSEO
        title="Desentupidora na CIC Curitiba | Sede na Rua Luiz Maltaca"
        description="Desentupidora na Cidade Industrial de Curitiba (CIC). Atendimento direto da nossa sede na Rua Luiz Maltaca, 36. Agilidade para desentupir pias, vasos, ralos e esgoto."
        canonical={canonical}
        breadcrumbs={breadcrumbs}
      />

      <main className="min-h-screen bg-[#F2F4F7] text-slate-800 font-body py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Breadcrumbs items={breadcrumbs} />

          {/* Hero Header for CIC */}
          <div className="bg-white border border-slate-300 rounded-md p-6 sm:p-10 shadow-sm space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#FFC107] text-[#0B2545] font-heading font-black text-xs uppercase px-3 py-1 rounded-sm shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#0B2545]" />
              <span>SEDE PRINCIPAL DA EMPRESA NA CIC</span>
            </div>

            <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#0B2545] uppercase tracking-wide">
              Desentupidora na Cidade Industrial de Curitiba – CIC
            </h1>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-body">
              A Cidade Industrial de Curitiba (CIC) é o maior bairro da capital paranaense e onde fica localizada a sede física e operacional da <strong className="text-[#0B2545]">Água Fácil Desentupidora</strong>, no endereço:
            </p>

            <div className="p-5 bg-[#0B2545] text-white rounded-md border-2 border-[#1368AA] space-y-2 shadow-md">
              <div className="flex items-center gap-2 font-heading font-bold text-[#FFC107] text-sm uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4 text-[#FFC107]" />
                <span>Sede Operacional Física:</span>
              </div>
              <p className="text-base sm:text-xl font-heading font-black text-white uppercase">
                Rua Luiz Maltaca, 36, CIC (Cidade Industrial), Curitiba - PR, CEP 81310-060
              </p>
              <p className="text-xs text-slate-300 font-body">
                A proximidade com todas as vilas e conjuntos da CIC garante deslocamento rápido para desentupir pias, vasos, ralos, esgoto e caixas de gordura.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0B2545] font-heading font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-md shadow-xs transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-[#0B2545]" />
                <span>Pedir Orçamento na CIC no WhatsApp</span>
              </a>
              <a
                href={`tel:${COMPANY_DATA.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-[#0B2545] hover:bg-[#07192F] text-white font-heading font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-md border border-[#1368AA] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FFC107]" />
                <span>Ligar: {COMPANY_DATA.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Vilas of CIC */}
          <section className="bg-white border border-slate-300 rounded-md p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="border-b border-slate-200 pb-2">
              <h2 className="font-heading font-black text-2xl text-[#0B2545] uppercase">
                Vilas e Conjuntos Habitacionais Atendidos na CIC
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-body">
              Atendemos todas as vilas e loteamentos da CIC com saída direta da Rua Luiz Maltaca, 36:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
              {cicVilas.map((v) => (
                <a
                  key={v.slug}
                  href={`/regioes/${v.slug}`}
                  className="p-3.5 bg-[#F2F4F7] hover:bg-white rounded-md border border-slate-300 hover:border-[#FFC107] transition-all flex items-center justify-between group"
                >
                  <div>
                    <h3 className="font-heading font-bold text-base text-[#0B2545] group-hover:text-[#1368AA] uppercase">
                      {v.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-body">
                      Vila / Conjunto na CIC
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1368AA]" />
                </a>
              ))}
            </div>
          </section>

          {/* Contextual Video */}
          <LiteYouTube
            contextTitle="Desentupidora na CIC Curitiba"
            contextText="Conheça a atuação da Água Fácil Desentupidora a partir da nossa sede na Rua Luiz Maltaca, 36 – CIC."
          />

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <ContactForm defaultLocation="Cidade Industrial de Curitiba – CIC" />
          </div>
        </div>
      </main>
    </>
  );
};
