// let mobiles=["realme","redmi","nothing","vivo"];//using array literal
// console.log(mobiles);
// let name= new Array("Krutika","Kiran","Datta","Appu"); //new Array type of constructor  
// console.log(name);

// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let val of marks)
// {
//     sum+=val;
// }
// let av=sum/marks.length;
// console.log(`Average number of sstudent is ${av}`);


// let items=[200,500,600,555,999,678];
// let i=0;
// for(let val of items)
// {
//     let offer=val/10;
//     items[i]=items[i]-offer;
//     console.log(`value of after ${items[i]}`);
//     i++;
// }    

// let price=[200,980,399,599,899];
// for(let l=0;l<price.length;l++)
// {
//     let offer=price[l]/10;
//     price[l]-=offer;
// }
// console.log(price);

// //all array methods in one frame
// let arr=["Krutika","Datta","Priya","dolly"];
// let arr1=["laxmi","krishna","kiran"];
// //push method
// let val=arr.push("laxy");
// console.log(arr); 
// //pop method
// console.log(arr.pop());
// console.log(arr);
// //toString
// console.log(arr.toString());
// //concat()
// console.log(arr.concat(arr1));
// //unshift
// console.log(arr.unshift("dommy","Jimmy"));
// console.log(arr);
// //shift
// console.log(arr.shift());
// //slice
// let vare= arr.slice(0,3);
// console.log(vare);
// //splice
// vare1=arr.splice(0,1,"prema");
// console.log(vare1);
// console.log(arr);

let company=["blombery","microsoft","uber","IBM","google","netflix"];
console.log(company);
//remove 1st company
console.log(company.shift());
console.log(company);
company.shift();
//remove uber add ola in its place
console.log(company.splice(1,1,"ola"));
console.log(company);
//add amazon at the end
console.log(company.push("amazon"));
console.log(company);
