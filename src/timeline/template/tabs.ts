export function bindTabs(container: HTMLDivElement) {
	const tab = container.querySelector(".tabs") as HTMLDivElement;

	if (!tab) return;
	const group = tab.dataset.tabGroupTarget;
	const tabButtons = tab.querySelectorAll("button[data-target]");

	if (!group) return;

	const defaultTarget = tab.dataset.tabDefaultTarget;

	if (defaultTarget) {
		changeTab(defaultTarget, group);
	}

	tabButtons.forEach((t) => {
		t.addEventListener("click", (e) => {
			const button = e.currentTarget as HTMLButtonElement;
			const target = button.dataset.target;

			if (!target) return;

			changeTab(target, group);
		});
	});

	function changeTab(target: string, group: string) {
		clearActiveTabPages(group);
		clearActiveTabs();

		const buttons = tab.querySelectorAll(`button[data-target="${target}"]`);

		buttons.forEach((b) => {
			b.classList.add("active");
		});

		const targetPages = container.querySelectorAll(
			`[data-tab-group="${group}"][data-tab="${target}"]`
		);

		targetPages.forEach((e) => {
			e.classList.remove("hidden");
		});
	}

	function clearActiveTabs() {
		tabButtons.forEach((t) => {
			t.classList.remove("active");
		});
	}
	function clearActiveTabPages(group: string) {
		const pages = container.querySelectorAll(`[data-tab-group="${group}"]`);

		pages.forEach((e) => {
			e.classList.add("hidden");
		});
	}
}
