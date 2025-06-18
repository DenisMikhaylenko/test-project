<template>
  <NuxtLink :class="{ 'my-contacts': true, 'my-contacts_is-burger': isBurger }" to="https://t.me/alekseitoropov" target="_blank">
    Написать
    <IconsIconMessage class="my-contacts__icon" />
  </NuxtLink>
</template>

<script setup>
defineProps({
  isBurger: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss">
.my-contacts {
  position: relative;
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border-radius: 5px;
  font-weight: var(--font-third-weight);
  line-height: 162%;
  color: var(--primary-btn-color);
  outline: none;
  background-color: var(--primary-bg-btn-color);

  gap: 5px;

  &__icon {
    stroke: var(--primary-btn-icon-color);
  }
}

@media screen and (max-width: 1024px) {
  .my-contacts {
    &_is-burger {
      display: inline-flex;
      background-color: var(--secondary-bg-btn-color);
    }
  }
  
}

@media screen and (max-width: 400px) {
  .my-contacts {
    display: none;
  }
}
</style>
