const destination = JSON.parse(localStorage.getItem("selectedDestination"));
const container = document.getElementById("detailsContainer");

if (!destination) {
    container.innerHTML = `
        <div class="alert alert-danger mt-5">
            Destination not found.
        </div>
    `;
} else {
    container.innerHTML = `
        <div class="hero">
            <img src="${destination.image}" alt="${destination.name}">
            <div class="hero-body">
                <h1>${destination.name}</h1>
                <p><i class="bi bi-geo-alt-fill"></i>${destination.country}</p>
                <p><i class="bi bi-star-fill"></i>${destination.rating}</p>
                <p class="description">${destination.description}</p>
                <h4>From $${destination.price}</h4>
                <button class="book-btn">
                    <i class="bi bi-airplane-fill"></i>
                    Book This Trip
                </button>
            </div>
        </div>

        <div class="info-card">
            <h3><i class="bi bi-info-circle-fill"></i>About Destination</h3>
            <p>${destination.about || "No information available."}</p>
        </div>

        <div class="info-card">
            <h3><i class="bi bi-activity"></i>Things To Do</h3>
            <p>${destination.thingsToDo || "No information available."}</p>
        </div>

        <div class="info-card">
            <h3><i class="bi bi-egg-fried"></i>Food</h3>
            <p>${destination.food || "No information available."}</p>
        </div>

        <div class="info-card">
            <h3><i class="bi bi-building"></i>Best Hotels</h3>
            <p>${destination.hotels || "No information available."}</p>
        </div>

        <div class="info-card">
            <h3><i class="bi bi-calendar-check"></i>Best Time To Visit</h3>
            <p>${destination.bestTime || "No information available."}</p>
        </div>

        <div class="info-card">
            <h3><i class="bi bi-lightbulb-fill"></i>Travel Tips</h3>
            <p>${destination.travelTips || "No information available."}</p>
        </div>
    `;

    document.querySelector(".book-btn").onclick = function () {
        alert("Your trip to " + destination.name + " has been selected!");
    };
}