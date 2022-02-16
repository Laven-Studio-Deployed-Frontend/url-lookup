'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f5c3e5b07a49e6903ef287d07296c5b7",
"index.html": "d2fbfa5c6b29f2a94d092089d264c7fc",
"/": "d2fbfa5c6b29f2a94d092089d264c7fc",
"main.dart.js": "2178538357b6221a4666e3d8c7b4a53e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9fe1bde885ee95175428cb55c9cc4b8c",
".git/config": "9963d0b8cc33529677ab1d7ef41f62d1",
".git/objects/03/2c98e52568040bd3d19092f6ee43696597110c": "fcca0d863e35e34756c91f46f1cacf3a",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/69/f981c05d7b7089d3e4711f53e504b759b43a29": "4adfb698ce6145588ba4c6366240285b",
".git/objects/93/bb3df49dc2ee9cf2b0dabc9c83f93086240b5d": "8522dadf132213e5219c0d67fe6615aa",
".git/objects/94/1d7969ba87c6f5b6bff3868e7640738b3cad97": "db676ed451bd47e0822a9bf6e933cbce",
".git/objects/b3/dff103f352382c6b43c82daa34a80d7c523e76": "eefdbcaccae5662eda611792c3f9396f",
".git/objects/b3/b23fc2b08e01d2ee295135c32e006f3a3c4933": "d21cca8fde82e70405a4893ce85c62ac",
".git/objects/b4/92584a9acc4bc8fd37339cda8b50740f0fe66f": "7859fb9a6039d71f46cb0e9916964f97",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/8578c7165be592583f6dcb0478d540b546f12a": "66cdc7ba45533eca6cef88e811851684",
".git/objects/fb/27b019d6b0cf7e41c4f63b44e0fa7cd17347e8": "e5c012e856413b22ea9e77b9f22babe1",
".git/objects/c1/3fa417e4c43671c4c08027167317217cdeb016": "bc9318bcf7673823b33d8039bcf391bd",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/1f/17e95b3469e23139ea6f74004ab2f79ab5564f": "01f48f91e2f2ba33f7e1dfecd7a9fa80",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/2a/4e83ce43c81bc38dbd49efcb83a2d57b0af910": "287b8f9d445580ce233add1194fca9ab",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/4a7d63346c4a8d289537f487cda6a8830361a2": "848929637eeb1f2cadd9d669c51980ff",
".git/objects/6b/0e4b65eb6ae87c6d3e1251c70718c2512ee8a3": "a6696b310b8d7a4f6e292b2937dda15d",
".git/objects/09/a69a9cf02a812a300e76a7cfc683faf2c69a5b": "a2a077582d5a069ae1de623bd20d150f",
".git/objects/b8/e3e76705b9335610fa57f8106642cab1c18676": "d790f35693037a5537e3bbad8f0f6d76",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/d1174049ac507bdb474e6af87364ebe97a93f7": "fef1aad0e3dfe6fde524d619059746f3",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/c7babee93340fb58c1fd5961ce42262764f2f7": "d5219ed7267fd19e04b91a018f7880d2",
".git/objects/e6/25f3531562f5e6cff5cdb27a3403b3eeb6a3cb": "fae7b8617c6d08f4c19e42628111851d",
".git/objects/ff/4285f285c340f9c38cc246d469295b4f68818a": "36c42087ef7ecca0b398c58f72bb3563",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/40f0450916a3d616aefa612aa6533946e1c87a": "d66e5bc71248766a5281ceb78a3c98bf",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/057cbc50e9e2083ac73061ba34bb6094be7b13": "96d562a711cc965483fbd244f711f8d8",
".git/objects/4a/f2381503b30688dc8300769bf33c86eeabbad0": "2a7770e68dc08e05cd2b352ac5ea9926",
".git/objects/12/fe546444eeeaf3c9653697f52a44a3ddb0b1dc": "847a012d73434360de54fa72ed13979b",
".git/objects/1d/ef532209b1de09b760790c622bd5e37beff09e": "04ae1f5f2c6c45eb493dd02a2fd400ca",
".git/objects/8b/dc61993eaa20c17eabe27369762c8c4c9a0565": "51d998eaf9f54d97d3911b9ec60bb1df",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0c73abafb07b7bd97582fb8b6addbdc5",
".git/logs/refs/heads/main": "f6e5a6be3c26d4b9a068cb4580d45b76",
".git/logs/refs/remotes/origin/main": "b145e1f4afccd1ad2d653b92a9dc81c6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2997bb102c2d9a2d9acbca6663d5380d",
".git/refs/remotes/origin/main": "2997bb102c2d9a2d9acbca6663d5380d",
".git/index": "75ddcab6d8d82a4a06f9606ed235b26f",
".git/COMMIT_EDITMSG": "b7f0a2ab8b9bdb73d0510e356b8927af",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "775baf79ab43a186c64d147546e23439",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
