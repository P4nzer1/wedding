import '@/i18n/i18n';
import '@/shared/ui/styles/fonts.css';
import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import App from '@app/App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
