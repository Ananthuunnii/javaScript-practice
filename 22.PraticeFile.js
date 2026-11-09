

// variable declaration check

var $value_1;
var __value_2;
var value_3;

// var 123_value_3; // this get error








// array

const products = ["Keyboard", "Mouse", "Monitor"];
// console.log("products list before adding : ",products)

/***************this way we can remove the value from middle of the array****************/
// this way we can add value in the middle of the array
// products.splice(startPossitionOfmakeChange,howManyPossitionNeedToDelete,"adding value")
products.splice(1, 1, "Headphones");

/*
console.log("products list after adding a item : ",products)
console.log("the latest products list :",products.join(", "));
*/
/***************this way we can remove the value from middle of the array****************/
// Keyboard, Headphones, Monitor
// const removedProducts = products.splice(0, 1);
// console.log(removedProducts[0]); // Keyboard

// annonimous function with callback
function sum(a){
    console.log("printing the data from sum function")
    a()

}
// sum(function(){
//     console.log("hello sum")
// })

let sumdata = ()=>{
    return 100
}
// console.log("sum",sumdata())
let add = ()=>{
    console.log("am a arrow function")
}
// console.log("add",add())


// console.log("the data apperat before 4 sec")
// setTimeout(()=>{
//     console.log("the data apperat after 4 sec")
// },4000)

// console.log("the data apperat before 4 sec")
// setTimeout(
//     console.log("the data apperat after 4 sec")
// ,4000)



//01
// string concat
let fname = "star";
let lname = "link";

let fullname = fname.concat(" ",lname)
// console.log(fullname) // star link
// console.log(fname)

//02
// upper and lower case in strings
let upname = fname.toUpperCase()
let lowname = fname.toLowerCase()
// console.log(upname) // STAR
// console.log(lowname) //star

//03
// finding the lenth of a string
// lenth always start count from 1

let namelength = fullname.length
// console.log(namelength) // 9, because 8 letters and 1 space = 9

//04
//fetching the letter from string

let perticularletter = fname.charAt(0)  // select letter start with 0
// console.log(perticularletter)
for(let i of fname){
    // console.log(i)
    let point = fullname.charAt(3)

    if (i == point){
        // console.log("if answer:",i)
    }
}
// or we can tech letter like 
let checkletter = fullname[0]   // by this way it start from 0
// console.log(checkletter)


//05
// console.log(a());            // declared
// console.log(typeof b);       // undefined
// try { b(); } catch (e) { console.log(e.constructor.name); } // exicute the try

function a() { return "declared"; }
var b = function () { return "expression"; };


//06
let box = [1,"234","sana",70000]

// console.log(box);

// array - [] ,  start index 0 , ordered collection of value
// object - {} , named key , keyvalue pare , access using key

// example 
let bucket = ["pen","paper",1,"$1000"]
bucket.push("rat")
bucket.pop()
bucket.shift()
bucket.unshift("BIGBASKET")
bucket.splice(1,2,"Vipin Ram")

let persondata = {
    name:"Ayush",
    age :"19",
    location:"bangalore"
}
persondata.job = "Software engineer"
persondata.name = "varun"
delete persondata.age
// console.log(bucket[0])
// console.log(persondata.location)
// console.log( persondata)
// console.log( bucket)

// premetive data type - data type hold a single base value.it's immutable. number, string,boolean,null,default,symbol
// cannot be changed one's it created


//non-primitive datatype - data type hold multiple or more complex value. it's mutable
// Array,object, function 

//07
//scope check
function x(){
    var pmoney2 = 20;
    let pmoney1 = 10;
}
// console.log(pmoney2)


//08
// anonymoues function
let wedding = function(s){return s*100}
// console.log(wedding(24))

price = [1,2,3,4,5]
let icecream = price.map(function(x){return x*10})
// console.log(icecream)


// anonymoues function mostly use with callback methods
function sayhello(callback){
    callback();
}
// sayhello(function(){console.log("printing from the sayhello's argument")})




