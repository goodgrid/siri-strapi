module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "default-src": ["'self'"],
          "script-src": ["'self'", "https://content.siribaggerman.nl"],
          "style-src": ["'self'", "'unsafe-inline'", "https://content.siribaggerman.nl"],
          "img-src": ["'self'", "data:", "blob:", "https://content.siribaggerman.nl"],
          "font-src": ["'self'", "https://content.siribaggerman.nl"],
          "connect-src": ["'self'", "https://content.siribaggerman.nl"],
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  'strapi::session',
  "strapi::favicon",
  "strapi::public",
];
