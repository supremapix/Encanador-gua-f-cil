import { CURITIBA_NEIGHBORHOODS } from '../data/curitibaNeighborhoods';
import { POPULAR_AREAS } from '../data/popularAreas';
import { SERVICE_CITIES } from '../data/serviceCities';
import { PLUMBING_SERVICES } from '../data/services';

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  h1: string;
  canonical: string;
  type: 'home' | 'service_index' | 'service_detail' | 'neighborhood_index' | 'neighborhood_detail' | 'region_index' | 'region_detail' | 'city_index' | 'city_detail' | 'institutional' | 'curitiba' | 'cic';
}

const BASE = "https://www.encanador.servicosnobairro.com.br";

export function getAllIndexableRoutes(): RouteMeta[] {
  const routes: RouteMeta[] = [
    {
      path: "/",
      title: "Encanador em Curitiba e Região | Encanador Água Fácil 24H",
      description: "Serviços de encanador em Curitiba e Região Metropolitana. Reparo de vazamentos, troca de torneiras, registros e louças. Sede na CIC (Rua das Águias, 320). Solicite orçamento via WhatsApp!",
      h1: "Encanador em Curitiba e Região Metropolitana",
      canonical: `${BASE}/`,
      type: "home"
    },
    {
      path: "/servicos",
      title: "Serviços de Encanador em Curitiba | Reparos Hidráulicos",
      description: "Conheça os serviços da Encanador Água Fácil 24H: conserto de vazamentos, troca de registros, manutenção preventiva, instalação de louças e desentupimento de pias.",
      h1: "Nossos Serviços de Encanamento e Hidráulica",
      canonical: `${BASE}/servicos`,
      type: "service_index"
    },
    {
      path: "/encanador-curitiba",
      title: "Encanador em Curitiba PR | Atendimento nos 75 Bairros",
      description: "Atendimento de encanador em todos os 75 bairros oficiais de Curitiba. Diagnóstico preciso de vazamentos, troca de torneiras e registros com rapidez e transparência.",
      h1: "Atendimento de Encanador em Curitiba",
      canonical: `${BASE}/encanador-curitiba`,
      type: "curitiba"
    },
    {
      path: "/encanador-cic",
      title: "Encanador na CIC – Cidade Industrial de Curitiba | Sede na Rua das Águias",
      description: "Encanador na Cidade Industrial de Curitiba (CIC). Atendimento direto da nossa sede na Rua das Águias, 320. Rapidez máxima para vazamentos e serviços hidráulicos.",
      h1: "Encanador na Cidade Industrial de Curitiba – CIC",
      canonical: `${BASE}/encanador-cic`,
      type: "cic"
    },
    {
      path: "/bairros",
      title: "Encanador por Bairros de Curitiba | Guia dos 75 Bairros Oficiais",
      description: "Encontre encanador em qualquer um dos 75 bairros oficiais de Curitiba: Água Verde, Batel, Portão, CIC, Centro, Boqueirão, Sítio Cercado e mais.",
      h1: "Atendimento de Encanador nos Bairros de Curitiba",
      canonical: `${BASE}/bairros`,
      type: "neighborhood_index"
    },
    {
      path: "/regioes",
      title: "Encanador em Vilas e Regiões Populares de Curitiba | Atendimento Local",
      description: "Atendimento de encanador em vilas, loteamentos e regiões populares de Curitiba: Vila Sandra, Vila Verde, Caiuá, Vitória Régia, Neoville e mais.",
      h1: "Encanador em Vilas e Regiões Populares de Curitiba",
      canonical: `${BASE}/regioes`,
      type: "region_index"
    },
    {
      path: "/cidades",
      title: "Encanador na Região Metropolitana de Curitiba | 15 Cidades Atendidas",
      description: "Atendimento de encanador em São José dos Pinhais, Pinhais, Araucária, Colombo, Campo Largo, Fazenda Rio Grande e mais 10 cidades do entorno.",
      h1: "Encanador nas Cidades da Região Metropolitana",
      canonical: `${BASE}/cidades`,
      type: "city_index"
    },
    {
      path: "/duvidas",
      title: "Dúvidas Frequentes | Encanador Água Fácil 24H Curitiba",
      description: "Tire suas dúvidas sobre serviços de encanamento, vazamentos, prazos de atendimento, formas de pagamento e raio de cobertura em Curitiba.",
      h1: "Perguntas e Dúvidas Frequentes",
      canonical: `${BASE}/duvidas`,
      type: "institutional"
    },
    {
      path: "/sobre",
      title: "Sobre a Empresa | Encanador Água Fácil 24H na CIC Curitiba",
      description: "Conheça a Encanador Água Fácil 24H, localizada na Rua das Águias, 320 – CIC. Especialista em reparos hidráulicos e atendimento ágil em Curitiba e RMC.",
      h1: "Sobre a Encanador Água Fácil 24H",
      canonical: `${BASE}/sobre`,
      type: "institutional"
    },
    {
      path: "/contato",
      title: "Contato e Orçamento | Encanador Água Fácil (41) 99569-4912",
      description: "Entre em contato com a Encanador Água Fácil pelo WhatsApp (41) 99569-4912. Solicite atendimento de encanador em Curitiba e região.",
      h1: "Fale Conosco e Solicite Atendimento",
      canonical: `${BASE}/contato`,
      type: "institutional"
    },
    {
      path: "/politica-de-privacidade",
      title: "Política de Privacidade | Encanador Água Fácil",
      description: "Política de privacidade e proteção de dados do site Encanador Água Fácil 24H em Curitiba.",
      h1: "Política de Privacidade",
      canonical: `${BASE}/politica-de-privacidade`,
      type: "institutional"
    },
    {
      path: "/termos-de-uso",
      title: "Termos de Uso | Encanador Água Fácil",
      description: "Termos e condições de uso das informações e serviços do site Encanador Água Fácil 24H.",
      h1: "Termos e Condições de Uso",
      canonical: `${BASE}/termos-de-uso`,
      type: "institutional"
    },
    {
      path: "/sitemap",
      title: "Mapa do Site | Encanador Água Fácil 24H Curitiba",
      description: "Índice navegável de todas as páginas de serviços, bairros de Curitiba, vilas e cidades atendidas pela Encanador Água Fácil.",
      h1: "Mapa do Site (Sitemap HTML)",
      canonical: `${BASE}/sitemap`,
      type: "institutional"
    }
  ];

  // Services
  PLUMBING_SERVICES.forEach(service => {
    routes.push({
      path: `/servicos/${service.slug}`,
      title: `${service.title} em Curitiba | Encanador Água Fácil`,
      description: `${service.shortDesc} Atendimento para casas, apartamentos e comércios em Curitiba e Região Metropolitana.`,
      h1: service.title,
      canonical: `${BASE}/servicos/${service.slug}`,
      type: "service_detail"
    });
  });

  // 75 Official Neighborhoods
  CURITIBA_NEIGHBORHOODS.forEach(bairro => {
    routes.push({
      path: `/bairro/${bairro.slug}`,
      title: bairro.title,
      description: bairro.description,
      h1: `Encanador no Bairro ${bairro.name} em Curitiba`,
      canonical: `${BASE}/bairro/${bairro.slug}`,
      type: "neighborhood_detail"
    });
  });

  // Popular Areas
  POPULAR_AREAS.forEach(area => {
    routes.push({
      path: `/regioes/${area.slug}`,
      title: area.title,
      description: area.description,
      h1: `Encanador na ${area.name} (${area.parentNeighborhood})`,
      canonical: `${BASE}/regioes/${area.slug}`,
      type: "region_detail"
    });
  });

  // Cities
  SERVICE_CITIES.forEach(city => {
    routes.push({
      path: `/cidade/${city.slug}`,
      title: city.title,
      description: city.description,
      h1: `Encanador em ${city.name}`,
      canonical: `${BASE}/cidade/${city.slug}`,
      type: "city_detail"
    });
  });

  return routes;
}

export const INDEXABLE_ROUTES = getAllIndexableRoutes();
