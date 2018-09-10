const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  // Remove old rules
  defaultConfig.module.rules = defaultConfig.module.rules.filter(
    item =>
      !(
        item.test &&
        typeof item.test === "object" &&
        item.test.test &&
        (item.test.test("t.svg") || item.test.test("t.png"))
      )
  );
  // Add in updated image rule
  defaultConfig.module.rules.push({
    test: /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
    loader: require.resolve("file-loader"),
    query: {
      name: "static/media/[name].[hash:8].[ext]"
    }
  });

  return defaultConfig;
};
