//Merge 2 sorted arrays without sort().this is 2 arrays were already sorted we need to combine them in to one array or merge them . while doing this those elements must be in sorted order .
function mergetwoarr(arr1,arr2)
{
    let i=0,j=0;
    let result=[];
    while(i<arr1.length && j<arr2.length)
    {
        if(arr1[i]<arr2[j])
        {
            result.push(arr1[i]);
            i++;
        }
        else{
            result.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length)
    {
        result.push(arr1[i]);
        i++;
    }
    while(j<arr2[j])
    {
        result.push(arr2[j]);
        j++;
    }
    return result;
}
console.log(mergetwoarr([1,2,6,7,8,9,11],[3,4,5,10,12,13,14]));