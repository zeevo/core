import { defineConfig } from "tsup";

export default defineConfig({
  splitting: false,
  clean: true,
  dts: true,
  format: ["esm"],
  sourcemap: true,
  target: "esnext",
  outDir: "dist",
});
