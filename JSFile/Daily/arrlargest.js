//find the largest number in array
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
//     //Another way to get largest number 
//     let mark=Math.max(...arr);
//     return arr.filter(val=>val === mark);
// }
let list = large([10,88,99,55,100,1000]);
console.log(list);