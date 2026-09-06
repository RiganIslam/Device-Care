// ========================================
// DEVICECARE - INDEX PAGE JAVASCRIPT
// ========================================


// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("hidden");

    });

}


// ================= CLOSE MOBILE MENU =================

const mobileLinks = document.querySelectorAll("#mobileMenu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.add("hidden");

    });

});


// ================= NAVBAR SCROLL EFFECT =================

const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.classList.add(
            "bg-black/90",
            "shadow-lg"
        );

    } else {

        navbar.classList.remove(
            "bg-black/90",
            "shadow-lg"
        );

    }

});


// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


// ================= INITIAL REVEAL =================

window.addEventListener("load", () => {

    const heroElements = document.querySelectorAll(
        "section:first-of-type .reveal"
    );

    heroElements.forEach((element, index) => {

        setTimeout(() => {

            element.classList.add("show");

        }, index * 150);

    });

});