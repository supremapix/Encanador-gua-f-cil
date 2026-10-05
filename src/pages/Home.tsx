import React from 'react';
import {
  ShieldAlert,
  Wrench,
  MapPin,
  Check,
  ChevronRight,
  MessageSquare,
  PhoneCall,
  Clock,
  Truck,
  FileCheck,
  Cpu,
  Droplet
} from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { HeroSlider } from '../components/HeroSlider';
import { LocationSearch } from '../components/LocationSearch';
import { LiteYouTube } from '../components/LiteYouTube';
import { ContactForm } from '../components/ContactForm';
import { COMPANY_DATA } from '../data/company';
import { PLUMBING_SERVICES } from '../data/services';
import { GLOBAL_FAQS } from '../data/faq';

export const HomePage: React.FC = () => {
  return (
    <>
      <EnhancedSEO
        title="Desentupidora em Curitiba | Água Fácil Desentupidora 24H"
        description="Água Fácil Desentupidora em Curitiba e Região Metropolitana. Desentupimento de pias, vasos sanitários, ralos, esgoto e caixas de gordura. Sede na CIC (Rua Luiz Maltaca, 36). Solicite orçamento pelo WhatsApp!"
        canonical={`${COMPANY_DATA.baseUrl}/`}
        faqItems={GLOBAL_FAQS}
      />

      <main className="min-h-screen bg-[#F2F4F7] text-slate-800 font-body">
        {/* Main Hero Slider */}
        <HeroSlider />

        {/* PROOF METRICS BAR (Chegamos em até 30 min | 24h Todos os Dias | Orçamento Sem Compromisso) */}
        <section className="bg-[#0B2545] text-white border-b-2 border-[#FFC107] py-6 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#1368AA]/40">
              
              <div className="flex items-center justify-center gap-3 pt-2 md:pt-0">
                <div className="w-12 h-12 rounded-md bg-[#1368AA] border border-[#FFC107]/40 flex items-center justify-center shrink-0">
                  <Truck className="w-6 h-6 text-[#FFC107]" />
                </div>
                <div className="text-left">
                  <span className="font-heading font-black text-2xl sm:text-3xl text-[#FFC107] uppercase leading-none block">
                    ATÉ 30 MINUTOS
                  </span>
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">
                    Deslocamento ágil com saída da sede na CIC
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-4 md:pt-0">
                <div className="w-12 h-12 rounded-md bg-[#1368AA] border border-[#FFC107]/40 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-[#FFC107]" />
                </div>
                <div className="text-left">
                  <span className="font-heading font-black text-2xl sm:text-3xl text-white uppercase leading-none block">
                    24H TODOS OS DIAS
                  </span>
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">
                    Atendimento de plantão em Curitiba e RMC
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-4 md:pt-0">
                <div className="w-12 h-12 rounded-md bg-[#1368AA] border border-[#FFC107]/40 flex items-center justify-center shrink-0">
                  <FileCheck className="w-6 h-6 text-[#FFC107]" />
                </div>
                <div className="text-left">
                  <span className="font-heading font-black text-2xl sm:text-3xl text-[#FFC107] uppercase leading-none block">
                    SEM COMPROMISSO
                  </span>
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">
                    Orçamento prévio transparente via WhatsApp
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAIXA DIAGONAL DE SINALIZAÇÃO */}
        <div className="h-3 warning-stripe w-full shadow-inner" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

          {/* MAIN INTRODUCTION & SINGLE H1 */}
          <section className="bg-white border border-slate-300 rounded-md p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              
              <div className="lg:col-span-2 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="tag-24h">
                    <ShieldAlert className="w-3.5 h-3.5 text-[#0B2545]" />
                    SEDE OPERACIONAL PRÓPRIA NA CIC
                  </span>
                  <span className="text-xs font-bold text-[#1368AA] uppercase font-heading tracking-wider">
                    CURITIBA & RMC
                  </span>
                </div>

                <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#0B2545] uppercase tracking-wide leading-none">
                  Desentupidora em Curitiba – Água Fácil 24H
                </h1>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  A <strong className="text-[#0B2545]">Água Fácil Desentupidora</strong> é uma empresa local especializada em serviços mecânicos de desentupimento técnico em residências, condomínios e estabelecimentos comerciais. Com base na <strong className="text-[#0B2545]">{COMPANY_DATA.address.formatted}</strong>, realizamos atendimento técnico ágil em todos os bairros de Curitiba e municípios vizinhos da Região Metropolitana.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm font-bold text-slate-800">
                  <div className="flex items-center gap-2 bg-[#F2F4F7] p-2.5 rounded-md border border-slate-200">
                    <Check className="w-4 h-4 text-[#1368AA] shrink-0 stroke-[3]" />
                    <span>Desentupimento mecânico limpo e sem quebrar azulejos</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#F2F4F7] p-2.5 rounded-md border border-slate-200">
                    <Check className="w-4 h-4 text-[#1368AA] shrink-0 stroke-[3]" />
                    <span>Equipamentos industriais roto-rooter K-50 e K-500</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#F2F4F7] p-2.5 rounded-md border border-slate-200">
                    <Check className="w-4 h-4 text-[#1368AA] shrink-0 stroke-[3]" />
                    <span>Avaliação prévia transparente sem taxa oculta</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#F2F4F7] p-2.5 rounded-md border border-slate-200">
                    <Check className="w-4 h-4 text-[#1368AA] shrink-0 stroke-[3]" />
                    <span>Equipe técnica uniformizada e experiente</span>
                  </div>
                </div>
              </div>

              {/* QUICK CALL ACTION BOX */}
              <div className="bg-[#0B2545] text-white rounded-md p-6 border-2 border-[#1368AA] space-y-4 shadow-md">
                <div className="flex items-center gap-3 border-b border-[#1368AA]/50 pb-3">
                  <div className="w-10 h-10 rounded-md bg-[#1368AA] flex items-center justify-center text-[#FFC107]">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-heading font-black text-xl text-white uppercase">Central de Atendimento</h2>
                    <p className="text-xs text-slate-300">Fale direto com a equipe técnica</p>
                  </div>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-slate-200">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#FFC107] shrink-0" />
                    <span>{COMPANY_DATA.address.street}, CIC – Curitiba</span>
                  </p>
                  <p className="flex items-center gap-2 font-bold text-white">
                    <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                    <span>WhatsApp: {COMPANY_DATA.phoneDisplay}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-[#FFC107] shrink-0" />
                    <span>Fixo Central: {COMPANY_DATA.landlineDisplay}</span>
                  </p>
                </div>

                <a
                  href={COMPANY_DATA.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0B2545] font-heading font-black text-sm uppercase tracking-wider py-3 px-4 rounded-md shadow-sm transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 fill-[#0B2545]" />
                  <span>Pedir Orçamento no WhatsApp</span>
                </a>
              </div>

            </div>
          </section>

          {/* GRID DE SERVIÇOS - CARDS DE SERVIÇO COM FOTO 4:3, DESCRICAO, 3 BULLETS E BOTÃO WHATSAPP */}
          <section className="space-y-6">
            <div className="border-l-4 border-[#FFC107] pl-4 space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1368AA] font-heading">
                SERVIÇOS DE DESENTUPIMENTO
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#0B2545] uppercase tracking-wide">
                Soluções Especializadas para Cada Tipo de Obstrução
              </h2>
              <p className="text-slate-600 text-sm max-w-3xl">
                Confira nossos serviços de desentupimento executados com máquinas profissionais em Curitiba e Região Metropolitana.
              </p>
            </div>

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
                    {/* Top Image with aspect-ratio 4:3 */}
                    <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden border-b border-slate-200">
                      <img
                        src={serv.imageUrl}
                        alt={serv.imageAlt}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          // Fallback styled mesh container if external image fails
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                      <div className="absolute top-2 right-2 bg-[#0B2545]/90 text-[#FFC107] text-[11px] font-heading font-black uppercase px-2.5 py-1 rounded-sm border border-[#FFC107]/40 shadow-sm">
                        {serv.title.split(' ')[0]}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h3 className="font-heading font-extrabold text-xl text-[#0B2545] group-hover:text-[#1368AA] transition-colors leading-tight uppercase">
                          {serv.title}
                        </h3>

                        {/* 2 Lines Description */}
                        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed font-body">
                          {serv.shortDesc}
                        </p>

                        {/* 3 Short Bullet Points */}
                        <ul className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-700 font-bold">
                          {serv.features.slice(0, 3).map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <Check className="w-3.5 h-3.5 text-[#1368AA] shrink-0 mt-0.5 stroke-[3]" />
                              <span className="line-clamp-1">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons */}
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
                          <span>Ver explicações completas do serviço</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* FAIXA DIAGONAL DE SINALIZAÇÃO DE DIVISÃO */}
          <div className="h-2 warning-stripe w-full rounded-sm" />

          {/* RESPOSTAS OBJETIVAS DA EMPRESA (NAVY DARK BG) */}
          <section className="bg-[#0B2545] text-white border-2 border-[#1368AA] rounded-md p-6 sm:p-8 space-y-6 shadow-md">
            <div className="border-l-4 border-[#FFC107] pl-4 space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FFC107] font-heading">
                TRANSPARÊNCIA E OPERAÇÃO REAL
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-wide">
                Como Funciona Nosso Atendimento Técnico em Curitiba
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm font-body max-w-2xl">
                Entenda com clareza o funcionamento de diagnósticos, preços, equipamentos e regiões atendidas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              
              <div className="bg-[#07192F] p-5 rounded-md border border-[#1368AA]/40 space-y-2">
                <div className="flex items-center gap-2 text-[#FFC107] font-heading font-bold text-base uppercase">
                  <Droplet className="w-4 h-4 text-[#FFC107]" />
                  <span>1. Entupimentos Que Resolvemos</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                  Desentupimento de <strong>pias de cozinha</strong>, <strong>vasos sanitários</strong>, <strong>ralos</strong>, <strong>redes de esgoto</strong> e <strong>caixas de gordura</strong> residenciais e comerciais.
                </p>
              </div>

              <div className="bg-[#07192F] p-5 rounded-md border border-[#1368AA]/40 space-y-2">
                <div className="flex items-center gap-2 text-[#FFC107] font-heading font-bold text-base uppercase">
                  <FileCheck className="w-4 h-4 text-[#FFC107]" />
                  <span>2. Diagnóstico & Orçamento</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                  Análise prévia rápida por fotos/vídeos pelo WhatsApp ou vistoria técnica no local. O valor e o procedimento são informados antes do serviço.
                </p>
              </div>

              <div className="bg-[#07192F] p-5 rounded-md border border-[#1368AA]/40 space-y-2">
                <div className="flex items-center gap-2 text-[#FFC107] font-heading font-bold text-base uppercase">
                  <MapPin className="w-4 h-4 text-[#FFC107]" />
                  <span>3. Regiões Atendidas</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                  Atendimento nos <strong>75 bairros de Curitiba</strong> (saída da base na CIC) e <strong>15 cidades da Região Metropolitana</strong> (SJP, Araucária, Pinhais, Colombo, etc).
                </p>
              </div>

              <div className="bg-[#07192F] p-5 rounded-md border border-[#1368AA]/40 space-y-2">
                <div className="flex items-center gap-2 text-[#FFC107] font-heading font-bold text-base uppercase">
                  <Wrench className="w-4 h-4 text-[#FFC107]" />
                  <span>4. Como o Preço é Definido</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                  O orçamento é fixado de acordo com a gravidade da obstrução, diâmetro da tubulação e máquina necessária (roto-rooter ou hidrojateamento).
                </p>
              </div>

              <div className="bg-[#07192F] p-5 rounded-md border border-[#1368AA]/40 space-y-2">
                <div className="flex items-center gap-2 text-[#FFC107] font-heading font-bold text-base uppercase">
                  <Cpu className="w-4 h-4 text-[#FFC107]" />
                  <span>5. Equipamentos Utilizados</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                  Máquinas desentupidoras elétricas industriais <strong>K-50 e K-500</strong> com ponteiras mecânicas e hidrojateamento de alta pressão.
                </p>
              </div>

              <div className="bg-[#07192F] p-5 rounded-md border border-[#1368AA]/40 space-y-2">
                <div className="flex items-center gap-2 text-[#FFC107] font-heading font-bold text-base uppercase">
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>6. Como Entrar em Contato</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                  Fale com a equipe pelo <strong>WhatsApp {COMPANY_DATA.phoneDisplay}</strong> ou ligue na <strong>Central Fixo {COMPANY_DATA.landlineDisplay}</strong>.
                </p>
              </div>

            </div>
          </section>

          {/* BUSCA POR BAIRROS E CIDADES */}
          <LocationSearch />

          {/* VÍDEO EXPLICATIVO DA EMPRESA */}
          <LiteYouTube
            contextTitle="Atendimento Operacional da Água Fácil em Curitiba"
            contextText="Assista ao vídeo e entenda como nossa equipe técnica atua diretamente a partir da sede na Cidade Industrial de Curitiba (CIC) para atender bairros da capital e RMC."
          />

          {/* FORMULÁRIO DE CONTATO E PERGUNTAS FREQUENTES */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <ContactForm />

            <div className="bg-white border border-slate-300 rounded-md p-6 sm:p-8 space-y-5 shadow-xs">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-bold text-[#1368AA] uppercase font-heading">TIRE SUAS DÚVIDAS</span>
                <h2 className="font-heading font-black text-2xl text-[#0B2545] uppercase">
                  Perguntas Frequentes
                </h2>
              </div>

              <div className="space-y-3">
                {GLOBAL_FAQS.slice(0, 4).map((faq, idx) => (
                  <div key={idx} className="p-4 bg-[#F2F4F7] rounded-md border border-slate-200 space-y-1">
                    <h3 className="font-heading font-bold text-base text-[#0B2545] uppercase">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="/duvidas"
                  className="text-xs font-bold text-[#1368AA] hover:underline inline-flex items-center gap-1 font-heading uppercase"
                >
                  <span>Ver todas as perguntas e respostas</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};
