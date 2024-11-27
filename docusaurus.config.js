// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Escape Simulator',
  tagline: 'Now with VR mode',
  favicon: 'img/ESIcon.png',

  // Set the production url of your site here
  url: 'https:/docs.escapesimulator.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  
  organizationName: 'SuperJura', // Usually your GitHub org/user name.
  projectName: 'ESDocs', // Usually your repo name.
  trailingSlash: false,
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/SuperJura/ESDocs/blob/main/',
        },
        blog: {
          blogSidebarCount: 'ALL',
          blogSidebarTitle: "All posts",
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/SuperJura/ESDocs/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Escape Simulator',
        logo: {
          alt: 'Escape Simulator Logo',
          src: 'img/ESIcon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'gameSidebar',
            position: 'left',
            label: 'About the game',
          },
          {
            type: 'docSidebar',
            sidebarId: 'roomEditorSidebar',
            position: 'left',
            label: 'Room Editor',
          },
          {
            href: 'https://store.steampowered.com/app/1435790/Escape_Simulator/',
            label: 'Steam',
            position: 'right',
          },
          {
            href: 'https://www.meta.com/experiences/escape-simulator/6960826027306377/',
            label: 'Meta',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/pinestudio',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/PineStudioLLC',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/PlayEscapeSimulator',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/SuperJura/ESDocs',
              },
            ],
          },
        ],
        copyright: `${new Date().getFullYear()} Escape Simulator, Pine Studio.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
    }),
};
module.exports = config;