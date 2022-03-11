const kelvin  =  293;
const celsius = kelvin - 273;

// conversion kelvin to fahrenheit
const fahrenheit = Math.floor(celsius * (9/5) + 32)
console.log(kelvin + " degrees Kelvin = " + fahrenheit + " degrees Fahrenheit");

// conversion kelvin to newton
const newton =  Math.floor(celsius*(33/100))
console.log(`${kelvin} degrees Kelvin = ${newton} degrees Newton`)




// celsius to newton

let newton = Math.floor(celsius*(33/100))
console.log(`Temperature in newton is ${newton}`)

