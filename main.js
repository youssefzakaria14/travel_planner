let changes = JSON.parse(localStorage.getItem("changes")) || [];
let adminCards = JSON.parse(localStorage.getItem("adminCards")) || [];
let editId = null;
let editType = null;
let editCategory = null;
let destinationsData = null;

async function loadDestinations() {
    const response = await fetch("data.json");
    const data = await response.json();
    destinationsData = data;

    function createCard(destination, container) {
        const card = document.createElement("div");
        card.classList.add("col-lg-4", "col-md-6", "col-sm-12");
        card.innerHTML = `
            <div class="card">
                <img src="${destination.image}">
                <div class="card-body">
                    <h3>${destination.name}</h3>
                    <p><i class="bi bi-geo-alt-fill"></i>${destination.country}</p>
                    <p><i class="bi bi-star-fill"></i>${destination.rating}</p>
                    <p>${destination.description}</p>
                    <strong>From $${destination.price}</strong>
                    <br><br>
                    <button class="detailsBtn"><i class="bi bi-eye-fill"></i>View Details</button>
                    <br><br>
                    <button class="updateBtn"><i class="bi bi-pencil-square"></i>Update</button>
                    <button class="deleteBtn"><i class="bi bi-trash3-fill"></i>Delete</button>
                </div>
            </div>
        `;
        container.appendChild(card);

        card.querySelector(".detailsBtn").onclick = function () {
            localStorage.setItem("selectedDestination", JSON.stringify(destination));
            window.location.href = "details.html";
        };

        card.querySelector(".deleteBtn").onclick = function () {
            if (editType === "admin") {
                adminCards = adminCards.filter(item => item.id !== destination.id);
                localStorage.setItem("adminCards", JSON.stringify(adminCards));
            } else {
                changes.push(destination.id);
                localStorage.setItem("changes", JSON.stringify(changes));
            }
            card.remove();
        };

        card.querySelector(".updateBtn").onclick = function () {
            editId = destination.id;
            editType = destination.category ? "admin" : "data";
            editCategory = destination.category || "";

            document.getElementById("name").value = destination.name || "";
            document.getElementById("country").value = destination.country || "";
            document.getElementById("rating").value = destination.rating || "";
            document.getElementById("description").value = destination.description || "";
            document.getElementById("price").value = destination.price || "";
            document.getElementById("about").value = destination.about || "";
            document.getElementById("thingsToDo").value = destination.thingsToDo || "";
            document.getElementById("food").value = destination.food || "";
            document.getElementById("hotels").value = destination.hotels || "";
            document.getElementById("bestTime").value = destination.bestTime || "";
            document.getElementById("travelTips").value = destination.travelTips || "";
            document.getElementById("category").value = destination.category || "trending";
            document.getElementById("cardImage").value = "";
            document.getElementById("cardForm").style.display = "block";
            document.getElementById("saveBtn").innerText = "Update";
        };
    }

    const trendingContainer = document.getElementById("trendingContainer");

    data.trending.forEach(destination => {
        if (changes.includes(destination.id)) return;
        const updatedCard = JSON.parse(localStorage.getItem("updated_" + destination.id));
        if (updatedCard) destination = updatedCard;
        createCard(destination, trendingContainer);
    });

    const coastalContainer = document.getElementById("coastalContainer");

    data.coastal.forEach(destination => {
        if (changes.includes(destination.id)) return;
        const updatedCard = JSON.parse(localStorage.getItem("updated_" + destination.id));
        if (updatedCard) destination = updatedCard;
        createCard(destination, coastalContainer);
    });

    const adventureContainer = document.getElementById("adventureContainer");

    data.adventure.forEach(destination => {
        if (changes.includes(destination.id)) return;
        const updatedCard = JSON.parse(localStorage.getItem("updated_" + destination.id));
        if (updatedCard) destination = updatedCard;
        createCard(destination, adventureContainer);
    });

    const culturalContainer = document.getElementById("culturalContainer");

    data.cultural.forEach(destination => {
        if (changes.includes(destination.id)) return;
        const updatedCard = JSON.parse(localStorage.getItem("updated_" + destination.id));
        if (updatedCard) destination = updatedCard;
        createCard(destination, culturalContainer);
    });

    adminCards.forEach(destination => {
        const container = document.getElementById(destination.category + "Container");
        if (!container) return;
        createCard(destination, container);
    });
}

