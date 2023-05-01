/*Promise Examples1:-
--------------------- */
let check=true;
let test= new Promise(function(resolve, reject){
    if(check){
        resolve("Condition is true....");
    }else{
        reject("condition is false ...");
    }
});
 console.log(test);

/*Example2:-
-------------*/
function checkNumber(number){
    return new Promise(function (resolve, reject){
        if(number % 2 == 0){
            resolve("Even number");
        }
        else{
            reject("Odd number");
        }
    });
}
console.log(checkNumber(2));

/*Example-3 of .then() and .catch():-
------------------------------------ */
function demo(num){
    return new Promise(function(resolve, reject){
        if(num==5){
            resolve("I am sucessfull....");
        }else{
            reject("I am failed....");
        }
    });
}
let outfulfilment = (result) => {
    console.log(result);
}
let outRejection = (error) => {
    console.log(error);
}

demo(5).then(outfulfilment).catch(outfulfilment);

/*Example4:-
-------------*/
let sum=0;
function checkPerfectNumber(num){
    return new Promise((resolve, reject) => {
       console.log("Data is fetching please wait .....")
       setTimeout(() => {
        for(let i=1; i<num; i++){
            if(num % i ==0){
                sum=sum+i;
            }
        }
        if(sum == num){
            resolve("Perfect number");
        }else{
            reject("Not Perfect number");
        }
       }, 2000)
    });
}
 let onCorrect=(result) => {
    console.log(result);
 }
 let onWrong=(error) => {
    console.log(error);
 }
 checkPerfectNumber(6).then(onCorrect).catch(onWrong);

 /*Example5:-
-------------*/
function checkCalculation(a, b){
    return new Promise((resolve, reject) => {
       console.log("Data is fetching please wait .....");
       var c= a / b;
       setTimeout(() => {
        if(a, b){
            resolve(`Your answer: ${c}`);
        }else{
            reject("Failed to calculate ");
        }
       }, 2000)
    });
}
 checkPerfectNumber(9, 2).then((result) => {
    console.log(result);}).catch((error) => {
        console.log(error);});