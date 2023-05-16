import type { PropType } from 'vue';

export const breadcrumbItemPropsOption = {
  derection: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  target: {
    type: String as PropType<string>,
    default: '_self',
  },
  to: {
    type: String as PropType<string>,
    default: '#',
  },
};
