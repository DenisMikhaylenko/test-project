<template>
  <div :class="{ social: true, 'social_is-burger': isBurger }">
    <ul :class="{ social__list: true, 'social__list_is-burger': isBurger }">
      <li>
        <NuxtLink
          :class="{ social__link: true, 'social__link_is-burger': isBurger }"
          to="#no-scrolling"
          target="_blank"
          aria-label="Социальная сеть Инстаграм  "
        >
          <span v-if="isBurger" class="social__item">Инстаграм</span>
          <IconsIconSocialInstagram :class="{ social__icon: true, 'social__icon_is-burger': isBurger }" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          :class="{ social__link: true, 'social__link_is-burger': isBurger }"
          to="#no-scrolling"
          target="_blank"
          aria-label="Социальная сеть Телеграм "
        >
          <span v-if="isBurger" class="social__item">Телеграм</span>
          <IconsIconSocialTelegram :class="{ social__icon: true, 'social__icon_is-burger': isBurger }" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          :class="{ social__link: true, 'social__link_is-burger': isBurger }"
          to="#no-scrolling"
          target="_blank"
          aria-label="Социальная сеть Вконтакте"
        >
          <span v-if="isBurger" class="social__item">Вконтакте</span>
          <IconsIconSocialVk :class="{ social__icon: true, 'social__icon_is-burger': isBurger }" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  isBurger: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss">
.social {
  position: absolute;
  z-index: 2;
  right: 50px;
  bottom: 193px;

  &__list {
    display: flex;
    flex-direction: column;
    padding: 5px;
    border-radius: 5px;
    background: rgba(229, 237, 255, 0.2);

    gap: 25px;
  }

  &__link {
    display: flex;
    align-items: center;

    gap: 5px;
  }

  &__item {
    font-size: var(--font-secondary-size);
    font-weight: var(--font-third-weight);
    line-height: 162%;
    color: var(--primary-color);
  }

  &__icon {
    opacity: 0.5;
    transition-timing-function: ease-in-out;
    transition-duration: 0.3s;
    transition-property: opacity;

    fill: var(--color-white);

    @media screen and (any-hover: hover) {
      &:hover {
        opacity: 1;
      }
    }
  }
}

@media screen and (max-width: 1440px) {
  .social {
    right: 25px;
  }
}

@media screen and (max-width: 1024px) {
  .social {
    &_is-burger {
      position: relative;
      right: auto;
      bottom: auto;
    }

    &__list {
      background-color: transparent;

      gap: 40px;

      &_is-burger {
        align-items: flex-start;
        padding: 0;
        border-radius: 0;

        gap: 20px;
      }
    }

    &__link {
      &_is-burger {
        flex-direction: row-reverse;
      }
    }

    &__icon {
      width: 32px;
      height: 32px;

      &_is-burger {
        width: 24px;
        height: 24px;
        opacity: 1;

        fill: var(--primary-color);
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .social {
    &__list {
      gap: 25px;
    }

    &__icon {
      width: 24px;
      height: 24px;
    }
  }
}

@media screen and (max-width: 440px) {
  .social {
    right: 10px;

    &_is-burger {
      right: auto;
    }
  }
}
</style>
