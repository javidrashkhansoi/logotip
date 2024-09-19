import { resolve } from "path";
import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import autoprefixer from "autoprefixer";
import sortMediaQueries from "postcss-sort-media-queries";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import legacy from "@vitejs/plugin-legacy";
import { getHTMLFiles } from "./get-html-files.js";

export default defineConfig({
  root: resolve(__dirname, "en"),
  base: "./",
  publicDir: "../public",
  server: {
    open: "/",
  },
  resolve: {
    alias: {
      "@styles": resolve(__dirname, "src/scss"),
    },
  },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    injectHTML(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|avif)$/i,
      svg: null,
      png: {
        quality: 70,
      },
      jpeg: {
        quality: 70,
      },
      jpg: {
        quality: 70,
      },
      tiff: {
        quality: 70,
      },
    }),
  ],
  build: {
    outDir: resolve(__dirname, "dist/en"),
    rollupOptions: {
      input: {
        index: resolve(__dirname, "en/index.html"),
        portfolio: resolve(__dirname, "en/portfolio/index.html"),
        form: resolve(__dirname, "en/form/index.html"),
        ...getHTMLFiles(resolve(__dirname, "en/cases")),
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        sortMediaQueries(),
      ],
    },
  },
});
