import purgecss from "@fullhuman/postcss-purgecss";

export const plugins = [
    // biome-ignore lint/nursery/noCommonJs:
    require("tailwindcss"),
    // biome-ignore lint/nursery/noCommonJs:
    require("autoprefixer"),
    purgecss({
        content: ["src/**/*.css", "src/**/*.astro", "src/**/*.html"],
        defaultExtractor: (content) =>
            content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
    }),
];
