window.onload=function(){
    document.querySelectorAll(".menuMobile" ).addEventListener("click", function(){
       if(document.querySelectorAll(".menu nav ul").style.display =="flex"){
           document.querySelectorAll(".menu nav ul").style.display = "none";
       } else {
           document.querySelector(".menu nav ul").style.display="flex";
       }  
    });
};