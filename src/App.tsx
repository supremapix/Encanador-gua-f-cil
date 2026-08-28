import React from 'react';

export const App: React.FC = () => {
  return (
    <main
      id="site-desativado"
      className="min-h-screen w-full bg-white flex flex-col items-center justify-center p-6 text-center"
    >
      <div className="max-w-md w-full py-12 px-6">
        <h1 className="text-xl sm:text-2xl font-medium text-slate-800 tracking-tight mb-3">
          Site desativado
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Site desativado temporariamente. Entrar em contato com o suporte.
        </p>
      </div>
    </main>
  );
};

export default App;
