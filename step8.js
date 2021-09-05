class Product {
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }

}

let Products = [
    new Product('iphone', 28569),
    new Product('Mac', 69000),
    new Product('iPad', 25419)
]

class Money {
    constructor(value) {
        this._value = value;
        this._amount = 0;
    }
}
class ListMoney {
    constructor() {
        this._moneys = {
            Bank500: new Money(500),
            Bank100: new Money(100),
            Bank50: new Money(50),
            Bank20: new Money(20),
            Coin10: new Money(10),
            Coin5: new Money(5),
            Coin2: new Money(2),
            Coin1: new Money(1)
        }
    }
    toString() {
        let result = 0;
        for (const key in this._moneys) {
            `${key} `
            result += this._moneys[key]
        }
        return result;
    }


}

function changeCalculator(index, myMoney) {
    const price = Products[index]._price;
    let changeMoney = myMoney - price;
    console.log(myMoney);
    let numOfMoney = new ListMoney();
    if (changeMoney < 0) return console.log('Your money is NOT ENOUGH !');
    if (changeMoney == 0) return console.log('You DO NOT GET CHANGE');
    if (changeMoney >= 500) {
        numOfMoney._moneys.Bank500._amount += Math.floor(changeMoney / 500);
        changeMoney = changeMoney % 500;
    }
    if (changeMoney >= 100) {
        numOfMoney._moneys.Bank100._amount += Math.floor(changeMoney / 100);
        changeMoney = changeMoney % 100;
    }
    if (changeMoney >= 50) {
        numOfMoney._moneys.Bank50._amount += Math.floor(changeMoney / 50);
        changeMoney = changeMoney % 50;
    }
    if (changeMoney >= 20) {
        numOfMoney._moneys.Bank20._amount += Math.floor(changeMoney / 20);
        changeMoney = changeMoney % 20;
    }
    if (changeMoney >= 10) {
        numOfMoney._moneys.Coin10._amount += Math.floor(changeMoney / 10);
        changeMoney = changeMoney % 10;
    }
    if (changeMoney >= 5) {
        numOfMoney._moneys.Coin5._amount += Math.floor(changeMoney / 5);
        changeMoney = changeMoney % 5;
    }
    if (changeMoney >= 2) {
        numOfMoney._moneys.Coin5._amount += Math.floor(changeMoney / 2);
        changeMoney = changeMoney % 2;
    }
    if (changeMoney >= 1) {
        numOfMoney._moneys.Coin1._amount += Math.floor(changeMoney / 1);
        changeMoney =
            changeMoney % 1;
    }
    return numOfMoney.toString();
}

console.log(changeCalculator(2, 30000));