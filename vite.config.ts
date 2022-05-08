import { resolve } from "path";
import { UserConfigExport, ConfigEnv } from "vite";
import { viteMockServe } from "vite-plugin-mock";
import vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import AutoImports from "unplugin-auto-import/vite";
import { dirResolver, DirResolverHelper } from "vite-auto-import-resolvers";
import Components from "unplugin-vue-components/vite";
import Inspect from "vite-plugin-inspect";

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => ({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: { host: true },
  plugins: [
    vue(),
    VueJsx(),
    Inspect(),
    viteMockServe({
      mockPath: "src/mock",
      localEnabled: command === "serve",
      prodEnabled: true,
    }),
    DirResolverHelper(),
    AutoImports({
      imports: ["vue", "vue-router", "pinia", "@vueuse/core"],
      resolvers: [dirResolver({ srcAlias: "@" })],
      dts: "src/auto-import.d.ts",
    }),
    Components({
      dirs: ["src/components", "src/api"],
      // ui库解析器
      // resolvers: [ElementPlusResolver()],
      extensions: ["vue", "tsx", "ts"],
      dts: "src/components.d.ts",
    }),
  ],
});
