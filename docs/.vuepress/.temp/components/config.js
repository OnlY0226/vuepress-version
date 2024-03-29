import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "/home/oy_ou/vuepress-version/node_modules/.pnpm/vuepress-shared@2.0.0-beta.212_vuepress@2.0.0-beta.62/node_modules/vuepress-shared/lib/client/index.js";
import { h } from "vue";

import { useStyleTag } from "/home/oy_ou/vuepress-version/node_modules/.pnpm/@vueuse+core@10.1.2_vue@3.3.4/node_modules/@vueuse/core/index.mjs";
import Badge from "/home/oy_ou/vuepress-version/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.212_vuepress@2.0.0-beta.62/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "/home/oy_ou/vuepress-version/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.212_vuepress@2.0.0-beta.62/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "/home/oy_ou/vuepress-version/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.212_vuepress@2.0.0-beta.62/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "/home/oy_ou/vuepress-version/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.212_vuepress@2.0.0-beta.62/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
      useStyleTag(`\
  @import url("https://at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
  `);
  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});
