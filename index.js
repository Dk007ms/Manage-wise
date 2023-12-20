var wrapper=document.querySelector(".wrapper");
// var ques1=document.querySelector(".ques1");
// var faqbtn1=document.querySelector(".faqbtn1");
// var cross1=document.querySelector(".cross1");
// var plus1=document.querySelector(".plus1");
// var faqans1=document.querySelector(".faqans1");

// var ques2=document.querySelector(".ques2");
// var faqbtn2=document.querySelector(".faqbtn2");
// var cross2=document.querySelector(".cross2");
// var plus2=document.querySelector(".plus2");
// var faqans2=document.querySelector(".faqans2");


// var ques3=document.querySelector(".ques3");
// var faqbtn3=document.querySelector(".faqbtn3");
// var cross3=document.querySelector(".cross3");
// var plus3=document.querySelector(".plus3");
// var faqans3=document.querySelector(".faqans3");

// var ques4=document.querySelector(".ques4");
// var faqbtn4=document.querySelector(".faqbtn4");
// var cross4=document.querySelector(".cross4");
// var plus4=document.querySelector(".plus4");
// var faqans4=document.querySelector(".faqans4");

// var ques5=document.querySelector(".ques5");
// var faqbtn5=document.querySelector(".faqbtn5");
// var cross5=document.querySelector(".cross5");
// var plus5=document.querySelector(".plus5");
// var faqans5=document.querySelector(".faqans5");

// faqbtn1.value=0;
// faqbtn2.value=0;
// faqbtn3.value=0;
// faqbtn3.value=0;
// faqbtn4.value=0;
// faqbtn5.value=0;

// function checkstate1(ques,faqbtn,cross,plus,faqans){
//    if(faqbtn.value=="0"){
//       cross.style.display="inline";
//       faqans.style.display="flex";
//       ques.style.color="#8358ff";
//       plus.style.display="none";
//       faqbtn.value=1;
//       const qbar=document.querySelector(".questions1");
//       qbar.style.height="14rem";
//       qbar.style.overflow="visible";
//       faqans.style.opacity="0.5";
//      }
//      else{
//       cross.style.display="none";
//       faqans.style.display="none";
//       ques.style.color="black";
//       plus.style.display="inline";
//       faqbtn.value=0;
//       const qbar=document.querySelector(".questions1");
//       qbar.style.height="6rem";
//       qbar.style.overflow="hidden";
//       faqans.style.opacity="0";
//    }
// }
// function checkstate2(ques,faqbtn,cross,plus,faqans){
//    if(faqbtn.value=="0"){
//       cross.style.display="inline";
//       faqans.style.display="flex";
//       ques.style.color="#8358ff";
//       plus.style.display="none";
//       faqbtn.value=1;
//       const qbar=document.querySelector(".questions2");
//       qbar.style.height="14rem";
//       qbar.style.overflow="visible";
//       faqans.style.opacity="0.5";
//      }
//      else{
//       cross.style.display="none";
//       faqans.style.display="none";
//       ques.style.color="black";
//       plus.style.display="inline";
//       faqbtn.value=0;
//       const qbar=document.querySelector(".questions2");
//       qbar.style.height="7rem";
//       qbar.style.overflow="hidden";
//       faqans.style.opacity="0";
//    }
// }
// function checkstate3(ques,faqbtn,cross,plus,faqans){
//    if(faqbtn.value=="0"){
//       cross.style.display="inline";
//       faqans.style.display="flex";
//       ques.style.color="#8358ff";
//       plus.style.display="none";
//       faqbtn.value=1;
//       const qbar=document.querySelector(".questions3");
//       qbar.style.height="12rem";
//       qbar.style.overflow="visible";
//       faqans.style.opacity="0.5";
//      }
//      else{
//       cross.style.display="none";
//       faqans.style.display="none";
//       ques.style.color="black";
//       plus.style.display="inline";
//       faqbtn.value=0;
//       const qbar=document.querySelector(".questions3");
//       qbar.style.height="7rem";
//       qbar.style.overflow="hidden";
//       faqans.style.opacity="0";
//    }
// }
// function checkstate4(ques,faqbtn,cross,plus,faqans){
//    if(faqbtn.value=="0"){
//       cross.style.display="inline";
//       faqans.style.display="flex";
//       ques.style.color="#8358ff";
//       plus.style.display="none";
//       faqbtn.value=1;
//       const qbar=document.querySelector(".questions4");
//       qbar.style.height="12rem";
//       qbar.style.overflow="visible";
//       faqans.style.opacity="0.5";
//      }
//      else{
//       cross.style.display="none";
//       faqans.style.display="none";
//       ques.style.color="black";
//       plus.style.display="inline";
//       faqbtn.value=0;
//       const qbar=document.querySelector(".questions4");
//       qbar.style.height="6rem";
//       qbar.style.overflow="hidden";
//       faqans.style.opacity="0";
//    }
// }
// function checkstate5(ques,faqbtn,cross,plus,faqans){
//    if(faqbtn.value=="0"){
//       cross.style.display="inline";
//       faqans.style.display="flex";
//       ques.style.color="#8358ff";
//       plus.style.display="none";
//       faqbtn.value=1;
//       const qbar=document.querySelector(".questions5");
//       qbar.style.height="14rem";
//       qbar.style.overflow="visible";
//       faqans.style.opacity="0.5";
//      }
//      else{
//       cross.style.display="none";
//       faqans.style.display="none";
//       ques.style.color="black";
//       plus.style.display="inline";
//       faqbtn.value=0;
//       const qbar=document.querySelector(".questions5");
//       qbar.style.height="rem";
//       qbar.style.overflow="hidden";
//       faqans.style.opacity="0";
//    }
// }

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
const footer_get_started_btn1 = document.querySelector(".footer_get_started_btn1");
const header_get_started_btn_img1 = document.querySelector(".header_get_started_btn_img1");
const footer_get_started_btn_img1 = document.querySelector(".footer_get_started_btn_img1");

