const aliasDirs = require("alias-dirs");

module.exports = api => {
  api.cache(() => process.env.NODE_ENV);

  return {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [
      [
        "module-resolver",
        {
          alias: aliasDirs(),
        },
      ],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
    ],
  };
};
