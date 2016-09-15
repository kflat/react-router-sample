module.exports = {
  entry: __dirname + '/src/app.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-function-bind'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};