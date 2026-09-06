// ==========================================
// DEVICECARE LOCATIONS
// ==========================================

const locations = [
  {
    id: 1,
    city: "New York",
    state: "NY",
    zip: "10001",
    address: "123 5th Avenue",
    phone: "(212) 555-0182",
    hours: "Mon – Sat · 9 AM – 7 PM",
    services: ["Phone", "Tablet"]
  },

  {
    id: 2,
    city: "Los Angeles",
    state: "CA",
    zip: "90001",
    address: "456 S Grand Ave",
    phone: "(213) 555-0137",
    hours: "Mon – Sat · 9 AM – 7 PM",
    services: ["Phone", "Tablet"]
  },

  {
    id: 3,
    city: "Houston",
    state: "TX",
    zip: "77002",
    address: "789 Main Street",
    phone: "(713) 555-0194",
    hours: "Mon – Sat · 9 AM – 7 PM",
    services: ["Phone", "Tablet"]
  },

  {
    id: 4,
    city: "Chicago",
    state: "IL",
    zip: "60601",
    address: "200 N Michigan Ave",
    phone: "(312) 555-0166",
    hours: "Mon – Sat · 9 AM – 7 PM",
    services: ["Phone", "Tablet"]
  },

  {
    id: 5,
    city: "Miami",
    state: "FL",
    zip: "33130",
    address: "100 Brickell Ave",
    phone: "(305) 555-0118",
    hours: "Mon – Sat · 9 AM – 7 PM",
    services: ["Phone", "Tablet"]
  },

  {
    id: 6,
    city: "Phoenix",
    state: "AZ",
    zip: "85004",
    address: "50 E Washington St",
    phone: "(602) 555-0175",
    hours: "Mon – Sat · 9 AM – 7 PM",
    services: ["Phone", "Tablet"]
  },

  {
    id: 7,
    city: "Dallas",
    state: "TX",
    zip: "75201",
    address: "300 Elm Street",
    phone: "(214) 555-0149",
    hours: "Mon – Sat · 9 AM – 7 PM",
    services: ["Phone", "Tablet"]
  },

  {
    id: 8,
    city: "Seattle",
    state: "WA",
    zip: "98101",
    address: "500 Pine Street",
    phone: "(206) 555-0126",
    hours: "Mon – Sat · 9 AM – 7 PM",
    services: ["Phone", "Tablet"]
  }
];


// ==========================================
// ELEMENTS
// ==========================================

const locationSearch = document.getElementById("locationSearch");
const stateFilter = document.getElementById("stateFilter");
const locationGrid = document.getElementById("locationGrid");
const emptyLocations = document.getElementById("emptyLocations");
const locationCount = document.getElementById("locationCount");


// ==========================================
// POPULATE STATE FILTER
// ==========================================

function populateStates() {

  const states = [...new Set(
    locations.map(location => location.state)
  )].sort();

  states.forEach(state => {

    const option = document.createElement("option");

    option.value = state;
    option.textContent = state;

    stateFilter.appendChild(option);

  });
}


// ==========================================
// CREATE LOCATION CARD
// ==========================================

function createLocationCard(location) {

  const servicesHTML = location.services
    .map(service => `
      <span class="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs text-gray-400">
        ${service}
      </span>
    `)
    .join("");


  return `
    <article
      class="location-card border border-white/10 rounded-3xl p-6 bg-white/[0.025]"
    >

      <!-- Top -->
      <div class="flex items-start justify-between gap-4">

        <div>

          <div class="flex items-center gap-2 mb-3">

            <span class="w-2.5 h-2.5 rounded-full bg-lime"></span>

            <span class="text-xs uppercase tracking-wider text-gray-500">
              DeviceCare Store
            </span>

          </div>

          <h3 class="text-2xl font-bold">
            ${location.city}
          </h3>

          <p class="text-gray-500 mt-1">
            ${location.state} ${location.zip}
          </p>

        </div>


        <div class="w-11 h-11 rounded-xl bg-lime/10 border border-lime/20 flex items-center justify-center text-xl">
          📍
        </div>

      </div>


      <!-- Details -->
      <div class="mt-7 space-y-4">

        <div class="flex gap-3">

          <span class="text-gray-600">⌂</span>

          <div>
            <p class="text-xs text-gray-600 uppercase">
              Address
            </p>

            <p class="text-sm text-gray-300 mt-1">
              ${location.address}
            </p>
          </div>

        </div>


        <div class="flex gap-3">

          <span class="text-gray-600">☎</span>

          <div>
            <p class="text-xs text-gray-600 uppercase">
              Phone
            </p>

            <p class="text-sm text-gray-300 mt-1">
              ${location.phone}
            </p>
          </div>

        </div>


        <div class="flex gap-3">

          <span class="text-gray-600">◷</span>

          <div>
            <p class="text-xs text-gray-600 uppercase">
              Hours
            </p>

            <p class="text-sm text-gray-300 mt-1">
              ${location.hours}
            </p>
          </div>

        </div>

      </div>


      <!-- Services -->
      <div class="flex flex-wrap gap-2 mt-7">

        ${servicesHTML}

      </div>


      <!-- Button -->
      <a
        href="repair.html?location=${encodeURIComponent(location.city)}"
        class="mt-7 w-full bg-lime text-black py-3.5 rounded-xl font-bold text-sm flex items-center justify-center hover:scale-[1.02] transition"
      >
        Book Repair
      </a>

    </article>
  `;
}


// ==========================================
// RENDER LOCATIONS
// ==========================================

function renderLocations() {

  const searchValue =
    locationSearch.value.toLowerCase().trim();

  const selectedState =
    stateFilter.value;


  const filteredLocations = locations.filter(location => {

    const searchableText = `
      ${location.city}
      ${location.state}
      ${location.zip}
      ${location.address}
      ${location.phone}
    `.toLowerCase();


    const matchesSearch =
      searchableText.includes(searchValue);


    const matchesState =
      selectedState === "all" ||
      location.state === selectedState;


    return matchesSearch && matchesState;

  });


  // Clear previous cards
  locationGrid.innerHTML = "";


  // Update count
  locationCount.textContent =
    `${filteredLocations.length} location${
      filteredLocations.length !== 1 ? "s" : ""
    } found`;


  // Empty state
  if (filteredLocations.length === 0) {

    emptyLocations.classList.remove("hidden");

    return;

  }


  emptyLocations.classList.add("hidden");


  // Render
  filteredLocations.forEach(location => {

    locationGrid.innerHTML += createLocationCard(location);

  });
}


// ==========================================
// SEARCH EVENT
// ==========================================

locationSearch.addEventListener("input", renderLocations);


// ==========================================
// STATE FILTER EVENT
// ==========================================

stateFilter.addEventListener("change", renderLocations);


// ==========================================
// URL LOCATION PARAMETER
// Example:
// locations.html?location=Houston
// ==========================================

const urlParams = new URLSearchParams(window.location.search);

const locationParam = urlParams.get("location");

if (locationParam) {

  locationSearch.value = locationParam;

}


// ==========================================
// MOBILE MENU
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");


menuBtn.addEventListener("click", () => {

  mobileMenu.classList.toggle("hidden");

});


// Close mobile menu after clicking link

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
// INITIALIZE
// ==========================================

populateStates();
renderLocations();