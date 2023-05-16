import type { PropType } from 'vue';
type Toggle = 'click' | 'mouseenter';
export const dropdownPropsOption = {
  toggle: {
    type: String as PropType<Toggle>,
    default: 'click',
  },
};
