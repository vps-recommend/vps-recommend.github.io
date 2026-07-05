import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'dev-ssr',
        async transformIndexHtml(html, { server, originalUrl }) {
          if (server) {
            try {
              const { render } = await server.ssrLoadModule('/src/entry-server.tsx');
              const url = originalUrl || '/';
              let { appHtml, helmet } = render(url);
              let extractedTags = '';
              
              const match = appHtml.match(/^(<title>.*?<\/title>|<meta [^>]*>|<link [^>]*>|<script [^>]*>.*?<\/script>|<style [^>]*>.*?<\/style>)+/i);
              if (match) {
                extractedTags = match[0];
                appHtml = appHtml.substring(extractedTags.length);
              }
              
              let result = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
              
              if (extractedTags) {
                result = result.replace('</head>', `${extractedTags}</head>`);
              } else if (helmet) {
                const helmetStr = `
                  ${helmet.title.toString()}
                  ${helmet.meta.toString()}
                  ${helmet.link.toString()}
                  ${helmet.script.toString()}
                `;
                result = result.replace('</head>', `${helmetStr}</head>`);
              }
              
              return result;
            } catch (e) {
              server.ssrFixStacktrace(e as Error);
              console.error(e);
            }
          }
          return html;
        }
      }
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
