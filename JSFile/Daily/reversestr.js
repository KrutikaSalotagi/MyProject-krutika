// function reverseString(str) {
//     str = str.toLowerCase();
//     let rev = str.split("").reverse().join("");
//     // const stringa=str.split("");
//     // const rev= stringa.reverse();
//     // const join= rev.join("");
//     // return join;
//     return rev;
// }
// console.log(reverseString("krutika"));

function reversestr(str)
{
    let newstring="";
    for(let i=str.length-1;i>=0;i--)
    {
        newstring +=str[i];
    }
    return newstring;
}
console.log(reversestr("Kruti Alure"));

function large(arr)
{
    let largestNum=[];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>largestNum)
        {
            largestNum=arr[i];
        }
    }
    return largestNum;
}
console.log(large([10,88,99,55,100,1000]));