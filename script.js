// Stacks intro h1 elements to one another 
jQuery(document).ready(function () {
    window.onscroll = function () {
        var positionOne = jQuery("#scroll-screen-one").offset();
        var positionTwo = jQuery("#scroll-screen-two").offset();
        var positionThree = jQuery("#scroll-screen-three").offset();
        var positionFour = jQuery("#scroll-screen-four").offset();
        var positionFive = jQuery("#scroll-screen-five").offset();
        var positionSix = jQuery("#scroll-screen-six").offset();
        var positionSeven = jQuery("#scroll-screen-seven").offset();
        var heightCounter = 0;

        if (window.pageYOffset >= positionOne.top) {
            jQuery("#sticky-one").css({ position: 'fixed', top: '0' });
            heightCounter += jQuery("#sticky-one").height();
        }
        if (window.pageYOffset >= positionTwo.top - heightCounter) {
            jQuery("#sticky-two").css({ position: 'fixed', top: '80px' });
            heightCounter += jQuery("#sticky-two").height();
        }
        if (window.pageYOffset >= positionThree.top - heightCounter) {
            jQuery("#sticky-three").css({ position: 'fixed', top: '160px' });
            heightCounter += jQuery("#sticky-three").height();
        }
        if (window.pageYOffset >= positionFour.top - heightCounter) {
            jQuery("#sticky-four").css({ position: 'fixed', top: '240px' });
            heightCounter += jQuery("#sticky-four").height();
        } 
        if (window.pageYOffset >= positionFive.top - heightCounter) {
            jQuery("#sticky-five").css({ position: 'fixed', top: '320px' });
            heightCounter += jQuery("#sticky-five").height();
        } 
        if (window.pageYOffset >= positionSix.top - heightCounter) {
            jQuery("#sticky-six").css({ position: 'fixed', top: '400px' });
            heightCounter += jQuery("#sticky-six").height();
        } 
        if (window.pageYOffset >= positionSeven.top - heightCounter) {
            jQuery("#sticky-seven").css({ position: 'fixed', top: '480px' });
            heightCounter += jQuery("#sticky-seven").height();
        }

        else {
            // jQuery('#sticky-one').css({ position: '', top: '' });
        }
    }
});