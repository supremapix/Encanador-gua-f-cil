import React from 'react';
import { HelpCircle, ChevronRight } from 'lucide-react';
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
        title="Dúvidas Frequentes | Encanador Água Fácil 24H Curitiba"
        description="Tire suas dúvidas sobre serviços de encanamento, vazamentos, prazos de atendimento, formas de pagamento e raio de cobertura em Curitiba."
        canonical={canonical}
        breadcrumbs={breadcrumbs}
        faqItems={GLOBAL_FAQS}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Breadcrumbs items={breadcrumbs} />

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-lg space-y-4">
            <div className="inline-flex items-center gap-2 bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Central de Dúvidas</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
              Perguntas e Dúvidas Frequentes (FAQ)
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Respostas claras para as principais dúvidas de nossos clientes sobre atendimento de encanador em Curitiba e Região Metropolitana.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-4">
              {GLOBAL_FAQS.map((faq, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-2 shadow-xs">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span>{faq.question}</span>
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-8">
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
