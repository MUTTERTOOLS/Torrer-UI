<template>
  <div class="tr-row" :style="style">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TrRow',
};
</script>
<script setup lang="ts">
import { computed, toRefs, provide } from 'vue';
import type { Justify } from '../interface';
import { rowOption } from './props';
const props = defineProps(rowOption);
const { justify, align, gutter } = toRefs(props);

const gutterInt = computed(() => {
  return Number(gutter.value);
});
provide('gutter', gutterInt);

// const grid = ref(24);
// provide('grid', grid);

const style = computed(() => {
  let justifyContent: Justify;
  switch (justify.value) {
    case 'start':
    case 'end': {
      justifyContent = `flex-${justify.value}`;
      break;
    }
    case 'around':
    case 'between': {
      justifyContent = `space-${justify.value}`;
      break;
    }
  }

  return {
    'justify-content': justifyContent,
    'align-items': align.value,
  };
});
</script>

<style>
.tr-row {
  display: flex;
}
</style>
