import { resolve } from "path";
import { readdirSync } from "fs";
import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import injectHTML from "vite-plugin-html-inject";
import autoprefixer from "autoprefixer";
import sortMediaQueries from "postcss-sort-media-queries";

function getHTMLFiles(path) {
  const files = readdirSync(path);
  const htmlFiles = files.filter(file => {
    return file.endsWith(".html");
  });
  const input = {};

  htmlFiles.forEach(file => {
    const name = file.replace(".html", "");

    input[name] = resolve(path, file);
  });

  return input;
}

export default defineConfig(({ mode }) => {
  if (!["ru", "en"].includes(mode)) throw new Error("mode must be \"ru\" or \"en\"");

  return {
    base: "./",
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
        targets: ["defaults", "not IE 11"],
      }),
      ViteEjsPlugin({
        mode,
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
      outDir: resolve(__dirname, "dist", mode),
      rollupOptions: {
        input: {
          index: resolve(__dirname, "index.html"),
          portfolio: resolve(__dirname, "portfolio/index.html"),
          ...getHTMLFiles(resolve(__dirname, "cases")),
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
  }
});
