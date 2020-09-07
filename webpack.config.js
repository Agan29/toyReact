/*
 * @Author: Agan
 * @Date: 2020-09-07 23:30:32
 * @LastEditors: Agan
 * @LastEditTime: 2020-09-08 00:38:16
 * @Description: webpack config.js
 */
module.exports = {
  entry: {
    main: "./src/main.js"
  },
  mode: "development",
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              ["@babel/plugin-transform-react-jsx", { pragma: "creatElement" }]
            ]
          }
        }
      }
    ]
  }
}
