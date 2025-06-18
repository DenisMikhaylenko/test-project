<template>
  <div :class="{ 'burger-menu': true, 'is-active': burgerMenu.isActive }">
    <div :class="{ 'burger-menu__overlay': true, 'is-active': burgerMenu.isActive }"></div>
    <div :class="{ 'burger-menu__wrapper': true, 'is-active': burgerMenu.isActive }">
      <button class="burger-menu__close" type="button" aria-label="Закрыть меню" @click="burgerMenu.close()">
        закрыть меню
        <IconsIconClose />
      </button>
      <PerfectScrollbar class="burger-menu__scroll">
        <div class="burger-menu__content">
          <div class="burger-menu__top">
            <img src="~/assets/images/avatar.png" alt="" class="burger-menu__top-icon" />
            <div class="burger-menu__top-block">
              <h2 class="burger-menu__top-subtitle">“Фотограф”</h2>
              <h3 class="burger-menu__top-title">Алексей Торопов</h3>
            </div>
          </div>
          <div class="burger-menu__middle">
            <h2 class="burger-menu__middle-title">Нацигационное меню</h2>
            <LayoutsTheHeaderAppNavList :is-burger="true" />
            <UiAppMyContacts :is-burger="true" />
          </div>
          <div class="burger-menu__bottom">
            <h2 class="burger-menu__bottom-title">Социальные сети</h2>
            <UiAppSocialList :is-burger="true" />
          </div>
        </div>
      </PerfectScrollbar>
      <UiAppToggleTheme :is-burger="true" />
    </div>
  </div>
</template>

<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import { useBurger } from '~/stores/useBurger';
const burgerMenu = useBurger();
</script>

<style lang="scss">
.burger-menu {
  position: fixed;
  z-index: 5;
  pointer-events: none;

  inset: 0;

  &.is-active {
    pointer-events: all;
  }

  &__overlay {
    position: fixed;
    z-index: 2;
    visibility: hidden;
    opacity: 0;
    background-color: var(--overlay-burger-color);
    transition-timing-function: ease-in-out;
    transition-duration: .3s;
    transition-property: opacity, visibility;

    backdrop-filter: blur(2px);
    inset: 0;

    &.is-active {
      visibility: visible;
      opacity: 1;
    }
  }

  &__scroll {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
    max-height: 100%;
    padding-right: 15px;
  }

  &__content {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    gap: 20px;
  }

  &__wrapper {
    position: absolute;
    z-index: 10;
    top: 25px;
    right: 25px;
    bottom: 25px;
    visibility: hidden;
    width: 500px;
    padding: 50px 20px 20px 20px;
    border-radius: 20px;
    opacity: 0;
    background-color: var(--primary-bg-color);
    transition-timing-function: ease-in-out;
    transition-duration: .3s;
    transition-property: opacity, visibility, transform;
    transform: translateX(100%);
    overflow: hidden;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-image: url("~/assets/images/photography.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      animation-name: anim-bg-burger-menu;
      animation-duration: 10s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;

      @keyframes anim-bg-burger-menu {
        0% {
          transform: translate(0, 0);
        }

        50% {
          transform: translate(-10px, -10px);
        }

        100% {
          transform: translate(0, 0);
        }
      }
    }

    &.is-active {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
    }
  }

  &__close {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    font-size: var(--font-secondary-size);
    font-weight: var(--font-third-weight);
    line-height: 162%;
    color: var(--primary-color);
    text-transform: uppercase;

    gap: 5px;
  }

  &__top {
    display: flex;
    align-items: center;

    gap: 20px;

    &-block {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
    }

    &-subtitle {
      font-size: var(--font-primary-size);
      font-weight: var(--font-third-weight);
      font-style: italic;
      line-height: 200%;
      color: var(--primary-color);
    }

    &-title {
      font-size: var(--font-fifth-size);
      font-weight: var(--font-third-weight);
      line-height: 142%;
      color: var(--primary-color);
      text-transform: uppercase;
    }
  }

  &__middle {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    gap: 20px;

    &-title {
      position: relative;
      font-size: var(--font-fifth-size);
      font-weight: var(--font-third-weight);
      line-height: 142%;
      color: var(--primary-color);
      text-transform: uppercase;
      opacity: .5;

      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: var(--primary-color);
      }

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 10px;
        height: 1px;
        background-color: var(--primary-bg-color);
        animation: run-line 5s linear infinite;
      }
    }
  }

  &__bottom {
    display: flex;
    flex-direction: column;

    gap: 20px;

    &-title {
      position: relative;
      font-size: var(--font-fifth-size);
      font-weight: var(--font-third-weight);
      line-height: 142%;
      color: var(--primary-color);
      text-transform: uppercase;
      opacity: .5;

      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: var(--primary-color);
      }

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 10px;
        height: 1px;
        background-color: var(--primary-bg-color);
        animation: run-line 5s linear infinite;
      }
    }
  }
}

@keyframes run-line {
  0% {
    left: 0;
  }

  100% {
    left: calc(100% - 0px);
  }
}

@media screen and (max-width: 550px) {
  .burger-menu {
    &__wrapper {
      right: 16px;
      left: 16px;
      width: calc(100% - 32px);
    }

    &__top {
      &-icon {
        width: 100px;
        height: 100px;
      }

      &-subtitle {
        font-size: 12px;
        line-height: 162%;
      }

      &-title {
        font-size: 14px;
        line-height: 162%;
      }
    }
  }
}

@media screen and (max-width: 420px) {
  .burger-menu {
    &__middle {
      &-title {
        font-size: 18px;
        line-height: 156%;
      }
    }

    &__bottom {
      &-title {
        font-size: 18px;
        line-height: 156%;
      }
    }
  }
}

</style>
