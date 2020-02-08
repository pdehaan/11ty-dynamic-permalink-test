const del = require("del");

// Clean the output directory for each build.
del.sync("./www");

module.exports = (eleventyConfig) => {
  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};
