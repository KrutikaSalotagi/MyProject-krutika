function findhowmanywords(str)
{
    let count=0;
    let inwords=false;
    for(let i=0;i<str.length;i++)
    {
        if(str[i]!==' ' && !inwords)
        {
            inwords=true;
            count++;
        }
        else if(str[i]===' ')
        {
            inwords=false;
        }
    }
    return count;
}
console.log(findhowmanywords("Krutika Salotagi Alure"));