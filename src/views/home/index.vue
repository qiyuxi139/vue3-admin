<template>
  <div class="homeWrap">
    <Pagination :total="100" />
    <el-button @click="hanldeClick">not found</el-button>
  </div>
</template>

<script setup>
import Pagination from "@/components/Pagination.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const hanldeClick = () => {
  router.push("/dsfds/dsfdsf/dsf");
};
</script>
