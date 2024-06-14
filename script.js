/*Task 1: Create a class for the Account object with properties for accountNumber, 
balance, and owner.

Task 2: Implement methods within the Account object to deposit and withdraw funds.

Task 3: Create a method to calculate compound interest based on the balance and 
specified interest rate. Allow users to pass a year parameter to your method that 
represents the # of years the money has been invested. The output should be rounded 
up to the nearest whole number (perhaps using the Math.ceil()). The formula for 
compound interest is...

A=P(1+nr​)^nt

Where:

𝐴
 is the amount of money accumulated after n years, including interest.
𝑃
 is the principal amount (the initial sum of money).
𝑟
 is the annual interest rate (in decimal form).
𝑛
 is the number of times interest is compounded per year (you can use 1 for this example).
𝑡
 is the number of years the money is invested or borrowed for (this will be your parameter passed into the method).

*/

class Account {

    constructor(accountNumber, owner) {
        this.accountNumber = accountNumber;
        this.balance = 0;
        this.owner = owner;
    }
     deposit = (amount) => {
       if (amount >= 0) {
        this.balance += amount;
        console.log(`Deposit: $${amount}`)
       }
    }
    
    withdraw = (amount) => {
        if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdraw: $${amount}`)
        }
        else {
            console.log("Insufficient Funds")
        }
    } 

    
    
    compoundInterest = (interestRate, years) => 
    {
        const principal = this.balance;
        const rate = interestRate / 100;
        const amount = principal * Math.pow(1 + rate, years);
        return Math.ceil(amount);
    
    }
    
}

const account = new Account (27839515,  "Frank Luckersten");
account.deposit(500);
account.withdraw(600);
account.withdraw(200);

const interestRate = 5;
const years = 3
const compoundInterest = account.compoundInterest(interestRate, years);
console.log(`Compound Interest after ${years} years: ${interestRate}%`)
