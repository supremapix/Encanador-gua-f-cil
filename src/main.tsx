import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// React 19 manages metadata during client navigation; remove the static SEO copy first.
document.querySelectorAll('[data-prerender-seo]').forEach(node => node.remove());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
