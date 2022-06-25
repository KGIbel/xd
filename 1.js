$(function () {
    let count = 1;
    let click = true;
    let num = $(".cart").length;
    $(".cart").click(function() {
        if(!click) {
            return;
        }
        click = false;
        let card = $(this);
        if(count < num) {
            $(this).addClass("bottom");
            count++;
            }  else {
            $(this).addClass("bottom_last");
            count++;
        }
        if(count == num + 1) {
            setTimeout(function () {
                $(".cart").removeClass("bottom").removeClass("bottom_last");
                count = 1;
            }, 1000);  
        }
        setTimeout(function () {
            click = true;
        }, 1000);         
    });
});


$(document).mouseleave(function(e){
    if (e.clientY < 10) {
        $(".exitblock").fadeIn("fast");
    }    
});
$(document).click(function(e) {
    if (($(".exitblock").is(':visible')) && (!$(e.target).closest(".exitblock .modaltext").length)) {
        $(".exitblock").remove();
    }
});

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
// проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
var alertwin = getCookie("alertwin");
if (alertwin != "no") { 
    $(document).mouseleave(function(e){
        if (e.clientY < 10) {
            $(".exitblock").fadeIn("fast");    
            // записываем cookie на 1 день, с которой мы не показываем окно
            var date = new Date;
            date.setDate(date.getDate() + 1);    
            document.cookie = "alertwin=no; path=/; expires=" + date.toUTCString();       
        }    
    });
    $(document).click(function(e) {
        if (($(".exitblock").is(':visible')) && (!$(e.target).closest(".exitblock .modaltext").length)) {
            $(".exitblock").remove();
        }
    });  
}