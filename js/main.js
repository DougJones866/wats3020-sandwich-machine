/* JavaScript for WATS 3020 Sandwich Machine Assignment */

// Step One ///////////////////////////////////////////////////////////
//
// Gather data from the user using the prompt() command.
// Users will fill in each prompt with text.
// Provide examples where it may help (e.g. show a comma-separated list of
// toppings to indicate how to specify toppings, etc.)
//

let bread = prompt('What kind of bread would you like?');
let meat = prompt('What kind of meat? (Separate meats with a comma if you would like more than one.)')
let topping = prompt('Choose your toppings')
let condiment = prompt('Any condiments?')


// Step Two ////////////////////////////////////////////////////////////
//
// Process all the input to calculate values for the user's order. The named
// values are initialized to `null`. Change that so they equal the proper value.
//
// The `prices` object below specifies the prices for each thing.

let prices = {
    sandwich: 5, // Base price for a sandwich is $5, includes bread
    meat: 1, // Each kind of meat on a sandwich costs $1
    topping: 0.5, // Each topping costs $0.50
    condiment: 0.25 // Each condiment costs $0.25
};

let meatArray = meat.split(',');
let toppingArray = topping.split(',');
let condimentArray = condiment.split(',');


let meatCost = meatArray.length * prices.meat;
let toppingCost = toppingArray.length * prices.topping;
let condimentCost = condimentArray.length * prices.condiment;

let subtotal = meatCost + toppingCost + condimentCost + prices.sandwich;

let waStateTaxRate = 0.065;
let orderTax = subtotal * waStateTaxRate;

let totalPrice = subtotal + orderTax;


// Step Three //////////////////////////////////////////////////////////

let receiptTemplate = `
    <p>SANDWICH ORDER</p>
    <p>Bread: ${bread}</p>
    <p>Meat: ${meat}</p>
    <p>Toppings: ${topping}</p>
    <p>Condiments: ${condiment}</p>
    <p>---------------------</p>
    <p class="text-right">Sandwich: ${prices.sandwich}</p>
    <p class="text-right">Meat: ${meatCost}</p>
    <p class="text-right">Toppings: ${toppingCost}</p>
    <p class="text-right">Condiments: ${condimentCost}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Subtotal: ${subtotal}</p>
    <p class="text-right">Tax: ${orderTax}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Total: ${totalPrice}</p>
`

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;
