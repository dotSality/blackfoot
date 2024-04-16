<template>
  <div class="biome-page">
    <div class="biome-page-wrapper">
      <ReportSide />
      <GraphSide />
    </div>
    <div class="biome-page-wrapper">
      <BiomeProfileSide />
      <MicrobiomeStripesSide />
    </div>
  </div>
</template>

<script setup>
import ReportSide from '@pages/BiomePage/ReportSide.vue';
import GraphSide from '@pages/BiomePage/GraphSide.vue';
import BiomeProfileSide from '@pages/BiomePage/BiomeProfileSide.vue';
import MicrobiomeStripesSide from '@pages/BiomePage/MicrobiomeStripesSide.vue';
</script>

<style scoped lang="scss">
@import '@sass/variables';
@import '@sass/mixins';

.biome-page {
  width: 100%;
  min-height: 100%;
  padding: $spacing-x-lg 0 $spacing-xxx-lg 0;
  display: flex;
  flex-direction: column;
  gap: $spacing-x-lg;
  z-index: 1;
  position: relative;
}

.biome-page-wrapper {
  width: 100%;
  height: 100%;

  @include g-layout(12, 'large');
}
</style>