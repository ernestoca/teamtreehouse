//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');//Use $ for the of the variable because this represents a jQuery object
var $image = $('<img>');

// An image to th overlay
$overlay.append($image);

//2. Add overlay
$("body").append($overlay);
  
  //2.2 A caption

//1. Capture the click event on a link to an image
$('#imageGallery a').click(function(event) {
    event.preventDefault();
    var imageLocation = $(this).attr('href');//This will return a String of href
    console.log(imageLocation);
    //Update overlay with the image linked in the link
    $image.attr("src", imageLocation);
    //1.1 Show the overlay  
    $overlay.show();
});
  
  //1.2 Update overlay with the image linked in the link    
  //1.3 Get child's alt atribute and set caption

//3. When overlay is clicked
$overlay.click(function() {
  //3.1 Hide the overlay
     $overlay.hide();// use $overlay instead of $(this) to avoid jQuery selecting the same element again (more speed);
});
  



  
  //Show the overlay.

  
  //Get child's alt attribute and set caption



//When overlay is clicked

  //Hide the overlay











