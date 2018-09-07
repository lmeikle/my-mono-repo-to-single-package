const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  defaultConfig.module.rules.push({
    test: /\.(png|jpg|gif|svg)$/i,
    use: [
      {
        loader: "url-loader",
        options: {
          name: "[name].[ext]"
        }
      }
    ]
  });

  return defaultConfig;
};
