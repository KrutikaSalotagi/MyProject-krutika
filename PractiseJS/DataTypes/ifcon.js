//if statement
// let bluetooth="Off";
// let connection;
// if (bluetooth==="On")
// {
//     connection="pair";
// }
// if(bluetooth==="Off")
// {
//     connection="unpair";
// }
// console.log(connection);

//if-else statement
//if the condition is true then if block excutes otherwise else block excutes
// let batteryLow=20;
// if(batteryLow<=20)
// {
//     console.log("Mobile Battery low please charge!!!!! ");

// }
// else{
//     console.log("Mobile battery is full");
// }

//else-if
// let wallpaper="night";
// let change;
// if (wallpaper=="morning")
// {
//     change="change wallpaper morning";
//     //console.log("good morning");
// }
// else if (wallpaper=="afternoon")
// {
//     change="change wallpaper afternoon";
//     //console.log("good afternoon");
// }
// else if (wallpaper=="evening")
// {
//     change="change wallpaper evening";
//     //console.log("good evening");
// }
// else
// {
//     change="change wallpaper night";
//    // console.log("good night");
// }
// console.log(change);

//ternary 
// let age=55;
// let eligiblity= age>=22 ? "Eligible for marriage" : "Not eligible for marriage ";
// console.log(eligiblity);

//grades

// let grades=55;
// if(grades>=80 && grades<=100)
// {
//     console.log(grades,"A grade");
// }
// else if (grades>=70 && grades<=89)
// {
//     console.log(grades,"B grades");
// }
// else if(grades>=60 && grades<=69)
// {
//     console.log(grades,"C grades");
// }
// else if (grades>=50 && grades<=59)
// {
//     console.log(grades,"D grades");
// }
// else
// {
//     console.log("F grades");
// }

let num=prompt("Enter number:");
if(num%5===0)
{
    console.log(num,"number is ",num);
}