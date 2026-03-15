/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://michaelflanagan.dev",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  // Exclude pages that shouldn't be indexed
  exclude: ["/style-guide"],
};