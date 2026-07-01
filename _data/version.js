const { execSync } = require('child_process');

module.exports = function () {
  try {
    const currentDate = new Date().toISOString().split('T')[0];
    const iteration = 18;

    return `v3.${currentDate}.${iteration}`;
  } catch (error) {
    const fallbackDate = new Date().toISOString().split('T')[0];
    return `v3.${fallbackDate}.unknown`;
  }
};
