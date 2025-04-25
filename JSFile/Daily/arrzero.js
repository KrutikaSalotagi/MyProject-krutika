function zeroarr(arr)
{
    let index=0;
    // let result=[];
    let countzero=0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]!==0)
        {
            // result.push(arr[i]);
            arr[index]=arr[i];
            index++;
        }


    }
    while(index<arr.length)
    {
        arr[index]=0;
        index++;
    }
    return arr;
}
console.log(zeroarr([0,0,0,0,3,4,5]));
        


function move(arr)
{
    let result=[];
    let countzero=0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]!==0)
        {
            result.push(arr[i]);
        }
         else
        {
            countzero++;
        }
    }
    while(countzero>0)
    {
        result.push(0);
        countzero--;
    }
    return result;
}
console.log(move([0,0,0,0,5,6,7,0,5,0]));
