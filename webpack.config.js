module.exports = {
  entry: {
    'cowjs': './src/index.ts',
    'cowjs-core': './src/cowjs-core/index.ts',
    'cowjs-eosjs': './src/cowjs-eosjs/index.ts',
    'cowjs-eosjs-jsonrpc': './src/cowjs-eosjs/eosjs-jsonrpc.ts',
    'cowjs-eosjs-eosjs': './src/cowjs-eosjs/eosjs.ts'
  },
  devtool: 'source-map',
  mode: 'production',
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
    pathinfo: true,
    libraryTarget: 'umd'
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