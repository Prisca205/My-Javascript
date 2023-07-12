/* console.log('hello')
let ray = 2;
let laty = 5;
let rlaty = ray + laty;
console.log(rlaty); */

/*
java has 8 dart types 
strings
numbers
bigints
undefined
null
symbol
object
*/

let read = 'here';
let work = 'power';
let readWork = read + work;
console.log(readWork);

//challenge
/* let markmass = 78;
let markheight = 1.69;

let markTotal  = markmass / markheight ** 2;
//john
let johnmass = 92;
let johnheight = 1.88;

let johnTotal  = markmass / markheight ** 2;

let markHigherBMI = johnTotal > markTotal; */

///2nd
let mark2mass = 95;
let mark2height = 1.88;

let mark2Total  = mark2mass / mark2height ** 2;
//john
let john2mass = 75;
let john2height = 1.76;

let john2Total  = john2mass / john2height ** 2;
let mark2HigherBMI = john2Total < mark2Total;
console.log(mark2HigherBMI)
if (mark2HigherBMI){
  console.log(`Mark's BMI (${Math.round(mark2Total)}) is greater than John's (${Math.round(john2Total)})`)
}
else{
  console.log(`John's BMI (${Math.round(john2Total)}) is greater than Mark's (${Math.round(mark2Total)})`)
}
/*  const check = null === undefined;
  console.log(check)*/

/* const myName = 'Donald';
const myJob = 'Developer';
const yearOfBirth =1717
const currentYear =2070
const donald  = `I'm ${myName}, a ${currentYear - yearOfBirth} year old ${myJob} !`;
console.log(donald); */

//type conversion-DIY
//type coersion-Change / converted By Javascript.
//type = no ,strings etc

//challenge
const manAverage = (96 + 108 + 89) / 3;
const barAverage = (88 + 91 + 110) / 3;
console.log(manAverage);
console.log(barAverage);

//compare
if(manAverage > barAverage && manAverage >= 100){
 console.log(`Manchester Wins!`);
}
else if(barAverage > manAverage && barAverage >= 100){
  console.log(`Barcelona Wins!`);
}
else if(manAverage === barAverage && manAverage >= 100 && barAverage >= 100){
  console.log(`It's a Draw!`);
}
else(
  console.log(`Nobody wins!`)
);

// Homie
/* 
function check (boo){
  let min = Infinity;
  let max = -Infinity;
  const minmax = {Min: null, Max: null};
  for(let i = 0; i < boo.length; i++ ) 

   if(boo[i] < min && boo.length > 1){
    min =  boo[i]; 
    minmax.Min = min;
    }

  else if(boo[i] > max && boo.length > 1){
  max =  boo[i]; 
  minmax.Max = max;
  }
  else if(boo.length <= 1){
    minmax.Min = boo[0];
    minmax.Max = boo[0];
  }
  else if(minmax.Min === ''){
    minmax.Min = null;
    minmax.Max = null;

  }

    return minmax;
}
  



let x = check([2]);

console.log(x); */
/* function times(vals){
 let fruits ={}
let appear = 0;
const first = vals[0];
  for(let i = 0; i < vals.length; i++)
    if(vals[i] === vals[i]){
       appear++;
       fruits.first = appear;
    }


    
    return  fruits
}
const x = times(['fork', 'spoon', 'knive', 'fork', ])
console.log(x) */
//end homie


switch(new Date().getDay()){
case 0:
  console.log( 'sunday');
  break;
  case 1:
    console.log( 'monday');
    break;
  case 2:
    console.log( 'tuesday');
    break;
  case 3:
    console.log( 'wednesday');
    break;
  case 4:
    console.log( 'thursday');
    break;
  case 5:
    console.log( 'friday');
    break;
  case 6:
    console.log( 'saurday');
    break;


}

function SWITCH(){
  const day = 'sunday';
  if(day === 'Monday'){
    console.log('sit at home');
  }
  else if(day === 'Tuesday'){
    console.log('work');
  }
  else if(day === 'Wednesday'){
    console.log('Bake');
  }
  else if(day === 'Thursday' || day === 'Friday'){
    console.log('Gymn');
  }
  
  else{
  console.log('Free Day!');
  }
}
SWITCH()


//tip 
const calcTip = function(bill){
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
}




calcTip(100)
//bills
const bills = [125, 55, 44]
console.log(bills)

//tip
const tips =[calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);



//chalenge "function"
const calcAvg = (a, b, c) =>( a + b + c) / 3;



const manAvg = calcAvg(44, 23, 71 );
const bacAvg = calcAvg(50, 24, 70 );
console.log(manAvg)

const checkwinner = (manAvg, bacAvg) => {
  if(manAvg >= 2 * bacAvg){
    console.log(`Manchester wins! (${manAvg} vs. ${bacAvg}).`)
  }
  else if(bacAvg >= 2 * manAvg){
    console.log(`Barcelona wins! (${bacAvg} vs. ${manAvg}).`)
  }
  else{
    console.log(`Nobody wins!`)
  }
}
checkwinner(manAvg, bacAvg);

/* const cars = ['benz', 'Volvo', 'mercedes']
console.log(cars)
let popp = cars.splice()
 console.log(cars) */

 //prompt
 const names ={
  firstName: 'Donald',
  birthyear: '1969',
  Year: '2023',
  job:'Developer',
  hasLicense: false,
  lastName: 'Kings',
  friends: ['Oisa', 'John','Ugo' ],
  age : function(){
    return this.Year - this.birthyear;
  },
  summary: function Profile(){
    return `${this.firstName} is a ${this.job} and he ${this.hasLicense ? 'has' : "doesn't have"} a driver's license. `
  }
 }
 console.log(names.summary())

  /* const interest = prompt('what do you want to know?');
 if(names[interest]){
  console.log(names[interest])
 }
else{
  console.log('Name not found')

} */

console.log(`${names.firstName} has ${names.friends.length} friends and his best friend is ${names.friends[2]}`)

//objects challenge

const markBmi = {
  Fname:' Mark Miller',
  Mass: '78',
  Height: '1.69',
  BMI: function calcBMI(){
  return  this.Mass / this.Height ** 2 
  }
}
const johnBmi = {
  Fname:' John Smith',
  Mass: '92',
  Height: '1.95',
  BMI: function calcBMI(){
    return  this.Mass / this.Height ** 2 
  }
}

const higherBMI = markBmi.BMI() > johnBmi.BMI() ? `${markBmi.Fname}'s BMI (${Math.round(markBmi.BMI())}) is higher than ${johnBmi.Fname}'s BMI (${Math.round(johnBmi.BMI())}).` : ` ${johnBmi.Fname}'s BMI (${Math.round(johnBmi.BMI())}) is higher than ${markBmi.Fname}'s BMI (${Math.round(markBmi.BMI())}).`

console.log(higherBMI)



