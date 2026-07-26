import React from 'react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { COMPANY_DATA } from '../data/company';

export const TermsPage: React.FC = () => {
  const canonical = `${COMPANY_DATA.baseUrl}/termos-de-uso`;
  const breadcrumbs = [{ label: 'Termos de Uso', href: canonical }];

  return (
    <>
      <EnhancedSEO
        title="Termos de Uso | Encanador Água Fácil 24H"
        description="Termos de uso do site e condições de atendimento prestado pela Encanador Água Fácil 24H em Curitiba e Região Metropolitana."
        canonical={canonical}
        breadcrumbs={breadcrumbs}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Breadcrumbs items={breadcrumbs} />

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
            <h1 className="text-3xl font-black text-slate-900 dark:text-white">
              Termos de Uso
            </h1>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Ao utilizar este site, você concorda com os presentes Termos de Uso referentes aos serviços prestados pela <strong>Encanador Água Fácil 24H</strong>.
              </p>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white pt-2">
                1. Serviços e Orçamentos
              </h2>
              <p>
                As informações técnicas contidas no site possuem caráter informativo sobre serviços de manutenção hidráulica, conserto de vazamentos e instalações. O orçamento definitivo é acordado mediante análise do local e aceite do cliente.
              </p>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white pt-2">
                2. Área de Cobertura
              </h2>
              <p>
                Atendemos o município de Curitiba (75 bairros) e municípios da Região Metropolitana num raio de até 100 km com saída técnica da nossa sede na Cidade Industrial de Curitiba (CIC). O atendimento presencial é sujeito à confirmação prévia de disponibilidade técnica e agendamento.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
