const { ANALYZE, NODE_ENV, PORT } = process.env;

const inDevelopment = NODE_ENV === "development";

module.exports = {
  ANALYZE /*  boolean to use bundle analyzer */,
  currentDirectory: process.cwd() /* current working directory */,
  inDevelopment /* in development environment */,
  NODE_ENV /* current environment */,
  PORT /* application's current port */,
};
