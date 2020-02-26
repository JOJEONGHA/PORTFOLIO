$(function () {
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
                Control_off(1,$(elm).eq(index).children(".contents"));
                Disable_aTag(1,$(".btn_left"),$(".btn_right"));
            }else{
                Control_off(0,$(elm).eq(index).children(".contents"));
                Disable_aTag(0,$(".btn_left"),$(".btn_right"));
            }
        });
    });
})

function Control_off(off,...classBundle){
    for(var _class of classBundle){
        if(off == 1){
            _class.addClass("off");
        }else{
            _class.removeClass("off")
        }
    }
}

function Disable_aTag(onoff,...aTags){
    for(var aTag of aTags){
        if(onoff == 1){
            aTag.addClass("off");
        }else{
            aTag.removeClass("off");
        }  
    }
}

function scrollTop(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
}


