import React, { useState } from 'react';
import { Play, Video } from 'lucide-react';
import { COMPANY_DATA } from '../data/company';

interface LiteYouTubeProps {
  videoId?: string;
  title?: string;
  contextTitle?: string;
  contextText?: string;
}

export const LiteYouTube: React.FC<LiteYouTubeProps> = ({
  videoId = COMPANY_DATA.video.embedId,
  title = COMPANY_DATA.video.title,
  contextTitle = "Vídeo Oficial de Apresentação",
  contextText = "Conheça como a Encanador Água Fácil 24H atua na Cidade Industrial de Curitiba (CIC) e em todos os bairros e cidades da Região Metropolitana com agilidade, transparência e profissionalismo."
}) => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <section aria-label="Vídeo informativo sobre nossos serviços" className="my-10 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl border border-slate-800">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Contextual Header */}
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
            <Video className="w-4 h-4" />
            <span>Vídeo Informativo</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {contextTitle}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {contextText}
          </p>
        </div>

        {/* Video Player Container */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl group">
          {isIframeLoaded ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
              loading="lazy"
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsIframeLoaded(true)}
              className="relative w-full h-full flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-cyan-500 rounded-xl overflow-hidden"
              aria-label={`Reproduzir vídeo: ${title}`}
            >
              {/* Thumbnail Image */}
              <img
                src={thumbnailUrl}
                alt={`Thumbnail do vídeo: ${title}`}
                width="1280"
                height="720"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors" />

              {/* Play Button */}
              <div className="absolute z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 group-hover:bg-red-500 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white ml-1" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md px-3.5 py-2 rounded-lg text-xs sm:text-sm text-slate-200 truncate text-left border border-slate-800">
                <span className="font-semibold text-white">{title}</span> — Clique para assistir
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
