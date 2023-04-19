// import type { Component } from 'vue';

// interface Module {
//   default: Component;
// }
// interface ModulesObject {
//   [key: string]: Module;
// }
// type Components = {
//   TrButton?: Component;
//   TrIcon?: Component;
// };
// const exportTarget: Components = {};
// const modules: ModulesObject = import.meta.globEager('./**/*.vue');
// for (const path in modules) {
//   const { default: Comp } = modules[path];
//   exportTarget[Comp.name] = Comp;
// }

// export default exportTarget;

// export { default as TrButton } from './button/src/button.vue';
// export { default as TrIcon } from './icon/icon.vue';

// export default { TrButton, TrIcon };

export * from './button';
export * from './icon';
export * from './layout';
