<template>
  <ClientOnly>
    <NuxtLink class="logo" to="/">
      <img
        class="logo__icon"
        :src="ColorMode.value === 'light' ? lightLogo : darktLogo"
        width="86"
        height="48"
        alt="Логотип сайта"
      />
    </NuxtLink>
  </ClientOnly>
</template>

<script setup lang="ts">
import lightLogo from '~/assets/images/svg/icon-header-logo-light.svg';
import darktLogo from '~/assets/images/svg/icon-header-logo-dark.svg';
const ColorMode = useColorMode();
</script>

<style lang="scss">
.logo {
  position: relative;
  outline: none;

  &::after {
    content: '';
    position: absolute;
    visibility: hidden;
    border: 2px solid var(--primary-focus);
    border-radius: 5px;
    opacity: 0;
    transition-timing-function: ease-in-out;
    transition-duration: 0.3s;
    transition-property: opacity, visibility;

    inset: -5px;
  }

  &:focus-visible::after {
    visibility: visible;
    opacity: 1;
  }
}
</style>
