const { jsFolder, outputPath, publicPath } = require("./paths");

// =============================================================== //
// WEBPACK COMPILATION OUTPUT                                      //
// =============================================================== //

/* webpack compile output options */
module.exports = {
  filename: jsFolder,
  path: outputPath,
  publicPath,
};
