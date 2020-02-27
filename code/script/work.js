// Work page operation
$(function () {
    var workP = $(".container_work"),
        contactP = $(".container_contact");

    // Run when scrolling
    $(this).on("mousewheel DOMMouseScroll", function (e) {
        if(contactP.hasClass("on"))
            workP.addClass("off");
        else
            workP.removeClass("off");
    })     
})



