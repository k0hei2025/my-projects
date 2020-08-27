$("h1").addClass("look , position");    // when you add a classs
 $("body").css("background-color" , "deeppink");   // when you simple create a tag 

//$("h1").removeClass("look");      // when you remove a class
//$("h1").css("color","aqua");
$("p").text("helll jello hello ");

$("a").attr("href", "https://www.instagram.com");

// $("h1").click(function()
// {
//     $("h1").css("color" ,"purple")
// });
$(document).keypress(function(event)
{
   
    $("h1").text(event.key);

});

// Alternative way for adding event listner


$("h1").on("mouseover",function()
{
$("h1").slideUp().slideDown().fadeOut();

});

$("a").on("mouseover",function()
{
    $("a").fadeOut().fadeIn();
});