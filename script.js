// Stacks intro h1 elements to one another 
jQuery(document).ready(function () {
    window.onscroll = function () {
        var positionOne = jQuery("#scroll-screen-one").offset();
        var positionTwo = jQuery("#scroll-screen-two").offset();
        var positionThree = jQuery("#scroll-screen-three").offset();
        var positionFour = jQuery("#scroll-screen-four").offset();

        if (window.pageYOffset >= positionOne.top) {
            jQuery("#sticky-one").css({ position: 'fixed', top: '0' });
        }
        if (window.pageYOffset >= positionTwo.top - jQuery("#sticky-one").height()) {
            jQuery("#sticky-two").css({ position: 'fixed', top: '80px' });
        }
        if (window.pageYOffset >= positionThree.top - (jQuery("#sticky-two").height() + jQuery("#sticky-two").height())) {
            jQuery("#sticky-three").css({ position: 'fixed', top: '160px' });
        }
        if (window.pageYOffset >= positionFour.top - (jQuery("#sticky-two").height() + jQuery("#sticky-two").height() + jQuery("#sticky-three").height())) {
            jQuery("#sticky-four").css({ position: 'fixed', top: '240px' });
        }

        else {
            jQuery('.col-right').css({ position: '', top: '' });
        }
    }
});