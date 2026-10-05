import React from 'react';
import { HelpCircle } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactForm } from '../components/ContactForm';
import { GLOBAL_FAQS } from '../data/faq';
import { COMPANY_DATA } from '../data/company';

export const DuvidasPage: React.FC = () => {
  const canonical = `${COMPANY_DATA.baseUrl}/duvidas`;
  const breadcrumbs = [{ label: 'Dúvidas Frequentes', href: canonical }];

  return (
    <>
      <EnhancedSEO
        title="Dúvidas Frequentes | Água Fácil Desentupidora Curitiba"
        description="Tire suas dúvidas sobre desentupimento de pias, vasos, esgoto, formas de orçamento, equipamentos utilizados e tempo de atendimento em Curitiba."
        canonical={canonical}
        breadcrumbs={breadcrumbs}
        faqItems={GLOBAL_FAQS}
      />

      <main className="min-h-screen bg-[#F2F4F7] text-slate-800 font-body py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Breadcrumbs items={breadcrumbs} />

          <div className="bg-white border border-slate-300 rounded-md p-6 sm:p-10 shadow-sm space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#FFC107] text-[#0B2545] font-heading font-black text-xs uppercase px-3 py-1 rounded-sm shadow-xs">
              <HelpCircle className="w-3.5 h-3.5 text-[#0B2545]" />
              <span>CENTRAL DE ORIENTAÇÕES</span>
            </div>
            <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#0B2545] uppercase tracking-wide">
              Perguntas e Dúvidas Frequentes (FAQ)
            </h1>
            <p className="text-slate-700 text-sm sm:text-base max-w-3xl leading-relaxed font-body">
              Respostas diretas para as principais dúvidas sobre nossos atendimentos de desentupimento em Curitiba e Região Metropolitana.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-3">
              {GLOBAL_FAQS.map((faq, idx) => (
                <div key={idx} className="bg-white border border-slate-300 rounded-md p-5 space-y-2 shadow-xs">
                  <h2 className="font-heading font-bold text-lg text-[#0B2545] uppercase flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-[#1368AA] text-white text-xs flex items-center justify-center shrink-0 font-heading font-black">
                      {idx + 1}
                    </span>
                    <span>{faq.question}</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8 font-body">
                    {faq.answer}
                  </p>
                </div>
              ))}
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
