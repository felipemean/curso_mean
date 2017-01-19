$(document).ready(initializeEvents);

function initializeEvents() {
    /* $("a").mouseover(inMouseEvent);
     $("a").mouseout(outMouseEvent);*/
    $("a").hover(inMouseEvent, outMouseEvent);
}

function inMouseEvent() {
    $(this).css({
        "background-color": "lightblue",
        "border": " 2px solid;",
        "box-shadow": "10px 10px 5px #888888"
    });


    /*   
        $(this).css("border", " 2px solid;");
        $(this).css("box-shadow", "10px 10px 5px #888888");

        
        
        */
}

function outMouseEvent() {
    $(this).css({
        "background-color": "green",
        "border": "solid 15px"
    });
    //$(this).css("border", "solid 15px");
}