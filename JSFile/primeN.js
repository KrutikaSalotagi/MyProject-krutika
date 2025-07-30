let num=60;
for(let n=2;n<=num;n++)
{
    isprime=true;
    //for(let i=2;i<=n/2;i++)
    for(let i=2;i<=Math.sqrt(n);i++)
    {
        if(n%i==0)
        {
            isprime=false;
            break;
        }
        

    }
    if(isprime)
    {
        console.log(n);
    }
}