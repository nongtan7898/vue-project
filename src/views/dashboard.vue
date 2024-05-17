<script setup>
import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
import { onMounted } from "vue";
import { useGetStore } from "../stores/counter";
const store = useGetStore();

DataTable.use(DataTablesCore);

onMounted(() => {
  store.getData();
});

const columns = [
  {
    title: "#",
    render: function (data, type, row, meta) {
      return meta.row + 1;
    },
  },
  { data: "userId" },
  { data: "id" },
  { data: "title" },
  { data: "completed" },
];
const options = {
  columnDefs: [
    {
      targets: "_all",
      className: "dt-head-center",
    },
    {
      targets: [0, 1, 2, 4],
      className: "dt-body-center",
    },
  ],
  language: {
    paginate: {
      next: "ถัดไป",
      previous: "ก่อนหน้า",
    },
  },
};
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline bg-gray-800 text-white">
      Hello world!
    </h1>
    <h1>Simple table</h1>
    <h2>DataTables + Vue3 example</h2>
    <p>
      This example demonstrates the <code>datatables.net-vue3</code> package
      being used to display an interactive DataTable in a Vue application.
    </p>
    <button class="bg-green-500 text-white px-4 py-2" @click="store.pushData">
      push
    </button>

    <DataTable
      :columns="columns"
      :options="options"
      :data="store._getData"
      class="display mt-4 border-collapse w-full"
    >
      <thead class="bg-gray-800 text-white">
        <tr class="">
          <th>#</th>
          <th>userId</th>
          <th>id</th>
          <th>title</th>
          <th>completed</th>
        </tr>
      </thead>
    </DataTable>
  </div>
</template>

<style>
@import "datatables.net-dt";
</style>
