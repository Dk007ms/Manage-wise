var ques1=document.querySelector(".ques1");
var faqbtn1=document.querySelector(".faqbtn1");
var cross1=document.querySelector(".cross1");
var plus1=document.querySelector(".plus1");
var faqans1=document.querySelector(".faqans1");

var ques2=document.querySelector(".ques2");
var faqbtn2=document.querySelector(".faqbtn2");
var cross2=document.querySelector(".cross2");
var plus2=document.querySelector(".plus2");
var faqans2=document.querySelector(".faqans2");


var ques3=document.querySelector(".ques3");
var faqbtn3=document.querySelector(".faqbtn3");
var cross3=document.querySelector(".cross3");
var plus3=document.querySelector(".plus3");
var faqans3=document.querySelector(".faqans3");

var ques4=document.querySelector(".ques4");
var faqbtn4=document.querySelector(".faqbtn4");
var cross4=document.querySelector(".cross4");
var plus4=document.querySelector(".plus4");
var faqans4=document.querySelector(".faqans4");

var ques5=document.querySelector(".ques5");
var faqbtn5=document.querySelector(".faqbtn5");
var cross5=document.querySelector(".cross5");
var plus5=document.querySelector(".plus5");
var faqans5=document.querySelector(".faqans5");

faqbtn1.value=0;
faqbtn2.value=0;
faqbtn3.value=0;
faqbtn3.value=0;
faqbtn4.value=0;
faqbtn5.value=0;

function checkstate(ques,faqbtn,cross,plus,faqans){
   if(faqbtn.value=="0"){
      cross.style.display="inline";
      faqans.style.display="flex";
      ques.style.color="#8358ff";
      plus.style.display="none";
      faqbtn.value=1;
      console.log("clicked")
     }
     else{
      cross.style.display="none";
      faqans.style.display="none";
      ques.style.color="black";
      plus.style.display="inline";
      faqbtn.value=0;
      console.log("clicked else")
   }
}