import { ComponentMetadata, Snippet } from '@ali/lowcode-types';
import { actionConfigure } from '../common/chart-action';
import { wrapWithCard } from '../pro-card/meta';

const ProgressChartMeta: ComponentMetadata = {
  componentName: 'ProgressChart',
  title: '进度条',
  category: '图表',
  group: '精选组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@alifd/fusion-ui',
    version: '0.1.3-beta.3',
    exportName: 'ProgressChart',
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
            name: 'width',
            title: '宽度',
            setter: 'NumberSetter',
          },
          {
            name: 'height',
            title: '高度',
            setter: 'NumberSetter',
          },
          {
            name: 'percent',
            title: '百分比',
            setter: {
              componentName: 'NumberSetter',
              props: {
                max: 1,
                min: 0,
                step: 0.1,
              },
            },
          },
          
        ],
      },
      // 图形属性
      {
        name: '',
        type: 'group',
        display: 'accordion',
        title: {
          label: '图形属性',
        },
        items: [
          {
            name: 'color',
            title: '进度条颜色',
            setter: 'ColorSetter',
          }
        ],
      },
    ].concat(actionConfigure),
  },
};
const snippets: Snippet[] = [
  {
    title: '进度条',
    screenshot:
      'https://img.alicdn.com/imgextra/i2/O1CN012P76ko1dqUbwwmuF8_!!6000000003787-55-tps-56-56.svg',
    schema: {
      componentName: 'ProgressChart',
      props: {
        width: 200,
        height: 100,
        percent: 0.8,
        annotations: [
          {
            type: 'text',
            content: '80%',
            position: [
              'median',
              'median',
            ]
          }
        ]
      },
    },
  },
  {
    title: '进度条11',
    screenshot:
      'https://img.alicdn.com/imgextra/i2/O1CN012P76ko1dqUbwwmuF8_!!6000000003787-55-tps-56-56.svg',
    schema: {
      componentName: 'ProgressChart',
      props: {
        width: 200,
        height: 100,
        percent: 0.5,
        annotations: [
          {
            type: 'text',
            content: '50%',
            position: [
              'median',
              'median',
            ]
          }
        ]
      },
    },
  },
];

export default {
  ...ProgressChartMeta,
  snippets: wrapWithCard(snippets),
};
