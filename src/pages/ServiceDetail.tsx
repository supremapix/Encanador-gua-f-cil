import React from 'react';
import { ShieldAlert, CheckCircle2, AlertCircle, MessageSquare, Phone } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactForm } from '../components/ContactForm';
import { LiteYouTube } from '../components/LiteYouTube';
import { PlumbingService } from '../types';
import { COMPANY_DATA } from '../data/company';

interface ServiceDetailProps {
  service: PlumbingService;
}

export const ServiceDetailPage: React.FC<ServiceDetailProps> = ({ service }) => {
  const canonical = `${COMPANY_DATA.baseUrl}/servicos/${service.slug}`;
  const breadcrumbs = [
    { label: 'Serviços', href: '/servicos' },
    { label: service.title, href: canonical }
  ];

  const waMessage = encodeURIComponent(
    `Olá! Gostaria de solicitar um orçamento para ${service.title} em Curitiba.`
  );
  const waUrl = `https://wa.me/${COMPANY_DATA.phoneRaw}?text=${waMessage}`;

  return (
    <>
      <EnhancedSEO
        title={`${service.title} em Curitiba | Água Fácil Desentupidora`}
        description={`${service.shortDesc} Atendimento técnico para residências, condomínios e comércios em Curitiba e Região Metropolitana.`}
        canonical={canonical}
        breadcrumbs={breadcrumbs}
        faqItems={service.faq}
        ogImage={service.imageUrl}
      />

      <main className="min-h-screen bg-[#F2F4F7] text-slate-800 font-body py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Breadcrumbs items={breadcrumbs} />

          {/* Hero Section with Image */}
          <div className="bg-white border border-slate-300 rounded-md overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* Image Column */}
              <div className="lg:col-span-5 relative bg-slate-100 min-h-[260px] lg:min-h-full border-b lg:border-b-0 lg:border-r border-slate-300">
                <img
                  src={service.imageUrl}
                  alt={service.imageAlt}
                  loading="eager"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#0B2545] text-[#FFC107] font-heading font-black text-xs uppercase px-3 py-1 rounded-sm shadow-md border border-[#FFC107]/40">
                  ATENDIMENTO EM CURITIBA
                </div>
              </div>

              {/* Info Column */}
              <div className="lg:col-span-7 p-6 sm:p-8 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 bg-[#FFC107] text-[#0B2545] px-3 py-1 rounded-sm font-heading font-black text-xs uppercase shadow-xs">
                    <ShieldAlert className="w-4 h-4 text-[#0B2545]" />
                    <span>SERVIÇO TÉCNICO ÁGUA FÁCIL</span>
                  </div>

                  <h1 className="font-heading font-black text-3xl sm:text-4xl text-[#0B2545] uppercase tracking-wide leading-tight">
                    {service.title} em Curitiba
                  </h1>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-body">
                    {service.fullDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-3">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0B2545] font-heading font-black text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-md shadow-xs transition-all active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4 fill-[#0B2545]" />
                    <span>Pedir Orçamento no WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${COMPANY_DATA.phoneRaw}`}
                    className="inline-flex items-center gap-2 bg-[#0B2545] hover:bg-[#07192F] text-white font-heading font-black text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-md border border-[#1368AA] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#FFC107]" />
                    <span>Ligar: {COMPANY_DATA.phoneDisplay}</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-8">
              {/* What is included */}
              <section className="bg-white border border-slate-300 rounded-md p-6 sm:p-8 space-y-4 shadow-xs">
                <div className="border-b border-slate-200 pb-2">
                  <h2 className="font-heading font-black text-2xl text-[#0B2545] uppercase flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-[#1368AA]" />
                    <span>O Que Está Incluído Neste Serviço</span>
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="p-3 bg-[#F2F4F7] rounded-md border border-slate-200 flex items-start gap-2 text-xs sm:text-sm font-bold text-slate-800">
                      <div className="w-2 h-2 rounded-full bg-[#1368AA] mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Common Problems */}
              <section className="bg-white border border-slate-300 rounded-md p-6 sm:p-8 space-y-4 shadow-xs">
                <div className="border-b border-slate-200 pb-2">
                  <h2 className="font-heading font-black text-2xl text-[#0B2545] uppercase flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-amber-600" />
                    <span>Sinais e Problemas Que Resolvemos</span>
                  </h2>
                </div>
                <ul className="space-y-2 pt-2">
                  {service.commonProblems.map((prob, idx) => (
                    <li key={idx} className="p-3 bg-amber-50 border border-amber-200 rounded-md text-xs sm:text-sm font-bold text-amber-900 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-600 shrink-0" />
                      <span>{prob}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Video */}
              <LiteYouTube
                contextTitle={`Vídeo sobre ${service.title}`}
                contextText={`Assista e entenda como a Água Fácil Desentupidora realiza ${service.title.toLowerCase()} com máquinas profissionais em Curitiba.`}
              />

              {/* FAQ */}
              {service.faq.length > 0 && (
                <section className="bg-white border border-slate-300 rounded-md p-6 sm:p-8 space-y-4 shadow-xs">
                  <div className="border-b border-slate-200 pb-2">
                    <h2 className="font-heading font-black text-2xl text-[#0B2545] uppercase">
                      Dúvidas Frequentes sobre {service.title}
                    </h2>
                  </div>
                  <div className="space-y-3 pt-2">
                    {service.faq.map((item, idx) => (
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
            </div>

            {/* Sidebar Form */}
            <div className="sticky top-20">
              <ContactForm defaultService={service.title} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
