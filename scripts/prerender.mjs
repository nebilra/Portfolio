import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

async function prerender() {
	console.log("  → Building SSR bundle...");

	await build({
		root,
		configFile: "./vite.config.ts",
		build: {
			ssr: "src/entry-server.tsx",
			outDir: "dist-ssr",
			rollupOptions: {
				output: {
					entryFileNames: "entry-server.mjs",
				},
			},
		},
	});

	console.log("  → Rendering app to static HTML...");

	const entryPath = path.resolve(root, "dist-ssr/entry-server.mjs");
	const { render } = await import(entryPath);
	const appHtml = render();

	const distIndex = path.resolve(root, "dist/index.html");
	const template = fs.readFileSync(distIndex, "utf-8");

	const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

	// Move stylesheet link before script tag for faster CSS discovery
	const reordered = html.replace(
		/(<script[^>]*><\/script>)\s*(<link rel="stylesheet"[^>]*>)/,
		"$2\n\t\t$1",
	);

	fs.writeFileSync(distIndex, reordered);
	fs.rmSync(path.resolve(root, "dist-ssr"), { recursive: true, force: true });

	console.log("  → Prerendered content injected into dist/index.html");
}

prerender().catch((err) => {
	console.error("Prerender failed:", err);
	process.exit(1);
});
