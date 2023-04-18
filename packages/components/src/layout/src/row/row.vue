<template>
  <div :class="classList">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue';
import { rowOption } from './props';
const props = defineProps(rowOption);
const { justify, align, gutter } = toRefs(props);

justify.value =
  justify.value == 'start' || justify.value == 'end' ? `flex-${justify.value}` : justify.value;

const classList = computed(() => {
  return {
    justifyContent: justify.value + 'px',
    alignItem: align.value + 'px',
    margin: gutter.value + 'px',
  };
});
</script>
