let num=10;
let isPrime=true;
if(num<=1)
{
     isPrime=false;
}
    for(let i=2;i<num;i++)
    {
        if(num%i==0)
        {
            isPrime= false;
            break; //it will break the loop early if its not a prime number

        }
       
    }
    if(isPrime)
    {
        console.log(`${num} this is prime number`);
    }
    else{
        console.log(`${num} not a prime number`);
    }
