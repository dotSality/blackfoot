<template>
  <div class="overall-side">
    <div class="overall-side__wrapper">
      <div
        v-for="group in mockOverallData"
        :key="group.type"
        class="overall-side-group"
      >
        <span class="overall-side-group__type">
          {{ group.type }}
        </span>
        <div
          class="overall-side-group-list"
        >
          <OverallListItem
            v-for="item in group.dataItems"
            :key="item.dataLabel"
            :item="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { mockOverallData } from '@constants/mocks.js';
import OverallListItem from '@pages/MeaningPage/OverallListItem.vue';
</script>

<style scoped lang="scss">
@import '@sass/variables';

.overall-side {
  grid-area: 1 / 6 / 1 / -1;

  &__wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: $spacing-x-big;
  }
}

.overall-side-group {
  display: flex;
  flex-direction: column;

  &__type {
    padding: $spacing-x-big 0;
    font: $p-medium-500;
    color: $color-light-text-disabled;
  }
}

.overall-side-group-list {
  display: flex;
  flex-direction: column;
}
</style>