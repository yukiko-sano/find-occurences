module.exports = {
  entry: './index.js',
  output: {
      path: __dirname + "/dist",
      filename: "index.js"
  },
  resolve: {
    fallback: {
      fs: false
      // "assert": require.resolve("assert/"),
      // "https": require.resolve("https-browserify"),
      // "http": require.resolve("stream-http"),
      // "url": require.resolve("url/"),
      // "buffer": require.resolve("buffer/"),
      // "os": require.resolve("os-browserify/browser"), //os-browserify
      // "path": require.resolve("path-browserify"), //path-browserify
    }
  }
};