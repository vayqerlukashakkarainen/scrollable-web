import { base } from "$app/paths";
import type { Curve } from "./types";

export async function loadCurves() {
	var response = await fetch(`${base}/splines.json`);

	if (response.ok) {
		const jsonCurves = (await response.json()) as unknown as Curve[];
		return jsonCurves;
	}

	return [];
}
