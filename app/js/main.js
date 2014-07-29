$(document).ready(function(){
  var fs = require('fs');
  var path = require('path');

  $.adaptiveBackground.run();

  var images = [];

  $(".file").dropzone({
    url: "#",
    maxFilesize: 6,
    dictResponseError: '',
    accept: function(file, done){
      console.log(file.path);
      images.push(file.path);
      done("nope");
    },
    init: function(){
      this.on('addedfile', function(file){
        console.log(this);
        $('.dz .message').fadeOut();
      });
    }
  });

  $('.go').click(function(){
    $('.message').html(images);
    console.log(images);
    images.forEach(function(v, k){
      $('.images').append('<img src="' +v+ '" class="image">');
    });
  });

});
