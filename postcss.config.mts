import purgecss from "@fullhuman/postcss-purgecss"

export const plugins = [
    require("tailwindcss"),
    require("autoprefixer"),
    purgecss({
        content: ["src/**/*.css", "src/**/*.astro", "src/**/*.html"],
        defaultExtractor: content => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
    }),

]
