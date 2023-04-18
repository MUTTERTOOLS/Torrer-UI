<template>
  <span :class="`iconfont icon-${name}`"></span>
</template>

<script lang="ts">
export default {
  name: 'TrIcon',
};
</script>

<script setup lang="ts">
import './iconfont.css';
import { toRefs } from 'vue';

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
});
const { name } = toRefs(props);
</script>
