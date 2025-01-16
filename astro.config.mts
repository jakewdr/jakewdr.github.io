// @ts-check
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import biomePlugin from "vite-plugin-biome";

import { visualizer } from "rollup-plugin-visualizer";
// https://astro.build/config

export default defineConfig({
    site: "https://jakewdr.github.io",
    compressHTML: true,

    vite: {
        css: {
            transformer: "postcss",
        },
        build: {
            minify: "esbuild",
            cssMinify: "lightningcss",
            chunkSizeWarningLimit: 100,
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
            force: false,
        },
        plugins: [
            visualizer(),
            // @ts-ignore
            biomePlugin({
                mode: "check",
                files: ".",
                applyFixes: true,
                failOnError: true,
            }),
        ],
    },

    build: {
        inlineStylesheets: "always",
    },

    integrations: [preact(), tailwind()],
});
