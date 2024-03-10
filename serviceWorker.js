const staticDevWillyeDodo = "dev-Willy-e-Dodo-v2"
const assets = [
  "/",
  "/index.html",
  "/belli.html",
  "/cioti.html",
  "/innamorati.html",
  "/giochino.html",
  "/style.css",
  "/script.js",
  "/server.js",
  "/belli1-min.jpg",
  "/belli2-min.jpg",
  "/belli3-min.jpg",
  "/belli4-min.jpg",
  "/belli5-min.jpg",
  "/belli6-min.jpg",
  "/belli7-min.jpg",
  "/belli8-min.jpg",
  "/belli9-min.jpg",
  "/belli10-min.jpg",
  "/belli11-min.jpg",
  "/cioti1-min.jpg",
  "/cioti2-min.jpg",
  "/cioti3-min.jpg",
  "/cioti4-min.jpg",
  "/cioti5-min.jpg",
  "/cioti6-min.jpg",
  "/cioti7-min.jpg",
  "/innamorati1-min.jpg",
  "/innamorati2-min.jpg",
  "/innamorati3-min.jpg",
  "/innamorati4-min.jpg",
  "/innamorati5-min.jpg",
  "/innamorati6-min.jpg",
  "/innamorati7-min.jpg",
  "/innamorati8-min.jpg",
  "/innamorati9-min.jpg",
  "/innamorati10-min.jpg",
  "/innamorati11-min.jpg",
  "/Catboo.ttf"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevWillyeDodo).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })