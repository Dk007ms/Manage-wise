var wrapper=document.querySelector(".wrapper");


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