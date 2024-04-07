import {
  URL,
  fileURLToPath,
} from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const getAliasUrl = (url) => fileURLToPath(new URL(url, import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: getAliasUrl('./src'),
      },
      {
        find: '@components',
        replacement: getAliasUrl('./src/components'),
      },
      {
        find: '@pages',
        replacement: getAliasUrl('./src/pages'),
      },
      {
        find: '@constants',
        replacement: getAliasUrl('./src/constants'),
      },
      {
        find: '@helpers',
        replacement: getAliasUrl('./src/helpers'),
      },
      {
        find: '@sass',
        replacement: getAliasUrl('./src/sass'),
      },
    ],
  },
});
