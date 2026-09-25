import React from 'react';
import { ShieldCheck, Wrench, MapPin, CheckCircle, ChevronRight, MessageSquare, Droplet, PhoneCall, HelpCircle, FileText, Cpu, Calculator } from 'lucide-react';
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

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        {/* Main Hero Slider */}
        <HeroSlider />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
          
          {/* Main Introduction & Single H1 */}
          <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-lg relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-4">
                <div className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-xs uppercase tracking-wider bg-cyan-50 dark:bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-200 dark:border-cyan-800">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Sede Operacional na Cidade Industrial de Curitiba</span>
                </div>
                
                {/* Single H1 for SEO Focus on Desentupidora em Curitiba */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  Desentupidora em Curitiba – Água Fácil
                </h1>

                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                  A <strong className="text-slate-900 dark:text-white">Água Fácil Desentupidora</strong> atua com foco em soluções mecânicas eficientes e limpas para desentupimento residencial, comercial e predial. Com sede técnica na <strong className="text-slate-900 dark:text-white">{COMPANY_DATA.address.formatted}</strong>, realizamos atendimento rápido em todos os bairros de Curitiba e municípios da Região Metropolitana.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Desentupimento mecânico sem sujeira</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Orçamento transparente prévio</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Equipamentos industriais de ponta</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Atendimento direto via WhatsApp</span>
                  </div>
                </div>
              </div>

              {/* Direct Contact Card */}
              <div className="bg-gradient-to-br from-cyan-900 to-blue-950 text-white rounded-2xl p-6 shadow-xl space-y-4 border border-cyan-800/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-300">
                    <Droplet className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-extrabold text-lg text-white">Central de Atendimento</h2>
                    <p className="text-xs text-cyan-200">Curitiba e Região Metropolitana</p>
                  </div>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-cyan-100 border-t border-cyan-800/80 pt-3">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{COMPANY_DATA.address.street}, CIC – Curitiba</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>WhatsApp: {COMPANY_DATA.phoneDisplay}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Fixo Central: {COMPANY_DATA.landlineDisplay}</span>
                  </p>
                </div>
                <a
                  href={COMPANY_DATA.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-sm py-3 px-4 rounded-xl shadow transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Falar com Técnico no WhatsApp</span>
                </a>
              </div>
            </div>
          </section>

          {/* Objective Answers Section: How Água Fácil Works */}
          <section className="space-y-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950 px-3 py-1 rounded-full border border-cyan-200 dark:border-cyan-800">
                Informações Objetivas
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Como Funciona Nossas Operações de Desentupimento
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                Respostas diretas sobre tipos de entupimento, diagnóstico, precificação e equipamentos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* 1. Quais entupimentos resolve */}
              <div className="p-6 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold">
                  <Droplet className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                  Quais Entupimentos Resolvemos
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Realizamos desentupimento de <strong>pias de cozinha e lavatórios</strong>, <strong>vasos sanitários</strong>, <strong>ralos de banheiros e quintais</strong>, <strong>redes de esgoto rurais e urbanas</strong>, e <strong>caixas de gordura</strong> residenciais e comerciais.
                </p>
              </div>

              {/* 2. Como funciona diagnóstico e orçamento */}
              <div className="p-6 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold">
                  <Calculator className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                  Diagnóstico e Orçamento
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Você pode nos enviar fotos e vídeos da situação pelo WhatsApp para uma pré-avaliação, ou agendar uma visita técnica no local. Apresentamos o orçamento detalhado e a técnica indicada antes de iniciar qualquer execução.
                </p>
              </div>

              {/* 3. Quais regiões atende */}
              <div className="p-6 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                  Regiões Atendidas
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Atendemos a capital <strong>Curitiba</strong> (todos os bairros com saída da base na CIC) e 15 municípios da <strong>Região Metropolitana</strong> (São José dos Pinhais, Araucária, Pinhais, Colombo, Campo Largo, Fazenda Rio Grande e entorno).
                </p>
              </div>

              {/* 4. Como o preço é definido */}
              <div className="p-6 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                  Como o Preço é Definido
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  O valor é estabelecido com base no tipo de tubulação, grau de complexidade da obstrução, diâmetro dos canos e equipamento necessário (mola rotativa ou hidrojateamento), garantindo transparência sem cobranças adicionais ocultas.
                </p>
              </div>

              {/* 5. Quais equipamentos realmente utiliza */}
              <div className="p-6 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                  Equipamentos Utilizados
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Utilizamos <strong>máquinas desentupidoras roto-rooter elétricas industriais (K-50 e K-500)</strong> com ponteiras mecânicas específicas, hidrojateamento pressurizado e sondas de inspeção de tubulação.
                </p>
              </div>

              {/* 6. Como entrar em contato */}
              <div className="p-6 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                  Como Solicitar Atendimento
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Atendimento direto pelo <strong>WhatsApp: {COMPANY_DATA.phoneDisplay}</strong> ou telefone fixo <strong>{COMPANY_DATA.landlineDisplay}</strong>. Você fala com nossa equipe para rápida orientação e agendamento.
                </p>
              </div>

            </div>
          </section>

          {/* Specific Services Section */}
          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-1.5 bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Wrench className="w-3.5 h-3.5" />
                <span>Nossa Especialização</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Serviços de Desentupimento em Curitiba
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                Páginas detalhadas com explicativos e orientações para cada tipo de esgotamento.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PLUMBING_SERVICES.map((serv) => (
                <div
                  key={serv.slug}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-cyan-500/50 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Droplet className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {serv.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {serv.shortDesc}
                    </p>
                  </div>
                  <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                    <a
                      href={`/servicos/${serv.slug}`}
                      className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline inline-flex items-center gap-1"
                    >
                      <span>Ver detalhes e orientações</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Interactive Location Filter */}
          <LocationSearch />

          {/* Contextual Video */}
          <LiteYouTube
            contextTitle="Veja Nosso Atendimento de Desentupidora em Curitiba"
            contextText="Equipe técnica qualificada atuando a partir da sede na Cidade Industrial de Curitiba (CIC) para atender residências, apartamentos e comércios."
          />

          {/* Form & FAQ Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <ContactForm />

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                <span>Perguntas Frequentes</span>
              </h2>
              <div className="space-y-4">
                {GLOBAL_FAQS.slice(0, 4).map((faq, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/60 space-y-1.5">
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      {faq.question}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <a
                  href="/duvidas"
                  className="text-sm font-bold text-cyan-600 dark:text-cyan-400 hover:underline inline-flex items-center gap-1"
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
