<template>
  <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="mask0_624_3209"
      style="mask-type: luminance"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="58"
      height="58"
    >
      <path
        d="M29.0002 55.6666C43.7282 55.6666 55.6668 43.7279 55.6668 28.9999C55.6668 14.2719 43.7282 2.33325 29.0002 2.33325C14.2722 2.33325 2.3335 14.2719 2.3335 28.9999C2.3335 43.7279 14.2722 55.6666 29.0002 55.6666Z"
        fill="white"
        stroke="white"
        stroke-width="4"
        stroke-linejoin="round"
      />
      <path
        d="M23.667 29V19.7627L31.667 24.3814L39.667 29L31.667 33.6187L23.667 38.2374V29Z"
        fill="black"
        stroke="black"
        stroke-width="4"
        stroke-linejoin="round"
      />
    </mask>
    <g v-if="ColorMode.value === 'dark'" mask="url(#mask0_624_3209)">
      <path d="M-3 -3H61V61H-3V-3Z" fill="#aaaaaa" fill-opacity="0.7" />
    </g>
    <g v-else mask="url(#mask0_624_3209)">
      <path d="M-3 -3H61V61H-3V-3Z" fill="#000000" fill-opacity="0.7" />
    </g>
  </svg>
</template>

<script setup type="ts">
const ColorMode = useColorMode();
</script>
