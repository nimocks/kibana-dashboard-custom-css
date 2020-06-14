declare module '@elastic/eui/dist/eui_charts_theme' {
	import { PartialTheme, LineAnnotationStyle, PartitionConfig } from '@elastic/charts';
	import { RecursivePartial } from '@elastic/eui/src/components/common';
	export interface EuiChartThemeType {
	    lineAnnotation: LineAnnotationStyle;
	    theme: PartialTheme;
	    partition: RecursivePartial<PartitionConfig>;
	}
	export const EUI_CHARTS_THEME_LIGHT: EuiChartThemeType;
	export const EUI_CHARTS_THEME_DARK: EuiChartThemeType;
	export const EUI_SPARKLINE_THEME_PARTIAL: PartialTheme;

}
