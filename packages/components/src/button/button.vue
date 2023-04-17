<template>
  <button class="tr-button" :class="classList" :disabled="disabled || loading" @click="click">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  name: 'TrButton',
};
</script>
<script lang="ts" setup>
import { toRefs, computed } from 'vue';
import { propsOption, EmitsOption } from './button';

const props = defineProps(propsOption);
const emits = defineEmits(EmitsOption);

const prefix = 'tr-button-';
const { type, size, loading, disabled } = toRefs(props);
const classList = computed(() => {
  return [`${prefix}${type.value}`, `${prefix}${size.value}`];
});

function click(evt: MouseEvent) {
  emits('click', evt);
}
</script>

<style lang="less">
@import url('./style.less');
</style>
