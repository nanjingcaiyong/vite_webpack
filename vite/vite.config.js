import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src/pages/',
  optimizeDeps: {
    include: [
      'vue'
    ]
  },
  plugins: [
    vue(),
    // createHtmlPlugin({
    //   minify: true,
    //   pages: [{
    //     template: 'index.html',
    //     injectOptions: {
    //       data: {
    //         title: 'index',
    //         injectScript: `<script src="./inject.js"></script>`,
    //       }
    //     },
    //   }]
    // })
  ],
  resolve: {
    extensions: ['.js', '.vue', '.ts', '.tsx'],
    alias: {
      'vue': '@vue/runtime-dom',
      '@utils': '/utils', // 每当引模块的时候，它会直接从映射的路径引入而不需要按模块的查找规则查找, 加快 webpack 查找模块的速度
      '@': '../../../src',
    }
  },
})
