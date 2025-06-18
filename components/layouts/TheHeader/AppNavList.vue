<template>
  <nav :class="{ menu: true, 'menu_is-burger': isBurger }">
    <ul class="menu__list">
      <li v-for="item in items" :key="item.id">
        <NuxtLink class="menu__link" :to="item.link">{{ item.title }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid';
const items = [
  { id: uuidv4(), title: 'Главная', link: '/' },
  { id: uuidv4(), title: 'Обо мне', link: '/about' },
  { id: uuidv4(), title: 'Галлерея', link: '/gallery' },
  { id: uuidv4(), title: 'Услуги', link: '/services' },
  { id: uuidv4(), title: 'Отзывы', link: '/reviews' },
  { id: uuidv4(), title: 'Контакты', link: '/contacts' },
];

defineProps({
  isBurger: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss">
.menu {
  &__list {
    display: flex;
    align-items: center;
    padding: 5px 15px;
    border-radius: 5px;
    background-color: var(--primary-bg-color);
    transition-timing-function: ease-in-out;
    transition-duration: 0.3s;
    transition-property: background-color;

    gap: 50px;
  }

  &__link {
    position: relative;
    font-weight: var(--font-third-weight);
    line-height: 162%;
    color: var(--primary-color);
    opacity: 0.5;
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

    &::before {
      content: '';
      position: absolute;
      bottom: -2px;
      visibility: hidden;
      width: 100%;
      border: 1px solid var(--primary-link-active);
      opacity: 0;
      transition-timing-function: ease-in-out;
      transition-duration: 0.3s;
      transition-property: border-color, opacity, visibility;
    }

    &.router-link-active {
      position: relative;
      opacity: 1;
      transition-timing-function: ease-in-out;
      transition-duration: 0.3s;
      transition-property: opacity, border;

      &::before {
        visibility: visible;
        opacity: 1;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .menu {
    display: none;

    &_is-burger {
      display: flex;
    }

    &__list {
      align-items: flex-start;
      flex-direction: column;
      padding: 0;
      background-color: transparent;

      gap: 20px;
    }
  }
}
</style>
