import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";
import path from "path"
import { libInjectCss } from 'vite-plugin-lib-inject-css';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      name: "example-template",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
        preserveModules: false,
        // Put chunk files at <output>/chunks
        chunkFileNames: 'chunks/[name].[hash].js',
        // Put chunk styles at <output>/assets
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
    sourcemap: true,
    emptyOutDir: true,
    cssCodeSplit: true, 
  },
  plugins: [libInjectCss(), react(), dts({ insertTypesEntry: true, rollupTypes: true, tsconfigPath: './tsconfig.app.json' })],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});