// page Scroll operation
$(function () {
    init();    // operating when only first time to visit website
    
    var elm = ".container.on",  // find container class had "on" 
        isMoving = false;   // Is it moving?

    $(this).on("mousewheel DOMMouseScroll", function (e) {
        if(isMoving == false){
            isMoving = true;
        
            // mouse wheel value(+ : up, - : down)
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            }
            else if (event.detail) {
                delta = -event.detail / 3;
            }

            var moveTop = $(elm).offset().top;    // scrollbar top point
            var elmSelecter = $(elm).removeClass("on"); // Recent class removed "on"

            if (delta < 0) {
                // (Move)Mouse wheel up to down
                if (elmSelecter.next() != undefined) {
                    try { 
                        moveTop =topPostion(elmSelecter,"next");
                    } catch (e) { }
                }
            } else {
                // (Move)Mouse wheel down to up
                if (elmSelecter.prev() != undefined) {
                    try {
                        moveTop = topPostion(elmSelecter,"prev");
                    } catch (e) { }
                }
            }
            
            // View move
            var _duration = 800;
            // TODO : contact 에 페이지 이동시 속도 변화

            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: _duration, complete: function () {
                    isMoving = false;
                }
            });
        }
    });
})

// return top position about next or prev class 
function topPostion(elmSelecter,np){
    var next_prev;

    if(np == "next")
        next_prev = elmSelecter.next();
    else if(np = "prev")
        next_prev = elmSelecter.prev();
    
    next_prev.addClass("on");
    var moveTop = next_prev.offset().top;

    return moveTop;
}

// Refresh makes the screen a starting point, then give the first page "on" class 
function init() {
    $("html, body").animate({ scrollTop: 0 }, "slow");  // starting point
    $(".container").eq(0).addClass("on"); // the first page "on" class 
}
