// ========================================
// DEVICECARE - REPAIR BOOKING
// ========================================


// ========================================
// BOOKING DATA
// ========================================

const repairData = {

    step: 1,

    device: "",
    service: "",
    location: "",
    date: "",
    time: "",

    customer: {
        name: "",
        phone: "",
        email: "",
        message: ""
    }

};


// ========================================
// ELEMENTS
// ========================================

const steps = [
    document.getElementById("step1"),
    document.getElementById("step2"),
    document.getElementById("step3"),
    document.getElementById("step4")
];

const stepIndicators =
    document.querySelectorAll(".step");

const backBtn =
    document.getElementById("backBtn");

const nextBtn =
    document.getElementById("nextBtn");

const stepNavigation =
    document.getElementById("stepNavigation");

const successMessage =
    document.getElementById("successMessage");


// Summary elements

const summaryDevice =
    document.getElementById("summaryDevice");

const summaryService =
    document.getElementById("summaryService");

const summaryLocation =
    document.getElementById("summaryLocation");

const summaryDate =
    document.getElementById("summaryDate");

const summaryTime =
    document.getElementById("summaryTime");


// ========================================
// SHOW STEP
// ========================================

function showStep(stepNumber) {

    repairData.step = stepNumber;


    steps.forEach((step, index) => {

        if (index === stepNumber - 1) {

            step.classList.add("active");

        } else {

            step.classList.remove("active");

        }

    });


    // Update indicators

    stepIndicators.forEach((indicator, index) => {

        const number = index + 1;

        indicator.classList.remove(
            "active",
            "completed"
        );


        if (number === stepNumber) {

            indicator.classList.add("active");

        }


        if (number < stepNumber) {

            indicator.classList.add("completed");

        }

    });


    // Back button

    if (stepNumber === 1) {

        backBtn.classList.add("invisible");

    } else {

        backBtn.classList.remove("invisible");

    }


    // Next button

    if (stepNumber === 4) {

        nextBtn.classList.add("hidden");

    } else {

        nextBtn.classList.remove("hidden");

    }


    updateSummary();

}


// ========================================
// UPDATE SUMMARY
// ========================================

function updateSummary() {

    summaryDevice.textContent =
        repairData.device || "Not selected";

    summaryService.textContent =
        repairData.service || "Not selected";

    summaryLocation.textContent =
        repairData.location || "Not selected";

    summaryDate.textContent =
        repairData.date || "Not selected";

    summaryTime.textContent =
        repairData.time || "Not selected";


    // Change unavailable text color

    const summaryItems = [

        {
            element: summaryDevice,
            value: repairData.device
        },

        {
            element: summaryService,
            value: repairData.service
        },

        {
            element: summaryLocation,
            value: repairData.location
        },

        {
            element: summaryDate,
            value: repairData.date
        },

        {
            element: summaryTime,
            value: repairData.time
        }

    ];


    summaryItems.forEach(item => {

        if (item.value) {

            item.element.classList.remove(
                "text-gray-500"
            );

            item.element.classList.add(
                "text-white"
            );

        } else {

            item.element.classList.remove(
                "text-white"
            );

            item.element.classList.add(
                "text-gray-500"
            );

        }

    });

}


// ========================================
// DEVICE SELECTION
// ========================================

const deviceOptions =
    document.querySelectorAll(".device-option");


deviceOptions.forEach(option => {

    option.addEventListener("click", () => {

        deviceOptions.forEach(item => {

            item.classList.remove("selected");

        });


        option.classList.add("selected");


        repairData.device =
            option.dataset.device;


        updateSummary();

    });

});


// ========================================
// SERVICE SELECTION
// ========================================

const serviceOptions =
    document.querySelectorAll(".service-option");


serviceOptions.forEach(option => {

    option.addEventListener("click", () => {

        serviceOptions.forEach(item => {

            item.classList.remove("selected");

        });


        option.classList.add("selected");


        repairData.service =
            option.dataset.service;


        updateSummary();

    });

});


// ========================================
// LOCATION SELECTION
// ========================================

const locationOptions =
    document.querySelectorAll(".location-option");


locationOptions.forEach(option => {

    option.addEventListener("click", () => {

        locationOptions.forEach(item => {

            item.classList.remove("selected");

        });


        option.classList.add("selected");


        repairData.location =
            option.dataset.location;


        updateSummary();

    });

});


// ========================================
// LOCATION SEARCH
// ========================================

