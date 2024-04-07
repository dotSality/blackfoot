<template>
  <div
    class="app-layout"
    :class="{ 'app-layout__gradient': $route.path === '/biome' }"
  >
    <AppHeader />
    <router-view />
  </div>
</template>

<script setup>
import AppHeader from '@components/AppHeader.vue';

</script>

<style lang="scss" scoped>
@import '@sass/variables';

.app-layout {
  min-height: 100%;
  background-color: $color-light-common-black;

  &__gradient {
    position: relative;
    &:after {
      inset: 0;
      height: 100vh;
      width: 100%;
      content: '';
      position: absolute;
      background: radial-gradient(81.25% 81.25% at 30.35% 0%, #333333 0%, #000000 100%);
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
    }

  }
}
</style>
