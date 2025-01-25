const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  entry: "./src/index.tsx",
  devServer: {
    port: 8080,

    historyApiFallback: {
      index: "/index.html",
    },
  },
  devtool: "inline-source-map",
  output: {
    publicPath: "http://localhost:8080/",
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "resolve-url-loader", "postcss-loader",
          {
            loader: require.resolve("sass-loader"),
            options: {
              sassOptions: {
                silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import'],
              },
            },
          },
        ],
      },
    ],
  },
};

module.exports = merge(commonConfig, devConfig);
