import type { Curve } from "./types";

export async function loadCurves() {
	var response = await fetch("/splines.json");

	if (response.ok) {
		const jsonCurves = (await response.json()) as unknown as Curve[];
		return jsonCurves;
	}

	return [];
}
