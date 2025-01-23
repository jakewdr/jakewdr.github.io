import preact from "@astrojs/preact";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
    site: "https://jakewdr.github.io",
    compressHTML: true,
    vite: {
        css: {
            transformer: "lightningcss",
        },
        build: {
            minify: "esbuild",
            cssMinify: "lightningcss",
            chunkSizeWarningLimit: 100,
            cssCodeSplit: true,
            modulePreload: {
                polyfill: false,
            },
        },
        optimizeDeps: {
            force: false,
        },
        plugins: [
            visualizer(),
            // @ts-ignore
            tailwindcss(),
        ],
    },

    build: {
        inlineStylesheets: "never",
    },

    integrations: [preact()],
});
