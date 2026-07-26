import React from 'react';
import { Building2, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactForm } from '../components/ContactForm';
import { LiteYouTube } from '../components/LiteYouTube';
import { COMPANY_DATA } from '../data/company';

export const SobrePage: React.FC = () => {
  const canonical = `${COMPANY_DATA.baseUrl}/sobre`;
  const breadcrumbs = [{ label: 'Sobre a Empresa', href: canonical }];

  return (
    <>
      <EnhancedSEO
        title="Sobre a Empresa | Encanador Água Fácil 24H na CIC Curitiba"
        description="Conheça a Encanador Água Fácil 24H, localizada na Rua das Águias, 320 – CIC. Especialista em reparos hidráulicos e atendimento ágil em Curitiba e RMC."
        canonical={canonical}
        breadcrumbs={breadcrumbs}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Breadcrumbs items={breadcrumbs} />

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-lg space-y-4">
            <div className="inline-flex items-center gap-2 bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>Nossa História e Compromisso</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
              Sobre a Encanador Água Fácil 24H
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Com sede técnica localizada na <strong className="text-slate-900 dark:text-white">Rua das Águias, 320 – Cidade Industrial de Curitiba – CIC, Curitiba – PR, CEP 81450-370</strong>, atuamos no segmento de instalações e reparos hidráulicos para residências, condomínios e estabelecimentos comerciais.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-6">
              <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-cyan-600" />
                  <span>Compromisso com a Qualidade Técnica</span>
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Trabalhamos com foco no diagnóstico preciso dos problemas de vazamento e desgaste de tubulações, evitando intervenções desnecessárias ou quebras de alvenaria desmedidas.
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Respeitamos as características específicas de cada imóvel, seja um apartamento antigo no Centro de Curitiba, um sobrado novo no Água Verde ou uma empresa na Cidade Industrial de Curitiba.
                </p>
              </section>

              <LiteYouTube
                contextTitle="Conheça Nossos Serviços"
                contextText="Assista ao vídeo explicativo sobre nosso padrão de atendimento e suporte técnico na região de Curitiba."
              />
            </div>

            <div className="sticky top-20">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
