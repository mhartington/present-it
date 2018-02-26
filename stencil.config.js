const sass = require('@stencil/sass');
const postcss = require('@stencil/postcss');
const autoprefixer = require('autoprefixer');

exports.config = {
  namespace: 'present-it',
  generateDistribution: true,
  serviceWorker: false,
  plugins: [
    sass(),
    postcss({
      plugins: [
        autoprefixer({
          browsers: [
            'last 2 versions',
            'iOS >= 8',
            'Android >= 4.4',
            'Explorer >= 11',
            'ExplorerMobile >= 11'
          ],
          cascade: false
        })
      ]
    })
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
