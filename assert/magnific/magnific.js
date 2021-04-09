$(document).ready(function () {
  $('#current-center').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      // options for gallery
      enabled: true
    }
    // other options
  });

});
