var drumspace = document.querySelectorAll(".drum").length;
for (var i= 0 ;i<drumspace;i++) {


    document.querySelectorAll(".drum")[i].addEventListener("click" , function() {

        var button = this.innerHTML;
          sound(button);
          buttonKey(button)
      });
    }
      document.addEventListener("keypress" , function(event){
                sound(event.key);
                buttonKey(event.key);
      });
      function sound(key)
    
      {
      switch (key) 
      {
          case "w":
            var audio = new Audio("sounds/tom-1.mp3");
             audio.play();
                    
              break;
        case "a":
            var audio1 = new Audio("sounds/tom-2.mp3");
              audio1.play();
             
            break;
            case "s":
                var audio2 = new Audio("sounds/tom-3.mp3");
                 audio2.play();
                 

                break;
                case "d":
                    var audio3 = new Audio("sounds/tom-4.mp3");
                     audio3.play();
                     
            break;
            case "j":
                var audio5 = new Audio("sounds/crash.mp3");
                  audio5.play();
                 
            break;
            case "k":
                var audio6 = new Audio("sounds/snare.mp3");
                 audio6.play();
                
            break;
            case "l":
                var audio7 = new Audio("sounds/kick.mp3");
                 audio7.play();
                
            break;
          default:
              console.log("error");

              
              
      }

    
}
function buttonKey(currentKey)
{
   var activeButton = document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");
   setTimeout(function(){
     activeButton.classList.remove("pressed");
   },100);
}

    //  var audio = new Audio("sounds/tom-1.mp3");
    //  audio.play();
    // 
    

// function HouseMaid(yearsOfExpereince,name,cleaning)
// {
//     this.yearsOfExpereince = yearsOfExpereince;
//     this.name = name;
//     this.cleaning = cleaning;
// }


// var housemaid1 = new HouseMaid( 12 , "milena" , ["washroom" , "bedroom" ]);

// var housemaid2 = new HouseMaid( 12 , "verwa" , ["washroom" , "bedroom" ]);

// var housemaid3 = new HouseMaid( 12 , "sahsea" , ["washroom" , "bedroom" ]);
   
    
