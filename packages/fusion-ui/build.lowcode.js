const { library } = require('./build.json');
const { version, name } = require('./package.json');

module.exports = {
  sourceMap: false,
  alias: {
    '@': './src',
    '@alifd/fusion-ui': './src',
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        noParse: true,
        renderUrls: [
          `https://alifd.alicdn.com/npm/${name}@${version}/dist/${library}.js`,
          `https://alifd.alicdn.com/npm/${name}@${version}/dist/${library}.css`,
        ],
        baseUrl: {
          prod: `https://alifd.alicdn.com/npm/${name}@${version}`,
          daily: `https://alifd.alicdn.com/npm/${name}@${version}`,
        },
        engineScope: '@alilc',
        // builtinAssets: [
        //   {
        //     packages: [
        //       {
        //         package: '@ant-design/icons',
        //         version: '4.5.0',
        //         urls: [
        //           'https://g.alicdn.com/code/npm/@ali/ant-design-icons-cdn/4.5.0/index.umd.min.js',
        //         ],
        //         library: 'icons',
        //       },
        //       {
        //         package: 'antd',
        //         version: '4.19.5',
        //         urls: [
        //           'https//g.alicdn.com/code/lib/antd/4.19.5/antd.min.js',
        //           'https//g.alicdn.com/code/lib/antd/4.19.5/antd.min.css',
        //         ],
        //         library: 'antd',
        //       },
        //     ],
        //     components: [],
        //   },
        // ],
      },
    ],
    [
      'build-plugin-fusion',
      {
        uniteBaseComponent: '@alifd/next',
        cssVariable: true,
        importOptions: {
          libraryDirectory: 'lib',
        },
      },
    ],
    [
      '@alilc/build-plugin-alt',
      {
        type: 'component',
        inject: true,
        library,
        // 配置要打开的页面，在注入调试模式下，不配置此项的话不会打开浏览器
        // 支持直接使用官方 demo 项目：https://lowcode-engine.cn/demo/index.html
        openUrl: 'http://192.168.100.38:3334/?debug',
      },
    ],
  ],
};
