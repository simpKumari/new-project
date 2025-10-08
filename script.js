// // let a=5;
// // console.log(a++);
// // console.log(a);

// // let b = 5;
// // console.log(++b); // ?
// // console.log(b);

// // let x = 5, y = 10;
// // console.log(x++ + ++y); 


// // let p = 10;
// // console.log(--p + p--);

// // let a = 1;
// // a = a++ + ++a;
// // console.log(a);

// // let a = 5;
// // console.log(a++ + a); //11

// // let b = 10;
// // console.log(++b + b++);//22

// // let x = 3, y = 4;
// // console.log(x++ + ++y + y-- + --x); //15

// // let p = 7;
// // console.log(--p + p-- + ++p); //18

// // let a = 1;
// // a = a++ + ++a + a;
// // console.log(a);

// // let i = 0;
// // console.log(i++ + i++ + ++i);

// // let n = 5;
// // console.log(n-- - --n + n++);

// // let a = 2, b = 3;
// // console.log(++a * b-- + a++ * --b);

// // let m = 1;
// // console.log(m++ + m++ + m++);

// // let k = 5;
// // console.log(k++ + ++k + k-- + --k);


// function getGrade(score){
//     if(score>90 && score<100){
//         console.log("A++");  
//     }else if(score>80 && score<90){
//         console.log("A");  
//     }else if(score>70 && score<80){
//         console.log("B");  
//     }else if(score>60 && score<70){
//         console.log("C");  
//     }else if(score>33 && score<60){
//         console.log("D");  
//     }else if(score>0 && score<32){
//         console.log("FAIL");  
//     }else{
//         console.log("Invalid marks");
        
//     }
// }
// getGrade(64)



// // let x = 5;
// // if (x > 2)
// //     if (x > 4)
// //         console.log("x > 4");
// //     else
// //         console.log("x <= 2");

// //         let a = "5";
// //         if (a == 5)
// //             console.log("Double equals true");
// //         if (a === 5)
// //             console.log("Triple equals true");
// //         else
// //             console.log("Triple equals false");
        
        
// //             let score = 85;
// //             let grade = (score >= 90) ? "A" : (score >= 75) ? "B" :(score >= 60) ? "C" : "D";
// //             console.log(grade);
            

//             // let x = 0;
//             // if (x = 5)
//             //     console.log("Hello");
//             // else
//             //     console.log("Hi");

//  // repeat krne ko loop khate hai

// //1-4 for kaha se kaha tka jana h pta h
// // hello na ajye- while kaha tak jana h nhi pta hoa or kab ayega nhi pta ho

// // for(let i=1; i<101; i++){
// //     console.log(i);
    
// // }

// //1 print number from 1 to 10 using for loop
// // for (let i=1; i<=10; i++){
// //     console.log(i);
    
// // }
// //2 print number from 10 to 1 using while loop
// // let i=10;
// // while(i>=1){
// //     console.log(i);
// //     i--
// // }
// //3 print even number from 1 to 20 using for loop
// // for(let i=1; i<=20; i++){
// //     if(i%2==0){
// //         console.log(i);
        
// //     }
// // }
// //4 print odd number from 1 to 15 using while loop
// // let i=1;
// // while(i<=15){
// //     if(i%2==1){
// //         console.log(i);
        
// //     }
// //     i++;
// // }

// //5 print the multiple table of 5
// // for(let i=1 ;i<=10;i++){
// //     console.log("5 *" + i +"=" +5*i );
    
// // }

// //6 print the sum of number from 1 to 100 using  loop
// // let sum=0;
// // for(let i=1; i<=100; i++){
    
// //     sum=sum+i;  
// // }
// // console.log(sum);
// //7 print all number between  1 to 50 that are divisible by 3
// // for(let i=1; i<=50; i++){
// //     if(i%3==0){
// //         console.log(i);
        
// //     }
// // }
// //8 ask the user for a number and print whether each number from 1 to that number is even or odd
// // let num=prompt("enter any number");
// // for(let i=1; i<=num; i++){
// //     if(i%2==0){
// //         console.log(i +" even");
        
// //     }else{
// //         console.log(i+ " odd");
        
// //     }
// // }
 
// //9 count how many number between 1 to 100 are divisible ny both 3 and 5
// // for(let i=1; i<=100;i++){
// //     if(i%3==0 && i%5==0){
// //         console.log(i);
        
// //     }
// // }

// //10 reverse the digit of a number 
// // for(let i=1; i<=10; i++){
// //     for(let j=10; j>=1; j--){
// //         console.log(j);
        
// //     }
// //     console.log(i);
    
// // }


// //11 Count how many digits are in a given number. //wrong
// let num=485884885;
// let count=0;
// while(num>0){
//     count++;
//     num=Math.floor(num / 10)
// }
// console.log("number of digit =", count)

// //12 Print the Fibonacci series up to 10 terms.


// //first class function
// //pure function vs impure function
// //asa fnc jo ki bahar ki val ko na badle wo pure fnc h
// let a=12;
// function abcd(){
//     console.log("5hdjhs");
    
// }

// //asa fnc jo bahar ki val ko badal de wo impure
// function hui(){
//     a++;
// }

// //closure=> ek func jo return kre ek or func or return hone wala func hmasa use krega parent func ka koi variable ko
// function abcd(){
//     let a=2;
//     return function(){
//         console.log(a);
        
//     }
// }

// function outer(){
//     let count=0;
//     return function(){
//         count++
//         console.log(count);
        
//     }
// }
// const counter=outer();
// counter();//1
// counter();//2
// //lexical scoping=>parent child ka variable ko access krega , child parent ko nhi krega

// function abcd(){
//     let a=54;
//     function defg(){
//         let b=45;
//         function hijk(){
//             let c =55;
//         }
//     }
// }
// //IIFE
// (function(){
// console.log("hdhsd");

// })();

// (function int() {
//     console.log("hello class");
    
// })();

// //hoisting function ko variable m dalnge to nhi kam krta h hoisting
// //func declaration hoisting hote h
// abcd()
// function abcd(){
//     console.log("hdsjh");
    
// }
// // func expression hoisting nhi hote h


// abcd()
// let hello=function abcd(){
//     console.log("hdsjh");
    
// }

// //convert into arrow function
// let mult=(a,b) =>{
//     console.log(a*b);
    
// }

// // ...operator mean in parameter
// function abcd(...val){
//     console.log(val);
    
// }
// abcd(1,1,2,48,5,6,)

// //BMI calculator
// function bmi(weight, height){
//     return weight/(height*height);
// }
//  console.log(bmi(67,1.7).toFixed(2))

// //question 1
// function discountCal(discount){
//     return function(price){
//         return price-price*(discount/100)
//     }
// }
// let ten=discountCal(10);
// let twenty=discountCal(20);

// console.log(ten(1200));
// // console.log(twenty(1200));


// //question 2
// (function (){
//     const passwrd="scret password";
//     console.log(passwrd);
    
// })();






















 











































































            
        























































