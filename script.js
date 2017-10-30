// Stacks intro h1 elements to one another 
jQuery(document).ready(function () {
    window.onscroll = function () {
        var currentPosition = jQuery("#scroll-screen-one").offset();
        var heightCounter = 0;
        var top = "0";

        if (window.pageYOffset >= currentPosition.top) {
            jQuery("#sticky-one").css({ position: 'fixed', top: top });
            heightCounter += jQuery("#sticky-one").height();
            currentPosition = jQuery("#scroll-screen-two").offset();
            top =+ (parseInt(top) + 80).toString();
        }
        if (window.pageYOffset >= currentPosition.top - heightCounter) {
            // console.log('first', 'top: ' + top)
            jQuery("#sticky-two").css({ position: 'fixed', top: top });
            heightCounter += jQuery("#sticky-two").height();
            currentPosition = jQuery("#scroll-screen-three").offset();
            top =+ (parseInt(top) + 80).toString();
        }
        if (window.pageYOffset >= currentPosition.top - heightCounter) {
            jQuery("#sticky-three").css({ position: 'fixed', top: top });
            heightCounter += jQuery("#sticky-three").height();
            currentPosition = jQuery("#scroll-screen-four").offset();
            top =+ (parseInt(top) + 80).toString();
        }
        if (window.pageYOffset >= currentPosition.top - heightCounter) {
            jQuery("#sticky-four").css({ position: 'fixed', top: top });
            heightCounter += jQuery("#sticky-four").height();
            currentPosition = jQuery("#scroll-screen-five").offset();
            top =+ (parseInt(top) + 80).toString();
        } 
        if (window.pageYOffset >= currentPosition.top - heightCounter) {
            jQuery("#sticky-five").css({ position: 'fixed', top: top });
            heightCounter += jQuery("#sticky-five").height();
            currentPosition = jQuery("#scroll-screen-six").offset();
            top =+ (parseInt(top) + 80).toString();
        } 
        if (window.pageYOffset >= currentPosition.top - heightCounter) {
            jQuery("#sticky-six").css({ position: 'fixed', top: top });
            heightCounter += jQuery("#sticky-six").height();
            currentPosition = jQuery("#scroll-screen-seven").offset();
            top =+ (parseInt(top) + 80).toString();
        } 
        if (window.pageYOffset >= currentPosition.top - heightCounter) {
            jQuery("#sticky-seven").css({ position: 'fixed', top: top });
            heightCounter += jQuery("#sticky-seven").height();
            currentPosition = jQuery("#scroll-screen-eight").offset();
            top =+ (parseInt(top) + 80).toString();
        }

        else {
            // jQuery('#sticky-one').css({ position: '', top: '' });
        }
    }
});