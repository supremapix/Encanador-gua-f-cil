import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { COMPANY_DATA } from '../data/company';

interface ContactFormProps {
  defaultLocation?: string;
  defaultService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  defaultLocation = "",
  defaultService = "Conserto de Vazamentos"
}) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState(defaultLocation);
  const [serviceType, setServiceType] = useState(defaultService);
  const [description, setDescription] = useState('');
  const [preference, setPreference] = useState('Urgente');
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
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
          <MessageSquare className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Solicite Atendimento Rápido
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Preencha abaixo para ser redirecionado com a mensagem pronta no WhatsApp
          </p>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3.5 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-300 text-sm flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className="mb-4 p-3.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-emerald-800 dark:text-emerald-200 text-sm flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
          <span>Formulário validado! Redirecionando para o WhatsApp...</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nome */}
        <div>
          <label htmlFor="form-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
            Seu Nome <span className="text-red-500">*</span>
          </label>
          <input
            id="form-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ex: Carlos Silva"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none text-sm"
          />
        </div>

        {/* Bairro ou Cidade */}
        <div>
          <label htmlFor="form-location" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
            Bairro ou Cidade <span className="text-red-500">*</span>
          </label>
          <input
            id="form-location"
            type="text"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Ex: Água Verde, CIC, São José dos Pinhais"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none text-sm"
          />
        </div>

        {/* Tipo de Serviço */}
        <div>
          <label htmlFor="form-service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
            Tipo de Serviço
          </label>
          <select
            id="form-service"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none text-sm"
          >
            <option value="Conserto de Vazamentos">Conserto e Reparo de Vazamentos</option>
            <option value="Troca de Torneiras e Registros">Troca e Conserto de Torneiras/Registros</option>
            <option value="Manutenção Hidráulica">Manutenção Hidráulica Geral</option>
            <option value="Instalação de Louças e Metais">Instalação de Louças e Vasos Sanitários</option>
            <option value="Desentupimento de Pias e Ralos">Desentupimento de Pias e Ralos</option>
            <option value="Troca de Tubulações">Troca e Reparo de Tubulações</option>
            <option value="Inspeção Hidráulica">Inspeção Preventiva</option>
            <option value="Outro Serviço">Outro Serviço Hidráulico</option>
          </select>
        </div>

        {/* Descrição do Problema */}
        <div>
          <label htmlFor="form-description" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
            Descrição do Problema (Opcional)
          </label>
          <textarea
            id="form-description"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Ex: Torneira pingando no banheiro / Infiltração na parede do quarto / Cano furado..."
            className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none text-sm resize-none"
          />
        </div>

        {/* Preferência de Atendimento */}
        <div>
          <label htmlFor="form-preference" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
            Preferência de Atendimento
          </label>
          <select
            id="form-preference"
            value={preference}
            onChange={(e) => setPreference(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none text-sm"
          >
            <option value="Urgente / O quanto antes">Urgente / O quanto antes</option>
            <option value="Hoje no período da tarde">Hoje no período da tarde</option>
            <option value="Amanhã pela manhã">Amanhã pela manhã</option>
            <option value="Agendamento para fim de semana">Agendamento para o fim de semana</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          id="submit-whatsapp-form-btn"
          className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95"
        >
          <Send className="w-5 h-5" />
          <span>Enviar Mensagem no WhatsApp</span>
        </button>
      </form>
    </div>
  );
};
