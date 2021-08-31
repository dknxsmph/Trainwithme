//Created Object
//Obj Examples

//simple obj
let exo = {
    exoK: "Korean",
    exoM: "Chinese",
    exoL: "Fandom",
};
//console.log(exo);

//Value is array
let exoUnits = {
    Units: "EXOK",
    Member: ["Suho", "Baekhyun", "Chanyeol", "D.O.", "Kai", "Sehun"]
};
// ใช้ for/of ในการเข้าถึงข้อมูล
// for(let exoK of exoUnits.Member){
//     console.log([exo][ex])
// }

//Aggregated obj
let exoAllUnits = {
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
}

let exoK = {"EXOK" :  "Korean"}
let exoM = {"EXOM" : "Chinese"}
let exoUnitsArray = [exoK , exoM ];
console.log(exoUnitsArray);