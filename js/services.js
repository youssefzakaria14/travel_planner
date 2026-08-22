let myDiv = document.getElementById('myDiv')
fetch('data.json').
then(response=>response.json())
.then(data=>{
    data.trending.forEach(travel => {
        let div =`<div class="card m-3" style="width: 25rem;">
                    <img class="card-img-top" src='${travel.image}' alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title fs-4">${travel.name}</h5>
                        <p class="card-text text-secondary">${travel.description}</p>
                        <div class="d-flex justify-content-between">
                            <h3 style="color:#0ea5a8;">${travel.price}$</h3>
                        <button href="#" class="btn">Go somewhere</button>
                        </div>
                    </div>
                </div>`
        myDiv.innerHTML+=div
    });
}
)
.catch(error=>console.log(error)
)
let travel = data