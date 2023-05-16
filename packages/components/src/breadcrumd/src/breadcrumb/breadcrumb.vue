<template>
  <div class="tr-breadcrumb">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'TrBreadcrumb',
};
</script>

<script setup lang="ts">
import { defineProps, toRefs, provide } from 'vue';
import { breadcrumbPropsOption } from './porps';
const props = defineProps(breadcrumbPropsOption);
const { icon } = toRefs(props);
provide('icon', icon.value);
</script>

<style lang="less">
.tr-breadcrumb {
  display: flex;
  padding: 25px 10px;
  .tr-breadcrumb-item:first-child .tr-icon {
    display: none;
  }
}
</style>
