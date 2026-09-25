import { PLUMBING_SERVICES } from '../data/services';

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  h1: string;
  canonical: string;
  type: 'home' | 'service_index' | 'service_detail' | 'neighborhood_index' | 'neighborhood_detail' | 'region_index' | 'region_detail' | 'city_index' | 'city_detail' | 'institutional' | 'curitiba' | 'cic';
}

const BASE = "https://www.aguafacil.app.br";

export function getAllIndexableRoutes(): RouteMeta[] {
  const routes: RouteMeta[] = [
    {
      path: "/",
      title: "Desentupidora em Curitiba | Água Fácil Desentupidora 24H",
      description: "Água Fácil Desentupidora em Curitiba e Região Metropolitana. Desentupimento de pias, vasos sanitários, ralos, esgoto e caixas de gordura. Sede na CIC (Rua Luiz Maltaca, 36). Solicite orçamento pelo WhatsApp!",
      h1: "Desentupidora em Curitiba – Água Fácil",
      canonical: `${BASE}/`,
      type: "home"
    },
    {
      path: "/servicos",
      title: "Serviços de Desentupimento em Curitiba | Água Fácil Desentupidora",
      description: "Conheça todos os serviços da Água Fácil Desentupidora: desentupimento de pia, vaso sanitário, ralo, rede de esgoto, caixa de gordura e caça vazamentos em Curitiba e RMC.",
      h1: "Serviços Especializados de Desentupimento e Hidráulica",
      canonical: `${BASE}/servicos`,
      type: "service_index"
    },
    {
      path: "/desentupidora-curitiba",
      title: "Desentupidora em Curitiba PR | Atendimento Rápido nos Bairros",
      description: "Desentupidora com atendimento nos bairros de Curitiba. Desentupimento mecânico de pias, vasos, ralos, esgoto e caixa de gordura com base operacional na CIC.",
      h1: "Desentupidora em Curitiba",
      canonical: `${BASE}/desentupidora-curitiba`,
      type: "curitiba"
    },
    {
      path: "/desentupidora-cic",
      title: "Desentupidora na CIC Curitiba | Sede na Rua Luiz Maltaca",
      description: "Desentupidora na Cidade Industrial de Curitiba (CIC). Atendimento direto da nossa sede na Rua Luiz Maltaca, 36. Agilidade para desentupir pias, vasos, ralos e esgoto.",
      h1: "Desentupidora na Cidade Industrial de Curitiba – CIC",
      canonical: `${BASE}/desentupidora-cic`,
      type: "cic"
    },
    {
      path: "/bairros",
      title: "Desentupidora nos Bairros de Curitiba | Guia de Atendimento",
      description: "Atendimento de desentupidora nos principais bairros de Curitiba: CIC, Água Verde, Batel, Portão, Centro, Boqueirão, Sítio Cercado, Pinheirinho e mais.",
      h1: "Atendimento de Desentupidora nos Bairros de Curitiba",
      canonical: `${BASE}/bairros`,
      type: "neighborhood_index"
    },
    {
      path: "/regioes",
      title: "Desentupidora em Vilas e Regiões de Curitiba | Água Fácil",
      description: "Atendimento de desentupidora em vilas e loteamentos da CIC e Curitiba: Vila Sandra, Vila Verde, Caiuá, Vitória Régia e entornos.",
      h1: "Atendimento em Vilas e Regiões de Curitiba",
      canonical: `${BASE}/regioes`,
      type: "region_index"
    },
    {
      path: "/cidades",
      title: "Desentupidora na Região Metropolitana de Curitiba | Cidades Atendidas",
      description: "Serviços de desentupidora em São José dos Pinhais, Araucária, Pinhais, Colombo, Campo Largo, Fazenda Rio Grande e municípios vizinhos.",
      h1: "Desentupidora nas Cidades da Região Metropolitana",
      canonical: `${BASE}/cidades`,
      type: "city_index"
    },
    {
      path: "/duvidas",
      title: "Dúvidas Frequentes | Água Fácil Desentupidora Curitiba",
      description: "Tire suas dúvidas sobre desentupimento de pias, vasos, esgoto, formas de orçamento, equipamentos utilizados e tempo de atendimento em Curitiba.",
      h1: "Perguntas Frequentes sobre Desentupimento",
      canonical: `${BASE}/duvidas`,
      type: "institutional"
    },
    {
      path: "/sobre",
      title: "Sobre a Empresa | Água Fácil Desentupidora Curitiba",
      description: "Conheça a Água Fácil Desentupidora, sediada na Rua Luiz Maltaca, 36 – CIC. Empresa especializada em desentupimento e manutenção hidráulica em Curitiba e RMC.",
      h1: "Sobre a Água Fácil Desentupidora",
      canonical: `${BASE}/sobre`,
      type: "institutional"
    },
    {
      path: "/contato",
      title: "Contato e Orçamento | Água Fácil Desentupidora (41) 98517-1966",
      description: "Entre em contato com a Água Fácil Desentupidora pelo WhatsApp (41) 98517-1966 ou Telefone (41) 3345-1194. Solicite atendimento em Curitiba e Região.",
      h1: "Fale Conosco e Solicite Orçamento",
      canonical: `${BASE}/contato`,
      type: "institutional"
    },
    {
      path: "/politica-de-privacidade",
      title: "Política de Privacidade | Água Fácil Desentupidora",
      description: "Política de privacidade e proteção de dados do site da Água Fácil Desentupidora em Curitiba.",
      h1: "Política de Privacidade",
      canonical: `${BASE}/politica-de-privacidade`,
      type: "institutional"
    },
    {
      path: "/termos-de-uso",
      title: "Termos de Uso | Água Fácil Desentupidora",
      description: "Termos e condições de uso das informações do site da Água Fácil Desentupidora.",
      h1: "Termos e Condições de Uso",
      canonical: `${BASE}/termos-de-uso`,
      type: "institutional"
    },
    {
      path: "/sitemap",
      title: "Mapa do Site | Água Fácil Desentupidora Curitiba",
      description: "Índice navegável de todas as páginas de serviços de desentupimento e áreas atendidas pela Água Fácil Desentupidora em Curitiba.",
      h1: "Mapa do Site (Sitemap HTML)",
      canonical: `${BASE}/sitemap`,
      type: "institutional"
    }
  ];

  // Specific Services (7 core services)
  PLUMBING_SERVICES.forEach(service => {
    routes.push({
      path: `/servicos/${service.slug}`,
      title: `${service.title} em Curitiba | Água Fácil Desentupidora`,
      description: `${service.shortDesc} Atendimento para residências, condomínios e comércios em Curitiba e Região Metropolitana.`,
      h1: `${service.title} em Curitiba`,
      canonical: `${BASE}/servicos/${service.slug}`,
      type: "service_detail"
    });
  });

  // Verified High-Priority Curitiba Bairro Hubs (16 key neighborhoods with verified logistic routing)
  const KEY_BAIRROS = [
    { slug: 'cidade-industrial-curitiba', name: 'Cidade Industrial de Curitiba (CIC)', region: 'Sul / Oeste' },
    { slug: 'batel', name: 'Batel', region: 'Central' },
    { slug: 'agua-verde', name: 'Água Verde', region: 'Central / Sul' },
    { slug: 'portao', name: 'Portão', region: 'Sul' },
    { slug: 'centro', name: 'Centro', region: 'Central' },
    { slug: 'boqueirao', name: 'Boqueirão', region: 'Sul' },
    { slug: 'sitio-cercado', name: 'Sítio Cercado', region: 'Sul' },
    { slug: 'pinheirinho', name: 'Pinheirinho', region: 'Sul' },
    { slug: 'santa-felicidade', name: 'Santa Felicidade', region: 'Norte / Oeste' },
    { slug: 'bigorrilho', name: 'Bigorrilho', region: 'Oeste' },
    { slug: 'cajuru', name: 'Cajuru', region: 'Leste' },
    { slug: 'taruma', name: 'Tarumã', region: 'Leste' },
    { slug: 'capao-raso', name: 'Capão Raso', region: 'Sul' },
    { slug: 'uberaba', name: 'Uberaba', region: 'Leste' },
    { slug: 'xaxim', name: 'Xaxim', region: 'Sul' },
    { slug: 'novo-mundo', name: 'Novo Mundo', region: 'Sul' },
  ];

  KEY_BAIRROS.forEach(b => {
    routes.push({
      path: `/bairro/${b.slug}`,
      title: `Desentupidora no Bairro ${b.name} em Curitiba | Água Fácil`,
      description: `Serviços de desentupimento de pias, vasos, ralos e esgoto no bairro ${b.name} em Curitiba. Atendimento rápido saindo da base na CIC.`,
      h1: `Desentupidora no Bairro ${b.name} em Curitiba`,
      canonical: `${BASE}/bairro/${b.slug}`,
      type: "neighborhood_detail"
    });
  });

  // Verified RMC City Hubs (8 key RMC cities)
  const KEY_CITIES = [
    { slug: 'sao-jose-dos-pinhais', name: 'São José dos Pinhais' },
    { slug: 'araucaria', name: 'Araucária' },
    { slug: 'pinhais', name: 'Pinhais' },
    { slug: 'colombo', name: 'Colombo' },
    { slug: 'campo-largo', name: 'Campo Largo' },
    { slug: 'fazenda-rio-grande', name: 'Fazenda Rio Grande' },
    { slug: 'piraquara', name: 'Piraquara' },
    { slug: 'almirante-tamandare', name: 'Almirante Tamandaré' }
  ];

  KEY_CITIES.forEach(c => {
    routes.push({
      path: `/cidade/${c.slug}`,
      title: `Desentupidora em ${c.name} PR | Água Fácil`,
      description: `Atendimento de desentupidora em ${c.name} PR. Desentupimento de pias, vasos sanitários, ralos, caixa de gordura e esgoto.`,
      h1: `Desentupidora em ${c.name} – PR`,
      canonical: `${BASE}/cidade/${c.slug}`,
      type: "city_detail"
    });
  });

  // Verified Popular Area Hubs (4 key areas)
  const KEY_AREAS = [
    { slug: 'caiua', name: 'Caiuá', parent: 'CIC' },
    { slug: 'vila-sandra', name: 'Vila Sandra', parent: 'CIC' },
    { slug: 'vila-verde', name: 'Vila Verde', parent: 'CIC' },
    { slug: 'vitoria-regia', name: 'Vitória Régia', parent: 'CIC' }
  ];

  KEY_AREAS.forEach(a => {
    routes.push({
      path: `/regioes/${a.slug}`,
      title: `Desentupidora na ${a.name} em Curitiba | Água Fácil`,
      description: `Atendimento de desentupidora na ${a.name} (${a.parent}). Saída rápida da base na CIC para desentupir pias, vasos, ralos e esgoto.`,
      h1: `Desentupidora na ${a.name} (${a.parent})`,
      canonical: `${BASE}/regioes/${a.slug}`,
      type: "region_detail"
    });
  });

  return routes;
}

export const INDEXABLE_ROUTES = getAllIndexableRoutes();
