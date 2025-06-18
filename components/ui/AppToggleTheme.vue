<template>
  <ClientOnly>
    <div :class="{ 'toggle-theme': true, 'toggle-theme_is-burger': isBurger }">
      <button
        :class="[
          'toggle-theme__button',
          { 'is-active': ColorMode.value === 'light' },
          { 'toggle-theme__button_is-burger': isBurger },
        ]"
        type="button"
        @click="ColorMode.preference = 'light'"
      >
        <IconsIconSun :class="{ 'toggle-theme__icon': true, 'toggle-theme__icon_is-burger': isBurger }" />
      </button>
      <button
        :class="[
          'toggle-theme__button',
          { 'is-active': ColorMode.value === 'dark' },
          { 'toggle-theme__button_is-burger': isBurger },
        ]"
        type="button"
        @click="ColorMode.preference = 'dark'"
      >
        <IconsIconMoon :class="{ 'toggle-theme__icon': true, 'toggle-theme__icon_is-burger': isBurger }" />
      </button>
    </div>
  </ClientOnly>
</template>

<script setup>
const ColorMode = useColorMode();
defineProps({
  isBurger: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss">
.toggle-theme {
  position: absolute;
  z-index: 2;
  right: 50px;
  bottom: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;

  &__button {
    padding: 5px;
    border-radius: 5px;
    opacity: 0.5;

    &.is-active {
      opacity: 1;
      background-color: rgba(229, 237, 255, 0.2);
      transition-timing-function: ease-in-out;
      transition-duration: 0.3s;
      transition-property: background-color;
    }
  }

  &__icon {
    fill: var(--color-white);
  }
}

@media screen and (max-width: 1440px) {
  .toggle-theme {
    right: 25px;
  }
}

@media screen and (max-width: 1024px) {
  .toggle-theme {
    &__icon {
      width: 32px;
      height: 32px;
    }

    &_is-burger {
      right: 20px;
      bottom: 20px;
      border-radius: 5px;
      background-color: #a5a5a5ad;
    }

    &__button {
      &_is-burger {
        &.is-active {
          background-color: rgba(88, 88, 88, 0.5);
        }
      }
    }

    &__icon {
      &_is-burger {
        width: 24px;
        height: 24px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .toggle-theme {
    &__icon {
      width: 24px;
      height: 24px;
    }
  }
}

@media screen and (max-width: 400px) {
  .toggle-theme {
    right: 10px;
    bottom: 10px;
  }
}
</style>
