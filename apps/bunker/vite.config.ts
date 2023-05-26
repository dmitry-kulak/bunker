/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import * as process from "process";

const host = process.env.HOST ?? "localhost";
const port = process.env.PORT ? Number(process.env.PORT) || 3000 : 3000;
export default defineConfig({
  cacheDir: "../../node_modules/.vite/bunker",

  server: {
    port,
    host,
  },

  preview: {
    port: 4300,
    host: "localhost",
  },

  plugins: [
    react(),
    viteTsConfigPaths({
      root: "../../",
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },

  test: {
    globals: true,
    cache: {
      dir: "../../node_modules/.vitest",
    },
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },
});
