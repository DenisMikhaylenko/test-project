<template>
  <section class="section-hero">
    <Swiper
      ref="swiperRef"
      :modules="[Autoplay, EffectFade]"
      :slides-per-view="1"
      :loop="true"
      effect="fade"
      :speed="800"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      class="section-hero__swiper"
      @swiper="onSwiperInit"
      @slide-change-transition-start="onSlideChange"
    >
      <SwiperSlide v-for="(img, idx) in images" :key="img.id">
        <NuxtImg
          :src="img.src"
          :alt="img.alt"
          class="section-hero__image"
          format="webp"
          quality="85"
          :data-index="idx"
        />
        <div class="section-hero__gradient"></div>
      </SwiperSlide>

      <div class="section-hero__content">
        <NuxtLink class="section-hero__content-link" to="https://t.me/alekseitoropov" target="_blank">
          <span class="section-hero__content-first">Консультация</span>
          <span class="section-hero__content-second">Написать мне</span>
        </NuxtLink>
        <NuxtLink class="section-hero__content-link" to="/gallery">
          <span class="section-hero__content-first">Галерея</span>
          <span class="section-hero__content-second">Мои работы</span>
        </NuxtLink>
      </div>

      <UiAppDescriptionHero />
      <UiAppSocialList />
      <UiAppToggleTheme />
      <UiAppVersion />
    </Swiper>
  </section>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade } from 'swiper/modules'
import gsap from 'gsap'
import { v4 as uuid4 } from 'uuid'

import 'swiper/css'
import 'swiper/css/effect-fade'

const images = [
  { id: uuid4(), src: '/images/section-hero/01.png', alt: 'Изображение 1' },
  { id: uuid4(), src: '/images/section-hero/02.png', alt: 'Изображение 2' },
  { id: uuid4(), src: '/images/section-hero/03.png', alt: 'Изображение 3' },
  { id: uuid4(), src: '/images/section-hero/04.png', alt: 'Изображение 4' },
  { id: uuid4(), src: '/images/section-hero/05.png', alt: 'Изображение 5' },
  { id: uuid4(), src: '/images/section-hero/06.png', alt: 'Изображение 6' },
]

const swiperRef = ref(null)
let currentTween = null

function onSwiperInit(swiper) {
  nextTick(() => {
    animateSlide(swiper.realIndex)
  })
}

function onSlideChange(swiper) {
  // 1) Плавный blur-эффект через GSAP timeline
  const slideImg = document.querySelector(
    `.section-hero__swiper .swiper-slide-active img[data-index="${swiper.realIndex}"]`
  )
  if (slideImg) {
    gsap.killTweensOf(slideImg)
    gsap.set(slideImg, { filter: 'blur(0px)' })
    const tl = gsap.timeline()
    tl.to(slideImg, {
      filter: 'blur(5px)',
      duration: 0.5,
      ease: "bounce.out",
    })
    tl.to(slideImg, {
      filter: 'blur(0px)',
      duration: 2,
      ease: "bounce.out",
    }, '>-0.2') // начинаем сброс чуть раньше конца первого
  }

  // 2) Пан/зум-анимация картинки
  if (currentTween) {
    currentTween.kill()
    currentTween = null
  }
  animateSlide(swiper.realIndex)
}

function animateSlide(index) {
  const slideImg = document.querySelector(
    `.section-hero__swiper .swiper-slide-active img[data-index="${index}"]`
  )
  if (!slideImg) return

  const duration = 6
  const ease = 'none'
  const from = { scale: 1.3, xPercent: 0, yPercent: 0 }
  const to   = { scale: 1.5, duration, ease }

  switch (index) {
    case 0: to.xPercent = 2;    to.yPercent = -2;   break
    case 1: to.xPercent = -2;   to.yPercent = 2;    break
    case 2: to.xPercent = 8;    to.yPercent = 0;    break
    case 3: to.xPercent = -8;   to.yPercent = -8;   break
    case 4: to.xPercent = 8;    to.yPercent = 8;    break
    case 5: to.xPercent = 0;    to.yPercent = 0;    break
  }

  currentTween = gsap.fromTo(slideImg, from, to)
}
</script>

<style lang="scss">
.section-hero {
  &__swiper {
    position: relative;
    height: 100%;
    height: calc(100dvh - 152px);

    .swiper-slide {
      overflow: hidden;
    }
  }

  &__image {
    width: 100%;
    height: 100%;

    object-fit: cover;
    will-change: transform, filter;
  }

  &__gradient {
    position: absolute;
    z-index: 2;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.6) 100%);
    pointer-events: none;

    inset: 0;
  }

  &__content {
    position: absolute;
    z-index: 2;
    bottom: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    gap: 339px;

    &-link {
      position: relative;
      display: flex;
      flex-direction: column;
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

        inset: -5px -35px;
      }

      &:focus-visible::after {
        visibility: visible;
        opacity: 1;
      }

      @media screen and (any-hover: hover) {
        &:hover {
          .section-hero__content-first {
            transform: translateX(0);
          }

          .section-hero__content-second {
            transform: translateX(0);
          }
        }
      }
    }

    &-first {
      font-size: var(--font-third-size);
      font-weight: var(--font-secondary-weight);
      line-height: 156%;
      color: var(--color-white);
      opacity: 0.5;
      transition-timing-function: ease-in-out;
      transition-duration: 0.3s;
      transition-property: transform;
      transform: translateX(-20px);
    }

    &-second {
      font-size: var(--font-tenth-size);
      font-weight: var(--font-fourth-weight);
      line-height: 128%;
      color: var(--color-white);
      opacity: 0.5;
      transition-timing-function: ease-in-out;
      transition-duration: 0.3s;
      transition-property: transform;
      transform: translateX(20px);
    }
  }
}

@media screen and (max-width: 1280px) {
  .section-hero {
    &__content {
      bottom: 100px;
    }
  }
}

@media screen and (max-width: 1024px) {
  .section-hero {
    &__content {
      bottom: 150px;

      gap: 130px;

      &-first {
        font-size: 24px;
        line-height: 142%;
      }

      &-second {
        font-size: 40px;
        line-height: 125%;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .section-hero {
    &__content {
      bottom: 100px;
      align-items: flex-start;
      flex-direction: column;
      padding-right: 50px;
      padding-left: 50px;

      gap: 50px;

      &-first {
        font-size: 24px;
        line-height: 142%;
      }

      &-second {
        font-size: 32px;
        line-height: 131%;
      }
    }
  }
}

@media screen and (max-width: 400px) {
  .section-hero {
    &__swiper {
      height: calc(100dvh - 112px);
    }

    &__content {
      bottom: 100px;
      padding-right: 10px;
      padding-left: 10px;

      gap: 25px;

      &-first {
        font-size: 18px;
        font-weight: 500;
        transform: translateX(0);
      }

      &-second {
        font-size: 24px;
        font-weight: 700;
        transform: translateX(0);
      }
    }
  }
}
</style>
