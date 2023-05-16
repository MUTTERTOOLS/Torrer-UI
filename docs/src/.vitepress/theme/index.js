// .vitepress/theme/index.js
// eslint-disable-next-line import/no-unresolved
import DefaultTheme from 'vitepress/theme';
import TorrerUI from '@torrer-ui/components';
import '@torrer-ui/components/themes/index.less';
export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    // register your custom global components
    // ctx.app.component(TrButton /* ... */);
    console.log(TorrerUI);
    ctx.app.use(TorrerUI);
  },
};
