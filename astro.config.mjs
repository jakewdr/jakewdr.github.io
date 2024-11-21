// @ts-check
import { defineConfig } from "astro/config";
import { visualizer } from "rollup-plugin-visualizer";

import preact from "@astrojs/preact";

import tailwind from "@astrojs/tailwind";

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
        plugins: [visualizer()],
    },

    integrations: [preact(), tailwind()],
});
