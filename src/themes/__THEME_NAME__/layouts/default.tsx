import { JSX, PageEvent, Reflection } from 'typedoc';
import type { __THEME_NAME__ThemeRenderContext } from '../__THEME_NAME__ThemeRenderContext';

export const defaultLayout = ( context: __THEME_NAME__ThemeRenderContext, props: PageEvent<Reflection> ) => {
	const themeScript = '<script>document.body.classList.add(localStorage.getItem(\'tsd-theme\') || \'os\')</script>';

	return (
		<html class="default no-js">
			<head>
				<meta charSet="utf-8" />
				<meta http-equiv="x-ua-compatible" content="IE=edge" />
				<title>
					{props.model.name === props.project.name ? (
						props.project.name
					) : (
						<>
							{props.model.name} | {props.project.name}
						</>
					)}
				</title>
				<meta name="description" content={`Documentation for ${props.project.name}`} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" />
				<link rel="stylesheet" href={context.relativeURL( 'assets/style.css' )} />
				<link rel="stylesheet" href={context.relativeURL( 'assets/highlight.css' )} />
				{context.options.getValue( 'customCss' ) && (
					<link rel="stylesheet" href={context.relativeURL( 'assets/custom.css' )} />
				)}
				<script async src={context.relativeURL( 'assets/search.js' )} id="search-script"></script>
			</head>
			<body>
				<JSX.Raw html={themeScript} />
				{context.header( props )}

				<div class="container container-main">
					<div class="row">
						<div class="col-8 col-content">{props.template( props )}</div>
						<div class="col-4 col-menu menu-sticky-wrap menu-highlight">{context.navigation( props )}</div>
					</div>
				</div>

				{context.footer( props )}

				<div class="overlay"></div>
				<script src={context.relativeURL( 'assets/main.js' )}></script>

				{context.analytics()}
			</body>
		</html>
	);
};
