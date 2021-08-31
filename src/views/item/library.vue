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
        <el-table-column prop="name" align="center" label="展示图" width="180">
          <template #default="{ row }">
            <BigImg :src="row.img" />
          </template>
        </el-table-column>
        <el-table-column prop="name" align="center" label="姓名" />
        <el-table-column prop="category" align="center" label="类目" />
        <el-table-column prop="brand" align="center" label="品牌" />
        <el-table-column align="center" label="长 * 宽 * 高">
          <template #default="{ row }">
            {{ `${row.long} * ${row.width} * ${row.height}` }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="官网价格">
          <template #default="{ row }">
            {{ fixedTwo(row.price) }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="创建时间">
          <template #default="{ row }">
            {{ dayjs(+row.createdAt).format("YYYY-MM-DD HH:mm:ss") }}
          </template>
        </el-table-column>
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
import BigImg from "@/components/ShowImage/BigImg.vue";
import { fixedTwo } from "@/utils/format";
import dayjs from "dayjs";

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
