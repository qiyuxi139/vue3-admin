<template>
  <el-pagination
    @size-change="handleSizeChange"
    background
    @current-change="handleCurrentChange"
    :hide-on-single-page="isHide"
    :current-page="page"
    :page-sizes="pageSizes"
    :page-size="limit"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    class="my-pagination"
  >
  </el-pagination>
</template>

<script setup>
import { toRefs, computed } from "vue";

const props = defineProps({
  page: {
    type: Number,
    default: 1
  },
  limit: {
    type: Number,
    default: 10
  },
  total: {
    type: Number,
    default: 0
  },
  pageSizes: {
    type: Array,
    default: () => [5, 10, 20, 30, 40, 50]
  }
});
const { page, limit, total, pageSizes } = toRefs(props);

const emit = defineEmits(["on-change"]);

// 当总数小于或等于 每页显示量最小的时候隐藏分页器
const isHide = computed(() => {
  return total.value <= Math.min(...pageSizes.value);
});

const handleSizeChange = (newLimit) => {
  emit("on-change", {
    page: page.value,
    limit: newLimit
  });
};

const handleCurrentChange = (newPage) => {
  emit("on-change", {
    page: newPage,
    limit: limit.value
  });
};
</script>

<style lang="scss">
.my-pagination {
  margin: 15px 0;
  .btn-prev,
  .btn-bext {
    .el-icon {
      display: inline-block;
    }
  }
}
</style>
