import legacy from '@vitejs/plugin-legacy';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vue from "@vitejs/plugin-vue";
import inject from '@rollup/plugin-inject';
import path from 'path'
const config = {
  build: {
    plugins: [
      {
        name: 'demo-transform',
        enforce: 'pre',
        transformIndexHtml (html, ctx) {
          const pageName = /(?<=\/)([a-zA-Z0-9]*)(?=\/index.html)/.exec(ctx.path)[0]
          return html
            .replace(/__TITTLE__/g, pageName)
            .replace(/__APP__/g, pageName)
            .replace(/__MODULE__/g, `./${pageName}.js`)
        }
      },
      vue(),
      vueJsx({}),
      legacy({
        targets: ['defaults']
      }),
      inject({
        $API: path.resolve(__dirname, '../../src/apis/index.js')
      })
    ]
  },
  dev: {
    plugins: [
      {
        name: 'demo-transform',
        enforce: 'pre',
        transformIndexHtml (html, ctx) {
          const pageName = /(?<=\/)([a-zA-Z0-9]*)(?=\/index.html)/.exec(ctx.path)[0]
          return html
            .replace(/__TITTLE__/g, pageName)
            .replace(/__APP__/g, pageName)
            .replace(/__MODULE__/g, `./${pageName}.js`)
        }
      },
      vue(),
      vueJsx({}),
      inject({
        $API: path.resolve(__dirname, '../../src/apis/index.js')
      })
    ]
  }
};

export default config;