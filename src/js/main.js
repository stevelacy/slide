$(document).ready(function(){
  var path = require('path');
  $('.message').html(process.version);
  console.log(path);
  $.adaptiveBackground.run();
});
