/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/YYPcyY
 */

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.6/workbox-sw.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "assets/imgs/stencil-badge.svg",
    "revision": "170aa67a4ebc2cc14b48bb9ebf6535db"
  },
  {
    "url": "build/present-it.js",
    "revision": "fdc763190c29e49446a02207e1ea6c2b"
  },
  {
    "url": "build/present-it/97erpd8g.es5.js",
    "revision": "551a97badff7fc1beafde448ee46127a"
  },
  {
    "url": "build/present-it/97erpd8g.js",
    "revision": "8844ccdc25b6fdaf70966aa0a8d7c5c0"
  },
  {
    "url": "build/present-it/97erpd8g.sc.es5.js",
    "revision": "3d355d9fcb6fe0bbdcab3893df420926"
  },
  {
    "url": "build/present-it/97erpd8g.sc.js",
    "revision": "85e0dac453e7c53b8dfbcf08c2258d69"
  },
  {
    "url": "build/present-it/bnfkf1gl.es5.js",
    "revision": "52cb7bc2cf1992148815ec109d4c5591"
  },
  {
    "url": "build/present-it/bnfkf1gl.js",
    "revision": "aacc3d927ee0aa1cca31a98e5a704206"
  },
  {
    "url": "build/present-it/chunk1.es5.js",
    "revision": "74e6d62b6fd974fb98e608ee5c6eb6c5"
  },
  {
    "url": "build/present-it/chunk1.js",
    "revision": "8d217f3ea1a0b44aa25cede28a022a90"
  },
  {
    "url": "build/present-it/chunk2.es5.js",
    "revision": "59341fa56de0dc79e6a25d175da95362"
  },
  {
    "url": "build/present-it/chunk2.js",
    "revision": "936501eda21051a4698c97448130910c"
  },
  {
    "url": "build/present-it/jkldojkl.es5.js",
    "revision": "ea15d1ec20218b1bd1e1435bb1817fe2"
  },
  {
    "url": "build/present-it/jkldojkl.js",
    "revision": "337cb1ad1eaf105ba768a16e3ec07f64"
  },
  {
    "url": "build/present-it/p9gapr44.es5.js",
    "revision": "440d3146763d112fdd2dc623ade04b6e"
  },
  {
    "url": "build/present-it/p9gapr44.js",
    "revision": "f108f08a99c2658a9dd3cd3ecdf09702"
  },
  {
    "url": "build/present-it/p9gapr44.sc.es5.js",
    "revision": "d9bcf6d84e62985a2e6d35c683078833"
  },
  {
    "url": "build/present-it/p9gapr44.sc.js",
    "revision": "c497f790f496dad2f01c49fb607f29bc"
  },
  {
    "url": "build/present-it/present-it.7r4rrimo.js",
    "revision": "00afc491d10eff6cedc0069f86a2b574"
  },
  {
    "url": "build/present-it/present-it.obif2ohr.js",
    "revision": "b8f5d3456f0b10151a2e916d3035f618"
  },
  {
    "url": "index.html",
    "revision": "e563d4b66fcb70348c3fe6ce3d555ab9"
  },
  {
    "url": "manifest.json",
    "revision": "b3c6884df424f5618252977f9f35fd3c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
