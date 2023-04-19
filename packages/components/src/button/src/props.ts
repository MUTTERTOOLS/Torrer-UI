import type { PropType } from 'vue';
import type { TrButtonType, TrButtonSize } from './interface';
export const propsOption = {
  type: {
    type: String as PropType<TrButtonType>,
    default: 'default' as TrButtonType,
  },
  size: {
    type: String as PropType<TrButtonSize>,
    default: 'md' as TrButtonSize,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
};

export const EmitsOption = {
  click: (evt: MouseEvent): MouseEvent => evt,
};
