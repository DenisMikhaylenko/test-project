<template>
  <div class="app-version">
    <span>v</span>
    <span class="app-version__number">1.0.0</span>
  </div>
</template>

<script setup></script>

<style lang="scss">
.app-version {
  position: absolute;
  z-index: 2;
  top: 50px;
  right: 50px;
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  font-size: var(--font-primary-size);
  font-weight: var(--font-secondary-weight);
  line-height: 120%;
  color: var(--color-white);
  background-color: rgba(229, 237, 255, .2);

  gap: 5px;

  &__number {
    padding: 0 5px;
    border: 2px solid var(--color-white);
    border-radius: 5px;
  }
}

@media screen and (max-width: 1440px) {
  .app-version {
    top: 25px;
    right: 25px;
  }
}

@media screen and (max-width: 440px) {
  .app-version {
    top: 10px;
    right: 10px;
  }
}

</style>
