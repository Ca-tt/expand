// vite.config.ts
import { defineConfig } from "file:///F:/Coding/study/node_modules/.pnpm/vite@4.3.4_@types+node@20.0.0_sass@1.58.1/node_modules/vite/dist/node/index.js";
import vue from "file:///F:/Coding/study/node_modules/.pnpm/@vitejs+plugin-vue@4.1.0_vite@4.3.4_vue@3.2.47/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import FullReload from "file:///F:/Coding/study/node_modules/.pnpm/vite-plugin-full-reload@1.0.5_vite@4.3.4/node_modules/vite-plugin-full-reload/dist/index.js";
import Inspect from "file:///F:/Coding/study/node_modules/.pnpm/vite-plugin-inspect@0.7.26_vite@4.3.4/node_modules/vite-plugin-inspect/dist/index.mjs";
import { fileURLToPath, URL } from "node:url";
var __vite_injected_original_import_meta_url = "file:///F:/Coding/study/vite.config.ts";
var isFullReloadEnabled = true;
var isOverlayEnebled = true;
var isAutoOpenEnebled = false;
var vite_config_default = defineConfig({
  plugins: [
    Inspect(),
    vue({}),
    isFullReloadEnabled ? FullReload("./src/**/*", { always: false }) : ""
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
      "components": fileURLToPath(new URL("./src/components", __vite_injected_original_import_meta_url)),
      "scss": fileURLToPath(new URL("./src/scss/", __vite_injected_original_import_meta_url)),
      "study": fileURLToPath(new URL("./src/study/", __vite_injected_original_import_meta_url)),
      "js": fileURLToPath(new URL("./src/js/", __vite_injected_original_import_meta_url))
    }
  },
  server: {
    hmr: {
      overlay: isOverlayEnebled
    },
    open: isAutoOpenEnebled
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxDb2RpbmdcXFxcc3R1ZHlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXENvZGluZ1xcXFxzdHVkeVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovQ29kaW5nL3N0dWR5L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgRnVsbFJlbG9hZCBmcm9tICd2aXRlLXBsdWdpbi1mdWxsLXJlbG9hZCc7XG5pbXBvcnQgSW5zcGVjdCBmcm9tICd2aXRlLXBsdWdpbi1pbnNwZWN0JztcblxuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnO1xuXG5cbi8qIHZpdGUgY29tcGlsZXIgY29uZmlncyAqL1xubGV0IGlzRnVsbFJlbG9hZEVuYWJsZWQgPSB0cnVlO1xubGV0IGlzT3ZlcmxheUVuZWJsZWQgPSB0cnVlO1xubGV0IGlzQXV0b09wZW5FbmVibGVkID0gZmFsc2U7XG5cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIEluc3BlY3QoKSxcbiAgICB2dWUoe30pLFxuICAgIGlzRnVsbFJlbG9hZEVuYWJsZWQgPyBGdWxsUmVsb2FkKCcuL3NyYy8qKi8qJywgeyBhbHdheXM6IGZhbHNlIH0pIDogJydcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICdjb21wb25lbnRzJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYy9jb21wb25lbnRzJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAnc2Nzcyc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMvc2Nzcy8nLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICdzdHVkeSc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMvc3R1ZHkvJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAnanMnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjL2pzLycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgIH1cbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgaG1yOiB7XG4gICAgICBvdmVybGF5OiBpc092ZXJsYXlFbmVibGVkLFxuICAgIH0sXG4gICAgb3BlbjogaXNBdXRvT3BlbkVuZWJsZWQsXG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXFPLFNBQVMsb0JBQW9CO0FBQ2xRLE9BQU8sU0FBUztBQUNoQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGFBQWE7QUFFcEIsU0FBUyxlQUFlLFdBQVc7QUFMd0csSUFBTSwyQ0FBMkM7QUFTNUwsSUFBSSxzQkFBc0I7QUFDMUIsSUFBSSxtQkFBbUI7QUFDdkIsSUFBSSxvQkFBb0I7QUFHeEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsUUFBUTtBQUFBLElBQ1IsSUFBSSxDQUFDLENBQUM7QUFBQSxJQUNOLHNCQUFzQixXQUFXLGNBQWMsRUFBRSxRQUFRLE1BQU0sQ0FBQyxJQUFJO0FBQUEsRUFDdEU7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsTUFDcEQsY0FBYyxjQUFjLElBQUksSUFBSSxvQkFBb0Isd0NBQWUsQ0FBQztBQUFBLE1BQ3hFLFFBQVEsY0FBYyxJQUFJLElBQUksZUFBZSx3Q0FBZSxDQUFDO0FBQUEsTUFDN0QsU0FBUyxjQUFjLElBQUksSUFBSSxnQkFBZ0Isd0NBQWUsQ0FBQztBQUFBLE1BQy9ELE1BQU0sY0FBYyxJQUFJLElBQUksYUFBYSx3Q0FBZSxDQUFDO0FBQUEsSUFDM0Q7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixLQUFLO0FBQUEsTUFDSCxTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0EsTUFBTTtBQUFBLEVBQ1I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
