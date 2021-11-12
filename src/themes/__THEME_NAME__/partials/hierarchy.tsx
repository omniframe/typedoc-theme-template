import { DeclarationHierarchy, JSX } from 'typedoc';
import type { __THEME_NAME__ThemeRenderContext } from '../__THEME_NAME__ThemeRenderContext';

export const hierarchy = (
	context: __THEME_NAME__ThemeRenderContext,
	props: DeclarationHierarchy,
) => (
	<ul class="tsd-hierarchy">
		{props.types.map( ( item, i, l ) => (
			<li>
				{props.isTarget ? <span class="target">{item.toString()}</span> : context.type( item )}
				{i === l.length - 1 && !!props.next && context.hierarchy( props.next )}
			</li>
		) )}
	</ul>
);
