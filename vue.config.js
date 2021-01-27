const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      // alias_1: alias 配置
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@api": path.resolve(__dirname, "src/api"),
        "@asset": path.resolve(__dirname, "src/assets"),
        "@component": path.resolve(__dirname, "src/components"),
        "@view": path.resolve(__dirname, "src/views"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@image": path.resolve(__dirname, "src/assets/svg"),
      },
    },
  },
};