header_btn1.addEventListener("mouseover", () => {
   setTimeout(()=>{
      header_get_started_btn_img1.style.display = "inline-block";
   },150);
});
footer_get_started_btn1.addEventListener("mouseover", () => {
   setTimeout(()=>{
      footer_get_started_btn_img1.style.display = "inline-block";
   },150);
});

header_btn1.addEventListener("mouseout", () => {
   setTimeout(()=>{
      header_get_started_btn_img1.style.display = "none";
   },150);
});
footer_get_started_btn1.addEventListener("mouseout", () => {
   setTimeout(()=>{
      footer_get_started_btn_img1.style.display = "none";
   },150);
});


// swiper testimonials

// Define options before creating the IntersectionObserver
const options = {
   root: null,
   rootMargin: '0px',
   threshold: 0.4
 };
 
 const observer = new IntersectionObserver(handleIntersection, options);
 
 const target_element = document.querySelector(".footersecond_page2");
 
 observer.observe(target_element);
 
 function handleIntersection(entries, observer) {
   entries.forEach(entry => {
     if (entry.isIntersecting) {
       // Apply styles with a transition effect
       target_element.style.transition = "transform 1s ease"; // Adjust the duration and timing function as needed
       target_element.style.transform = "rotate(0deg)";
     }
   });
}


// Define options before creating the IntersectionObserver
const options2 = {
   root: null,
   rootMargin: '0px',
   threshold: 0.5
};

// const observer2 = new IntersectionObserver(handleIntersection2, options2);

// const target_element2 = document.querySelector(".dashboardimage");

// observer2.observe(target_element2);

// function handleIntersection2(entries, observer) {
//    entries.forEach(entry => {
//        if (entry.isIntersecting) {
//            // Apply styles with a transition effect
//            entry.target.classList.add('active');
//            observer2.unobserve(entry.target);
//        }
//    });
// }


// Check if the viewport width is greater than or equal to 639px
if (window.matchMedia('(min-width: 1279px)').matches) {
  const observer2 = new IntersectionObserver(handleIntersection2, options2);

  const target_element2 = document.querySelector(".dashboardimage");

  observer2.observe(target_element2);

  function handleIntersection2(entries, observer) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Apply styles with a transition effect
              
              entry.target.classList.add('active');
          }
      });
  }
}
if (window.matchMedia('(min-width: 639px)').matches) {
  const observer2 = new IntersectionObserver(handleIntersection2, options2);

  const target_element2 = document.querySelector(".dashboardimage");

  observer2.observe(target_element2);

  function handleIntersection2(entries, observer) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Apply styles with a transition effect
              
              entry.target.classList.add('active2');
          }
      });
  }
}


