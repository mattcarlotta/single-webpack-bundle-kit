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
  /* path to index.html (dist/index.html) */
  templatePath: resolve(`${currentDirectory}/public/index.html`),
  /* path to favicon.ico (dist/favicon.ico) */
  faviconPath: resolve(`${currentDirectory}/public/favicon.ico`),
  /* analyzed client assets (dist/analyze/client.html) */
  analyzePath: "analyze/client.html",
  /* compiled fonts build path (dist/static/assets) */
  fontsFolder: "static/assets",
  /* compiled CSS build path (dist/static/css) */
  cssFolder: "static/css/bundle.min.css",
  /* compiled JS build path (dist/static/js) */
  jsFolder: "static/js/bundle.min.js",
};
