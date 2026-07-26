import React from 'react';
import { Wrench, CheckCircle2, AlertCircle, MessageSquare, Phone } from 'lucide-react';
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

  return (
    <>
      <EnhancedSEO
        title={`${service.title} em Curitiba | Encanador Água Fácil`}
        description={`${service.shortDesc} Atendimento para casas, apartamentos e comércios em Curitiba e Região Metropolitana.`}
        canonical={canonical}
        breadcrumbs={breadcrumbs}
        faqItems={service.faq}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Breadcrumbs items={breadcrumbs} />

          {/* Hero */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-lg space-y-4">
            <div className="inline-flex items-center gap-2 bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Wrench className="w-3.5 h-3.5" />
              <span>Serviço Especializado de Encanamento</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
              {service.title} em Curitiba e Região
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              {service.fullDesc}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={COMPANY_DATA.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm px-6 py-3.5 rounded-xl shadow transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </a>
              <a
                href={`tel:${COMPANY_DATA.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-sm px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Ligar: {COMPANY_DATA.phoneDisplay}</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-8">
              {/* Features */}
              <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-cyan-600" />
                  <span>O que está incluído neste serviço</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="p-3.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-2 text-sm font-medium">
                      <div className="w-2 h-2 rounded-full bg-cyan-600 mt-2 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Common Problems */}
              <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-amber-500" />
                  <span>Problemas mais comuns que resolvemos</span>
                </h2>
                <ul className="space-y-2">
                  {service.commonProblems.map((prob, idx) => (
                    <li key={idx} className="p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 rounded-xl text-sm font-semibold text-amber-900 dark:text-amber-200 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span>{prob}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Video */}
              <LiteYouTube
                contextTitle={`Vídeo sobre ${service.title}`}
                contextText={`Saiba mais sobre como a Encanador Água Fácil realiza ${service.title.toLowerCase()} em residências e comércios de Curitiba.`}
              />

              {/* FAQ */}
              {service.faq.length > 0 && (
                <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Perguntas Frequentes sobre {service.title}
                  </h2>
                  <div className="space-y-4">
                    {service.faq.map((item, idx) => (
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
