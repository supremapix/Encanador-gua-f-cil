import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingActions } from './FloatingActions';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 font-sans antialiased text-slate-900 dark:text-slate-100">
      <a href="#conteudo-principal" className="skip-link">Pular para o conteúdo</a>
      <Header />
      <div className="flex-1" id="conteudo-principal" tabIndex={-1}>{children}</div>
      <Footer />
      <FloatingActions />
    </div>
  );
};