//09
//arrow function
let personName = ()=>{
    // console.log("my name is monster") 
    // return "the return of arrow function"
    }
// console.log(personName())

//10
//normal function
function customerdata_1(){
    var customerwork = "IT analyst"
}
let resultdata_1 = customerdata_1()
// console.log(resultdata_1)
//loop for


// multiplication table
let Tnum = 5;
for(let i=1;i<=10;i++){
    // console.log(`${i}*${Tnum}=${i*Tnum}`)
}

//11

//"=="  -- //is used for cheak the value same not check the datatype
//"===" -- // check the datatype and value

if (1 == true && 0=== false){
    // console.log("Success 1")
}
if (1 == true || 0=== false){
    // console.log("Success 2")
}


//12
//switch statement
role = "Admin"
switch(role){
    case "User":
        console.log("hello it's User");
        break;
    case "Admin":
        // console.log("hello it's Admin");
        break;
    case "Guest":
        console.log("hello it's Guest")
        break;
    default:
        console.log("no user exist")
}

//13
//object creation
let cusromerDetails = {
    name:"Amal dev",
    age :19,
    location:"bangalore",
    gender:"M",
    familyDetails:{
        mother:"anna",
        father:"danny",
        sister:"anne"
    },
    EMI:true
}

// object inside array
// let bucketarr = [{name:"annu",place:"kkd"},{name:"aswin",place:"pkd"}]
// console.log(bucketarr)
// console.log(bucketarr[0]["name"])


// convert string to number

let con = "Geeva"

// console.log(parseInt(con[0]))



// isNan is used for to checak the given is a number or not
//NaN - not a number
let numbercheck = 1;
// if (isNaN(numbercheck)){
//     console.log("it is not  number")
// }else{
//     console.log("it is a number")
// }


// ternary operater
let valueCheck = 2;

let myvalue = valueCheck >0 ? "posative nnumber" : valueCheck< 0 ? "negative number" : "zero";
// console.log(myvalue)


// loops
let i = 0
while (i <10){
    // console.log(i)
    i+=1
}

// forloop

for (let i = 0;i<=10;i++){
    // console.log(i)
}

let mybucket = [1,2,3,4,5];

for (myb of mybucket){
    // console.log(myb)
}


// mybucket.foreach(mybb =>{
//     // console.log(mybb)
// });



// convet string to number

let myAge = "29";
// let smyAge = parseint(myAge);
// console.log(smyAge);



// Nan  - not  a number

let mybox = "abcd"

// if (isNaN(mybox)){
//     console.log("it's not a number")
// }else{
//     console.log("it's a number")
// }


// ternary operater


let mynumber1 = 9
let myanswer = mynumber1 === 9 ? "it is 9" : "it's not number"
// console.log(myanswer)


// var - it is a global variable 
// if it declared anywhere we can call if the calling below it declared it's undefined
// we can reasign variable and var 


// let - is block scope and we cant redeclare using let
// we can reassign 
// and we can't access the let variable outside scope


// try catch 
let bignumber = 9
try{

}catch{
    
}

// const - it is a block scope
// we can't change the value and in declaration we assign the value
// we can update the value


// object freezing

const employee = {
    id:1,
    empname : "hello"
}
Object.freeze(employee)
// one's we freeze the object we can't able to change


//normal function

function mydetails(){
    // console.log("my normal function details")
}


// arrow function

let myarrowfun = ()=>{
    // console.log("welcome to my arrow function")
}
myarrowfun();


//arrow function with passing parameter

let myarrowdetails = (myname,salary)=>{
    // console.log("my name :",myname," : ",salary)
}
myarrowdetails("RAM",35000)


var customer = [{
    "name":"abhi",
    "price":"2000.09",
    "location": "Mumbai"
    },
    {
    "name":"ammu",
    "price":"100.58",
    "location": "Kochi"
    },
    {
    "name":"yash",
    "price":"200.76",
    "location": "Chennai"
    },
    {
    "name":"bella",
    "price":"500.29",
    "location": "Pune"
    }
]


