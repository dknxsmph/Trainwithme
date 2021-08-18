console.log('Hello');       //console.log()เป็นคำสั่งในการแสดงผลคล้ายๆกับsout ใช้ '' ในการระบุ string
const Timeout = 1200;       //const เป็นตัวแปรที่เมื่อประกาศแล้วจะไม่สามารถre-declared หรือ updated ได้ต่ะ
setTimeout(function() {         //เป็นตัวอย่างที่แสดงให้เห็นเกี่ยวกับSynchronos เมื่อถึงเวลาก็ต้องไปดูก่อนว่าstck ว่างอยู่หรือป่าว ถ้าว่างก็จะทำ ถ้าไม่ว่างก็ต้องรอก่อน
    console.log(`Good bye`);    //ใช้ `` ในการระบุว่าเป็นstring
},Timeout);
var myName = "NATTHAKAN";   //ใช้ตัวแปรvarในการประกาศmyName ซึ่งvarจะสามารถ re-declared หรือ updated ได้ 
console.log("MY NAME IS : " + myName +" "+ "THAWEEWATTHANAPRAYUN");
const age = 20; 
console.log("AGE : " + age);
var myName = `NORTORKOR`;   //เป็นการ re-declared myName จะเป็นการประกาศค่าใหม่ ซึ่งสามารถเปลี่ยนเป็น Type อื่นก็ได้
console.log('MY NAME IS : ' + myName +' '+ 'THAWEEWATTHANAPRAYUN');
let myMoney = 100000;       //ใช้ตัวแปร let ซึ่งจะสามารถ updated ค่าได้ แต่ไม่สามารถที่จะ declared ได้
console.log("I HAVE : " + myMoney +"\tBAHT");
myMoney= 10;                //updated myMoneyให้เหลือ10บาทต่ะ 
console.log("I HAVE : " + myMoney + "\tBAHT");

if(age >= 20) {
    console.log("You can drink alcohol")
}else {
    console.log("You should drink milk");}
