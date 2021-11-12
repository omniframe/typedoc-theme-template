import { DeclarationReflection, JSX, ReflectionType } from 'typedoc';
import { join, wbr } from '../copies';
import type { __THEME_NAME__ThemeRenderContext } from '../__THEME_NAME__ThemeRenderContext';

export const memberDeclaration = (
	context: __THEME_NAME__ThemeRenderContext,
	props: DeclarationReflection,
) => (
	<>
		<div class="tsd-signature tsd-kind-icon">
			{wbr( props.name )}
			{!!props.typeParameters && (
				<>
					{'<'}
					{join( ', ', props.typeParameters, ( item ) => item.name )}
					{'>'}
				</>
			)}
			{props.type && (
				<>
					<span class="tsd-signature-symbol">{!!props.flags.isOptional && '?'}:</span>{' '}
					{context.type( props.type )}
				</>
			)}
			{!!props.defaultValue && (
				<>
					<span class="tsd-signature-symbol">
						{' = '}
						{props.defaultValue}
					</span>
				</>
			)}
		</div>

		{context.memberSources( props )}
		{context.comment( props )}

		{!!props.typeParameters && (
			<>
				<h4 class="tsd-type-parameters-title">Type parameters</h4>
				{context.typeParameters( props.typeParameters )}
			</>
		)}
		{props.type instanceof ReflectionType && (
			<div class="tsd-type-declaration">
				<h4>Type declaration</h4>
				{context.parameter( props.type.declaration )}
			</div>
		)}
	</>
);
