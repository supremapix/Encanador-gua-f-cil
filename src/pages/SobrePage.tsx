import React from 'react';
import { Building2, ShieldAlert } from 'lucide-react';
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
        title="Sobre a Empresa | Água Fácil Desentupidora Curitiba"
        description="Conheça a Água Fácil Desentupidora, sediada na Rua Luiz Maltaca, 36 – CIC. Empresa especializada em desentupimento e manutenção hidráulica em Curitiba e RMC."
        canonical={canonical}
        breadcrumbs={breadcrumbs}
      />

      <main className="min-h-screen bg-[#F2F4F7] text-slate-800 font-body py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Breadcrumbs items={breadcrumbs} />

          <div className="bg-white border border-slate-300 rounded-md p-6 sm:p-10 shadow-sm space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#FFC107] text-[#0B2545] font-heading font-black text-xs uppercase px-3 py-1 rounded-sm shadow-xs">
              <Building2 className="w-3.5 h-3.5 text-[#0B2545]" />
              <span>NOSSA ESTRUTURA OPERACIONAL</span>
            </div>
            <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#0B2545] uppercase tracking-wide">
              Sobre a Água Fácil Desentupidora
            </h1>
            <p className="text-slate-700 text-sm sm:text-base max-w-3xl leading-relaxed font-body">
              Sediada na <strong className="text-[#0B2545]">Rua Luiz Maltaca, 36, CIC (Cidade Industrial), Curitiba - PR, CEP 81310-060</strong>, atuamos com desentupimento mecânico e manutenção hidráulica para residências, condomínios e estabelecimentos comerciais.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-6">
              <section className="bg-white border border-slate-300 rounded-md p-6 sm:p-8 space-y-3 shadow-xs">
                <div className="border-b border-slate-200 pb-2">
                  <h2 className="font-heading font-black text-2xl text-[#0B2545] uppercase flex items-center gap-2">
                    <ShieldAlert className="w-6 h-6 text-[#1368AA]" />
                    <span>Compromisso com o Cliente e Transparência</span>
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                  Nossos técnicos atuam com máquinas industriais roto-rooter e hidrojateamento, realizando a desobstrução mecânica limpa sem quebrar pisos ou paredes sem necessidade.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                  Prestamos suporte nos 75 bairros de Curitiba e municípios da Região Metropolitana com orçamentos prévios claros e honestos.
                </p>
              </section>

              <LiteYouTube
                contextTitle="Conheça Nossos Serviços Operacionais"
                contextText="Assista ao vídeo e veja a atuação da Água Fácil Desentupidora em Curitiba."
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
