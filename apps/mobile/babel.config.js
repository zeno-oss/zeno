module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            $server: "server",
            $store: "./utils/store.ts",
            $trpc: "./utils/trpc.ts",
          },
        },
      ],
    ],
  };
};
