const liItem = document.querySelectorAll("ul .a");
const imgItem = document.querySelectorAll(".b");
let itt = document.getElementsByClassName(".b");

const imgItem1 = document.querySelectorAll(".c");
let itt1 = document.getElementsByClassName(".c");



liItem.forEach(li => {
    li.onclick = function () {

        liItem.forEach(li => {
            li.className = "a text-sm py-2 px-4 my-2    bg-blue-500 ff cursor-pointer";
        })
        li.className = "active";

        const value = li.textContent;

        if (value == "Tous") {
            imgItem.forEach(itt => {

                itt.style.display = 'block';
            })
            imgItem1.forEach(itt1 => {

                itt1.style.display = 'flex';
            })
        }
        else {
            imgItem.forEach(itt => {
                itt.style.display = 'none';
                console.log(itt.getAttribute('data-filter'));
                if (itt.getAttribute('data-filter')?.toLowerCase() == value.toLowerCase()) {
                    itt.style.display = 'block';


                }
            })

            imgItem1.forEach(itt1 => {
                itt1.style.display = 'none';
                console.log(itt1.getAttribute('data-filter'));
                if (itt1.getAttribute('data-filter')?.toLowerCase() == value.toLowerCase()) {
                    itt1.style.display = 'flex';


                }
            })
        }

    }



});




