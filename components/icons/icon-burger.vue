<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke-dasharray="16"
      stroke-dashoffset="16"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    >
      <path d="M5 5h14">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.2s"
          values="16;0"
        />
      </path>
      <path d="M5 12h14">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.2s"
          dur="0.2s"
          values="16;0"
        />
      </path>
      <path d="M5 19h14">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.4s"
          dur="0.2s"
          values="16;0"
        />
      </path>
    </g>
  </svg>
</template>
