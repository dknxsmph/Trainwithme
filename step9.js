class Player {
    // constructor(firstName, lastName) {
    //     if (firstName) {
    //         this._firstName = firstName;
    //     } else {
    //         this._firstName = "unknown";
    //     }
    //     if (lastName) {
    //         this._lastName = lastName;
    //     } else {
    //         this._lastName = "unknown";
    //     }
    // }
    constructor() {

    }
    get name() { return this._name + " " + this._lastName; }
    get firstName() { return this._firstName; }
    get lastName() { return this._lastName; }
    set firstName(name) { this._firstName = name; }
    set lastName(name) { this._lastName = name; }

}
let p1 = new Player();
console.log(p1.firstName);
let p2 = new Player();
p1.firstName