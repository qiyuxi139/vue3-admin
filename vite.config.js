import { defineConfig, searchForWorkspaceRoot } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteMockServe } from "vite-plugin-mock";
import { svgBuilder } from "./plugins/svgBuilder";
import { resolve, join } from "path";

// svg图片路径
const SVG_PATH = join(resolve(__dirname, "./src/assets/svg"), "/");

// SCSS全局声明变量
const GLOBAL_VAR = "./src/assets/styles/global-var.scss";
// Scss全局样式
const GLOBAL_STYLES = "./src/assets/styles/global-styles.scss";
// 是否启动mock
const localEnabled = process.env.USE_MOCK || false;
// 是否自动开启浏览器
const AUTO_OPEN_BROWESR = process.env.AUTO_OPEN_BROWESR;
const autoOpenBrowser = AUTO_OPEN_BROWESR === "true" || AUTO_OPEN_BROWESR === undefined;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      mockPath: "mock",
      supportTs: false,
      localEnabled,
      ignore: undefined,
      watchFiles: true,
      prodEnabled: false,
      configPath: "",
      logger: true
    }),
    svgBuilder(SVG_PATH)
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@element-plus": resolve(__dirname, "./node_modules/element-plus/packages"),
      "~": resolve(__dirname, "./node_modules")
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"]
  },
  publicDir: "public",
  server: {
    open: autoOpenBrowser ? "/" : "",
    host: "0.0.0.0",
    port: 3000,
    strictPort: false,
    https: false, // 开启https
    proxy: {},
    fs: {
      strict: true,
      allow: [searchForWorkspaceRoot(process.cwd())]
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html")
      },
      output: {}
    },
    outDir: "dist",
    assetsDir: "assets",
    assetsInlineLimit: 4096, // 4kb
    cssCodeSplit: true,
    watch: {}
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${GLOBAL_VAR}"; @import "${GLOBAL_STYLES}";` // 添加全局样式
      }
    }
  }
});
