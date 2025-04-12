// ===== ENCAPSULATION =====
// Encapsulation is bundling data and methods that operate on the data within a single unit
// and restricting access to some of the object's components

// Using closures for private variables (ES5 approach)
function BankAccount(initialBalance) {
// Private variable (not accessible outside)
let balance = initialBalance;

// Public interface
return {
    deposit: function(amount) {
    if (amount > 0) {
        balance += amount;
        return `Deposited ${amount}. New balance: ${balance}`;
    }
    return "Invalid amount";
    },
    
    withdraw: function(amount) {
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        return `Withdrew ${amount}. New balance: ${balance}`;
    }
    return "Invalid amount or insufficient funds";
    },
    
    getBalance: function() {
    return balance;
    }
};
}

const account = BankAccount(1000);
console.log(account.getBalance()); // 1000
console.log(account.deposit(500)); // "Deposited 500. New balance: 1500"
console.log(account.withdraw(200)); // "Withdrew 200. New balance: 1300"
// console.log(account.balance); // undefined (private variable)

// Private fields in classes (ES2022)
class ModernBankAccount {
// Private field (with # prefix)
#balance;

constructor(initialBalance) {
    this.#balance = initialBalance;
    this.accountNumber = Math.floor(Math.random() * 1000000);
}

deposit(amount) {
    if (amount > 0) {
    this.#balance += amount;
    return `Deposited ${amount}. New balance: ${this.#balance}`;
    }
    return "Invalid amount";
}

withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
    this.#balance -= amount;
    return `Withdrew ${amount}. New balance: ${this.#balance}`;
    }
    return "Invalid amount or insufficient funds";
}

get balance() {
    return this.#balance;
}

// Private method
#calculateInterest(rate) {
    return this.#balance * rate / 100;
}

addYearlyInterest(rate) {
    const interest = this.#calculateInterest(rate);
    this.#balance += interest;
    return `Added yearly interest: ${interest}. New balance: ${this.#balance}`;
}
}
