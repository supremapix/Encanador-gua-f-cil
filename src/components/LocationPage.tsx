import React from 'react';
import { MapPin, Phone, ShieldAlert, CheckCircle2, ChevronRight, MessageSquare, AlertTriangle, Building2, Navigation } from 'lucide-react';
import { EnhancedSEO } from './EnhancedSEO';
import { Breadcrumbs } from './Breadcrumbs';
import { LiteYouTube } from './LiteYouTube';
import { ContactForm } from './ContactForm';
import { COMPANY_DATA } from '../data/company';
import { PLUMBING_SERVICES } from '../data/services';

export interface LocationPageProps {
  name: string;
  slug: string;
  locationType: 'bairro' | 'vila' | 'cidade';
  officialName: string;
  regionOrParent: string;
  title: string;
  description: string;
  intro: string;
  geoContext: string;
  highlights: string[];
  nearbyAreas: string[];
  faq: { question: string; answer: string }[];
  canonical: string;
}

export const LocationPage: React.FC<LocationPageProps> = ({
  name,
  slug,
  locationType,
  officialName,
  regionOrParent,
  title,
  description,
  intro,
  geoContext,
  highlights,
  nearbyAreas,
  faq,
  canonical
}) => {
  const typeLabel =
    locationType === 'bairro'
      ? 'Bairro Oficial de Curitiba'
      : locationType === 'vila'
      ? 'Vila / Região Popular de Curitiba'
      : 'Município da Região Metropolitana';

  const breadcrumbs = [
    { label: locationType === 'bairro' ? 'Bairros' : locationType === 'vila' ? 'Vilas & Regiões' : 'Cidades', href: locationType === 'bairro' ? '/bairros' : locationType === 'vila' ? '/regioes' : '/cidades' },
    { label: name, href: canonical }
  ];

  const waMessage = encodeURIComponent(
    `Olá! Gostaria de solicitar atendimento de desentupimento em ${name}.`
  );
  const waUrl = `https://wa.me/${COMPANY_DATA.phoneRaw}?text=${waMessage}`;

  return (
    <>
      <EnhancedSEO
        title={title}
        description={description}
        canonical={canonical}
        breadcrumbs={breadcrumbs}
        faqItems={faq}
      />

      <main className="min-h-screen bg-[#F2F4F7] text-slate-800 font-body py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Breadcrumbs items={breadcrumbs} />

          {/* Hero Header */}
          <div className="bg-white border border-slate-300 rounded-md p-6 sm:p-10 shadow-sm relative space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#FFC107] text-[#0B2545] font-heading font-black text-xs uppercase px-3 py-1 rounded-sm shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#0B2545]" />
              <span>{typeLabel}</span>
            </div>

            <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#0B2545] uppercase tracking-wide leading-tight">
              {title}
            </h1>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-body max-w-3xl">
              {intro}
            </p>

            <div className="p-4 bg-[#F2F4F7] rounded-md border-l-4 border-[#1368AA] border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
              <p className="font-heading font-bold text-[#0B2545] flex items-center gap-1.5 uppercase text-sm">
                <ShieldAlert className="w-4 h-4 text-[#1368AA]" />
                <span>Atendimento Ágil com Saída da Sede na CIC Curitiba</span>
              </p>
              <p>
                Sede própria localizada na <strong className="text-[#0B2545]">Rua Luiz Maltaca, 36, CIC (Cidade Industrial), Curitiba - PR, CEP 81310-060</strong>. Atendemos a região de <strong className="text-[#0B2545]">{name}</strong> com rapidez técnica e consulta de disponibilidade de plantão.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0B2545] font-heading font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-md shadow-xs transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-[#0B2545]" />
                <span>Pedir Orçamento em {name} no WhatsApp</span>
              </a>
              <a
                href={`tel:${COMPANY_DATA.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-[#0B2545] hover:bg-[#07192F] text-white font-heading font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-md border border-[#1368AA] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FFC107]" />
                <span>Ligar: {COMPANY_DATA.phoneDisplay}</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-8">
              {/* Highlights */}
              <section className="bg-white border border-slate-300 rounded-md p-6 sm:p-8 space-y-5 shadow-xs">
                <div className="border-b border-slate-200 pb-2">
                  <h2 className="font-heading font-black text-2xl text-[#0B2545] uppercase flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-[#1368AA]" />
                    <span>Destaques do Atendimento em {name}</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {highlights.map((item, idx) => (
                    <div key={idx} className="p-3 bg-[#F2F4F7] rounded-md border border-slate-200 flex items-start gap-2 text-xs sm:text-sm font-bold text-slate-800">
                      <div className="w-2 h-2 rounded-full bg-[#1368AA] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <h3 className="font-heading font-bold text-lg text-[#0B2545] uppercase mb-1">
                    Geografia e Contexto do Atendimento
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                    {geoContext}
                  </p>
                </div>
              </section>

              {/* Services Grid */}
              <section className="bg-white border border-slate-300 rounded-md p-6 sm:p-8 space-y-4 shadow-xs">
                <div className="border-b border-slate-200 pb-2">
                  <h2 className="font-heading font-black text-2xl text-[#0B2545] uppercase">
                    Serviços Disponíveis para {name}
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {PLUMBING_SERVICES.map((serv) => (
                    <a
                      key={serv.slug}
                      href={`/servicos/${serv.slug}`}
                      className="p-3.5 rounded-md border border-slate-200 bg-[#F2F4F7] hover:bg-white hover:border-[#FFC107] transition-all group space-y-1 block"
                    >
                      <h3 className="font-heading font-bold text-base text-[#0B2545] group-hover:text-[#1368AA] flex items-center justify-between uppercase">
                        <span>{serv.title}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1368AA]" />
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-2 font-body">
                        {serv.shortDesc}
                      </p>
                    </a>
                  ))}
                </div>
              </section>

              {/* Guidelines */}
              <section className="bg-amber-50 border border-amber-300 rounded-md p-6 space-y-2 text-amber-950 font-body">
                <div className="flex items-center gap-2 font-heading font-extrabold text-base text-amber-900 uppercase">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                  <span>Orientações Úteis em Caso de Entupimento</span>
                </div>
                <ul className="text-xs sm:text-sm space-y-1.5 list-disc list-inside text-amber-900">
                  <li><strong>Não use produtos químicos corrosivos:</strong> Soda cáustica deforma tubulações de PVC e petrifica a gordura.</li>
                  <li><strong>Evite tentar cutucar com arames rígidos:</strong> Cabos improvisados podem perfurar a tubulação ou travar no cano.</li>
                  <li><strong>Envie foto ou vídeo no WhatsApp:</strong> Facilita a pré-avaliação do nosso técnico para indicação do equipamento.</li>
                </ul>
              </section>

              {/* Video */}
              <LiteYouTube
                contextTitle={`Atendimento de Desentupidora em ${name}`}
                contextText={`Veja como prestamos suporte para moradores e estabelecimentos de ${name} e toda a região de Curitiba.`}
              />

              {/* FAQ */}
              {faq.length > 0 && (
                <section className="bg-white border border-slate-300 rounded-md p-6 sm:p-8 space-y-4 shadow-xs">
                  <div className="border-b border-slate-200 pb-2">
                    <h2 className="font-heading font-black text-2xl text-[#0B2545] uppercase">
                      Perguntas Frequentes sobre Atendimento em {name}
                    </h2>
                  </div>
                  <div className="space-y-3 pt-1">
                    {faq.map((item, idx) => (
                      <div key={idx} className="p-4 bg-[#F2F4F7] rounded-md border border-slate-200 space-y-1">
                        <h3 className="font-heading font-bold text-base text-[#0B2545] uppercase">
                          {item.question}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                          {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Nearby */}
              {nearbyAreas.length > 0 && (
                <section className="bg-white border border-slate-300 rounded-md p-6 space-y-3">
                  <h3 className="font-heading font-bold text-lg text-[#0B2545] uppercase flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-[#1368AA]" />
                    <span>Regiões Próximas a {name}</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {nearbyAreas.map((area) => (
                      <a
                        key={area}
                        href="#local-search-section"
                        className="px-3 py-1.5 bg-[#F2F4F7] hover:bg-slate-200 text-slate-800 rounded-md text-xs font-bold border border-slate-300 transition-colors"
                      >
                        {area}
                      </a>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6 sticky top-20">
              <ContactForm defaultLocation={name} />

              <div className="bg-[#0B2545] text-white rounded-md p-6 border-2 border-[#1368AA] space-y-3 shadow-md">
                <div className="flex items-center gap-2 text-[#FFC107] font-heading font-bold text-sm uppercase">
                  <Building2 className="w-4 h-4" />
                  <span>Sede da Empresa</span>
                </div>
                <h4 className="font-heading font-black text-lg text-white uppercase">
                  Água Fácil Desentupidora
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-body">
                  Endereço Físico:<br />
                  <strong className="text-white">{COMPANY_DATA.address.street}</strong><br />
                  {COMPANY_DATA.address.neighborhood}<br />
                  {COMPANY_DATA.address.city} – {COMPANY_DATA.address.state}<br />
                  CEP {COMPANY_DATA.address.zipCode}
                </p>
                <div className="pt-2 border-t border-[#1368AA]/40 flex flex-col gap-2 font-heading font-bold text-xs uppercase">
                  <a
                    href={`tel:${COMPANY_DATA.phoneRaw}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#07192F] hover:bg-[#1368AA]/40 text-white py-2.5 px-4 rounded-md transition-colors border border-[#1368AA]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#FFC107]" />
                    <span>Ligar para {COMPANY_DATA.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
