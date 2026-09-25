import fs from 'fs';
import path from 'path';

const DIST_DIR = path.join(process.cwd(), 'dist');

interface TestResult {
  url: string;
  status: number;
  title: string;
  h1: string;
  canonical: string;
  initialTextLength: number;
}

function analyzeRoute(routePath: string): TestResult {
  let filePath: string;
  let is404 = false;

  if (routePath === '/') {
    filePath = path.join(DIST_DIR, 'index.html');
  } else {
    filePath = path.join(DIST_DIR, routePath.replace(/^\//, ''), 'index.html');
    if (!fs.existsSync(filePath)) {
      filePath = path.join(DIST_DIR, '404.html');
      is404 = true;
    }
  }

  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract Title
  const titleMatch = content.match(/<title>(.*?)<\/title>/is);
  const title = titleMatch ? titleMatch[1].replace(/\s+/g, ' ').trim() : 'N/A';

  // Extract H1
  const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/is);
  let h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() : 'N/A';

  // Extract Canonical
  const canonicalMatch = content.match(/<link\s+rel="canonical"\s+href="(.*?)"/is);
  const canonical = canonicalMatch ? canonicalMatch[1].trim() : 'N/A';

  // Extract Text Content in #root
  const rootMatch = content.match(/<div id="root">(.*?)<\/div>/s);
  const rootHtml = rootMatch ? rootMatch[1] : content;
  const rawText = rootHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

  return {
    url: routePath,
    status: is404 ? 404 : 200,
    title,
    h1,
    canonical,
    initialTextLength: rawText.length
  };
}

console.log('--- DIRECT HTTP / SSG VALIDATION ---');
const routesToTest = [
  '/',
  '/servicos/desentupimento-de-pia',
  '/servicos/desentupimento-de-vaso-sanitario',
  '/pagina-que-nao-existe'
];

routesToTest.forEach((r) => {
  const result = analyzeRoute(r);
  console.log(`\nURL: ${result.url}`);
  console.log(`HTTP Status: ${result.status}`);
  console.log(`Title: ${result.title}`);
  console.log(`H1: ${result.h1}`);
  console.log(`Canonical: ${result.canonical}`);
  console.log(`Initial HTML Text Length: ${result.initialTextLength} chars`);
});

// Sitemap count
const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
const locMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g) || [];
console.log(`\nFinal Sitemap URL Count: ${locMatches.length} URLs`);
