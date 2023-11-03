function saveBasket(basket){
    localStorage.setItem("basket", JSON.stringify(basket));
}

function getBasket(){
    let basket = localStorage.getItem("basket");
    if(basket == null){
        return [];
    }
    else{
        return JSON.parse(basket);
    }
}

function addBasket(car){
    let basket = getBasket();
    let productFound = basket.find(p => p.id == product.id);
    if(productFound)

    basket.push(car);
    saveBasket(basket);

}