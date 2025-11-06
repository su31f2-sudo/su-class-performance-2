const phonesContainer = document.getElementById("phones-container");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const skeletonLoader = document.getElementById("skeleton-loader");

// Load default phones
document.addEventListener("DOMContentLoaded", () => {
  loadPhones("samsung");
});

// Search event
searchBtn.addEventListener("click", handleSearch);
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleSearch();
});

function handleSearch() {
  const searchText = searchInput.value.trim();
  if (searchText) loadPhones(searchText);
}

// Show skeleton loader
function showSkeleton() {
  skeletonLoader.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    skeletonLoader.innerHTML += `
      <div class="skeleton">
        <div class="skeleton-img"></div>
        <div class="skeleton-line" style="width:80%"></div>
        <div class="skeleton-line" style="width:60%"></div>
        <div class="skeleton-line" style="width:40%"></div>
      </div>
    `;
  }
  skeletonLoader.style.display = "grid";
  phonesContainer.innerHTML = "";
}

// Hide skeleton loader
function hideSkeleton() {
  skeletonLoader.style.display = "none";
}

// Load phones
async function loadPhones(searchText = "samsung") {
  showSkeleton();
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    );
    const data = await res.json();
    displayPhones(data.data);
  } catch (error) {
    phonesContainer.innerHTML = `<p style="text-align:center;">❌ Error loading phones. Please try again.</p>`;
  } finally {
    hideSkeleton();
  }
}

// Display phones
function displayPhones(phones) {
  if (!phones || phones.length === 0) {
    phonesContainer.innerHTML = `<p style="text-align:center;">No phones found.</p>`;
    return;
  }

  phonesContainer.innerHTML = phones
    .slice(0, 20)
    .map(
      (phone) => `
    <div class="card">
      <div class="card-image">
        <img src="${phone.image}" alt="${phone.phone_name}" />
      </div>
      <div class="card-content">
        <h3 class="card-title">${phone.phone_name}</h3>
        <p class="card-description">${
          phone.brand
        } smartphone with amazing performance.</p>
        <div class="card-price">$${Math.floor(Math.random() * 400) + 300}</div>
        <button class="btn" data-slug="${phone.slug}">Show Details</button>
      </div>
    </div>
  `
    )
    .join("");
}

// Click handler for details
phonesContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    const slug = e.target.dataset.slug;
    showDetails(slug);
  }
});

function showDetails(phoneSlug) {
  alert(`Phone Details:\nSlug: ${phoneSlug}`);
}
