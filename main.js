let changes = JSON.parse(localStorage.getItem("changes")) || [];
let adminCards = JSON.parse(localStorage.getItem("adminCards")) || [];
let editId = null;
// New: edit type
let editType = null;
// New: edit category
let editCategory = null;
// New: store data
let destinationsData = null;

async function loadDestinations() {
    const response = await fetch("data.json");
    const data = await response.json();
    destinationsData = data;
    const trendingContainer = document.getElementById("trendingContainer");

    data.trending.forEach(destination => {
        if (changes.includes(destination.id)) {
            return;
        }

        let updatedCard = JSON.parse(localStorage.getItem("updated_" + destination.id));

        // New: get updated card
        if (updatedCard) {
            destination = updatedCard;
        }

        const card = document.createElement("div");
        card.classList.add("col-md-4", "col-sm-12");

        card.innerHTML = `
            <div class="card">
                <img src="${destination.image}">
                <div class="card-body">
                    <h3>${destination.name}</h3>
                    <p><i class="bi bi-geo-alt-fill"></i> ${destination.country}</p>
                    <p><i class="bi bi-star-fill"></i> ${destination.rating}</p>
                    <p>${destination.description}</p>
                    <strong>From $${destination.price}</strong>
                    <br><br>
                    <button class="detailsBtn"><i class="bi bi-eye-fill"></i> View Details</button>
                    <br><br>
                    <button class="updateBtn"><i class="bi bi-pencil-square"></i> Update</button>
                    <button class="deleteBtn"><i class="bi bi-trash3-fill"></i> Delete</button>
                </div>
            </div>
        `;

        trendingContainer.appendChild(card);

        // New: view details
        card.querySelector(".detailsBtn").onclick = function() {
            localStorage.setItem("selectedDestination", JSON.stringify(destination));
            window.location.href = "details.html";
        };

        card.querySelector(".deleteBtn").onclick = function() {
            changes.push(destination.id);
            localStorage.setItem("changes", JSON.stringify(changes));
            card.remove();
        };

        // New: edit card
        card.querySelector(".updateBtn").onclick = function() {
            editId = destination.id;
            editType = "data";
            editCategory = "trending";
            document.getElementById("name").value = destination.name;
            document.getElementById("country").value = destination.country;
            document.getElementById("rating").value = destination.rating;
            document.getElementById("description").value = destination.description;
            document.getElementById("price").value = destination.price;
            document.getElementById("category").value = "trending";
            document.getElementById("cardImage").value = "";
            document.getElementById("cardForm").style.display = "block";
            document.getElementById("saveBtn").innerText = "Update";
        };
    });
    const coastalContainer = document.getElementById("coastalContainer");

    data.coastal.forEach(destination => {
        if (changes.includes(destination.id)) {
            return;
        }

        let updatedCard = JSON.parse(localStorage.getItem("updated_" + destination.id));

        // New: get updated card
        if (updatedCard) {
            destination = updatedCard;
        }

        const card = document.createElement("div");
        card.classList.add("col-md-4", "col-sm-12");

        card.innerHTML = `
            <div class="card">
                <img src="${destination.image}">
                <div class="card-body">
                    <h3>${destination.name}</h3>
                    <p><i class="bi bi-geo-alt-fill"></i> ${destination.country}</p>
                    <p><i class="bi bi-star-fill"></i> ${destination.rating}</p>
                    <p>${destination.description}</p>
                    <strong>From $${destination.price}</strong>
                    <br><br>
                    <button class="detailsBtn"><i class="bi bi-eye-fill"></i> View Details</button>
                    <br><br>
                    <button class="updateBtn"><i class="bi bi-pencil-square"></i> Update</button>
                    <button class="deleteBtn"><i class="bi bi-trash3-fill"></i> Delete</button>
                </div>
            </div>
        `;

        coastalContainer.appendChild(card);

        // New: view details
        card.querySelector(".detailsBtn").onclick = function() {
            localStorage.setItem("selectedDestination", JSON.stringify(destination));
            window.location.href = "details.html";
        };

        card.querySelector(".deleteBtn").onclick = function() {
            changes.push(destination.id);
            localStorage.setItem("changes", JSON.stringify(changes));
            card.remove();
        };

        // New: edit card
        card.querySelector(".updateBtn").onclick = function() {
            editId = destination.id;
            editType = "data";
            editCategory = "coastal";
            document.getElementById("name").value = destination.name;
            document.getElementById("country").value = destination.country;
            document.getElementById("rating").value = destination.rating;
            document.getElementById("description").value = destination.description;
            document.getElementById("price").value = destination.price;
            document.getElementById("category").value = "coastal";
            document.getElementById("cardImage").value = "";
            document.getElementById("cardForm").style.display = "block";
            document.getElementById("saveBtn").innerText = "Update";
        };
    });
    const adventureContainer = document.getElementById("adventureContainer");

    data.adventure.forEach(destination => {
        if (changes.includes(destination.id)) {
            return;
        }

        let updatedCard = JSON.parse(localStorage.getItem("updated_" + destination.id));

        // New: get updated card
        if (updatedCard) {
            destination = updatedCard;
        }

        const card = document.createElement("div");
        card.classList.add("col-md-4", "col-sm-12");

        card.innerHTML = `
            <div class="card">
                <img src="${destination.image}">
                <div class="card-body">
                    <h3>${destination.name}</h3>
                    <p><i class="bi bi-geo-alt-fill"></i> ${destination.country}</p>
                    <p><i class="bi bi-star-fill"></i> ${destination.rating}</p>
                    <p>${destination.description}</p>
                    <strong>From $${destination.price}</strong>
                    <br><br>
                    <button class="detailsBtn"><i class="bi bi-eye-fill"></i> View Details</button>
                    <br><br>
                    <button class="updateBtn"><i class="bi bi-pencil-square"></i> Update</button>
                    <button class="deleteBtn"><i class="bi bi-trash3-fill"></i> Delete</button>
                </div>
            </div>
        `;

        adventureContainer.appendChild(card);

        // New: view details
        card.querySelector(".detailsBtn").onclick = function() {
            localStorage.setItem("selectedDestination", JSON.stringify(destination));
            window.location.href = "details.html";
        };

        card.querySelector(".deleteBtn").onclick = function() {
            changes.push(destination.id);
            localStorage.setItem("changes", JSON.stringify(changes));
            card.remove();
        };

        // New: edit card
        card.querySelector(".updateBtn").onclick = function() {
            editId = destination.id;
            editType = "data";
            editCategory = "adventure";
            document.getElementById("name").value = destination.name;
            document.getElementById("country").value = destination.country;
            document.getElementById("rating").value = destination.rating;
            document.getElementById("description").value = destination.description;
            document.getElementById("price").value = destination.price;
            document.getElementById("category").value = "adventure";
            document.getElementById("cardImage").value = "";
            document.getElementById("cardForm").style.display = "block";
            document.getElementById("saveBtn").innerText = "Update";
        };
    });

    const culturalContainer = document.getElementById("culturalContainer");

    data.cultural.forEach(destination => {
        if (changes.includes(destination.id)) {
            return;
        }

        let updatedCard = JSON.parse(localStorage.getItem("updated_" + destination.id));

        // New: get updated card
        if (updatedCard) {
            destination = updatedCard;
        }

        const card = document.createElement("div");
        card.classList.add("col-md-4", "col-sm-12");

        card.innerHTML = `
            <div class="card">
                <img src="${destination.image}">
                <div class="card-body">
                    <h3>${destination.name}</h3>
                    <p><i class="bi bi-geo-alt-fill"></i> ${destination.country}</p>
                    <p><i class="bi bi-star-fill"></i> ${destination.rating}</p>
                    <p>${destination.description}</p>
                    <strong>From $${destination.price}</strong>
                    <br><br>
                    <button class="detailsBtn"><i class="bi bi-eye-fill"></i> View Details</button>
                    <br><br>
                    <button class="updateBtn"><i class="bi bi-pencil-square"></i> Update</button>
                    <button class="deleteBtn"><i class="bi bi-trash3-fill"></i> Delete</button>
                </div>
            </div>
        `;

        culturalContainer.appendChild(card);

        // New: view details
        card.querySelector(".detailsBtn").onclick = function() {
            localStorage.setItem("selectedDestination", JSON.stringify(destination));
            window.location.href = "details.html";
        };

        card.querySelector(".deleteBtn").onclick = function() {
            changes.push(destination.id);
            localStorage.setItem("changes", JSON.stringify(changes));
            card.remove();
        };

        // New: edit card
        card.querySelector(".updateBtn").onclick = function() {
            editId = destination.id;
            editType = "data";
            editCategory = "cultural";
            document.getElementById("name").value = destination.name;
            document.getElementById("country").value = destination.country;
            document.getElementById("rating").value = destination.rating;
            document.getElementById("description").value = destination.description;
            document.getElementById("price").value = destination.price;
            document.getElementById("category").value = "cultural";
            document.getElementById("cardImage").value = "";
            document.getElementById("cardForm").style.display = "block";
            document.getElementById("saveBtn").innerText = "Update";
        };
    });

    adminCards.forEach(destination => {
        const container = document.getElementById(destination.category + "Container");

        if (!container) {
            return;
        }

        const card = document.createElement("div");
        card.classList.add("col-md-4", "col-sm-12");

        card.innerHTML = `
            <div class="card">
                <img src="${destination.image}">
                <div class="card-body">
                    <h3>${destination.name}</h3>
                    <p><i class="bi bi-geo-alt-fill"></i> ${destination.country}</p>
                    <p><i class="bi bi-star-fill"></i> ${destination.rating}</p>
                    <p>${destination.description}</p>
                    <strong>From $${destination.price}</strong>
                    <br><br>
                    <button class="detailsBtn"><i class="bi bi-eye-fill"></i> View Details</button>
                    <br><br>
                    <button class="updateBtn"><i class="bi bi-pencil-square"></i> Update</button>
                    <button class="deleteBtn"><i class="bi bi-trash3-fill"></i> Delete</button>
                </div>
            </div>
        `;

        container.appendChild(card);

        // New: view details
        card.querySelector(".detailsBtn").onclick = function() {
            localStorage.setItem("selectedDestination", JSON.stringify(destination));
            window.location.href = "details.html";
        };

        card.querySelector(".deleteBtn").onclick = function() {
            adminCards = adminCards.filter(item => item.id !== destination.id);
            localStorage.setItem("adminCards", JSON.stringify(adminCards));
            card.remove();
        };

        // New: edit admin card
        card.querySelector(".updateBtn").onclick = function() {
            editId = destination.id;
            editType = "admin";
            editCategory = destination.category;
            document.getElementById("name").value = destination.name;
            document.getElementById("country").value = destination.country;
            document.getElementById("rating").value = destination.rating;
            document.getElementById("description").value = destination.description;
            document.getElementById("price").value = destination.price;
            document.getElementById("category").value = destination.category;
            document.getElementById("cardImage").value = "";
            document.getElementById("cardForm").style.display = "block";
            document.getElementById("saveBtn").innerText = "Update";
        };
    });
}

