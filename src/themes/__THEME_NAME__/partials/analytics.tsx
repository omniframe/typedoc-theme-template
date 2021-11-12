import { JSX } from 'typedoc';
import type { __THEME_NAME__ThemeRenderContext } from '../__THEME_NAME__ThemeRenderContext';

export const analytics = (context: __THEME_NAME__ThemeRenderContext) => {
	const gaID = context.options.getValue('gaID');
	const gaSite = context.options.getValue('gaSite');

	if (!gaID) {
		return;
	}

	return (
		<script>
			(function(i,s,o,g,r,a,m){'{'}
			i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){'{'}
			(i[r].q=i[r].q||[]).push(arguments){'}'},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			{'}'}
			)(window,document,'script','//www.google-analytics.com/analytics.js','ga'); ga('create', '{gaID}', '{gaSite}
			'); ga('send', 'pageview');
		</script>
	);
}
