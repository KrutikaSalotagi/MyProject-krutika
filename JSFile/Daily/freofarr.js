function num(arr)
{
    let count={};
    for(let i=0;i<arr.length;i++)
    {
        let num=arr[i];
        if(count[num])
        {
            count[num]++;
        }
        else{
            count[num]=1;
        }
        
    }
    return count;
}
// let final=num([1,2,3,4,2,2,3,4,5,5,6,6,4]);
// console.log(final);
console.log(num([1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,4,4,5,5,5,5,5,5]));