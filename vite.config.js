import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
    }
  },
  build: {
    // Relative to the root
    outDir: '../dist',
  },
  plugins: [
    createHtmlPlugin({
      inject: {
        data: {
          title: env === 'production' ? 'My site' : `My site [${env.toUpperCase()}]`,
        },
      },
    }),
    react({
        // Use React plugin in all *.jsx and *.tsx files
        include: '**/*.{jsx,tsx}',
        babel: {
            plugins: ['babel-plugin-styled-components'],
          },
      }),

  ],
  
});