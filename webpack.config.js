module.exports = {
  entry: {
    cowjs: './src/cowjs-core.ts',
    cowjs_plugin_eosjs: './src/cowjs-eosjs.ts'
  },
  devtool: 'inline-source-map',
  mode: 'development',
  output: {
    library: 'cowjs',
    pathinfo: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
}