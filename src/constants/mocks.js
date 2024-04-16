export const mockBiomeData = [
  {
    id: 1,
    type: 'Phylum',
    microbiomes: [
      {
        subtype: null,
        values: [
          {
            name: 'Firmicutes',
            typical: 57.5,
            current: 51.2,
          },
          {
            name: 'Bacteroidetes',
            typical: 40.3,
            current: 39.6,
          },
          {
            name: 'Actinobacteria',
            typical: 4.9,
            current: 6.6,
          },
          {
            name: 'Proteobacteria',
            typical: 4.5,
            current: 7.5,
          },
          {
            name: 'Fusobacterium',
            typical: 1.9,
            current: 2.8,
          },
          {
            name: 'Epsilonbacteraeota',
            typical: 0.9,
            current: 1.1,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    type: 'Genus',
    microbiomes: [
      {
        subtype: 'Firmicutes',
        values: [
          {
            name: 'Megamonas',
            typical: 8.6,
            current: 7.8,
          },
          {
            name: 'Peptoclostridium',
            typical: 4.3,
            current: 4.9,
          },
          {
            name: 'Blautia',
            typical: 7.1,
            current: 6.7,
          },
          {
            name: 'Faecalibacterium',
            typical: 12.8,
            current: 11.6,
          },
          {
            name: 'Ruminococcus',
            typical: 7.3,
            current: 4.5,
          },
          {
            name: 'Clostridium',
            typical: 3.4,
            current: 2.7,
          },
          {
            name: 'Lachnospiraceae (types)',
            typical: 7.9,
            current: 6.9,
          },
          {
            name: 'Paeniclostridium',
            typical: 2.8,
            current: 2.1,
          },
          {
            name: 'Peptostreptococcaceae (types)',
            typical: 2.2,
            current: 1.4,
          },
          {
            name: 'Romboutsia',
            typical: 0.0,
            current: 0.9,
          },
          {
            name: 'Others',
            typical: 1.1,
            current: 1.7,
          },
        ],
      },
      {
        subtype: 'Bacteroidetes',
        values: [
          {
            name: 'Prevotella',
            typical: 19.7,
            current: 18.2,
          },
          {
            name: 'Bacteroides',
            typical: 15.4,
            current: 17.1,
          },
          {
            name: 'Alloprevotella',
            typical: 4.9,
            current: 3.1,
          },
          {
            name: 'Parabacteroides',
            typical: 0.0,
            current: 0.9,
          },
          {
            name: 'Others',
            typical: 0.3,
            current: 0.3,
          },
        ],
      },
      {
        subtype: 'Actinobacteria',
        values: [
          {
            name: 'Collinsella',
            typical: 3.6,
            current: 4.4,
          },
          {
            name: 'Catenibacterium (type 2)',
            typical: 0.8,
            current: 1.3,
          },
          {
            name: 'Others',
            typical: 0.5,
            current: 0.9,
          },
        ],
      },
      {
        subtype: 'Proteobacteria',
        values: [
          {
            name: 'Escherichia/Shigella',
            typical: 2.7,
            current: 4.6,
          },
          {
            name: 'Sutterella',
            typical: 1.2,
            current: 2.2,
          },
          {
            name: 'Others',
            typical: 0.6,
            current: 0.7,
          },
        ],
      },
      {
        subtype: 'Fusobacterium',
        values: [
          {
            name: 'Fusobacterium',
            typical: 1.2,
            current: 1.8,
          },
          {
            name: 'Others',
            typical: 0.7,
            current: 1.0,
          },
        ],
      },
      {
        subtype: 'Epsilonbacteraeota',
        values: [
          {
            name: 'Phascolarctobacterium (type 2)',
            typical: 0.6,
            current: 0.7,
          },
          {
            name: 'Others',
            typical: 0.3,
            current: 0.4,
          },
        ],
      },
    ],
  },
];

export const mockOverallData = [
  {
    type: 'Overall microbiome',
    dataItems: [
      {
        value: 77.2,
        min: 30,
        max: 100,
        dataLabel: 'Alpha diversity',
        tooltipData: {
          title: 'Alpha diversity',
          subtitle: 'This refers to the variety of ' +
          'bacterial species within a gut microbiome, measuring both richness and ' +
          'evenness. Higher alpha diversity typically indicates better health.',
        },
        mainText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
        hiddenText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
      },
      {
        value: 1.9,
        min: 30,
        max: 100,
        dataLabel: 'Evenness',
        tooltipData: {
          title: 'Alpha diversity',
          subtitle: 'This refers to the variety of ' +
          'bacterial species within a gut microbiome, measuring both richness and ' +
          'evenness. Higher alpha diversity typically indicates better health.',
        },
        mainText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
        hiddenText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
      },
      {
        value: 77.2,
        min: 30,
        max: 100,
        dataLabel: 'Richness',
        tooltipData: {
          title: 'Alpha diversity',
          subtitle: 'This refers to the variety of ' +
          'bacterial species within a gut microbiome, measuring both richness and ' +
          'evenness. Higher alpha diversity typically indicates better health.',
        },
        mainText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
        hiddenText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
      },
    ],
  },
  {
    type: 'Brain health',
    dataItems: [
      {
        value: 77.2,
        min: 30,
        max: 100,
        dataLabel: 'Overall brain health',
        tooltipData: {
          title: 'Alpha diversity',
          subtitle: 'This refers to the variety of ' +
          'bacterial species within a gut microbiome, measuring both richness and ' +
          'evenness. Higher alpha diversity typically indicates better health.',
        },
        mainText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
        hiddenText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
      },
      {
        value: 77.2,
        min: 30,
        max: 100,
        dataLabel: 'GABA',
        tooltipData: {
          title: 'Alpha diversity',
          subtitle: 'This refers to the variety of ' +
          'bacterial species within a gut microbiome, measuring both richness and ' +
          'evenness. Higher alpha diversity typically indicates better health.',
        },
        mainText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
        hiddenText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
      },
      {
        value: 40.5,
        min: 30,
        max: 100,
        dataLabel: 'Serotonin',
        tooltipData: {
          title: 'Alpha diversity',
          subtitle: 'This refers to the variety of ' +
          'bacterial species within a gut microbiome, measuring both richness and ' +
          'evenness. Higher alpha diversity typically indicates better health.',
        },
        mainText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
        hiddenText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
      },
      {
        value: 77.2,
        min: 30,
        max: 100,
        dataLabel: 'Tryptophan',
        tooltipData: {
          title: 'Alpha diversity',
          subtitle: 'This refers to the variety of ' +
          'bacterial species within a gut microbiome, measuring both richness and ' +
          'evenness. Higher alpha diversity typically indicates better health.',
        },
        mainText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
        hiddenText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
      },
    ],
  },
  {
    type: 'Gut health',
    dataItems: [
      {
        value: 77.2,
        min: 30,
        max: 100,
        dataLabel: 'Overall gut health',
        tooltipData: {
          title: 'Alpha diversity',
          subtitle: 'This refers to the variety of ' +
          'bacterial species within a gut microbiome, measuring both richness and ' +
          'evenness. Higher alpha diversity typically indicates better health.',
        },
        mainText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
        hiddenText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
      },
      {
        value: 77.2,
        min: 30,
        max: 100,
        dataLabel: 'TMAO',
        tooltipData: {
          title: 'Alpha diversity',
          subtitle: 'This refers to the variety of ' +
          'bacterial species within a gut microbiome, measuring both richness and ' +
          'evenness. Higher alpha diversity typically indicates better health.',
        },
        mainText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
        hiddenText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
      },
      {
        value: 77.2,
        min: 30,
        max: 100,
        dataLabel: 'Cysteine & derivatives',
        tooltipData: {
          title: 'Alpha diversity',
          subtitle: 'This refers to the variety of ' +
          'bacterial species within a gut microbiome, measuring both richness and ' +
          'evenness. Higher alpha diversity typically indicates better health.',
        },
        mainText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
        hiddenText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
      },
      {
        value: 40.5,
        min: 30,
        max: 100,
        dataLabel: 'Bile acids deconjugation',
        tooltipData: {
          title: 'Alpha diversity',
          subtitle: 'This refers to the variety of ' +
          'bacterial species within a gut microbiome, measuring both richness and ' +
          'evenness. Higher alpha diversity typically indicates better health.',
        },
        mainText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
        hiddenText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
      },
    ],
  },
  {
    type: 'Digestive health',
    dataItems: [
      {
        value: 40.5,
        min: 30,
        max: 100,
        dataLabel: 'Overall digestive health',
        tooltipData: {
          title: 'Alpha diversity',
          subtitle: 'This refers to the variety of ' +
          'bacterial species within a gut microbiome, measuring both richness and ' +
          'evenness. Higher alpha diversity typically indicates better health.',
        },
        mainText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
        hiddenText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
      },
      {
        value: 40.5,
        min: 30,
        max: 100,
        dataLabel: 'Protein',
        tooltipData: {
          title: 'Alpha diversity',
          subtitle: 'This refers to the variety of ' +
          'bacterial species within a gut microbiome, measuring both richness and ' +
          'evenness. Higher alpha diversity typically indicates better health.',
        },
        mainText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
        hiddenText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
      },
      {
        value: 1.9,
        min: 30,
        max: 100,
        dataLabel: 'Fat',
        tooltipData: {
          title: 'Alpha diversity',
          subtitle: 'This refers to the variety of ' +
          'bacterial species within a gut microbiome, measuring both richness and ' +
          'evenness. Higher alpha diversity typically indicates better health.',
        },
        mainText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
        hiddenText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
      },
      {
        value: 1.9,
        min: 30,
        max: 100,
        dataLabel: 'Fibre',
        tooltipData: {
          title: 'Alpha diversity',
          subtitle: 'This refers to the variety of ' +
          'bacterial species within a gut microbiome, measuring both richness and ' +
          'evenness. Higher alpha diversity typically indicates better health.',
        },
        mainText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
        hiddenText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
      },
      {
        value: 40.5,
        min: 30,
        max: 100,
        dataLabel: 'Chondroitin',
        tooltipData: {
          title: 'Alpha diversity',
          subtitle: 'This refers to the variety of ' +
          'bacterial species within a gut microbiome, measuring both richness and ' +
          'evenness. Higher alpha diversity typically indicates better health.',
        },
        mainText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
        hiddenText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
      },
      {
        value: 40.5,
        min: 30,
        max: 100,
        dataLabel: 'SCFAs',
        tooltipData: {
          title: 'Alpha diversity',
          subtitle: 'This refers to the variety of ' +
          'bacterial species within a gut microbiome, measuring both richness and ' +
          'evenness. Higher alpha diversity typically indicates better health.',
        },
        mainText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
        hiddenText: 'Princess Peach\'s alpha diversity score is high, indicating a healthy ' +
          'variety in her gut bacteria. This diversity is key, as it\'s linked to better ' +
          'overall health in pets.',
      },
    ],
  },
];

export const MOCK_DIETARY_DATA = [
  {
    name: 'Fusobacteria',
    tooltipData: {
      title: 'Alpha diversity',
      subtitle: 'This refers to the variety of ' +
        'bacterial species within a gut microbiome, measuring both richness and ' +
        'evenness. Higher alpha diversity typically indicates better health.',
    },
    description: 'Princess Peach\'s elevated Fusobacteria levels suggest a need to ' +
      'balance gut flora. Include probiotic-rich foods, high-fiber vegetables, and ' +
      'fermented foods in her diet. Avoid excessive red meat, high-fat dairy products, processed foods.',
    dataRows: [
      {
        title: 'include',
        cells: [
          {
            name: 'Probiotic-rich foods',
            goods: [
              'Yogurt',
              'Kefir',
            ],
          },
          {
            name: 'Fermented foods',
            goods: [
              'Sauerkraut',
              'Kimchi',
              'Miso',
              'Tempeh',
            ],
          },
          {
            name: 'High-fibre vegetables',
            goods: [
              'Broccoli',
              'Carrots',
              'Sweet potatoes',
              'Spinach',
              'Kale',
            ],
          },
        ],
      },
      {
        title: 'avoid',
        cells: [
          {
            name: 'Probiotic-rich foods',
            goods: [
              'Yogurt',
              'Kefir',
            ],
          },
          {
            name: 'High-fibre vegetables',
            goods: [
              'Broccoli',
              'Carrots',
              'Sweet potatoes',
              'Spinach',
              'Kale',
            ],
          },
          {
            name: 'Fermented foods',
            goods: [
              'Sauerkraut',
              'Kimchi',
              'Miso',
              'Tempeh',
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Fusobacteria',
    tooltipData: {
      title: 'Alpha diversity',
      subtitle: 'This refers to the variety of ' +
        'bacterial species within a gut microbiome, measuring both richness and ' +
        'evenness. Higher alpha diversity typically indicates better health.',
    },
    description: 'Princess Peach\'s elevated Fusobacteria levels suggest a need to ' +
      'balance gut flora. Include probiotic-rich foods, high-fiber vegetables, and ' +
      'fermented foods in her diet. Avoid excessive red meat, high-fat dairy products, processed foods.',
    dataRows: [
      {
        title: 'Probiotic-rich foods',
        cells: [
          'Yogurt',
          'Kefir',
        ],
      },
      {
        title: 'High-fibre vegetables',
        cells: [
          'Broccoli',
          'Carrots',
          'Sweet potatoes',
          'Spinach',
          'Kale',
        ],
      },
      {
        title: 'Fermented foods',
        cells: [
          'Sauerkraut',
          'Kimchi',
          'Miso',
          'Tempeh',
        ],
      },
    ],
  },
  {
    name: 'Fusobacteria',
    tooltipData: {
      title: 'Alpha diversity',
      subtitle: 'This refers to the variety of ' +
        'bacterial species within a gut microbiome, measuring both richness and ' +
        'evenness. Higher alpha diversity typically indicates better health.',
    },
    description: 'Princess Peach\'s elevated Fusobacteria levels suggest a need to ' +
      'balance gut flora. Include probiotic-rich foods, high-fiber vegetables, and ' +
      'fermented foods in her diet. Avoid excessive red meat, high-fat dairy products, processed foods.',
    dataRows: [
      {
        title: 'Probiotic-rich foods',
        cells: [
          'Yogurt',
          'Kefir',
        ],
      },
      {
        title: 'High-fibre vegetables',
        cells: [
          'Broccoli',
          'Carrots',
          'Sweet potatoes',
          'Spinach',
          'Kale',
        ],
      },
      {
        title: 'Fermented foods',
        cells: [
          'Sauerkraut',
          'Kimchi',
          'Miso',
          'Tempeh',
        ],
      },
    ],
  },
  {
    name: 'Fusobacteria',
    tooltipData: {
      title: 'Alpha diversity',
      subtitle: 'This refers to the variety of ' +
        'bacterial species within a gut microbiome, measuring both richness and ' +
        'evenness. Higher alpha diversity typically indicates better health.',
    },
    description: 'Princess Peach\'s elevated Fusobacteria levels suggest a need to ' +
      'balance gut flora. Include probiotic-rich foods, high-fiber vegetables, and ' +
      'fermented foods in her diet. Avoid excessive red meat, high-fat dairy products, processed foods.',
    dataRows: [
      {
        title: 'Probiotic-rich foods',
        cells: [
          'Yogurt',
          'Kefir',
        ],
      },
      {
        title: 'High-fibre vegetables',
        cells: [
          'Broccoli',
          'Carrots',
          'Sweet potatoes',
          'Spinach',
          'Kale',
        ],
      },
      {
        title: 'Fermented foods',
        cells: [
          'Sauerkraut',
          'Kimchi',
          'Miso',
          'Tempeh',
        ],
      },
    ],
  },
  {
    name: 'Fusobacteria',
    tooltipData: {
      title: 'Alpha diversity',
      subtitle: 'This refers to the variety of ' +
        'bacterial species within a gut microbiome, measuring both richness and ' +
        'evenness. Higher alpha diversity typically indicates better health.',
    },
    description: 'Princess Peach\'s elevated Fusobacteria levels suggest a need to ' +
      'balance gut flora. Include probiotic-rich foods, high-fiber vegetables, and ' +
      'fermented foods in her diet. Avoid excessive red meat, high-fat dairy products, processed foods.',
    dataRows: [
      {
        title: 'Probiotic-rich foods',
        cells: [
          'Yogurt',
          'Kefir',
        ],
      },
      {
        title: 'High-fibre vegetables',
        cells: [
          'Broccoli',
          'Carrots',
          'Sweet potatoes',
          'Spinach',
          'Kale',
        ],
      },
      {
        title: 'Fermented foods',
        cells: [
          'Sauerkraut',
          'Kimchi',
          'Miso',
          'Tempeh',
        ],
      },
    ],
  },
  {
    name: 'Fusobacteria',
    tooltipData: {
      title: 'Alpha diversity',
      subtitle: 'This refers to the variety of ' +
        'bacterial species within a gut microbiome, measuring both richness and ' +
        'evenness. Higher alpha diversity typically indicates better health.',
    },
    description: 'Princess Peach\'s elevated Fusobacteria levels suggest a need to ' +
      'balance gut flora. Include probiotic-rich foods, high-fiber vegetables, and ' +
      'fermented foods in her diet. Avoid excessive red meat, high-fat dairy products, processed foods.',
    dataRows: [
      {
        title: 'Probiotic-rich foods',
        cells: [
          'Yogurt',
          'Kefir',
        ],
      },
      {
        title: 'High-fibre vegetables',
        cells: [
          'Broccoli',
          'Carrots',
          'Sweet potatoes',
          'Spinach',
          'Kale',
        ],
      },
      {
        title: 'Fermented foods',
        cells: [
          'Sauerkraut',
          'Kimchi',
          'Miso',
          'Tempeh',
        ],
      },
    ],
  },
];

export const MOCK_DIETARY_PARTICULAR_DATA = [
  {
    name: 'Vitamin D',
    description: 'Ensure Princess Peach gets adequate sunlight for natural Vitamin D synthesis' +
      ', vital for bone health and immune function. Regular outdoor walks can be beneficial.',
  },
  {
    name: 'Exercise',
    description: 'Regular physical activity can enhance her digestive efficiency and overall ' +
      'well-being. Consider daily walks, play sessions, or agility training.',
  },
];