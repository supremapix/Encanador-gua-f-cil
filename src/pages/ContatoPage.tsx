import React from 'react';
import { Phone, MapPin, MessageSquare, Clock, Mail, ShieldAlert } from 'lucide-react';
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
        title={`Contato e Orçamento | Água Fácil Desentupidora ${COMPANY_DATA.phoneDisplay}`}
        description={`Entre em contato com a Água Fácil Desentupidora pelo WhatsApp ${COMPANY_DATA.phoneDisplay} ou Fixo ${COMPANY_DATA.landlineDisplay}. Solicite atendimento em Curitiba e RMC.`}
        canonical={canonical}
        breadcrumbs={breadcrumbs}
      />

      <main className="min-h-screen bg-[#F2F4F7] text-slate-800 font-body py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Breadcrumbs items={breadcrumbs} />

          <div className="bg-white border border-slate-300 rounded-md p-6 sm:p-10 shadow-sm space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#FFC107] text-[#0B2545] font-heading font-black text-xs uppercase px-3 py-1 rounded-sm shadow-xs">
              <ShieldAlert className="w-3.5 h-3.5 text-[#0B2545]" />
              <span>CENTRAL FÍSICA E ATENDIMENTO PLANTÃO</span>
            </div>
            <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#0B2545] uppercase tracking-wide">
              Fale Conosco e Solicite Atendimento
            </h1>
            <p className="text-slate-700 text-sm sm:text-base max-w-3xl leading-relaxed font-body">
              Entre em contato com a Água Fácil Desentupidora pelo WhatsApp ou telefone fixo para rápida orientação e orçamento sem compromisso.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="bg-[#0B2545] text-white rounded-md p-6 sm:p-8 space-y-6 shadow-md border-2 border-[#1368AA]">
              <h2 className="font-heading font-black text-2xl text-[#FFC107] uppercase border-b border-[#1368AA]/40 pb-3">
                Informações Oficiais de Contato
              </h2>
              
              <div className="space-y-4 text-xs sm:text-sm font-body">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FFC107] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-heading uppercase text-sm">Sede Operacional:</strong>
                    <p className="text-slate-200">{COMPANY_DATA.address.formatted}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-[#25D366] shrink-0" />
                  <div>
                    <strong className="block text-white font-heading uppercase text-sm">WhatsApp Plantão 24h:</strong>
                    <a href={COMPANY_DATA.whatsAppUrl} target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-bold text-base hover:underline">
                      {COMPANY_DATA.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#FFC107] shrink-0" />
                  <div>
                    <strong className="block text-white font-heading uppercase text-sm">Telefone Fixo Central:</strong>
                    <a href={`tel:${COMPANY_DATA.landlineRaw}`} className="text-[#FFC107] font-bold text-base hover:underline">
                      {COMPANY_DATA.landlineDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#1368AA] shrink-0" />
                  <div>
                    <strong className="block text-white font-heading uppercase text-sm">E-mail Comercial:</strong>
                    <a href={`mailto:${COMPANY_DATA.email}`} className="text-cyan-300 hover:underline">
                      {COMPANY_DATA.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-amber-300 shrink-0" />
                  <div>
                    <strong className="block text-white font-heading uppercase text-sm">Horário de Funcionamento:</strong>
                    <p className="text-slate-200">{COMPANY_DATA.workingHours}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#1368AA]/40">
                <a
                  href={COMPANY_DATA.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0B2545] font-heading font-black text-sm uppercase tracking-wider py-3.5 px-6 rounded-md shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-[#0B2545]" />
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
