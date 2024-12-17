import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import path from 'node:path';

export default defineConfig({
    plugins: [solidPlugin()],
    base: './',
    build: {
        target: 'esnext',
        outDir: path.resolve(__dirname, './dist'),
        lib: {
            entry: path.resolve(__dirname, './src/components/index.tsx'),
            name: 'CUI'
        },
        rollupOptions: {
            context: 'globalThis',
            preserveEntrySignatures: 'strict',
            external: ['solid-js', 'solid-js/web', 'solid-js/store', 'countup.js', 'tinycolor2', 'cui-solid-icons/feather', 'cui-solid-icons/f7', 'cui-virtual-list', 'dayjs'],
            output: [
                {
                    format: 'es',
                    exports: 'named',
                    sourcemap: false,
                    entryFileNames: 'cui.min.esm.js',
                    chunkFileNames: '[name].js',
                    assetFileNames: '[name].[ext]',
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
            // 'cui-virtual-list': path.resolve('./cui-virtual-list'),
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
