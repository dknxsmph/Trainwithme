//Created Object
//Obj Examples

//simple obj
let exo = {
  exoK: "Korean",
  exoM: "Chinese",
  exoL: "Fandom",
};
console.log(exo);
for(let aboutExo in exo){
    console.log(aboutExo)
}
//Value is array
let exomUnits = {
  Units: ["EXOK"],
  Member: ["Suho", "Baekhyun", "Chanyeol", "D.O.", "Kai", "Sehun"],
};
console.log(exomUnits);
console.log(exomUnits.Member[0]);
console.log(exomUnits.Member[exomUnits.Member.length - 1]);
//ใช้ for/of ในการเข้าถึงข้อมูล
for(let exoK of exoUnits.Member){
    console.log(exoK)
}

//Aggregated obj
//ใน objexoAllUnits จะมี obj EXOK และ EXOM อยู่
let exoAllMembers = {
  EXOK: {
    Member: ["Suho", "Baekhyun", "Chanyeol", "D.O.", "Kai", "Sehun"],
    Position: [
      "Lead Vocalist",
      "Main Vocalist",
      "Main Rapper",
      "Main Vocalist",
      "Main Dancer",
      "Lead Dancer",
    ],
  },
  EXOM: {
    Member: ["Xiumin", "Luhan", "Kris", "Lay", "Chen", "Tao"],
    Position: [
      "Vocalist, Rapper",
      "Lead Vocalist",
      "Main Rapper",
      "Main Dancer",
      "Main Vocalist",
      "Lead Rapper",
    ],
  },
};
//การใช้ for/in เพื่อเข้าถึงข้อมูลใน obj 
for (let key in exoAllMembers) { //ใช้ for/in ในการเรียก key 
  console.log(`${key} :`);
  for (let key2 in exoAllMembers[key]) {
    console.log(`${key2} :`);
    for (let key3 in exoAllMembers[key][key2]){ //จะต้องอ้างไปให้สุดถึงจะได้ค่าออกมา
      console.log(`${exoAllMembers[key][key2][key3]}`);
    }
  }
}

let exoK = { EXOK: "Korean" };
let exoM = { EXOM: "Chinese" };
let exoUnitsArray = [exoK, exoM]; //เอา obj มาเก็บในArray
console.log(exoUnitsArray); //แสดงแบบง่ายๆ ธรรมดา
