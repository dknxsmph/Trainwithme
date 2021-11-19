//randomOneHundred
function randomOneHundred() {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    return randomNum;
}
let randomNumm = [randomOneHundred(), randomOneHundred(), randomOneHundred()] // เก็บค่าที่ได้จากการ random ไว้ 3 ค่า

function sum(num) {
    let sum = 0; // เก็บผลรวม
    for (let i = 0; i < num.length; i++){ //for loop เข้าไปหาทุกตัวแล้ว เอาค่าไปเก็บไว้ที่ i 
        sum += num[i]; //นำค่า i ที่ได้มาบวก แล้วเก็บไว้ใน sum
    } return sum;
}

function min(num) {
    let min = num[0]; //เก็บค่าที่น้อยที่สุด
    for (let i = 0; i < num.length; i++) {
        if (num[i] < min) {//ดูว่าค่าที่ได้มาน้อยมั้ย 
            min = num[i]; //ถ้านำค่าที่น้อยมาเก็บไว้ใน min
        }

    }
    return min;
}

function max(num) {
    let max = num[0]; //เก็บค่าที่มากที่สุด
    for (let i = 0; i < num.length; i++) {
        if (num[i] > max) { //ดูว่าค่าที่ได้มามากมั้ย
            max = num[i]; //ถ้านำค่าที่น้อยมาเก็บไว้ใน max
        }

    }
    return max;
}

function menu(menu) {
    switch (menu) {
        case 1: return sum(randomNumm); //เมนู 1 เรียกใช้ sum()
        case 2: return min(randomNumm);//เมนู 2 เรียกใช้ min()
        case 3: return max(randomNumm);//เมนู 3 เรียกใช้ max()
        default: break;
    }
}
console.log(randomNumm);
console.log(`Sum of Number : ${menu(1)}`); //1 หาผลรวมของทั้ง 3 เลข
console.log(`Minimal value is : ${menu(2)}`); //2 หาตัวที่มากสุด
console.log(`Maximal value is : ${menu(3)}`); //3 หาตัวที่น้อยสุด


