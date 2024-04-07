<template>
  <div
    ref="chartWrapperRef"
    class="biome-chart"
  >
    <Radar
      ref="chartRef"
      :data="data"
      :options="options"
    />
  </div>
</template>

<script setup>
import {
  computed,
  onMounted,
  onUnmounted,
  ref,
} from 'vue';
import { Radar } from 'vue-chartjs';
import {
  ArcElement,
  Chart,
  Filler,
  LineElement,
  PointElement,
  RadialLinearScale,
} from 'chart.js';

Chart.defaults.font.family = 'Inter';
Chart.register(RadialLinearScale, Filler, PointElement, LineElement, ArcElement);

const chartRef = ref(null);
const chartWrapperRef = ref(null);
const data = computed(() => ({
  labels: [
    'Bacteroidota',
    'Fusobacteriota',
    'Proteobacteria',
    'Epsilonbacteraeota',
    'Actinobacteria',
    'Firmicutes',
  ],
  datasets: [
    {
      data: [
        47,
        69,
        29,
        76,
        53,
        47,
      ],
      fill: true,
      borderColor: 'rgba(255, 255, 255, 0.18)',
      pointRadius: 0,
      backgroundColor: function (context) {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) return;
        return function (ctx, chartArea) {
          const gradient = ctx.createLinearGradient(
            0,
            0,
            chartArea.right,
            chartArea.bottom,
          );
          gradient.addColorStop(0.86, 'rgba(255, 255, 255, 0.00)');
          gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.05)');
          return gradient;
        }(ctx, chartArea);
      },
      tension: 0.5,
    },
    {
      data: [
        68,
        25,
        69,
        53,
        81,
        59,
      ],
      fill: true,
      borderColor: '#07F4F4',
      pointRadius: 0,
      backgroundColor: function (context) {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) return;
        return function (ctx, chartArea) {
          const gradient = ctx.createLinearGradient(
            0,
            0,
            chartArea.right,
            chartArea.bottom,
          );
          gradient.addColorStop(0.64, 'rgba(7, 244, 244, 0.05)');
          gradient.addColorStop(0.14, 'rgba(7, 244, 244, 0.25)');
          return gradient;
        }(ctx, chartArea);
      },
      tension: 0.5,
    },
    {
      data: [
        100,
        100,
        100,
        100,
        100,
        100,
      ],
      backgroundColor: '#ffffff00',
      borderColor: '#ffffff00',
      pointRadius: 5,
      pointHoverRadius: 5,
      pointBackgroundColor: '#ffffff',
    },
  ],
}));

const options = computed(() => ({
  responsive: true,
  borderJoinStyle: 'round',
  scales: {
    r: {
      pointLabels: {
        padding: 12,
        font: {
          size: 10,
          weight: 400,
          color: '#FFFFFF80',
          lineHeight: 1.4,
        },
      },
      ticks: {
        stepSize: 20,
        display: false,
      },
      beginAtZero: true,
      startAngle: -30,
      angleLines: { color: '#222' },
      grid: {
        circular: true,
        color: '#222',
      },
    },
  },
  elements: { line: { borderWidth: 2 } },
}));

const resizeCallback = () => {
  chartRef.value.chart.resize();
};

onMounted(() => {
  window.addEventListener('resize', resizeCallback);
});

onUnmounted(() => {
  window.removeEventListener('resize',resizeCallback);
});
</script>

<style
    scoped
    lang="scss"
>
.biome-chart {
  overflow: hidden;
  position: relative;
  width: 100%;
  max-width: 517px;
  margin: 0 auto;
}
</style>