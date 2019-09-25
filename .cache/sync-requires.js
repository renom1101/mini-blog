const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-js": hot(preferDefault(require("/Users/renat/projects/mini-blog/src/templates/post.js"))),
  "component---src-templates-category-js": hot(preferDefault(require("/Users/renat/projects/mini-blog/src/templates/category.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/renat/projects/mini-blog/.cache/dev-404-page.js"))),
  "component---src-pages-categories-js": hot(preferDefault(require("/Users/renat/projects/mini-blog/src/pages/categories.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/renat/projects/mini-blog/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/renat/projects/mini-blog/src/pages/index.js"))),
  "component---src-pages-success-js": hot(preferDefault(require("/Users/renat/projects/mini-blog/src/pages/success.js")))
}

