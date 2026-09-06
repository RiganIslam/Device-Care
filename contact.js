// ==========================================
// DEVICECARE CONTACT PAGE
// ==========================================


// ==========================================
// MOBILE MENU
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {

  mobileMenu.classList.toggle("hidden");

});


const mobileLinks =
  mobileMenu.querySelectorAll("a");

mobileLinks.forEach(link => {

  link.addEventListener("click", () => {

    mobileMenu.classList.add("hidden");

  });

});


// ==========================================
// NAVBAR SCROLL
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
// FORM ELEMENTS
// ==========================================

const contactForm =
  document.getElementById("contactForm");

const nameInput =
  document.getElementById("name");

const emailInput =
  document.getElementById("email");

const subjectInput =
  document.getElementById("subject");

const messageInput =
  document.getElementById("message");

const successMessage =
  document.getElementById("successMessage");


// ==========================================
// ERROR ELEMENTS
// ==========================================

const nameError =
  document.getElementById("nameError");

const emailError =
  document.getElementById("emailError");

const subjectError =
  document.getElementById("subjectError");

const messageError =
  document.getElementById("messageError");


// ==========================================
// EMAIL VALIDATION
// ==========================================

function isValidEmail(email) {

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    .test(email);

}


// ==========================================
// HIDE ALL ERRORS
// ==========================================

function hideErrors() {

  nameError.classList.add("hidden");
  emailError.classList.add("hidden");
  subjectError.classList.add("hidden");
  messageError.classList.add("hidden");

}


// ==========================================
// FORM SUBMIT
// ==========================================

contactForm.addEventListener("submit", (event) => {

  event.preventDefault();

  hideErrors();

  successMessage.classList.add("hidden");


  let isValid = true;


  // Name
  if (nameInput.value.trim() === "") {

    nameError.classList.remove("hidden");

    isValid = false;

  }


  // Email
  if (
    emailInput.value.trim() === "" ||
    !isValidEmail(emailInput.value.trim())
  ) {

    emailError.classList.remove("hidden");

    isValid = false;

  }


  // Subject
  if (subjectInput.value === "") {

    subjectError.classList.remove("hidden");

    isValid = false;

  }


  // Message
  if (messageInput.value.trim() === "") {

    messageError.classList.remove("hidden");

    isValid = false;

  }


  // Stop if invalid
  if (!isValid) {

    return;

  }


  // ========================================
  // SAVE MESSAGE LOCALLY
  // ========================================

  const contactData = {

    name: nameInput.value.trim(),

    email: emailInput.value.trim(),

    phone:
      document.getElementById("phone").value.trim(),

    subject: subjectInput.value,

    message: messageInput.value.trim(),

    createdAt: new Date().toISOString()

  };


  const existingMessages =
    JSON.parse(
      localStorage.getItem("devicecareMessages")
    ) || [];


  existingMessages.push(contactData);


  localStorage.setItem(
    "devicecareMessages",
    JSON.stringify(existingMessages)
  );


  // ========================================
  // SUCCESS
  // ========================================

  successMessage.classList.remove("hidden");


  // Reset form
  contactForm.reset();


  // Scroll to success message
  successMessage.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

});


// ==========================================
// FAQ ACCORDION
// ==========================================

const faqItems =
  document.querySelectorAll(".faq-item");


faqItems.forEach(item => {

  const question =
    item.querySelector(".faq-question");


  question.addEventListener("click", () => {

    const isActive =
      item.classList.contains("active");


    // Close all
    faqItems.forEach(otherItem => {

      otherItem.classList.remove("active");

    });


    // Open clicked one
    if (!isActive) {

      item.classList.add("active");

    }

  });

});