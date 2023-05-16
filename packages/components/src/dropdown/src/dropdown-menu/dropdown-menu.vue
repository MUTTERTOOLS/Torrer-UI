<template>
  <ul v-show="visible" class="tr-dropdown-menu"></ul>
</template>

<script lang="ts">
export default {
  name: 'TrDropdownMenu',
};
</script>
<script setup lang="ts">
import { inject } from 'vue';
import type { Ref } from 'vue';
const visible = inject<Ref<boolean>>('visible');
</script>
