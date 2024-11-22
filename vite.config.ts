import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";
import path from "path"
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { Plugin } from "vite";
import { parse } from "react-docgen-typescript";

// import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

function ReactMetadataPlugin(): Plugin {
  return {
    name: "react-metadata-plugin",
    transform(code, id) {
      if (id.endsWith(".tsx")) {
        const componentDocs = parse(id, { savePropValueAsString: true });

        if (componentDocs.length > 0) {
          const metadata = componentDocs[0];
          const metadataCode = `
            const metadata = ${JSON.stringify(metadata, null, 2)};
            Component.metadata = metadata;
          `;
          return `${code}\n${metadataCode}`;
        }
      }
      return null;
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      name: "example-template",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    react(), 
    libInjectCss(),
    ReactMetadataPlugin(),
    // cssInjectedByJsPlugin({styleId: 'minimal-leafy-purple'}), 
    dts({ insertTypesEntry: true, rollupTypes: true, tsconfigPath: './tsconfig.app.json' })],
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