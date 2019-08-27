// First practice code

// const cashWithdrawal = (amount, accnum) => {
    
//     console.log(`Withdrawing ${amount} from the account number ${accnum}`);
// }

// cashWithdrawal(300, 500000000);

// const takeOrder = (size, drinkType) => {
//     console.log(`Order received:   |||||     Size ----- ${size}         |||||   Type ----- ${drinkType}     |||||`);
//    }
//    takeOrder("Large","Americano with milk");
 
// let orderCount = 0;
// const takeOrder = (topping) => {
 
// //  if (orderCount = 0){
//      console.log(`Order No.${orderCount}   -  Pizza with = ${topping}`);
//    orderCount++;

// // else(orderCount>0) {
// //     console.log(`           ${orderCount}                    ${topping}`);
// }

// takeOrder("Pineapple, Sweetcorn, Cheese and BBQ Sauce");
// takeOrder("Cheese, Tomato");
// takeOrder("Pineapple, Ham");


// Cash Machines 
var  pinw=1
const transaction = (pin,amount,balance) => {
    if (balance < amount );{
       var bal = 1
    } else { 
        var bal = 0
    };
    
    
    if (bal == 0 && pin == 'true' ); {
        console.log('Time to Spend Some Money!!!!!   :)');
    } else (pin !== 'true'); {
        console.log('Pin is Wrong.');
    }
        if (pinw = 3){
            console.log('This is your last pin attempt.')
        
        else if (pinw = 4){
            console.log('No more attempts permitted.')
        } 
        else {
               pinw++;
        }
    };
    else{
        console.log('Not enough Funds.')
    } 
};

transaction('true',9,10);
transaction('False',90,10000);
transaction('true',9000,10);

