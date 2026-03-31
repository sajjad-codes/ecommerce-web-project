import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "./", // 🔥 IMPORTANT for Netlify (relative paths)

  build: {
    outDir: "dist", // default hai but clarity ke liye
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
        products: resolve(__dirname, "products.html"),
        addToCart: resolve(__dirname, "addToCart.html"),
        login: resolve(__dirname, "login.html"),      // 🔥 ADD THIS
        signup: resolve(__dirname, "signup.html"),    // 🔥 ADD THIS
      },
    },
  },
});