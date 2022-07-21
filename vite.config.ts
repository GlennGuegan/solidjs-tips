import { defineConfig, loadEnv } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    define: {
      CMS_URL: JSON.stringify(env.VITE_SOLID_APP_CMS_URL),
      CMS_API_KEY: JSON.stringify(env.VITE_SOLID_APP_CMS_APIKEY)
    },
    plugins: [solidPlugin()],
    build: {
      target: 'esnext',
      polyfillDynamicImport: false,
    },
  }
})
