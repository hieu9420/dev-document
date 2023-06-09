// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Oryza Document",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://oryza-document.vercel.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "hieu9420", // Usually your GitHub org/user name.
  projectName: "dev-document", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "docs",
          path: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          lastVersion: "current",
          onlyIncludeVersions: ["current"],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs-tester",
        path: "docs-tester",
        routeBasePath: "docs-tester",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs-tech",
        path: "docs-tech",
        routeBasePath: "docs-tech",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "file-uploads",
        path: "file-uploads",
        routeBasePath: "file-uploads",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
  ],
  // [
  //   "classic",
  //   /** @type {import('@docusaurus/preset-classic').Options} */
  //   ({
  //     docs: {
  //       sidebarPath: require.resolve("./sidebars.js"),
  //       // Please change this to your repo.
  //       // Remove this to remove the "edit this page" links.
  //       editUrl:
  //         "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
  //     },
  //     blog: {
  //       showReadingTime: true,
  //       // Please change this to your repo.
  //       // Remove this to remove the "edit this page" links.
  //       editUrl:
  //         "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
  //     },
  //     theme: {
  //       customCss: require.resolve("./src/css/custom.css"),
  //     },
  //   }),
  // ],
  // ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Oryza Document",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Lập trình",
          },
          {
            to: "/docs-tester/intro",
            label: "Tester",
            position: "left",
            activeBaseRegex: `/docs-tester/`,
          },
          {
            to: "/docs-tech/intro",
            label: "Công nghệ",
            position: "left",
            activeBaseRegex: `/docs-tech/`,
          },
          {
            to: "/file-uploads/intro",
            label: "Tải về",
            position: "left",
            activeBaseRegex: `/file-uploads/`,
          },
          // { to: "/blog", label: "Bài viết", position: "left" },
          {
            href: "https://github.com/hieu9420",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Tài liệu",
            items: [
              {
                label: "Lập trình",
                to: "/docs/general/rule",
              },
              {
                label: "Tester",
                to: "/docs-tester/intro",
              },
              {
                label: "Công nghệ",
                to: "/docs-tech/intro",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Oryza Document`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
