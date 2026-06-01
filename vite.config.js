import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ⚠️ base = nom EXACT du dépôt GitHub, entre slashs.
// Ton dépôt s'appelle v2-portfolio-textile → c'est donc ceci.
// (Si tu renommes le dépôt un jour, mets le nouveau nom ici, sinon
//  le site déployé sera une page blanche.)
export default defineConfig({
  plugins: [react()],
  base: '/v5-portfolio-textile/',
});
