(function($) {

  TweenMax.to($('#myPicture'), 6, {ease:Bounce.easeOut, rotationY:360, transformPerspective:1600, transformOrigin:"50% 50%"});

  $('.hoverShadow').hover(function(){
    TweenMax.to($(this), 0.5, {opacity:.9, textShadow:"2px 2px 1 #FAFAFA"});
    TweenMax.to($(this), 0.5, {opacity:1, textShadow:"none", delay:0.5});
  });

})(jQuery);