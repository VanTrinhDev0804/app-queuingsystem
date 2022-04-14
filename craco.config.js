

const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#FF7506',
              '@menu-item-active-bg': '#FF7506',
              '@menu-item-font-size': 'Nunito',
              '@layout-header-background': '#FFFFF',
              '@layout-sider-background': '#FFFFF'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};