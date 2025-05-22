module.exports = {
  title: 'Открытый кампус',
  tagline: 'Документация проекта',
  url: 'https://your-domain.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'your-org', // обычно GitHub username
  projectName: 'open-campus-docs', // название репозитория

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          //customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
};