// without arrow function
let bobcuname = customer.filter(function(customer){
    if (customer.name =="yash"){
        return customer
    }
})
// console.log(bobcuname)


// with arrow function

let coccuname = customer.filter((customer)=>{
    if (customer.name == "bella"){
        return customer
    }
})
// console.log(coccuname)



//function with default parameters

function orderDetails(id,name,date = '03/11/2026'){
    // console.log(id,name,date)
}
orderDetails(10,"Golam")
orderDetails(10,"Golam","01/11/2026")

function TeaShop(name,location,...argmore){
    // console.log("name: ",name," location :",location)
    // console.log("more :",argmore)
}

TeaShop("Sree","tanjavoor",500,"2 staff","working days")


// spread operater

// used to copy a array to existing array condinuation

let highjump2026 = [1,2,3,4,5,6]
let highjump2027 = [10,20,30,40,...highjump2026]
// console.log(highjump2027) // this is spread operater
let highjumpTotal = [...highjump2026,...highjump2027]
// console.log(highjumpTotal)



// destructuring

let myvehicleColl = ["GS300","alto800","fortuner","volvo"]


// we ushaly wish to write 

let [bike,car,suv,bus] = myvehicleColl

// insted we do


let [...allvehicles] = myvehicleColl
// console.log(allvehicles)


// template leterals


let mysheading = `hello am Swashthi and my guarage is filled with ${allvehicles}`;
// console.log(mysheading)




// class

class myhome{
    constructor(){
        // console.log("hi am inside my constructor")
    }
}

let mh = new myhome;



// adding property to class

class mybook{
    book_id;
    book_name;

    constructor(){
        // console.log("inside the constructor starting");
        this.book_id = 101 ;
        this.book_name = "The Grate Success";
        // console.log("inside the constructor end");
        // console.log(`the book name is ${this.book_name} and book is is ${this.book_id}`)

    }
}

let stu1 = new mybook();



// passing the parameter

class mybookstore{
    book_id;
    book_name;

    constructor(id,name){
        // console.log("inside the constructor starting");
        this.book_id = id;
        this.book_name = name;
        // console.log("inside the constructor end");
        
    }
    getBookDetails(){
        // console.log(`the book name is ${this.book_name} and book ID is ${this.book_id}`)
    }
}

let mystu1 = new mybookstore(101,'"The Grate Success"');
mystu1.getBookDetails()


var emp_database = [{
    "name":"abhi",
    "price":"2000.09",
    "location": "Mumbai"
    },
    {
    "name":"ammu",
    "price":"100.58",
    "location": "Kochi"
    },
    {
    "name":"yash",
    "price":"200.76",
    "location": "Chennai"
    },
    {
    "name":"bella",
    "price":"500.29",
    "location": "Pune"
    }
]

// inheritance


class animal{
    constructor(sound){
        // console.log("animal speak :",sound)
    }
}

class Bigdog extends animal{
    constructor(){
        super("Bow bow bow.....")
        // console.log("dog speak")
    }
}

let mydog = new Bigdog()



// module in js

// export const Country = "USA";

// export function names(myname){
//     return myname*2
// }


/********************  CLASS  **********************/


class SYS_Employee{
    name = "noname";
    age = 0;

    constructor(){
        // console.log("constructor is calling")
        this.name = "HULK";
        this.age = 101;
    }
    display(){
        // console.log("name is :",this.name,", age:",this.age)
    }
}

let sys = new SYS_Employee()
sys.display()


let sys1 = new SYS_Employee()
sys1.name = "Raj"
sys1.age = 1001
sys1.display()


/********************  Encapsulation  **********************/



class PUNB_BANK{

    Savings = 0;   // public
    #balance = 0;  // privete
}

const  punb = new PUNB_BANK();

punb.Savings = 1000;
// punb.#balance = 100  // we can't use the private member


class indian_bank{

    #balance = 0;
    constructor(balance=0){
        this.#balance = balance
    }
    deposite(depo){
        this.#balance +=depo
    }
    withdraw(wdw){
        this.#balance-=wdw;
    }
    getbalance(){
        return this.#balance
    }
}

