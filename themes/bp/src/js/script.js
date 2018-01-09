(function ($, window, jQuery, document, undefined) {

  'use strict';

  $(document).ready(function() {
    // var controller = new ScrollMagic.Controller();
    // $('img').lazyload({
    //   effect : "fadeIn"
    // });
    // alert('sup');

    // Init ScrollMagic Controller

    var scrollMagicController = new ScrollMagic.Controller();


    //animation for each timeline item
    $('.view-timeline .views-row').each(function(){
      var $timelineItem = this;

      // Create Animation for 0.5s
      var tween = TweenMax.to($timelineItem, 0.5, {css:{className:'+=show-item'}});;

      // Create the Scene and trigger when visible
      var scene = new ScrollMagic.Scene({
        triggerElement: $timelineItem,
        offset: -100 /* offset the trigger 150px below #scene's top */
      })
      .setTween(tween)
      .addTo(scrollMagicController);

      // Add debug indicators fixed on right side
       // scene.addIndicators();
    });
    console.log('ready for action');
  });

})(jQuery, this, this.document);
