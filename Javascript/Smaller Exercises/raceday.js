let runnersNumber = Math.floor(Math.random()*1000);
let earlyRegistration=true;
let runnersAge = 17;

if (runnersAge>18 && earlyRegistration){
    console.log(`Runner number ${runnersNumber += 1000} will run at 9:30AM!`)
}
else if(runnersAge>18 && !earlyRegistration){
    console.log(`Runner number ${runnersNumber} will run at 11:00AM!`)
}
else if (runnersAge<18){
    console.log(`Runner number ${runnersNumber} will run at 12:30PM`)
}
else {
    console.log("Visit Registration Desk!")
}