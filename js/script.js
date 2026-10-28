// console.log('Welcome To BiteBox..!!');

let rest = 'BiteBox';
// console.log('Welcome to ' + rest + '..!!');

// let customer = prompt('Welcome to ' +rest+'..!! \n\nWhat is your name?')


// alert('Hello '+customer+'..!! !\n\nWelcome To BiteBOx.' )



// let explore = confirm('Would we like explore the Menu?')

// if (explore) {
 
//     alert("Great! Let's explore the BiteBox menu.");
 
// }
 
// else {
 
//     alert("No problem! You can explore the menu anytime.");
 
// }

	
// let choice = prompt( "Choose a BiteBox category:\n" +
//     "1. Pizza\n" +
//     "2. Burgers\n" +
//     "3. Pasta\n" +
//     "4. Sandwich"
// );

// switch (choice) {
//     case "1":
//         console.log("You selected Pizza!");
//         break;
//     case "2":
//         console.log("You selected Burgers!");
//         break;
//     case "3":
//         console.log("You selected Pasta!");
//         break;
//     case "4":
//         console.log("You selected Sandwich!");
//         break;
//     default:
//         alert("Invalid category selection.");
// }

for(let i=1; i<3; i++) {
    let food = prompt('Which is your favourite food?');
    let quantity = prompt("Enter quantity for " + food );
    console.log(food + " - Quantity: " + quantity);
}

