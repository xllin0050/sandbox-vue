import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import legacy from '@vitejs/plugin-legacy'
import Components from 'unplugin-vue-components/vite'
import WindiCSS from 'vite-plugin-windicss'
import Pages from 'vite-plugin-pages'

export default defineConfig({
    plugins: [
        vue(),
        eslintPlugin(),
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
        Components(),
        WindiCSS(),
        Pages({
          exclude: ['**/components/*.vue']
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    server: {
        host: '0.0.0.0',
        port: 4430,
    },
})
