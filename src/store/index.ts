import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 };
  },
  actions: {
    increment() {
      this.count += 1;
    }
  },
  persist: {
    paths: ['count']
  }
});
