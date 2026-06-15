declare module "*.jsonc" {
	// biome-ignore lint/suspicious/noExplicitAny: JSONC imports have dynamic shapes
	const value: any;
	export default value;
}
