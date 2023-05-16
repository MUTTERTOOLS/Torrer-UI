<template>
  <div class="tr-button" :class="classList" :disabled="disabled" @click="click">
    <div v-if="loading" class="tr-button-loading-icon"></div>
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'TrButton',
};
</script>
<script lang="ts" setup>
import { toRefs, computed } from 'vue';
import { propsOption, EmitsOption } from './props';

const props = defineProps(propsOption);
const emits = defineEmits(EmitsOption);

// 组件样式
const prefix = 'tr-button-';
const { type, size, loading, disabled, radius, hover } = toRefs(props);
const classList = computed(() => {
  const list: string[] = [];
  list.push(
    `${prefix}${type.value}`,
    `${prefix}${size.value}`,
    disabled.value ? `${prefix}disabled` : ``,
    radius.value ? `radius-${radius.value}` : ``,
    hover.value ? `${prefix}hover` : ``,
  );
  return list;
});

// 事件绑定
function click(evt: MouseEvent) {
  emits('click', evt);
}
</script>

<style lang="less">
@import url('./style.less');
</style>
