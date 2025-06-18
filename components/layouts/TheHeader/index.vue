<template>
  <header class="header">
    <div class="container header__container">
      <LayoutsTheHeaderAppLogo />
      <LayoutsTheHeaderAppNavList />
      <LayoutsTheHeaderAppControlPanel />
      <LayoutsTheHeaderBugerMenu />
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss">
.header {
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
  }
}

@media screen and (max-width: 400px) {
  .header {
    &__container {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
}
</style>
