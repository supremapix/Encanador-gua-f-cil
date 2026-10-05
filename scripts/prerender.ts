import fs from 'fs';
import path from 'path';
import { getAllIndexableRoutes } from '../src/config/indexableRoutes';
import { COMPANY_DATA } from '../src/data/company';
import { PLUMBING_SERVICES } from '../src/data/services';

const DIST_DIR = path.join(process.cwd(), 'dist');
const templatePath = path.join(DIST_DIR, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('❌ dist/index.html not found! Run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf-8');
const routes = getAllIndexableRoutes();

console.log(`🚀 Prerendering initial HTML for ${routes.length} routes...`);

function renderPageHeadAndBody(route: typeof routes[0]): { head: string; bodyHtml: string } {
  const canonical = route.canonical;
  const title = route.title;
  const description = route.description;
  const h1 = route.h1;

  const schema = {
    "@context": "https://schema.org",
    "@type": ["Plumber", "DrainCleaningService", "LocalBusiness"],
    "@id": `${COMPANY_DATA.baseUrl}/#organization`,
    "name": COMPANY_DATA.name,
    "legalName": COMPANY_DATA.legalName,
    "url": COMPANY_DATA.baseUrl,
    "telephone": COMPANY_DATA.phoneDisplay,
    "email": COMPANY_DATA.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY_DATA.address.street,
      "addressLocality": COMPANY_DATA.address.city,
      "addressRegion": COMPANY_DATA.address.state,
      "postalCode": COMPANY_DATA.address.zipCode,
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.5008,
      "longitude": -49.3325
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Curitiba"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Região Metropolitana de Curitiba"
      }
    ],
    "description": description
  };

  const head = `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:site_name" content="${COMPANY_DATA.name}" />
    <meta property="og:image" content="https://img.supremasite.com.br/adp/hero-pc.webp" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="https://img.supremasite.com.br/adp/hero-pc.webp" />
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
  `;

  let bodyHtml = '';

  if (route.type === 'home') {
    bodyHtml = `
      <div className="home-container">
        <header style="padding: 16px 20px; background-color: #0B2545; color: #ffffff;">
          <nav style="display: flex; gap: 16px; font-weight: bold; text-transform: uppercase;">
            <a href="/" style="color: #FFC107; font-weight: 900; text-decoration: none;">Água Fácil Desentupidora</a>
            <a href="/servicos" style="color: #ffffff; text-decoration: none;">Serviços</a>
            <a href="/desentupidora-curitiba" style="color: #ffffff; text-decoration: none;">Curitiba</a>
            <a href="/bairros" style="color: #ffffff; text-decoration: none;">Bairros</a>
            <a href="/cidades" style="color: #ffffff; text-decoration: none;">Cidades RMC</a>
            <a href="/contato" style="color: #ffffff; text-decoration: none;">Contato</a>
          </nav>
        </header>

        <main style="padding: 40px 20px; max-width: 1200px; margin: 0 auto; font-family: 'Inter', system-ui, sans-serif;">
          <h1 style="font-family: 'Barlow Condensed', sans-serif; font-size: 2.5rem; font-weight: 900; color: #0B2545; text-transform: uppercase; margin-bottom: 16px;">
            ${h1}
          </h1>

          <p style="font-size: 1.125rem; color: #334155; line-height: 1.6; margin-bottom: 24px;">
            A <strong>Água Fácil Desentupidora</strong> é especializada em serviços mecânicos de desentupimento de pias de cozinha, vasos sanitários, ralos, rede de esgoto e caixas de gordura em Curitiba e Região Metropolitana. Atendimento rápido saindo da nossa sede própria na <strong>${COMPANY_DATA.address.formatted}</strong>.
          </p>

          <div style="background-color: #0B2545; color: #ffffff; padding: 24px; border-radius: 6px; border: 2px solid #1368AA; margin-bottom: 32px;">
            <h2 style="font-family: 'Barlow Condensed', sans-serif; font-size: 1.75rem; font-weight: 800; color: #FFC107; text-transform: uppercase; margin-bottom: 16px;">
              Respostas Objetivas sobre Nosso Atendimento
            </h2>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
              <div style="background: #07192F; padding: 16px; border-radius: 4px; border: 1px solid #1368AA;">
                <h3 style="font-size: 1.1rem; font-weight: 800; color: #FFC107; text-transform: uppercase;">1. Entupimentos Que Resolvemos</h3>
                <p style="font-size: 0.9rem; color: #cbd5e1; margin-top: 6px;">
                  Desentupimento de pias de cozinha, lavatórios, vasos sanitários, ralos de banheiro e quintal, rede de esgoto e caixas de gordura.
                </p>
              </div>

              <div style="background: #07192F; padding: 16px; border-radius: 4px; border: 1px solid #1368AA;">
                <h3 style="font-size: 1.1rem; font-weight: 800; color: #FFC107; text-transform: uppercase;">2. Diagnóstico e Orçamento</h3>
                <p style="font-size: 0.9rem; color: #cbd5e1; margin-top: 6px;">
                  Pré-avaliação por fotos/vídeos pelo WhatsApp ou vistoria técnica no local. Orçamento e técnica definidos antes do serviço.
                </p>
              </div>

              <div style="background: #07192F; padding: 16px; border-radius: 4px; border: 1px solid #1368AA;">
                <h3 style="font-size: 1.1rem; font-weight: 800; color: #FFC107; text-transform: uppercase;">3. Regiões Atendidas</h3>
                <p style="font-size: 0.9rem; color: #cbd5e1; margin-top: 6px;">
                  Atendimento em todos os 75 bairros de Curitiba (saída da base na CIC) e 15 municípios da Região Metropolitana.
                </p>
              </div>

              <div style="background: #07192F; padding: 16px; border-radius: 4px; border: 1px solid #1368AA;">
                <h3 style="font-size: 1.1rem; font-weight: 800; color: #FFC107; text-transform: uppercase;">4. Definição do Preço</h3>
                <p style="font-size: 0.9rem; color: #cbd5e1; margin-top: 6px;">
                  Valor fixado de forma justa de acordo com a gravidade da obstrução, diâmetro da tubulação e máquina necessária.
                </p>
              </div>

              <div style="background: #07192F; padding: 16px; border-radius: 4px; border: 1px solid #1368AA;">
                <h3 style="font-size: 1.1rem; font-weight: 800; color: #FFC107; text-transform: uppercase;">5. Equipamentos Utilizados</h3>
                <p style="font-size: 0.9rem; color: #cbd5e1; margin-top: 6px;">
                  Máquinas desentupidoras elétricas industriais K-50 e K-500 com ponteiras mecânicas e hidrojateamento de alta pressão.
                </p>
              </div>

              <div style="background: #07192F; padding: 16px; border-radius: 4px; border: 1px solid #1368AA;">
                <h3 style="font-size: 1.1rem; font-weight: 800; color: #25D366; text-transform: uppercase;">6. Como Solicitar</h3>
                <p style="font-size: 0.9rem; color: #cbd5e1; margin-top: 6px;">
                  Atendimento direto no WhatsApp: <strong>${COMPANY_DATA.phoneDisplay}</strong> ou Telefone Fixo: <strong>${COMPANY_DATA.landlineDisplay}</strong>.
                </p>
              </div>
            </div>
          </div>

          <section style="margin-bottom: 40px;">
            <h2 style="font-family: 'Barlow Condensed', sans-serif; font-size: 1.85rem; font-weight: 800; color: #0B2545; text-transform: uppercase; margin-bottom: 20px;">
              Catálogo de Serviços de Desentupimento
            </h2>
            <ul style="list-style: none; padding: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px;">
              ${PLUMBING_SERVICES.map(s => `
                <li style="border: 1px solid #cbd5e1; border-radius: 6px; padding: 16px; background-color: #ffffff;">
                  <img src="${s.imageUrl}" alt="${s.imageAlt}" style="width: 100%; aspect-ratio: 4/3; object-fit: cover; border-radius: 4px; margin-bottom: 12px;" />
                  <h3 style="font-family: 'Barlow Condensed', sans-serif; font-size: 1.3rem; font-weight: 800; color: #0B2545; text-transform: uppercase; margin-bottom: 6px;">
                    <a href="/servicos/${s.slug}" style="color: #0B2545; text-decoration: none;">${s.title}</a>
                  </h3>
                  <p style="font-size: 0.875rem; color: #475569; margin-bottom: 12px;">${s.shortDesc}</p>
                  <a href="https://wa.me/${COMPANY_DATA.phoneRaw}?text=${encodeURIComponent('Olá! Gostaria de um orçamento para ' + s.title)}" style="display: block; text-align: center; background: #25D366; color: #0B2545; font-weight: 900; font-family: 'Barlow Condensed', sans-serif; text-transform: uppercase; padding: 10px; border-radius: 4px; text-decoration: none;">
                    Pedir orçamento no WhatsApp
                  </a>
                </li>
              `).join('')}
            </ul>
          </section>

          <footer style="margin-top: 60px; padding-top: 20px; border-top: 1px solid #1368AA; font-size: 0.875rem; color: #64748b; background-color: #0B2545; color: #ffffff; padding: 24px; border-radius: 6px;">
            <p><strong>${COMPANY_DATA.name}</strong> - ${COMPANY_DATA.address.formatted}</p>
            <p>WhatsApp: ${COMPANY_DATA.phoneDisplay} | Fixo: ${COMPANY_DATA.landlineDisplay} | E-mail: ${COMPANY_DATA.email}</p>
          </footer>
        </main>
      </div>
    `;
  } else {
    const matchedService = PLUMBING_SERVICES.find(s => `/servicos/${s.slug}` === route.path);
    bodyHtml = `
      <main style="padding: 40px 20px; max-width: 1000px; margin: 0 auto; font-family: 'Inter', system-ui, sans-serif;">
        <h1 style="font-family: 'Barlow Condensed', sans-serif; font-size: 2.25rem; font-weight: 900; color: #0B2545; text-transform: uppercase; margin-bottom: 16px;">
          ${h1}
        </h1>
        <p style="font-size: 1.1rem; color: #334155; line-height: 1.6; margin-bottom: 24px;">
          ${description}
        </p>

        ${matchedService ? `
          <div style="background-color: #ffffff; border: 1px solid #cbd5e1; padding: 24px; border-radius: 6px; margin-bottom: 24px;">
            <img src="${matchedService.imageUrl}" alt="${matchedService.imageAlt}" style="width: 100%; max-height: 400px; object-fit: cover; border-radius: 4px; margin-bottom: 20px;" />
            <h2 style="font-family: 'Barlow Condensed', sans-serif; font-size: 1.5rem; font-weight: 800; color: #0B2545; text-transform: uppercase; margin-bottom: 12px;">Descrição do Serviço</h2>
            <p style="font-size: 1rem; color: #334155; line-height: 1.6; margin-bottom: 16px;">${matchedService.fullDesc}</p>
            
            <h3 style="font-family: 'Barlow Condensed', sans-serif; font-size: 1.2rem; font-weight: 800; color: #1368AA; text-transform: uppercase; margin-top: 16px;">Problemas Comuns Resolvidos</h3>
            <ul style="margin-top: 8px; color: #475569; font-size: 0.95rem;">
              ${matchedService.commonProblems.map(p => `<li style="margin-bottom: 4px;">${p}</li>`).join('')}
            </ul>

            <h3 style="font-family: 'Barlow Condensed', sans-serif; font-size: 1.2rem; font-weight: 800; color: #1368AA; text-transform: uppercase; margin-top: 16px;">Solução Técnica Água Fácil</h3>
            <ul style="margin-top: 8px; color: #475569; font-size: 0.95rem;">
              ${matchedService.solutions.map(sol => `<li style="margin-bottom: 4px;">${sol}</li>`).join('')}
            </ul>
          </div>
        ` : ''}

        <div style="margin-top: 32px; padding: 20px; background: #0B2545; color: #ffffff; border-radius: 6px; border: 2px solid #1368AA;">
          <h2 style="font-family: 'Barlow Condensed', sans-serif; font-size: 1.5rem; font-weight: 800; color: #FFC107; text-transform: uppercase;">Solicite Atendimento da Água Fácil Desentupidora</h2>
          <p style="font-size: 0.95rem; color: #cbd5e1; margin-top: 6px;">
            Sede na <strong>${COMPANY_DATA.address.formatted}</strong>. Entre em contato pelo WhatsApp <strong>${COMPANY_DATA.phoneDisplay}</strong> ou Telefone <strong>${COMPANY_DATA.landlineDisplay}</strong>.
          </p>
          <a href="${COMPANY_DATA.whatsAppUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-block; margin-top: 12px; background: #25D366; color: #0B2545; padding: 12px 24px; font-weight: 900; font-family: 'Barlow Condensed', sans-serif; text-transform: uppercase; border-radius: 4px; text-decoration: none;">
            Chamar no WhatsApp (${COMPANY_DATA.phoneDisplay})
          </a>
        </div>
      </main>
    `;
  }

  return { head, bodyHtml };
}

