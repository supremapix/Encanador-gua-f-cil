import React from 'react';
import { Wrench, ChevronRight, CheckCircle, Droplet } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactForm } from '../components/ContactForm';
import { LiteYouTube } from '../components/LiteYouTube';
import { PLUMBING_SERVICES } from '../data/services';
import { COMPANY_DATA } from '../data/company';

export const ServicesIndexPage: React.FC = () => {
  const breadcrumbs = [{ label: 'Serviços', href: '/servicos' }];

  return (
    <>
      <EnhancedSEO
        title="Serviços de Encanador em Curitiba | Reparos Hidráulicos"
        description="Conheça os serviços da Encanador Água Fácil 24H: conserto de vazamentos, troca de registros, manutenção preventiva, instalação de louças e desentupimento de pias."
        canonical={`${COMPANY_DATA.baseUrl}/servicos`}
        breadcrumbs={breadcrumbs}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Breadcrumbs items={breadcrumbs} />

          {/* Header */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-lg space-y-4">
            <div className="inline-flex items-center gap-2 bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Wrench className="w-3.5 h-3.5" />
              <span>Nossos Serviços Especializados</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
              Serviços de Encanador e Manutenção Hidráulica em Curitiba
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Prestamos assistência técnica hidráulica completa para residências, condomínios e comércios em Curitiba e Região Metropolitana. Confira abaixo todos os serviços executados.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLUMBING_SERVICES.map((serv) => (
              <div
                key={serv.slug}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-cyan-500 transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                    <Droplet className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    {serv.title}
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {serv.shortDesc}
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 pt-2">
                    {serv.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={`/servicos/${serv.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-cyan-600 hover:text-white text-slate-900 dark:text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-all"
                  >
                    <span>Ver detalhes do serviço</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Contextual Video */}
          <LiteYouTube
            contextTitle="Vídeo Informativo sobre Serviços de Encanamento"
            contextText="Confira como atuamos na solução de vazamentos, manutenção de registros e instalações hidráulicas em Curitiba."
          />

          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </main>
    </>
  );
};
