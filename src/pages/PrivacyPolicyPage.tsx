import React from 'react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { COMPANY_DATA } from '../data/company';

export const PrivacyPolicyPage: React.FC = () => {
  const canonical = `${COMPANY_DATA.baseUrl}/politica-de-privacidade`;
  const breadcrumbs = [{ label: 'Política de Privacidade', href: canonical }];

  return (
    <>
      <EnhancedSEO
        title="Política de Privacidade | Encanador Água Fácil 24H"
        description="Confira a política de privacidade e proteção de dados da Encanador Água Fácil 24H. Respeito à LGPD e sigilo das informações de contato."
        canonical={canonical}
        breadcrumbs={breadcrumbs}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Breadcrumbs items={breadcrumbs} />

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
            <h1 className="text-3xl font-black text-slate-900 dark:text-white">
              Política de Privacidade
            </h1>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                A <strong>Encanador Água Fácil 24H</strong>, com sede na Rua das Águias, 320 – Cidade Industrial de Curitiba – CIC, Curitiba/PR, preza pelo respeito à privacidade e pela segurança dos dados pessoais de nossos clientes e visitantes.
              </p>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white pt-2">
                Coleta de Dados
              </h2>
              <p>
                Coletamos apenas informações fornecidas voluntariamente pelo usuário através dos formulários de contato e WhatsApp, tais como nome, bairro/cidade, telefone e descrição do serviço solicitado, com a finalidade exclusiva de prestar o atendimento requisitado.
              </p>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white pt-2">
                Uso de Informações
              </h2>
              <p>
                As informações fornecidas são utilizadas unicamente para viabilizar o diagnóstico técnico, envio de orçamentos e agendamento de visitas de encanador. Não compartilhamos, vendemos ou comercializamos dados com terceiros.
              </p>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white pt-2">
                Lei Geral de Proteção de Dados (LGPD)
              </h2>
              <p>
                Em conformidade com a LGPD (Lei nº 13.709/2018), o usuário pode solicitar a confirmação, acesso, correção ou exclusão de seus dados pessoais entrando em contato através do WhatsApp (41) 99569-4912.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
