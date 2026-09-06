// ========================================
// DEVICECARE - SERVICES PAGE
// ========================================

const services = [

    {
        id: 1,
        title: "Screen Repair",
        category: "phone",
        icon: "📱",
        description: "Cracked, broken or unresponsive screen repair.",
        price: "From $79"
    },

    {
        id: 2,
        title: "Battery Replacement",
        category: "phone",
        icon: "🔋",
        description: "Restore battery life and improve device performance.",
        price: "From $59"
    },

    {
        id: 3,
        title: "Charging Port Repair",
        category: "hardware",
        icon: "⚡",
        description: "Fix charging and connection problems.",
        price: "From $69"
    },

    {
        id: 4,
        title: "Camera Repair",
        category: "phone",
        icon: "📷",
        description: "Repair camera focus, lens and camera hardware issues.",
        price: "From $89"
    },

    {
        id: 5,
        title: "Tablet Screen Repair",
        category: "tablet",
        icon: "📲",
        description: "Professional tablet display replacement.",
        price: "From $99"
    },

    {
        id: 6,
        title: "Liquid Damage",
        category: "hardware",
        icon: "💧",
        description: "Device inspection and repair after liquid exposure.",
        price: "From $49"
    },

    {
        id: 7,
        title: "Speaker Repair",
        category: "hardware",
        icon: "🔊",
        description: "Fix distorted, low or missing device audio.",
        price: "From $59"
    },

    {
        id: 8,
        title: "Button Repair",
        category: "hardware",
        icon: "🔘",
        description: "Repair damaged or unresponsive physical buttons.",
        price: "From $49"
    },

    {
        id: 9,
        title: "Software Troubleshooting",
        category: "phone",
        icon: "⚙️",
        description: "Solve common software and performance problems.",
        price: "From $39"
    }

];


// ========================================
// ELEMENTS
// ========================================

const serviceGrid = document.getElementById("serviceGrid");
const emptyState = document.getElementById("emptyState");
const filterButtons = document.querySelectorAll(".filter-btn");


// ========================================
// RENDER SERVICES
// ========================================

function renderServices(category = "all") {

    const filteredServices =
        category === "all"
            ? services
            : services.filter(service => service.category === category);


    serviceGrid.innerHTML = "";


    if (filteredServices.length === 0) {

        emptyState.classList.remove("hidden");

        return;

    }


    emptyState.classList.add("hidden");


    filteredServices.forEach(service => {

        const card = document.createElement("div");

        card.className =
            "service-card reveal border border-white/10 bg-white/[0.025] rounded-3xl p-7";


        card.innerHTML = `

            <div
                class="w-14 h-14 rounded-2xl bg-[#d8ff3e]/10 flex items-center justify-center text-2xl"
            >
                ${service.icon}
            </div>

            <div class="flex items-center justify-between gap-4 mt-7">

                <h3 class="text-xl font-bold">
                    ${service.title}
                </h3>

                <span class="text-xs text-[#d8ff3e] whitespace-nowrap">
                    ${service.price}
                </span>

            </div>

            <p class="text-gray-500 text-sm leading-6 mt-3">
                ${service.description}
            </p>

            <a
                href="repair.html?service=${encodeURIComponent(service.title)}"
                class="inline-flex mt-6 text-sm text-[#d8ff3e] hover:text-white transition"
            >
                Book this repair →
            </a>

        `;


        serviceGrid.appendChild(card);


        setTimeout(() => {

            card.classList.add("show");

        }, 50);

    });

}


// ========================================
// FILTER
// ========================================

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const filter =
            button.getAttribute("data-filter");


        renderServices(filter);

    });

});


// ========================================
// MOBILE MENU
// ========================================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

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


// ========================================
// INITIAL LOAD
// ========================================

renderServices();