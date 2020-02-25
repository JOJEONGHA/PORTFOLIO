// main background 이미지 크기 조절하는 
$(function () {
    var elm = ".container";
    
    
    // // Make to work Opacity by Contact page
    // if(scrollBottom == 0){
    //     var workPage = $(".container_work .contents"); 

    //     workPage.stop().animate({
    //          opacity : 0.3
    //      }, {
    //          duration: 800, complete: function () {
    //          }
    //      });
    //  }  

    $(elm).each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
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
            
            // If state last page, forced to give last index
            var scrollBottom = $("body").height() - ($(window).height() + $(window).scrollTop());

            // Scrollbar on bottom
            if(scrollBottom == 0){
                elmSelecter.addClass("off");
                elmSelecter = elmSelecter.next();
            } 
               
            if (delta < 0) {
                if (elmSelecter.next() != undefined) {
                    try {
                        moveTop = $(elmSelecter).next().offset().top;
                    } catch (e) { }
                }
            } else {
                // 마우스휠을 아래에서 위로
                if (elmSelecter.prev() != undefined) {
                    try {
                        moveTop = $(elmSelecter).prev().offset().top;
                    } catch (e) { }
                }
            }

            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 800, complete: function () {
                }
            });
        });
    });
})
