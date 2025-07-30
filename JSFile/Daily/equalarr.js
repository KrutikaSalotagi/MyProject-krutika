// function equalorNot()
// {
//     let arr1=[1,2,3,4,5,7];
//     let arr2=[1,2,3,4,5,6];
//         if(arr1.length!=arr2.length)
//         {
//             console.log(false);
//         }
//         else{
//             for(let i=0;i<arr1.length;i++)
//             {
//                 if(arr1[i]!=arr2[i])
//                 {
//                     return console.log("arr1 and arr2 not equal ");
//                 }
               
//             }
//              console.log(true);
//         }

// }
// equalorNot();

let arr1=[1,2,3,4,5];
let arr2=[1,2,3,4,5];
let res=arr1.join()==arr2.join();
console.log(res);