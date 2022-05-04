var current = new Date();
var time = current.toLocaleTimeString();
var dayOfWeek = current.getDay();
var month = current.getMonth();
var day = current.getDate();
month =(month +1);
var monthName = "";
var dayName = "";
var contactUsOffset = 1;

function ConvertMonthToString(month){
if(month==1){
  monthName = "January";
}
if(month==2){
  monthName = "Febuary";
}
if(month==3){
  monthName = "March";
}
if(month==4){
  monthName = "April";
}
if(month==5){
  monthName = "May";
}
if(month==6){
  monthName = "June";
}
if(month==7){
  monthName = "July";
}
if(month==8){
  monthName = "August";
}
if(month==9){
  monthName = "September";
}
if(month==10){
  monthName = "October";
}
if(month==11){
  monthName = "Novermber";
}
if(month==12){
  monthName = "December";
}

}


function ConvertDayToString(dayOfWeek){
if(dayOfWeek==1){
  dayName = "Monday";
} 
if(dayOfWeek==2){
  dayName = "Tuesday";
}
if(dayOfWeek==3){
  dayName = "Wednesday";
}
if(dayOfWeek==4){
  dayName = "Thursday";
}
if(dayOfWeek==5){
  dayName = "Friday";
}
if(dayOfWeek==6){
  dayName = "Saturday";
}
if(dayOfWeek==7){
  dayName = "Sunday";
}
}

//I am tryig to get this to properly read in the username fromt the Form. Having trouble. Will get there. 
function checkUsername(){
  userName = document.getElementById("userName").value;
    if(userName.length<9){
        alert("Username too short! Must be at least 9 characters long for security"); 
        document.form1.userName.focus();
    }
    }

function checkemail(emailAddress){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailAddress.value.match(validRegex)) {
        document.form1.text1.focus();
        //return true;
      } else {
    
        alert("Invalid email address!");
    
        document.form1.text1.focus();
    
        return false;
    
      }
    }


   function passwordPopup(){
    var passwordInput = document.getElementById("password").value;
    if(passwordInput.length<9){
    alert("Password is too short! Must be 8 characters long.");
   }
  }

  function submitData(){
    dayOfWeek = dayOfWeek + contactUsOffset;
    day = day + contactUsOffset;
    ConvertDayToString(dayOfWeek);
    ConvertMonthToString(month);
    alert("Thank you for your message. A member of our team will be back to you by " + time + " on " + dayName + " "  + day + "th of " + monthName)
    location.reload();
  }


  function discountcode(){
    ConvertMonthToString(month);
    alert("Discount available on this item for " + day + "th of " + monthName + " only!");
  }

  function backlogEstimate(){
    month = (month + 2);
    ConvertMonthToString(month);
    alert("This item is estimated to be back in stock by late " + monthName );
  }
 