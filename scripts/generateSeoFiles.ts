import fs from 'fs';
import path from 'path';
import { getAllIndexableRoutes } from '../src/config/indexableRoutes';
import { COMPANY_DATA } from '../src/data/company';
import { PLUMBING_SERVICES } from '../src/data/services';
import { CURITIBA_NEIGHBORHOODS } from '../src/data/curitibaNeighborhoods';
import { POPULAR_AREAS } from '../src/data/popularAreas';
import { SERVICE_CITIES } from '../src/data/serviceCities';

const PUBLIC_DIR = path.join(process.cwd(), 'public');

if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

const today = new Date().toISOString().split('T')[0];
const routes = getAllIndexableRoutes();
const siteUrl = COMPANY_DATA.baseUrl;

// 1. GENERATE ROBOTS.TXT
const robotsTxt = `User-agent: *
Allow: /

# AI Crawlers
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Anthropic-AI
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

# Sitemap
Sitemap: ${siteUrl}/sitemap.xml
`;

fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), robotsTxt, 'utf-8');
console.log('✅ Created public/robots.txt');

// 2. GENERATE SITEMAP.XML
function getPriority(type: string): string {
  switch (type) {
    case 'home':
      return '1.0';
    case 'curitiba':
    case 'cic':
    case 'service_index':
      return '0.9';
    case 'service_detail':
    case 'neighborhood_index':
    case 'region_index':
    case 'city_index':
      return '0.8';
    case 'neighborhood_detail':
    case 'region_detail':
    case 'city_detail':
      return '0.7';
    default:
      return '0.5';
  }
}

function getChangeFreq(type: string): string {
  switch (type) {
    case 'home':
    case 'curitiba':
    case 'cic':
      return 'daily';
    case 'service_index':
    case 'service_detail':
      return 'weekly';
    default:
      return 'monthly';
  }
}

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${route.canonical}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getChangeFreq(route.type)}</changefreq>
    <priority>${getPriority(route.type)}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapXml, 'utf-8');
console.log(`✅ Created public/sitemap.xml (${routes.length} URLs)`);

// 3. GENERATE LLMS.TXT
const llmsTxt = `# Encanador Água Fácil 24H - Curitiba e Região Metropolitana

> Serviços profissionais de encanador, manutenção hidráulica, reparo de vazamentos, troca de torneiras e registros em Curitiba (todos os 75 bairros) e Região Metropolitana. Sede na Cidade Industrial de Curitiba (CIC).

## Informações do Estabelecimento
- **Razão Social / Nome:** ${COMPANY_DATA.name}
- **Endereço da Sede:** ${COMPANY_DATA.address.street} – ${COMPANY_DATA.address.neighborhood}, ${COMPANY_DATA.address.city}/${COMPANY_DATA.address.state} (CEP: ${COMPANY_DATA.address.zipCode})
- **Telefone:** ${COMPANY_DATA.phoneDisplay}
- **WhatsApp 24h:** ${COMPANY_DATA.phoneDisplay} (${COMPANY_DATA.whatsAppUrl})
- **Horário de Funcionamento:** 24 Horas / Todos os dias da semana
- **Valores e Promoções:** Atendimento a partir de R$ 50,00 chamando hoje.
- **Domínio Oficial:** ${siteUrl}

## Serviços Oferecidos
${PLUMBING_SERVICES.map(
  (s) => `- [${s.title}](${siteUrl}/servicos/${s.slug}): ${s.shortDesc}`
).join('\n')}

## Principais Páginas e Cobertura
- [Encanador na CIC](${siteUrl}/encanador-cic): Atendimento rápido saindo da sede na Rua das Águias, 320.
- [Encanador em Curitiba](${siteUrl}/encanador-curitiba): Cobertura técnica nos 75 bairros oficiais de Curitiba.
- [Bairros de Curitiba](${siteUrl}/bairros): Índice completo dos 75 bairros oficiais.
- [Vilas e Regiões Populares](${siteUrl}/regioes): Atendimento em vilas como Vila Sandra, Vila Verde, Caiuá e Vitória Régia.
- [Cidades Atendidas na RMC](${siteUrl}/cidades): Atendimento em 15 cidades da Região Metropolitana (São José dos Pinhais, Pinhais, Araucária, Colombo, etc.).

## Links e Arquivos Complementares
- [Sitemap XML](${siteUrl}/sitemap.xml): Arquivo completo do mapa do site para crawlers.
- [LLMs Full Text](${siteUrl}/llms-full.txt): Documentação técnica e descritivo completo de todas as páginas para IAs.
`;

fs.writeFileSync(path.join(PUBLIC_DIR, 'llms.txt'), llmsTxt, 'utf-8');
console.log('✅ Created public/llms.txt');

// 4. GENERATE LLMS-FULL.TXT
const llmsFullTxt = `# Guia Completo de Conhecimento - Encanador Água Fácil 24H Curitiba

## Visão Geral da Empresa
${COMPANY_DATA.name} é uma empresa especializada em serviços hidráulicos e encanamento residencial, comercial e predial em Curitiba e Região Metropolitana.

- **Sede:** ${COMPANY_DATA.address.street} – Bairro ${COMPANY_DATA.address.neighborhood}, ${COMPANY_DATA.address.city} - ${COMPANY_DATA.address.state}, CEP ${COMPANY_DATA.address.zipCode}.
- **Telefone / WhatsApp:** ${COMPANY_DATA.phoneDisplay}
- **Promocional:** Orçamentos e atendimentos a partir de R$ 50,00.
- **Diferencial:** Atendimento direto da sede na CIC para rápido deslocamento em Curitiba e RMC.

---

## Catálogo Completo de Serviços
${PLUMBING_SERVICES.map(
  (s) => `### ${s.title}
- **URL:** ${siteUrl}/servicos/${s.slug}
- **Descrição:** ${s.fullDesc}
- **Problemas Comuns Solucionados:** ${s.commonProblems.join('; ')}
- **Soluções Aplicadas:** ${s.solutions.join('; ')}
`
).join('\n')}

---

## Cobertura por Cidades na Região Metropolitana de Curitiba
${SERVICE_CITIES.map(
  (c) => `- **${c.name}:** ${siteUrl}/cidade/${c.slug} – ${c.description}`
).join('\n')}

---

## Cobertura nos 75 Bairros Oficiais de Curitiba
${CURITIBA_NEIGHBORHOODS.map(
  (b) => `- **${b.name} (${b.region}):** ${siteUrl}/bairro/${b.slug}`
).join('\n')}

---

## Cobertura em Vilas e Regiões Populares
${POPULAR_AREAS.map(
  (a) => `- **${a.name} (${a.parentNeighborhood}):** ${siteUrl}/regioes/${a.slug}`
).join('\n')}

---

## Lista Completa de URLs Indexáveis (${routes.length} Páginas)
${routes.map((r) => `- ${r.canonical} | ${r.title}`).join('\n')}
`;

fs.writeFileSync(path.join(PUBLIC_DIR, 'llms-full.txt'), llmsFullTxt, 'utf-8');
console.log('✅ Created public/llms-full.txt');

