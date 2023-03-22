import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "fontawesome-svg-core": ["@fortawesome/fontawesome-svg-core"],
        },
      },
    },
    minify: false,
    target: "es5",
  },
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "ie >= 11", "firefox >= 47"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
      polyfills: [
        "es/map",
        "es/set",
        "es/array",
        "es/array-buffer",
        "es/typed-array",
        "es/error",
        "es/object",
        "stable/array",
      ],
    }),
  ],
});
