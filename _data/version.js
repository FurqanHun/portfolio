const { execSync } = require('child_process');

module.exports = function () {
  try {
    const commitHash = execSync('git rev-parse --short HEAD').toString().trim();

    const commitDate = execSync('git show -s --format=%cd --date=short HEAD').toString().trim();

    return `v3.${commitHash}.${commitDate}`;
  } catch (error) {
    return 'v3.unknown.unknown';
  }
};
