import type { Plugin } from 'vue';
import * as Comps from './src';
const TorrerUI: Plugin = {
  install(vm) {
    console.log(Comps);
    for (const key in Comps) {
      vm.use(Comps[key]);
    }
  },
};

export default TorrerUI;
export * from './src';
