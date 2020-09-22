// preloading remove and fadeout from dom 
$(document).ready(function(){
    $('.spinner').fadeOut(function()
    {
        $(".main-spinner").fadeOut(1000 , function()
        {
            this.remove();
        })
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dotsEach:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    

})
$(function() {
    $('#vidBox').VideoPopUp({
        opener: "trigger",
        // video ID
        idvideo: "example",
        pausevideo : true
    });

});

/*-------------------------------------------------------------------------------------------*/