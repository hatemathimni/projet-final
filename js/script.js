list=[
    {
        "nom" : "Pelle sur chenille 340",
        "Nparc":"08034" ,
        "emplacement":"Chantier 806 Madjerdha" ,
        "tauxjournalier":320,
        "conducteur":"brahim Trabelssi",
        "image" : "pc dx340.jpg",
    },
    {
        "nom" : "Pelle sur chenille 420",
        "Nparc": "08028",
        "emplacement":"Chantier 812 ben arous",
        "tauxjournalier": 380,
        "conducteur": "Najib Abidi",
        "image":"pc dx420.jpg" ,
    },
    {
        "nom" : "Pelle sur chenille 480",
        "Nparc": "08039",
        "emplacement":"Chantier 805 Sousse",
        "tauxjournalier":400,
        "conducteur": "Abderahmen Mahmoud",
        "image":"pc dx480.jpg",
    },
    {
        "nom" : "Pelle sur chenille 520",
        "Nparc": "08042",
        "emplacement": "Chantier 812 Ben Arous",
        "tauxjournalier":500,
        "conducteur":"Sofienne Grassi",
        "image":"pc dx520.jpg",
    },
    {
        "nom" : "Chargeuse sd310",
        "Nparc": "20028",
        "emplacement": "Chantier 806 Madjerdha",
        "tauxjournalier":200 ,
        "conducteur": "Adel Fadhel",
        "image":"ch d310.jpg",
    },
    {
        "nom" : "Tractopelle Case 580" ,
        "Nparc": "10051",
        "emplacement": "Chantier 811 MC Tunis",
        "tauxjournalier":180,
        "conducteur": "Mehrez Souii",
        "image":"trac case580.jpg",
    },
    {
        "nom" : "Pelle sur pneus 190",
        "Nparc": "09020",
        "emplacement": "Chantier 811 MC Tunis",
        "tauxjournalier": 220,
        "conducteur":"Fathi Bouali",
        "image":"pp dx190.jpg",
    },
    {
        "nom" : "Pelle sur pneus Hyundai 210" ,
        "Nparc": "09025",
        "emplacement":"Chantier 794 Akouda",
        "tauxjournalier":230,
        "conducteur":"Jalel Zaied",
        "image":"pp hyn210.jpg"
    },

]

window.onload = function dom() {
    console.log("test")
    let itemsContainer = document.getElementsByClassName("items")[0]
    for (let listItem of list){
        let newArticle = document.createElement("div")
        newArticle.setAttribute("class", "item")
        newArticle.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="./img/${listItem.image}" class="card-img-top" height="200px">
            <div class="card-body">
                <h5 class="card-title">${listItem.Nparc}</h5>
                <p class="card-text">${listItem.nom}.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${listItem.emplacement}</li>
                <li class="list-group-item price">${listItem.tauxjournalier}DT</li>
                <li class="list-group-item">${listItem.conducteur}</li>
            </ul>
            <div class="card-body">
                <button class="btn btn-primary">Add to card</button>
            </div>
        </div>
        `
        itemsContainer.append(newArticle)
        newArticle.getElementsByTagName("button")[0].addEventListener("click", addToCard)

    }



}


function addToCard(e){
    let buttonClicked = e.target
    let product = buttonClicked.parentElement.parentElement
    let imgSrc = product.getElementsByTagName("img")[0].src
    let price = product.getElementsByClassName("price")[0].innerHTML

    let newItem = document.createElement("div")
    newItem.setAttribute("class", "card-item")

    newItem.innerHTML = `
        <img src="${imgSrc}">
        <input type="number" min="1" value="1"></input>
        <div>
            <span>${price}</span>
            <button class="btn btn-danger">Remove</button>
        </div>
    `
    let container = document.getElementsByClassName("card-items")[0]
    let cardItems = container.getElementsByClassName("card-item")

    for (let cardItem of cardItems){
        let img = cardItem.getElementsByTagName("img")[0]
        console.log(img.src)
        if (img.src == imgSrc){
            alert("This item already added!!!")
            return
        }
    }
    newItem.querySelector(".btn-danger").addEventListener("click", removeItem)
    newItem.querySelector('input').addEventListener('change', updateTotal)

    container.append(newItem)
    updateTotal()

}
 

function removeItem(e){
    let buttonClicked = e.target
    buttonClicked.parentElement.parentElement.remove()
    updateTotal()
}
function updateTotal(){
    let container = document.getElementsByClassName("card-items")[0]
    let items = container.getElementsByClassName('card-item')
    let tot = 0

    for (let item of items){
        let prix = parseFloat(item.getElementsByTagName('span')[0].innerText)
        let qt = item.getElementsByTagName('input')[0].value

        tot+= prix * qt
    }

    document.getElementsByClassName('total')[0].innerHTML = tot + 'DT'
}

function subtotal (t){

}