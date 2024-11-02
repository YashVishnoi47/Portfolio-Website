const element = document.querySelector('.profile-img');
    if (element) {
      element.addEventListener('click', () => {
        document.querySelector(".account-info").classList.toggle('none')
  });
}

let crsr = document.querySelector(".cursor")
let crsrb = document.querySelector(".cursor-blur")

document.addEventListener("mousemove",function(dets){
  // crsr.style.left = dets.x+"px"
  // crsr.style.top = dets.y+"px"
  crsrb.style.left = dets.x-95+"px"
  crsrb.style.top = dets.y-95+"px"
});




let hovElements = document.querySelectorAll(".hov-big");
hovElements.forEach(function(elem) {
  elem.addEventListener("mouseenter", function() {
    if (crsrb) {
      crsrb.style.background ="#0079FF"
    }
  });

  elem.addEventListener("mouseleave", function() {
    if (crsrb) {
      crsrb.style.background ="#E9FF09"
    }
  });
});






// public/js/script.js
document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('.page');

  // Function to animate the page in
  function animatePageIn() {
      setTimeout(() => {
          page.classList.add('enter');
      }, 100);
  }

  // Animate on initial load
  animatePageIn();

  // Intercept link clicks for smoother transitions
  const links = document.querySelectorAll('a');

  links.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault(); // Prevent default navigation
          const targetUrl = link.getAttribute('href');

          // Exit animation
          page.classList.remove('enter'); // Remove the enter class to start exit animation

          // Animate the exit
          anime({
              targets: page,
              opacity: [1, 0],
              translateY: [0, 20],
              duration: 500,
              easing: 'easeInOutQuad',
              complete: () => {
                  // Navigate to the new page
                  window.location.href = targetUrl; // Navigate after animation completes
              }
          });
      });
  });
});













  var Typed = new Typed("#skill" ,{
    strings: ["Express JS","Node.JS","MongoDB","Java Script","Tailwind CSS"],
    typeSpeed:60,
    backSpeed:60,
    loop:true
  } );





  function showContent(section) {
    const content = {
        whoAmI: "Hello! I’m Yash Vishnoi, currently a Class 11 student pursuing PCM. Coding is my passion, and I’m constantly driven by the challenge of creating, improving, and bringing ideas to life through code.",
        whatIDo: "I specialize in web development, building projects that combine creativity with technical skill. Currently, I'm working on developing a portfolio to showcase my skills and work.",
        myApproach: "My approach focuses on writing clean, efficient code, designing with a user-first mindset, and always learning new technologies to improve my craft."
    };

    const aboutContent = document.getElementById("aboutContent");
    
    // Fade out the content
    aboutContent.classList.remove("show");
    
    // Use setTimeout to wait for fade-out before changing content
    setTimeout(() => {
        aboutContent.innerHTML = `<p>${content[section]}</p>`;
        aboutContent.classList.add("show"); // Fade in the new content

        // Highlight the selected button
        document.querySelectorAll(".button").forEach(btn => btn.classList.remove("selected"));
        document.querySelector(`[onclick="showContent('${section}')"]`).classList.add("selected");
    }, 500); // Match this delay with the CSS transition duration for smooth effect
}





// Set initial display to "none"
document.querySelector(".nav-mobile").style.top = "-415px";

// Add an event listener to toggle display
document.querySelector(".menu").addEventListener("click", function () {
  const navMobile = document.querySelector(".nav-mobile");

  if (navMobile.style.top === "-415px") {
    navMobile.style.top = "100px";
  } else {
    navMobile.style.top = "-415px";
  }
});

