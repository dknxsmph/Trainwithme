//63130500031
//2.1
class Student {
    constructor(studentId, titleName, firstName, lastName) {
        this._studentId = studentId;
        this._titleName = titleName;
        this._firstName = firstName;
        this._lastName = lastName;

    }
    get studentId() { return this._studentId }
    get titleName() { return this._titleName }
    get firstName() { return this._firstName }
    get lastName() { return this._lastName }
    toString() {
        return `Student Id: ${this.studentId} | Name : ${this.titleName}${this._firstName} ${this.lastName}`;
    }
}
class Courses {
    Subject = [{ subjectId: 'GEN101', subjectName: 'PHYSICAL EDUCATION', credit: 1 },
        { subjectId: 'GEN121', subjectName: 'LEARNING AND PROBLEM SOLVING SKILLS', credit: 3 },
        { subjectId: 'INT100', subjectName: 'INFORMATION TECHNOLOGY FUNDAMENTALS', credit: 3 },
        { subjectId: 'INT101', subjectName: 'PROGRAMMING FUNDAMENTALS', credit: 3 },
        { subjectId: 'INT102', subjectName: 'WEB TECHNOLOGY', credit: 1 },
        { subjectId: 'INT114', subjectName: 'DISCRETE MATHEMATICS FOR INFORMATION TECHNOLOGY', credit: 3 },
        { subjectId: 'LNG220', subjectName: 'ACADEMIC ENGLISH', credit: 3 }
    ]
    numofcredits() {
            for (let a of this._credit) {
                let a += this_credit;
            }
            return a;
        } //ใช้ for of  นำค่า credit ออกมา ลูปเข้าไปแล้วเก็บใน a ทำการบวกค่าเพิ่มขึ้นไปเรื่อยๆ แล้ว return a ออกมา
    numcreditsYear() {
            let b += numofcredits();
            return b;
        } //นำค่าจากfunc ที่ได้มาเก็บสะสมไว้ใน numcreditsYear จะได้เป็นหน่วยกิตทั้งหมดที่เคยลงทะเบียน แล้ว return ค่านั้นออกมาด้วย b
}

let std1 = new Student('63130500031', 'MS.', 'NATTHAKAN', 'THAWEEWATTHANAPRAYUN')
console.log(std1.toString());
let t63 = new Courses();
console.log(t63.numofcredits());
class Register {
    registeredCredits = [{ score: 4, grade: A, meaning: Excellent },
            { score: 3.5, grade: 'B+', meaning: 'Very Good' },
            { score: 3, grade: 'B', meaning: 'Good' },
            { score: 2.5, grade: 'C+', meaning: 'Fairly Good' },
            { score: 2, grade: 'C', meaning: 'Fair' },
            { score: 1.5, grade: 'D+', meaning: 'Fairly Poor' },
            { score: 1, grade: 'D', meaning: 'Poor' },
            { score: 0, grade: 'F', meaning: 'Failure' },
            { score: 0, grade: 'Fa', meaning: 'Failure due to absent from examination' },
            { score: 0, grade: 'Fe', meaning: 'Failure due to absent from examination' },
            { score: null, grade: 'W', meaning: 'Withdrawal' },
            { score: null, grade: 'I', meaning: 'Incomplete' },
            { score: null, grade: 'S', meaning: 'Satisfactory' },
            { score: null, grade: 'U', meaning: 'Unsatisfactory' }
        ] // class นี้จะเก็บค่าหน่วยกิตที่จะต้องใช้คำนวณโดยใช้ในการเปรียบเทียบค่าว่าค่าที่ใส่มาอยู่ในเกณฑ์ไหน โดยจะเก็บเป็น Array แล้วมี obj อยู่ข้างใน

    totalScore(s) {
            let yourScore = 0;
            this.score.forEach((value) => {
                if (s == value.foreignUnits)
                    yourScore += s;
            })
            return s;
        } //จะทำการนำข้อมูลที่ได้ลงทะเบียนไว้มาดูค่าScore ว่าได้เท่าไหร่ แล้วทำการบวกรวมกันไว้

}

function GAP() {
    let GAP = totalScore / numofcredits
    return GAP;

}

function GAPX() {
    let GAPX = totalScore / numcreditsYear
    return GAPX;

}