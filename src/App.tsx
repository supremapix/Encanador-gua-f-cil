import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { HomePage } from './pages/Home';
import { ServicesIndexPage } from './pages/ServicesIndex';
import { ServiceDetailPage } from './pages/ServiceDetail';
import { CuritibaPage } from './pages/CuritibaPage';
import { CicPage } from './pages/CicPage';
import { BairrosIndexPage } from './pages/BairrosIndex';
import { RegioesIndexPage } from './pages/RegioesIndex';
import { CidadesIndexPage } from './pages/CidadesIndex';
import { LocationPage } from './components/LocationPage';
import { DuvidasPage } from './pages/DuvidasPage';
import { SobrePage } from './pages/SobrePage';
import { ContatoPage } from './pages/ContatoPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { SitemapHtmlPage } from './pages/SitemapHtmlPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { PLUMBING_SERVICES } from './data/services';
import { CURITIBA_NEIGHBORHOODS } from './data/curitibaNeighborhoods';
import { POPULAR_AREAS } from './data/popularAreas';
import { SERVICE_CITIES } from './data/serviceCities';
import { COMPANY_DATA } from './data/company';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    // Handle internal link clicks without full reload for smooth SPA experience
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target && target.getAttribute('href')?.startsWith('/') && target.getAttribute('target') !== '_blank') {
        const href = target.getAttribute('href')!;
        e.preventDefault();
        window.history.pushState({}, '', href);
        setCurrentPath(href);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  const renderContent = () => {
    const path = currentPath.replace(/\/$/, '') || '/';

    // Static Pages
    if (path === '/') return <HomePage />;
    if (path === '/servicos') return <ServicesIndexPage />;
    if (path === '/encanador-curitiba') return <CuritibaPage />;
    if (path === '/encanador-cic') return <CicPage />;
    if (path === '/bairros') return <BairrosIndexPage />;
    if (path === '/regioes') return <RegioesIndexPage />;
    if (path === '/cidades') return <CidadesIndexPage />;
    if (path === '/duvidas') return <DuvidasPage />;
    if (path === '/sobre') return <SobrePage />;
    if (path === '/contato') return <ContatoPage />;
    if (path === '/politica-de-privacidade') return <PrivacyPolicyPage />;
    if (path === '/termos-de-uso') return <TermsPage />;
    if (path === '/sitemap') return <SitemapHtmlPage />;

    // Dynamic Service Pages
    if (path.startsWith('/servicos/')) {
      const slug = path.replace('/servicos/', '');
      const service = PLUMBING_SERVICES.find((s) => s.slug === slug);
      if (service) return <ServiceDetailPage service={service} />;
    }

    // Dynamic Bairro Pages (75 Bairros)
    if (path.startsWith('/bairros/')) {
      const slug = path.replace('/bairros/', '');
      const bairro = CURITIBA_NEIGHBORHOODS.find((b) => b.slug === slug);
      if (bairro) {
        return (
          <LocationPage
            name={bairro.name}
            slug={bairro.slug}
            locationType="bairro"
            officialName={`${bairro.name}, Curitiba - PR`}
            regionOrParent={`Região ${bairro.region} de Curitiba`}
            title={`Encanador no Bairro ${bairro.name} em Curitiba`}
            description={`Serviços de encanador no bairro ${bairro.name}, Curitiba. Atendimento ágil para vazamentos, troca de registros e reparos hidráulicos com saída técnica da CIC.`}
            intro={`Precisa de encanador no bairro ${bairro.name} em Curitiba? A Encanador Água Fácil 24H atende residências, apartamentos e comércios no ${bairro.name} com transparência técnica.`}
            geoContext={`O bairro ${bairro.name} está localizado na Região ${bairro.region} de Curitiba. Atendemos chamados no ${bairro.name} com rápida saída técnica da nossa sede na Rua das Águias, 320 – CIC.`}
            highlights={[
              `Atendimento para casas e condomínios no ${bairro.name}`,
              `Conserto imediato de vazamentos de água em canos e registros`,
              `Troca de torneiras, reparo de descargas e louças sanitárias`,
              `Diagnóstico hidráulico sem quebra desnecessária`
            ]}
            nearbyAreas={[
              'Água Verde', 'Portão', 'CIC', 'Batel', 'Centro', 'Novo Mundo', 'Boqueirão'
            ]}
            faq={[
              {
                question: `A empresa atende emergências no bairro ${bairro.name}?`,
                answer: `Sim! Atendemos chamados urgentes de encanador no ${bairro.name} para contenção de vazamentos e trocas de registros.`
              },
              {
                question: `Qual a origem do atendimento para o ${bairro.name}?`,
                answer: `Os profissionais saem da nossa sede na Rua das Águias, 320 – Cidade Industrial de Curitiba (CIC) diretamente para o bairro ${bairro.name}.`
              }
            ]}
            canonical={`${COMPANY_DATA.baseUrl}/bairros/${bairro.slug}`}
          />
        );
      }
    }

    // Dynamic Vila / Popular Region Pages
    if (path.startsWith('/regioes/')) {
      const slug = path.replace('/regioes/', '');
      const popular = POPULAR_AREAS.find((p) => p.slug === slug);
      if (popular) {
        return (
          <LocationPage
            name={popular.name}
            slug={popular.slug}
            locationType="vila"
            officialName={`${popular.name}, Curitiba - PR`}
            regionOrParent={popular.parentNeighborhood}
            title={`Encanador na ${popular.name} em Curitiba`}
            description={`Encanador na ${popular.name} (região do ${popular.parentNeighborhood}). Atendimento rápido para vazamentos, registros e reparos hidráulicos.`}
            intro={`A Encanador Água Fácil 24H atende a comunidade da ${popular.name} no bairro ${popular.parentNeighborhood} com agilidade para vazamentos e manutenções.`}
            geoContext={`A ${popular.name} é uma importante região popular situada no bairro ${popular.parentNeighborhood}. Nossa equipe presta serviços hidráulicos rápidos a partir da sede na CIC (Rua das Águias, 320).`}
            highlights={[
              `Atendimento imediato para moradores da ${popular.name}`,
              `Conserto de vazamentos e infiltrações em tubulações`,
              `Troca e reparo de torneiras, chuveiros e válvulas`,
              `Suporte prévio via WhatsApp com foto/vídeo`
            ]}
            nearbyAreas={['Vila Sandra', 'Vila Verde', 'Caiuá', 'Vitória Régia', 'Sabará']}
            faq={[
              {
                question: `Qual o tempo estimado de chegada na ${popular.name}?`,
                answer: `Devido à localização da nossa sede na CIC, o deslocamento para a ${popular.name} é extremamente rápido.`
              }
            ]}
            canonical={`${COMPANY_DATA.baseUrl}/regioes/${popular.slug}`}
          />
        );
      }
    }

    // Dynamic City Pages (15 RMC Cities)
    if (path.startsWith('/cidades/')) {
      const slug = path.replace('/cidades/', '');
      const city = SERVICE_CITIES.find((c) => c.slug === slug);
      if (city) {
        return (
          <LocationPage
            name={city.name}
            slug={city.slug}
            locationType="cidade"
            officialName={`${city.name} - PR`}
            regionOrParent="Região Metropolitana de Curitiba"
            title={`Encanador em ${city.name} PR | Atendimento Rápido`}
            description={`Serviços de encanador em ${city.name} PR. Atendimento para residências, condomínios e indústrias com saída técnica da CIC Curitiba.`}
            intro={`Atendemos o município de ${city.name} na Região Metropolitana de Curitiba para conserto de vazamentos, instalações hidráulicas e manutenções gerais.`}
            geoContext={`O município de ${city.name} faz parte da RMC. Realizamos atendimento em ${city.name} mediante deslocamento rápido a partir de Curitiba.`}
            highlights={[
              `Serviços de encanador residencial e comercial em ${city.name}`,
              `Detecção e reparo rápido de vazamentos de água`,
              `Substituição de tubulações de água fria e quente`,
              `Instalação e regulagem de torneiras e registros`
            ]}
            nearbyAreas={['Curitiba', 'São José dos Pinhais', 'Pinhais', 'Araucária', 'Campo Largo']}
            faq={[
              {
                question: `Vocês atendem todos os bairros de ${city.name}?`,
                answer: `Sim, prestamos atendimento em ${city.name} em um raio de até 100 km a partir da nossa sede em Curitiba.`
              }
            ]}
            canonical={`${COMPANY_DATA.baseUrl}/cidades/${city.slug}`}
          />
        );
      }
    }

    return <NotFoundPage />;
  };

  return (
    <HelmetProvider>
      <Layout>{renderContent()}</Layout>
    </HelmetProvider>
  );
};

export default App;
