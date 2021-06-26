$(".menuButton").click(function(){
    $("nav").slideToggle();
});
window.onresize = function() {
    if (window.innerHeight >= 767) { 
        $("nav").removeAttr("style");
     }
}

$("#linkHome,#linkTitle").click(function(){
    $.get("home.html",insertHTML);
    document.title = "Steele Davis";
});
$("#linkTrabajo").click(function(){
    $.get("trabajo.html",insertHTML);
    document.title = "Steele Davis - Mi trabajo";
});
$("#linkContacto").click(function(){
    $.get("contacto.html",insertHTML);
    document.title = "Steele Davis - Contacto";
});

function insertHTML(data){
    if (window.innerHeight <= 767) { 
        $("nav").hide();
    }
    $("main").html(data);
}

$.get("home.html",insertHTML);
