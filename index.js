let color = "green";

if(color=="red")
{
    console.log("stop");
}
if(color=="yellow")
{
    console.log("slow down");
}
if(color=="green")
{
    console.log("go");
}



let size = "s";
if(size==="xl"){
    console.log("prize is 250")
}
else if(size==="l"){
    console.log("prize is 200")
}
else if(size==="m"){
    console.log("prize is 100")
}
else if(size==="s"){
    console.log("prize is 50")
}
let password = prompt("set your password");
let newPass = password.trim();
console.log(newPass);
prompt("please enter your name")

let month = ['january','july','march','augest'];

month.shift();
month[2] = "june";