const customer_1 = new indian_bank();
customer_1.deposite(1500)
customer_1.withdraw(500)
customer_1.deposite(2000)
customer_1.withdraw(100)
customer_1.withdraw(400)
// console.log("balance :",customer_1.getbalance());






/********************  inheritance  **********************/


// class wildanimal{
    
//     type;
//     constructor(atype){
//         this.type = atype
//     }
//     catogary(){
//         console.log("this is a ",this.type,"animal")
//     }
// }

// class wildDOG extends wildanimal{

//     bread;
//     constructor(atype,dbread){
//         super(atype);
//         this.bread = dbread;
//     }
//     animalDetails(){
//         console.log("this animal bread is a ",this.bread)
//     }
// }

// const faveratedog = new wildDOG("nonVeg","German");
// faveratedog.animalDetails();
// faveratedog.catogary();


/********************  Polymorphosm  **********************/


// class Animal{
//     makesound(){
//         console.log("animal sound")
//     }
// }

// class cat extends Animal{
//     // makesound(){
//     //     // console.log("cat make sound")
//     // }
// }
// const wildcat = new cat();
// wildcat.makesound()


/********************** abstraction ***************************/


// class payment{
//     pay(){
//         console.log("payment is done")
//     }
// }
// class Creditcard extends payment{
//     pay(){
//         console.log("pay using credit card")
//     }
// }
// class UPI extends payment{
//     pay(){
//         console.log("pay using UPI")
//     }
// }

// class Debitcard extends payment{
//     pay(){
//         console.log("pay using Debitcard")
//     }
// }

// abstraction means 
// give this perticular function to someone
// const customerpay = new UPI();
// customerpay.pay();




/********************** LocalStorage ***********************/
localStorage.setItem('username','Spiderman');
localStorage.setItem("password","Spiderman@123");
localStorage.removeItem("username");
localStorage.removeItem("password");

localStorage.setItem("username","Spiderman");
let theusername = localStorage.getItem("username");
// console.log("username is ",theusername);

localStorage.clear()

/********************** SessionsStorage ***********************/

sessionStorage.setItem("username","Spiderman")
sessionStorage.setItem("password","Spiderman@123")

sessionStorage.removeItem("password")

let secusername = sessionStorage.getItem("username");
// console.log("section Storage username",secusername)

sessionStorage.clear()

/********************** Browser Cookies ***********************/

document.cookie = "username = Hulk; expires = the, 04 Nov 2026 09:25:00 UTS;"

document.cookie = "password = spiderman@123; expires = the, 04 Nov 2026 09:25:00 UTS;"





/********************** Interview Preperation ***********************/

// Q1

// reverseWords("hello world from JS");
// "JS from world hello"

function reverseWords(inputstring){
    let inputword = inputstring.split(" ")
    let newword = ''
    for(i=inputword.length-1;i>=0;i--){
        // newword += inputword[i]
        if (inputword[i] === "") continue;          // skip empty strings from extra spaces
            newword += (newword ? " " : "") + inputword[i];
        }
    // console.log("newword output :",newword)
}
// reverseWords("hello world from JS")



//Q2

// countChars("hello");
// { h: 1, e: 1, l: 2, o: 1 }

function countCharsss(inputstring){
    let wordcount = {};
    for (let char of inputstring.toLowerCase()){
        if (char ===" ") continue
        wordcount[char] = wordcount[char] ? wordcount[char]+1 : 1
    }
    console.log("last output :",wordcount)
}
// countCharsss("hhhellooo000");


//Need to understand

//ND1
// console.log("start with 0 sec")
// setTimeout(()=>{
//     console.log("after the 30 sec")
// },3000)


//ND2

// const wait = (ms) => new Promise((resolve, reject) => {
//   setTimeout(() => resolve("done"), ms);
// });

// wait(1000)
//   .then((result) => console.log(result))   // "done"
//   .catch((err) => console.log(err))        // runs if rejected
//   .finally(() => console.log("cleanup"));  // runs either way


