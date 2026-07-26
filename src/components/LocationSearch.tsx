import React, { useState } from 'react';
import { Search, MapPin, ChevronRight, MessageSquare, Building, Navigation } from 'lucide-react';
import { CURITIBA_NEIGHBORHOODS } from '../data/curitibaNeighborhoods';
import { POPULAR_AREAS } from '../data/popularAreas';
import { SERVICE_CITIES } from '../data/serviceCities';
import { COMPANY_DATA } from '../data/company';

export const LocationSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'neighborhoods' | 'popular' | 'cities'>('all');

  const term = searchTerm.toLowerCase().trim();

  // Filter datasets
  const filteredNeighborhoods = CURITIBA_NEIGHBORHOODS.filter(n =>
    !term || n.name.toLowerCase().includes(term) || n.region.toLowerCase().includes(term)
  );

  const filteredPopular = POPULAR_AREAS.filter(p =>
    !term || p.name.toLowerCase().includes(term) || p.parentNeighborhood.toLowerCase().includes(term)
  );

  const filteredCities = SERVICE_CITIES.filter(c =>
    !term || c.name.toLowerCase().includes(term)
  );

  const totalResults =
    (activeTab === 'all' || activeTab === 'neighborhoods' ? filteredNeighborhoods.length : 0) +
    (activeTab === 'all' || activeTab === 'popular' ? filteredPopular.length : 0) +
    (activeTab === 'all' || activeTab === 'cities' ? filteredCities.length : 0);

  return (
    <section id="local-search-section" className="py-12 bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 my-10">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Search className="w-3.5 h-3.5" />
            <span>Filtro de Locais Atendidos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Consulte o Atendimento para seu Bairro ou Cidade
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Digite o nome do seu bairro de Curitiba, vila ou município da Região Metropolitana para acessar as informações de atendimento.
          </p>
        </div>

        {/* Input Bar */}
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Digite seu bairro, vila ou cidade (ex: Água Verde, Vila Sandra, SJP)..."
            className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 shadow-sm focus:ring-2 focus:ring-cyan-500 focus:outline-none text-sm sm:text-base"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 pt-2">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-colors ${
              activeTab === 'all'
                ? 'bg-cyan-900 text-white'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
            }`}
          >
            Todos os Locais
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('neighborhoods')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-colors ${
              activeTab === 'neighborhoods'
                ? 'bg-cyan-900 text-white'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
            }`}
          >
            75 Bairros Oficiais ({filteredNeighborhoods.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('popular')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-colors ${
              activeTab === 'popular'
                ? 'bg-cyan-900 text-white'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
            }`}
          >
            Vilas e Regiões Populares ({filteredPopular.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('cities')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-colors ${
              activeTab === 'cities'
                ? 'bg-cyan-900 text-white'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
            }`}
          >
            15 Cidades da RMC ({filteredCities.length})
          </button>
        </div>

        {/* Results Grid */}
        <div className="space-y-6 pt-4">
          {totalResults === 0 ? (
            <div className="text-center py-8 bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 space-y-3">
              <p className="text-slate-600 dark:text-slate-300 font-semibold">
                Nenhum local encontrado especificamente para "{searchTerm}".
              </p>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Mesmo que o seu bairro não esteja na lista, atendemos toda a região de Curitiba em um raio de até 100 km.
              </p>
              <a
                href={COMPANY_DATA.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-5 py-2.5 rounded-lg shadow"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Consultar Disponibilidade para {searchTerm || 'sua região'}</span>
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[460px] overflow-y-auto pr-2 custom-scrollbar">
              {/* Official Neighborhoods */}
              {(activeTab === 'all' || activeTab === 'neighborhoods') &&
                filteredNeighborhoods.map((n) => (
                  <div
                    key={n.slug}
                    className="bg-white dark:bg-slate-800 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-cyan-500 transition-all flex items-center justify-between group shadow-2xs"
                  >
                    <div className="flex items-center gap-2.5 min-w-0 pr-2">
                      <MapPin className="w-4 h-4 text-cyan-600 shrink-0" />
                      <div className="truncate">
                        <a
                          href={`/bairros/${n.slug}`}
                          className="font-bold text-sm text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 truncate block"
                        >
                          {n.name}
                        </a>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 block truncate">
                          Curitiba – {n.region} (Bairro Oficial)
                        </span>
                      </div>
                    </div>
                    <a
                      href={`/bairros/${n.slug}`}
                      className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 p-1 rounded-lg group-hover:bg-cyan-50 dark:group-hover:bg-slate-700 shrink-0"
                      title={`Acessar página de encanador no bairro ${n.name}`}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                ))}

              {/* Popular Areas / Vilas */}
              {(activeTab === 'all' || activeTab === 'popular') &&
                filteredPopular.map((p) => (
                  <div
                    key={p.slug}
                    className="bg-white dark:bg-slate-800 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-amber-500 transition-all flex items-center justify-between group shadow-2xs"
                  >
                    <div className="flex items-center gap-2.5 min-w-0 pr-2">
                      <Navigation className="w-4 h-4 text-amber-600 shrink-0" />
                      <div className="truncate">
                        <a
                          href={`/regioes/${p.slug}`}
                          className="font-bold text-sm text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 truncate block"
                        >
                          {p.name}
                        </a>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 block truncate">
                          {p.parentNeighborhood} (Vila/Região Popular)
                        </span>
                      </div>
                    </div>
                    <a
                      href={`/regioes/${p.slug}`}
                      className="text-amber-600 hover:text-amber-700 dark:text-amber-400 p-1 rounded-lg group-hover:bg-amber-50 dark:group-hover:bg-slate-700 shrink-0"
                      title={`Acessar página na vila ${p.name}`}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                ))}

              {/* Service Cities */}
              {(activeTab === 'all' || activeTab === 'cities') &&
                filteredCities.map((c) => (
                  <div
                    key={c.slug}
                    className="bg-white dark:bg-slate-800 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-all flex items-center justify-between group shadow-2xs"
                  >
                    <div className="flex items-center gap-2.5 min-w-0 pr-2">
                      <Building className="w-4 h-4 text-blue-600 shrink-0" />
                      <div className="truncate">
                        <a
                          href={`/cidades/${c.slug}`}
                          className="font-bold text-sm text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 truncate block"
                        >
                          {c.name}
                        </a>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 block truncate">
                          Região Metropolitana de Curitiba
                        </span>
                      </div>
                    </div>
                    <a
                      href={`/cidades/${c.slug}`}
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 p-1 rounded-lg group-hover:bg-blue-50 dark:group-hover:bg-slate-700 shrink-0"
                      title={`Acessar encanador em ${c.name}`}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
