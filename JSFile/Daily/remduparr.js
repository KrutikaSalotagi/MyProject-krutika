//remove duplicate value from the array
function remdupli(arr)
{
    return arr.filter((item,index)=>
            arr.indexOf(item)===index);
}
let number=[1,2,3,3,3,4,5,5,5,6,7,8,9,10];
console.log(remdupli(number));

//from set object
function guestsLists(list)
{
    return [...new Set(list)];//Set i san object its accepts only unquie values and ... it is spread operator it set back to array .
}
let guests=["Krutika","krutika","Priya","Priya","kiran","datta","datta","laxmi","laxmi"];
let call=guestsLists(guests);
console.log(call);