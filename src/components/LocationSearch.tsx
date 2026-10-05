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
    <section id="local-search-section" className="py-10 bg-white rounded-md p-6 sm:p-8 border border-slate-300 shadow-xs my-8 font-body">
      <div className="max-w-5xl mx-auto space-y-5">
        {/* Header */}
        <div className="text-center space-y-1.5">
          <div className="inline-flex items-center gap-1.5 bg-[#FFC107] text-[#0B2545] px-3 py-1 rounded-sm font-heading font-black text-xs uppercase shadow-xs">
            <Search className="w-3.5 h-3.5 text-[#0B2545]" />
            <span>LOCALIZADOR DE COBERTURA</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0B2545] uppercase">
            Consulte o Atendimento para Seu Bairro ou Cidade
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
            Digite o nome do seu bairro em Curitiba, vila da CIC ou município da Região Metropolitana.
          </p>
        </div>

        {/* Input Bar */}
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Digite seu bairro, vila ou cidade (ex: Água Verde, Batel, SJP)..."
            className="w-full pl-10 pr-4 py-3 rounded-md border border-slate-300 bg-[#F2F4F7] text-slate-900 placeholder-slate-400 shadow-xs focus:ring-2 focus:ring-[#1368AA] focus:outline-none text-sm font-body"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 pt-1 font-heading font-extrabold uppercase text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-md transition-colors ${
              activeTab === 'all'
                ? 'bg-[#0B2545] text-[#FFC107] border border-[#1368AA]'
                : 'bg-[#F2F4F7] text-slate-700 border border-slate-300 hover:bg-slate-200'
            }`}
          >
            Todos os Locais
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('neighborhoods')}
            className={`px-3.5 py-1.5 rounded-md transition-colors ${
              activeTab === 'neighborhoods'
                ? 'bg-[#0B2545] text-[#FFC107] border border-[#1368AA]'
                : 'bg-[#F2F4F7] text-slate-700 border border-slate-300 hover:bg-slate-200'
            }`}
          >
            75 Bairros ({filteredNeighborhoods.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('popular')}
            className={`px-3.5 py-1.5 rounded-md transition-colors ${
              activeTab === 'popular'
                ? 'bg-[#0B2545] text-[#FFC107] border border-[#1368AA]'
                : 'bg-[#F2F4F7] text-slate-700 border border-slate-300 hover:bg-slate-200'
            }`}
          >
            Vilas & Regiões ({filteredPopular.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('cities')}
            className={`px-3.5 py-1.5 rounded-md transition-colors ${
              activeTab === 'cities'
                ? 'bg-[#0B2545] text-[#FFC107] border border-[#1368AA]'
                : 'bg-[#F2F4F7] text-slate-700 border border-slate-300 hover:bg-slate-200'
            }`}
          >
            15 Cidades RMC ({filteredCities.length})
          </button>
        </div>

        {/* Results Grid */}
        <div className="space-y-4 pt-2">
          {totalResults === 0 ? (
            <div className="text-center py-6 bg-[#F2F4F7] rounded-md p-6 border border-slate-300 space-y-2">
              <p className="text-slate-700 font-bold text-sm">
                Nenhum local pré-cadastrado especificamente para "{searchTerm}".
              </p>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Atendemos toda a capital e Região Metropolitana mediante deslocamento da sede na CIC.
              </p>
              <a
                href={COMPANY_DATA.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0B2545] font-heading font-black text-xs uppercase tracking-wider px-4 py-2.5 rounded-md shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-[#0B2545]" />
                <span>Consultar Atendimento via WhatsApp</span>
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 max-h-[420px] overflow-y-auto pr-2 custom-scrollbar">
              {/* Official Neighborhoods */}
              {(activeTab === 'all' || activeTab === 'neighborhoods') &&
                filteredNeighborhoods.map((n) => (
                  <div
                    key={n.slug}
                    className="bg-[#F2F4F7] p-3 rounded-md border border-slate-300 hover:border-[#FFC107] transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2 min-w-0 pr-2">
                      <MapPin className="w-4 h-4 text-[#1368AA] shrink-0" />
                      <div className="truncate">
                        <a
                          href={`/bairro/${n.slug}`}
                          className="font-bold text-xs text-[#0B2545] hover:text-[#1368AA] truncate block"
                        >
                          {n.name}
                        </a>
                        <span className="text-[10px] text-slate-500 block truncate">
                          Curitiba – {n.region}
                        </span>
                      </div>
                    </div>
                    <a
                      href={`/bairro/${n.slug}`}
                      className="text-[#1368AA] p-1 rounded shrink-0 hover:text-[#0B2545]"
                      title={`Desentupidora no bairro ${n.name}`}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                ))}

              {/* Popular Areas */}
              {(activeTab === 'all' || activeTab === 'popular') &&
                filteredPopular.map((p) => (
                  <div
                    key={p.slug}
                    className="bg-[#F2F4F7] p-3 rounded-md border border-slate-300 hover:border-[#FFC107] transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2 min-w-0 pr-2">
                      <Navigation className="w-4 h-4 text-amber-600 shrink-0" />
                      <div className="truncate">
                        <a
                          href={`/regioes/${p.slug}`}
                          className="font-bold text-xs text-[#0B2545] hover:text-[#1368AA] truncate block"
                        >
                          {p.name}
                        </a>
                        <span className="text-[10px] text-slate-500 block truncate">
                          {p.parentNeighborhood} (Região/Vila)
                        </span>
                      </div>
                    </div>
                    <a
                      href={`/regioes/${p.slug}`}
                      className="text-amber-600 p-1 rounded shrink-0 hover:text-[#0B2545]"
                      title={`Desentupidora na vila ${p.name}`}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                ))}

              {/* Cities */}
              {(activeTab === 'all' || activeTab === 'cities') &&
                filteredCities.map((c) => (
                  <div
                    key={c.slug}
                    className="bg-[#F2F4F7] p-3 rounded-md border border-slate-300 hover:border-[#FFC107] transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2 min-w-0 pr-2">
                      <Building className="w-4 h-4 text-[#1368AA] shrink-0" />
                      <div className="truncate">
                        <a
                          href={`/cidade/${c.slug}`}
                          className="font-bold text-xs text-[#0B2545] hover:text-[#1368AA] truncate block"
                        >
                          {c.name}
                        </a>
                        <span className="text-[10px] text-slate-500 block truncate">
                          Região Metropolitana de Curitiba
                        </span>
                      </div>
                    </div>
                    <a
                      href={`/cidade/${c.slug}`}
                      className="text-[#1368AA] p-1 rounded shrink-0 hover:text-[#0B2545]"
                      title={`Desentupidora em ${c.name}`}
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
