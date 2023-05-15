import baseWebpackConfig from './webpack.base.config';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { merge } from 'webpack-merge';
const plugins = []

process.env.npm_config_report && plugins.push(new BundleAnalyzerPlugin())
const webpackConfig = merge(baseWebpackConfig, {
  devtool: 'cheap-module-source-map', // 定位到具体的源码
  mode: 'development',
  plugins
});

export default webpackConfig;