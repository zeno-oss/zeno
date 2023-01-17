const withTM = require("next-transpile-modules")(["server", "store"]); // pass the modules you would like to see transpiled

module.exports = withTM({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = "electron-renderer";
    }

    return config;
  },
});
