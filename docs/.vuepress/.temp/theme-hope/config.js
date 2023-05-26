import { defineClientConfig } from "@vuepress/client";

import { Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "/home/oy_ou/vuepress-version/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.212_vuepress@2.0.0-beta.62/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { HopeIcon } from "/home/oy_ou/vuepress-version/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.212_vuepress@2.0.0-beta.62/node_modules/vuepress-theme-hope/lib/bundle/export.js";
import { defineAutoCatalogIconComponent } from "/home/oy_ou/vuepress-version/node_modules/.pnpm/vuepress-plugin-auto-catalog@2.0.0-beta.212_vuepress@2.0.0-beta.62/node_modules/vuepress-plugin-auto-catalog/lib/client/index.js"
import { GlobalEncrypt, LocalEncrypt } from "/home/oy_ou/vuepress-version/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.212_vuepress@2.0.0-beta.62/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "/home/oy_ou/vuepress-version/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.212_vuepress@2.0.0-beta.62/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"
import Slide from "/home/oy_ou/vuepress-version/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.212_vuepress@2.0.0-beta.62/node_modules/vuepress-plugin-md-enhance/lib/client/SlidePage.js";

import "/home/oy_ou/vuepress-version/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.212_vuepress@2.0.0-beta.62/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineAutoCatalogIconComponent(HopeIcon);

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,
    Slide,
  }
});