// @ts-check
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import { visualizer } from "rollup-plugin-visualizer";
// https://astro.build/config

export default defineConfig({
    site: "https://jakewdr.github.io",

    vite: {
        build: {
            chunkSizeWarningLimit: 20,
            minify: "esbuild",
            cssMinify: "lightningcss",
            cssCodeSplit: true,
            modulePreload: {
                polyfill: false,
            },
            rollupOptions: {
                output: {
                    assetFileNames() {
                        return "assets/[name].[hash][extname]";
                    },
                },
            },
        },
        optimizeDeps: {
            force: true,
        },
        plugins: [visualizer()],
    },

    build: {
        inlineStylesheets: "never",
    },

    integrations: [preact(), tailwind()],
});
