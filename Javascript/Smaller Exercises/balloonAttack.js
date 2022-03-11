class Player {
    constructor(name, hitsPerMinute) {
        this.name = name;
        this.hitsPerMinute = hitsPerMinute;
        this.balloonCount = 100;
    }

    status() {
        console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`)
    }
}
/*Write a game function balloonAttack that takes two Player instances, calculates the balloons left for each player after
10 minutes (using the hitsPerMinute property) and returns the name of the winner. If the result is a tie, return the
string 'Tie'.

You can test your balloonAttack function by creating two instances of the Player class to use as arguments for your
function like below:*/
// Write function below
const balloonAttack=(p1,p2)=>{
    let calculateHitsForPlayer1=p1.hitsPerMinute *10
    let calculateHitsForPlayer2=p2.hitsPerMinute *10
    p1.balloonCount-=calculateHitsForPlayer1;
    p2.balloonCount-=calculateHitsForPlayer2;


    if(p1.balloonCount<p2.balloonCount){
        return p1.name
    }
    else if(p1.balloonCount===p2.balloonCount){
        return "Tie";
    }
    else {
        return p2.name
    }
}
const p1 = new Player('p1', 5);
const p2 = new Player('p2', 6);

console.log(balloonAttack(p1, p2));