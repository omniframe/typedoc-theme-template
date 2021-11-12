import { DeclarationReflection, JSX } from 'typedoc';
import type { __THEME_NAME__ThemeRenderContext } from '../__THEME_NAME__ThemeRenderContext';

export const memberSignatures = (context: __THEME_NAME__ThemeRenderContext, props: DeclarationReflection) => (
	<>
		<ul class={"tsd-signatures " + props.cssClasses}>
			{props.signatures?.map((item) => (
				<li class="tsd-signature tsd-kind-icon">{context.memberSignatureTitle(item)}</li>
			))}
		</ul>

		<ul class="tsd-descriptions">
			{props.signatures?.map((item) => (
				<li class="tsd-description">{context.memberSignatureBody(item)}</li>
			))}
		</ul>
	</>
);
