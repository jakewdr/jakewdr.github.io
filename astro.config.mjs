// @ts-check
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config

export default defineConfig({

    vite: {
        build: {
            cssCodeSplit: true,
            chunkSizeWarningLimit: 100,
        },
    },

    output: "server",
    adapter: vercel(),
});
