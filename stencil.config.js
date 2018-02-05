exports.config = {
  bundles: [
    { components: ['reveal-deck', 'reveal-slide'] }
  ],
  collections: [
    // { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**',
};
