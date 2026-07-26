import React from 'react';
import { ShieldCheck, Wrench, MapPin, CheckCircle, ChevronRight, MessageSquare, Droplet, PhoneCall } from 'lucide-react';
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
        title="Encanador em Curitiba e Região | Encanador Água Fácil 24H"
        description="Serviços de encanador em Curitiba e Região Metropolitana. Reparo de vazamentos, troca de torneiras, registros e louças. Sede na CIC (Rua das Águias, 320). Solicite orçamento via WhatsApp!"
        canonical={`${COMPANY_DATA.baseUrl}/`}
        faqItems={GLOBAL_FAQS}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        {/* Main Hero Slider */}
        <HeroSlider />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
          {/* Company Introduction & Headquarters Announcement */}
          <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-lg relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-4">
                <div className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-xs uppercase tracking-wider bg-cyan-50 dark:bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-200 dark:border-cyan-800">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Sede Própria na Cidade Industrial de Curitiba</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  Encanador Água Fácil 24H em Curitiba e Região
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                  Com sede técnica estabelecida na <strong className="text-slate-900 dark:text-white">Rua das Águias, 320 – Cidade Industrial de Curitiba – CIC, Curitiba – PR (CEP 81450-370)</strong>, prestamos serviços de manutenção hidráulica, conserto de vazamentos, troca de registros, torneiras e louças sanitárias em todos os 75 bairros de Curitiba e 15 municípios da Região Metropolitana.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Transparência no diagnóstico técnico</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Deslocamento para bairros e cidades</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Uso de materiais com norma ABNT</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Solicitação facilitada via WhatsApp</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="bg-gradient-to-br from-cyan-900 to-blue-950 text-white rounded-2xl p-6 shadow-xl space-y-4 border border-cyan-800/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-300">
                    <Droplet className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-white">Atendimento Rápido</h3>
                    <p className="text-xs text-cyan-200">Clique abaixo e fale conosco</p>
                  </div>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-cyan-100 border-t border-cyan-800/80 pt-3">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Cidade Industrial de Curitiba – CIC</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>(41) 99569-4912</span>
                  </p>
                </div>
                <a
                  href={COMPANY_DATA.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-sm py-3 px-4 rounded-xl shadow transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar Mensagem no WhatsApp</span>
                </a>
              </div>
            </div>
          </section>

          {/* Main Services Section */}
          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-1.5 bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Wrench className="w-3.5 h-3.5" />
                <span>Nossos Serviços Especializados</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                Soluções Hidráulicas para sua Residência ou Comércio
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                Atendemos chamados corretivos e preventivos com ferramentas adequadas e execução técnica limpa.
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
                      <span>Ver detalhes do serviço</span>
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
            contextTitle="Veja Nosso Atendimento em Curitiba e Região"
            contextText="Atuamos a partir de nossa sede na Cidade Industrial de Curitiba (CIC) com cobertura ampla para bairros da capital e municípios vizinhos."
          />

          {/* Form & FAQ Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <ContactForm />

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Dúvidas Frequentes sobre Atendimento
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
