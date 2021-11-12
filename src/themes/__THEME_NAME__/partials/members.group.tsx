import { JSX, ReflectionGroup } from 'typedoc';
import type { __THEME_NAME__ThemeRenderContext } from '../__THEME_NAME__ThemeRenderContext';

export function membersGroup( context: __THEME_NAME__ThemeRenderContext, group: ReflectionGroup ) {
	if ( group.categories ) {
		return (
			<>
				{group.categories.map( ( item ) => (
					<section class={"tsd-panel-group tsd-member-group " + group.cssClasses}>
						<h2>
							{!!item.title && <>{item.title} </>}
							{group.title}
						</h2>
						{item.children.map( ( item ) => !item.hasOwnDocument && context.member( item ) )}
					</section>
				) )}
			</>
		);
	}

	return (
		<section class={"tsd-panel-group tsd-member-group " + group.cssClasses}>
			<h2>{group.title}</h2>
			{group.children.map( ( item ) => !item.hasOwnDocument && context.member( item ) )}
		</section>
	);
}
