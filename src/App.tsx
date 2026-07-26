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

    // Helper to normalize strings for comparison (removes accents/diacritics & non-alphanumeric)
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

    // Extract potential candidate slug from various legacy URL patterns
    // e.g. /bairro/caiua, /bairros/caiua, /regiao/caiua, /regioes/caiua, /cidade/caiua, /servico/caiua, /encanador-em-caiua, etc.
    let candidateSlug = path;
    const prefixesToStrip = [
      '/bairro/',
      '/bairros/',
      '/regiao/',
      '/regioes/',
      '/vila/',
      '/vilas/',
      '/cidade/',
      '/cidades/',
      '/servico/',
      '/servicos/',
      '/encanador-em-',
      '/encanador-',
      '/desentupidora-',
      '/caca-vazamento-',
      '/bairro-',
      '/regiao-',
      '/cidade-',
      '/atendimento/',
      '/local/',
      '/locais/'
    ];

    for (const prefix of prefixesToStrip) {
      if (candidateSlug.startsWith(prefix)) {
        candidateSlug = candidateSlug.slice(prefix.length);
        break;
      }
    }

    const normCandidate = normalize(candidateSlug);

    // 1. Try finding matching Bairro in CURITIBA_NEIGHBORHOODS (75 Bairros)
    const matchedBairro = CURITIBA_NEIGHBORHOODS.find(
      (b) => normalize(b.slug) === normCandidate || normalize(b.name) === normCandidate
    );

    if (matchedBairro) {
      const canonicalPath = `/bairros/${matchedBairro.slug}`;
      if (typeof window !== 'undefined' && window.location.pathname !== canonicalPath) {
        window.history.replaceState({}, '', canonicalPath);
      }
      return (
        <LocationPage
          name={matchedBairro.name}
          slug={matchedBairro.slug}
          locationType="bairro"
          officialName={`${matchedBairro.name}, Curitiba - PR`}
          regionOrParent={`Região ${matchedBairro.region} de Curitiba`}
          title={`Encanador no Bairro ${matchedBairro.name} em Curitiba`}
          description={`Serviços de encanador no bairro ${matchedBairro.name}, Curitiba. Atendimento ágil para vazamentos, troca de registros e reparos hidráulicos com saída técnica da CIC.`}
          intro={`Precisa de encanador no bairro ${matchedBairro.name} em Curitiba? A Encanador Água Fácil 24H atende residências, apartamentos e comércios no ${matchedBairro.name} com transparência técnica.`}
          geoContext={`O bairro ${matchedBairro.name} está localizado na Região ${matchedBairro.region} de Curitiba. Atendemos chamados no ${matchedBairro.name} com rápida saída técnica da nossa sede na Rua das Águias, 320 – CIC.`}
          highlights={[
            `Atendimento para casas e condomínios no ${matchedBairro.name}`,
            `Conserto imediato de vazamentos de água em canos e registros`,
            `Troca de torneiras, reparo de descargas e louças sanitárias`,
            `Diagnóstico hidráulico sem quebra desnecessária`
          ]}
          nearbyAreas={[
            'Água Verde', 'Portão', 'CIC', 'Batel', 'Centro', 'Novo Mundo', 'Boqueirão'
          ]}
          faq={[
            {
              question: `A empresa atende emergências no bairro ${matchedBairro.name}?`,
              answer: `Sim! Atendemos chamados urgentes de encanador no ${matchedBairro.name} para contenção de vazamentos e trocas de registros.`
            },
            {
              question: `Qual a origem do atendimento para o ${matchedBairro.name}?`,
              answer: `Os profissionais saem da nossa sede na Rua das Águias, 320 – Cidade Industrial de Curitiba (CIC) diretamente para o bairro ${matchedBairro.name}.`
            }
          ]}
          canonical={`${COMPANY_DATA.baseUrl}/bairros/${matchedBairro.slug}`}
        />
      );
    }

    // 2. Try finding matching Vila / Popular Area in POPULAR_AREAS (e.g. Caiuá, Vila Sandra)
    const matchedPopular = POPULAR_AREAS.find(
      (p) => normalize(p.slug) === normCandidate || normalize(p.name) === normCandidate
    );

    if (matchedPopular) {
      const canonicalPath = `/regioes/${matchedPopular.slug}`;
      if (typeof window !== 'undefined' && window.location.pathname !== canonicalPath) {
        window.history.replaceState({}, '', canonicalPath);
      }
      return (
        <LocationPage
          name={matchedPopular.name}
          slug={matchedPopular.slug}
          locationType="vila"
          officialName={`${matchedPopular.name}, Curitiba - PR`}
          regionOrParent={matchedPopular.parentNeighborhood}
          title={`Encanador na ${matchedPopular.name} em Curitiba`}
          description={`Encanador na ${matchedPopular.name} (região do ${matchedPopular.parentNeighborhood}). Atendimento rápido para vazamentos, registros e reparos hidráulicos.`}
          intro={`A Encanador Água Fácil 24H atende a comunidade da ${matchedPopular.name} no bairro ${matchedPopular.parentNeighborhood} com agilidade para vazamentos e manutenções.`}
          geoContext={`A ${matchedPopular.name} é uma importante região popular situada no bairro ${matchedPopular.parentNeighborhood}. Nossa equipe presta serviços hidráulicos rápidos a partir da sede na CIC (Rua das Águias, 320).`}
          highlights={[
            `Atendimento imediato para moradores da ${matchedPopular.name}`,
            `Conserto de vazamentos e infiltrações em tubulações`,
            `Troca e reparo de torneiras, chuveiros e válvulas`,
            `Suporte prévio via WhatsApp com foto/vídeo`
          ]}
          nearbyAreas={['Vila Sandra', 'Vila Verde', 'Caiuá', 'Vitória Régia', 'Sabará']}
          faq={[
            {
              question: `Qual o tempo estimado de chegada na ${matchedPopular.name}?`,
              answer: `Devido à localização da nossa sede na CIC, o deslocamento para a ${matchedPopular.name} é extremamente rápido.`
            }
          ]}
          canonical={`${COMPANY_DATA.baseUrl}/regioes/${matchedPopular.slug}`}
        />
      );
    }

    // 3. Try finding matching City in SERVICE_CITIES (15 RMC Cities)
    const matchedCity = SERVICE_CITIES.find(
      (c) => normalize(c.slug) === normCandidate || normalize(c.name) === normCandidate
    );

    if (matchedCity) {
      const canonicalPath = `/cidades/${matchedCity.slug}`;
      if (typeof window !== 'undefined' && window.location.pathname !== canonicalPath) {
        window.history.replaceState({}, '', canonicalPath);
      }
      return (
        <LocationPage
          name={matchedCity.name}
          slug={matchedCity.slug}
          locationType="cidade"
          officialName={`${matchedCity.name} - PR`}
          regionOrParent="Região Metropolitana de Curitiba"
          title={`Encanador em ${matchedCity.name} PR | Atendimento Rápido`}
          description={`Serviços de encanador em ${matchedCity.name} PR. Atendimento para residências, condomínios e indústrias com saída técnica da CIC Curitiba.`}
          intro={`Atendemos o município de ${matchedCity.name} na Região Metropolitana de Curitiba para conserto de vazamentos, instalações hidráulicas e manutenções gerais.`}
          geoContext={`O município de ${matchedCity.name} faz parte da RMC. Realizamos atendimento em ${matchedCity.name} mediante deslocamento rápido a partir de Curitiba.`}
          highlights={[
            `Serviços de encanador residencial e comercial em ${matchedCity.name}`,
            `Detecção e reparo rápido de vazamentos de água`,
            `Substituição de tubulações de água fria e quente`,
            `Instalação e regulagem de torneiras e registros`
          ]}
          nearbyAreas={['Curitiba', 'São José dos Pinhais', 'Pinhais', 'Araucária', 'Campo Largo']}
          faq={[
            {
              question: `Vocês atendem todos os bairros de ${matchedCity.name}?`,
              answer: `Sim, prestamos atendimento em ${matchedCity.name} em um raio de até 100 km a partir da nossa sede em Curitiba.`
            }
          ]}
          canonical={`${COMPANY_DATA.baseUrl}/cidades/${matchedCity.slug}`}
        />
      );
    }

    // 4. Try finding matching Service in PLUMBING_SERVICES
    const matchedService = PLUMBING_SERVICES.find(
      (s) => normalize(s.slug) === normCandidate || normalize(s.title) === normCandidate
    );

    if (matchedService) {
      const canonicalPath = `/servicos/${matchedService.slug}`;
      if (typeof window !== 'undefined' && window.location.pathname !== canonicalPath) {
        window.history.replaceState({}, '', canonicalPath);
      }
      return <ServiceDetailPage service={matchedService} />;
    }

    // Fallback for any unknown / old unmatched route: redirect smoothly to homepage index without 404 error
    if (typeof window !== 'undefined' && window.location.pathname !== '/') {
      window.history.replaceState({}, '', '/');
    }
    return <HomePage />;
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
