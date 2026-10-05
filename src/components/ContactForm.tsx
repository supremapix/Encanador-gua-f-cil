import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { COMPANY_DATA } from '../data/company';

interface ContactFormProps {
  defaultLocation?: string;
  defaultService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  defaultLocation = "",
  defaultService = "Desentupimento de Pia"
}) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState(defaultLocation);
  const [serviceType, setServiceType] = useState(defaultService);
  const [description, setDescription] = useState('');
  const [preference, setPreference] = useState('Urgente / Plantão');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !location.trim()) {
      setError('Por favor, preencha seu nome e o bairro/cidade onde precisa do serviço.');
      return;
    }

    setError('');
    setSuccess(true);

    const message = `Olá! Meu nome é ${name.trim()}. Estou em ${location.trim()} e preciso de atendimento para ${serviceType}. Detalhes: ${description.trim() || 'Sem detalhes adicionais'}. Preferência de horário: ${preference}.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${COMPANY_DATA.phoneRaw}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  return (
    <div className="bg-white border border-slate-300 rounded-md p-6 sm:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-5 border-b border-slate-200 pb-3">
        <div className="w-10 h-10 rounded-md bg-[#25D366] text-[#0B2545] flex items-center justify-center shrink-0">
          <MessageSquare className="w-5 h-5 fill-[#0B2545]" />
        </div>
        <div>
          <h3 className="font-heading font-black text-2xl text-[#0B2545] uppercase">
            Solicite Orçamento no WhatsApp
          </h3>
          <p className="text-xs text-slate-500 font-body">
            Preencha abaixo para gerar a mensagem pronta diretamente para o técnico de plantão
          </p>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3.5 bg-red-50 border border-red-200 rounded-md text-red-700 text-xs font-bold flex items-center gap-2 font-body">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className="mb-4 p-3.5 bg-emerald-50 border border-emerald-200 rounded-md text-emerald-800 text-xs font-bold flex items-center gap-2 font-body">
          <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
          <span>Formulário validado! Redirecionando para o WhatsApp...</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 font-body">
        {/* Nome */}
        <div>
          <label htmlFor="form-name" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#0B2545] mb-1">
            Seu Nome <span className="text-red-600">*</span>
          </label>
          <input
            id="form-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ex: Carlos Silva"
            className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 bg-[#F2F4F7] text-slate-900 focus:ring-2 focus:ring-[#1368AA] focus:outline-none text-sm"
          />
        </div>

        {/* Bairro ou Cidade */}
        <div>
          <label htmlFor="form-location" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#0B2545] mb-1">
            Bairro ou Cidade <span className="text-red-600">*</span>
          </label>
          <input
            id="form-location"
            type="text"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Ex: Água Verde, CIC, Batel, São José dos Pinhais"
            className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 bg-[#F2F4F7] text-slate-900 focus:ring-2 focus:ring-[#1368AA] focus:outline-none text-sm"
          />
        </div>

        {/* Tipo de Serviço */}
        <div>
          <label htmlFor="form-service" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#0B2545] mb-1">
            Tipo de Serviço
          </label>
          <select
            id="form-service"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 bg-[#F2F4F7] text-slate-900 focus:ring-2 focus:ring-[#1368AA] focus:outline-none text-sm font-body"
          >
            <option value="Desentupimento de Pia">Desentupimento de Pia de Cozinha/Banheiro</option>
            <option value="Desentupimento de Vaso Sanitário">Desentupimento de Vaso Sanitário</option>
            <option value="Desentupimento de Ralo">Desentupimento de Ralo (Box/Quintal)</option>
            <option value="Desentupimento de Esgoto">Desentupimento de Rede de Esgoto</option>
            <option value="Limpeza de Caixa de Gordura">Limpeza e Desentupimento de Caixa de Gordura</option>
            <option value="Caça Vazamentos e Reparos">Caça Vazamentos e Reparos Hidráulicos</option>
            <option value="Troca de Torneiras e Registros">Troca de Torneiras e Registros</option>
            <option value="Outro Serviço">Outro Serviço</option>
          </select>
        </div>

        {/* Descrição */}
        <div>
          <label htmlFor="form-description" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#0B2545] mb-1">
            Descrição Resumida (Opcional)
          </label>
          <textarea
            id="form-description"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Ex: Água da pia da cozinha não desce / Vaso borbulhando..."
            className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 bg-[#F2F4F7] text-slate-900 focus:ring-2 focus:ring-[#1368AA] focus:outline-none text-sm resize-none"
          />
        </div>

        {/* Preferência */}
        <div>
          <label htmlFor="form-preference" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#0B2545] mb-1">
            Preferência de Atendimento
          </label>
          <select
            id="form-preference"
            value={preference}
            onChange={(e) => setPreference(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 bg-[#F2F4F7] text-slate-900 focus:ring-2 focus:ring-[#1368AA] focus:outline-none text-sm font-body"
          >
            <option value="Urgente / Plantão">Urgente / Atendimento Rápido</option>
            <option value="Hoje no período da tarde">Hoje no período da tarde</option>
            <option value="Amanhã pela manhã">Amanhã pela manhã</option>
            <option value="Agendamento para fim de semana">Agendamento para o fim de semana</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          id="submit-whatsapp-form-btn"
          className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0B2545] font-heading font-black text-sm uppercase tracking-wider py-3.5 px-6 rounded-md shadow-sm transition-all active:scale-95 cursor-pointer"
        >
          <Send className="w-4 h-4 fill-[#0B2545]" />
          <span>Enviar Mensagem no WhatsApp</span>
        </button>
      </form>
    </div>
  );
};
