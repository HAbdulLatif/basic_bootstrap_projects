// var general;
// console.log("general");
// general = 6;
// console.log(typeof general);
// general = "i love pakistan"
// console.log(typeof general);
// console.log(general.length);
// general = true;
// console.log(typeof general);
// general=[5,4,3,2,1];
// console.log(typeof general);
// console.log(general.length);
// general =  null;
// console.log(typeof general);
// general = 47403904570345;
// console.log(typeof general);
// general = 'i love pakistan';
// console.log(typeof general);
// general = 7.55555;
// console.log(typeof general);

// var a = "i love pakistan";
// var b = " Country";
// var ans;
// ans = a + b;
// console.log(ans);
// console.log(ans.length); 

// // var a = 12;
// // var b = 8;
// // var ans;
// // var ans1;
// // var ans2;
// // var ans3;
// // var ans4;
// // console.log(a);
// // console.log(b);
// // ans = a + b;
// // ans1 = a - b;
// // ans2 = a * b;
// // ans3 = a / b;
// // ans4 = a % b;
// // console.log(ans);
// // console.log(ans1);
// // console.log(ans2);
// // console.log(ans3);
// // console.log(ans4);

// // general = false;
// // console.log(typeof general);

// var num1 =5;
// var num2 = num1 +5; /*num2 is assigned value 10 as, num1 is type casted to integer*/
// var num3 = num1 + "5";  /*num3 is assigned value 55 as, num1 is type casted to string*/
// console.log(num2); 
// console.log(num3);

//  var1 = prompt("Enter what you want first"); /* first value is string by using prompt */
//  var2 = prompt("Enter what you want second"); /* second value is string by using prompt */
//  console.log(typeof var1);
//  console.log("The answer is given below");
// // console.log(parseInt(var1) + parseFloat(var2)); /* by converting first value string to int and the second convvert float */
// /* uper line and downword line both are working same but the download line have a extra variable*/
// // var3 = parseInt(var1) + parseFloat(var2); /* by converting first value string to int and the second convvert float */
// // console.log(var3);
// // console.log(typeof var3); /* now the type of this is call a number */


// // alert("the answer is ");
// alert(parseInt(var1) + parseFloat(var2)); /* alert is a dailouge open and appear that */

var age = prompt("Enter you age"); // input of type string, 
age = parseInt(age);                // type casted to number that is convert string into int.
if(age>60)
{
    console.log(" The current age is greater then 60");

}
else if(age>30)
{
    console.log("The current age is greater then 30");
}
else
{
    console.log("the current age is negative value");
}