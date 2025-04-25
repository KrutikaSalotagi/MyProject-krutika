function countvowels(str)
{
    let count=0;
    for(const char of str)
    {
        if(char ==="a"|| char==="e" || char==="i" || char==="o" || char==="u")
        {
            count++;
        }
    }
    return count;
}
console.log(countvowels("krutika"));

//arrow function

const count=(str)=>
{
    let count=0;
    for(const char of str)
    {
        if(char==="a" ||char==="e" ||char==="i" ||char==="o" ||char==="u")
        {
            count++;
        }
    }
    return count;
};