import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'PacOS',
    titleDelimiter: '—',
    tagline: 'Enterprise Control Plane for Application Environments',
    favicon: 'favicon.ico',

    future: {
        v4: true,
    },

    url: 'https://pacos.dev',
    baseUrl: '/',

    onBrokenLinks: 'throw',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    editUrl:
                        'https://github.com/pacos-dev/documentation/edit/main/',
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: 'img/screens/desktop.jpg',
        colorMode: {
            defaultMode: 'light',
            respectPrefersColorScheme: false,
        },
        navbar: {
            title: 'PacOS',
            logo: {
                alt: 'PacOS Logo',
                src: 'img/icon.png',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Documentation',
                },
                {
                    to: 'https://demo.pacos.dev',
                    label: 'Explore Demo',
                    position: 'left'
                },
                {
                    href: 'https://github.com/pacos-dev/pacos',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'light',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {label: 'Installation', to: '/docs/user/installation',},
                        {
                            label: 'User guide',
                            to: '/docs/user',
                        },
                        {label: 'Developer Guide', to: '/docs/developers',},]
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/pacos',
                        }
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/pacos-dev/pacos',
                        },
                        {
                            label: 'Demo',
                            href: 'https://demo.pacos.dev',
                        },
                        {
                            label: 'License',
                            href: '/docs/license',
                        }
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} PacOS.dev All rights reserved.<br/><small>Free to use. Free for personal and commercial use. Source available. Redistribution and resale of PacOS itself are restricted. <a href="/docs/license">View License</a> / <a href="https://github.com/pacos-dev/pacos">GitHub</a></small>`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