document.getElementById("newCardBtn").onclick = function () {
    editId = null;
    editType = null;
    editCategory = null;

    document.getElementById("name").value = "";
    document.getElementById("country").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("description").value = "";
    document.getElementById("price").value = "";
    document.getElementById("about").value = "";
    document.getElementById("thingsToDo").value = "";
    document.getElementById("food").value = "";
    document.getElementById("hotels").value = "";
    document.getElementById("bestTime").value = "";
    document.getElementById("travelTips").value = "";
    document.getElementById("category").value = "trending";
    document.getElementById("cardImage").value = "";
    document.getElementById("cardForm").style.display = "block";
    document.getElementById("saveBtn").innerText = "Add Card";
};

document.getElementById("saveBtn").onclick = function () {
    const name = document.getElementById("name").value;
    const country = document.getElementById("country").value;
    const rating = document.getElementById("rating").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const about = document.getElementById("about").value;
    const thingsToDo = document.getElementById("thingsToDo").value;
    const food = document.getElementById("food").value;
    const hotels = document.getElementById("hotels").value;
    const bestTime = document.getElementById("bestTime").value;
    const travelTips = document.getElementById("travelTips").value;
    const category = document.getElementById("category").value;
    const file = document.getElementById("cardImage").files[0];

    if (!name || !country || !rating || !description || !price) {
        alert("Please fill all fields");
        return;
    }

    if (editId !== null && editType === "data") {
        let oldCard = destinationsData[editCategory].find(item => item.id === editId);

        if (!oldCard) {
            alert("Card not found");
            return;
        }

        const oldUpdated = JSON.parse(localStorage.getItem("updated_" + editId));

        if (oldUpdated) oldCard = oldUpdated;

        function saveDataCard(image) {
            const updatedCard = {
                id: editId,
                name: name,
                country: country,
                image: image,
                rating: rating,
                description: description,
                price: price,
                about: about,
                thingsToDo: thingsToDo,
                food: food,
                hotels: hotels,
                bestTime: bestTime,
                travelTips: travelTips
            };

            localStorage.setItem("updated_" + editId, JSON.stringify(updatedCard));
            document.getElementById("cardForm").style.display = "none";
            location.reload();
        }

        if (file) {
            const reader = new FileReader();
            reader.onload = function () {
                saveDataCard(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            saveDataCard(oldCard.image);
        }

        return;
    }

    if (editId !== null && editType === "admin") {
        const index = adminCards.findIndex(item => item.id === editId);

        if (index === -1) {
            alert("Card not found");
            return;
        }

        function updateAdminCard(image) {
            adminCards[index] = {
                id: editId,
                name: name,
                country: country,
                image: image,
                rating: rating,
                description: description,
                price: price,
                category: category,
                about: about,
                thingsToDo: thingsToDo,
                food: food,
                hotels: hotels,
                bestTime: bestTime,
                travelTips: travelTips
            };

            localStorage.setItem("adminCards", JSON.stringify(adminCards));
            document.getElementById("cardForm").style.display = "none";
            location.reload();
        }

        if (file) {
            const reader = new FileReader();
            reader.onload = function () {
                updateAdminCard(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            updateAdminCard(adminCards[index].image);
        }

        return;
    }

    if (!file) {
        alert("Choose an image");
        return;
    }

    const reader = new FileReader();

    reader.onload = function () {
        const newCard = {
            id: Date.now(),
            name: name,
            country: country,
            image: reader.result,
            rating: rating,
            description: description,
            price: price,
            category: category,
            about: about,
            thingsToDo: thingsToDo,
            food: food,
            hotels: hotels,
            bestTime: bestTime,
            travelTips: travelTips
        };

        adminCards.push(newCard);
        localStorage.setItem("adminCards", JSON.stringify(adminCards));
        document.getElementById("cardForm").style.display = "none";
        location.reload();
    };

    reader.readAsDataURL(file);
};

loadDestinations();



document.getElementById("searchInput").oninput = function () {

    let search = this.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    let error = document.getElementById("error");

    let found = false;

    let admin = document.querySelector(".admin-area");

    let titles = document.querySelectorAll("h2");


    if (search != "") {

        admin.style.display = "none";

        titles.forEach(title => {
            title.style.display = "none";
        });

    } else {

        admin.style.display = "";

        titles.forEach(title => {
            title.style.display = "";
        });
    }


    cards.forEach(card => {

        if (card.innerText.toLowerCase().includes(search)) {

            card.parentElement.style.display = "";

            found = true;

        } else {

            card.parentElement.style.display = "none";
        }

    });


    if (!found && search != "") {

        error.innerText = "Destination not found";

        titles.forEach(title => {
            title.style.display = "none";
        });

    } else {

        error.innerText = "";

        if (search == "") {

            titles.forEach(title => {
                title.style.display = "";
            });
        }
    }

};