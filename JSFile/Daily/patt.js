function patt(row)
{
    for(let i=1;i<=row;i++)
    {
        let str='';
        for(let j=1;j<=row-i;j++ )
        {
           str+=' '; 
        }
        for(let k=1;k<=i;k++){
            str+='* ';
        }
        console.log(str);
    }
}
patt(5 );

// function patt(rows)
// {
//     for(let i=1;i<=rows;i++)
//     {
//         let str='';
//         for(let j=1;j<=i;j++)
//         {
//             str+='* ';
//         }
//         console.log(str);
//     }
// }
    
// patt(6);