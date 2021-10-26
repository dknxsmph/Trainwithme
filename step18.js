let student = [
    { id: "001", gpax: 3.5, department: "CS" },
    { id: "002", gpax: 3.8, department: "IT" },
    { id: "003", gpax: 3.2, department: "DSI" },
];

let checkGpax = (std) => {
    return std.gpax >= 3.5;
};

let checkDepart = (std) => {
    return std.department.toLowerCase() == "cpe";
};

console.log(
    student.some((std) => {
        return std.gpax >= 3.5; //true
    })
);

console.log(student.some(checkGpax)); //true
console.log(student.some(checkDepart)); //false