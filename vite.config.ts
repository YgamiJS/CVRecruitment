import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/CVRecruitment/",
  plugins: [],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        vacancies: path.resolve(__dirname, "vacancies.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    },
  },
});
