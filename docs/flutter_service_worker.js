'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c3318ffe61c336ad1ce56fa6588f789b",
"index.html": "d6f7f9f9d80ac601c2bc977baf5119df",
"/": "d6f7f9f9d80ac601c2bc977baf5119df",
"main.dart.js": "db3aca0d1068a1b2d01fb74bce40c09c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5f257e48d1c6aa6653d05b804937b113",
"assets/AssetManifest.json": "9a014d98e50bbca0a19c279f553608f2",
"assets/NOTICES": "78d542d1ad968ea938464ad4ad71805a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/banner.jpeg": "4cd52deecfc0540ba5feafc2f959d8df",
"assets/assets/images/news/concert.jpeg": "9835c73420b012928c9df7462cb42c06",
"assets/assets/images/news/concert_heart.jpg": "cd982ab501396249dcf152e0dafa0625",
"assets/assets/images/news/recording_studio.jpg": "bd9d567b08da6a755b99bf549c4e6176",
"assets/assets/images/collections/dragonz/dragonz_4.png": "314aaf5303d965dbc1084cee7f26c925",
"assets/assets/images/collections/dragonz/dragonz_10.png": "5e13c553febb266d035e9febe94a367e",
"assets/assets/images/collections/dragonz/dragonz_11.png": "93987fa5c97f0decfb402f9db1a9e13e",
"assets/assets/images/collections/dragonz/dragonz_5.png": "b8e2707082725379ffe058ad088685af",
"assets/assets/images/collections/dragonz/dragonz_7.png": "4836de3e53dce0624160bda9bc4309ce",
"assets/assets/images/collections/dragonz/dragonz_12.png": "378f79986e77f69f7cd13efd64b6c837",
"assets/assets/images/collections/dragonz/dragonz_6.png": "7cd33e6b9b4b73d4570358d46394ea96",
"assets/assets/images/collections/dragonz/dragonz_2.png": "71bb8b83fb331c37839181dd1ad792b4",
"assets/assets/images/collections/dragonz/dragonz_3.png": "f479ca8d01e26e7c2abb2e946926aab9",
"assets/assets/images/collections/dragonz/dragonz_1.png": "ef327b45e1def024397ffab783923e9f",
"assets/assets/images/collections/dragonz/dragonz_8.png": "f0d795aa964bd0c8514ec4b35b934846",
"assets/assets/images/collections/dragonz/dragonz_9.png": "17f7c3af1057d612ff55767eb18d0f70",
"assets/assets/images/collections/boki/boki_6.png": "79456dd7abc98b44137c30195c1fbb46",
"assets/assets/images/collections/boki/boki_7.png": "efb540de5db1fcc65e55937f1304226f",
"assets/assets/images/collections/boki/boki_5.png": "5f89b2a617f232c289d298fd63396037",
"assets/assets/images/collections/boki/boki_4.png": "8d6f5cabd572b003e5c07916f21b5b6a",
"assets/assets/images/collections/boki/boki_1.png": "e1e7817833011277cb2052acc668f73a",
"assets/assets/images/collections/boki/boki_3.png": "541d7fdf3dc65214168bfa4845c92865",
"assets/assets/images/collections/boki/boki_2.png": "333c4460b93bf6e205fcbc1260e6eacb",
"assets/assets/images/collections/boki/boki_11.png": "9308204182a7d851aa729f3ba706810d",
"assets/assets/images/collections/boki/boki_10.png": "8a2b9311f5478e6377f17a8abdd4b0fa",
"assets/assets/images/collections/boki/boki_12.png": "e1e7817833011277cb2052acc668f73a",
"assets/assets/images/collections/boki/boki_9.png": "d200370097858a83a905ea0440da0e51",
"assets/assets/images/collections/boki/boki_8.png": "41232ecc9724f1568368400f8cc43800",
"assets/assets/images/collections/flower/flower_1.png": "3b6e551a9652c3f76309fee938e7ac5e",
"assets/assets/images/collections/flower/flower_3.png": "5307c360c5056346c26795c53235288e",
"assets/assets/images/collections/flower/flower_2.png": "1e34db5392e21a1b18a9218fca686fe8",
"assets/assets/images/collections/flower/flower_10.png": "1cab781a7acc934c786fd4cb130ce06a",
"assets/assets/images/collections/flower/flower_6.png": "df8666754f90003d8f741db68cb4cb01",
"assets/assets/images/collections/flower/flower_7.png": "50ad0e3885fc0a1b9557403824ede9c5",
"assets/assets/images/collections/flower/flower_11.png": "edc615cf36143760b3c712e29f00e967",
"assets/assets/images/collections/flower/flower_5.png": "5b87dbd616c9ab45a5319c67f6c2ddfb",
"assets/assets/images/collections/flower/flower_4.png": "815aeaad3a815e00d10840935a5e2d32",
"assets/assets/images/collections/flower/flower_12.png": "ccb9dc375fa278a3d92341006b3412ac",
"assets/assets/images/collections/flower/flower_9.png": "41f69146d34ca12686ee9cdd38036aa7",
"assets/assets/images/collections/flower/flower_8.png": "7cad1f9bdbccee6087c071edc1fa8a92",
"assets/assets/images/collections/akumu/akumu_8.png": "c9c0d8d5b105ef2cfb8994a0f862de6c",
"assets/assets/images/collections/akumu/akumu_12.png": "e11d655f72cac87e236836d9bc7a4826",
"assets/assets/images/collections/akumu/akumu_9.png": "8c460b9cbcbb6a394c5a4e51198092d5",
"assets/assets/images/collections/akumu/akumu_10.png": "f42cfaadd28f6c71a85a0b730547ba38",
"assets/assets/images/collections/akumu/akumu_11.png": "267c39fa6e9de5597850b55ce835ff05",
"assets/assets/images/collections/akumu/akumu_7.png": "e316d1cd8835f5cfb6c91ce5d3fc1c49",
"assets/assets/images/collections/akumu/akumu_6.png": "126e2b4eb35d4114a323edb0f20bd2de",
"assets/assets/images/collections/akumu/akumu_4.png": "de1c9ee5d2881b1b415eab698831b820",
"assets/assets/images/collections/akumu/akumu_5.png": "1e61295be4c676b1937bff6455ee5ebf",
"assets/assets/images/collections/akumu/akumu_1.png": "e9a8465878a368a81f636c2eefce2462",
"assets/assets/images/collections/akumu/akumu_2.png": "813d3706c564a6ad6c4d74f03f4af860",
"assets/assets/images/collections/akumu/akumu_3.png": "ad80e710537f7f593ff93b10668dbbfd",
"assets/assets/images/collections/bunnies/bunnies_8.png": "7b1ec9a3bc697e299ad1e2e69ff18e3e",
"assets/assets/images/collections/bunnies/bunnies_9.png": "c5d40f18bf08c831a0c68e02b363cc81",
"assets/assets/images/collections/bunnies/bunnies_1.png": "8e157254aa79301232f265c4bc502371",
"assets/assets/images/collections/bunnies/bunnies_12.png": "f846b50b3c92edbb52b1799e787b1136",
"assets/assets/images/collections/bunnies/bunnies_2.png": "9081af1bd56fd10b0d48261b9b24428c",
"assets/assets/images/collections/bunnies/bunnies_10.png": "0e119d213746bb61ec7deb2316dad3f7",
"assets/assets/images/collections/bunnies/bunnies_11.png": "70e5b2d0af0c2c0e8db5b62cf083e84b",
"assets/assets/images/collections/bunnies/bunnies_3.png": "96ab3698cc3b3647becebc4fef106f5c",
"assets/assets/images/collections/bunnies/bunnies_7.png": "56fe6401967c84ab43619ac53a975ff6",
"assets/assets/images/collections/bunnies/bunnies_6.png": "3c2d56350f492955b3937a51ffb37c41",
"assets/assets/images/collections/bunnies/bunnies_4.png": "93b72a73d080dd633c0e9b5374945d1c",
"assets/assets/images/collections/bunnies/bunnies_5.png": "da59d7b6888c4d5233e468e4955ed022",
"assets/assets/images/collections/chums/chums_9.png": "7dcd79de9f2b1fbbb542a0f217d712ce",
"assets/assets/images/collections/chums/chums_8.png": "34fc494c14bc3693322d48925e906ff6",
"assets/assets/images/collections/chums/chums_5.png": "e6d26f320b6150d6dfa7ead3900c7b5b",
"assets/assets/images/collections/chums/chums_4.png": "5840c44afd448694eacdfc6f81e3b2d0",
"assets/assets/images/collections/chums/chums_6.png": "b04dabbc67cb830c111ff26958437188",
"assets/assets/images/collections/chums/chums_7.png": "43647f8d1c420c9856400728a69699e3",
"assets/assets/images/collections/chums/chums_3.png": "eed9fddcd682aa08826802158c32c046",
"assets/assets/images/collections/chums/chums_11.png": "a4ba9fcd1ffd58d1b10ce23bc6dd2d71",
"assets/assets/images/collections/chums/chums_10.png": "016b4ada61ff20c2fdedfa655e5855e2",
"assets/assets/images/collections/chums/chums_2.png": "abbc355d0943b128caac73d707793f0d",
"assets/assets/images/collections/chums/chums_12.png": "7d5d3f524ddb3e367f7fa9b97502834d",
"assets/assets/images/collections/chums/chums_1.png": "ce4e5cf072a72ae98af304f1ecc0e5a7",
"assets/assets/images/collections/quirklings/quirklings_8.png": "60212ffa0904ee918b70d2ce7aa687ae",
"assets/assets/images/collections/quirklings/quirklings_9.png": "f0b457bdbd7bfe8b33ae077a93f47181",
"assets/assets/images/collections/quirklings/quirklings_10.png": "4719941843d7a01bcc3a31b900c51526",
"assets/assets/images/collections/quirklings/quirklings_11.png": "4eb9df5e34eda06d19fbf98cf2afa6f0",
"assets/assets/images/collections/quirklings/quirklings_12.png": "578f290b934f0a8211ec487e4005b7c9",
"assets/assets/images/collections/quirklings/quirklings_7.png": "68b7d7ab6f948935d9b41fae072051df",
"assets/assets/images/collections/quirklings/quirklings_6.png": "c88604a422feb46e4c823e1630911f4e",
"assets/assets/images/collections/quirklings/quirklings_4.png": "4650be1a5eb74e4f37e56bf6edd9958b",
"assets/assets/images/collections/quirklings/quirklings_5.png": "9134857e7751225eb8e8801f67569bce",
"assets/assets/images/collections/quirklings/quirklings_1.png": "be2bd940b89ec048de6d88b3d6a028e7",
"assets/assets/images/collections/quirklings/quirklings_2.png": "db9551188a96ecc29c1b2002a1e7b37d",
"assets/assets/images/collections/quirklings/quirklings_3.png": "23cc91001983a380a3455e72e207d575",
"assets/assets/images/collections/cheebs/cheebs_8.png": "173cbf9d097999e6b1fa737e5c0a405a",
"assets/assets/images/collections/cheebs/cheebs_9.png": "ddc8de79676f8a73d295623a420e9133",
"assets/assets/images/collections/cheebs/cheebs_1.png": "067cb8c40e760a30492bb0b0ab082d3a",
"assets/assets/images/collections/cheebs/cheebs_2.png": "a819f93e047da00bc5c220d471533f37",
"assets/assets/images/collections/cheebs/cheebs_3.png": "c5e677a8266bea9f356093fec9f9020b",
"assets/assets/images/collections/cheebs/cheebs_7.png": "a1a4585db2af6b79a7b55ebddcd9d576",
"assets/assets/images/collections/cheebs/cheebs_6.png": "d32867b52cc79648fa908466d5393c4d",
"assets/assets/images/collections/cheebs/cheebs_12.png": "e41635a3ae2bd61e22126e671a5d4d66",
"assets/assets/images/collections/cheebs/cheebs_10.png": "c21d76e369dd8c11cb110c7eff660f1b",
"assets/assets/images/collections/cheebs/cheebs_4.png": "efc0c6bdc51700977282caa49707d468",
"assets/assets/images/collections/cheebs/cheebs_11.png": "8712863d5ed45cae8e7712ea76833140",
"assets/assets/images/collections/cheebs/cheebs_5.png": "c43a6a21c1a57ef262b9653e6349a726"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
