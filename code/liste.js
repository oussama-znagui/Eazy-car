const itemList = document.querySelectorAll("ul .x");
const itemImg = document.querySelectorAll(".ss");





    itemList.forEach(li => {
        li.onclick = function(){

            itemList.forEach(li => {
                li.className = "a mx-5 bg-gray-300 p-5 cursor-pointer my-4";
            })
            li.className = "active";
        
        const value = li.textContent;
         
         itemImg.forEach(itt => {
            itt.style.display = 'none'; 
            console.log(itt.getAttribute('data-filter'));
            if(itt.getAttribute('data-filter')?.toLowerCase() == value.toLowerCase()){
                itt.style.display = 'flex';

                
            }
        })

          
     
    }



    });


   