// const order = (word) => new Promise ((resolve,reject)=>{
//     setTimeout(()=> resolve("Done"),word);
// })
// order(4000)
// .then()


// const someoneorder = (wm) => new Promise((resolve)=>{
//     setTimeout(()=> resolve("the someone order completed"),wm)
// },wm)

// someoneorder(4000)
//     .then((result)=>console.log(result))
//     .catch((error)=>console.log(error))
//     .finally(()=>console.log("clearup"))


// async function customerDetails(){
//     console.log("customer async function started")
//     let start = await someoneorder(5000)
// }

// customerDetails()
// const someoneOrder = (ms) => new Promise((resolve) => {
//   setTimeout(() => resolve("the order completed"), ms);  // resolve with a value, delay goes here
// });

// someoneOrder(4000)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("cleanup"));

// async function customerDetails() {
//   console.log("customer async function started");
//   try {
//     const result = await someoneOrder(5000);
//     console.log(result);
//   } catch (error) {
//     console.log("failed:", error);
//   }
// }

// customerDetails();


// Q4
// Write a function getExpensiveNames(list, minPrice) that returns an array of the names, 
// in uppercase, of customers whose price is greater than minPrice.


// getExpensiveNames(customers, 150);
// ["ABHI", "YASH", "BELLA"]
// const customers = [
//   { name: "abhi",  price: "2000.09", location: "Mumbai" },
//   { name: "ammu",  price: "100.58",  location: "Kochi" },
//   { name: "yash",  price: "200.76",  location: "Chennai" },
//   { name: "bella", price: "500.29",  location: "Pune" }
// ];
// function getExpensiveNames(customers, minprice){
//     return customers.filter((c)=>{ 
//         if (c.price > minprice){
//             c.name.toLowerCase
//         }

//     })
// }
// getExpensiveNames(customers, 150)
// console.log(getExpensiveNames(customers, 150))


// Q4
// let foodcooking = new promise ((resolve,reject)=>{
//     if (true){
//         resolve("food is ready")
//     }else{
//         reject("food is not ready")
//     }
// })
// foodcooking
// .then((result)=>{
//     console.log("resolved ",result)
// })
// .catch((error)=>{
//     console.log("the error is ",error)
// })

//Q5

// URL = "https://github.com/Ananthuunnii"
// fetch(URL)
// .then(Response = Response.json)
// .catch((error)=> console.log("the error is ",error))

// let mybasketbin = {
//     name:"ball",
//     age:1,
//     color:"blue"
// }

// for (let bkbin in mybasketbin){
//     console.log(mybasketbin[bkbin]);
// }

// let myname = "only success"
// let darkworld = [1,2,3,4,5,6,7,8,9,"abcd"];
// let emptyspace = []
// for (let i of darkworld){
//     console.log(i)
//     emptyspace.shift("00")
//     emptyspace.push(i)
//     emptyspace.pop()
// }
// console.log(emptyspace)


// function sportsman(){
//     console.log("Sports man")
// }

// function throwball(callback){
//     console.log("throwball")
//     callback()
// }
// throwball(sportsman);

// const someoneproducts = ["Keyboard", "Mouse", "Monitor"];
// someoneproducts.splice(1,1,"Mousepade")
// console.log("products list before adding : ",someoneproducts)


// var customerId = [1,2,3,4]

// console.log("array format",customerId) // this is the array format

// console.log("before the function call :",JSON.stringify(customerId)); // this is string format
// let wordchange = JSON.stringify(customerId)
// console.log(typeof(wordchange))

// let aforapple = 1
// if(aforapple){
//     console.log(aforapple)
// }else if(aforapple == -1){
//     console.log("a is negative");
// }

// let donemyjob = 100;

// if (donemyjob >0 && donemyjob <=100){
//     console.log("myjob inside the 100")
// }
// if (donemyjob >0 || donemyjob <100){
//     console.log("my job || operater")
// }

// let tyre = "big";

