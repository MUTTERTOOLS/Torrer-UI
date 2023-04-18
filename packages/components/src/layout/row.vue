<template>
  <div :class="classList">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TrRol',
};
</script>
<script setup lang="ts">
import { defineProps, computed, toRefs } from 'vue';
import { rowOption } from './row';
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
