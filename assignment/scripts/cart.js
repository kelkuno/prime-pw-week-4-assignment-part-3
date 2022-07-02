console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem( item ){
    basket.push(item);
    console.log(basket);
    return true;
} // end of addItem function.

function listItems(){
    for (let i of basket){
        console.log('This is an item in the array:', i);
    }//end of for of loop.
}// end of listItems function.

function empty(){
    basket = [];
    console.log('In the empty function: you deleted everything in your cart.');
}//end of empty function

console.log(addItem('shoes'));
console.log(addItem('jeans'));
console.log(addItem('dress'));
listItems();
empty();


