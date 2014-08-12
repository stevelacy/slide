$(document).ready(function(){

  var images = [];
  var template = '<div class="dz-preview dz-file-preview"><div class="dz-details"><div class="dz-remove">X</div><img data-dz-thumbnail /></div></div>';

  $(".file").dropzone({
    url: "#",
    maxFilesize: 3,
    dictResponseError: '',
    previewContainer: '.file .previews',
    previewTemplate: template,
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
    $('.controls').fadeIn();
    slide();
  });
  $('.controls').click(function(){
    $('.shadow').fadeToggle();
    $('.dz-message').fadeToggle().html('Drop images here to add');
  });
});
