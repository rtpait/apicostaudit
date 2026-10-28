module.exports = function (cfg) {
  cfg.addPassthroughCopy({
    "src/style.css": "style.css",
    "src/logo-mark.svg": "logo-mark.svg",
    "src/og-image.svg": "og-image.svg",
    "src/robots.txt": "robots.txt",
    "src/CNAME": "CNAME",
    "src/.nojekyll": ".nojekyll",
    "src/llms.txt": "llms.txt",
    "src/llms-full.txt": "llms-full.txt",
    "src/datasets": "datasets",
    "src/well-known": ".well-known",
    "src/well-known/webmcp.json": "webmcp.json",
    "src/admin": "admin",
    "src/api": "api"
  });
  cfg.addFilter("json", (v) => JSON.stringify(v));
  return { dir: { input: "src", output: "_site" }, htmlTemplateEngine: "njk" };
};
