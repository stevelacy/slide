$(document).ready(function(){
  var fs = require('fs');
  var path = require('path');

  var images = [];

  $(".file").dropzone({
    url: "#",
    maxFilesize: 3,
    dictResponseError: '',
    previewContainer: '.file .previews',
    accept: function(file, done){
      console.log(file.path);
      images.push(file.path);
      done("nope");
    },
    init: function(){
      this.on('addedfile', function(file){
        $('.dz-message').fadeOut();
        $('.go').fadeIn();
      });
    }
  });

  var slide = function(){
    $.each(images, function(k, v){
      var el = $('.images');
      var pre = $('.pre-img');
      setTimeout(function(){
        if (el.is(':visible')){
          el.fadeOut(500);
        }
        pre.html('<img src="' +v+ '" class="image" data-adaptive-background="1">');
        $.adaptiveBackground.run();
        pre.on('ab-color-found', function(e, payload){
          el.html('<img src="' +v+ '" class="image">').css({
            background: payload.color
          }).fadeIn(500);
        });
      }, 4000 * k);
    });
  };

  $('.go').click(function(){
    $('.shadow').fadeOut();
    slide();
  });
});
