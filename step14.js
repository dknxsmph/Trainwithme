class Person {
    constructor(idCard, firstName) {
        this._idCard = idCard;
        this._firstName = firstName;
    }
    get idCard() { return this._idCard; }
    get firstName() { return this._firstName; }
}

class BankAccount {

    constructor(accountId, accountOwners, balance) {
        this._accountId = accountId;
        this._accountOwners = [accountOwners];
        this._balance = balance;
        this._accountOwners[0]

    }
    get accountId() { return this._account }
    get accountOwners() { return this._accountOwners }
    get balance() { return this._balance }
    get accountOwnerCounting() { return this._accountOwnerCount }

    withdraw(amount) {
        if (this._balance > amount) {
            this._balance -= amount;
            console.log(`New balance id ${this._balance}`)
        } else {
            console.log(`Your balance is NOT ENOUGH !!!`)
        }

    }
    deposit(amount) {
        this._balance += amount;
        console.log(`New balance id ${this._balance}`)
    }
}