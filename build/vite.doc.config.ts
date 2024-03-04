/// <reference types="vitest" />
/// <reference types="vite/client" />

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
    outDir: path.resolve(__dirname, '../dist-doc'),
    polyfillDynamicImport: false,
  },
  resolve: {
    conditions: ['development', 'browser'],
    alias: {
      // 'solid-vue-router': path.resolve('./src/solid-router'),
      '@': path.resolve(__dirname, '../src')
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
