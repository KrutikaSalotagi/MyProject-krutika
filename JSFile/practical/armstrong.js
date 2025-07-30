// let num=prompt("enter a number");
// let numstr=num.toString();
// let numd=numstr.length;
// let sum=0;
// for(let i=0;i<numd;i++)
// {
//     let digit=parseInt(numstr[i]);
//     let power=1;
//     for(let j=0;j<numd;j++)
//     {
//         power*=digit;
//     }
//     sum+=power;

// }
//     if(sum===num)
//     {
//         console.log(`${num}number is Armstrong number`);
//     }
//     else{
//         console.log(`${num}is not an armstrong number`);
//     }


let sum=0;
const num=153;
let temp=num;
while(temp>0)
{
    let rem=temp%10;
    sum+=rem*rem*rem;
    temp=parseInt(temp/10);
}
if(sum==num)
{
    console.log(`${num} is an armstrong `);

}
else{
    console.log(`${num} is not armstrong`);
}