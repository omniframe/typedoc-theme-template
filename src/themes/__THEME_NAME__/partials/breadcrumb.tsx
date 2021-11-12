import { JSX, Reflection } from 'typedoc';
import type { __THEME_NAME__ThemeRenderContext } from '../__THEME_NAME__ThemeRenderContext';

export const breadcrumb = (
	context: __THEME_NAME__ThemeRenderContext,
	props: Reflection,
): JSX.Element | undefined =>
	props.parent ? (
		<>
			{context.breadcrumb( props.parent )}
			<li>{props.url ? <a href={context.urlTo( props )}>{props.name}</a> : <span>{props.name}</span>}</li>
		</>
	) : props.url ? (
		<li>
			<a href={context.urlTo( props )}>{props.name}</a>
		</li>
	) : undefined;
