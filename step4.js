//Created Object
//Obj Examples

//simple obj
let exo = {
    exoK: "Korean",
    exoM: "Chinese",
    exoL: "Fandom",
};
console.log(exo);

//Value is array
let exoUnits = {
    Units: "EXOK",
    Member: ["Suho", "Baekhyun", "Chanyeol", "D.O.", "Kai", "Sehun"],
};
// ใช้ for/of ในการเข้าถึงข้อมูล
for(exok of exoUnits){
    log(exoUnits)
}


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
};
//console.log(sm);

// for (key in NCTUnits){
//     console.log(key)
//     console.log(NCTUnits[key])
// }
