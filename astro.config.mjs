// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config

export default defineConfig({
    site: 'https://jakewdr.github.io',
    vite: {
        optimizeDeps: {
            include: [
                "astro-particles",
                "tsparticles-engine",
                "tsparticles-basic"
            ],
            exclude: [
                "@astrojs/check",
                "@biomejs/biome",
                "astro",
                "typescript"
            ]
        },
        build: {
            cssCodeSplit: true,
            minify: "terser",
            terserOptions: {
                compress: {
                    unsafe: true,
                    drop_console: true,
                    arguments: true
                },
                mangle: {
                    toplevel: true
                },
                format: {
                    quote_style: 1,
                }
            }
        },
    }
})