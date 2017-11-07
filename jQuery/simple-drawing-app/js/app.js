//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately
var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

//When clicking on control list items
$('.controls li').click(function() {
    //Deselect sibling elements
    $(this).siblings().removeClass('selected');    
    //Select clicked elements
    $(this).addClass('selected');
    
});

//When new color is pressed
$('#revealColorSelect').click(function() {
    //Show color select or hide the color select
    changeColor();
   $('#colorSelect').toggle();
});

function changeColor() {
    var r = $("#red").val();
    var g = $("#green").val();
    var b = $("#blue").val();
    //Update the new color span
    $('#newColor').css('background-color', "rbg("+r+","+g+","+b+")");
}

//When color sliders change
$('input[type=range]').change(changeColor);

//When add color is pressed
    //Append the color to the controls ul
    //Select the new color


//On mouse event on the canvas
    //Draw lines

  







