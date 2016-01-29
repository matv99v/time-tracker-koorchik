module.exports = {
  entry: './src/main.js',
  output: {
    filename: './public/build/main.js'
  },
  module: {
    loaders: [
        { test: /\.js$/, loader: "babel"}
    ]
  }
};
