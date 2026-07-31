import React from 'react';
import { MapPin, Wrench, Building, Navigation, FileText } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { INDEXABLE_ROUTES } from '../config/indexableRoutes';
import { COMPANY_DATA } from '../data/company';

export const SitemapHtmlPage: React.FC = () => {
  const canonical = `${COMPANY_DATA.baseUrl}/sitemap`;
  const breadcrumbs = [{ label: 'Mapa do Site', href: canonical }];

  // Group routes by path structure
  const mainPages = INDEXABLE_ROUTES.filter(r =>
    ['/', '/servicos', '/encanador-curitiba', '/encanador-cic', '/bairros', '/regioes', '/cidades', '/duvidas', '/sobre', '/contato', '/politica-de-privacidade', '/termos-de-uso'].includes(r.path)
  );

  const servicePages = INDEXABLE_ROUTES.filter(r => r.path.startsWith('/servicos/'));
  const bairroPages = INDEXABLE_ROUTES.filter(r => r.path.startsWith('/bairro/'));
  const regiaoPages = INDEXABLE_ROUTES.filter(r => r.path.startsWith('/regioes/'));
  const cidadePages = INDEXABLE_ROUTES.filter(r => r.path.startsWith('/cidade/'));

  return (
    <>
      <EnhancedSEO
        title="Mapa do Site (Sitemap) | Encanador Água Fácil 24H"
        description="Navegue por todas as páginas do site: serviços hidráulicos, 75 bairros de Curitiba, vilas da CIC e 15 cidades da Região Metropolitana."
        canonical={canonical}
        breadcrumbs={breadcrumbs}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Breadcrumbs items={breadcrumbs} />

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-lg space-y-4">
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              Mapa do Site (HTML Sitemap)
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-3xl">
              Acesse diretamente qualquer página indexável do nosso portal de atendimento hidráulico.
            </p>
          </div>

          {/* Main Pages */}
          <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-600" />
              <span>Páginas Principais e Institucionais</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {mainPages.map((route) => (
                <a
                  key={route.path}
                  href={route.path}
                  className="p-2.5 bg-slate-50 dark:bg-slate-800/50 hover:bg-cyan-50 dark:hover:bg-cyan-950/50 rounded-lg text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-cyan-600 transition-colors block truncate"
                >
                  {route.title.split('|')[0].trim()}
                </a>
              ))}
            </div>
          </section>

          {/* Services Pages */}
          <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Wrench className="w-5 h-5 text-cyan-600" />
              <span>Páginas de Serviços</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {servicePages.map((route) => (
                <a
                  key={route.path}
                  href={route.path}
                  className="p-2.5 bg-slate-50 dark:bg-slate-800/50 hover:bg-cyan-50 dark:hover:bg-cyan-950/50 rounded-lg text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-cyan-600 transition-colors block truncate"
                >
                  {route.title.split('|')[0].trim()}
                </a>
              ))}
            </div>
          </section>

          {/* 75 Bairros */}
          <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-cyan-600" />
              <span>75 Bairros Oficiais de Curitiba ({bairroPages.length})</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {bairroPages.map((route) => (
                <a
                  key={route.path}
                  href={route.path}
                  className="p-2 bg-slate-50 dark:bg-slate-800/50 hover:bg-cyan-50 dark:hover:bg-cyan-950/50 rounded-lg text-xs font-medium text-slate-800 dark:text-slate-200 hover:text-cyan-600 transition-colors block truncate"
                >
                  {route.title.split('|')[0].replace('Encanador no', '').replace('Encanador na', '').trim()}
                </a>
              ))}
            </div>
          </section>

          {/* Vilas / Regiões */}
          <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Navigation className="w-5 h-5 text-amber-600" />
              <span>Vilas e Regiões Populares ({regiaoPages.length})</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {regiaoPages.map((route) => (
                <a
                  key={route.path}
                  href={route.path}
                  className="p-2 bg-slate-50 dark:bg-slate-800/50 hover:bg-amber-50 dark:hover:bg-amber-950/50 rounded-lg text-xs font-medium text-slate-800 dark:text-slate-200 hover:text-amber-600 transition-colors block truncate"
                >
                  {route.title.split('|')[0].replace('Encanador na', '').replace('Encanador no', '').trim()}
                </a>
              ))}
            </div>
          </section>

          {/* Cidades da RMC */}
          <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Building className="w-5 h-5 text-blue-600" />
              <span>Cidades da Região Metropolitana ({cidadePages.length})</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {cidadePages.map((route) => (
                <a
                  key={route.path}
                  href={route.path}
                  className="p-2 bg-slate-50 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-blue-950/50 rounded-lg text-xs font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 transition-colors block truncate"
                >
                  {route.title.split('|')[0].replace('Encanador em', '').trim()}
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
