import { useStore } from "vuex";
import { computed } from "vue";

function useSidebarFold() {
  const store = useStore();
  return computed(() => store.getters.sidebarFold);
}

export default useSidebarFold;
