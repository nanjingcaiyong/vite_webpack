import legacy from '@vitejs/plugin-legacy';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vue from "@vitejs/plugin-vue";
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
      vueJsx({})
    ]
  }
};

export default config;