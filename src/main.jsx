import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import { LanguageProvider } from './i18n/LanguageContext.jsx';
import './index.css';

// HashRouter (et non BrowserRouter) : indispensable pour GitHub Pages.
// Les URLs seront du type .../#/work — ça évite les erreurs 404 quand on
// recharge une page en profondeur sur un hébergement statique.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </HashRouter>
  </StrictMode>
);
