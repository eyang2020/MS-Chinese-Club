var galleryFeed = new Instafeed({
  get: "user",
  userId: '8384641239',
  accessToken: "8384641239.1677ed0.20dbcd5f947d4528aa93f2b247312033",
  resolution: "standard_resolution",
  useHttp: "true",
  limit: 6,
  template: '<div class="col-xs-12 col-sm-6 col-md-4"><a href="{{image}}"><div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><p class="caption">{{caption}}</p><span class="likes"><ion-icon name="heart"></ion-icon> {{likes}}</span><span class="comments"><ion-icon name="chatbubbles"></ion-icon> {{comments}}</span></div><img src="{{image}}" class="img-responsive"></div></a></div>',
  target: "instafeed-gallery-feed",
  after: function() {
    // disable button if no more results to load
    if (!this.hasNext()) {
      btnInstafeedLoad.setAttribute('disabled', 'disabled');
    }
  },
});
galleryFeed.run();

var btnInstafeedLoad = document.getElementById("btn-instafeed-load");
btnInstafeedLoad.addEventListener("click", function() {
  galleryFeed.next()
});