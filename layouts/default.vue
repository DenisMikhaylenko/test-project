<template>
  <div class="layout">
    <LayoutsTheHeader />
    <main class="main">
      <slot />
    </main>
    <LayoutsTheFooter />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}
.main {
  flex: 1;
}
</style>
