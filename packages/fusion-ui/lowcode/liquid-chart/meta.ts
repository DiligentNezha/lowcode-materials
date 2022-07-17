import { ComponentMetadata, Snippet } from '@ali/lowcode-types';
import { actionConfigure } from '../common/chart-action';
import { wrapWithCard } from '../pro-card/meta';

const LiquidChartMeta: ComponentMetadata = {
  componentName: 'LiquidChart',
  title: '水波图',
  category: '图表',
  group: '精选组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@alifd/fusion-ui',
    version: '0.1.3-beta.3',
    exportName: 'LiquidChart',
    main: 'lib/index.js',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'ref',
      propType: {
        type: 'oneOfType',
        value: [
          {
            type: 'func',
            params: [
              {
                name: 'instance',
                propType: 'object',
              },
            ],
            returns: {
              propType: 'number',
            },
            raw: '(instance: unknown) => void',
          },
          'object',
        ],
      },
    },
    {
      name: 'key',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number'],
      },
    },
    {
      name: 'style',
      propType: 'object',
    },
  ],
  configure: {
    props: [
      {
        name: 'device',
        title: {
          label: '设备',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: ['phone', 'tablet', 'desktop'],
          },
        },
        defaultValue: 'desktop',
      },
      // 数据
      {
        name: 'data',
        type: 'group',
        display: 'accordion',
        title: {
          label: '数据',
        },
        items: [
          {
            name: 'min',
            title: {
              label: '最小值',
              tip: '水波图的最小值',
            },
            setter: 'NumberSetter',
          },
          {
            name: 'max',
            title: {
              label: '最大值',
              tip: '水波图的最大值',
            },
            setter: 'NumberSetter',
          },
          {
            name: 'value',
            title: {
              label: '当前值',
              tip: '水波图的当前值',
            },
            setter: 'NumberSetter',
          },
        ],
      },
    ].concat(actionConfigure),
  },
};
const snippets: Snippet[] = [
  {
    title: '水波图',
    screenshot:
      'https://img.alicdn.com/imgextra/i3/O1CN01cOF2841sYpZkxzCsv_!!6000000005779-55-tps-56-56.svg',
    schema: {
      componentName: 'LiquidChart',
      props: {
        title: {
          visible: true,
          text: '水波图'
        },
        data: {
          min: 0,
          max: 10000,
          value: 5639,
        },
        statistic: {
          title: {
            customHtml(container, view, item) {
              return '比例'
            }
          },
          content: {
            style: {
              fill: "#000"
            },
            customHtml(container, view, item) {
              return `${(item.percent * 100).toFixed(2)}%`
            }
          }
        }
      },
    },
  },
];

export default {
  ...LiquidChartMeta,
  snippets: wrapWithCard(snippets),
  // snippets: snippets,
};
