const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue']
  },
  // devServe: {
  //   static: {
  //     directory: path.join(__dirname, 'public'),
  //   },
  //   compress: true,
  //   port: 9000,
  // }
  module: {
    rules: [{
      test: /.tsx?$/,
      use: [
        "babel-loader"
      ]
    }]
  },
  plugins: []
}
