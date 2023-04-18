// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import TorrerUI from '@torrer-ui/components';
export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    // register your custom global components
    // ctx.app.component(TrButton /* ... */);
    // console.log(TorrerUI);
    ctx.app.use(TorrerUI);
  },
};
