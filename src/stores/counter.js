import { defineStore } from "pinia";

export const useGetStore = defineStore("get", {
  state: () => ({
    data: [],
  }),
  getters: {
    _getData: (state) => state.data,
  },
  actions: {
    async getData() {
      try {
        const response = await window.Axios.get(
          `https://jsonplaceholder.typicode.com/todos`
        );
        this.data = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
