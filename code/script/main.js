// Main page operation
$(function () {
    // TODO : <Simple>Code Simplification
    // TODO : button to edge
    // TODO : PHP String binding
    var main = classObject("main"),
        about = classObject("about"),
        work = classObject("work"),
        contact = classObject("contact");

    var moveTop = 0;
    main.click(function () {
        var page = $(".container_main");
        $(".container").removeClass("on");
        page.addClass("on");
        moveTop = page.offset().top;
        $("html,body").stop().animate({ scrollTop: moveTop + 'px' },1000)
    });
    about.click(function () {
        var page = $(".container_about");
        $(".container").removeClass("on");
        page.addClass("on");
        moveTop = page.offset().top;
        $("html,body").stop().animate({ scrollTop: moveTop + 'px' },1000)
    });
    work.click(function () {
        var page = $(".container_work");
        $(".container").removeClass("on");
        page.addClass("on");
        moveTop = page.offset().top;
        $("html,body").stop().animate({ scrollTop: moveTop + 'px' },1000)
    });
    contact.click(function () {
        var page = $(".container_contact");
        $(".container").removeClass("on");
        page.addClass("on");
        moveTop = page.offset().top;
        $("html,body").stop().animate({ scrollTop: moveTop + 'px' },1000)
    });

    // Run when scrolling
    $(this).on("mousewheel DOMMouseScroll", function (e) {

    })
})

// Return a specific Menu object
function classObject(str) {
    var _object = $(".container_main .menu").find(".menu_" + str + " > a");

    return _object;
}
