$(document).ready(function () {
    $("#card1titulo").on("click", function () {
        $("#card1text").toggle("fast", function () {});
    });
    $("#card2titulo").on("click", function () {
     $("#card2text").toggle("fast", function () {});
    });
    $("#card3titulo").on("click", function () {
    $("#card3text").toggle("fast", function () {});
    });
    $("#card4titulo").on("click", function () {
    $("#card4text").toggle("fast", function () {});
    });
    //toggler de texto en cards, funcion activada con click en el título
    $("#quienessomos").dblclick(function () {
        $("#quienessomos").toggleClass("blanco celeste");
    });
    $("#contacto").dblclick(function () {
        $("#contacto").toggleClass("blanco celeste");
    });
    $("#destacados").dblclick(function () {
        $("#destacados").toggleClass("blanco celeste");
    });
});