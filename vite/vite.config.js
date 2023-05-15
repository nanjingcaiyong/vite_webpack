import { defineConfig, loadEnv } from "vite";
import { readdirSync } from "fs";
import config from './config';

const rootPath = process.cwd();
const srcPath = process.cwd() + '/src';
const entryPath = srcPath + "/pages";

const devMode = process.env.NODE_ENV !== 'production';

const entrys = readdirSync(entryPath).reduce((obj, moduleName) => Object.assign(obj, {
  [moduleName]: entryPath + `/${moduleName}/index.html`
}), {})

export default defineConfig(({ mode, command }) => {
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, rootPath + '/vite/config', '');
  return {
    root: './src/pages/',
    plugins: devMode ? config['dev'].plugins : config['build'].plugins,
    experimental: {
      renderBuiltUrl () {
        return { relative: true }
      }
    },
    resolve: {
      extensions: [".js", ".ts", ".vue", ".json"],
      alias: {
        "@": srcPath
      },
    },
    server: {
      open: true
    },
    build: {
      rollupOptions: {
        input: entrys,
        output: {
          entryFileNames: '[name].js'
        }
      },
      outDir: rootPath + "/dist",
      emptyOutDir: true             // 构建前删除dist文件夹
    },
    define: {
      'process.env': env
    },
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
    }
  };
});