const boxes = document.querySelectorAll(".box");
const options3 = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3
};
const observer3 = new IntersectionObserver(handleIntersection3, options3);
boxes.forEach((box) => {
  observer3.observe(box);
});

function handleIntersection3(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Identify the target element
      const targetElement = entry.target;

      // Apply different animations based on the target element's class
      const className = targetElement.className;

      // Apply different animations based on the class name
      switch (true) {
        case className.includes('empower_head'):
          targetElement.classList.add("wiggle");
          targetElement.style.animationDelay ="400ms";
          break;
        case className.includes('empower_text'):
          targetElement.classList.add("wiggle2");
          targetElement.style.opacity="0.5";
          targetElement.style.animationDelay ="500ms";
          break;
        case className.includes('cardanimation1'):
         targetElement.classList.add("wiggle_1card",);
          break;
        case className.includes('cardanimation2'):
         targetElement.classList.add("wiggle_1card",);
         targetElement.style.animationDelay ="100ms";
          break;
        case className.includes('cardanimation3'):
         targetElement.classList.add("wiggle_1card");
         targetElement.style.animationDelay ="100ms";
          break;
        case className.includes('cardanimation4'):
         targetElement.classList.add("wiggle_1card");
         targetElement.style.animationDelay ="400ms";
          break;
        case className.includes('cardanimation5'):
         targetElement.classList.add("wiggle_1card");
         targetElement.style.animationDelay ="450ms";
          break;
        case className.includes('cardanimation6'):
         targetElement.classList.add("wiggle_1card");
         targetElement.style.animationDelay ="200ms";
          break;
        case className.includes('cardanimation7'):
         targetElement.classList.add("wiggle_1card");
         targetElement.style.animationDelay ="400ms";
          break;
        case className.includes('cardanimation8'):
         targetElement.classList.add("wiggle_1card");
         targetElement.style.animationDelay ="450ms";
          break;
        case className.includes('secondpage_main_img'):
         targetElement.classList.add("wiggle_1");
          break;
        case className.includes('faq'):
         targetElement.classList.add("jiggle");
         targetElement.style.animationDelay ="150ms";
          break;
      }
    }
  });
}

const newnav = document.querySelector(".smallnavlinks");
const newnavimg = document.querySelector(".newnavimg");
const toggleimg = document.querySelector(".toggleimg");
const navbartogglelinks = document.querySelector(".navbartogglelinks");

newnav.addEventListener("click", () => {
  navbartogglelinks.classList.add("navbartogglelinkstransition")
  navbartogglelinks.classList.toggle("navbartogglelinksanimate"); // Replace "newnavht" with your actual class name
  newnavimg.classList.toggle("newnavimgdisplay"); // Replace "newnavht" with your actual class name
  toggleimg.classList.toggle("newnavimgdisplay2"); // Replace "newnavht" with your actual class name
});

// accordian code

const accordians = document.querySelectorAll('.accordian');
const button=document.querySelector('button');
button.value='0';

accordians.forEach(accordian => {
    const icon = accordian.querySelector('.icon');
    const icon2 = accordian.querySelector('.icon2');
    const answer = accordian.querySelector('.answer');
    const h4 = accordian.querySelector('h4');
    const button = accordian.querySelector('button');
    button.value='0';

    accordian.addEventListener('click', () => {
        
        if(button.value==='0'){
            button.value='1';
            icon.style.display="none"
            icon2.style.display="inline-block"
            answer.style.maxHeight = answer.scrollHeight + 'px';
            h4.style.color="#8c56ff";
            console.log('entry1');
        }

        else{
            button.value='0';
            icon.style.display="inline-block"
            icon2.style.display="none";
            answer.style.maxHeight = null;
            h4.style.color="black";
            console.log('entry2')
        }
       
        
    })
})

// accordian code ends