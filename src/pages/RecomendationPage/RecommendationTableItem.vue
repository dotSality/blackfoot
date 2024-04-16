<template>
  <div
    class="recommendation-list-item"
    @click="toggleIsOpened"
  >
    <div class="recommendation-list-item-head">
      <span class="recommendation-list-item-head__title">{{ item.name }}</span>
      <TooltipIcon
        v-if="tooltipData"
        v-tooltip.top-end="{
          content: `<span class='tooltip-title'>${tooltipData.title}</span>
                    <span class='tooltip-subtitle'>${tooltipData.subtitle}</span>`,
          html: true,
          skidding: 34, distance: 15,
        }"
        class="recommendation-list-item-head__icon"
      />
    </div>
    <span class="recommendation-list-item__description">
      {{ item.description }}
    </span>
    <div
      v-if="item.dataRows"
      class="recommendation-list-item-table"
      :class="{ 'recommendation-list-item-table_opened': isOpened }"
    >
      <div class="recommendation-list-item-table__wrapper">
        <div
          v-for="row in item.dataRows"
          :key="row.title"
          class="recommendation-list-item-table-row"
        >
          <span class="recommendation-list-item-table-row__title">To {{ row.title }}</span>
          <div class="recommendation-list-item-table-row-goods">
            <div
              v-for="cell in row.cells"
              :key="cell.name"
              class="recommendation-list-item-table-row-goods-cell"
            >
              <span class="recommendation-list-item-table-row-goods-cell__name">
                {{ cell.name }}
              </span>
              <div class="recommendation-list-item-table-row-goods-cell__list">
                <span
                  v-for="good in cell.goods"
                  :key="good"
                  class="recommendation-list-item-table-row-goods-cell__good"
                >
                  {{ good }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MoreArrowIcon
      v-if="item.dataRows"
      class="recommendation-list-item__arrow"
      :class="{ 'recommendation-list-item__arrow_rotated': isOpened }"
    />
  </div>
</template>

<script setup>
import TooltipIcon from '@components/icons/TooltipIcon.vue';
import MoreArrowIcon from '@components/icons/MoreArrowIcon.vue';
import { ref } from 'vue';
defineProps({
  tooltipData: {
    type: Object,
    default: () => ({}),
  },
  item: {
    type: Object,
    default: () => ({}),
  },
});

const isOpened = ref(false);

const toggleIsOpened = () => {
  isOpened.value = !isOpened.value;
};
</script>

<style scoped lang="scss">
@import '@sass/variables';

.recommendation-list-item {
  display: grid;
  grid-template: 'head arrow'
                 'description .'
                 'table .';
  gap: $spacing-x-sm $spacing-xx-big;
  cursor: pointer;
  border-top: 1px solid $color-light-other-divider;
  padding: $spacing-x-big $spacing-xxx-big $spacing-x-big $spacing-x-big;
  transition: border-color .3s $tra-cubic, background-color .3s $tra-cubic;

  &__arrow {
    grid-area: arrow;
    transition: transform .2s ease-in;

    &_rotated {
      transform: rotate(180deg);
    }
  }

  &__description {
    grid-area: description;
    font: $p-medium-400;
    color: $color-light-text-primary;
  }

  &:hover {
    border-color: $color-light-background-default;
    background-color: $color-light-background-default;
  }
}

.recommendation-list-item-head {
  grid-area: head;
  display: flex;
  align-items: center;
  gap: $spacing-x-sm;

  &__title {
    font: $l-large-600;
    color: $color-light-text-primary;
  }

  &__icon {
    color: $color-light-primary-accent;
  }
}

.recommendation-list-item-table {
  grid-area: table;
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
}

.recommendation-list-item-table-row {
  margin-top: $spacing-x-sm;
  border: 1px solid $color-light-other-divider;
  padding: $spacing-big;
  display: flex;
  flex-direction: column;
  gap: $spacing-x-big;

  &__title {
    font: $l-small-500;
    color: $color-light-text-disabled;
  }
}

.recommendation-list-item-table-row-goods {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $spacing-md;
}

.recommendation-list-item-table-row-goods-cell {
  display: flex;
  flex-direction: column;
  gap: $spacing-x-sm;

  &__name {
    font: $p-small-600;
    color: $color-light-text-primary;
  }

  &__list {
    display: flex;
    flex-direction: column;
  }

  &__good {
    font: $p-x-small-400;
    color: $color-light-text-secondary;
  }
}
</style>