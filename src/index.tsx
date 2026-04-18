import '@/i18n/i18n';
import '@/shared/ui/styles/fonts.css';
import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import App from '@app/App';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root container not found');
}
createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
