console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem( item ){
    if(isFull()===false){
        basket.push(item);
        console.log('Here is the updated cart with your item:', basket);
        return true;
    } else if(isFull()===true){
        console.log('sorry, you have reached the max number of items ' + item + ' cannot be added.');
        return false;
    }
    
} // end of addItem function.

function listItems(){
    for (let i of basket){
        console.log('In the listItems function: This is an item in the array:', i);
    }//end of for of loop.
}// end of listItems function.

function empty(){
    basket = [];
    console.log('In the empty function: you deleted everything in your cart.');
}//end of empty function

function isFull(){
    if(basket.length < 5){
        return false;
    } else{
        return true;
    }
}//end of isFull function

function removeItem( item ){
    let cartPosition = basket.indexOf(item);
    let removed;
    let originalBasket = basket;

    if(cartPosition > 0 && cartPosition < 4) {
        removed = basket.splice(cartPosition, 1);
    } else if (cartPosition === -1) {
        removed = null;
    }

    return removed;

}//end of removeItem function

console.log(addItem('shoes'));
console.log(addItem('jeans'));
console.log(addItem('dress'));
listItems();
empty();   
isFull(); 
console.log('is my cart full?', isFull());
console.log(addItem('cat'));
console.log(addItem('jello'));
console.log(addItem('dress'));
console.log(addItem('jumper'));
console.log(addItem('tanktop'));
console.log('here is what is in my basket:', basket);
console.log('is my cart full?', isFull());
console.log(basket);
console.log('here is removingItem function', removeItem('dress'));
console.log('here is the updated basket', basket);
console.log('here is the removingItem function', removeItem('dog'));
console.log('here is the updated basket', basket);

