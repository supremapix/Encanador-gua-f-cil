import React from 'react';
import { AlertCircle, Home, Wrench, Search } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { COMPANY_DATA } from '../data/company';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <EnhancedSEO
        title="Página não Encontrada (404) | Encanador Água Fácil"
        description="A página solicitada não foi encontrada. Navegue pelos nossos serviços de encanador em Curitiba ou entre em contato pelo WhatsApp."
        canonical={`${COMPANY_DATA.baseUrl}/404`}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full text-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-xl space-y-6">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 rounded-2xl flex items-center justify-center mx-auto">
            <AlertCircle className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Página Não Encontrada (404)
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              O endereço que você tentou acessar não existe ou foi alterado.
            </p>
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <a
              href="/"
              className="w-full inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm py-3 px-4 rounded-xl shadow transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Voltar para a Página Inicial</span>
            </a>
            <a
              href="/bairros"
              className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-sm py-3 px-4 rounded-xl border border-slate-300 dark:border-slate-700 transition-colors"
            >
              <Search className="w-4 h-4" />
              <span>Buscar Bairro ou Cidade</span>
            </a>
            <a
              href={COMPANY_DATA.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3 px-4 rounded-xl transition-colors"
            >
              <Wrench className="w-4 h-4" />
              <span>Atendimento via WhatsApp</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};
