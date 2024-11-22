import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { extname, relative, resolve } from "path";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";
import path from "path"
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { fileURLToPath } from "node:url";
import { glob } from "glob";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      formats: ['es']
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss", 'react/jsx-runtime'],
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
      input: Object.fromEntries(
        // https://rollupjs.org/configuration-options/#input
        glob.sync('src/**/*.{ts,tsx}', {
          ignore: ["src/**/*.d.ts"],
        }).map(file => [
          // 1. The name of the entry point
          // lib/nested/foo.js becomes nested/foo
          relative(
            'src',
            file.slice(0, file.length - extname(file).length)
          ),
          // 2. The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
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