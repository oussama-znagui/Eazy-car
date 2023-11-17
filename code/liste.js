const itemList = document.querySelectorAll("ul .x");
const itemImg = document.querySelectorAll(".ss");





itemList.forEach(li => {
    li.onclick = function () {

        itemList.forEach(li => {
            li.className = "x text-sm py-2 px-4   bg-blue-500 ff cursor-pointer";
        })
        li.className = "active";

        const value = li.textContent;

        itemImg.forEach(itt => {
            itt.style.display = 'none';

            if (itt.getAttribute('data-filter')?.toLowerCase() == value.toLowerCase()) {
                itt.style.display = 'flex';


            }
        })



    }



});




