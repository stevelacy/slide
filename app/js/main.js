$(document).ready(function(){
  var path = require('path');
  $('.message').html(process.version);
  console.log(path);
  $.adaptiveBackground.run();

  var images = [];

  $(".file").dropzone({
    url: "#",
    maxFilesize: 6,
    dictResponseError: '',
    accept: function(file, done) {
      console.log(file.path);
      images.push(file.path);
      done("nope");
    }
  });

  $('.go').click(function(){
    $('.message').html(images);
    console.log(images);
  });

});
