import React from 'react';
import { ShieldAlert, ChevronRight, Check, MessageSquare } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactForm } from '../components/ContactForm';
import { LiteYouTube } from '../components/LiteYouTube';
import { PLUMBING_SERVICES } from '../data/services';
import { COMPANY_DATA } from '../data/company';

export const ServicesIndexPage: React.FC = () => {
  const breadcrumbs = [{ label: 'Serviços', href: '/servicos' }];

  return (
    <>
      <EnhancedSEO
        title="Serviços de Desentupimento em Curitiba | Água Fácil Desentupidora"
        description="Conheça todos os serviços da Água Fácil Desentupidora: desentupimento de pia, vaso sanitário, ralo, rede de esgoto, caixa de gordura e caça vazamentos em Curitiba e RMC."
        canonical={`${COMPANY_DATA.baseUrl}/servicos`}
        breadcrumbs={breadcrumbs}
      />

      <main className="min-h-screen bg-[#F2F4F7] text-slate-800 font-body py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Breadcrumbs items={breadcrumbs} />

          {/* Header */}
          <div className="bg-white border border-slate-300 rounded-md p-6 sm:p-10 shadow-sm space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#FFC107] text-[#0B2545] px-3.5 py-1 rounded-sm font-heading font-black text-xs uppercase shadow-xs">
              <ShieldAlert className="w-4 h-4 text-[#0B2545]" />
              <span>NOSSA CATÁLOGO OPERACIONAL</span>
            </div>
            <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#0B2545] uppercase tracking-wide">
              Serviços Especializados de Desentupimento em Curitiba
            </h1>
            <p className="text-slate-700 text-sm sm:text-base max-w-3xl leading-relaxed font-body">
              Atendimento técnico de desentupimento para residências, condomínios e estabelecimentos comerciais em Curitiba e Região Metropolitana. Confira abaixo a nossa lista completa de serviços com máquinas profissionais.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLUMBING_SERVICES.map((serv) => {
              const waMessage = encodeURIComponent(
                `Olá! Gostaria de solicitar um orçamento para ${serv.title} em Curitiba.`
              );
              const waUrl = `https://wa.me/${COMPANY_DATA.phoneRaw}?text=${waMessage}`;

              return (
                <div
                  key={serv.slug}
                  className="bg-white border border-slate-300 rounded-md overflow-hidden shadow-xs hover:shadow-md hover:border-[#FFC107] transition-all flex flex-col justify-between group"
                >
                  {/* Top Image with aspect ratio 4:3 */}
                  <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden border-b border-slate-200">
                    <img
                      src={serv.imageUrl}
                      alt={serv.imageAlt}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 bg-[#0B2545]/90 text-[#FFC107] text-[11px] font-heading font-black uppercase px-2.5 py-1 rounded-sm border border-[#FFC107]/40 shadow-sm">
                      {serv.title.split(' ')[0]}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h2 className="font-heading font-extrabold text-xl text-[#0B2545] group-hover:text-[#1368AA] transition-colors leading-tight uppercase">
                        {serv.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed font-body">
                        {serv.shortDesc}
                      </p>
                      <ul className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-700 font-bold">
                        {serv.features.slice(0, 3).map((feat, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-[#1368AA] shrink-0 mt-0.5 stroke-[3]" />
                            <span className="line-clamp-1">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 space-y-2">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0B2545] font-heading font-black text-xs uppercase tracking-wider py-2.5 px-3 rounded-md shadow-xs transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-[#0B2545]" />
                        <span>Pedir Orçamento no WhatsApp</span>
                      </a>

                      <a
                        href={`/servicos/${serv.slug}`}
                        className="w-full inline-flex items-center justify-center gap-1 text-xs font-bold text-[#1368AA] hover:text-[#0B2545] hover:underline pt-1"
                      >
                        <span>Ver explicações completas</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contextual Video */}
          <LiteYouTube
            contextTitle="Vídeo Operacional sobre Serviços de Desentupimento"
            contextText="Confira como atuamos no desentupimento de pias, vasos, ralos, redes de esgoto e caixas de gordura em Curitiba e RMC."
          />

          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </main>
    </>
  );
};
