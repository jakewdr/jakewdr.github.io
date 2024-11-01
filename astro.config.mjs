// @ts-check
import { defineConfig } from 'astro/config';
import MillionLint from "@million/lint";
import react from "@astrojs/react";

// https://astro.build/config

export default defineConfig({
    site: 'https://jakewdr.github.io',

    vite: {
        build: {
            cssCodeSplit: true
        }
    },

    integrations: [react(), MillionLint.astro()]
})