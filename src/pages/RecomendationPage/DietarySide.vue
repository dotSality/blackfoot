<template>
  <div class="dietary-side">
    <div class="dietary-side__wrapper">
      <div class="dietary-side-group">
        <span class="dietary-side-group__title">
          Dietary recommendations
        </span>
        <RecommendationTableItem
          v-for="item in mockDietaryData"
          :key="item.name"
          :tooltipData="item.tooltipData"
          :item="item"
        />
      </div>
      <div class="dietary-side-group">
        <span class="dietary-side-group__title">
          Lifestyle recommendations
        </span>
        <RecommendationTableItem
          v-for="item in mockDietaryParticularData"
          :key="item.name"
          :tooltipData="item.tooltipData"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import RecommendationTableItem from '@pages/RecomendationPage/RecommendationTableItem.vue';
import {
  MOCK_DIETARY_DATA,
  MOCK_DIETARY_PARTICULAR_DATA,
} from '@constants/mocks.js';

const mockDietaryData = computed(() => MOCK_DIETARY_DATA);
const mockDietaryParticularData = computed(() => MOCK_DIETARY_PARTICULAR_DATA);
</script>

<style scoped lang="scss">
@import '@sass/variables';

.dietary-side {
  grid-area: 1 / 6 / 1 / -1;

  &__wrapper {
    width: 100%;
  }
}

.dietary-side-group {
  width: 100%;
  padding-bottom: $spacing-x-big;

  &__title {
    color: $color-light-text-disabled;
    font: $p-large-500;
  }
}
</style>