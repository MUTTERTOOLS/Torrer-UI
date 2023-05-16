<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="tr-breadcrumb-item" :class="classList">
    <tr-icon :name="icon"></tr-icon>
    <a :target="target" :href="to">
      <slot />
    </a>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TrBreadcrumbItem',
};
</script>

<script setup lang="ts">
import { inject, toRefs, computed } from 'vue';
// import type { Ref } from 'vue';
import { breadcrumbItemPropsOption } from './props';
const icon = inject<string>('icon');

const props = defineProps(breadcrumbItemPropsOption);
const { derection, target, to } = toRefs(props);

const classList = computed(() => {
  return {
    'tr-breadcrumb-item-derection': derection.value,
  };
});
</script>

<style lang="less">
.tr-breadcrumb-item {
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: #333;
    transition: all 0.2s;
    cursor: pointer;
    margin: 2px 4px;
    &:hover {
      color: #ccc;
      text-decoration: none;
    }
  }
  &-derection a:hover {
    text-decoration: underline;
  }
}
</style>
