<template>
  <div
    id="recommendation"
    class="recommendation-page"
  >
    <div class="recommendation-page__wrapper">
      <RecommendationBreakdown />
      <DietarySide />
    </div>
  </div>
</template>

<script setup>
import RecommendationBreakdown from '@pages/RecomendationPage/RecommendationBreakdown.vue';
import DietarySide from '@pages/RecomendationPage/DietarySide.vue';
</script>

<style scoped lang="scss">
@import '@sass/variables';
@import '@sass/mixins';

.recommendation-page {
  width: 100%;
  min-height: 100%;
  padding: $spacing-x-lg 0 $spacing-xxx-lg 0;
  display: flex;
  flex-direction: column;
  gap: $spacing-x-lg;
  z-index: 1;
  position: relative;
  background: linear-gradient(334deg, #F6F6F6 63.98%, #FFF 82.77%);

  &__wrapper {
    width: 100%;
    height: 100%;

    @include g-layout(12, 'large');
  }
}
</style>