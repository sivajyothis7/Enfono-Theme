frappe.ui.ThemeSwitcher = class CustomThemeSwitcher extends frappe.ui.ThemeSwitcher {
	constructor() {
		super()
	}

	fetch_themes() {
		return new Promise((resolve) => {
			this.themes = [
				{
					name: "modern_ui_theme",
					label: "Enfono Theme",
					info: "Custom Modern Theme"
				},
				{
					name: "light",
					label: ("Frappe Light"),
					info: ("Light Theme"),
				},
				{
					name: "dark",
					label: "Timeless Night",
					info: "Dark Theme",
				},
				
				{
					name: "automatic",
					label: "Automatic",
					info: "Automatic Theme",
				}
			];

			resolve(this.themes);
		});
	}
}


