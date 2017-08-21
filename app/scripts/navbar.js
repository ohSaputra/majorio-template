/**
 * File navbar.js
 *
 * Handles auto-display hamburger menu
 */

$(document).ready(function() {

    // initialize variable
    var navigation = $('.navigation.overlay');
    var body       = $('body');
    
    $(".hamburger-btn").click(function(){
    
        // change hamburger menu to close button
        $(this).toggleClass("is-active");
        
        // check body has class modal open\
        body.toggleClass('modal-open-clear');
    
        // toggle overlay navigation
        $('.navigation.overlay').fadeToggle(200);
    });

});