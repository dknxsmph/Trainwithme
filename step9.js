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
    constructor(firstName = "unknown", lastName = "unknown") {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    get name() { return this._name + " " + this._lastName; }
    get firstName() { return this._firstName; }
    get lastName() { return this._lastName; }
    set firstName(fname) { this._firstName = fname; }
    set lastName(name) { this._lastName = name; }
}

function player(firstName, lastName) {
    console.log(`you are in player func`)
    let fName;
    let lName;
    if (firstName) {
        fName = firstName;
    } else {
        fName = "Unknown";
    }
    if (lastName) {
        lName = "Unknown";
    }
    return `${fName},${lName}`;
}

function playerCon(firstName, lastName, sex) {
    console.log(`you are in player Con`)
    this._fName = firstName;
    this._lName = lastName;
    if (sex === 'F') {
        this.title = `MS`
    } else {
        this.title = `MR`
    }
}
let p1 = new playerCon(`N`, `T`, `F`);
let p2 = new playerCon(`D`, `K`, `M`);
console.log(p1);
console.log(p2);