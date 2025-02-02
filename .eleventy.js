
// The export statement makes these settings available to other files in 11ty
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("blog-title", function (title, link, date, location, summary) {
    return `<div class="blog-title">
    <h3><a href="${link}" class="blog-link"<strong>${title}</strong></a></h3>
    <div class="post-info">
    <p>${location}</p>
    <p>${date}</p>
    </div>
    <p>${summary}</p>
    </div>`
  });
};
