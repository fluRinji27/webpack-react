const paths = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')



const babelLoader = {
  loader: 'babel-loader',
  options: {
    presets: ['@babel/preset-env', '@babel/preset-react'],
  }
}

module.exports = {
  entry: `${paths.src}/index`,
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      // JavaScript, React
      {
        test: /\.m?jsx?$/i,
        exclude: /node_modules/,
        use: babelLoader
      },
      // TypeScript
      {
        test: /.tsx?$/i,
        exclude: /node_modules/,
        use: [babelLoader, 'ts-loader']
      },
      // CSS, SASS
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${paths.public}/index.html`,
      filename: 'index.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: paths.build
  }
}