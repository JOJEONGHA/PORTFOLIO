// main background 이미지 크기 조절하는 
$(function () {
    fullpage();   
})

function fullpage(){
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

            console.log("moveTop first >> " + moveTop);
            // console.log("elmSelecter >> " + $(elm).eq(index));
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try {
                        moveTop = $(elmSelecter).next().offset().top;
                        console.log("next moveTop >> " + moveTop);
                    } catch (e) { }
                }
            } else {
                // 마우스휠을 아래에서 위로
                if ($(elmSelecter).prev() != undefined) {
                    try {
                        moveTop = $(elmSelecter).prev().offset().top;
                        console.log("prev moveTop >> " + moveTop);
                    } catch (e) { }
                }
            }

            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 800, complete: function () {
                    console.log("moveTop >> " + moveTop);
                }
            });
        });
    });
};
