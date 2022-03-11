let getSleepHours = day=>{
    day=day.toLowerCase()
    switch (day){
        case 'monday': return 5;
            break;
        case 'tuesday': return 6;
            break;
        case 'wednesday': return 7;
            break;
        case 'thursday': return 4;
            break;
        case 'friday': return 5;
            break;
        case 'saturday': return 7;
            break;
        case 'sunday': return 3;
            break;
        default: return 'invalid day'
            break;
    }
}


let getactualSleepHours = () =>{
    return getSleepHours('Monday') + getSleepHours('Tuesday')+ getSleepHours('WednesDay')+ getSleepHours('Thursday') + getSleepHours('Friday')+
        getSleepHours('Saturday') + getSleepHours('Sunday')
}

const getIdealHours=()=>{
    let idealHours=8;
    return idealHours*7;
}

const calculateSleepDebt = ()=>{
    let actualHours = getactualSleepHours();
    let idealHours = getIdealHours()
    if(actualHours===idealHours){
        console.log(`Your sleep debt is ` + (idealHours-actualHours)+ ` hours. You slept perfectly`)
    }
    else if (actualHours<idealHours){
        console.log(`Your sleep debt is ` + (idealHours-actualHours)+ ` hours. You need to sleep more!`)
    }
    else {
        console.log(`Your sleep debt is ` + (idealHours-actualHours)+ ` hours. You need have slept more than enough!`)
    }
}
calculateSleepDebt()