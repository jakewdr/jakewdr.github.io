/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                "pixelify-sans": ["Pixelify Sans", "sans-serif"],
                "ibm-plex-mono": ["IBM Plex Mono", "monospace"],
            },
            colors: {
                "new-blue-one": "#24283b",
                "link-hover": "#0099ff",
            },
        },
    },
    jit: true,
};
