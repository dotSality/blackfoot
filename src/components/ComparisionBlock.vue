<template>
  <div class="bl-comparison">
    <div
      v-for="group in data"
      :key="group.id"
      class="bl-comparison__wrapper"
    >
      <span class="bl-comparison__title bl-comparison__title_left">Typical</span>
      <span class="bl-comparison__title bl-comparison__title">{{ group.type }}</span>
      <span class="bl-comparison__title bl-comparison__title_right">{{ pet.name }}</span>
      <template
        v-for="(biome, idx) in group.microbiomes"
        :key="idx"
      >
        <span
          v-if="biome.subtype"
          class="bl-comparison__type"
          :class="{ 'bl-comparison__type_no-margin': !idx }"
        >
          {{ biome.subtype }}
        </span>
        <template
          v-for="value in biome.values"
          :key="value.name"
        >
          <transition
            appear
            name="stripe-appear-right"
          >
            <div
              class="bl-comparison__stripe bl-comparison__stripe_typical"
              :style="{ width: getStripeWidthByValue(value.typical, group.id) }"
            />
          </transition>
          <span class="bl-comparison__value bl-comparison__value_typical">
            {{ value.typical.toFixed(1) }}
          </span>
          <span class="bl-comparison__name">
            {{ value.name }}
          </span>
          <span class="bl-comparison__value">
            {{ value.current.toFixed(1) }}
          </span>
          <transition
            appear
            name="stripe-appear-left"
          >
            <div
              class="bl-comparison__stripe"
              :class="{
                'bl-comparison__stripe_average': getMockBiomeLevel(value.typical, value.current) > 13,
                'bl-comparison__stripe_poor': getMockBiomeLevel(value.typical, value.current) > 23,
              }"
              :style="{ width: getStripeWidthByValue(value.current, group.id) }"
            />
          </transition>
        </template>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  pet: {
    type: Object,
    default: () => ({}),
  },
});

const maxValuesByGroup = computed(() => {
  const map = {};
  props.data.forEach(({ id, microbiomes }) => {
    const maxValueByBiome = microbiomes.reduce((resultAcc, { values }) => {
      const maxByBiomes = values.reduce((acc, { typical, current }) => {
        const max = Math.max.call(null, typical, current);
        return max > acc ? max : acc;
      }, 0);
      return Math.max.call(null, maxByBiomes, resultAcc);
    }, 0);
    map[id] = maxValueByBiome;
  });
  return map;
});

const getStripeWidthByValue = (value, groupId) => {
  const groupMax = maxValuesByGroup.value[groupId];
  return (value / groupMax) * 100 + '%';
};

const getMockBiomeLevel = (typical, current) => {
  const max = Math.max.call(null, typical, current);
  const min = Math.min.call(null, typical, current);
  return 100 - (min / max) * 100;
};
</script>

<style scoped lang="scss">
@import '@sass/variables';
@import '@sass/mixins';

.bl-comparison {
  width: 100%;
  height: 100%;

  &__wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: 4fr 1fr 5fr 1fr 4fr;
    gap: 0 $spacing-x-sm;
    border-top: 1px solid $color-dark-other-divider;
    padding: $spacing-x-lg 0;
  }

  &__type {
    grid-column: span 5;
    font: $p-small-600;
    color: $color-dark-text-disabled;
    text-transform: uppercase;
    text-align: center;
    padding-bottom: $spacing-x-sm;
    margin-top: $spacing-x-lg;

    &_no-margin {
      margin-top: unset;
    }
  }

  &__title {
    margin-bottom: $spacing-md;
    font: $p-small-600;
    color: $color-dark-text-primary;
    text-align: center;
    grid-column: span 3;

    &_left {
      font: $p-small-400;
      color: $color-dark-text-disabled;
      text-align: right;
      grid-column: unset;
    }

    &_right {
      font: $p-small-400;
      color: $color-dark-text-disabled;
      text-align: left;
      grid-column: unset;
    }
  }

  &__value {
    font: $p-small-600;
    color: $color-dark-text-secondary;

    &_typical {
      text-align: right;
      font: $p-small-400;
      color: $color-dark-text-disabled;
    }
  }

  &__name {
    font: $p-small-400;
    color: $color-dark-text-secondary;
    text-align: center;
  }

  &__stripe {
    height: 50%;
    align-self: center;
    background-color: $color-dark-primary-accent;
    transition: width .3s $tra-cubic;

    &_typical {
      justify-self: flex-end;
      background-color: $color-dark-neutral-medium;
    }

    &_average {
      background-color: $color-dark-warning-main;
    }

    &_poor {
      background-color: $color-dark-destructive-main;
    }
  }
}

.stripe-appear-left {
  &-enter-active, &-leave-active {
    transition: transform 0.4s cubic-bezier(.48,.92,.41,.9);
    transform-origin: left;
  }

  &-leave-to, &-enter-from {
    transform: scaleX(0);
  }
}

.stripe-appear-right {
  &-enter-active, &-leave-active {
    transition: transform 0.4s $tra-cubic;
    transform-origin: right;
  }

  &-leave-to, &-enter-from {
    transform: scaleX(0);
  }
}
</style>