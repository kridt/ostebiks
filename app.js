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


let form = document.querySelector(".contact__form")
let inputFields = document.querySelectorAll(".input__form");
let success = true;
var emailInput = document.querySelector("#email");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    inputFields.forEach(function (input) {
        form.querySelector(".statusMessage." + input.name).innerText = "";
    });

    inputFields.forEach(function (input) {
        if (input.type == "number" && !/^[0-9]+$/.test(input.value) && input.value != "") {
            form.querySelector(".statusMessage." + input.name).innerText = "der må kun være tal.";
            success = false;

        }

        if (input.hasAttribute("required") && input.value == "") {
            form.querySelector(".statusMessage." + input.name).innerText = "Udfyld dette felt.";
            success = false;

        }

        var at = form.email.value.indexOf("@");
        var dot = form.email.value.lastIndexOf(".");
        var emailStatus = document.querySelector(".statusMessageEmail")

        if (at <= 0) {
            form.email.focus();
            emailStatus.innerText = "Skriv gyldig email.";
            success = false;
        }
        if (dot < at + 2) {
            form.email.focus();
            emailStatus.innerText = "Skriv gyldig email.";
            success = false;
        }
        if (form.email.value.length <= dot + 2) {
            form.email.focus();
            emailStatus.innerText = "Skriv gyldig email.";
            success = false;
        }


    });
    if (!success) return
});

if(localStorage.getItem("cart") == null){
    localStorage.setItem("cart", 0)
}


setTimeout(function(){ 
    

    
    
    function cart(){
        var count = localStorage.getItem("cart");
        var cartNum = document.querySelector(".cartNumber");
        var addToCart = document.querySelectorAll(".addToCart");
        
        cartNum.innerHTML = localStorage.getItem("cart")
        addToCart.forEach(buttons => {
            
            buttons.addEventListener("click", function(){
                count++;
                cartNum.innerHTML=count;
                
                localStorage.setItem("cart", count);
                
            })
        });
        
        
        
        
        
        
    }
    cart()
    
}, 500);
    
    