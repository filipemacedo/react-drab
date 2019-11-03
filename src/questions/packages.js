const packageJson = require("../../api-nodejs/package.json");

const choices = Object.keys(packageJson.dependencies);

module.exports = {
  type: "checkbox",
  name: "PACKAGES",
  choices,
  validate: input => {
    return input.length > 0;
  }
};
