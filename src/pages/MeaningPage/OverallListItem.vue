<template>
  <div
    class="overall-side-group-list-item"
    @click="toggleIsOpened"
  >
    <DataRangeBlock
      :data-label="item.dataLabel"
      :layout="'horizontal'"
      :tooltipData="item.tooltipData"
      :min="item.min"
      :max="item.max"
      :value="item.value"
      theme="light"
    />
    <div class="overall-side-group-list-item-info">
      <span class="overall-side-group-list-item-info__main-text">
        {{ item.mainText }}
      </span>
      <div
        class="overall-side-group-list-item-info-hidden"
        :class="{ 'overall-side-group-list-item-info-hidden_opened': isHiddenOpened }"
      >
        <div class="overall-side-group-list-item-info-hidden__wrapper">
          <div class="overall-side-group-list-item-info-hidden__text">
            {{ item.hiddenText }}
          </div>
        </div>
      </div>
    </div>
    <MoreArrowIcon
      class="overall-side-group-list-item__arrow"
      :class="{ 'overall-side-group-list-item__arrow_rotated': isOpened }"
    />
  </div>
</template>

<script setup>

import MoreArrowIcon from '@components/icons/MoreArrowIcon.vue';
import DataRangeBlock from '@components/DataRangeBlock.vue';
import { ref } from 'vue';

const isOpened = ref(false);
const isHiddenOpened = ref(false);

defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
});
const toggleIsOpened = () => {
  isOpened.value = !isOpened.value;
  isHiddenOpened.value = !isHiddenOpened.value;
};
</script>

<style scoped lang="scss">
@import '@sass/variables';

.overall-side-group-list-item {
  display: grid;
  grid-template-columns: 6fr 7fr auto;
  gap: 0 $spacing-xx-big;
  padding: $spacing-x-big $spacing-xxx-big $spacing-x-big $spacing-x-big;
  border-top: 1px solid $color-light-other-divider;
  cursor: pointer;
  user-select: none;
  transition: background-color .3s $tra-cubic, border-color .3s $tra-cubic;

  &:hover {
    border-color: $color-light-background-default;
    background-color: $color-light-background-default;
  }

  &__arrow {
    transition: transform .2s ease-in;

    &_rotated {
      transform: rotate(180deg);
    }
  }
}

.overall-side-group-list-item-info {
  display: flex;
  font: $p-medium-400;
  color: $color-light-text-primary;
  flex-direction: column;

  &__main-text {
    font: $p-medium-400;
    color: $color-light-text-primary;
  }
}

.overall-side-group-list-item-info-hidden {
  display: grid;
  overflow: hidden;
  grid-template-rows: 0fr;
  transition: grid-template-rows .3s $tra-cubic;

  &_opened {
    grid-template-rows: 1fr;
  }

  &__wrapper {
    min-height: 0;
  }

  &__text {
    padding-top: 20px;
  }
}
</style>