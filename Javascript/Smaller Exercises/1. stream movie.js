class Network {
    constructor(data, users) {
        this.data = data;
        this.users = users;
    }
    // Insert code below
    movieTime(){
        let calculateDataUsed=this.users*5
        console.log(calculateDataUsed)
        let calculateRemainingData=this.data-calculateDataUsed;
        if (calculateRemainingData>=10){
            return true;
        }
        else{
            return false;
        }
    }

}

const library = new Network(20, 2)
console.log(library.movieTime());