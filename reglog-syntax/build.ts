import { build } from "bun";

build({
    entrypoints: ["./src/index.ts", "./src/liblog/liblog.ts", "./src/md/md.ts"],
    minify: true,
    outdir: "dist",
    naming: "[name].[ext]",
    format: "esm"
})
