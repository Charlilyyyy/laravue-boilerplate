import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
            '@home': fileURLToPath(new URL('./resources/js/home', import.meta.url)),
            '@duser': fileURLToPath(new URL('./resources/js/dashboard-user', import.meta.url)),
            '@dadmin': fileURLToPath(new URL('./resources/js/dashboard-admin', import.meta.url))
        },
    },
});