function getcars() {
    let cars = localStorage.getItem("cars");
    if (cars == null) {
        return [];
    }
    else {
        return JSON.parse(cars);
    }
}





var el = document.getElementById('devis-content');


let size = getcars().length;
console.log(size);

let cr = getcars();
let ttl = 0;

for (let i = 0; i < size; i++) {



    el.innerHTML += `
    <tr class=" border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        ${cr[i][0]}
                        </th>
                        <td class="px-6 py-4">
                        ${cr[i][1]}
                        </td>
                        <td class="px-6 py-4">
                        ${cr[i][4]}
                        </td>
                        <td class="px-6 py-4">
                        ${cr[i][5]}
                        </td>
                        <td class="px-6 py-4">
                        ${cr[i][6]}
                        </td>
                        <td class="px-6 py-4">
                        ${cr[i][2]}
                        </td>
                        
                    </tr>
`

    ttl += +cr[i][2];


}


var a = document.getElementById('Total-HT').innerHTML = ttl;

let totalTtc = ttl + (ttl * 0.2);

var a = document.getElementById('Total-ttc').innerHTML = totalTtc;