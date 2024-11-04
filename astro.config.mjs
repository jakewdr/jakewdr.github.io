import preact from "@astrojs/preact";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config

export default defineConfig({
    site: "https://jakewdr.github.io",

    vite: {
        build: {
            cssCodeSplit: true,
        },
    },

    integrations: [preact()],
});
