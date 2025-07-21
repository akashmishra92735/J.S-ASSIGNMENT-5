                                    //JAVASCRIPT LOOP ASSGINMENT
//Q1.Write a JavaScript program to construct the following pattern, using a nested for loop.
//Answers-->
for(let i=0;i<6;i++)
{
    let row="";
    for(let j=0;j<6;j++)
    {
        row=row+"*";
    }
    console.log(row);
}


//Q2. Iterate through all numbers from 1 to 45. Print the following:
//Answers-->
for (let i = 1; i <= 45; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//
//Q3. Calculate the sum of all the numbers in the following array.
//var numbersArray = [1,13,22,123,49]
//Answers--->
let arr=[1,13,22,123,49];
let sum=0;
for(let i=0;i<arr.length;i++)
{
    sum=sum+arr[i];
}
console.log(sum);

//Q4.Get the sum of two arrays…actually the sum of all their elements.
//Answers-->
let array=[3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
let array2=[9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
let s1=0;
let s2=0;
for(let i=0;i<array.length;i++)
{
    s1=s1+array[i];
}
console.log(s1);
for(let j=0;j<array2.length;j++)
{
    s2=s2+array2[j];
}
console.log(s2);
console.log(s1+s2);

//Q5.Using a for loop output the elements in reverse order.
//Answers...
let rev=[43, "what", 9, true, "cannot", false, "be", 3, true];
for(let i=rev.length-1;i>=0;i--)
{
    console.log(rev[i]);
}