// switch (tyre){
//     case "big":
//         console.log("big")
//         break;
//     case "small":
//         console.log("small");
//         break;
//     case "extra small":
//         console.log("extra small")
//         break;
// }


// var jiouser ={
//     username : "aju",
//     age: 79,
//     location : "kolkata",
//     dataplan :{
//         Total_gb : "1.5GB",
//         used_gb : "500MB"
//     }

// }
// console.log(jiouser)
// console.log(jiouser['username'])


// var groupofjiouser =[{
//     userid : 1,
//     username : "aju",
//     age: 79,
//     location : "kolkata",
//     dataplan :{
//         Total_gb : "1.5GB",
//         used_gb : "500MB"
//     }

// },{
//     userid : 2,
//     username : "aju",
//     age: 79,
//     location : "kolkata",
//     dataplan :{
//         Total_gb : "1.5GB",
//         used_gb : "500MB"
//     }

// },{
//     userid : 3,
//     username : "aju",
//     age: 79,
//     location : "kolkata",
//     dataplan :{
//         Total_gb : "5.5GB",
//         used_gb : "500MB",
//         dataspeed :{
//             per10sec :"10mb",
//             per1sec :"1mb"
//         }
//     }
// }]

// console.log(groupofjiouser[2]["dataplan"]["dataspeed"])


// var customerIdString_12 =  "1";
// let convstr = parseInt(customerIdString_12);
// console.log(convstr)

// var customerIdString_1 =  "1";
// var customerIdNumber = parseInt(customerIdString_1)
// console.log(typeof(customerIdNumber))

// let cusnums = 1;
// if(isNaN(cusnums)){                         /// this isNaN only true with letters and undefined rest everything get false
//     console.log("it's not a number");
// }else{
//     console.log("it's a number")
// }



// ternary operater

// let ternum = 40;
// let ter1num = ternum >=0 ? "it's posative" : "it's negative";
// console.log(ter1num);
// let trynumber = 10;
// try{
//     if (trynumber){
//         console.log("output is ",trynumber);
//     }else{
//         console.log("it's empty :",trynumber)
//     }
// }catch(e){
//     console.log("error :",e)
// }


// we can mute changes using const in array 

const changingarray = ["a1","a2","a3","a4"]
changingarray[1] = "b1";
changingarray[0] = "b0";
// console.log(changingarray)

// we can mute changes using const in object 

const changingobject ={
    id :101,
    name:"sparrow",
    game:"GTA"
}
// changingobject[0] = 1001;
changingobject.name = "sparrow2"
// console.log(changingobject)


function freezingpart(argfree){
    Object.freeze(argfree)
    argfree.id = 3;
    return argfree;

}
let freeout = freezingpart(changingobject)
// console.log(freeout)


// arrow function 

let myarrfun = ()=> {return "Hi arrow function"}    
// console.log(myarrfun())

// parameterpassing

let myarrownum = "i have super power for tommorow interview";
let myparafunct = (myarrownum)=>{
    return myarrownum + " and i will conqure the interview";
}
// console.log(myparafunct(myarrownum))

// arrary contain object 
var ucustomer = [{
    "name":"abhi",
    "price":"2000.09",
    "location": "Mumbai"
    },
    {
    "name":"ammu",
    "price":"100.58",
    "location": "Kochi"
    },
    {
    "name":"yash",
    "price":"200.76",
    "location": "Chennai"
    },
    {
    "name":"bella",
    "price":"500.29",
    "location": "Pune"
    }
]
// how to get the customers who is having the name = ammu
let Tfiltername = ucustomer.filter(function(uc) {
    if (uc.name == "ammu"){
        // console.log("ammu in the list"+ uc.price);
        return uc
    }
});
// console.log(Tfiltername)


function jofunction(name,age,salary = 120000,...timing){
    console.log(`${name} age is ${age} and you will get salary $ ${salary}`)
    console.log(`Timing of the work in daytime ${timing[0]}`)
    console.log(`Timing of the work in night ${timing[1]}`)
    console.log(`Timing of the work in late night ${timing[2]}`)
}
// jofunction("ME",27,130000,"11:20pm","12:00am","4:45am")

