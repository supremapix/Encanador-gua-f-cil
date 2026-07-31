import React, { useEffect, useState } from 'react';
import { AlertCircle, Home, Wrench, Search, ArrowRight } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { COMPANY_DATA } from '../data/company';

export const NotFoundPage: React.FC = () => {
  const [countdown, setCountdown] = useState(8);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = '/';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <EnhancedSEO
        title="Página Atualizada ou Não Encontrada | Encanador Água Fácil"
        description="A URL acessada foi atualizada em nosso novo portal. Navegue pelos nossos serviços de encanador em Curitiba ou entre em contato via WhatsApp."
        canonical={`${COMPANY_DATA.baseUrl}/404`}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex items-center justify-center py-16 px-4">
        <div className="max-w-lg w-full text-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
          <div className="w-16 h-16 bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
            <AlertCircle className="w-8 h-8" />
          </div>

          <div className="space-y-3">
            <span className="inline-block px-3 py-1 bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 text-xs font-bold rounded-full uppercase tracking-wider">
              URL Atualizada / Sistema Novo
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Endereço Alterado ou Não Encontrado
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              O endereço que você tentou acessar no antigo site foi reestruturado para o novo portal da <strong>Encanador Água Fácil 24H</strong>.
            </p>
          </div>

          <div className="bg-cyan-50 dark:bg-slate-800/80 border border-cyan-200 dark:border-cyan-800/60 rounded-2xl p-4 text-sm text-cyan-900 dark:text-cyan-200 flex items-center justify-between gap-3">
            <div className="text-left">
              <p className="font-semibold text-xs sm:text-sm">Redirecionamento automático:</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Você será levado à página inicial em <strong className="text-cyan-600 dark:text-cyan-400 font-bold">{countdown} segundos</strong>...
              </p>
            </div>
            <a
              href="/"
              className="shrink-0 bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold py-2 px-3 rounded-xl flex items-center gap-1 transition-colors"
            >
              <span>Ir Agora</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="flex flex-col gap-2.5 pt-2">
            <a
              href="/"
              className="w-full inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm py-3 px-4 rounded-xl shadow transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Ir para a Página Inicial</span>
            </a>
            <a
              href="/bairros"
              className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-sm py-3 px-4 rounded-xl border border-slate-300 dark:border-slate-700 transition-colors"
            >
              <Search className="w-4 h-4" />
              <span>Buscar por Bairro ou Cidade</span>
            </a>
            <a
              href={COMPANY_DATA.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3 px-4 rounded-xl transition-colors shadow-sm"
            >
              <Wrench className="w-4 h-4" />
              <span>Falar com Encanador no WhatsApp</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};