routes.forEach((route) => {
  const { head, bodyHtml } = renderPageHeadAndBody(route);

  let html = template;
  html = html.replace(/<title>.*?<\/title>/i, '');
  html = html.replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/i, '');
  html = html.replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i, '');

  html = html.replace('</head>', `${head}\n</head>`);
  html = html.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);

  let targetFilePath: string;
  if (route.path === '/' || route.path === '') {
    targetFilePath = path.join(DIST_DIR, 'index.html');
  } else {
    const routeDir = path.join(DIST_DIR, route.path.slice(1));
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    targetFilePath = path.join(routeDir, 'index.html');
  }

  fs.writeFileSync(targetFilePath, html, 'utf-8');
});

const notFoundHead = `
  <title>Página Não Encontrada (404) | Água Fácil Desentupidora</title>
  <meta name="description" content="A página solicitada não foi encontrada no site da Água Fácil Desentupidora." />
  <meta name="robots" content="noindex, nofollow" />
`;

const notFoundBody = `
  <main style="padding: 60px 20px; max-width: 800px; margin: 0 auto; text-align: center; font-family: 'Inter', system-ui, sans-serif;">
    <h1 style="font-family: 'Barlow Condensed', sans-serif; font-size: 2.5rem; font-weight: 900; color: #dc2626; text-transform: uppercase; margin-bottom: 16px;">
      Página Não Encontrada (Erro 404)
    </h1>
    <p style="font-size: 1.1rem; color: #475569; margin-bottom: 24px;">
      A página que você está procurando não existe ou foi movida.
    </p>
    <a href="/" style="display: inline-block; background-color: #0B2545; color: #FFC107; padding: 12px 24px; font-weight: 900; font-family: 'Barlow Condensed', sans-serif; text-transform: uppercase; border-radius: 4px; text-decoration: none;">
      Voltar para a Página Inicial
    </a>
  </main>
`;

let notFoundHtml = template;
notFoundHtml = notFoundHtml.replace(/<title>.*?<\/title>/i, '');
notFoundHtml = notFoundHtml.replace('</head>', `${notFoundHead}\n</head>`);
notFoundHtml = notFoundHtml.replace('<div id="root"></div>', `<div id="root">${notFoundBody}</div>`);

fs.writeFileSync(path.join(DIST_DIR, '404.html'), notFoundHtml, 'utf-8');
console.log('✅ Created dist/404.html');

console.log(`✅ Pre-rendered ${routes.length} static HTML pages successfully!`);
