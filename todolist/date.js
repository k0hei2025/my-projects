exports.getDate = function(){                    // jo getDate hai wo niche ke function ka nam hai use variable me kara 
                          // function ko alag tarike se call kara hai
let today = new Date();

  let options= {
     weekday: "long",
     day: "numeric",
     month: "long",
     year: "numeric",
  };
     let day =  today.toLocaleDateString("ja-JP",options);
   return day;
  }
 exports.getDay = function(){               // module.exports == short me exports                     // short me kara hai
     let today = new Date();

     let options ={
        weekday: "long"
     };
     let day = today.toLocaleDateString("en-US",options);
     return day;
  }





