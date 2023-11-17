
const voiture = [{
    marque: "Range Rover",
    gamme: "Voiture de luxe",
    prix: 500,
    image: "../media2.0/car-2.jpg",
    page: 1,

},
{
    marque: "Mercedes",
    gamme: "Voiture de luxe",
    prix: 500,
    image: "../media2.0/car-1.jpg",
    page: 1,
},
{
    marque: "Maserati",
    gamme: "Voiture de Sport",
    prix: 1000,
    image: "../media2.0/maserati.jpg",
    page: 1,

},
{
    marque: "BMW Series",
    gamme: "Voiture de Sport",
    prix: 800,
    image: "../media2.0/123.jpg",
    page: 1,
},
{
    marque: "Audi R8",
    gamme: "Voiture de Sport",
    prix: 1500,
    image: "../media2.0/Audi.jpg",
    page: 2,
},
{
    marque: "buggati",
    gamme: "Voiture de Sport",
    prix: 1500,
    image: "../media2.0/hyper.jpg",
    page: 2,
},
{
    marque: "Ford Focus",
    gamme: "Voiture de Sport",
    prix: 800,
    image: "../media2.0/ford-focus.jpg",
    page: 2,
},
{
    marque: "ferrari",
    gamme: "Voiture de Sport",
    prix: 1000,
    image: "../media2.0/ferari.jpg",
    page: 2,
},
{
    marque: "Renault Clio",
    gamme: "Voiture économique",
    prix: 250,
    image: "../media2.0/clio.jpg",
    page: 3,
},
{
    marque: "Tesla",
    gamme: "Voiture de luxe",
    prix: 2000,
    image: "../media2.0/Tesla.jpg",
    page: 3,
},
{
    marque: "Kia Rio",
    gamme: "Voiture de luxe",
    prix: 500,
    image: "../media2.0/Kia-Rio.jpg",
    page: 3,

},
{
    marque: "Volkswagen Golf",
    gamme: "Voiture de luxe",
    prix: 500,
    image: "../media2.0/volkswagengolf.jpg",
    page: 3,
},
];



const cardContainer = document.querySelector('.card');
const paginationContainer = document.getElementById('pagination');
const carsPerPage = 4;
let currentPage = 1;

function displayCars(pageNumber) {
    cardContainer.innerHTML = '';

    const startIndex = (pageNumber - 1) * carsPerPage;
    const endIndex = startIndex + carsPerPage;
    const carsToDisplay = voiture.slice(startIndex, endIndex);

    for (let i = 0; i < carsToDisplay.length; i++) {
        const car = carsToDisplay[i];


        const htmlCard = `<div data-filter="${car.gamme}"
        class=" w-full max-w-sm bg-gray-900 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 b">
        <a href="#">
            <img id="id-image" class="p-5 h-3/5 max-w-full rounded-3xl " src="${car.image}" alt="">
        </a>
        <div class="px-5 pb-5">
            <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-white dark:text-white">${car.marque}</h5>
                <div class="flex justify-between">
                    <p class="text-white">${car.gamme}</p>
                    <p class="text-white" ><span id="prr">${car.prix}</span>DHS/Jour</p>

                </div>
            </a>

            <div class="flex items-center justify-center gap-x-4 my-4">
                <button
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    id="ajouter">Add to cart</button>

            </div>
        </div>
    </div>
    `;

        cardContainer.insertAdjacentHTML('beforeend', htmlCard);
    }
    const totalPages = Math.ceil(voiture.length / carsPerPage);


}

function createPaginationButtons() {
    const totalPages = Math.ceil(voiture.length / carsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;


        button.classList.add(
            'bg-blue-500',
            'hover:bg-blue-700',
            'text-white',
            'font-bold',
            'py-2',
            'px-4',
            'rounded',
            'mr-2',

        );

        button.addEventListener('click', () => {
            currentPage = i;
            displayCars(currentPage);
        });
        paginationContainer.appendChild(button);
    }
}

createPaginationButtons();
displayCars(currentPage);
