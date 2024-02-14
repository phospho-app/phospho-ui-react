import { defineConfig } from "tsup";

// Split in two folders, otherwise because of bundle: false it will pick the wrong file during require
export default defineConfig({
  name: "phospho-ui-react",
  entry: ["src/index.tsx"],
  format: ["cjs", "esm"],
  bundle: true,
  outDir: "dist",
  splitting: true,
  sourcemap: true,
  cjsInterop: true,
  keepNames: true,
  minifyIdentifiers: false,
  minify: false,
  clean: true,
  dts: true,
});
