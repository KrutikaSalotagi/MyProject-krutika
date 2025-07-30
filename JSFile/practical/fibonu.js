let num=parseInt(prompt("Enter a number:"));
let num1=0,num2=1,nextTerm;
console.log('Fibomcci series:');
for(let i=1;i<=num;i++)
{
    console.log(num1);
    nextTerm=num1+num2;
    num1=num2;
    num2=nextTerm;
}

console.log("***************while loop******************");

let n=12;
let n1=0,n2=1,next;
console.log("fibonacci Series");
console.log(n1);
console.log(n2);
next=n1+n2;
while(next<=n)
{
    console.log(next);
    n1=n2;
    n2=next;
    next=n1+n2;
}
