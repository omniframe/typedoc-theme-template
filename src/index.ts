import { Application } from 'typedoc';
import { __THEME_NAME__Theme } from './themes';

export const load = (app: Application) => {
	app.renderer.defineTheme("__THEME_NAME__", __THEME_NAME__Theme);
}
