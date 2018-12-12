module.exports = {
  presets: [
    [
      '@babel/env',
      {
        loose: true,
        modules: false
      }
    ]
  ],
  plugins: [
    [
      "@babel/plugin-transform-modules-commonjs",
      {
        loose: true,
      }
    ],
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": false,
        "helpers": true,
        "regenerator": true,
        "useESModules": false,
      }
    ]
  ]

};