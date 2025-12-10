import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",   // change from "/Portfolio/" to "/"
  plugins: [react()],
});
