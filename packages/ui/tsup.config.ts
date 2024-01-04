import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  splitting: false,
  format: ["esm"],
  sourcemap: true,
  target: "esnext",
  outDir: "dist",
});
