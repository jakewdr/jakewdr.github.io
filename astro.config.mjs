// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config

export default defineConfig({
    site: "https://jakewdr.github.io",

    vite: {
        build: {
            cssCodeSplit: true,
            chunkSizeWarningLimit: 100,
        },
    },

});
