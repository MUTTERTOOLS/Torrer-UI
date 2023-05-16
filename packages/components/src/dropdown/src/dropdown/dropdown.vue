<template>
  <div
    class="tr-dropdown"
    @mouseleave="toggleDisvisible"
    @click="toggle == 'click' && toggleVisible()"
    @mouseenter="toggle == 'mouseenter' && toggleVisible()"
  >
    <slot />
  </div>
</template>
<script lang="ts">
export default {
  name: 'TrDropdown',
};
</script>
<script setup lang="ts">
import { ref, toRefs, provide } from 'vue';
import { dropdownPropsOption } from './props';
const visible = ref(false);
provide('visible', visible);

const props = defineProps(dropdownPropsOption);
const { toggle } = toRefs(props);

function toggleDisvisible() {
  visible.value = false;
}

function toggleVisible() {
  visible.value = true;
}
</script>
