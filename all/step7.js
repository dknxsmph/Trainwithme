const rasi = ['monkey','rooster','dog','pig','rat','ox','tiger','rabbit','dragon','snake','horse','sheep']; //เก็บแต่ละราศี
let year = 2002; // รับค่าปี
console.log(rasi[year % 12].toUpperCase());