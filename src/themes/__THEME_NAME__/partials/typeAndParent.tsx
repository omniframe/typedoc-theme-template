import { ArrayType, JSX, ReferenceType, SignatureReflection, Type } from 'typedoc';
import type { __THEME_NAME__ThemeRenderContext } from '../__THEME_NAME__ThemeRenderContext';

export const typeAndParent = (context: __THEME_NAME__ThemeRenderContext, props: Type): JSX.Element => {
	if (!props) return <>void</>;

	if (props instanceof ArrayType) {
		return (
			<>
				{context.typeAndParent(props.elementType)}
				[]
			</>
		);
	}

	if (props instanceof ReferenceType && props.reflection) {
		const refl = props.reflection instanceof SignatureReflection ? props.reflection.parent : props.reflection;
		const parent = refl?.parent;

		return (
			<>
				{parent?.url ? <a href={context.urlTo(parent)}>{parent.name}</a> : parent?.name}.
				{refl?.url ? <a href={context.urlTo(refl)}>{refl.name}</a> : refl?.name}
			</>
		);
	}

	return <>{props.toString()}</>;
};
