// @ts-check
import { defineConfig } from "astro/config";
import { visualizer } from "rollup-plugin-visualizer";

import preact from "@astrojs/preact";

// https://astro.build/config

export default defineConfig({
    site: "https://jakewdr.github.io",

    vite: {
        build: {
            cssCodeSplit: true,
            chunkSizeWarningLimit: 20,
        },
        plugins: [visualizer()],
    },

    integrations: [preact()],
});
