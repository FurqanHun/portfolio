module.exports = function(eleventyConfig) {
  // Pass through these directories to the final build
  eleventyConfig.addPassthroughCopy("Assets");
  eleventyConfig.addPassthroughCopy("src");
  eleventyConfig.addPassthroughCopy("script.js");
  // vendors/ could be dropped if it's empty, but we'll add it just in case
  eleventyConfig.addPassthroughCopy("vendors");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
