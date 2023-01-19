module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      [
        "module-resolver",
        {
          alias: {
            $server: "server",
            $store: "store",
            $trpc: "./utils/trpc.ts",
          },
        },
      ],
    ],
  };
};
