function savecars(car) {
    localStorage.setItem("cars", JSON.stringify(car));
}

function getcars() {
    let cars = localStorage.getItem("cars");
    if (cars == null) {
        return [];
    }
    else {
        return JSON.parse(cars);
    }
}

function addcar(car) {
    let cars = getcars();
    // let productFound = basket.find(p => p.id == product.id);
    // if (productFound){

    // }
    cars.push(car);
    savecars(cars);


}



let ajouter = document.querySelectorAll("#ajouter");

ajouter.forEach(function (e) {
    e.addEventListener("click", function () {
        let titre = e.closest('.w-full').querySelector('h5').innerText;
        let cat = e.closest('.w-full').querySelector('p').innerText;
        let prix = e.closest('.w-full').querySelector('#prr').innerText;
        let imge = e.closest('.w-full').querySelector("#id-image").src;


        console.log(titre);
        console.log(cat);
        console.log(prix);
        console.log(imge);
        let t = [titre, cat, prix, imge];
        addcar(t)
        location.reload();





    })
})

let ajout_list = document.querySelectorAll("#ajout-list");

ajout_list.forEach(function (e) {
    e.addEventListener("click", function () {
        let titre = e.closest('.forAjout').querySelector('h5').innerText;
        let cat = e.closest('.forAjout').querySelector('p').innerText;
        let prix = e.closest('.forAjout').querySelector('#prr').innerText;
        let imge = e.closest('.forAjout').querySelector("#id-image").src;
        let toit = e.closest('.forAjout').querySelector('#toit').innerText;
        let audio = e.closest('.forAjout').querySelector('#audio').innerText;
        let station = e.closest('.forAjout').querySelector('#Station').innerText;


        console.log(titre);
        console.log(cat);
        console.log(prix);
        console.log(imge);
        console.log(toit);
        console.log(audio);
        console.log(station);

        let t = [titre, cat, prix, imge, toit, audio, station];
        addcar(t);
        location.reload();






    })
})



var el = document.getElementById('pa');


let size = getcars().length;
console.log(size);

let cr = getcars();
let ttl = 0;


for (let i = 0; i < size; i++) {


    function localPerso(i) {
        localStorage.removeItem('perso');

        localStorage.setItem("perso", i);
        console.log("khdama")

    }
    el.innerHTML += `
    <div id="basket-fiche" class="flex justify-between items-center mt-6 pt-6">
    <div id="injectJs" class="flex  items-center">
        <div id="basket-produit" class="flex  items-center">
            <div id="blocImage">
                <img src="${cr[i][3]}" width="60" class="">
            </div>
            <div id="blocProduit" class="flex flex-col ml-3">
                <h2 class="md:text-md font-medium mx-5">${cr[i][0]}</h2>
                <span class="text-xs font-light text-gray-400 mx-5">${cr[i][1]}</span>
            </div>
            <p class = "text-xs	">
            ${cr[i][4]}
            <br>${cr[i][5]}
            <br>${cr[i][6]}

            </p>
        </div>
    </div>
    <div class="flex justify-center items-center">
        <div class="pr-8 ">
            <span class="text-xs font-medium">${cr[i][2]}</span>
        </div>
    </div>
    <button onclick="localPerso(${i}),window.location.href = 'personaliser.html'"   class="px-4 py-2 text-sm rounded-full bg-yellow-400">Pérsonaliser</button>
    </div>
`

    ttl += +cr[i][2];


}


let total = document.getElementById("total");
total.innerHTML = ttl;


let vd = document.querySelectorAll("#vider");
vd.forEach(function (e) {
    e.addEventListener("click", function () {
        localStorage.clear();
        location.reload();



    })
})





























