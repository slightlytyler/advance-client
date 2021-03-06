import path from 'path';
import webpack from 'webpack';
import { createConfig } from './base.config';

const port = 3000;

export default createConfig(({ __src, baseConfig }) => ({
  ...baseConfig,
  entry: {
    ...baseConfig.entry,
    main: [
      `webpack-dev-server/client?http://localhost:${port}`,
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      path.join(__src, 'main.js'),
    ],
  },
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
    hot: true,
    noInfo: false,
    quiet: false,
    port,
    publicPath: baseConfig.output.publicPath,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false,
    },
  },
  plugins: [
    ...baseConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
}))
