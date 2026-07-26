import { Heart } from "lucide-react";

export function SupremaCredit() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-4 border-t border-slate-700/50 flex justify-center items-center">
      <div className="rounded-full px-6 py-2.5 shadow-lg flex items-center justify-center transition-all duration-300 bg-slate-900 border border-slate-800 text-slate-200">
        <p className="text-sm sm:text-base font-bold flex flex-wrap items-center justify-center gap-2">
          <span className="opacity-90">Desenvolvido com</span>

          <Heart
            size={14}
            aria-hidden="true"
            className="text-red-500 motion-safe:animate-pulse shrink-0"
          />

          <span className="opacity-90">por</span>

          <a
            id="developer-suprema-link"
            href="https://supremasite.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="font-black inline-flex items-center gap-2 cursor-pointer border-b border-dashed border-cyan-400 hover:text-cyan-300 transition-all text-white"
            aria-label="Acessar o site da Suprema Sites Express"
          >
            Suprema Sites Express

            <img
              src="https://img.supremamidia.com/suprema-img.png"
              alt="Suprema Sites Express"
              width="90"
              height="18"
              loading="lazy"
              decoding="async"
              className="h-[18px] w-auto inline select-none shrink-0"
              referrerPolicy="no-referrer"
            />
          </a>
        </p>
      </div>
    </div>
  );
}