const locationSearch =
    document.getElementById("locationSearch");


if (locationSearch) {

    locationSearch.addEventListener("input", () => {

        const search =
            locationSearch.value
                .toLowerCase()
                .trim();


        locationOptions.forEach(option => {

            const city =
                option.dataset.city.toLowerCase();

            const zip =
                option.dataset.zip.toLowerCase();


            if (
                city.includes(search) ||
                zip.includes(search)
            ) {

                option.style.display = "";

            } else {

                option.style.display = "none";

            }

        });

    });

}


// ========================================
// DATE
// ========================================

const repairDate =
    document.getElementById("repairDate");


if (repairDate) {

    // Prevent selecting previous dates

    const today =
        new Date().toISOString().split("T")[0];

    repairDate.min = today;


    repairDate.addEventListener("change", () => {

        repairData.date =
            repairDate.value;

        updateSummary();

    });

}


// ========================================
// TIME
// ========================================

const repairTime =
    document.getElementById("repairTime");


if (repairTime) {

    repairTime.addEventListener("change", () => {

        repairData.time =
            repairTime.value;

        updateSummary();

    });

}


// ========================================
// VALIDATE CURRENT STEP
// ========================================

function validateStep() {


    // STEP 1

    if (repairData.step === 1) {

        if (!repairData.device) {

            alert("Please select your device.");

            return false;

        }

    }


    // STEP 2

    if (repairData.step === 2) {

        if (!repairData.service) {

            alert("Please select a repair service.");

            return false;

        }

    }


    // STEP 3

    if (repairData.step === 3) {

        if (!repairData.location) {

            alert("Please select a store location.");

            return false;

        }


        if (!repairData.date) {

            alert("Please select a repair date.");

            return false;

        }


        if (!repairData.time) {

            alert("Please select a repair time.");

            return false;

        }

    }


    return true;

}


// ========================================
// NEXT BUTTON
// ========================================

nextBtn.addEventListener("click", () => {

    if (!validateStep()) {

        return;

    }


    if (repairData.step < 4) {

        showStep(repairData.step + 1);

        window.scrollTo({
            top: 100,
            behavior: "smooth"
        });

    }

});


// ========================================
// BACK BUTTON
// ========================================

backBtn.addEventListener("click", () => {

    if (repairData.step > 1) {

        showStep(repairData.step - 1);

        window.scrollTo({
            top: 100,
            behavior: "smooth"
        });

    }

});


// ========================================
// BOOKING FORM
// ========================================

const bookingForm =
    document.getElementById("bookingForm");


bookingForm.addEventListener("submit", event => {

    event.preventDefault();


    // Collect customer details

    repairData.customer.name =
        document.getElementById("customerName").value.trim();

    repairData.customer.phone =
        document.getElementById("customerPhone").value.trim();

    repairData.customer.email =
        document.getElementById("customerEmail").value.trim();

    repairData.customer.message =
        document.getElementById("customerMessage").value.trim();


    // Check terms

    const terms =
        document.getElementById("terms");


    if (!terms.checked) {

        alert("Please accept the repair booking terms.");

        return;

    }


    // Show success

    bookingForm.classList.add("hidden");

    stepNavigation.classList.add("hidden");

    successMessage.classList.remove("hidden");


    // Save demo booking locally

    localStorage.setItem(
        "deviceCareBooking",
        JSON.stringify(repairData)
    );


    window.scrollTo({
        top: 100,
        behavior: "smooth"
    });

});


// ========================================
// URL SERVICE PRESELECT
// Example:
// repair.html?service=Screen%20Repair
// ========================================

const urlParams =
    new URLSearchParams(window.location.search);

const selectedService =
    urlParams.get("service");


if (selectedService) {

    const matchingService =
        [...serviceOptions].find(option =>

            option.dataset.service === selectedService

        );


    if (matchingService) {

        matchingService.classList.add("selected");

        repairData.service =
            matchingService.dataset.service;

        updateSummary();

    }

}


// ========================================
// MOBILE MENU
// ========================================

const menuBtn =
    document.getElementById("menuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");


if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("hidden");

    });

}


const mobileLinks =
    document.querySelectorAll("#mobileMenu a");


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.add("hidden");

    });

});


// ========================================
// NAVBAR SCROLL
// ========================================

const navbar =
    document.querySelector("header");


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


// ========================================
// INITIALIZE
// ========================================

showStep(1);
updateSummary();