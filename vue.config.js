module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/global.scss";
        `,
      },
    },
  },
  pwa: {
    name: 'Netshoes Cart',
    themeColor: '#000000',
    msTileColor: '#000000',
    // configure the manifest options
    manifestOptions: {
      display: 'standalone',
      background_color: '#000000',
      orientation: 'portrait',
    },
  },
};