// New: add card button
document.getElementById("newCardBtn").onclick = function() {
    editId = null;
    editType = null;
    editCategory = null;
    document.getElementById("name").value = "";
    document.getElementById("country").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("description").value = "";
    document.getElementById("price").value = "";
    document.getElementById("category").value = "trending";
    document.getElementById("cardImage").value = "";
    document.getElementById("cardForm").style.display = "block";
    document.getElementById("saveBtn").innerText = "Add Card";
};

// New: save card
document.getElementById("saveBtn").onclick = function() {
    const name = document.getElementById("name").value;
    const country = document.getElementById("country").value;
    const rating = document.getElementById("rating").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;
    const file = document.getElementById("cardImage").files[0];

    if (!name || !country || !rating || !description || !price) {
        alert("Please fill all fields");
        return;
    }

    // New: update data card
    if (editId !== null && editType === "data") {
        let oldCard = null;

        if (destinationsData[editCategory]) {
            oldCard = destinationsData[editCategory].find(item => item.id === editId);
        }

        if (!oldCard) {
            alert("Card not found");
            return;
        }

        let image = oldCard.image;

        // New: update image
        if (file) {
            const reader = new FileReader();

            reader.onload = function() {
                const updatedCard = {
                    id: editId,
                    name: name,
                    country: country,
                    image: reader.result,
                    rating: rating,
                    description: description,
                    price: price
                };

                localStorage.setItem("updated_" + editId, JSON.stringify(updatedCard));
                document.getElementById("cardForm").style.display = "none";
                location.reload();
            };

            reader.readAsDataURL(file);
        } else {
            const updatedCard = {
                id: editId,
                name: name,
                country: country,
                image: image,
                rating: rating,
                description: description,
                price: price
            };

            localStorage.setItem("updated_" + editId, JSON.stringify(updatedCard));
            document.getElementById("cardForm").style.display = "none";
            location.reload();
        }

        return;
    }

    // New: update admin card
    if (editId !== null && editType === "admin") {
        const index = adminCards.findIndex(item => item.id === editId);

        if (index === -1) {
            alert("Card not found");
            return;
        }

        const updateAdminCard = function(image) {
            adminCards[index].name = name;
            adminCards[index].country = country;
            adminCards[index].rating = rating;
            adminCards[index].description = description;
            adminCards[index].price = price;
            adminCards[index].category = category;
            adminCards[index].image = image;

            localStorage.setItem("adminCards", JSON.stringify(adminCards));
            document.getElementById("cardForm").style.display = "none";
            location.reload();
        };

        // New: update image
        if (file) {
            const reader = new FileReader();

            reader.onload = function() {
                updateAdminCard(reader.result);
            };

            reader.readAsDataURL(file);
        } else {
            updateAdminCard(adminCards[index].image);
        }

        return;
    }

    // New: image required for new card
    if (!file) {
        alert("Choose an image");
        return;
    }

    const reader = new FileReader();

    reader.onload = function() {
        const newCard = {
            // New: unique ID
            id: Date.now(),
            name: name,
            country: country,
            image: reader.result,
            rating: rating,
            description: description,
            price: price,
            category: category
        };

        adminCards.push(newCard);

        // New: save admin card
        localStorage.setItem("adminCards", JSON.stringify(adminCards));
        document.getElementById("cardForm").style.display = "none";
        location.reload();
    };

    reader.readAsDataURL(file);
};

// Start loading cards
loadDestinations();