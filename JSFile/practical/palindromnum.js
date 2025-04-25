// function pal(String)
// {
//     const len=String.length;
//     for(let i=0;i<len/2;i++)
//     {
//         if(string[i]!==string[len-1-i])
//         {
//             return'It is not palindrome';
//         }
//     }
//     return'It is palindrome';
// }
// const string=prompt('Enter a String');
// const value=pal(String);
// console.log(value);
 function pal(String)
 {
    String=String.toLowerCase();
    let reverseStr=String.split('').reverse().join('');
    return String==reverseStr;

 }
 console.log(pal("Dad"));