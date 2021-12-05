let student = [`Zim`, `Mint`, `Paint`, `Kim`, [`Kim Doyoung`]];

//includes(searchElement)
// console.log(`includes(searchElement)`)
// console.log(student.includes(`Kim`)); //true 
// console.log(student.includes(`Paint`)); //true 
// console.log(student.includes(`Zimm`)); //false 
// console.log(student.includes(`Kim Doyoung`)); //false เพราะ includes จะดู Array จะตรวจเช็ค Array แค่ชั้นเดียว แต่ Kim Doyoung ถูกหุ้มไว้ด้วย Array อีกชั้นนึงทำให้มองไม่เห็น 

//includes(searchElement, fromIndex)
console.log(`searchElement, fromIndex`)
console.log(student.includes(`Mint`, 1)); //true includes(searchElement, fromIndex)
console.log(student.includes(`Zim`, 1)); //false
console.log(student.includes(`Paint`, 6)); //false