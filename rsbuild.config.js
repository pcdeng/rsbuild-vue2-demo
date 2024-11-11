import { defineConfig, loadEnv } from "@rsbuild/core";
import { pluginBabel } from "@rsbuild/plugin-babel";
// import { pluginLess } from '@rsbuild/plugin-less';
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginVue2 } from "@rsbuild/plugin-vue2";
import { pluginVue2Jsx } from "@rsbuild/plugin-vue2-jsx";
import { resolve } from "path";

const { publicVars } = loadEnv({ prefixes: ["VUE_APP_"] });

export default defineConfig({
  plugins: [
    pluginVue2(),
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
    }),
    pluginVue2Jsx(),
    pluginSass(),
  ],
  html: {
    template: "./public/index.html",
  },
  source: {
    // 指定入口文件
    entry: {
      index: "./src/main.js",
    },
    define: publicVars,
  },
  tools: {
    // 开启打包分析
    rspack: {
      resolve: {
        alias: {
          "@": resolve("src"),
        },
      },
    },
  },
});
