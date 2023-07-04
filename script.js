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
  day = 'sunday';
  break;
  case 1:
  day = 'monday';
  break;
  case 2:
  day = 'tuesday';
  break;
  case 3:
  day = 'wednesday';
  break;
  case 4:
  day = 'thuusday';
  break;
  case 5:
  day = 'sunday';
  break;
  case 6:
  day = 'sunday';
  break;






}



