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
////////////////////////////////////////////////////////////
