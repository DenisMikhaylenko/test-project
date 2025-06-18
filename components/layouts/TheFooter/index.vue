<template>
  <footer class="footer">
    <div class="container footer__container">
      <p class="footer__description">
        Все права защищены © 2025
      </p>
    </div>
  </footer>
</template>

<script setup>

</script>

<style lang="scss">
.footer {
  &__container {
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
  }

  &__description {
    font-family: var(--font-family);
    font-size: var(--font-primary-size);
    font-weight: var(--font-secondary-weight);
    line-height: 171%;
    color: var(--primary-color);
  }
}

@media screen and (max-width: 400px) {
  .footer {
    &__container {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
}
</style>