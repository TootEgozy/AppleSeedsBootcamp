


const candyStore = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },

    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
],
    cashRegister: 200
}


function getCandy(store, productId){
    for(i = 0; i < store.candies.length; i++ ) {
        if (store.candies[i].id == productId) return store.candies[i];
    }
    return null;    
}


function getPrice(store, productId){
    for(i = 0; i < store.candies.length; i++ ) {
        if (store.candies[i].id == productId) return store.candies[i].price;
    }
    return -1;    
}

function addCandy(store, productId, productName, productPrice, productAmount=1){
    store.candies.push({
        name: productName,
        id: productId,
        price: productPrice,
        amount: productAmount
    })
}

function buy(store, productId){
    for(i = 0; i < store.candies.length; i++ ) {
        if (store.candies[i].id == productId) {
            store.cashRegister += store.candies[i].price;
            store.candies[i].amount--;
            if (store.candies[i].amount == 0) store.candies.splice(i, 1);
        }
    }
}    


