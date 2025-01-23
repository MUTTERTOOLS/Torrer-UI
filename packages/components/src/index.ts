import type { Plugin } from 'vue';
import { TrButton } from './button';
import { TrIcon } from './icon';
import { TrRow, TrCol } from './layout';
import { TrBreadcrumb, TrBreadcrumbItem } from './breadcrumd';

export { TrButton } from './button';
export { TrIcon } from './icon';
export { TrRow, TrCol } from './layout';
export { TrBreadcrumb, TrBreadcrumbItem } from './breadcrumd';

const Comps = [
  TrButton,
  TrRow,
  TrCol,
  TrIcon,
  TrBreadcrumb,
  TrBreadcrumbItem
]
const TorrerUI: Plugin = {
  install(vm) {
    console.log(Comps);
    for (const comp of Comps) {
      vm.component(comp.name, comp);
    }
  },
};

export default TorrerUI;