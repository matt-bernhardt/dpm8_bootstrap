/**
 * @file
 * Filter the timeline display based on a year slider.
 */

var Drupal = Drupal || {};

(function ($) {
  "use strict";

  $( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 1700,
      max: 2018,
      values: [ 1700, 2018 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
      },
      change: function( event, ui ) {
        $( '.timeline-year' ).hide();
        $( '.timeline-year' ).each( function() {
          var val = $( this ).data( 'year' );
          if( val >= ui.values[ 0 ] && val <= ui.values[ 1 ] ) {
            $( this ).show();
          }
        });

      }
    });
    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) +
      " - " + $( "#slider-range" ).slider( "values", 1 ) );
  } );

})(window.jQuery);
