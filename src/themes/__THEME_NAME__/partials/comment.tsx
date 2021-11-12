import { JSX, Reflection } from 'typedoc';
import type { __THEME_NAME__ThemeRenderContext } from '../__THEME_NAME__ThemeRenderContext';

export const comment = (
	{ markdown }: __THEME_NAME__ThemeRenderContext,
	props: Reflection,
) => {
	if ( !props.comment?.hasVisibleComponent() ) {
		return;
	}

	return (
		<div class="tsd-comment tsd-typography">
			{!!props.comment.shortText && (
				<div class="lead">
					<JSX.Raw html={`\n${markdown( props.comment.shortText )}`} />
				</div>
			)}
			{!!props.comment.text && (
				<div>
					<JSX.Raw html={markdown( props.comment.text )} />
				</div>
			)}
			{props.comment.tags?.length > 0 && (
				<dl class="tsd-comment-tags">
					{props.comment.tags.map( ( item ) => (
						<>
							<dt>
								{item.tagName}
								{item.paramName ? ` ${item.paramName}` : ""}
							</dt>
							<dd>
								<JSX.Raw html={markdown( item.text )} />
							</dd>
						</>
					) )}
				</dl>
			)}
		</div>
	);
}
