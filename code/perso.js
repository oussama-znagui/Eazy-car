


function getcars() {
    let cars = localStorage.getItem("cars");
    if (cars == null) {
        return [];
    }
    else {
        return JSON.parse(cars);
    }
}

let perso = document.getElementById('perso');

let i = localStorage.getItem("perso");


let cr = getcars()


perso.innerHTML = `
<div class=" forAjout bg-gray-900 h-3/4 p-5 m-5 w-3/4	 rounded-3xl  items-center justify-center gap-6 lg:flex c">
        <img id="id-image" class="h-2/4 rounded-2xl lg:w-2/4 " src="${cr[i][3]}" alt="">
        <div class="w-full flex flex-col gap-y-10">
            <div>
                <h5 class="  text-3xl font-semibold tracking-tight text-white dark:text-white">${cr[i][0]}</h5>
                <p class="text-white text-xl">${cr[i][1]}</p>
            </div>
            <div class="flex flex-col justify-between h-full">


                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 text-white">Toit</label>
                <select id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                    <option selected>${cr[i][4]}</option>
                    <option value="elic">Electrique</option>
                    <option value="man">Manuelle</option>

                </select>
                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 text-white">Système
                    audio</label>
                <select id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                    <option selected>${cr[i][5]}</option>
                    <option value="elic">ATMOS</option>
                    <option value="man">Bose</option>

                </select>

                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 text-white">Station </label>
                <select id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                    <option selected>${cr[i][6]}</option>
                    <option value="elic">Ecran </option>
                    <option value="man">Tactile</option>

                </select>



                <div class="flex justify-between">
                    <div></div>
                    <p class="text-white text-xl"><span id="prr">${cr[i][2]}</span> DHS/Jours</p>
                </div>
                <div class="my-3 flex justify-between items-center">
                    <div></div>
                    <button id="ajout-list"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Valider</button>
                </div>

            </div>
        </div> 
`