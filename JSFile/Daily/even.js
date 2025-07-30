//arr=[1,2,3,4,5,6,7,8]
//res=[2,4,6,8]
function check(arr)
{
    let res=[];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2==0)
        {
            res.push(arr[i]);
        }
    }
    return res;
}
let list=[1,2,3,4,5,6,7,8];
// console.log(list);
console.log(list,check(list));
console.log("***************************************************************************");


function checkstr(str)
{
    let splitstr=str.split("");
    let revstr1=splitstr.reverse();
    let  joinstr2=revstr1.join("");
    return joinstr2;

    //Using Method Chaining
    //Instead of three separate steps, you can write it in one line
    return str.split("").reverse().join("");
}
// return joinstr2;
let string="kiran";
console.log(checkstr(string));