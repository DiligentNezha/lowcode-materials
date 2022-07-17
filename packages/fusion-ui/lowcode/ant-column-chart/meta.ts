import { ComponentMetadata, Snippet } from '@ali/lowcode-types';
import { actionConfigure } from '../common/chart-action';
import meta, { wrapWithCard } from '../pro-card/meta';

const AntColumnChartMeta: ComponentMetadata = {
  componentName: 'AntColumnChart',
  title: 'AntV柱状图',
  category: '图表',
  group: '精选组件',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@alifd/fusion-ui',
    version: '0.1.3-beta.3',
    exportName: 'AntColumnChart',
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
    supports: {
      style: true,
      events: ['onChange', 'onExpand', 'onVisibleChange'],
    },
    props: [
      {
        name: 'theme',
        title: {
          label: '预览主题',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              { title: '白天模式', value: 'default' },
              { title: '黑夜模式', value: 'dark' },
            ],
          },
        }
      },
      {
        name: 'dataMapping',
        type: 'group',
        display: 'accordion',
        title: {
          label: '数据映射',
        },
        items: [
          {
            name: 'data',
            title: '图表数据',
            setter: 'JsonSetter',
          },
          {
            name: 'xField',
            title: {
              label: 'x轴字段名',
              tip: 'x 方向映射对应的数据字段名',
            },
            setter: 'StringSetter',
          },
          {
            name: 'yField',
            title: {
              label: 'y轴字段名',
              tip: 'y 方向映射所对应的数据字段名',
            },
            setter: 'StringSetter',
            // extraProps: {
            //   setValue: (target, value) => {

            //     let parentProp = target.parent;
            //     let parentSymbol = Object.getOwnPropertySymbols(parentProp)
            //     let aliasProp = parentProp[parentSymbol[0]].items[3];
            //     console.log(aliasProp)

            //     let newValue = `meta.${value}.alias`
            //     console.log('new', newValue)
            //     let oldValue = aliasProp.getKey();
            //     console.log('old', oldValue)
            //     let oldAliasPropValue = parentProp.getPropValue(oldValue)
            //     console.log(oldAliasPropValue)
            //     aliasProp.setKey(newValue);
            //     aliasProp.config.name = newValue;
            //     aliasProp.extraProps.name = newValue;
            //     let configureItem = aliasProp.componentMeta.configure[0].items[0].items[3]
            //     console.log(configureItem)
            //     configureItem.name = newValue

            //     console.log(configureItem)


            //     console.log(aliasProp)
            //     aliasProp.setValue(oldAliasPropValue)
            //   },
            // },
          },
          {
            name: 'meta.sales.alias',
            title: {
              label: '别名'
            },
            setter: 'StringSetter',
          },
          {
            name: 'testArray',
            title: {
              label: '测试列表'
            },
            display: 'accordion',
            setter: {
              componentName: 'ArraySetter',
              props: {
                itemSetter: {
                  componentName: 'ObjectSetter',
                  props: {
                    config: {
                      items: [
                        {
                          name: 'aliasColumn',
                          description: '别名列',
                          setter: 'StringSetter',
                        },
                        {
                          name: 'alias',
                          description: '别名',
                          setter: 'StringSetter',
                        },
                      ]
                    },
                  },
                },
                initialValue: {
                  aliasColumn: 'newAliasColumn',
                  alias: '新的列别名',
                },
              }
            }
          },
          {
            name: 'testObject',
            title: {
              label: '测试对象'
            },
            setter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'aliasColumn',
                      description: '别名列',
                      setter: 'StringSetter',
                    },
                    {
                      name: 'alias',
                      description: '别名',
                      setter: 'StringSetter',
                    },
                  ]
                },
              },
            },
          },
        ],
      },
      {
        name: 'chartStyle',
        type: 'group',
        display: 'accordion',
        title: {
          label: '图形样式',
        },
        items: [
          {
            name: 'color',
            title: '颜色',
            setter: {
              componentName: 'MixedSetter',
              props: {
                setters: [
                  'ColorSetter',
                  {
                    componentName: 'RadioGroupSetter',
                    props: {
                      options: [
                        { title: 'color1', value: '#d62728' },
                        { title: 'color2', value: '#2ca02c' },
                      ],
                    },
                  },
                  'FunctionSetter',
                ],
              },
            },
          },
          {
            name: 'pattern',
            type: 'group',
            display: 'accordion',
            title: {
              label: '贴图样式',
            },
            items: [
              {
                name: 'pattern.type',
                title: {
                  label: '贴图类型',
                  tip: '设置图形的贴图样式',
                },
                setter: {
                  componentName: 'RadioGroupSetter',
                  props: {
                    options: [
                      { title: '点', value: 'dot' },
                      { title: '线', value: 'line' },
                      { title: '方形', value: 'square' },
                    ],
                  },
                },
              },
              {
                name: 'pattern.cfg',
                title: '贴图配置',
                type: 'group',
                display: 'accordion',
                condition: (target) => {
                  return target.getProps().getPropValue('pattern.type') != undefined;
                },
                items: [
                  {
                    name: 'pattern.cfg.backgroundColor',
                    title: '贴图的背景色',
                    setter: 'ColorSetter',
                  },
                  {
                    name: 'pattern.cfg.fill',
                    title: '贴图元素的填充色',
                    setter: 'ColorSetter',
                  },
                  {
                    name: 'pattern.cfg.fillOpacity',
                    title: '贴图元素填充的透明度',
                    setter: {
                      componentName: 'NumberSetter',
                      props: {
                        min: 0,
                        max: 1,
                        defaultValue: 1,
                        step: 0.1,
                        precision: 1,
                      },
                    },
                  },
                  {
                    name: 'pattern.cfg.stoke',
                    title: '贴图元素的描边色',
                    setter: 'ColorSetter',
                  },
                  {
                    name: 'pattern.cfg.stokeOpacity',
                    title: '贴图元素的描边透明度色',
                    setter: {
                      componentName: 'NumberSetter',
                      props: {
                        min: 0,
                        max: 1.0,
                        defaultValue: 1,
                        step: 0.1,
                        precision: 1,
                      },
                    },
                  },
                  {
                    name: 'pattern.cfg.lineWidth',
                    title: '贴图元素的描边粗细',
                    setter: {
                      componentName: 'NumberSetter',
                      props: {
                        min: 0,
                        max: 10,
                        defaultValue: 1,
                        step: 1,
                      },
                    },
                  },
                  {
                    name: 'pattern.cfg.opacity',
                    title: '贴图整体的透明度',
                    setter: {
                      componentName: 'NumberSetter',
                      props: {
                        min: 0,
                        max: 1,
                        defaultValue: 1,
                        step: 0.1,
                        precision: 1,
                      },
                    },
                  },
                  {
                    name: 'pattern.cfg.rotation',
                    title: '贴图整体的旋转角度',
                    condition: (target) => {
                      return target.getProps().getPropValue('pattern.type') !== 'dot';
                    },
                    setter: {
                      componentName: 'NumberSetter',
                      props: {
                        min: 0,
                        max: 360,
                        step: 5,
                      },
                    },
                  },
                  {
                    name: 'pattern.cfg.size',
                    title: '大小',
                    setter: 'NumberSetter',
                    defaultValue: 6,
                    condition: (target) => {
                      return target.getProps().getPropValue('pattern.type') === 'dot' || target.getProps().getPropValue('pattern.type') === 'square';
                    },
                  },
                  {
                    name: 'pattern.cfg.padding',
                    title: '间隔',
                    setter: 'NumberSetter',
                    defaultValue: 2,
                    condition: (target) => {
                      return target.getProps().getPropValue('pattern.type') === 'dot' || target.getProps().getPropValue('pattern.type') === 'square';
                    },
                  },
                  {
                    name: 'pattern.cfg.isStagger',
                    title: '是否交错',
                    setter: 'BoolSetter',
                    defaultValue: true,
                    condition: (target) => {
                      return target.getProps().getPropValue('pattern.type') === 'dot' || target.getProps().getPropValue('pattern.type') === 'square';
                    },
                  },
                  {
                    name: 'pattern.cfg.spacing',
                    title: '两条线之间的距离',
                    setter: 'NumberSetter',
                    defaultValue: 5,
                    condition: (target) => {
                      return target.getProps().getPropValue('pattern.type') === 'line';
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'chartComponent',
        type: 'group',
        display: 'accordion',
        title: {
          label: '图表组件',
        },
        items: [
          {
            name: 'legend',
            type: 'group',
            display: 'accordion',
            title: {
              label: '图例',
            },
            items: [
              {
                name: 'legendCfg.enable',
                title: {
                  label: '开启图例',
                  tip: '设置图形的贴图样式',
                },
                setter: 'BoolSetter',
                extraProps: {
                  setValue: (target, value) => {
                    if(value === false) {
                      target.getProps().setPropValue('legend', false);
                    }
                  },
                },
              },
              {
                name: 'legend.layout',
                title: '布局方式',
                condition: (target) => {
                  return target.getProps().getPropValue('legendCfg.enable') === true;
                },
                setter: {
                  componentName: 'RadioGroupSetter',
                  props: {
                    options: [
                      { title: '横向布局', value: 'horizontal' },
                      { title: '纵向布局', value: 'vertical' },
                    ],
                  },
                },
              },
              {
                name: 'legend.position',
                title: '位置',
                condition: (target) => {
                  return target.getProps().getPropValue('legendCfg.enable') === true;
                },
                setter: {
                  componentName: 'RadioGroupSetter',
                  props: {
                    options: [
                      { title: 'top', value: 'top' },
                      { title: 'top-left', value: 'top-left' },
                      { title: 'top-right', value: 'top-right' },
                      { title: 'left', value: 'left' },
                      { title: 'left-top', value: 'left-top' },
                      { title: 'left-bottom', value: 'left-bottom' },
                      { title: 'right', value: 'right' },
                      { title: 'right-top', value: 'right-top' },
                      { title: 'right-bottom', value: 'right-bottom' },
                      { title: 'bottom', value: 'bottom' },
                      { title: 'bottom-left', value: 'bottom-left' },
                      { title: 'bottom-right', value: 'bottom-right' },
                    ],
                  },
                },
              },
              {
                name: 'legend.title',
                title: '标题',
                type: 'group',
                display: 'accordion',
                condition: (target) => {
                  return target.getProps().getPropValue('legendCfg.enable') === true;
                },
                items: [
                  {
                    name: 'legend.title.text',
                    title: '文本',
                    setter: 'StringSetter',
                  }
                ]
              },
            ],
          },
          {
            name: 'xAxis',
            type: 'group',
            display: 'accordion',
            title: {
              label: 'X 轴',
            },
            items: [
              {
                name: 'xAxisCfg.enable',
                title: {
                  label: '显示 X 轴',
                },
                setter: 'BoolSetter',
                extraProps: {
                  setValue: (target, value) => {
                    if(value === false) {
                      target.getProps().setPropValue('xAxis', false);
                    }
                  },
                },
              },
              {
                name: 'xAxis.position',
                title: '位置',
                condition: (target) => {
                  return target.getProps().getPropValue('xAxisCfg.enable') === true;
                },
                setter: {
                  componentName: 'RadioGroupSetter',
                  props: {
                    options: [
                      { title: 'top', value: 'top' },
                      { title: 'bottom', value: 'bottom' },
                      { title: 'left', value: 'left' },
                      { title: 'right', value: 'right' },
                    ],
                  },
                },
              },
              {
                name: 'xAxis.title',
                title: '标题',
                type: 'group',
                display: 'accordion',
                condition: (target) => {
                  return target.getProps().getPropValue('xAxisCfg.enable') === true;
                },
                items: [
                  {
                    name: 'xAxis.title.text',
                    title: '文本',
                    setter: 'StringSetter',
                  },
                  {
                    name: 'xAxis.title.position',
                    title: '位置',
                    setter: {
                      componentName: 'RadioGroupSetter',
                      props: {
                        options: [
                          { title: 'center', value: 'center' },
                          { title: 'start', value: 'start' },
                          { title: 'end', value: 'end' },
                        ],
                      },
                    },
                  },
                ]
              },
            ],
          },
          {
            name: 'yAxis',
            type: 'group',
            display: 'accordion',
            title: {
              label: 'Y 轴',
            },
            items: [
              {
                name: 'yAxisCfg.enable',
                title: {
                  label: '显示 Y 轴',
                },
                setter: 'BoolSetter',
                extraProps: {
                  setValue: (target, value) => {
                    if(value === false) {
                      target.getProps().setPropValue('yAxis', false);
                    }
                  },
                },
              },
              {
                name: 'yAxis.position',
                title: '位置',
                condition: (target) => {
                  return target.getProps().getPropValue('yAxisCfg.enable') === true;
                },
                setter: {
                  componentName: 'RadioGroupSetter',
                  props: {
                    options: [
                      { title: 'top', value: 'top' },
                      { title: 'bottom', value: 'bottom' },
                      { title: 'left', value: 'left' },
                      { title: 'right', value: 'right' },
                    ],
                  },
                },
              },
              {
                name: 'yAxis.title',
                title: '标题',
                type: 'group',
                display: 'accordion',
                condition: (target) => {
                  return target.getProps().getPropValue('yAxisCfg.enable') === true;
                },
                items: [
                  {
                    name: 'yAxis.title.text',
                    title: '文本',
                    setter: 'StringSetter',
                  },
                  {
                    name: 'yAxis.title.position',
                    title: '位置',
                    setter: {
                      componentName: 'RadioGroupSetter',
                      props: {
                        options: [
                          { title: 'center', value: 'center' },
                          { title: 'start', value: 'start' },
                          { title: 'end', value: 'end' },
                        ],
                      },
                    },
                  },
                ]
              },
            ],
          },
          {
            name: 'slider',
            type: 'group',
            display: 'accordion',
            title: {
              label: '缩略轴',
            },
            items: [
              {
                name: 'sliderCfg.enable',
                title: {
                  label: '启用缩略轴',
                },
                setter: 'BoolSetter',
                extraProps: {
                  setValue: (target, value) => {
                    if(value === false) {
                      target.getProps().setPropValue('slider', false);
                    }
                  },
                },
              },
              {
                name: 'slider.start',
                title: '默认起始位置',
                condition: (target) => {
                  return target.getProps().getPropValue('sliderCfg.enable') === true;
                },
                setter: {
                  componentName: 'NumberSetter',
                },
              },
              {
                name: 'slider.end',
                title: '默结束位置',
                condition: (target) => {
                  return target.getProps().getPropValue('sliderCfg.enable') === true;
                },
                setter: {
                  componentName: 'NumberSetter',
                },
              },
              {
                name: 'slider.height',
                title: '高度',
                condition: (target) => {
                  return target.getProps().getPropValue('sliderCfg.enable') === true;
                },
                setter: {
                  componentName: 'NumberSetter',
                },
              },
            ],
          },
        ],
      },
      {
        name: 'chartEvent',
        type: 'group',
        display: 'accordion',
        title: {
          label: '图表事件',
        },
        items: [
          {
            name: 'color',
            title: '颜色',
            setter: 'ColorSetter',
          },
        ],
      },
      {
        name: 'chartMethod',
        type: 'group',
        display: 'accordion',
        title: {
          label: '图表方法',
        },
        items: [
          {
            name: 'color',
            title: '颜色',
            setter: 'ColorSetter',
          },
        ],
      },
      {
        name: 'chartTheme',
        type: 'group',
        display: 'accordion',
        title: {
          label: '图表主题',
        },
        items: [
          {
            name: 'color',
            title: '类型',
            defaultValue: 'normal',
            setter: {
              componentName: 'MixedSetter',
              props: {
                setters: [
                  {
                    componentName: 'RadioGroupSetter',
                    props: {
                      options: [
                        { title: '普通', value: 'normal' },
                        { title: '内联', value: 'inline' },
                      ],
                    },
                  },
                  'ExpressionSetter',
                ],
              },
            },
          }
        ],
      },
      {
        name: 'chartInteraction',
        type: 'group',
        display: 'accordion',
        title: {
          label: '图表交互',
        },
        items: [
          {
            name: 'color',
            title: '颜色',
            setter: 'ColorSetter',
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
            title: '颜色',
            setter: 'ColorSetter',
          },
          {
            name: 'label',
            type: 'group',
            display: 'accordion',
            title: {
              label: '标签',
            },
            items: [
              {
                name: 'label.visible',
                title: '显示',
                setter: 'BoolSetter',
              },
              {
                name: 'label.position',
                title: '位置',
                setter: {
                  componentName: 'RadioGroupSetter',
                  props: {
                    options: [
                      { title: '上', value: 'top' },
                      { title: '中', value: 'middle' },
                      { title: '下', value: 'bottom' },
                    ],
                  },
                },
                condition: (target) => {
                  return !!target.getProps().getPropValue('label.visible');
                },
              },
            ],
          },
        ],
      },
    ].concat(actionConfigure),
  },
};

console.log('ant column chart meta', AntColumnChartMeta)

const snippets: Snippet[] = [
  {
    title: 'AntV柱状图',
    screenshot:
      'https://img.alicdn.com/imgextra/i1/O1CN01mz7siK1JIn9XZmCF6_!!6000000001006-55-tps-56-56.svg',
    schema: {
      componentName: 'AntColumnChart',
      props: {
        data: [
          {
            type: '家具家电',
            sales: 38,
          },
          {
            type: '粮油副食',
            sales: 52,
          },
          {
            type: '生鲜水果',
            sales: 61,
          },
          {
            type: '美容洗护',
            sales: 145,
          },
          {
            type: '母婴用品',
            sales: 48,
          },
          {
            type: '进口食品',
            sales: 38,
          },
          {
            type: '食品饮料',
            sales: 38,
          },
          {
            type: '家庭清洁',
            sales: 38,
          },
        ],
        xField: 'type',
        yField: 'sales',
        color: '#4a90e2',
        legend: {
          // layout: 'horizontal',
          // position: 'right'
        },
        meta: {
          type: {
            alias: '类别',
          },
          sales: {
            alias: '销售额',
          }
        },
      },
    },
  },
];

export default {
  ...AntColumnChartMeta,
  snippets: wrapWithCard(snippets),
};
