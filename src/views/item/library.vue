<template>
  <div class="itemLibrary">
    <el-form :model="form" inline ref="formRefDom" class="search">
      <el-form-item label="商品全称" prop="name">
        <el-input v-model="form.name" placeholder="请输入" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleGetList">搜索</el-button>
        <el-button @click="handleReset">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="content">
      <el-table :data="list" border style="width: 100%">
        <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      </el-table>
      <Pagination
        :page="pager.page"
        :limit="pager.limit"
        :total="pager.total"
        @on-change="handlePagerChange"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { getItemList } from "@/apis/item";
import message from "@/utils/reset/mElMessage";
import Pagination from "@/components/Pagination.vue";

const form = reactive({
  name: ""
});
const isloading = ref(false);
const formRefDom = ref(null);
const list = ref([]);
const pager = reactive({
  page: 1,
  limit: 10,
  total: 0
});

// 得到请求参数
const initSearchCondition = () => {
  const { page, limit } = pager;
  const { name } = form;
  const condition = {
    page,
    limit
  };
  if (name) {
    condition.name = name;
  }
  return condition;
};
// 查询列表
const handleGetList = async () => {
  try {
    isloading.value = true;
    const data = await getItemList(initSearchCondition());
    if (data && data.code === 200 && data.result) {
      const { list: mList, total } = data.result;
      list.value = mList;
      console.log(list.value, "-=--");
      pager.total = total;
    }
    console.log(data);
  } catch (error) {
    message.error(error.message);
  } finally {
    isloading.value = false;
  }
};

// 分页相关
const handlePagerChange = ({ limit, page }) => {
  pager.page = page;
  pager.limit = limit;
  handleGetList();
};

// 重置
const handleReset = () => {
  formRefDom.value.resetFields();
  pager.page = 1;
  pager.limit = 10;
  handleGetList();
};

// 开始查询
handleGetList();
</script>

<style lang="scss"></style>
