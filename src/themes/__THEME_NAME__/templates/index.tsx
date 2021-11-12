import { JSX, PageEvent, ProjectReflection } from 'typedoc';
import { __THEME_NAME__ThemeRenderContext } from '../__THEME_NAME__ThemeRenderContext';

export const indexTemplate = (
	{ markdown }: __THEME_NAME__ThemeRenderContext,
	props: PageEvent<ProjectReflection>,
) => {
	return (
		<div class="tsd-panel tsd-typography">
			<JSX.Raw html={markdown(props.model.readme)} />
		</div>
	);
};
