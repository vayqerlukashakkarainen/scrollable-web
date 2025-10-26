import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import Icons from "unplugin-icons/vite";

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: "svelte",
		}),
		{
			name: "patch-kdtree",
			transform(code, id) {
				if (id.includes("kd-tree-javascript")) {
					return code.replace(/Object\.freeze/g, "");
				}
			},
		},
	],
	optimizeDeps: {
		exclude: ["kd-tree-javascript"],
	},
	build: {
		minify: false,
		commonjsOptions: {
			transformMixedEsModules: true,
		},
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes("kd-tree-javascript")) {
						return "kdtree";
					}
				},
			},
		},
	},
});
