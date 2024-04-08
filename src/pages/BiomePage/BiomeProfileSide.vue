<template>
  <div class="biome-profile">
    <div class="biome-profile__wrapper">
      <div class="biome-profile-head">
        <span class="biome-profile-head__subtitle">
          What's in her gut
        </span>
        <span class="biome-profile-head__title">
          Princess peach's microbiome profile
        </span>
      </div>
      <div class="biome-profile-summary">
        <div
          class="biome-profile-summary-text"
          :class="{ 'biome-profile-summary-text_opened': isShowMore }"
        >
          <div class="biome-profile-summary-text__wrapper">
            Princess Peach's detailed microbiome analysis highlights key areas needing attention,
            particularly in lipid metabolism and gut balance.
            <br><br>
            The overgrowth of E. coli raises concerns for potential small intestinal bacterial overgrowth
            (SIBO), and deficiencies in Actinobacteriota and Proteobacteria, alongside an
            imbalance in Bacteroides and Prevotella, may lead to digestive sensitivities.
            <br><br>
          </div>
        </div>
        <button
          class="biome-profile-summary-more"
          @click="showMoreHandler"
        >
          <MoreArrowIcon
            class="biome-profile-summary-more__arrow"
            :class="{ 'biome-profile-summary-more__arrow_rotated': isShowMore }"
          />
          Read {{ isShowMore ? 'less' : 'more' }}
        </button>
      </div>
      <div class="biome-profile-reading">
        <div class="biome-profile-reading-head">
          <span class="biome-profile-reading-head__title">
            further reading
          </span>
          <div class="biome-profile-reading-head__divider" />
        </div>
        <div class="biome-profile-reading-links">
          <div class="biome-profile-reading-links-link">
            <BookIcon />
            <a
              href="https://google.com"
              target="_blank"
              class="biome-profile-reading-links-link__anchor"
            >
              Understanding the microbiome
            </a>
          </div>
          <div class="biome-profile-reading-links-link">
            <BookIcon />
            <a
              href="https://google.com"
              target="_blank"
              class="biome-profile-reading-links-link__anchor"
            >
              What is phylum & genus?
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import MoreArrowIcon from '@components/icons/MoreArrowIcon.vue';
import BookIcon from '@components/icons/BookIcon.vue';
import { ref } from 'vue';

const isShowMore = ref(false);
const showMoreHandler = () => isShowMore.value = !isShowMore.value;
</script>

<style scoped lang="scss">
@import '@sass/variables';

.biome-profile {
  grid-area: 1 / 1 / 1 / 5;
  width: 100%;

  &__wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: $spacing-xxx-big;
  }
}

.biome-profile-head {
  display: flex;
  flex-direction: column;
  gap: $spacing-md;

  &__title {
    font: $h-display-small-500;
    color: $color-dark-text-primary;
  }

  &__subtitle {
    font: $l-large-600;
    color: $color-dark-text-primary;
  }
}

.biome-profile-summary {
}

.biome-profile-summary-text {
  color: $color-dark-text-secondary;
  font: $p-medium-400;
  display: grid;
  overflow: hidden;
  grid-template-rows: 0.35fr;
  transition: grid-template-rows .3s $tra-cubic;

  &_opened {
    grid-template-rows: 1fr;
  }

  &__wrapper {
    min-height: 0;
  }
}

.biome-profile-summary-more {
  cursor: pointer;
  display: flex;
  gap: 8px;
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

.biome-profile-reading {
  margin-top: $spacing-x-big;
  display: flex;
  flex-direction: column;
  gap: $spacing-md;
}

.biome-profile-reading-head {
  display: flex;
  gap: $spacing-md;
  justify-content: space-between;
  align-items: center;

  &__title {
    text-transform: uppercase;
    font: $p-small-400;
    color: $color-dark-text-disabled;
    white-space: nowrap;
  }

  &__divider {
    height: 1px;
    width: 100%;
    flex: 1 1 auto;
    background-color: $color-dark-other-divider;
  }
}

.biome-profile-reading-links {
  display: flex;
  flex-direction: column;
  gap: $spacing-x-sm;
}

.biome-profile-reading-links-link {
  display: flex;
  align-items: center;
  gap: 6px;
  color: $color-dark-primary-accent;
  transition: color .2s ease-in;

  &__anchor {
    cursor: pointer;
  }

  &:hover {
    color: $color-dark-common-black;
  }
}
</style>