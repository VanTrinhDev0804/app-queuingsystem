

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
              '@menu-item-color': '#7E7D88',
              '@menu-item-active-bg': '#FF7506',
              '@menu-item-font-size': 'Nunito',
              '@menu-item-active-color': '#ffff',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};