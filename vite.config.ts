import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  // 相对路径：让构建产物在任意子目录或本地双击打开时都能正确加载资源
  base: "./",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        pure: "pure.html",
        mechanics: "mechanics.html",
        mechanicsDemo: "mechanics-demo.html",
        objects: "mechanics-objects.html",
      },
    },
  },
  server: { host: "0.0.0.0", port: 5173, strictPort: true },
});
