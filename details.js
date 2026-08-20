// Get selected card
const destination = JSON.parse(localStorage.getItem("selectedDestination"));

if (!destination) {
    document.body.innerHTML = "<h2>Destination not found</h2>";
} else {
    // Set hero image
    document.getElementById("hero").style.backgroundImage = `url("${destination.image}")`;

    // Set name
    document.getElementById("name").innerText = destination.name;

    // Set country
    document.getElementById("country").innerText = destination.country;

    // Set rating
    document.getElementById("rating").innerText = destination.rating;

    // Set price
    document.getElementById("price").innerText = destination.price;

    // Set description
    document.getElementById("description").innerText = destination.description;

    // Set about
    document.getElementById("about").innerText = destination.about || "No information available.";

    // Set best time
    document.getElementById("bestTime").innerText = destination.bestTime || "No information available.";

    // Set things to do
    document.getElementById("thingsToDo").innerText = destination.thingsToDo || "No information available.";
}

// Book trip
document.getElementById("bookBtn").onclick = function() {
    alert("Your trip has been booked!");
};