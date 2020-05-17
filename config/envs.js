const { ANALYZE, NODE_ENV, PORT } = process.env;

const inDevelopment = NODE_ENV === "development";

module.exports = {
  /*  boolean to use bundle analyzer */
  ANALYZE,
  /* current working directory */
  currentDirectory: process.cwd(),
  /* in development environment */
  inDevelopment,
  /* current environment */
  NODE_ENV,
  /* application's current port */
  PORT,
};
