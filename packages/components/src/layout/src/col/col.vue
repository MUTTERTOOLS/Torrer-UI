<template>
  <div class="tr-col" :style="style">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TrCol',
};
</script>

<script setup lang="ts">
import { computed, toRefs, inject } from 'vue';
import type { ComputedRef } from 'vue';
import { rowOption } from './props';
const props = defineProps(rowOption);
const { span } = toRefs(props);

const gutter = inject<ComputedRef<number>>('gutter');
// const grid = inject<Ref<number>>('grid');
// grid.value = grid.value - flex;

const style = computed(() => {
  const perc: string = (Number(span.value) / 24) * 100 + '%';
  return {
    padding: `0 ${gutter.value / 2}px`,
    width: perc,
    flex: `0 0 ${perc}`, // flex比width优先级高
  };
});
</script>

<style>
.tr-col {
  display: block;
}
</style>
