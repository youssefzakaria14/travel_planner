async function Destinations() {

    try {

        let response = await fetch("data.json");

        let data = await response.json();

        let trendingContainer = document.getElementById("trendingContainer");

        data.trending.forEach(destination => {

            const card = document.createElement("div");

            card.classList.add("col-lg-4","col-md-6", "col-sm-12");

            card.innerHTML = `
            
                <div class="card">

                    <img src="${destination.image}">

                    <div class="card-body">
                           
                         <div class = "rate">
                         <h3>${destination.name}</h3>
                         <p> <span><i class="bi bi-star-fill"></i></span> ${destination.rating}</p>
                         </div>
                    

                        <p> <span><i class="bi bi-geo-alt"></i></span> ${destination.country}</p>
                            
                       <div class="tags"> ${destination.tags.map(tag => `<p>${tag}</p>`).join("")}</div>

                        <p>${destination.description}</p>
                         <div class="price">
                        <strong>
                            From $ <span> ${destination.price}</span>
                        </strong>

                        <button>
                            View Details
                        </button>
                        </div>

                    </div>

                </div>

            `;

            trendingContainer.appendChild(card);

        });


        let coastalContainer = document.getElementById("coastalContainer");

        data.coastal.forEach(destination => {

            let card = document.createElement("div");

            card.classList.add("col-lg-4","col-md-6", "col-sm-12");

            card.innerHTML = `
            
                 <div class="card">

                    <img src="${destination.image}">

                    <div class="card-body">
                           
                         <div class = "rate">
                         <h3>${destination.name}</h3>
                         <p> <span><i class="bi bi-star-fill"></i></span> ${destination.rating}</p>
                         </div>
                    

                        <p> <span><i class="bi bi-geo-alt"></i></span> ${destination.country}</p>
                            
                       <div class="tags"> ${destination.tags.map(tag => `<p>${tag}</p>`).join("")}</div>

                        <p>${destination.description}</p>
                          
                        <div class="price">
                        <strong>
                           From $ <span> ${destination.price}</span>
                        </strong>

                        <button>
                            View Details
                        </button>
                        </div>

                    </div>

                </div>

            `;

            coastalContainer.appendChild(card);

        });


        let adventureContainer = document.getElementById("adventureContainer");

        data.adventure.forEach(destination => {

            let card = document.createElement("div");

            card.classList.add("col-lg-4","col-md-6", "col-sm-12");

            card.innerHTML = `
            
               <div class="card">

                    <img src="${destination.image}">

                    <div class="card-body">
                           
                         <div class = "rate">
                         <h3>${destination.name}</h3>
                         <p> <span><i class="bi bi-star-fill"></i></span> ${destination.rating}</p>
                         </div>
                    

                        <p> <span><i class="bi bi-geo-alt"></i></span> ${destination.country}</p>
                            
                       <div class="tags"> ${destination.tags.map(tag => `<p>${tag}</p>`).join("")}</div>

                        <p>${destination.description}</p>

                       <div class="price">
                        <strong>
                            From $ <span> ${destination.price}</span>
                        </strong>

                        <button>
                            View Details
                        </button>
                        </div>


                    </div>

                </div>

            `;

            adventureContainer.appendChild(card);

        });


        let culturalContainer = document.getElementById("culturalContainer");

        data.cultural.forEach(destination => {

            let card = document.createElement("div");

            card.classList.add("col-lg-4","col-md-6", "col-sm-12");

            card.innerHTML = `
            
                <div class="card">

                    <img src="${destination.image}">

                    <div class="card-body">
                           
                         <div class = "rate">
                         <h3>${destination.name}</h3>
                         <p> <span><i class="bi bi-star-fill"></i></span> ${destination.rating}</p>
                         </div>
                    

                        <p> <span><i class="bi bi-geo-alt"></i></span> ${destination.country}</p>
                            
                       <div class="tags"> ${destination.tags.map(tag => `<p>${tag}</p>`).join("")}</div>

                        <p>${destination.description}</p>

                       <div class="price">
                        <strong>
                            From $ <span> ${destination.price}</span>
                        </strong>

                        <button>
                            View Details
                        </button>
                        </div>


                    </div>

                </div>

            `;

            culturalContainer.appendChild(card);

        });

    }

    catch (error) {

        console.log("Error:", error);

    }

}

Destinations();





document.getElementById("searchBtn").onclick = function () {

    let search = document.getElementById("searchInput").value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    let found = false;

    cards.forEach(function (card) {

        if (card.innerText.toLowerCase().includes(search)) {
            card.parentElement.style.display = "";
            found = true;
        } else {
            card.parentElement.style.display = "none";
            
        }

    });

    if (found == false) {
        
        document.getElementById("error").innerHTML = "Destination not found";
         
    } else {
        document.getElementById("error").innerHTML = "";
    }

    document.querySelectorAll(".section-title").forEach(function(item){
        item.style.display="none";
    });

};