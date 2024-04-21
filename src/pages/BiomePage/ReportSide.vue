<template>
  <div class="biome-page-report">
    <span class="biome-page-report__title">
      Microbiome report
    </span>
    <div class="biome-page-report-info">
      <div class="biome-page-report-info__piece">
        <span class="biome-page-report-info__piece_label">
          Pet name
        </span>
        <div class="biome-page-report-info__piece_name">
          <ExampleIcon />
          <span class="biome-page-report-info__piece_text">
            Princess peach
          </span>
        </div>
      </div>
      <div class="biome-page-report-info__piece">
        <span class="biome-page-report-info__piece_label">
          Breed
        </span>
        <span class="biome-page-report-info__piece_text">
          German Hunt Terrier
        </span>
      </div>
      <div class="biome-page-report-info__piece">
        <span class="biome-page-report-info__piece_label">
          Age
        </span>
        <span class="biome-page-report-info__piece_text">
          2
        </span>
      </div>
      <div class="biome-page-report-info__piece">
        <span class="biome-page-report-info__piece_label">
          Encounter
        </span>
        <span class="biome-page-report-info__piece_text">
          Female, spayed
        </span>
      </div>
      <div class="biome-page-report-info__piece">
        <span class="biome-page-report-info__piece_label">
          Diet
        </span>
        <span class="biome-page-report-info__piece_text">
          Raw
        </span>
      </div>
      <button
        class="biome-page-report-info-more"
        @click="showMoreHandler"
      >
        <MoreArrowIcon
          class="biome-page-report-info-more__arrow"
          :class="{ 'biome-page-report-info-more__arrow_rotated': isShowMore }"
        />
        View {{ isShowMore ? 'less' : 'more' }}
      </button>
    </div>
    <span class="biome-page-report-summary">
      We've meticulously processed and analysed the data to generate
      this report for you and Princess Peach. This report provides
      you with precise insights, allowing you to make informed
      adjustments to Princess Peach's daily routine and diet based
      on scientific evidence rather than guesswork.
      <br>
      <br>
      For further clarification and expert advice, you may book
      for a consultation with our specialists. We're here to assist
      you in enhancing your pet's health journey.
    </span>
    <div class="biome-page-report-actions">
      <button class="biome-page-report-actions__button biome-page-report-actions__button_read">
        Read full analysis
      </button>
      <button class="biome-page-report-actions__button biome-page-report-actions__button_book">
        Book a consultation
      </button>
    </div>
  </div>
</template>

<script setup>

import ExampleIcon from '@components/icons/ExampleIcon.vue';
import MoreArrowIcon from '@components/icons/MoreArrowIcon.vue';
import { ref } from 'vue';

const isShowMore = ref(false);
const showMoreHandler = () => {
  isShowMore.value = !isShowMore.value;
};
</script>

<style scoped lang="scss">
@import '@sass/variables';
@import '@sass/mixins';

.biome-page-report {
  grid-area: 1 / 1 / 1 / 5;
  display: flex;
  flex-direction: column;
  gap: $spacing-md;

  &__title {
    font: $h-display-small-500;
    letter-spacing: -0.88px;
    color: $color-dark-text-primary;
  }
}

.biome-page-report-info {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-x-big;
  row-gap: $spacing-md;
  border: solid $color-dark-other-divider;
  border-width: 0 0 1px 0;
  padding-bottom: $spacing-md;

  &__piece {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: $spacing-xx-sm;

    &_label {
      font: $l-x-large-400;
      color: $color-dark-text-disabled;
    }

    &_name {
      display: flex;
      gap: $spacing-x-sm;
      align-items: center;
    }

    &_text {
      font: $l-large-400;
      color: $color-dark-text-primary;
    }
  }
}

.biome-page-report-info-more {
  cursor: pointer;
  height: fit-content;
  align-self: flex-end;
  margin-left: auto;
  display: flex;
  gap: 6px;
  align-items: center;
  color: $color-dark-primary-main;
  transition: color .3s ease-in;

  &__arrow {
    transition: transform .2s ease-in;

    &_rotated {
      transform: rotate(180deg);
    }
  }

  &:hover {
    color: $color-dark-common-black;
  }
}

.biome-page-report-summary {
  color: $color-dark-text-secondary;
  font: $p-medium-400;
}

.biome-page-report-actions {
  display: flex;
  gap: $spacing-md;
  flex-wrap: wrap;
  container-type: inline-size;

  &__button {
    flex: 0 1 auto;
    cursor: pointer;
    transition: border-color .3s ease-in,
    color .3s ease-in,
    background-color .3s ease-in;
    border-width: 1px;
    border-style: solid;
    font: $l-medium-500;
    padding: $spacing-sm $spacing-big;

    &_read {
      background-color: $color-dark-primary-main;
      border-color: $color-dark-primary-main;
      color: $color-dark-primary-contrast;

      &:hover {
        background-color: $color-dark-neutral-main;
        border-color: $color-dark-neutral-main;
      }
    }

    &_book {
      border-color: $color-dark-neutral-main;
      color: $color-dark-neutral-main;

      &:hover {
        background-color: $color-dark-neutral-main;
        color: $color-dark-primary-contrast;
      }
    }
  }
}

@container (max-width: 348px) {
  .biome-page-report-actions__button {
    flex: 1 1 auto;
  }
}
</style>