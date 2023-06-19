// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'One Beyond Maintainers',
  tagline: 'One Beyond’s commitment to the open source community encourages an attitude of collaboration, transparency, and flexibility',
  url: 'https://onebeyond-maintainers.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  favicon: 'img/favicon.ico',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: undefined
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'One Beyond Maintainers',
        logo: {
          alt: 'Logo',
          src: 'img/light.png',
          srcDark: 'img/dark.jpg'
        },
        items: [
          {
            href: 'https://github.com/onebeyond/maintainers',
            label: 'Repository',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        copyright: 'Built with Docusaurus.'
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula
      }
    })
}

module.exports = config
