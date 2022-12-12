import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { __esModule } from "@babel/preset-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { host: "localhost", port: 8080, open: true },
});
