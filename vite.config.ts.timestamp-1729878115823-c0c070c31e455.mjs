// vite.config.ts
import react from "file:///Users/ebraem/workspace/web4-potlock-linktree/node_modules/.pnpm/@vitejs+plugin-react-swc@3.7.1_vite@5.4.9_@types+node@22.7.7_terser@5.36.0_/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
import { defineConfig } from "file:///Users/ebraem/workspace/web4-potlock-linktree/node_modules/.pnpm/vite@5.4.9_@types+node@22.7.7_terser@5.36.0/node_modules/vite/dist/node/index.js";
import { nodePolyfills } from "file:///Users/ebraem/workspace/web4-potlock-linktree/node_modules/.pnpm/vite-plugin-node-polyfills@0.22.0_rollup@4.24.0_vite@5.4.9_@types+node@22.7.7_terser@5.36.0_/node_modules/vite-plugin-node-polyfills/dist/index.js";
import { TanStackRouterVite } from "file:///Users/ebraem/workspace/web4-potlock-linktree/node_modules/.pnpm/@tanstack+router-plugin@1.73.1_vite@5.4.9_@types+node@22.7.7_terser@5.36.0_/node_modules/@tanstack/router-plugin/dist/esm/vite.js";
var __vite_injected_original_dirname = "/Users/ebraem/workspace/web4-potlock-linktree";
var vite_config_default = defineConfig({
  plugins: [
    TanStackRouterVite(),
    react(),
    nodePolyfills({ globals: { global: true } })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZWJyYWVtL3dvcmtzcGFjZS93ZWI0LXBvdGxvY2stbGlua3RyZWVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9lYnJhZW0vd29ya3NwYWNlL3dlYjQtcG90bG9jay1saW5rdHJlZS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvZWJyYWVtL3dvcmtzcGFjZS93ZWI0LXBvdGxvY2stbGlua3RyZWUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgeyBub2RlUG9seWZpbGxzIH0gZnJvbSBcInZpdGUtcGx1Z2luLW5vZGUtcG9seWZpbGxzXCI7XG5pbXBvcnQgeyBUYW5TdGFja1JvdXRlclZpdGUgfSBmcm9tIFwiQHRhbnN0YWNrL3JvdXRlci1wbHVnaW4vdml0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgVGFuU3RhY2tSb3V0ZXJWaXRlKCksXG4gICAgcmVhY3QoKSxcbiAgICBub2RlUG9seWZpbGxzKHsgZ2xvYmFsczogeyBnbG9iYWw6IHRydWUgfSB9KVxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpXG4gICAgfVxuICB9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVQsT0FBTyxXQUFXO0FBQzNVLE9BQU8sVUFBVTtBQUNqQixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLHFCQUFxQjtBQUM5QixTQUFTLDBCQUEwQjtBQUpuQyxJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxtQkFBbUI7QUFBQSxJQUNuQixNQUFNO0FBQUEsSUFDTixjQUFjLEVBQUUsU0FBUyxFQUFFLFFBQVEsS0FBSyxFQUFFLENBQUM7QUFBQSxFQUM3QztBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
