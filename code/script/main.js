// main background 이미지 크기 조절하는 
$(function () {
    // 마지막 이전 에서 마우스 down -> opacity 활성화

    var elm = ".container";

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
                        // 마지막 이전, OFF CLASS 추가
                        if(elmSelecter.next().offset().top == $(elm).last().offset().top){
                            if(index != $(elm).length - 1)
                                elmSelecter.addClass("off");
                        }
                        moveTop = $(elmSelecter).next().offset().top;
                    } catch (e) { }
                }
            } else {
                // 마우스휠을 아래에서 위로
                if (elmSelecter.prev() != undefined) {
                    try {
                        // 마지막 이전, OFF CLASS 제거
                        if(elmSelecter.next().offset().top == $(elm).last().offset().top){
                            elmSelecter.addClass("off");
                        }    
                        moveTop = $(elmSelecter).prev().offset().top;
                    } catch (e) { }
                }
            }

            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 800, complete: function () {
                    console.log("complete");
                }
            });
        });
    });
})
