import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import AutoImports from "unplugin-auto-import/vite";
import { dirResolver, DirResolverHelper } from "vite-auto-import-resolvers";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: { host: true },
  plugins: [
    vue(),
    VueJsx(),
    DirResolverHelper(),
    AutoImports({
      imports: ["vue", "vue-router", "pinia", "@vueuse/core"],
      resolvers: [dirResolver({ srcAlias: "@" })],
      dts: "src/auto-import.d.ts",
    }),
    Components({
      dirs: ["src/components"],
      // ui库解析器
      // resolvers: [ElementPlusResolver()],
      extensions: ["vue", "tsx"],
      dts: "src/components.d.ts",
    }),
  ],
});
