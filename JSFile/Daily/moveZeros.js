function moveZeroes(arr) {
    let result=[];
    let count=0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]!==0)
        {
            result.push(arr[i]);
            
        }
        else{
            count++;
        }
    }
    while(count>0)
    {
        result.push(0);
        count--;
    }
    return result;
}
console.log(moveZeroes([0,1,22,0,0,0,8,6]));
