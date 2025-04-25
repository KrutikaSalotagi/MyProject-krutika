function missing(arr, N)
{
    let sum=0;
    let expected=(N*(N+1)/2);
    for(let i=0;i<arr.length;i++)
    {
        sum +=arr[i];
    }
    return expected-sum;
}
let arr=[1,2,3,4,5,6,8,9];
let N=9;
console.log(missing(arr,N));