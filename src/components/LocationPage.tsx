import React from 'react';
import { MapPin, Phone, ShieldCheck, CheckCircle2, ChevronRight, Wrench, AlertTriangle, Building2, Navigation } from 'lucide-react';
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

  return (
    <>
      <EnhancedSEO
        title={title}
        description={description}
        canonical={canonical}
        breadcrumbs={breadcrumbs}
        faqItems={faq}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Breadcrumb Navigation */}
          <Breadcrumbs items={breadcrumbs} />

          {/* Hero Header */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>{typeLabel}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                {title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {intro}
              </p>

              {/* Geographic Disclaimer according to guidelines */}
              <div className="p-4 bg-slate-100 dark:bg-slate-800/80 rounded-xl border-l-4 border-cyan-600 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <p className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-600" />
                  <span>Área Atendida com Saída Técnica da CIC Curitiba</span>
                </p>
                <p>
                  Nossa sede técnica principal está localizada na <strong className="text-slate-900 dark:text-white">Rua das Águias, 320 – Cidade Industrial de Curitiba – CIC, Curitiba – PR, CEP 81450-370</strong>. Atendemos a região de <strong className="text-slate-900 dark:text-white">{name}</strong> mediante deslocamento técnico e consulta de disponibilidade imediata.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href={COMPANY_DATA.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-95"
                >
                  <Wrench className="w-5 h-5" />
                  <span>Solicitar Atendimento em {name}</span>
                </a>
                <a
                  href={`tel:${COMPANY_DATA.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-base px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Ligar: {COMPANY_DATA.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left 2 Columns: Detailed Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Highlights & Services */}
              <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-cyan-600 shrink-0" />
                  <span>Destaques do Atendimento Hidráulico em {name}</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {highlights.map((item, idx) => (
                    <div key={idx} className="p-3.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/60 flex items-start gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-cyan-600 mt-2 shrink-0" />
                      <span className="text-sm text-slate-800 dark:text-slate-200 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                    Geografia e Contexto do Atendimento Local
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {geoContext}
                  </p>
                </div>
              </section>

              {/* Available Services Grid */}
              <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Serviços Oferecidos para {name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {PLUMBING_SERVICES.map((serv) => (
                    <a
                      key={serv.slug}
                      href={`/servicos/${serv.slug}`}
                      className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500 bg-slate-50 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800 transition-all group space-y-2 block"
                    >
                      <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 flex items-center justify-between">
                        <span>{serv.title}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-600" />
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                        {serv.shortDesc}
                      </p>
                    </a>
                  ))}
                </div>
              </section>

              {/* Useful Guidelines before calling */}
              <section className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 rounded-2xl p-6 space-y-3 text-amber-900 dark:text-amber-200">
                <div className="flex items-center gap-2 font-bold text-base text-amber-900 dark:text-amber-100">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                  <span>Orientações Úteis em Caso de Vazamento em {name}</span>
                </div>
                <ul className="text-xs sm:text-sm space-y-2 list-disc list-inside text-amber-800 dark:text-amber-300">
                  <li><strong>Feche o registro geral:</strong> Se houver vazamento ativo em torneiras, canos ou sanitários, feche o registro do seu imóvel imediatamente para estancar a água.</li>
                  <li><strong>Verifique se há infiltrações visíveis:</strong> Manchas na pintura ou estufamentos em azulejos indicam umidade acumulada na parede.</li>
                  <li><strong>Fale conosco pelo WhatsApp:</strong> Envie uma foto ou pequeno vídeo do local para recebermos o diagnóstico prévio e agilizarmos o atendimento.</li>
                </ul>
              </section>

              {/* Contextual Video Embed */}
              <LiteYouTube
                contextTitle={`Atendimento de Encanador em ${name}`}
                contextText={`Veja como prestamos suporte para moradores e estabelecimentos de ${name} e toda a região de Curitiba com transparência e rapidez.`}
              />

              {/* Local FAQs */}
              {faq.length > 0 && (
                <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Perguntas Frequentes sobre Atendimento em {name}
                  </h2>
                  <div className="space-y-4">
                    {faq.map((item, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/60 space-y-1.5">
                        <h3 className="font-bold text-base text-slate-900 dark:text-white">
                          {item.question}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Nearby Areas */}
              {nearbyAreas.length > 0 && (
                <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Navigation className="w-5 h-5 text-cyan-600" />
                    <span>Outros Bairros e Regiões Próximos a {name}</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {nearbyAreas.map((area) => (
                      <a
                        key={area}
                        href="#local-search-section"
                        className="px-3.5 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-cyan-100 dark:hover:bg-cyan-950 text-slate-700 dark:text-slate-300 hover:text-cyan-900 dark:hover:text-cyan-300 rounded-lg text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-colors"
                      >
                        {area}
                      </a>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Right Column: Contact Sidebar & Company Info */}
            <div className="space-y-6 sticky top-20">
              <ContactForm defaultLocation={name} />

              <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 space-y-4 shadow-md">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider">
                  <Building2 className="w-4 h-4" />
                  <span>Sede Oficial da Empresa</span>
                </div>
                <h4 className="font-extrabold text-lg text-white">
                  Encanador Água Fácil 24H
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Endereço Oficial:<br />
                  <strong className="text-white">{COMPANY_DATA.address.street}</strong><br />
                  {COMPANY_DATA.address.neighborhood}<br />
                  {COMPANY_DATA.address.city} – {COMPANY_DATA.address.state}<br />
                  CEP {COMPANY_DATA.address.zipCode}
                </p>
                <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
                  <a
                    href={`tel:${COMPANY_DATA.phoneRaw}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs py-2.5 px-4 rounded-lg transition-colors border border-slate-700"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Ligar para (41) 99569-4912</span>
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
