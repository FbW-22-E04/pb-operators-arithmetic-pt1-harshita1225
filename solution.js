// write your code in this file

//Basic arithmetic Problems

//question1
const totalAmount = 6450;
const oneTicket = 15;
const totalTickets = totalAmount / oneTicket;
console.log(` Q1: ${totalTickets} tickets are sold in one night`);
console.log(`---------------------`)
//question2
const incomeWeek = 500;
const totalWeeks = 52;//no of weeks in one year
const YearlyIncome = incomeWeek * totalWeeks;
console.log(`Q2: Sylvia's yearly income is dollars ${YearlyIncome}`);
console.log(`---------------------`)
//Percentage
//question3

const x = 17;
const y = 30 /100 ;
const Percent = x*y;
console.log(`Q3: ${x} % 30 is ${Percent}`);
console.log(`---------------------`)

//Geometry Formulas
//question4
const sideOne = 4.75;
const perimeter= sideOne * 4;
console.log(`Q4: Perimeter of sqaure with each side is 4.75cm is ${perimeter}`);
console.log(`---------------------`)



//question5
const a = 5;
const b = 6;
const c = 7;
const perimeterTriangle = a + b + c;
console.log(`Q5:perimeter of a traingle with lenghth of sides as 5cm, 6cm, 7cm is ${perimeterTriangle} `)
console.log(`---------------------`)

//question6

const s = 5;
const SquareArea= a**2;
console.log(`Q6: the area of a square with each side 5cm is ${SquareArea}`);

console.log(`---------------------`)


//question7
const p =3;
const q =4;
const r=5;
const TriangleArea = (p * q)/2;
console.log(`Q7: The area of an right-angled trianglewith length of the sides are 3cm, 4cm, 5cm. is ${TriangleArea}`);

console.log(`---------------------`)


//question8
const j= 9;
const CubeVolume = j ** 3;
console.log(`Q8: the volume of a cube with length of each side 9cm is ${CubeVolume}`);
console.log(`---------------------`)


//Consumer Formula
//question9
const bill1 =22.35 + (22.35*0.1);
const bill2 =26.67 + (26.67*0.15);
const bill3 =35.92 + (35.92*0.2);

console.log(`Q9:all the three bills including the tips are as follows  ${bill1},${bill2},${bill3} `);

console.log(`---------------------`)

//Average
//question10
const hours= 8+6+5+9+8+2+1+8.5+7+4;
//const weeklyhours=86598218.574;
//const totalWorkHours=String(weeklyhours).length;
const avgHours= hours/10;
//console.log(`no of days she worked is ${totalWorkHours}`);
console.log(`Q10: Noemy's average hours worked per day is ${avgHours} `);

console.log(`---------------------`)


//Average
//question11
const score5Test= 75+70+85+90+100;
const avg6=85;
const total6test=85*6; //510
const test6score = total6test - score5Test; //510-420
console.log(`Q11:Score in the sixth test: ${test6score} `);




console.log(`---------------------`)

//Average
//question12
const lastTest= 80*2-78;// 80 = (78+x)/2
console.log(`Q12. James needs a minimum of ${lastTest}% to get an 80% average`);
console.log(`---------------------`)

