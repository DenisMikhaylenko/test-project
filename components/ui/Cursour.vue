<template>
  <div>
    <div ref="cursorInner" class="cursor-inner"></div>
    <div ref="cursorOuter" class="cursor-outer"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import gsap from 'gsap';

const cursorInner = ref(null);
const cursorOuter = ref(null);

let mouseX = 0;
let mouseY = 0;
let outerX = 0;
let outerY = 0;
let rafId;
let isHovering = false;

const setInitialCursor = () => {
  mouseX = window.innerWidth / 2;
  mouseY = window.innerHeight / 2;
  outerX = mouseX;
  outerY = mouseY;
  gsap.set(cursorInner.value, { x: mouseX, y: mouseY });
  gsap.set(cursorOuter.value, { x: mouseX, y: mouseY });
};

const onMouseMove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  gsap.to(cursorInner.value, {
    x: mouseX,
    y: mouseY,
    duration: 0.1,
    ease: 'power3.out',
  });
};

const animateOuterCursor = () => {
  outerX += (mouseX - outerX) * 0.15;
  outerY += (mouseY - outerY) * 0.15;
  gsap.set(cursorOuter.value, {
    x: outerX,
    y: outerY,
  });
  rafId = requestAnimationFrame(animateOuterCursor);
};

const onMouseOver = (e) => {
  if (e.target.closest('a, button, [data-cursor="hover"]')) {
    isHovering = true;
    gsap.to(cursorInner.value, { scale: 1.1, duration: 0.2 });
    gsap.to(cursorOuter.value, { scale: 1.4, borderWidth: 1, duration: 0.2 });
  }
};

const onMouseOut = (e) => {
  if (e.target.closest('a, button, [data-cursor="hover"]')) {
    isHovering = false;
    gsap.to(cursorInner.value, { scale: 1, duration: 0.2 });
    gsap.to(cursorOuter.value, { scale: 1, borderWidth: 1, duration: 0.2 });
  }
};

const onMouseDown = () => {
  gsap.to(cursorInner.value, { scale: 0.8, duration: 0.1 });
  gsap.to(cursorOuter.value, { scale: isHovering ? 1.02 : 0.8, duration: 0.1 });
};

const onMouseUp = () => {
  gsap.to(cursorInner.value, { scale: isHovering ? 1.01 : 1, duration: 0.2 });
  gsap.to(cursorOuter.value, { scale: isHovering ? 1.05 : 1, duration: 0.2 });
};

onMounted(() => {
  setInitialCursor();
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseover', onMouseOver);
  document.addEventListener('mouseout', onMouseOut);
  document.addEventListener('mousedown', onMouseDown);
  document.addEventListener('mouseup', onMouseUp);
  animateOuterCursor();
});

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseover', onMouseOver);
  document.removeEventListener('mouseout', onMouseOut);
  document.removeEventListener('mousedown', onMouseDown);
  document.removeEventListener('mouseup', onMouseUp);
  cancelAnimationFrame(rafId);
});
</script>

<style lang="scss">
.cursor-inner,
.cursor-outer {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.cursor-inner {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #597b9b;
  box-shadow: 0 0 8px 1px #597b9b;
}

.cursor-outer {
  width: 40px;
  height: 40px;
  border: 2px solid rgb(89, 123, 155);
  border-radius: 50%;
  background-color: rgba(89, 123, 155, 0.2);
  transition: border-color 0.3s, background 0.3s;
}

@media (pointer: coarse) {
  .cursor-inner,
  .cursor-outer {
    display: none !important;
  }
}
</style>

<!-- Глобально, например в assets/css/main.css, добавь: -->
<!-- body { cursor: none; } -->
