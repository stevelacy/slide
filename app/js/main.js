$(document).ready(function(){
  var fs = require('fs');
  var path = require('path');

  $.adaptiveBackground.run();

  var images = [];

  $(".file").dropzone({
    url: "#",
    maxFilesize: 6,
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

  $('.go').click(function(){
    $('.shadow').fadeOut();
    images.forEach(function(v, k){
      $('.images').append('<img src="' +v+ '" class="image">');
    });
  });

});
