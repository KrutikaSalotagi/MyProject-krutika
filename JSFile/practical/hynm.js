//We are given array of marks of students. Filter our of the marks of students that scored 90+.
// let marks=[99,55,67,87,66,98,90,91];
// let toppers=  marks.filter((val)=>{
//     return val>90;
// });
// console.log(toppers);

//Qs. Take a number n as input from user. Create an array of numbers from 1 to n.Use the reduce method to calculate sum of all numbers in the array.Use the reduce method to calculate product of all numbers in the array.

let n= prompt("Enter a number :");
let arr=[];
for(let i=1;i<=n;i++)
{
    arr[i-1]=i;
}
console.log(arr);
const final=arr.reduce((val , arrs)=>
    {
        return val +arrs;
    });
console.log("Sum of n:",final);

const factorial=arr.reduce((val , arrs)=>
    {
        return val*arrs; //product(factorial) of all numbers in the array.
    });
console.log("factorial of  n:",factorial);
