import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '4ec'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '59b'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '31e'),
            routes: [
              {
                path: '/docs/architecture/constraints',
                component: ComponentCreator('/docs/architecture/constraints', '5ef'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/architecture/roles',
                component: ComponentCreator('/docs/architecture/roles', 'f14'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/faq/issues',
                component: ComponentCreator('/docs/faq/issues', '78b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'a6e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/requirements/functional',
                component: ComponentCreator('/docs/requirements/functional', '53e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/requirements/non-functional',
                component: ComponentCreator('/docs/requirements/non-functional', 'a05'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/security/privacy',
                component: ComponentCreator('/docs/security/privacy', 'a26'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
