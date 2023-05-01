/*callbacks functions:-
--------------------------
Example1 :-
----------*/
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}
// callback function
function callMe() {
    console.log('I am callback function');
}
// passing function as an argument
greet('Jyoti', callMe);
console.log("----------------------------------------");


/*Example:-2
----------- */
function sayHello(){
    setTimeout(() => console.log("Sum of two number => "),1000);
}
function sayHii(){
    let x=10;
    let y=20
    console.log("Product of two number => ")
    console.log(x * y);
}

function add(a, b, callback){
    setTimeout(() =>console.log(a + b), 1000);
    callback();
}
add(10,20,sayHello);
add(5, 10, sayHii);
console.log("----------------------------------------");


/*Example:-3
------------ */
function values(){
    console.log("Print array value:-")
}
function elements(callback){
    const arrElement=[10, 20, 300, 14, 11];
    let maxValue=Math.max.apply(null, arrElement)
    console.log("Maximum value ==>  "+maxValue)
    callback();
}
elements(values);
elements(function (){
    const geture = ["Goodday", "Bye", "Hello", "Hii"];
    console.log(geture);
    geture.sort();
    console.log(geture);
});
console.log("----------------------------------------");


/*Example:-4
------------ */
function mainFunction(callback) {
    console.log("Performing operation...");
    setTimeout(function() {
        callback("Operation complete");
    }, 1000);
    }
    function callbackFunction(result) {
    console.log("Result: " + result);
    }
mainFunction(callbackFunction);
console.log("----------------------------------------");


/*Example5:-
------------ */
const cityName= ["Noida", "Delhi", "Pune", "Mumbai"]
let string="";
function reverseCityName(){
    let city= cityName.reverse();
    console.log(city);
}
function pattern(){
    for(let i=1; i<=5; i++){
        for(let j=1; j<=i; j++){
            string=string+ "*";
        }
        string=string+ "\n";
    }
    console.log(string)
}
function merge(callback){
    arr1= [10, 25, 8, 5, 2, 9]
    arr2= ["hii", "hello", "bye", "goodday", "bad"]
    let mergeValues= arr1.concat(arr2);
    console.log(mergeValues);
    callback();
}
merge(pattern);
merge(reverseCityName);
console.log("----------------------------------------");
