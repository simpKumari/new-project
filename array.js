//array 
//method- dot ke sath method rhega or bracket rhega wo method hota hai
//sort
// let arr=[11,454,52,88,11,15];
// let sr= arr.sort(function(a,b){
//     return a-b ;//a-b me ascending order or b-a descending

// });

//foreach- har ek val keliye function ko chalta h
// let arr=[44,2,5,56,45]
// arr.forEach(function(val){
    
//     console.log(val+5);
    
//     })
    
    //map- map srf tab use krna h jab apka ek naya array banna h pichle array ka data ke basis par

//     let arr=[44,2,5,56,45]
// let newarr= arr.map(function(val){
//     if(val>10){
//         return val;
//     }
// })

//filter
// let arr=[4114,2,25,56,45]
// let newarr= arr.filter(function(val){
//     if(val>4){
//         return true;
//     }
// })

//reduce

// let arr=[414,2,25,56,45]
// let ans= arr.reduce(function(accumulatr, val){
//     return accumulatr+val;
// },0)

//Q1.Use Array.isArray() to check if "Hello" and [1,2,3] are arrays.
// console.log(Array.isArray("hello"));
// console.log(Array.isArray([1,2,3]));

//Q2 Convert the string "JavaScript" into an array of characters using Array.from().
// console.log(Array.from("JavaScript"));

//Q3 . Create an array of numbers 10, 20, 30 using Array.of().
// console.log(Array.of(10,20,30));

//Q4Start with [1,2,3]. Use push() to add 4 and 5.
// let arr=[1,2,3]
// arr.push(4,5)
// console.log(arr);

//Q5.Remove the last element from [10,20,30] using pop().
// let arr=[10,20,30]
// arr.pop()
// console.log(arr);

//Q6.Add "start" at the beginning of [100,200,300] using unshift().
// let arr=[]
// arr.unshift(100,200,300);
// console.log(arr);

//Q7.Remove the first element from ["a","b","c"] using shift().
// let arr=["a","b","c"];
// arr.shift();
// console.log(arr);

//Q8.Use splice() to remove the 2nd element from [5,10,15,20].


//Q9Use slice() to extract [15,20] from [5,10,15,20].
// let arr=[5,10,15,20]
// console.log(arr.slice(2,4));

//Q10.Find the index of "apple" in ["banana","apple","grape"] using indexOf().
// let fruit=["banana","apple","grape"]
// console.log(fruit.indexOf("apple"));

//Q11.Use lastIndexOf() on [1,2,3,2,1] to find the last index of 2.
// let arr=[1,2,3,2,1]
// console.log(arr.lastIndexOf(2));

//q12.Check if [1,2,3] includes 4 using includes().

// let arr=[1,2,3]
// console.log(arr.includes(4));

//Q13.From [10,20,30,40], use find() to get the first number greater than 25.
// let arr=[10,20,30,40]
// console.log(arr.find());

//Q14.From [10,20,30,40], use findIndex() to get the index of the first number greater than 25
// let number=[10,20,30,40]
// let index=number.findIndex(num=> num>25);
// console.log(index);

//Q15. Use forEach() to print each element of [1,2,3].
// let arr=[1,2,3]
// arr.forEach(n => console.log(n))

//Q16. Double each number in [1,2,3].
// let arr=[1,2,3]
// console.log(arr.map(n=> n*2));































































