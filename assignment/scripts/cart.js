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
    let basketCheck = basket.indexOf(item);
    if (basketCheck < basket.length){
        
    }
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
/*### Stretch Goals 
Remember that Stretch Goals are not required, but will help you to further develop concepts from the skills we have covered.

2. Create a function called isFull(). It should:
  - return `false` if the basket contains *less* than max number of items
  - return `true` otherwise (equal or more than maxItems)

3. Update the required `addItem` function to:
  - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
  - If an item was added to the array, return `true`
  - If there was no room and the item could not be added return `false`

__Using Array built-in functions!__

4. Create a function called `removeItem`. It should:
  - Take an input parameter for a string `item`
  - Use [Array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the index of the first matching item in the basket.
  - Use [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
  - Return the item removed or `null` if the item was not found*/
