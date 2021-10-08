<template>
  <MSelect :items="langs" :select="select" @onChange="handleChange">
    <SvgIcon icon="language" class="international-icon" />
  </MSelect>
</template>

<script setup>
import { ref, inject } from "vue";
import MSelect from "@/components/Select/index.vue";
import SvgIcon from "@/components/SvgIcon/index.vue";
import useLang from "@/hooks/useLang";
import { useStore } from "vuex";

const store = useStore();

const select = ref(store.getters.lang);
const { setLocale, langDesc } = useLang();
const langs = langDesc.map((it) => ({
  command: it.key,
  name: it.name
}));

const reload = inject("reload");
const handleChange = (command) => {
  setLocale(command);
  select.value = command;
  reload();
};
</script>

<style lang="scss" scoped>
.international-icon {
  font-size: 20px;
  cursor: pointer;
  vertical-align: -5px !important;
}
</style>
