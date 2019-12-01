/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: "Flock",
  tagline:
    "All of your external systems in one easy to use RESTful API.",
  url: "https://flock.rest",
  baseUrl: "/",
  favicon: "favicon.ico",
  organizationName: "Flock", // Usually your GitHub org/user name.
  projectName: "flock", // Usually your repo name.
  themeConfig: {
    navbar: {
      // title: 'My Site',
      logo: {
        alt: "Flock",
        src: "img/logo.svg"
      },
      links: [
        { to: "docs/doc1", label: "Docs", position: "right" },
        { to: "blog", label: "Blog", position: "right" },
        {
          href: "https://github.com/pollygot/flock",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      // links: [
      //   {
      //     title: "Docs",
      //     items: [
      //       {
      //         label: "Docs",
      //         to: "docs/doc1"
      //       }
      //     ]
      //   },
      //   {
      //     title: "Community",
      //     items: [
      //       {
      //         label: "Discord",
      //         href: "https://discordapp.com/invite/docusaurus"
      //       }
      //     ]
      //   },
      //   {
      //     title: "Social",
      //     items: [
      //       {
      //         label: "Blog",
      //         to: "blog"
      //       }
      //     ]
      //   }
      // ],
      // logo: {
      //   alt: "Flock",
      //   src: "/img/logo-white.svg",
      //   // href: "https://opensource.facebook.com/"
      // },
      copyright: `Copyright © ${new Date().getFullYear()} Pollygot.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js")
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
