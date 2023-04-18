import { PropType } from 'vue';
import { Justify, Align } from './interface';
export const rowOption = {
  justify: {
    type: String as PropType<Justify>,
    default: 'start',
  },
  align: {
    type: String as PropType<Align>,
    default: 'center',
  },
  gutter: {
    type: [String, Number] as PropType<string | number>,
    default: 0,
  },
  span: {
    type: [String, Number] as PropType<string | number>,
    default: 1,
  },
};
