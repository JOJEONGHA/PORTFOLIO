// Work page operation
$(function () {
    // TODO : Text animation
    // TODO : Weblist text connect
    var workP = $(".container_work"),
        contactP = $(".container_contact");
    var elm = $(".container_work .contents .core");
    var weblist = elm.find(".web .weblist"),
        amount = 5; // web list amount (Control amount)
    // Add web tag
    for(var i = 1; i < amount; i++){
        var web_container = weblist.find(".work .work_container .web_container").html();
        var tag = "<li class='works_"+ i +" work'>";
            tag += "<div class = 'work_container'>";
            tag += "<img src='img/weblist/index_" + i + ".png' alt='index_"+ i +"'></img>";
            tag += "<div class='web_container'>"
            tag += web_container;
            tag += "</div></div></li>";
        weblist.append(tag);
    }    
    // 할때 마다 넣고

    // Initialization
    // Init - position
    var lefts = [], // Left position about each web index 
        mid = 50,   // mid position about left(absolute)
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

    // Init - text
    var bundle = dataBox(0);  // title & info text array
    elm.find(".text .title").text(bundle[0]);
    elm.find(".text .info").text(bundle[1]);
    // (Working) web container text initialize
    
    // Arrow button click action
    var btnL = elm.find(".btn .btn_left"),
        btnR = elm.find(".btn .btn_right");
    btnL.click(function(){aClick("L",mid,step,weblist,lefts,elm);});
    btnR.click(function(){aClick("R",mid,step,weblist,lefts,elm);});

    // Run when button click
    elm.find(".btn > a").click(function(){
        var midIndex = jQuery.inArray(50,lefts);
        var bundle = dataBox(midIndex);  // title & info text array

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

// Arrow button Click action
function aClick(rl,mid,step,weblist,lefts,elm){
    var direct,btn;
    if(rl == "L"){
        direct = 0;
        btn =  elm.find(".btn .btn_left");
    }
    else{
        direct = lefts.length - 1;
        btn = elm.find(".btn .btn_right");
    }
    // work moving
    if (lefts[direct] != mid) {
        for (var i in lefts) {
            if(rl == "L")
                lefts[i] += step;
            else    
                lefts[i] -= step;
            var web = weblist.find(".works_" + i);
            web.css("left", lefts[i] + "%");
        }
        weblist.find(".work").removeClass("mid");
        weblist.find(".work").removeClass("lr");

        var midIndex = jQuery.inArray(50,lefts);
        positionC(weblist,midIndex);    // Give class about position
    }    
}

// Button active control
// function btnControl(lefts,direct,mid){
//     if(lefts[direct] == mid)    
//         btn.addClass("unactive");
//     else
//         btn.removeClass("unactive");
// }

// Give class about position
function positionC(weblist,midIndex) {
    var webM = weblist.find(".works_" + midIndex),
        webL = weblist.find(".works_" + (midIndex - 1)),
        webR = weblist.find(".works_" + (midIndex + 1));

    webM.addClass("mid");
    webL.addClass("lr");
    webR.addClass("lr");
}

// String box
function dataBox(str){
    var Bundle = {};    // [0] : title, [1] : explain, [2] : keyword, [3] : color, [4] : font

    switch (str) {
        case 0:
            Bundle[0] = "서광주세무서";
            Bundle[1] = "기존의 혁신적인 구조를 좀더 유기적인 구조로 변경하여 상큼한 느낌을 적용.";
            Bundle[2] = "keword0_0 keword0_1";
            Bundle[3] = "fff/ff0/f00/000";
            Bundle[4] = "";
            break;
        case 1:
            Bundle[0] = "인덱스1번째";
            Bundle[1] = "AAAAAA AAAAAAAAAAA AAAAAAAAAAAAAAA AAAAAAAAAAAAAA AAAAAAAA";
            Bundle[2] = "keword1_0 keword1_1";
            Bundle[3] = "";
            Bundle[4] = "";
            break;
        case 2:
            Bundle[0] = "인덱스2번째";
            Bundle[1] = "BBBBBBBBBBBBBB BBBBBBBBBBBB BBBBBBBBBBBBBBBBBBBB BBBBBBBBBB";
            Bundle[2] = "keword2_0 keword2_1 keword2_2";
            Bundle[3] = "";
            Bundle[4] = "";
            break;
        case 3:
            Bundle[0] = "인덱스3번째";
            Bundle[1] = "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC";
            Bundle[2] = "keword3_0 keword3_1";
            Bundle[3] = "";
            Bundle[4] = "";
            break;
        case 4:
            Bundle[0] = "인덱스4번째";
            Bundle[1] = "DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD";
            Bundle[2] = "keword4_0";
            Bundle[3] = "";
            Bundle[4] = "";
            break;
    }

    return Bundle;
}







