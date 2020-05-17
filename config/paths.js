const { resolve } = require("path");
const { currentDirectory } = require("./envs");

// =============================================================== //
// WEBPACK PATHS                                                   //
// =============================================================== //

module.exports = {
  /* project publicPath */
  publicPath: "/",
  /* compiled build output path (/dist) */
  outputPath: resolve(`${currentDirectory}/dist`),
  /* path to public folder (./public) */
  publicFolder: resolve(`${currentDirectory}/public`),
  /* entry point to the application index (./src/index.js) */
  entryPath: resolve(`${currentDirectory}/src/index.js`),
  /* path to index.html (build/index.html) */
  templatePath: resolve(`${currentDirectory}/public/index.html`),
  /* path to favicon.ico (build/favicon.ico) */
  faviconPath: resolve(`${currentDirectory}/public/favicon.ico`),
  /* analyzed client assets (next/analyze/client.html) */
  analyzePath: "analyze/client.html",
  /* compiled fonts build path (build/assets) */
  fontsFolder: "static/assets",
  /* compiled CSS build path (build/css) */
  cssFolder: "static/css/bundle.min.css",
  /* compiled JS build path (build/js) */
  jsFolder: "static/js/bundle.min.js",
};
