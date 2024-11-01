// @ts-check
import { defineConfig } from 'astro/config';
import million from "million/compiler";
import MillionLint from "@million/lint";
import react from "@astrojs/react";

// https://astro.build/config

export default defineConfig({
    site: 'https://jakewdr.github.io',

    vite: {
        build: {
            cssCodeSplit: true
        },
        plugins: [million.vite({ mode: "react", server: true, auto: true })]
    },

    integrations: [react(), MillionLint.astro()]
})