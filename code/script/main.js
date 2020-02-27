$(function () {
    var count_one = 0;
    
    // >>>>>>>>>>>>>>>>>>>>>>
    scrollTop();    // Refresh btn make scroll to top
    var elm = ".container";

    $(elm).each(function (index) {
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;

            // if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            }
            else if (event.detail){
                delta = -event.detail / 3;
            }
                
            var moveTop = $(window).scrollTop();    // scrollbar top point
            var elmSelecter = $(elm).eq(index);
            var scrollBottom = $("body").height() - ($(window).height() + $(window).scrollTop());   // scrollbar bottom point
            var lastP = 0;
    
            if (delta < 0) {
                if (elmSelecter.next() != undefined) {
                    try {
                        // (Move)Mouse wheel up to down
                        moveTop = $(elmSelecter).next().offset().top;

                        // (about) About page animation
                        if($(elm).eq(index).next().hasClass("container_about")){
                            $(elm).eq(index).next().find(".base .gauge").addClass("on");
                            if(count_one == 0)
                                counter();                           
                        }                        
                        
                        // (Contact)Next page is last page
                        var nextH = $(elmSelecter).next().height();
                        var lastH = $(elm).last().height();
                        if( nextH == lastH)
                            lastP = 1;

                    } catch (e) { }
                }
            } else {
                // Mouse wheel down to up
                if (elmSelecter.prev() != undefined) {
                    try {
                        if(scrollBottom < 10){
                            // (Contact)Next page is last page
                            moveTop = $(elmSelecter).offset().top;
                            lastP = 0;
                        }
                        else{
                            // (Move)Mouse wheel up to down
                            moveTop = $(elmSelecter).prev().offset().top;
                        }
                    } catch (e) { }
                }
            }

            // View move
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 800, complete: function () {
                }
            });

            // Control Opacity
            if(lastP == 1){
                Control_off(true,$(elm).eq(index).children(".contents"));
                Disable_aTag(true,$(".btn_left"),$(".btn_right"));
            }else{
                Control_off(false,$(elm).eq(index).children(".contents"));
                Disable_aTag(false,$(".btn_left"),$(".btn_right"));
            }
        });
    });
})

// Add class to class Bundle
function Control_off(off,...classBundle){
    for(var _class of classBundle){
        if(off == true){
            _class.addClass("off");
        }else{
            _class.removeClass("off")
        }
    }
}

// Disable to aTags
function Disable_aTag(onoff,...aTags){
    for(var aTag of aTags){
        if(onoff == true){
            aTag.addClass("off");
        }else{
            aTag.removeClass("off");
        }  
    }
}

// Refresh make to top of view
function scrollTop(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
}

// number counter up
function counter(){
    // ...numBundle
    // for(var num in numBundle){
    //     // 1. Input gauge status 
    //     // 2. Check status a short time
    //     // 3. that number to make html text
    //     // 4. Only one operation
    // }
    var frame = 100,
        duration = $(".html .base .gauge").css("transition-duration"),
        delay = $(".html .base .gauge").css("transition-delay"),
        gauge = $(".html .base .gauge .percent > span").value;
    duration = duration.match(/(\d+)/g)
    duration = duration[0] + duration[1];
    delay = delay.match(/(\d+)/g);
    delay = delay[0] + delay[1];

    var timeunit = duration/frame;
    setTimeout(function(){
        for(var i = 0; i < frame; i++){
            setTimeout(function(){
                var w = $(".html .base .gauge").width();
                $(".html .base .gauge .percent > span").html(w);
            },timeunit*100*i);
        }
    },delay*100);
}


