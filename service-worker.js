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
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "e7474aa1591c5ac3f83d4701c2a0ddb8"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.a85cde38.css",
    "revision": "2a8ef1bf253e30fa2721e460e6f8888e"
  },
  {
    "url": "assets/img/already_exists.c23072b0.png",
    "revision": "c23072b03e8e03ddfc71887cd2a6b0a7"
  },
  {
    "url": "assets/img/changed_name.fdcfdd76.png",
    "revision": "fdcfdd7680eb43df12708a28c9caffdb"
  },
  {
    "url": "assets/img/deleted_user.a8ab812f.png",
    "revision": "a8ab812f0101ca3c36abe8a929ca2316"
  },
  {
    "url": "assets/img/diagram.46a9e59a.png",
    "revision": "46a9e59a13feed862bdcbb267932cecb"
  },
  {
    "url": "assets/img/get_all.bce8e48d.png",
    "revision": "bce8e48d77a185754c649a19bb7c022c"
  },
  {
    "url": "assets/img/get_one.782aad52.png",
    "revision": "782aad520eba8a7e744e2bf39d16477d"
  },
  {
    "url": "assets/img/post_user.c35a648c.png",
    "revision": "c35a648c87e46aaaa0e95403782b7e19"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/table_info.f9419ffe.png",
    "revision": "f9419ffef2489b8cbc3718f5f657d6f6"
  },
  {
    "url": "assets/js/10.c2d6dd61.js",
    "revision": "8f4057e904de8901a9080ca2e7942b29"
  },
  {
    "url": "assets/js/11.fd9be4ef.js",
    "revision": "a98c523653e004b192d9477026ccd9e5"
  },
  {
    "url": "assets/js/12.c1d64cde.js",
    "revision": "423728ab885fd31ebf6d69834ae9cd1c"
  },
  {
    "url": "assets/js/13.1599503e.js",
    "revision": "64d1b68468fe7da642c82b2fd5c9d487"
  },
  {
    "url": "assets/js/14.4c864c5e.js",
    "revision": "247ab6962c40c076a8240f8512296f87"
  },
  {
    "url": "assets/js/15.9c6bcc86.js",
    "revision": "b0f69eb1e82c25a6e39404b17100d6bf"
  },
  {
    "url": "assets/js/16.e35a6dc4.js",
    "revision": "f732684eaab501586c368a3ad236eeb0"
  },
  {
    "url": "assets/js/17.eadd348f.js",
    "revision": "36edb1bdf859889a89e7888e65e8392f"
  },
  {
    "url": "assets/js/18.670e502e.js",
    "revision": "b25d205f58dfffd8bcfb04d3681632d4"
  },
  {
    "url": "assets/js/19.906ba924.js",
    "revision": "46a40a568c552b3ce879c60f351457c8"
  },
  {
    "url": "assets/js/2.40612ad4.js",
    "revision": "63318108ce286da836d2a38584f50182"
  },
  {
    "url": "assets/js/20.b41fdaa3.js",
    "revision": "a5e46ced8cb3c954fe4e2e9e0744fa30"
  },
  {
    "url": "assets/js/21.7cbaae6c.js",
    "revision": "d27079cdbbd24ef266c2c9546499d559"
  },
  {
    "url": "assets/js/22.4500a7db.js",
    "revision": "47901d2103fc05e3df6721e0193f24ce"
  },
  {
    "url": "assets/js/23.ced03a77.js",
    "revision": "4ef754a09a1c6a49b88b717a5a12a519"
  },
  {
    "url": "assets/js/24.34ecc27b.js",
    "revision": "850f8e4348e82796f0ceb368ce434eb1"
  },
  {
    "url": "assets/js/26.f5424b81.js",
    "revision": "24923da10b396b1a8796fc5698e01360"
  },
  {
    "url": "assets/js/3.aec4544b.js",
    "revision": "f04b97520e52dca49f77b53220ddff40"
  },
  {
    "url": "assets/js/4.c00382d6.js",
    "revision": "0aaaea3e6e9e90f8774eb11940557cdf"
  },
  {
    "url": "assets/js/5.22a8c3cd.js",
    "revision": "859d0d25ceb8cd189fa6450460efe1db"
  },
  {
    "url": "assets/js/6.6cd70278.js",
    "revision": "7a8e773b0b2158f77779ca991c47cef5"
  },
  {
    "url": "assets/js/7.c0467edb.js",
    "revision": "f02ea9f667d8a109d1a08873f5350441"
  },
  {
    "url": "assets/js/8.18d20163.js",
    "revision": "06260b4320d12135315dd551c1e4658c"
  },
  {
    "url": "assets/js/9.2e26f8b0.js",
    "revision": "ca1ee0f65168061be63e2ceaea08d5f3"
  },
  {
    "url": "assets/js/app.257fee67.js",
    "revision": "19088c0c78d058f085b4fcfbf6eef1c1"
  },
  {
    "url": "conclusion/index.html",
    "revision": "2147c08b218f3e78fe269c2a8cde0c20"
  },
  {
    "url": "design/index.html",
    "revision": "c8ee5d858d675701a6c5897eb0faf881"
  },
  {
    "url": "index.html",
    "revision": "ef8d21f6326bdafa63671dfe1fa551a4"
  },
  {
    "url": "intro/index.html",
    "revision": "45e6b94746d1bc0fe1c12d24b9afd803"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "912feb92b1f728204c8d316fd934ef8b"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "1ccfc34b309c7d1293b3fd1693dc26a4"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "e20345101d19602c510cd4dc7b6748a6"
  },
  {
    "url": "software/index.html",
    "revision": "4d26262e8b29422efa6f147f66217441"
  },
  {
    "url": "test/index.html",
    "revision": "9da6f2cd28f9cc29e316bdad41a8592f"
  },
  {
    "url": "use cases/index.html",
    "revision": "57f4a7f3de32da667b67e4a773a9e4eb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
