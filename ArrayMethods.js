/*Add element at first:-
---------------------------*/
const arr=["hello", "hii", "Good", "bad"];
console.log("Before Add elements:-");
console.log(arr);
arr.unshift("Good Morning");
console.log("After Add elements:-");
console.log(arr);

/*Add elemenet at last:-
-------------------------- */
const addLast= [10, 25, 68, 5, 3, 15];
console.log("Before Add elements:-");
console.log(addLast);
addLast.push(100);
console.log("After Add elements:-");
console.log(addLast);

 /*Add element in middle:-
 --------------------------- */
 const addMiddle= ["one", "second", "third", "fouth"];
 console.log("Before Add elements:-");
 console.log(addMiddle);
 addMiddle.splice(2, 0, "natural number");
 console.log("After Add elements:-");
 console.log(addMiddle)

 /*Update element:-
 --------------------- */
 const updateValue=["java", "C++", "php", "html"];
 console.log("Before Update elements:-");
 console.log(updateValue);
 updateValue[1]="C# .net full stack";
 console.log("After Update elements:-");
 console.log(updateValue);

 /*Remove first element:-
 ------------------------ */
 const removeFirst=["car", "bird","animals","chair"];
 console.log("Before remove elements:-");
 console.log(removeFirst);
 removeFirst.shift();
 console.log("After remove elements:-");
 console.log(removeFirst);

 /*Remove last element:-
 ----------------------- */
 const removeLast=["good", "bad", "sad", "happy"];
 console.log("Before remove elements:-");
 console.log(removeLast);
 removeLast.pop();
 console.log("After remove elements:-");
 console.log(removeLast);

 /*Remove in middle:-
 -------------------- */
 const removeInMiddle=[45, 98, 14, 11, 2 ];
 console.log("Before remove elements:-");
 console.log(removeInMiddle);
 let we=removeInMiddle.splice(1,2);
 console.log("Remaining element after remove:- ");
 console.log(removeInMiddle);
 console.log("remove element:-");
 console.log(we);

 /*Merge Array:-
 -----------------*/
 const x=[10,20,30];
 const y=["hii","hello","bye"];
 const z=[true, false];
 console.log("After merge elements are:-");
 let mergeValues=y.concat(x,z);
 console.log(mergeValues);

 /*Reduce dimensionality:-
 -------------------------*/
 const myArr = [1,2, [35,25,10],["one", "two", "five"]];
 const newArr = myArr.flat();
 console.log("After Reduce dimensionality elements are:-");
 console.log(newArr);

 /* Sort string elements:-
 -------------------------*/
 const sortArray=['a','e','m','b','c'];
 console.log("Before sort elements are:-");
 console.log(sortArray);
 let u=sortArray.sort();
 console.log("After sort elements are:-");
 console.log(u);

 /*Cut a piece of array part from existing array:-
 --------------------------------------------------- */
 const newArray=["Rahul", "Anmol", "Piyush", "Sumit"];
 console.log("Before slice elements are:-");
 console.log(newArray);
 let newArrPart=newArray.slice(2);
 console.log("After slice elements are:-");
 console.log(newArrPart); 

 /*Sort number in ascending order:-
 ---------------------------------- */
 const sortNumAscending=[25, 10, 5, 89, 3];
 console.log("Before sort numbers are:-");
 console.log(sortNumAscending);
 sortNumAscending.sort(function(a,b){ return a- b});
 console.log("After sort numbers are:-");
 console.log(sortNumAscending);

 /*Sort number in ascending order:-
 ---------------------------------- */
 const sortNumDescending=[25, 10, 5, 89, 3];
 console.log("Before sort numbers are:-");
 console.log(sortNumDescending);
 sortNumDescending.sort(function(a,b){ return b - a});
 console.log("After sort numbers are:-");
 console.log(sortNumDescending);

 /*Find mix and max element from array:-
 ---------------------------------------*/
const digits=[25, 10, 5, 89, 3]
let minDigit= Math.min.apply(null, digits);
let maxDigit= Math.max.apply(null, digits);
console.log("Min value ==>   "+minDigit);
console.log("Max value ==>   "+maxDigit);

/*Using Map() :-
-------------- */
const DoubleDigits=[25, 10, 5, 89, 3]
let abc=DoubleDigits.map(doubleNumber);
console.log(abc); 
function doubleNumber(m){
    return m * 10;
}

/* Using foEach() in array:-
-----------------------------*/
const cop=[" hii", "hello", "good", "happy"]
cop.forEach(copNumber);
function copNumber(name){
    console.log(name);
} 

/*Using some() and every() in array:-
-------------------------------------*/
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);
let everyOver18 = numbers.every(myFunction);
console.log("After apply some method ==> "+someOver18);
console.log("After apply every method ==> "+everyOver18);
function myFunction(value) {
  return value > 20;
}



function checkPerfectNumber(num){
      for(let i=1; i<num; i++){
          if(num % i ==0){
              console.log("Perfect number");
          }else{
              console.log("Not Perfect number");
          }
      }
}

checkPerfectNumber(6);