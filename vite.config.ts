import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";
import path from "path"
import { libInjectCss } from 'vite-plugin-lib-inject-css';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssCodeSplit: true,
    lib: {
      formats: ['es', 'cjs'],
      entry: [
        'src/index.ts',
        'src/template.tsx',
        'src/lib/utils.ts',
        'src/sections/hero.tsx',
        'src/sections/greeting.tsx',
        'src/sections/countdown.tsx',
      ],
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
          "react/jsx-runtime": "react/jsx-runtime"
        },
        preserveModules: false,
        // Put chunk files at <output>/chunks
        chunkFileNames: 'chunks/[name].[hash].js',
        // Put chunk styles at <output>/assets
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    }
  },
  plugins: [react(), libInjectCss(), dts({ insertTypesEntry: true, rollupTypes: true, tsconfigPath: './tsconfig.app.json' })],
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