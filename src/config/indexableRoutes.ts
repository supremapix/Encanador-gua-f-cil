import { CURITIBA_NEIGHBORHOODS } from '../data/curitibaNeighborhoods';
import { SERVICE_CITIES } from '../data/serviceCities';
import { POPULAR_AREAS } from '../data/popularAreas';
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
      title: "Encanador em Curitiba | Água Fácil Serviços Hidráulicos",
      description: "Água Fácil Desentupidora em Curitiba e Região Metropolitana. Desentupimento de pias, vasos sanitários, ralos, esgoto e caixas de gordura. Sede na CIC (Rua Luiz Maltaca, 36). Solicite orçamento pelo WhatsApp!",
      h1: "Encanador em Curitiba – Água Fácil",
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

  for (const [items, prefix, type] of [
    [CURITIBA_NEIGHBORHOODS, 'bairro', 'neighborhood_detail'],
    [SERVICE_CITIES, 'cidade', 'city_detail'],
    [POPULAR_AREAS, 'regioes', 'region_detail']
  ] as const) {
    items.filter(item => item.indexable).forEach(item => routes.push({
      path: `/${prefix}/${item.slug}`, title: `${item.title.split('|')[0].trim()} | Água Fácil`,
      description: item.description, h1: item.title.split('|')[0].trim(),
      canonical: `${BASE}/${prefix}/${item.slug}`, type
    }));
  }
  routes.push({path: '/guia-de-localidades', title: 'Encanadores: bairros e referências de endereço | Água Fácil', description: 'Guia de bairros, nomes populares e referências de transporte para solicitar encanador em Curitiba e região. Fontes municipais e orientação para informar o endereço.', h1: 'Encanador: informe a localidade certa', canonical: `${BASE}/guia-de-localidades`, type: 'institutional'});

  return routes;
}

export const INDEXABLE_ROUTES = getAllIndexableRoutes();
