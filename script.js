
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

function checkstate1(ques,faqbtn,cross,plus,faqans){
   if(faqbtn.value=="0"){
      cross.style.display="inline";
      faqans.style.display="flex";
      ques.style.color="#8358ff";
      plus.style.display="none";
      faqbtn.value=1;
      const qbar=document.querySelector(".questions1");
      qbar.style.height="14rem";
      qbar.style.overflow="visible";
      faqans.style.opacity="0.5";
     }
     else{
      cross.style.display="none";
      faqans.style.display="none";
      ques.style.color="black";
      plus.style.display="inline";
      faqbtn.value=0;
      const qbar=document.querySelector(".questions1");
      qbar.style.height="6rem";
      qbar.style.overflow="hidden";
      faqans.style.opacity="0";
   }
}
function checkstate2(ques,faqbtn,cross,plus,faqans){
   if(faqbtn.value=="0"){
      cross.style.display="inline";
      faqans.style.display="flex";
      ques.style.color="#8358ff";
      plus.style.display="none";
      faqbtn.value=1;
      const qbar=document.querySelector(".questions2");
      qbar.style.height="14rem";
      qbar.style.overflow="visible";
      faqans.style.opacity="0.5";
     }
     else{
      cross.style.display="none";
      faqans.style.display="none";
      ques.style.color="black";
      plus.style.display="inline";
      faqbtn.value=0;
      const qbar=document.querySelector(".questions2");
      qbar.style.height="7rem";
      qbar.style.overflow="hidden";
      faqans.style.opacity="0";
   }
}
function checkstate3(ques,faqbtn,cross,plus,faqans){
   if(faqbtn.value=="0"){
      cross.style.display="inline";
      faqans.style.display="flex";
      ques.style.color="#8358ff";
      plus.style.display="none";
      faqbtn.value=1;
      const qbar=document.querySelector(".questions3");
      qbar.style.height="12rem";
      qbar.style.overflow="visible";
      faqans.style.opacity="0.5";
     }
     else{
      cross.style.display="none";
      faqans.style.display="none";
      ques.style.color="black";
      plus.style.display="inline";
      faqbtn.value=0;
      const qbar=document.querySelector(".questions3");
      qbar.style.height="7rem";
      qbar.style.overflow="hidden";
      faqans.style.opacity="0";
   }
}
function checkstate4(ques,faqbtn,cross,plus,faqans){
   if(faqbtn.value=="0"){
      cross.style.display="inline";
      faqans.style.display="flex";
      ques.style.color="#8358ff";
      plus.style.display="none";
      faqbtn.value=1;
      const qbar=document.querySelector(".questions4");
      qbar.style.height="12rem";
      qbar.style.overflow="visible";
      faqans.style.opacity="0.5";
     }
     else{
      cross.style.display="none";
      faqans.style.display="none";
      ques.style.color="black";
      plus.style.display="inline";
      faqbtn.value=0;
      const qbar=document.querySelector(".questions4");
      qbar.style.height="6rem";
      qbar.style.overflow="hidden";
      faqans.style.opacity="0";
   }
}
function checkstate5(ques,faqbtn,cross,plus,faqans){
   if(faqbtn.value=="0"){
      cross.style.display="inline";
      faqans.style.display="flex";
      ques.style.color="#8358ff";
      plus.style.display="none";
      faqbtn.value=1;
      const qbar=document.querySelector(".questions5");
      qbar.style.height="14rem";
      qbar.style.overflow="visible";
      faqans.style.opacity="0.5";
     }
     else{
      cross.style.display="none";
      faqans.style.display="none";
      ques.style.color="black";
      plus.style.display="inline";
      faqbtn.value=0;
      const qbar=document.querySelector(".questions5");
      qbar.style.height="6rem";
      qbar.style.overflow="hidden";
      faqans.style.opacity="0";
   }
}

const header_btn = document.querySelector(".header_get_started_btn");
const header_get_started_btn_img = document.querySelector(".header_get_started_btn_img");

header_btn.addEventListener("mouseover", () => {
   setTimeout(()=>{
      header_get_started_btn_img.style.display = "inline-block";
   },150);
});

header_btn.addEventListener("mouseout", () => {
   setTimeout(()=>{
      header_get_started_btn_img.style.display = "none";
   },150);
});
const header_btn1 = document.querySelector(".header_get_started_btn1");
const header_get_started_btn_img1 = document.querySelector(".header_get_started_btn_img1");

header_btn1.addEventListener("mouseover", () => {
   setTimeout(()=>{
      header_get_started_btn_img1.style.display = "inline-block";
   },150);
});

header_btn1.addEventListener("mouseout", () => {
   setTimeout(()=>{
      header_get_started_btn_img1.style.display = "none";
   },150);
});


// swiper testimonials


