let isname = 'NATTHAKAN THAWEEWATTHANAPRAYUN';
console.log(isname.length); // เป็นการนับตัวอักษรใน isname
console.log(isname.charAt(2));
console.log(isname[2]); //เรียกตามตำแหน่งของข้อมูล
console.log(isname.charAt(isname.length - 1));// เรียกตัวสุดท้าย
console.log(isname.substring(0, 9)); // เรียกตั้งแต่ตัวที่0-9 มาแสดง

const whatislove = 'I wanna know 사탕처럼 달콤하다는데 I wanna know 하늘을 나는 것 같다는데 I wanna know know know know What is love? ';

const searchTerm = 'wanna';
console.log(`The index of the first "${searchTerm}" from the beginning is ${whatislove.indexOf(searchTerm)}`); //หาคำว่า wana ว่าตัวแรกที่มีอยู่ในตำแหน่งใด
console.log(`The index of the first "${searchTerm}" from the beginning is ${whatislove.lastIndexOf(searchTerm)}`); //หาคำว่า wana ว่าตัวสุดท้ายที่มีอยู่ในตำแหน่งใด
const hagd = 'Have a good dae !!! \n'; 
console.log(`I hope todae wiil be "Happy": ${hagd.repeat(9)}`); //.repeat จะเป็นการเรียกตัวนั้นซ้ำๆ
console.log(hagd.toLocaleUpperCase()); 
console.log(`My name is ${isname} ... ${hagd}`); //การเชื่อม string โดยใช้ ${} จะสามารถเขียน string ได้ยาวๆ
console.log(`${8*8}`); // ${ให้ใส่นิพจน์ค่าาาา}
console.log(`${1>2}`); //จะได้ false เพราะ 1 ไม่ได้ มากกว่า 2

 