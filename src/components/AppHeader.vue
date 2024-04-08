<template>
  <div class="app-header">
    <div class="app-header-wrapper">
      <div
        class="app-header-wrapper__pointer"
        :style="pointer"
      />
      <div class="app-header-links">
        <router-link
          v-for="link in links"
          :key="link.path"
          :ref="(el) => linkRefs[link.path] = el"
          class="app-header-links__link"
          :class="{ 'app-header-links__link_active': $route.path === link.path }"
          :to="link.path"
        >
          <span class="app-header-links__link_title">
            {{ link.title }}
          </span>
          <span class="app-header-links__link_subtitle">
            {{ link.subtitle }}
          </span>
        </router-link>
      </div>
      <div class="app-header__link">
        Book a consultation
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import {
  reactive,
  ref,
  watch,
} from 'vue';
import { APP_ROUTES } from '@constants';

const links = [
  {
    path: APP_ROUTES.BIOME_PAGE,
    title: 'What\'s in her gut',
    subtitle: 'Microbiome profile',
  },
  {
    path: APP_ROUTES.MEANING_PAGE,
    title: 'What it means',
    subtitle: 'Bacteria insights',
  },
  {
    path: APP_ROUTES.RECOMMENDATION_PAGE,
    title: 'What you can do',
    subtitle: 'Dietary recommendations',
  },
];

const route = useRoute();

const pointer = reactive({
  transform: 'none',
  width: '0',
});
const linkRefs = ref({});

watch(() => route.path, (path) => {
  const linkEl = linkRefs.value[path].$el;
  const rect = linkEl.getBoundingClientRect();
  pointer.transform = `translateX(${linkEl.offsetLeft}px)`;
  pointer.width = `${rect.width}px`;
});
</script>

<style scoped lang="scss">
@import '@sass/variables';

.app-header {
  width: 100%;
  height: 112px;
  position: sticky;
  top: 0;
  padding: 0 $m-desktop;
  z-index: 2;
  background-color: $color-light-common-black;

  &-wrapper {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;

    &__pointer {
      background-color: $color-dark-primary-main;
      position: absolute;
      height: 4px;
      min-width: 0;
      transition: transform .3s ease-in, width .3s ease-in;
    }
  }

  &__link {
    padding: $spacing-sm $spacing-big;
    border: 1px solid $color-dark-neutral-main;
    align-self: center;
    color: $color-dark-neutral-main;
    cursor: pointer;
    transition: color .3s ease-in, background-color .3s ease-in;
    font: $p-overline;
    letter-spacing: 0.5px;

    &:hover {
      color: $color-dark-primary-contrast;
      background-color: $color-dark-neutral-main;
    }
  }
}

.app-header-links {
  flex: 1 1 auto;
  display: flex;
  gap: $spacing-x-big;

  &__link {
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: $spacing-x-big;
    text-align: left;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 4px;
      width: 100%;
      background-color: $color-dark-neutral-medium;
      opacity: 0;
      transition: opacity .2s ease-in;
    }

    &:not(.app-header-links__link_active):hover::before {
      opacity: 1;
    }

    &_title {
      letter-spacing: 0.5px;
      color: $color-dark-text-primary;
      font: $l-medium-500;
    }

    &_subtitle {
      letter-spacing: 0.5px;
      color: $color-dark-text-disabled;
      font: $l-x-large-400;
    }
  }
}
</style>