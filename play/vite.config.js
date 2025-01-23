import { resolve } from 'path'
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const __dirname = new URL('.', import.meta.url).pathname;

export default defineConfig({
  plugins: [vue()],
  server: {
    allowedHosts: ['905eozlu-l89norvp-qmfk0b2uewtp.vcd4.mcprev.cn']
  },
  resolve: {
    alias: {
      '@torrer-ui/utils': resolve(__dirname, '../packages/utils/src'),
      '@torrer-ui/components': resolve(__dirname, '../packages/components/src'),
    }
  }
});
