// stores/useBurger.ts
import { defineStore } from 'pinia';

export const useBurger = defineStore('burgerClick', {
  state: () => ({
    // Одна булевая переменная вместо двух
    isActive: false,
  }),
  actions: {
    open() {
      this.isActive = true;
    },
    close() {
      this.isActive = false;
    }
  },
});
