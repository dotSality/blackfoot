<template>
  <div class="breakdown-side">
    <span class="breakdown-side__subtitle">What it means</span>
    <span class="breakdown-side__title">Princess Peach's result breakdown</span>
    <span class="breakdown-side__breakdown">
      In this section, we delve deeper into the specific aspects of Princess
      Peach's microbiome and overall health, providing a detailed look into
      her microbiome and overall health.
      <br><br>
      Each key metric is an integral part of her unique health profile,
      offering insights into her gut health, dietary efficiency,
      and overall well-being.
      <br><br>
      Understanding these details is crucial in providing Princess
      Peach with the best care possible.
    </span>
  </div>
</template>

<style scoped lang="scss">
@import '@sass/variables';

.breakdown-side {
  grid-area: 1 / 1 / 1 / 5;
  display: flex;
  flex-direction: column;

  &__subtitle {
    font: $l-large-600;
    color: $color-light-text-primary;
  }

  &__title {
    margin-top: $spacing-md;
    font: $h-display-small-500;
    color: $color-light-text-primary;
  }

  &__breakdown {
    margin-top: $spacing-xxx-big;
    font: $p-medium-400;
    color: $color-light-text-secondary;
  }
}
</style>