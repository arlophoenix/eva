// https://github.com/iamturns/create-exposed-app/blob/master/.babelrc.js
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "10.14.1",
        },
      },
    ],
    "@babel/typescript",
  ],
  plugins: [
    // class { handleThing = () => { } }
    "@babel/proposal-class-properties",
    // { ...spread }
    "@babel/proposal-object-rest-spread",
  ],
};