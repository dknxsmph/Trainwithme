//เกมทายเลข 1-10
function RandomTEN(inputNum) {
    const high = "Too high";
    const low = "Too low";
    const win = "You win!!!";
    let randomNum = Math.floor(Math.random() * 10) + 1; //สุ่มเลข 1-10
    if (inputNum > randomNum) {
        //ถ้าเลขที่เราคิดไว้มากกว่าเลขที่สุ่มได้
        return `${inputNum} ${high} Random Number is : ${randomNum}`;
    } else if (inputNum < randomNum) {
        //ถ้าเลขที่เราคิดไว้น้อยกว่าเลขที่สุ่มได้
        return `${inputNum} ${low} Random Number is : ${randomNum}`;
    } else {
        //ถ้าเลขที่เราคิดไว้เท่ากับเลขที่สุ่มได้
        return `win `;
    }
}
console.log(RandomTEN(3));
