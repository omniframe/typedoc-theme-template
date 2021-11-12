import { DeclarationReflection, JSX, ReferenceReflection } from 'typedoc';
import { renderFlags, wbr } from '../copies';
import type { __THEME_NAME__ThemeRenderContext } from '../__THEME_NAME__ThemeRenderContext';

export const member = ( context: __THEME_NAME__ThemeRenderContext, props: DeclarationReflection ) => (
	<section class={"tsd-panel tsd-member " + props.cssClasses}>
		<a id={props.anchor} class="tsd-anchor"></a>
		{!!props.name && (
			<h3>
				{renderFlags( props.flags )}
				{wbr( props.name )}
			</h3>
		)}
		{props.signatures
			? context.memberSignatures( props )
			: props.hasGetterOrSetter()
				? context.memberGetterSetter( props )
				: props instanceof ReferenceReflection
					? context.memberReference( props )
					: context.memberDeclaration( props )}

		{props.groups?.map( ( item ) => item.children.map( ( item ) => !item.hasOwnDocument && context.member( item ) ) )}
	</section>
);
