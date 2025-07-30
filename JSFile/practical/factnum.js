function factro(num)
{
    let fact=1;
    for(let i =1;i<=num;i++)
    {
        fact*=i;
    }
    return fact;
}
let num=10;
console.log(`The given factorial number is ${num} and factorial of it ${factro(num)}`);