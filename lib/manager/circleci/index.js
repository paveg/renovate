const { extractDependencies } = require('./extract');
const { getPackageUpdates } = require('../docker/package');
const { resolvePackageFile } = require('./resolve');
const { updateDependency } = require('./update');

const filePattern = new RegExp('^.circleci/config.yml$');
const contentPattern = new RegExp('(^|\\n)\\s*- image: ');

module.exports = {
  contentPattern,
  extractDependencies,
  filePattern,
  getPackageUpdates,
  resolvePackageFile,
  updateDependency,
};