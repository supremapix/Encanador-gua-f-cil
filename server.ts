import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const isProd = process.env.NODE_ENV === 'production' || fs.existsSync(path.join(__dirname, 'dist'));

// Permanent 301 redirect from non-www to www
app.use((req, res, next) => {
  const host = req.headers.host || '';
  if (host === 'aguafacil.app.br') {
    return res.redirect(301, `https://www.aguafacil.app.br${req.originalUrl}`);
  }
  next();
});

async function startServer() {
  if (!isProd) {
    // Development mode with Vite dev server middleware
    console.log('🚀 Starting Express in Development mode with Vite middleware...');
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'custom'
    });

    app.use(vite.middlewares);

    app.use('*', async (req, res, next) => {
      const url = req.originalUrl.split('?')[0];

      // List of indexable paths
      const indexableRoutes = [
        '/',
        '/servicos',
        '/desentupidora-curitiba',
        '/encanador-curitiba',
        '/desentupidora-cic',
        '/encanador-cic',
        '/bairros',
        '/regioes',
        '/cidades',
        '/duvidas',
        '/sobre',
        '/contato',
        '/politica-de-privacidade',
        '/termos-de-uso',
        '/sitemap'
      ];

      const isIndexable = indexableRoutes.includes(url) || 
                          url.startsWith('/servicos/') || 
                          url.startsWith('/bairro/') || 
                          url.startsWith('/cidade/') || 
                          url.startsWith('/regioes/');

      try {
        let template = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(req.originalUrl, template);

        if (!isIndexable && url !== '/') {
          res.status(404).set({ 'Content-Type': 'text/html' }).end(`
            <!doctype html>
            <html lang="pt-BR">
              <head>
                <meta charset="UTF-8" />
                <title>Página Não Encontrada (404) | Água Fácil Desentupidora</title>
                <meta name="robots" content="noindex, nofollow" />
              </head>
              <body>
                <div id="root">
                  <main style="padding: 60px 20px; max-width: 800px; margin: 0 auto; text-align: center; font-family: system-ui, sans-serif;">
                    <h1 style="font-size: 2.5rem; font-weight: 800; color: #dc2626; margin-bottom: 16px;">
                      Página Não Encontrada (Erro 404)
                    </h1>
                    <p style="font-size: 1.1rem; color: #475569; margin-bottom: 24px;">
                      A página solicitada não foi encontrada no site.
                    </p>
                    <a href="/" style="display: inline-block; background-color: #0284c7; color: #ffffff; padding: 12px 24px; font-weight: bold; border-radius: 8px; text-decoration: none;">
                      Voltar para a Página Inicial
                    </a>
                  </main>
                </div>
              </body>
            </html>
          `);
          return;
        }

        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    // Production / Served mode
    console.log('🚀 Starting Express in Production mode serving prerendered dist static files...');
    const distPath = path.join(__dirname, 'dist');

    // Serve assets statically
    app.use('/assets', express.static(path.join(distPath, 'assets')));

    // Route matching for prerendered pages
    app.use((req, res, next) => {
      let rawPath = req.path;
      if (rawPath.length > 1 && rawPath.endsWith('/')) {
        rawPath = rawPath.slice(0, -1);
      }

      const filePath = rawPath === '/' 
        ? path.join(distPath, 'index.html') 
        : path.join(distPath, rawPath, 'index.html');

      if (fs.existsSync(filePath)) {
        return res.status(200).sendFile(filePath);
      }

      // Check if file exists in public/dist assets (robots.txt, sitemap.xml, llms.txt, etc)
      const directFile = path.join(distPath, req.path);
      if (fs.existsSync(directFile) && fs.statSync(directFile).isFile()) {
        return res.status(200).sendFile(directFile);
      }

      // Non-existent route -> Real HTTP 404
      const page404 = path.join(distPath, '404.html');
      if (fs.existsSync(page404)) {
        return res.status(404).sendFile(page404);
      }

      return res.status(404).send('<h1>Página Não Encontrada (Erro 404)</h1>');
    });
  }

  app.listen(PORT, () => {
    console.log(`🌐 Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
