const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const LiveReloadPlugin = require('webpack-livereload-plugin')

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  target: 'web',
  entry: { app: './src/frontend/index.tsx' },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'wearbeast!',
      templateContent: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
            </head>
            <body>
              <div id="root"></div>
            </body>
            </html>
          `,
    }),
    new LiveReloadPlugin({
      port: 35729,
      appendScriptTag: true,
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'out'),
    compress: false,
    port: 9000,
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'out'),
  },
}
