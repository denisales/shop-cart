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
    name: 'Shop Cart',
    themeColor: '#000000',
    msTileColor: '#000000',
    iconPaths: {
      favicon32: null,
      favicon16: null,
      appleTouchIcon: null,
      maskIcon: null,
      msTileImage: null,
    },
    // configure the manifest options
    manifestOptions: {
      display: 'standalone',
      background_color: '#000000',
      orientation: 'portrait',
      icons: [
        {
          src: 'img/icons/android-chrome-72x72.png',
          sizes: '72x72',
          type: 'image/png',
        },
        {
          src: 'img/icons/android-chrome-96x96.png',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          src: 'img/icons/android-chrome-144x144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: 'img/icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'img/icons/android-chrome-192x192-maskable.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: 'img/icons/android-chrome-384x384.png',
          sizes: '384x384',
          type: 'image/png',
        },
        {
          src: 'img/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'img/icons/android-chrome-512x512-maskable.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      exclude: [/\.map$/, /_redirects/],
    },
  },
};
