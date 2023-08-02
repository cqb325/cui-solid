import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import path from 'node:path';

export default defineConfig({
  plugins: [solidPlugin()],
  test: {
    environment: 'jsdom',
    globals: true,
    transformMode: {
      web: [/\.[jt]sx?$/],
    },
    setupFiles: './setupVitest.ts',
    // solid needs to be inline to work around
    // a resolution issue in vitest:
    deps: {
      inline: [/solid-js/],
    },
    // if you have few tests, try commenting one
    // or both out to improve performance:
    threads: false,
    isolate: false,
  },
  base: './',
  build: {
    target: 'esnext',
    outDir: path.resolve(__dirname, './dist'),
    lib: {
        entry: path.resolve(__dirname, './src/components/index.tsx'),
        name: 'CUI'
    },
    polyfillDynamicImport: false,
    rollupOptions: {
      context: 'globalThis',
      preserveEntrySignatures: 'strict',
      external: ['solid-js', 'countup.js', 'tinycolor2'],
      output: [
          {
              format: 'es',
              exports: 'named',
              sourcemap: false,
              entryFileNames: 'cui.min.esm.js',
              chunkFileNames: '[name].js',
              assetFileNames: '[name].[ext]',
              namespaceToStringTag: true,
              inlineDynamicImports: false,
              manualChunks: undefined,
          }
      ]
  }
  },
  resolve: {
    conditions: ['development', 'browser'],
    alias: {
      // 'solid-vue-router': path.resolve('./src/solid-router'),
      '@': path.resolve('./src')
    }
  },
  server: {
    port: 5173,
    host: '0.0.0.0',
    proxy: {
        '/test': {
            target: 'http://localhost:18080/'
        },
    }
  },
});
