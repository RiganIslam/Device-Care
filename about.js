// ==========================================
// DEVICECARE ABOUT PAGE
// ==========================================


// ==========================================
// MOBILE MENU
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {

  mobileMenu.classList.toggle("hidden");

});


// Close menu after clicking a link

const mobileLinks =
  mobileMenu.querySelectorAll("a");

mobileLinks.forEach(link => {

  link.addEventListener("click", () => {

    mobileMenu.classList.add("hidden");

  });

});


// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 30) {

    navbar.style.background =
      "rgba(5,5,5,0.94)";

  } else {

    navbar.style.background =
      "rgba(10,10,10,0.75)";

  }

});


// ==========================================
// COUNTER ANIMATION
// ==========================================

const counters =
  document.querySelectorAll(".counter");


const animateCounter = (counter) => {

  const target =
    Number(counter.dataset.target);

  const suffix =
    counter.dataset.suffix || "";

  let current = 0;

  const duration = 1400;

  const startTime = performance.now();


  function updateCounter(currentTime) {

    const elapsed =
      currentTime - startTime;

    const progress =
      Math.min(elapsed / duration, 1);


    // Smooth animation
    const easedProgress =
      1 - Math.pow(1 - progress, 3);


    current =
      Math.floor(target * easedProgress);


    counter.textContent =
      current + suffix;


    if (progress < 1) {

      requestAnimationFrame(updateCounter);

    } else {

      counter.textContent =
        target + suffix;

    }

  }


  requestAnimationFrame(updateCounter);

};


// ==========================================
// INTERSECTION OBSERVER
// ==========================================

const counterObserver =
  new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          animateCounter(entry.target);

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.5
    }
  );


// Observe every counter

counters.forEach(counter => {

  counterObserver.observe(counter);

});