import { DefaultTheme, Renderer } from 'typedoc';
import { __THEME_NAME__ThemeRenderContext } from './__THEME_NAME__ThemeRenderContext';

export class __THEME_NAME__Theme extends DefaultTheme {
	private _contextCache?: __THEME_NAME__ThemeRenderContext;

	constructor(renderer: Renderer) {
		super(renderer);
	}

	override getRenderContext(): __THEME_NAME__ThemeRenderContext {
		this._contextCache ||= new __THEME_NAME__ThemeRenderContext(
			this,
			this.application.options
		);

		return this._contextCache;
	}
}
