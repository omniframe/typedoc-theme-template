import { JSX, ReferenceReflection } from 'typedoc';
import type { __THEME_NAME__ThemeRenderContext } from '../__THEME_NAME__ThemeRenderContext';

export const memberReference = (
	{ urlTo }: __THEME_NAME__ThemeRenderContext,
	props: ReferenceReflection,
) => {
	const referenced = props.tryGetTargetReflectionDeep();

	if (!referenced) {
		return <>Re-exports {props.name}</>;
	}

	if (props.name === referenced.name) {
		return (
			<>
				Re-exports <a href={urlTo(referenced)}>{referenced.name}</a>
			</>
		);
	}

	return (
		<>
			Renames and re-exports <a href={urlTo(referenced)}>{referenced.name}</a>
		</>
	);
};
