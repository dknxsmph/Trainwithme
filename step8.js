const Produce = [
    {
        productName: 'iPhone',
        price: 35250,
    },
    {
        productName: 'iPad',
        price: 25999,
    },
    {
        productName: 'Mac',
        price: 65570,
    },
];
const Money = {
    Bank500: 0,
    Bank100: 0,
    Bank50: 0,
    Bank20: 0,
    Coin10: 0,
    Coin5: 0,
    Coin2: 0,
    Coin1: 0,
};

function changeCalculator (price , myMoney) {
    let changeMoney = myMoney - price;
    console.log('Your change is : ')
}