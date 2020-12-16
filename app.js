var randomTal = Math.floor(Math.random() * 4);

fetch(`http://localhost:3000/api/v1/cheeses?offset=${randomTal}`)
.then(response => response.json())
.then(function (data){

    
    var ost = data.results 
    var osteListe = document.querySelector(".osteListe");
    
    ost.forEach(oste => {
        const osteList = document.createElement(`div`)
        osteList.classList.add(`ostCard`)
        osteList.innerHTML = `
        <img src="https://via.placeholder.com/150x200">
        <h3 class="ostNavn">${oste.name}</h3>
        <p>${oste.strength}</p>
        <p class="ostPris">${oste.price.$numberDecimal} kr</p>
        <button class="addToCart">Læg i kurv</button>
        `
        osteListe.appendChild(osteList)
    });
});