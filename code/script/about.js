// About page operation
$(function(){
    var elm = $(".container_about");
    // Run when scrolling
    $(this).on("mousewheel DOMMouseScroll", function (e) {
        if(elm.hasClass("on")){
            gaugeControl(true,".html",".css",".jquery",".photoshop");
            percentControl(elm.find(".base .gauge .percent > span"));
        }   
        else
            gaugeControl(false,".html",".css",".jquery",".photoshop");
    })  
})

// Give or Remove "on" class to gauge
function gaugeControl(chk,...bundle){
    for(var index in bundle){
        var elm = $(".container_about").find(bundle[index]).find(".base .gauge");

        if(chk == true)
            elm.addClass("on");
        else if(chk == false)
            elm.removeClass("on");
    }   
}

// Control about percentage text
function percentControl(elm){
    elm.each(function () {
        var _this = $(this),
        num = _this.text();

        _this.text(0);  // number initialization to 0
        jQuery({ Counter: 0 }).delay(800).animate({ Counter: num }, {
            duration: 1500,
            easing: 'swing',
            step: function () {
                _this.text(Math.ceil(this.Counter));
            },
            complete : function(){
                _this.text(num);  
            }
        });
    });
}

