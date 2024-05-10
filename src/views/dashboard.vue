<template>
  <table id="myTable">
    <thead>
      <tr>
        <th>userId</th>
        <th>id</th>
        <th>title</th>
        <th>completed</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in store._getData" :key="index">
        <td>{{ item.userId }}</td>
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.completed }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useGetStore } from "../stores/counter";
import $ from "jquery";
const store = useGetStore();

onMounted(() => {
  store.getData();
});

watch(
  () => store._getData,
  async () => {
    await $("#myTable").DataTable();
  }
);
</script>

<style></style>
