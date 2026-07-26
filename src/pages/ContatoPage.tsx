import React from 'react';
import { Phone, MapPin, MessageSquare, Clock } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactForm } from '../components/ContactForm';
import { COMPANY_DATA } from '../data/company';

export const ContatoPage: React.FC = () => {
  const canonical = `${COMPANY_DATA.baseUrl}/contato`;
  const breadcrumbs = [{ label: 'Contato', href: canonical }];

  return (
    <>
      <EnhancedSEO
        title="Contato e Orçamento | Encanador Água Fácil (41) 99569-4912"
        description="Entre em contato com a Encanador Água Fácil pelo WhatsApp (41) 99569-4912. Solicite atendimento de encanador em Curitiba e região."
        canonical={canonical}
        breadcrumbs={breadcrumbs}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Breadcrumbs items={breadcrumbs} />

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-lg space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
              Fale Conosco e Solicite Atendimento
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Entre em contato direto pelo WhatsApp ou telefone para agendar seu atendimento de encanador em Curitiba e Região Metropolitana.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-md border border-slate-800">
              <h2 className="text-2xl font-bold text-white">
                Informações Oficiais de Contato
              </h2>
              <div className="space-y-4 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-1" />
                  <div>
                    <strong className="block text-white">Sede e Endereço Físico:</strong>
                    <p className="text-slate-300">{COMPANY_DATA.address.formatted}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <strong className="block text-white">Telefone e WhatsApp:</strong>
                    <a href={`tel:${COMPANY_DATA.phoneRaw}`} className="text-emerald-400 font-bold hover:underline">
                      {COMPANY_DATA.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <strong className="block text-white">Disponibilidade:</strong>
                    <p className="text-slate-300">{COMPANY_DATA.workingHours}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <a
                  href={COMPANY_DATA.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base py-3.5 px-6 rounded-xl shadow"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Abrir Conversa no WhatsApp</span>
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </main>
    </>
  );
};
