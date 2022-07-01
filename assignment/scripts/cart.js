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
    let i = 0;
    for (i of basket){
        console.log('This is an item in the array:', i);
    }//end of for of loop.
   
}// end of listItems function.

function empty(){
    basket = [];
    console.log('you deleted everything in your cart.');
}//end of empty function

console.log(addItem('shoes'));
console.log(addItem('jeans'));
console.log(addItem('dress'));
listItems();
empty();
listItems();

/*

- Create a function called `empty`. It should:
  - reset the `basket` to an empty array

> __IMPORTANT__
> Make sure that you are writing code *in the file* to test every function that you write!

For example, to test `addItem`:
```
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);
```*/