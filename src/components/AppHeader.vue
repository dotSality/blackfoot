<template>
  <div
    class="app-header"
    :class="{ 'app-header_hidden': isHeaderHidden }"
  >
    <div class="app-header-wrapper">
      <div
        class="app-header-wrapper__pointer"
        :style="pointer"
      />
      <div class="app-header-links">
        <a
          v-for="link in links"
          :key="link.path"
          :ref="(el) => linkRefs[link.id] = el"
          class="app-header-links__link"
          :href="'#' + link.id"
        >
          <span class="app-header-links__link_title">
            {{ link.title }}
          </span>
          <span class="app-header-links__link_subtitle">
            {{ link.subtitle }}
          </span>
        </a>
      </div>
      <div class="app-header__link">
        Book a consultation
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  computed,
  nextTick,
  onMounted,
  onUnmounted,
  reactive,
  ref,
} from 'vue';

const links = [
  {
    id: 'biome',
    title: 'What\'s in her gut',
    subtitle: 'Microbiome profile',
  },
  {
    id: 'meaning',
    title: 'What it means',
    subtitle: 'Bacteria insights',
  },
  {
    id: 'recommendation',
    title: 'What you can do',
    subtitle: 'Dietary recommendations',
  },
];

const intersectingElements = computed(() => links
  .map((link) => document.getElementById(link.id)));

const intersectionObserver = ref(null);

const pointer = reactive({
  transform: 'none',
  width: '0',
});
const linkRefs = ref({});
const isHeaderHidden = ref(true);
const hidingTimeoutId = ref(null);

const onScrollHandler = () => {
  isHeaderHidden.value = false;
  if (hidingTimeoutId.value) {
    clearTimeout(hidingTimeoutId.value);
    hidingTimeoutId.value = null;
  }
  if (window.scrollY === 0) {
    isHeaderHidden.value = true;
  } else {
    hidingTimeoutId.value = setTimeout(() => {
      isHeaderHidden.value = true;
      hidingTimeoutId.value = null;
    }, 3000);
  }
};

onMounted(() => {
  window.addEventListener('scroll', onScrollHandler);
  nextTick(() => {
    intersectionObserver.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target._intersectionHeight = entry.intersectionRect.height;
        });
        const mostVisibleEl = intersectingElements.value.reduce((prev, current) => {
          if (current._intersectionHeight > (prev?._intersectionHeight ?? 0)) {
            return current;
          } else {
            return prev;
          }
        }, null);
        const mostVisibleLink = links.find((el) => el.id === mostVisibleEl.id);
        const { id } = mostVisibleLink;
        const linkEl = linkRefs.value[id];
        const rect = linkEl.getBoundingClientRect();
        pointer.transform = `translateX(${linkEl.offsetLeft}px)`;
        pointer.width = `${rect.width}px`;
      },
      {
        threshold: [
          0,
          0.05,
          0.1,
          0.15,
          0.2,
          0.25,
          0.3,
          0.35,
          0.4,
          0.45,
          0.5,
          0.55,
          0.6,
          0.65,
          0.7,
          0.75,
          0.8,
          0.85,
          0.9,
          0.95,
          1,
        ],
      },
    );
    intersectingElements.value.forEach((el) => {
      intersectionObserver.value.observe(el);
    });
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScrollHandler);
});
</script>

<style scoped lang="scss">
@import '@sass/variables';

.app-header {
  width: 100%;
  height: 112px;
  position: fixed;
  top: 0;
  padding: 0 $m-desktop;
  z-index: 2;
  background-color: $color-light-common-black;
  transform: translateY(0);
  transition: transform .3s $tra-cubic;

  &_hidden {
    transform: translateY(-100%);
  }

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