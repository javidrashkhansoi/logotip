import { resolve } from "path";
import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import autoprefixer from "autoprefixer";
import sortMediaQueries from "postcss-sort-media-queries";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  base: "./",
  server: {
    open: "/pages.html",
  },
  resolve: {
    alias: {
      "@styles": resolve(__dirname, "src/scss"),
      "@html": resolve(__dirname, "src/html"),
    },
  },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    injectHTML(),
    ViteMinifyPlugin(),
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
    rollupOptions: {
      input: {
        pages: resolve(__dirname, "pages.html"),
        portfolio: resolve(__dirname, "portfolio/index.html"),
        blog: resolve(__dirname, "blog/index.html"),
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
