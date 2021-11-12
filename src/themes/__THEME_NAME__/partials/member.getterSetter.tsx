import { DeclarationReflection, JSX } from 'typedoc';
import type { __THEME_NAME__ThemeRenderContext } from '../__THEME_NAME__ThemeRenderContext';

export const memberGetterSetter = (
	context: __THEME_NAME__ThemeRenderContext,
	props: DeclarationReflection,
) => (
	<>
		<ul class={"tsd-signatures " + props.cssClasses}>
			{!!props.getSignature && (
				<li class="tsd-signature tsd-kind-icon">
					<span class="tsd-signature-symbol">get</span> {props.name}
					{context.memberSignatureTitle(props.getSignature, { hideName: true })}
				</li>
			)}
			{!!props.setSignature && (
				<li class="tsd-signature tsd-kind-icon">
					<span class="tsd-signature-symbol">set</span> {props.name}
					{context.memberSignatureTitle(props.setSignature, { hideName: true })}
				</li>
			)}
		</ul>

		<ul class="tsd-descriptions">
			{!!props.getSignature && <li class="tsd-description">{context.memberSignatureBody(props.getSignature)}</li>}
			{!!props.setSignature && <li class="tsd-description">{context.memberSignatureBody(props.setSignature)}</li>}
		</ul>
	</>
);
