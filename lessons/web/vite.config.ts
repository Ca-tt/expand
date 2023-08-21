import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import FullReload from 'vite-plugin-full-reload';

import { fileURLToPath, URL } from 'node:url';

/* vite ui configs, imported from study */
import { viteConfigs } from './src/lessons/ui-config/vite-configs';

export default defineConfig({
  plugins: [
    vue({}),
    viteConfigs.isFullReloadEnabled ? FullReload('./src/**/*', { always: false }) : ''
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'components': fileURLToPath(new URL('./src/components', import.meta.url)),
      'scss': fileURLToPath(new URL('./../../ui-kit/scss', import.meta.url)),
      'study': fileURLToPath(new URL('./src/study/', import.meta.url)),
      'node': fileURLToPath(new URL('./src/study/examples/node', import.meta.url)),
      'js': fileURLToPath(new URL('./src/study/examples/js', import.meta.url)),
      'vue-examples': fileURLToPath(new URL('./src/study/examples/vue', import.meta.url)),
    }
  },
  server: {
    hmr: {
      overlay: viteConfigs.isErrorOverlayEnebled,
    },
    open: viteConfigs.isAutoOpenEnebled,
  }
})