// spread operater
var customerInfo = ["william",23,"Marry",45,"jacky",64,"john",25,"Gargi"];
var customerInfo_1 = ["Gorgena", 49,"jenner",19]

var newcustomerinfoarray = [...customerInfo,...customerInfo_1]
// console.log(newcustomerinfoarray)



class newgeneration{

    genid;
    genage;
    genname;
    constructor(cgenid,cgenage,cgenname){
        this.genid = cgenid;
        this.genage = cgenage;
        this.genname = cgenname;
        console.log("inside the constructor")
        console.log(`the id ${this.genid} with name ${this.genname} age is ${this.genage}`)
    }
    display(clickID){
        console.log("in display function :",clickID)
    }
}
class mygeneration extends newgeneration{
    constructor(){
        super(101,32,"Ronin")
        console.log("inside the child class")
    }
}

// let mygen = new mygeneration();
// mygen.display("12345")


// let newgen = new newgeneration(1, 25, "John")
// newgen.display("10045")


class skywalking{
    #balance;
    constructor(hbalance=0){
        this.#balance = hbalance;
        console.log("inside constructor")
    }
    depositing(deposit){
        console.log('deposit amount :',deposit)
        this.#balance+=deposit
    }
    accountbalance(){
        return this.#balance
    }
}
// let mysky = new skywalking()
// mysky.depositing(5001);
// console.log(mysky.accountbalance())


class someonevehicle{
    brand;
    constructor(cbrand){
        this.brand = cbrand
    }
    display(){
        console.log("the brand is ",this.brand)
    }
}

class someonecar extends someonevehicle{
    model;
    constructor(cbrand,cmodel){
        super(cbrand)
        this.model = cmodel
    }
    display(){
        super.display()
        console.log("the model is :",this.model)
    }
}
// let soonvc = new someonecar("KEA","Seltos")
// soonvc.display()

// localStorage.setItem("username","success full person")
// localStorage.setItem("password","no one can beat me i am the best")
// localStorage.setItem("phonenumber","2244")
// localStorage.removeItem("phonenumber")
// localStorage.clear()


// sessionStorage.setItem("username","success full person")
// sessionStorage.setItem("password","no one can beat me i am the best")
// sessionStorage.setItem("phonenumber","2244")
// sessionStorage.removeItem("phonenumber")
// sessionStorage.clear()

// document.cookie = "username=sharpminded; expires = The, 07 Nov 2026 12:34:00 UTS;"


function shownotification(){
    alert("the button is clicked")
};

    // let gimgim = "abcd"
    // let igmigm = "efg"
    // console.log(gimgim.concat(igmigm))
var employeeDetails = {
    employeeName: "John",
    salary: 30000,
    city: "Bangalore"
};

employeeDetails.department = "designing"
employeeDetails.location = "delhi"
employeeDetails["employId"] = 1001
// console.log(employeeDetails)

delete employeeDetails.location
// console.log(employeeDetails)

var authorDetails = {
    authorName: "J. K. Rowling",
    bookName: "Harry Potter series",
    characterNames: ["Harry Potter", "Hermione Granger", "Ron Weasley"]
};

console.log(authorDetails.characterNames[0])
console.log(authorDetails["characterNames"][0])
console.log(authorDetails.characterNames.length)
authorDetails.characterNames.push("spiderman")
console.log(authorDetails["characterNames"])
console.log("%cjavascript","background-color:blue")
console.log("%cJavaScript", "background-color: red");

(function () {
    let bookName = "Harry Potter series";
    console.log("Book Name:", bookName);
})();

const newvalue = new Promise((resolve)=>{
    let a = true;
    if(a){
        resolve ("it's true ")
    }
})
// newvalue()
// .then(()=>{
//     console.log("resolved")
// })
// .catch((e)=>{
//     console.log("error")
// })

// try{
//     console.log()
// }
// catch(e){

// }






