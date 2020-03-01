// Work page operation
$(function () {
    // TODO : <Simple> Simplification all code
    // TODO : work Text change
    var workP = $(".container_work"),
        contactP = $(".container_contact");
    var elm = $(".container_work .contents .core");
    var weblist = elm.find(".web .weblist"),
        amount = 5,
        tags = ""; // web list amount
    // Add web tag
    for(var i = 0; i < amount; i++){
        var tag = "<li class = 'works_" + i + " work'><a href = 'javascript:void(0)'>";
            tag += "<img src='img/weblist/index_" + i +".png' alt = 'index_" + i +"'></a></li>";
        tags += tag;
    }
    weblist.html(tags);

    // Initialization
    // Init - position
    var lefts = [],
        mid = 50,
        step = 28;  // degree of moving
    for(var i = 0; i < amount; i++){
        var web = weblist.find(".works_" + i);
        var left =  mid + step*i;

        web.css("left", left + "%");
        lefts[i] = left;
    }
    // Init - class
    var firstIndex = 0;
    var webM = weblist.find(".works_" + firstIndex),
        webR = weblist.find(".works_" + (firstIndex + 1));
    
    webM.addClass("mid");
    webR.addClass("lr");

    // mid : jQuery.inArray(78,lefts)
    var left = mid - step,
        right = mid + step,
        web = weblist.find(".work");
    elm.find(".btn .btn_left").click(function(){
        // work moving
        if (lefts[0] != mid) {
            for (var i in lefts) {
                lefts[i] += step;
                var web = weblist.find(".works_" + i);
                web.css("left", lefts[i] + "%");
            }
            weblist.find(".work").removeClass("mid");
            weblist.find(".work").removeClass("lr");
            var midIndex = jQuery.inArray(50,lefts);
            var webM = weblist.find(".works_" + midIndex),
                webL = weblist.find(".works_" + (midIndex - 1)),
                webR = weblist.find(".works_" + (midIndex + 1));

            webM.addClass("mid");
            webL.addClass("lr");
            webR.addClass("lr");
        }
    });
    elm.find(".btn .btn_right").click(function(){
        // work moving
        if (lefts[lefts.length - 1] != mid) {
            for (var i in lefts) {
                lefts[i] -= step;
                var web = weblist.find(".works_" + i);
                web.css("left", lefts[i] + "%");
            }
            weblist.find(".work").removeClass("mid");
            weblist.find(".work").removeClass("lr");
            var midIndex = jQuery.inArray(50,lefts);
            var webM = weblist.find(".works_" + midIndex),
                webL = weblist.find(".works_" + (midIndex - 1)),
                webR = weblist.find(".works_" + (midIndex + 1));

            webM.addClass("mid");
            webL.addClass("lr");
            webR.addClass("lr");
        }
    })

    // Run when button click
    elm.find(".btn > a").click(function(){
        var midIndex = jQuery.inArray(50,lefts);
        var bundle = strBox(midIndex);  // title & info text array

        elm.find(".text .title").text(bundle[0]);
        elm.find(".text .info").text(bundle[1]);
    })

    // Run when scrolling
    $(window).scroll(function(){
        if(contactP.hasClass("on")){
            workP.addClass("off");
            workP.find(".core .btn > a").addClass("off");
        }
        else{
            workP.removeClass("off");
            workP.find(".core .btn > a").removeClass("off");
        }
    })
         
})

// Return body tag height
function bodyHeight(){
    var bodyHeight= 0;
    $(".container").each(function(){
        bodyHeight += $(this).height();
    })
    
    return bodyHeight;
}

// String box
function strBox(str){
    var Bundle = {};

    switch (str) {
        case 0:
            Bundle[0] = "서광주세무서";
            Bundle[1] = "기존의 혁신적인 구조를 좀더 유기적인 구조로 변경하여 상큼한 느낌을 적용.";
            break;
        case 1:
            Bundle[0] = "인덱스1번째";
            Bundle[1] = "AAAAAA AAAAAAAAAAA AAAAAAAAAAAAAAA AAAAAAAAAAAAAA AAAAAAAA";
            break;
        case 2:
            Bundle[0] = "인덱스2번째";
            Bundle[1] = "BBBBBBBBBBBBBB BBBBBBBBBBBB BBBBBBBBBBBBBBBBBBBB BBBBBBBBBB";
            break;
        case 3:
            Bundle[0] = "인덱스3번째";
            Bundle[1] = "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC";
            break;
        case 4:
            Bundle[0] = "인덱스4번째";
            Bundle[1] = "DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD";
            break;
    }

    return Bundle;
}







