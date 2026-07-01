const { execSync } = require('child_process');

module.exports = function () {
  try {
    const currentDate = new Date().toISOString().split('T')[0];

    let commitCount = parseInt(execSync('git rev-list --count --since="midnight" HEAD').toString().trim(), 10) || 0;

    const status = execSync('git status --porcelain').toString().trim();
    if (status !== '') {
      commitCount += 1;
    }

    return `v3.${currentDate}.${commitCount}`;
  } catch (error) {
    const fallbackDate = new Date().toISOString().split('T')[0];
    return `v3.${fallbackDate}.unknown`;
  }
};
