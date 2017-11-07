//Problem: It look gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation

//Create select and append menu
var $select = $("<select></select>");
$("#menu").append($select);

console.log($select);
//Cycle over menu links
$("#menu a").each(function() {
    var $anchor = $(this);
    //Create an option
    var $option = $("<option></option>");
    
    //Deal with selected options depending on current page
    if($($anchor).parent().hasClass('selected')) {
        $option.prop('selected', true);
    }
    
    //Option's value is the href
    $option.val($anchor.attr('href'));    
    
    //option's text is the text of link
    $option.text($anchor.text());
    //append option to select
    $select.append($option);
});
    
//Bind change listener to the select
$select.change(function() {
   //Go to the select's current location
    window.location = $select.val();
});




//Show Prompt Window and store value
//var fullName = prompt("What is your full name?");

//Select Input with the id of #fullName
//Insert value in to full name input
/*
var $input = $("input");
console.log($input.val());
$input.val(fullName);
console.log($input.val());
*/






