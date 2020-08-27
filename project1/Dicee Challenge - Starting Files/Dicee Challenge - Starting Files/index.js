var randomNo = Math.floor (Math.random() * 6) ; 
var imagesrc = "images/"+"dice"+randomNo+".png";
 document.querySelector(".img1 ").setAttribute("src" , imagesrc);
 var randomNo2 = Math.floor(Math.random()*6);
 var imagesrc2 = "images/"+"dice"+randomNo2+".png";
 document.querySelector(".img2").setAttribute("src" , imagesrc2);
 if (randomNo>randomNo2)
 {
     document.querySelector("h1").innerHTML = "<h1> player1 wins </h1>";
 }
 else if (randomNo<randomNo2)
 {
     document.querySelector("h1").innerHTML = "<h1> player2 wins</h1>";
 }
 else
 {
    document.querySelector("h1").innerHTML = "<h1> Tie</h1>";
   
 }