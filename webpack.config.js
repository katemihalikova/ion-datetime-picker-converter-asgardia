module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "./dist/index.js",
    libraryTarget: "umd",
  },
  externals: {
    angular: "angular",
  },
  resolve: {
    extensions: [".ts"],
  },
  module: {
    loaders: [
      {test: /\.ts$/, loader: "awesome-typescript-loader"},
    ],
  },
};
