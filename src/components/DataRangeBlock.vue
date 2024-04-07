<template>
  <div class="data-range">
    <div class="data-range-label">
      <span
        class="data-range-label__text"
        :class="{ 'data-range-label__text_light': theme === 'light' }"
      >
        {{ dataLabel }}
      </span>
      <span
        class="data-range-label__value"
        :class="{ 'data-range-label__value_light': theme === 'light' }"
      >
        {{ value }}
      </span>
      <TooltipIcon
        v-tooltip.top-end="{
          content: `<span class='tooltip-title'>${tooltipData.title}</span>
<span class='tooltip-subtitle'>${tooltipData.subtitle}</span>`,
          html: true,
          skidding: 34, distance: 15,
        }"
        class="data-range-label__icon"
      />
    </div>
    <div
      v-if="layout === 'horizontal'"
      class="data-range__horizontal"
    >
      <span
        class="data-range__status"
        :class="{
          'data-range__status_horizontal': layout === 'horizontal',
          'data-range__status_poor': isStatusPoor,
          'data-range__status_average': isStatusAverage,
        }"
      >
        {{ isStatusPoor ? 'Poor' :
          isStatusAverage ? 'Average' : 'Good' }}
      </span>
      <div class="data-range-info">
        <div
          class="data-range-info-scale"
          :class="{ 'data-range-info-scale_light': theme === 'light' }"
        >
          <div
            class="data-range-info-scale__graph"
            :class="{ 'data-range-info-scale__graph_light': theme === 'light' }"
            :style="{
              width: `${max - min}%`,
              left: `${min}%`,
              right: `${100 - max}%`,
              borderLeft: min > 0
                ? (theme === 'light' ? '1px solid #0000001A' : '1px solid #333')
                : null,
              borderRight: max < 100
                ? (theme === 'light' ? '1px solid #0000001A' : '1px solid #333')
                : null,
            }"
          />
          <div
            class="data-range-info-scale__pointer"
            :class="{
              'data-range-info-scale__pointer_light': theme === 'light',
              'data-range-info-scale__pointer_poor': isStatusPoor,
              'data-range-info-scale__pointer_average': isStatusAverage,
            }"
            :style="{ left: `${value}%` }"
          />
        </div>
        <span
          class="data-range-info__typical"
          :class="{ 'data-range-info__typical_light': theme === 'light' }"
        >
          Typical: {{ min }} - {{ max }}
        </span>
      </div>
    </div>
    <template v-else>
      <span
        class="data-range__status"
        :class="{
          'data-range__status_poor': isStatusPoor,
          'data-range__status_average': isStatusAverage,
        }"
      >
        {{ isStatusPoor ? 'Poor' :
          isStatusAverage ? 'Average' : 'Good' }}
      </span>
      <div class="data-range-info">
        <div
          class="data-range-info-scale"
          :class="{ 'data-range-info-scale_light': theme === 'light' }"
        >
          <div
            class="data-range-info-scale__graph"
            :class="{ 'data-range-info-scale__graph_light': theme === 'light' }"
            :style="{
              width: `${max - min}%`,
              left: `${min}%`,
              right: `${100 - max}%`,
              borderLeft: min > 0 ? '1px solid #333' : null,
              borderRight: max < 100 ? '1px solid #333' : null,
            }"
          />
          <div
            class="data-range-info-scale__pointer"
            :class="{
              'data-range-info-scale__pointer_light': theme === 'light',
              'data-range-info-scale__pointer_poor': isStatusPoor,
              'data-range-info-scale__pointer_average': isStatusAverage,
            }"
            :style="{ left: `${value}%` }"
          />
        </div>
        <span class="data-range-info__typical">
          Typical: {{ min }} - {{ max }}
        </span>
      </div>
    </template>
  </div>
</template>

<script setup>
import TooltipIcon from '@components/icons/TooltipIcon.vue';
import { computed } from 'vue';

const props = defineProps({
  value: Number,
  min: Number,
  max: Number,
  dataLabel: String,
  theme: {
    type: String,
    default: 'dark',
    validator(value) {
      return [
        'light',
        'dark',
      ].includes(value);
    },
  },
  layout: {
    type: String,
    default: 'vertical',
    validator(value) {
      return [
        'vertical',
        'horizontal',
      ].includes(value);
    },
  },
  tooltipData: {
    type: Object,
    default: () => ({}),
  },
});

const isStatusPoor = computed(() => props.value < props.min);
const isStatusAverage = computed(() => props.value > props.min && props.value < 50);
</script>

<style scoped lang="scss">
@import '@sass/variables';

.data-range {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__status {
    font: $l-medium-600;
    color: $color-dark-primary-main;

    &_horizontal {
      align-self: flex-end;
    }

    &_average {
      color: $color-dark-warning-main;
    }

    &_poor {
      color: $color-dark-destructive-main;
    }
  }

  &__horizontal {
    display: grid;
    grid-template-columns: 70px auto;
  }
}

.data-range-label {
  display: flex;
  align-items: center;

  &__text {
    font: $l-medium-600;
    color: $color-dark-text-primary;

    &_light {
      color: $color-light-text-primary;
    }
  }

  &__value {
    font: $l-medium-600;
    color: $color-dark-text-disabled;
    margin-left: $spacing-xx-sm;

    &_light {
      color: $color-light-text-disabled;
    }
  }

  &__icon {
    color: $color-dark-primary-main;
    margin-left: $spacing-x-sm;
  }
}

.data-range-info {
  margin-top: $spacing-x-sm;
  display: flex;
  gap: $spacing-xx-sm;
  align-items: center;

  &__typical {
    font: $l-small-500;
    color: $color-dark-text-disabled;

    &_light {
      color: $color-light-text-disabled;
    }
  }
}

.data-range-info-scale {
  height: 8px;
  display: flex;
  //height: $spacing-x-sm;
  width: 69px;
  border-radius: 4px;
  border: 1px solid #333333;
  position: relative;

  &_light {
    border: 1px solid $color-light-other-divider;
  }

  &__graph {
    position: absolute;
    height: 100%;
    background: repeating-linear-gradient(
            45deg,
            #333333,
            #333333 1px,
            transparent 1px,
            transparent 3px
    );
    background-origin: border-box;

    &_light {
      background: repeating-linear-gradient(
              45deg,
              $color-light-other-divider,
              $color-light-other-divider 1px,
              transparent 1px,
              transparent 3px
      );
    }
  }

  &__pointer {
    position: absolute;
    top: 50%;
    translate: 0 -50%;
    width: 1.5px;
    background-color: $color-dark-primary-main;
    height: 10px;

    &:before {
      top: -8px;
      left: 50%;
      translate: -50% 0;
      position: absolute;
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 6px 3px 0 3px;
      border-color: $color-dark-primary-main transparent transparent transparent;
    }

    &_average {
      background-color: $color-dark-warning-main;

      &:before {
        border-color: $color-dark-warning-main transparent transparent transparent;
      }
    }

    &_poor {
      background-color: $color-dark-destructive-main;

      &:before {
        border-color: $color-dark-destructive-main transparent transparent transparent;
      }
    }
  }
}
</style>