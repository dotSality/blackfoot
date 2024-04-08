<template>
  <div class="recommendation-breakdown">
    <div class="recommendation-breakdown__wrapper">
      <span class="recommendation-breakdown__subtitle">
        What you can do
      </span>
      <span class="recommendation-breakdown__title">
        Princess Peach's Recommendations
      </span>
      <span class="recommendation-breakdown__text">
        This section offers practical recommendations based on Princess Peach's
        unique health analysis. Discover ways to enhance her diet and daily
        routine, addressing specific needs identified in her microbiome profile.
        <br><br>
        These adjustments can significantly impact her overall health and happiness,
        ensuring she receives the best care tailored to her results.
      </span>
      <div class="recommendation-breakdown-further">
        <span class="recommendation-breakdown-further__label">
          Further reading
        </span>
        <div class="recommendation-breakdown-further-links">
          <div class="recommendation-breakdown-further-links-link">
            <BookIcon />
            <a
              class="recommendation-breakdown-further-links-link__anchor"
              target="_blank"
              href=""
            >
              All about pre & probiotics
            </a>
          </div>
          <div class="recommendation-breakdown-further-links-link">
            <BookIcon />
            <a
              class="recommendation-breakdown-further-links-link__anchor"
              target="_blank"
              href=""
            >
              What are fermented foods?
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import BookIcon from '@components/icons/BookIcon.vue';
</script>

<style scoped lang="scss">
@import '@sass/variables';

.recommendation-breakdown {
  grid-area: 1 / 1 / 1 / 5;

  &__wrapper {
    display: flex;
    flex-direction: column;
  }

  &__subtitle {
    font: $l-large-600;
    color: $color-light-text-primary;
  }

  &__title {
    margin-top: $spacing-md;
    font: $h-display-small-500;
    color: $color-light-text-primary;
  }

  &__text {
    margin: $spacing-xxx-big 0;
    font: $p-medium-400;
    color: $color-light-text-secondary;
  }
}

.recommendation-breakdown-further {
  margin-top: $spacing-x-big;
  display: flex;
  flex-direction: column;
  gap: $spacing-md;

  &__label {
    text-transform: uppercase;
    font: $p-small-600;
    color: $color-light-text-disabled;
  }
}
.recommendation-breakdown-further-links {
  display: flex;
  flex-direction: column;
  gap: $spacing-x-sm;
}

.recommendation-breakdown-further-links-link {
  color: $color-light-primary-accent;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color .3s ease-in;

  &:hover {
    color: $color-light-common-black;
  }

  &__anchor {
    font: $l-medium-600;
  }
}

</style>