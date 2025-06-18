<template>
  <p ref="typedEl" class="app-description-hero"></p>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const typedEl = ref(null);
const phrases = [
  '«Персональный подход • Опыт 10 лет • Работа с любыми стилями»',
  '«Фотограф, который видит мир через призму эмоций»',
  '«Ловлю моменты, создаю историю.»',
  '«Ваши эмоции — моя фотография.»',
];

onMounted(async () => {
  if (!typedEl.value) return;
  const el = typedEl.value;

  const { gsap } = await import('gsap');

  function typeText(text) {
    return new Promise((resolve) => {
      el.innerHTML = '';
      const spans = text.split('').map((char) => {
        const s = document.createElement('span');
        // Вот тут:
        s.innerHTML = char === ' ' ? '&nbsp;' : char;
        s.style.opacity = '0';
        el.appendChild(s);
        return s;
      });
      gsap.to(spans, {
        opacity: 1,
        duration: 0.3,
        stagger: 0.09,
        ease: 'none',
        onComplete: () => resolve(),
      });
    });
  }

  function deleteText() {
    return new Promise((resolve) => {
      const spans = Array.from(el.querySelectorAll('span'));
      if (!spans.length) {
        resolve();
        return;
      }
      gsap.to(spans.reverse(), {
        opacity: 0,
        duration: 0.2,
        stagger: 0.03,
        ease: 'none',
        onComplete: () => {
          el.innerHTML = '';
          resolve();
        },
      });
    });
  }

  const pause = (t) => new Promise((r) => setTimeout(r, t * 1000));

  (async function loop() {
    for (const text of phrases) {
      await typeText(text);
      await pause(1);
      await deleteText();
      await pause(0.5);
    }
    loop();
  })();
});
</script>

<style lang="scss">
.app-description-hero {
  position: absolute;
  z-index: 2;
  bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: var(--font-secondary-size);
  font-weight: var(--font-secondary-weight);
  line-height: 162%;
  color: var(--color-white);
}

@media screen and (max-width: 1024px) {
  .app-description-hero {
    font-size: 20px;
    line-height: 150%;
  }
}

@media screen and (max-width: 768px) {
  .app-description-hero {
    font-size: 14px;
    line-height: 171%;
  }
}

@media screen and (max-width: 400px) {
  .app-description-hero {
    bottom: 10px;
    left: 10px;
    display: block;
    max-width: 303px;
    word-break: break-word;
  }
}
</style>
