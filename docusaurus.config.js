module.exports = {
  title: "ailinykh.com",
  tagline: "personal blog",
  url: "https://ailinykh.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "ailinykh", // Usually your GitHub org/user name.
  projectName: "blog", // Usually your repo name.
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  themeConfig: {
    prism: {
      additionalLanguages: ["swift"],
    },
    navbar: {
      title: "Developer Notes",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} ailinykh.com`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false,
        blog: {
          showReadingTime: true,
          path: "blog",
          routeBasePath: "/",
          // Please change this to your repo.
          editUrl: "https://github.com/ailinykh/blog/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-VPL1442NPW",
        },
      },
    ],
  ],
};
