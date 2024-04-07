<template>
  <div class="biome-page-graphs">
    <div class="biome-page-graphs-info">
      <div class="biome-page-graphs-info-piece biome-page-graphs-info-piece_first">
        <span class="biome-page-graphs-info-piece__label">
          Date of report
        </span>
        <span class="biome-page-graphs-info-piece__data">
          23 Oct 2023
        </span>
      </div>
      <div class="biome-page-graphs-info-piece">
        <span class="biome-page-graphs-info-piece__label">
          Sample
        </span>
        <span class="biome-page-graphs-info-piece__data">
          #274624M
        </span>
      </div>
      <div class="biome-page-graphs-info-piece">
        <span class="biome-page-graphs-info-piece__label">
          Type
        </span>
        <span class="biome-page-graphs-info-piece__data">
          Gut
        </span>
      </div>
      <div class="biome-page-graphs-info-piece">
        <span class="biome-page-graphs-info-piece__label">
          Collected
        </span>
        <span class="biome-page-graphs-info-piece__data">
          21 Oct 2023
        </span>
      </div>
    </div>
    <div class="biome-page-graphs-overall">
      <DataRangeBlock
        :value="43.2"
        dataLabel="Alpha diversity"
        :min="44"
        :max="99"
        :tooltipData="{
          title: 'Alpha diversity', subtitle: 'This refers to the variety of ' +
            'bacterial species within a gut microbiome, measuring both richness and ' +
            'evenness. Higher alpha diversity typically indicates better health.',
        }"
        class="biome-page-graphs-overall__score"
      />
      <BiomeGraph />
    </div>
    <div class="biome-page-graphs-ranges">
      <div class="biome-page-graphs-ranges__row biome-page-graphs-ranges__row_first">
        <DataRangeBlock
          :value="70.1"
          dataLabel="Alpha diversity"
          :min="40"
          :max="100"
          :tooltipData="{
            title: 'Alpha diversity',
            subtitle: 'This refers to the variety of ' +
              'bacterial species within a gut microbiome, measuring both richness and ' +
              'evenness. Higher alpha diversity typically indicates better health.',
          }"
        />
        <DataRangeBlock
          :value="12.7"
          dataLabel="Evenness"
          :min="40"
          :max="100"
          :tooltipData="{
            title: 'Alpha diversity', subtitle: 'This refers to the variety of ' +
              'bacterial species within a gut microbiome, measuring both richness and ' +
              'evenness. Higher alpha diversity typically indicates better health.',
          }"
        />
        <DataRangeBlock
          :value="97.4"
          dataLabel="Richness"
          :min="40"
          :max="100"
          :tooltipData="{
            title: 'Alpha diversity', subtitle: 'This refers to the variety of ' +
              'bacterial species within a gut microbiome, measuring both richness and ' +
              'evenness. Higher alpha diversity typically indicates better health.',
          }"
        />
      </div>
      <div class="biome-page-graphs-ranges__row">
        <DataRangeBlock
          :value="99.8"
          dataLabel="Brain health"
          :min="40"
          :max="100"
          :tooltipData="{
            title: 'Alpha diversity', subtitle: 'This refers to the variety of ' +
              'bacterial species within a gut microbiome, measuring both richness and ' +
              'evenness. Higher alpha diversity typically indicates better health.',
          }"
        />
        <DataRangeBlock
          :value="82.3"
          dataLabel="Gut health"
          :min="40"
          :max="100"
          :tooltipData="{
            title: 'Alpha diversity', subtitle: 'This refers to the variety of ' +
              'bacterial species within a gut microbiome, measuring both richness and ' +
              'evenness. Higher alpha diversity typically indicates better health.',
          }"
        />
        <DataRangeBlock
          :value="59.1"
          dataLabel="Digestive health"
          :min="40"
          :max="100"
          :tooltipData="{
            title: 'Alpha diversity', subtitle: 'This refers to the variety of ' +
              'bacterial species within a gut microbiome, measuring both richness and ' +
              'evenness. Higher alpha diversity typically indicates better health.',
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import DataRangeBlock from '@components/DataRangeBlock.vue';
import BiomeGraph from '@components/BiomeGraph.vue';
</script>

<style scoped lang="scss">
@import '@sass/variables';
@import '@sass/mixins';

.biome-page-graphs {
  grid-area: 1 / 6 / 1 / -1;
}

.biome-page-graphs-info {
  display: flex;
  align-items: center;
  gap: $spacing-x-lg;
  padding-bottom: $spacing-x-big;
  border: solid $color-dark-other-divider;
  border-width: 0 0 1px 0;
}

.biome-page-graphs-info-piece {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: $spacing-xx-sm;

  &__label {
    font: $l-small-400;
    color: $color-dark-text-disabled;
  }

  &__data {
    font: $l-medium-400;
    color: $color-dark-text-primary;
  }

  &_first {
    flex: 1 1 auto;
  }
}

.biome-page-graphs-ranges {
  display: flex;
  flex-direction: column;

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: $spacing-x-big 0;

    &_first {
      border-bottom: 1px solid $color-dark-other-divider;
    }
  }
}

.biome-page-graphs-overall {
  display: flex;
  gap: $spacing-md;

  &__score {
    flex-shrink: 0;
    margin-top: $spacing-x-big;
  }
}
</style>