import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { readdirSync } from "fs";

import viteCompression from "vite-plugin-compression";

const rootPath = process.cwd();
const srcPath = process.cwd() + '/src'
const entryPath = srcPath + "/pages";

const entrys = readdirSync(entryPath).reduce((obj, moduleName) =>
 Object.assign(obj, {[moduleName]: entryPath + `/${moduleName}/index.html`}),
 {}
);

export default defineConfig(({ mode }) => {
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, rootPath + '/vite/config', '');
  return {
    root: './src/pages/',
    plugins: [
      vue(),
      // gzip压缩 生产环境生成 .gz 文件
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: "gzip",
        ext: ".gz",
      }),
    ],
    resolve: {
      extensions: [".js", ".ts", ".vue", ".json"],
      alias: {
        "@": srcPath,
        language: srcPath + "/pages/language",
      },
    },
    server: {
      host: "localhost",
      port: 8080,
      open: true
    },
    build: {
      rollupOptions: {
        input: entrys,
        output: { dir: rootPath + "/dist" },
      }
    },
    define: {
      'process.env': env,
    }
  };
});
