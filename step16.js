// class MoneyExchanger {
//     constructor(exchangeRate, foreignUnits) {
//         this.exchangeRate = exchangeRate;
//         this.foreignUnits = foreignUnits;
//     }
//     get exchangeRate() { return this.exchangeRate; }
//     get foreignUnits() { return this.foreignUnits; }
//     get getCustomerBaht() { return customerBaht; }
//     get getCollectedBaht() { return collectedBaht; }
//     set exchangeRate(exchangeRate) {
//         this.exchangeRate = exchangeRate;
//     }
//     receiveForeignUnitsFromAdmin() {
//         baht = collectedBaht;
//         return baht;
//     }
//     receiveBahtFromCustomer(baht) {
//         customerBaht += baht;
//     }
//     exchangeToForeignUnitsForCustomer(foreignUnits) {
//         requiredBaht = foreignUnits / this._exchangeRate;
//         if (this._foreignUnits > foreignUnits) {
//             console.log('NO ENOUGH MONEY IN THE SYSTEM')
//         } else if (requiredBaht < foreignUnits) {
//             console.log('YOUR MONEY IS NOT ENOUGH')
//         }
//         this._foreignUnits -= foreignUnits;
//         collectedBaht += requiredBaht;
//         customerBaht -= requiredBaht;
//         return bahtToCustomer();
//     }
//     bahtToCustomer() {
//         requiredBaht = customerBaht;
//         customerBaht = 0;
//         return customerBaht;
//     }
// }
// let me = new MoneyExchanger(100);
// me.receiveForeignUnitsFromAdmin(500);
// me.receiveBahtFromCustomer(1000);
// me.bahtToCustomer();