import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { svgBuilder } from "./plugins/svgBuilder";
import { resolve, join } from "path";

// svg图片路径
const SVG_PATH = join(resolve(__dirname, "./src/assets/svg"), "/");

// SCSS全局声明变量
const GLOBAL_VAR = "./src/assets/styles/global-var.scss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgBuilder(SVG_PATH)],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "~": resolve(__dirname, "./node_modules")
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"]
  },
  publicDir: "public",
  server: {
    open: "/",
    port: 3000,
    strictPort: false,
    https: false, // 开启https
    proxy: {}
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html")
      }
    },
    outDir: "dist"
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${GLOBAL_VAR}";` // 添加全局样式
      }
    }
  }
});
