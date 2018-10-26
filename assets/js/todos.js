// Check off specific to do by clicking
$("ul").on("click","li",function() {
    // If li is gray turn to black, if black  turn to grey
    $(this).toggleClass("completed");
    
});

// Click on X to delete a to-do
$("ul").on("click", "span", function (e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();

});

$("input[type='text']").keypress(function(e) {
    if (e.which === 13) {
        // grabbing new todo text from input
        let todoText = $(this).val();

        // add todoText to the ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>" + todoText + "</li>");
        $(this).val("");

    }
});

$("#pencil").click(function () {
    $("input[type='text']").fadeToggle();
});