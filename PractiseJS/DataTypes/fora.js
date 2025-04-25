//for loop
for(let i=5;i<51;i=i+5)
{
    console.log(i);
}

console.log("This table in the reverse order");

for(let i=50; i>4;i=i-5)
{
    console.log(i);
}

console.log("This for loop shows even 1 numbers");

for(let i=0;i<100;i++)
{
    if(i%2==0)
    {
        console.log(i);
    }
}
console.log("this is list of odd numbers");

for (let i=0;i<100;i++)
{
    if(i%2!=0)
    {
        console.log(i);
    }
}

console.log("Sum of 1 to 10");
let sum=0;
for(let i=1;i<=10;i++)
{
    sum=sum+i;
}
console.log(sum);

console.log("infinite loop");
// for(let i=0;i>=0;i++)
// {
//     console.log(i)
// }

console.log("From this while loop will run")
let num1=0;
while(num1 <= 5)
{
    if(num1 % 2 == 0)
    {
        console.log(num1);
    }
    num1++;
}

console.log("Reverse number");

// let i=5;
// while(i>=0)
// {
//     if(i % 2==0){
//         console.log(i);
//     }
//     i--;
// }

let n=10;
while(n>=0)
    {
        if(n%2==0)
            {
                console.log(n);
            }
            n--;
    }
console.log("do while loop will run")

let K=0;
do
{
    console.log("welcome to JS world!!!!!!!!!!!!!!")
    K++;
}while(K<=90);

console.log("for.....of loop running")

let name="Krutika Salotagi"
let lenght=0;
for(let names of name)
{
    console.log(names)
    lenght++;
}
console.log("Lenght of sstring is:",lenght);

console.log("*******************For .....in loop***********************")

let gods={
    fullName: "Shiva",
    age:n,
    place:"heaven"
};
for(let key in gods)
{
    console.log("Keys:",key," Values:",gods[key]);
}