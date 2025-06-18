<template>
  <button class="burger-btn" type="button" @click="burgerMenu.open()">
    <IconsIconBurger class="burger-btn__icon" />
  </button>
</template>

<script setup>
import { useBurger } from '~/stores/useBurger';
const burgerMenu = useBurger();
</script>

<style lang="scss">
.burger-btn {
  display: none;
  padding: 5px;
  border-radius: 5px;
  background-color: var(--primary-bg-btn-color);

  &__icon {
    stroke: var(--primary-btn-icon-color);
  }
}

@media screen and (max-width: 1024px) {
  .burger-btn {
    display: block;
  }
}
</style>
