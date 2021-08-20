<template>
  <router-link class="linkStyle" v-if="!isExternal(to)" :to="to">
    <slot />
  </router-link>
  <a v-else class="linkStyle" rel="noopener" target="_blank" :href="to">
    <slot />
  </a>
</template>

<script setup>
import { isExternal } from "@/utils/validate";
import { toRefs } from "vue";

// eslint-disable-next-line no-undef
const props = defineProps({
  to: {
    type: String,
    required: true
  }
});

const { to } = toRefs(props);
</script>
