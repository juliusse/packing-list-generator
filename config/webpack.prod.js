const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: require.resolve("css-loader"),
            options: {
              sourceMap: true,
            },
          },
          {
            loader: require.resolve("resolve-url-loader"),
            options: {
              sourceMap: true,
            },
          },
          {
            loader: require.resolve("postcss-loader"),
            options: {
              sourceMap: true,
            },
          },
          {
            loader: require.resolve("sass-loader"),
            options: {
              warnRuleAsWarning: true,
              sourceMap: true,
              sassOptions: {
                style: "compressed",
                silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import'],
              },
            },
          },
        ],
      },
    ],
  },
};

module.exports = merge(commonConfig, prodConfig);
