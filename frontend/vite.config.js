import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/api": "food-delivery-api-fawn.vercel.app",
    },
  },
  plugins: [react()],
});
