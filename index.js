const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnloginpopup = document.querySelector('.btnlogin-popup');
const show = document.querySelector('#show')



registerlink.addEventListener('click', ()=> {
     wrapper.classList.add('active');
}) 

loginlink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
})

btnloginpopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup')
})




function showpassword(){
    if(show.type=='password'){
        show.type='text'
    }else{
        show.type='password'
    }
}


//increasing for loop
 let i; 

 for(i=0; i <= 10; i++){
    console.log(' and the amount is : ' + i)
 }

 //decreasing for loop
 for( let number= 10; number>= 0; number--){
    console.log(' The amount available is :' + number)
 }

 for( let number= 20; number >= 10; number-- ){
    console.log( ' The amount of your money is ' + number)
 }


 let firstname= 'Nasiru Sulaimon'
 console.log(firstname.length)
 console.log(firstname.toLocaleLowerCase());
 console.log(firstname.toLocaleUpperCase())
 console.log(firstname.charAt(3))

 const nam = 'Nasiru';
 const money = '$500';

 console.log('Hello!' + nam + '. Your account have been credited with ' + money)
 const bank = `Hello ${nam} you have ${money} left in your account`
 console.log(bank)

 const num= 34;
 const you = 'Children'

 console.log(`Hello! Nasiru, we have ${num} ${you} in the warehouse`)



 //ARRAY
 const object=[ 'Anna','John','Michael', 'Samuel','Sula'];
 const newArray=[]
console.log(object.length);
console.log(object[2]);
console.log(object[object.length-1]);
console.log(object.concat()) //This writes all the data
console.log(object.reverse()) //This reverse all the data in an array
console.log(object.unshift())
console.log(object.shift()) //This writes the last data in an array
console.log(object.push()) //This gives the real definition of an array(index)
console.log(object.pop()) //This writes the first data in an array

for( let f= 0; f <= object.length; f++){
   console.log(f);
   console.log(object[f]);
   newArray.push(object[f])
   
}
console.log(newArray)

//Functions, array, return, if, for loop

const gas = [5, 10, 15, 20];
const food =[10, 20, 30, 40];

function calculation(arr){
    let total = 0;
      for(let i=0; i < arr.length; i++){
        total += arr[i];      
      return total;
      }
}

const gasTotal = calculation(gas);
const foodTotal = calculation(food);

console.log(
    {gas: gasTotal,
    food:foodTotal}
)




const books = [10, 20, 5, 30, '$'];
const clothes = [20, 69, 30, 4, '$'];

function stationaries( rest){
    let all= 0;
    for(let a= 0; a < rest.length; a++){
        all +=rest[a];
    }
  
    if( all = 0){
        console.log('Hello! you dont have insufficient balance');
        return all;
    }
        console.log('Hello! You are qualified');
        return all;
    

}

const bookstotal = stationaries(books)
const clothestotal = stationaries(clothes)

console.log({
    books: bookstotal,
    clothes: clothestotal
});



let firstext= 'fff'
console.log(typeof firstext)





const milk = [23, 56, 78, 13];
const rice = [23, 56, 70, 13]

function foodtotal(dun){
    let sum =0;
    for(let x=0; x < dun.length; x++ ){
        sum += dun[x]
    }

    return sum
}

const milktotal = foodtotal(milk);
const ricetotal = foodtotal(rice);

console.log({
    milk : milktotal,
    rice : ricetotal
})

//Global Scope & Local Area
//Any variable outside the code block{}is said to be in Global scope
//It can be access everywhere


let name= 'Peter';
name ='Sulaimon'

console.log(`This is ${name}`);


function firstnames(){
    name = 'Gbolahan';
    console.log(`${name} is the real nigga`);

function innername(){
    name = 'Farouk';
    console.log(`My real name is ${name}`);
}
innername()

}

firstnames()

if(true){
    console.log(`This is my real name ${name}`);
}


//variable Lookup
//{}-code block
//Note that RETURN must be written below each function 

let globalnumber =5

function add(NUM1, NUM2){
    const globalnumber = 20 //Local variable(scope)
     const result= NUM1 + NUM2 + globalnumber;
    

     //local variable
     function multiply(){
        const globalnumber =100 //local variable(scope)
        const multiplyresult= result * globalnumber;
        console.log(multiplyresult);
     }

     multiply();

     return result


}
console.log(add(3,4));



//Callback functions, Higher functions, Functions as First
//Class Objects/citizen

//ffunctions are first class objects-stored in a variable(espression), passed as an argument to another function, return from the function

//High Order Function- accepts another function as an argument or returns another function as a result

//Callback Function - passed to a another function as an argument and executed inside that function



function morning(){
    console.log('Good morning Bob');

    return 'Good morning Bob'
}

