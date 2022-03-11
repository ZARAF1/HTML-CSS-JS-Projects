class School{
    constructor(name,level,studentNum) {
        this._name=name;
        this._level=level;
        this._numberOfStudents=studentNum;
    }
    get name(){
        return this._name;
    }

    get level(){
        return this._level
    }
    get numberOfStudents(){
        return this._numberOfStudents;
    }
    set numberOfStudents(num){
        if (typeof num==="number"){
            this._numberOfStudents=num
        }
        else{
            return `Invalid input: numberOfStudents must be set to a Number.`
        }
    }
    quickFacts(){
        return `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
    }
    static pickSubstituteTeacher(substituteTeachers){
        let randomNumber=Math.floor(Math.random()*substituteTeachers.length)
        return substituteTeachers[randomNumber]
    }
}

class PrimarySchool extends School{
    constructor(name,level,studentNum,pickupPolicy) {
        super(name,level="primary",studentNum);
        this._pickupPolicy=pickupPolicy;
    }
    get pickupPolicy(){
        return this._pickupPolicy;
    }
}

const lorraineHansbury=new PrimarySchool("Lorraine Hansbury","",514,"Students must be picked up by a parent, guardian, or a family member over the age of 13.")
console.log(lorraineHansbury.level)


class HighSchool extends School{
    constructor(name,level,studentNum,sportsTeam) {
        super(name,level,studentNum);
        this._sportsTeam=sportsTeam;
    }
    get sportsTeam (){
        return this._sportsTeam
    }

}

console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']))