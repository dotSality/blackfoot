<template>
  <div class="biome-page-graphs-guts">
    <div class="biome-page-graphs-guts-legend">
      <div class="biome-page-graphs-guts-legend__heading">
        <span class="biome-page-graphs-guts-legend__heading_title">
          Microbiome comparison
        </span>
        <span class="biome-page-graphs-guts-legend__heading_pet">
          Typical vs Princess Peach
        </span>
      </div>
      <div class="biome-page-graphs-guts-legend-colors">
        <div class="biome-page-graphs-guts-legend-colors__item">
          <div
            class="biome-page-graphs-guts-legend-colors__item_color"
            :class="['biome-page-graphs-guts-legend-colors__item_color_main']"
          />
          <div class="biome-page-graphs-guts-legend-colors__item_meaning">
            Good
          </div>
        </div>
        <div class="biome-page-graphs-guts-legend-colors__item">
          <div
            class="biome-page-graphs-guts-legend-colors__item_color"
            :class="['biome-page-graphs-guts-legend-colors__item_color_warning']"
          />
          <div class="biome-page-graphs-guts-legend-colors__item_meaning">
            Average
          </div>
        </div>
        <div class="biome-page-graphs-guts-legend-colors__item">
          <div
            class="biome-page-graphs-guts-legend-colors__item_color"
            :class="['biome-page-graphs-guts-legend-colors__item_color_danger']"
          />
          <div class="biome-page-graphs-guts-legend-colors__item_meaning">
            Poor
          </div>
        </div>
      </div>
    </div>
    <ComparisionBlock
      :pet="{ name: 'Princess peach' }"
      :data="biomeData"
    />
  </div>
</template>

<script setup>

import ComparisionBlock from '@components/ComparisionBlock.vue';
import { computed } from 'vue';
import { mockBiomeData } from '@constants/mocks.js';

const biomeData = computed(() => mockBiomeData);
</script>

<style scoped lang="scss">
@import '@sass/variables';

.biome-page-graphs-guts {
  grid-area: 1 / 6 / 1 / -1;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.biome-page-graphs-guts-legend {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: $spacing-md;

  &__heading {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &_title {
      font: $l-medium-600;
      color: $color-dark-text-primary;
    }

    &_pet {
      font: $h-h5-600;
      color: $color-dark-neutral-main;
    }
  }
}

.biome-page-graphs-guts-legend-colors {
  display: flex;
  gap: $spacing-x-big;
  align-self: flex-end;

  &__item {
    display: flex;
    align-items: center;
    gap: $spacing-x-sm;

    &_color {
      width: $spacing-md;
      height: $spacing-x-sm;
      align-self: center;

      &_main {
        background-color: $color-dark-primary-accent;
      }

      &_warning {
        background-color: $color-dark-warning-main;
      }

      &_danger {
        background-color: $color-dark-destructive-main;
      }
    }

    &_meaning {
      font: $l-small-400;
      color: $color-dark-text-disabled;
    }
  }
}
</style>