// @ts-check
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import { visualizer } from "rollup-plugin-visualizer";
import inlineSource from "vite-plugin-inline-source";

import compress from "astro-compress";

// https://astro.build/config

export default defineConfig({
    site: "https://jakewdr.github.io",

    vite: {
        build: {
            cssCodeSplit: false,
            chunkSizeWarningLimit: 20,
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
        plugins: [visualizer(), inlineSource()],
    },

    integrations: [
        preact(),
        tailwind(),
        compress({
            CSS: true,
            Image: false,
            JavaScript: true,
            Logger: 1,
            HTML: {
                "html-minifier-terser": {
                    removeAttributeQuotes: false,
                    removeTagWhitespace: false,
                    collapseWhitespace: false,
                },
            },
        }),
    ],
});
