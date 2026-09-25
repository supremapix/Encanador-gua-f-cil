import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from './components/ErrorBoundary';
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
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname + window.location.search + window.location.hash);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname + window.location.search + window.location.hash);
    };

    // Handle internal link clicks without full reload for smooth SPA experience
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      // Ignore external or specialized link protocols
      if (
        target.getAttribute('target') === '_blank' ||
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('tel:') ||
        href.startsWith('mailto:') ||
        href.startsWith('whatsapp:')
      ) {
        return;
      }

      // Handle pure page anchor links like #contato
      if (href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }

      // Handle internal SPA navigation
      if (href.startsWith('/')) {
        e.preventDefault();
        window.history.pushState({}, '', href);
        setCurrentPath(href);

        try {
          const url = new URL(href, window.location.origin);
          if (url.hash) {
            setTimeout(() => {
              const element = document.querySelector(url.hash);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }, 50);
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        } catch {
          window.scrollTo(0, 0);
        }
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
    // Normalize path by stripping search params, hash, trailing slash, .html/.php extensions and converting to lowercase
    let rawPath = (currentPath || '/').split('?')[0].split('#')[0].toLowerCase();
    
    // Remove .html or .php trailing extensions if present
    rawPath = rawPath.replace(/(\.html|\.php)$/i, '');

    if (rawPath.length > 1 && rawPath.endsWith('/')) {
      rawPath = rawPath.slice(0, -1);
    }

    const path = rawPath || '/';

    // Helper to normalize strings for comparison
    const normalize = (str: string) =>
      str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

    // Static Legacy URL Aliases Map
    const LEGACY_STATIC_MAP: Record<string, string> = {
      '/index.php': '/',
      '/index.html': '/',
      '/home': '/',
      '/inicio': '/',
      '/index': '/',
      '/contato.html': '/contato',
      '/contato.php': '/contato',
      '/fale-conosco': '/contato',
      '/faleconosco': '/contato',
      '/contatos': '/contato',
      '/atendimento': '/contato',
      '/sobre.html': '/sobre',
      '/sobre.php': '/sobre',
      '/sobre-nos': '/sobre',
      '/quem-somos': '/sobre',
      '/empresa': '/sobre',
      '/servicos.html': '/servicos',
      '/servicos.php': '/servicos',
      '/nossos-servicos': '/servicos',
      '/servico': '/servicos',
      '/bairros.html': '/bairros',
      '/bairros-atendidos': '/bairros',
      '/locais-de-atendimento': '/bairros',
      '/regioes.html': '/regioes',
      '/vilas.html': '/regioes',
      '/vilas': '/regioes',
      '/cidades.html': '/cidades',
      '/duvidas.html': '/duvidas',
      '/faq': '/duvidas',
      '/perguntas-frequentes': '/duvidas',
      '/politica-de-privacidade.html': '/politica-de-privacidade',
      '/politica-de-privacidade.php': '/politica-de-privacidade',
      '/privacidade': '/politica-de-privacidade',
      '/termos-de-uso.html': '/termos-de-uso',
      '/termos.html': '/termos-de-uso',
      '/termos': '/termos-de-uso',
      '/sitemap.html': '/sitemap',
      '/sitemap.php': '/sitemap',
    };

    if (LEGACY_STATIC_MAP[path]) {
      const targetPath = LEGACY_STATIC_MAP[path];
      if (typeof window !== 'undefined' && window.location.pathname !== targetPath) {
        window.history.replaceState({}, '', targetPath);
      }
      if (targetPath === '/') return <HomePage />;
      if (targetPath === '/servicos') return <ServicesIndexPage />;
      if (targetPath === '/bairros') return <BairrosIndexPage />;
      if (targetPath === '/regioes') return <RegioesIndexPage />;
      if (targetPath === '/cidades') return <CidadesIndexPage />;
      if (targetPath === '/duvidas') return <DuvidasPage />;
      if (targetPath === '/sobre') return <SobrePage />;
      if (targetPath === '/contato') return <ContatoPage />;
      if (targetPath === '/politica-de-privacidade') return <PrivacyPolicyPage />;
      if (targetPath === '/termos-de-uso') return <TermsPage />;
      if (targetPath === '/sitemap') return <SitemapHtmlPage />;
    }

    // Direct Static Pages Match
    if (path === '' || path === '/') return <HomePage />;
    if (path === '/servicos') return <ServicesIndexPage />;
    if (path === '/desentupidora-curitiba' || path === '/encanador-curitiba') return <CuritibaPage />;
    if (path === '/desentupidora-cic' || path === '/encanador-cic') return <CicPage />;
    if (path === '/bairros') return <BairrosIndexPage />;
    if (path === '/regioes') return <RegioesIndexPage />;
    if (path === '/cidades') return <CidadesIndexPage />;
    if (path === '/duvidas') return <DuvidasPage />;
    if (path === '/sobre') return <SobrePage />;
    if (path === '/contato') return <ContatoPage />;
    if (path === '/politica-de-privacidade') return <PrivacyPolicyPage />;
    if (path === '/termos-de-uso') return <TermsPage />;
    if (path === '/sitemap') return <SitemapHtmlPage />;

    // Service Detail Route Match (/servicos/:slug)
    if (path.startsWith('/servicos/')) {
      const serviceSlug = path.replace('/servicos/', '');
      const matchedService = PLUMBING_SERVICES.find((s) => {
        const sSlug = normalize(s.slug);
        const candidate = normalize(serviceSlug);
        return sSlug === candidate || sSlug.replace(/-/g, '') === candidate.replace(/-/g, '');
      });
      if (matchedService) {
        return <ServiceDetailPage service={matchedService} />;
      }
    }

    // Bairro Detail Route Match (/bairro/:slug)
    if (path.startsWith('/bairro/')) {
      const bairroSlug = path.replace('/bairro/', '');
      const candidate = normalize(bairroSlug);
      const matchedBairro = CURITIBA_NEIGHBORHOODS.find((b) => {
        const bSlug = normalize(b.slug);
        const bName = normalize(b.name);
        return bSlug === candidate || bName === candidate;
      });
      if (matchedBairro) {
        return (
          <LocationPage
            name={matchedBairro.name}
            slug={matchedBairro.slug}
            locationType="bairro"
            officialName={`${matchedBairro.name}, Curitiba - PR`}
            regionOrParent={`Região ${matchedBairro.region} de Curitiba`}
            title={`Desentupidora no Bairro ${matchedBairro.name} em Curitiba | Água Fácil`}
            description={`Desentupidora no bairro ${matchedBairro.name}, Curitiba. Desentupimento de pias, vasos sanitários, ralos, esgoto e caixas de gordura com saída técnica da CIC.`}
            intro={`Precisa de desentupidora no bairro ${matchedBairro.name} em Curitiba? A Água Fácil Desentupidora atende residências, condomínios e estabelecimentos comerciais no ${matchedBairro.name} com total transparência e agilidade.`}
            geoContext={`O bairro ${matchedBairro.name} fica na Região ${matchedBairro.region} de Curitiba. Atendemos chamados no ${matchedBairro.name} com deslocamento direto a partir de nossa sede na ${COMPANY_DATA.address.street}, ${COMPANY_DATA.address.neighborhood}.`}
            highlights={[
              `Desentupimento de pias, vasos sanitários e ralos no ${matchedBairro.name}`,
              `Desobstrução de redes de esgoto e caixas de gordura`,
              `Equipamentos industriais roto-rooter sem danificar tubulações`,
              `Diagnóstico prévio e orçamento sem surpresas`
            ]}
            nearbyAreas={['Água Verde', 'Portão', 'CIC', 'Batel', 'Centro', 'Novo Mundo', 'Boqueirão']}
            faq={[
              {
                question: `A Água Fácil atende emergências de desentupimento no bairro ${matchedBairro.name}?`,
                answer: `Sim! Atendemos chamados no bairro ${matchedBairro.name} para desentupimento de pias, vasos, ralos e caixas de gordura.`
              },
              {
                question: `De onde sai a equipe técnica para o ${matchedBairro.name}?`,
                answer: `Os profissionais saem da nossa base operacional na ${COMPANY_DATA.address.street}, ${COMPANY_DATA.address.neighborhood} diretamente para o bairro ${matchedBairro.name}.`
              }
            ]}
            canonical={`${COMPANY_DATA.baseUrl}/bairro/${matchedBairro.slug}`}
          />
        );
      }
    }

    // Cidade Detail Route Match (/cidade/:slug)
    if (path.startsWith('/cidade/')) {
      const citySlug = path.replace('/cidade/', '');
      const candidate = normalize(citySlug);
      const matchedCity = SERVICE_CITIES.find((c) => {
        const cSlug = normalize(c.slug);
        const cName = normalize(c.name);
        return cSlug === candidate || cName === candidate;
      });
      if (matchedCity) {
        return (
          <LocationPage
            name={matchedCity.name}
            slug={matchedCity.slug}
            locationType="cidade"
            officialName={`${matchedCity.name} - PR`}
            regionOrParent="Região Metropolitana de Curitiba"
            title={`Desentupidora em ${matchedCity.name} PR | Água Fácil`}
            description={`Atendimento de desentupidora em ${matchedCity.name} PR. Desentupimento de pias, vasos, ralos, caixa de gordura e esgoto com saída técnica de Curitiba.`}
            intro={`Atendemos o município de ${matchedCity.name} na Região Metropolitana de Curitiba para desentupimento de pias, vasos, ralos e esgoto.`}
            geoContext={`O município de ${matchedCity.name} faz parte da RMC. Realizamos atendimento em ${matchedCity.name} com agilidade a partir de Curitiba.`}
            highlights={[
              `Desentupimento residencial e comercial em ${matchedCity.name}`,
              `Desobstrução de pias, vasos sanitários e caixas de gordura`,
              `Equipamentos elétricos roto-rooter de alta eficiência`,
              `Pré-orçamento orientativo via WhatsApp`
            ]}
            nearbyAreas={['Curitiba', 'São José dos Pinhais', 'Pinhais', 'Araucária', 'Campo Largo']}
            faq={[
              {
                question: `Vocês atendem todos os bairros de ${matchedCity.name}?`,
                answer: `Sim, prestamos atendimento em ${matchedCity.name} com deslocamento rápido a partir de nossa base em Curitiba.`
              }
            ]}
            canonical={`${COMPANY_DATA.baseUrl}/cidade/${matchedCity.slug}`}
          />
        );
      }
    }

    // Regiões Detail Route Match (/regioes/:slug)
    if (path.startsWith('/regioes/')) {
      const areaSlug = path.replace('/regioes/', '');
      const candidate = normalize(areaSlug);
      const matchedPopular = POPULAR_AREAS.find((p) => {
        const pSlug = normalize(p.slug);
        const pName = normalize(p.name);
        return pSlug === candidate || pName === candidate;
      });
      if (matchedPopular) {
        return (
          <LocationPage
            name={matchedPopular.name}
            slug={matchedPopular.slug}
            locationType="vila"
            officialName={`${matchedPopular.name}, Curitiba - PR`}
            regionOrParent={matchedPopular.parentNeighborhood}
            title={`Desentupidora na ${matchedPopular.name} em Curitiba | Água Fácil`}
            description={`Desentupidora na ${matchedPopular.name} (região do ${matchedPopular.parentNeighborhood}). Atendimento rápido para desentupir pias, vasos, ralos e esgoto.`}
            intro={`A Água Fácil Desentupidora atende a comunidade da ${matchedPopular.name} no bairro ${matchedPopular.parentNeighborhood} para desentupimentos residenciais e comerciais.`}
            geoContext={`A ${matchedPopular.name} é uma importante região situada no bairro ${matchedPopular.parentNeighborhood}. Nossa equipe presta serviços a partir da base na ${COMPANY_DATA.address.street}, ${COMPANY_DATA.address.neighborhood}.`}
            highlights={[
              `Atendimento rápido para moradores da ${matchedPopular.name}`,
              `Desentupimento mecânico de pias, vasos sanitários e ralos`,
              `Desobstrução de caixas de gordura e redes de esgoto`,
              `Atendimento via WhatsApp com pré-avaliação`
            ]}
            nearbyAreas={['Vila Sandra', 'Vila Verde', 'Caiuá', 'Vitória Régia', 'Sabará']}
            faq={[
              {
                question: `Qual o tempo estimado para atendimento na ${matchedPopular.name}?`,
                answer: `Como nossa base fica na CIC, o deslocamento para a ${matchedPopular.name} é extremamente rápido.`
              }
            ]}
            canonical={`${COMPANY_DATA.baseUrl}/regioes/${matchedPopular.slug}`}
          />
        );
      }
    }

    // CRITICAL SEO / HTTP RULE: Unmatched non-existent URLs return 404 Real NotFoundPage
    return <NotFoundPage />;
  };

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Layout>{renderContent()}</Layout>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
