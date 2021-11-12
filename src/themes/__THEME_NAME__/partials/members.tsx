import { ContainerReflection, JSX } from 'typedoc';
import type { __THEME_NAME__ThemeRenderContext } from '../__THEME_NAME__ThemeRenderContext';

export function members(context: __THEME_NAME__ThemeRenderContext, props: ContainerReflection) {
	if (props.categories && props.categories.length) {
		return (
			<>
				{props.categories.map(
					(item) =>
						!item.allChildrenHaveOwnDocument() && (
							<section class={`tsd-panel-group tsd-member-group ${props.cssClasses}`}>
								<h2>{item.title}</h2>
								{item.children.map((item) => !item.hasOwnDocument && context.member(item))}
							</section>
						)
				)}
			</>
		);
	}

	return <>{props.groups?.map(
		(item) => !item.allChildrenHaveOwnDocument() && context.membersGroup(item)
	)}</>;
}
