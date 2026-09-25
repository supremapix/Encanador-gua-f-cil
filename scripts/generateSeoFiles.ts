import fs from 'fs';
import path from 'path';
import { getAllIndexableRoutes } from '../src/config/indexableRoutes';
import { COMPANY_DATA } from '../src/data/company';
import { PLUMBING_SERVICES } from '../src/data/services';

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
const llmsTxt = `# Água Fácil Desentupidora - Curitiba e Região Metropolitana

> Serviços especializados de desentupimento de pias, vasos sanitários, ralos, rede de esgoto e caixas de gordura em Curitiba e Região Metropolitana. Sede na Cidade Industrial de Curitiba (CIC) na Rua Luiz Maltaca, 36.

## Informações do Estabelecimento
- **Razão Social / Nome:** ${COMPANY_DATA.name}
- **Endereço da Sede:** ${COMPANY_DATA.address.street} – ${COMPANY_DATA.address.neighborhood}, ${COMPANY_DATA.address.city}/${COMPANY_DATA.address.state} (CEP: ${COMPANY_DATA.address.zipCode})
- **WhatsApp Atendimento:** ${COMPANY_DATA.phoneDisplay} (${COMPANY_DATA.whatsAppUrl})
- **Telefone Fixo Central:** ${COMPANY_DATA.landlineDisplay}
- **Horário de Funcionamento:** ${COMPANY_DATA.workingHours}
- **Domínio Oficial:** ${siteUrl}

## Serviços Oferecidos
${PLUMBING_SERVICES.map(
  (s) => `- [${s.title}](${siteUrl}/servicos/${s.slug}): ${s.shortDesc}`
).join('\n')}

## Principais Páginas
- [Desentupidora na CIC](${siteUrl}/desentupidora-cic): Atendimento saindo da sede na Rua Luiz Maltaca, 36.
- [Desentupidora em Curitiba](${siteUrl}/desentupidora-curitiba): Cobertura nos bairros de Curitiba.
- [Bairros de Curitiba](${siteUrl}/bairros): Guia de bairros atendidos.
- [Cidades Atendidas na RMC](${siteUrl}/cidades): Atendimento em São José dos Pinhais, Araucária, Pinhais, Colombo e mais.

## Sitemap
- [Sitemap XML](${siteUrl}/sitemap.xml): Arquivo do mapa do site com ${routes.length} URLs ativas com resposta 200.
`;

fs.writeFileSync(path.join(PUBLIC_DIR, 'llms.txt'), llmsTxt, 'utf-8');
console.log('✅ Created public/llms.txt');

// 4. GENERATE LLMS-FULL.TXT
const llmsFullTxt = `# Guia de Conhecimento - Água Fácil Desentupidora Curitiba

## Visão Geral
${COMPANY_DATA.name} é uma empresa especializada em desentupimento e manutenção hidráulica em Curitiba e Região Metropolitana.

- **Sede:** ${COMPANY_DATA.address.street} – Bairro ${COMPANY_DATA.address.neighborhood}, ${COMPANY_DATA.address.city} - ${COMPANY_DATA.address.state}, CEP ${COMPANY_DATA.address.zipCode}.
- **WhatsApp:** ${COMPANY_DATA.phoneDisplay}
- **Telefone Fixo:** ${COMPANY_DATA.landlineDisplay}

---

## Catálogo de Serviços
${PLUMBING_SERVICES.map(
  (s) => `### ${s.title}
- **URL:** ${siteUrl}/servicos/${s.slug}
- **Descrição:** ${s.fullDesc}
- **Problemas Resolvidos:** ${s.commonProblems.join('; ')}
`
).join('\n')}

---

## Lista Completa de URLs Indexáveis (${routes.length} Páginas)
${routes.map((r) => `- ${r.canonical} | ${r.title}`).join('\n')}
`;

fs.writeFileSync(path.join(PUBLIC_DIR, 'llms-full.txt'), llmsFullTxt, 'utf-8');
console.log('✅ Created public/llms-full.txt');