function afternoon(){
    console.log(`Good afternoon`)
}

function greet(liname,cb,ab){
    const myname = 'peter'

    console.log(`${liname}, my real name is ${myname}`)
cb()
ab()
}

greet('Bob',morning,afternoon); //callback function
greet('Ana',morning, afternoon)

            //ARRAY ITERATORS

// Powerfull Array Methods
// forEach, map, filter, find, reduce
// Iterate over array - no for loop required
//Accept CALLBACK function as an argument, calls Callback against each item in a arraY. Reference item in the callback


//forEach
//does not return newArray

const people =[
    {name: 'Nasiru', age: '23', job: 'developer' },
    {name: 'Gbolahan', age: '20', job: 'babber' },
    {name: 'Lakesman', age: '27', job: 'designer' },
]

function showperson(person){
    console.log(person);
    console.log(person.job.toLocaleUpperCase());
    console.log(person.age.toLowerCase());  
}

people.forEach(showperson)

people.forEach(function(all){
    console.log(all.job.toLowerCase());
})




//Map
//does return array
// does not change size of original array
// uses values from original array when making new one

const peoples =[
    {name : 'Sulaimon', job : 'Developer', age : 25 },
    {name : 'Atanda', job : 'Graphics Designer', age : 34},
    {name : 'Olaosebikan', job : 'Pharmacist', age : 22}
]

const ages = peoples.map(function(who){
    console.log(who);   
   // return 'Hello World';
    return who.job
});

const newpeople = peoples.map(function(who){
    return {
        firstname : who.name,
        newAge : who.age + 30,
    }
})

console.log(newpeople);



//filter 
//does return a new Array
//can manipulate the size of a new Array
//returns based on conditions


const humans= [
    {name : 'Ishola', age : 23, job : 'developer'},
    {name : 'Nasiru', age : 42, job : 'Graphics Designer'},
    {name : 'Michael', age :34,  job: 'Doctor'},
]

const resulthuman= humans.filter(function(homo){
    return homo.age >= 30;
})

const another = humans.filter(function(homo){
    return homo.job == 'developer'
})

//find
//returns single instances -(incase of object)
//returns first match, if no match undefined
//great for getting unique values

const person = humans.find(function(homo){
    return homo.name=== 'Michael'
})

console.log(resulthuman);
console.log(another);
console.log(person); //find


//Math
// Standard built-in objects- always available

const number = 4.876
const result = Math.floor(number)
console.log(result);

const number2 = 7.546
const result2 = Math.ceil(number2)
console.log(result2);

const number3 = 25
const result3 = Math.sqrt(number3)
console.log(result3);

const result4 = Math.floor(Math.random() * 100)
console.log(result4);


//Date

const date = new Date();
console.log(date);





//practice

const human= [
    {name : 'Atanda', level : 100, Dept : 'BCH',},
    {name : 'SUlaimoney', level : 400, Dept : 'PHM',},
    {name : 'Olaosebikan', level : 500, Dept : 'EGN',},
]

function showpeople(people){
    console.log(people);
    console.log(people.name);
    console.log(people.Dept.toLocaleLowerCase());

}

human.forEach(showpeople)
human.forEach(function(some){
    console.log(some.level);
})

//map

const remark = human.map(function showmap(mapcode){
     
     return {
         newdept: mapcode.level,
         newname: mapcode.name[1]
     }
    
})

console.log(remark);


//filter
//does return a new Array
//can manipulate the size of a new Array
//return based on conditions

const resultfilter = human.filter(function showfilter(ab){
    
     return ab.name =='Atanda'
})

console.log(resultfilter);



const no = 6.78476
const resultno = Math.floor(no)
console.log(resultno);

const no2 = 456
const resultno2 = Math.sqrt(no2)
console.log(resultno2);

const no3 = 23 * resultno2 * 100
const resultno3 = Math.sin(no3)
console.log(resultno3);

const no4 = Math.floor(Math.random() * 10000)
console.log(no4);

//Getting a legit time

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',

]

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]



const Ate= new Date()
const month = Ate.getMonth()

console.log(months[month]);

const day = Ate.getDay()
console.log(days[day]);

console.log(Ate.getDate());
console.log(Ate.getFullYear());

const sentence = `${days[day]}, ${Ate.getDate()} ${Ate.getFullYear()}`
console.log(sentence);


//GENERATING OTP

const generateopt =() => {
    const length = 6;
    let OTP ="";

    //Using for loop to generate OTP
    for(let a=0; a < length; a++){
        OTP += Math.floor(Math.random() * 10)
    }
       return OTP
    
}
console.log(generateopt());

//Note that RETURN must not be in for loop

























 