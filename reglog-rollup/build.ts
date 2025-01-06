import { build } from "bun";

build({
    entrypoints: ["./src/index.ts"],
    outdir: "./dist",
    format: "esm",
    minify: true
})
