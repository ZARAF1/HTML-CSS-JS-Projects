class Media {
    constructor(title) {
        this._title=title;
        this._isCheckedOut=false;
        this._ratings=[1,2,3,4]
    }
    get title(){
        return this._title;
    }
    get isCheckedOut(){
        return this._isCheckedOut;
    }
    set isCheckedOut(boolVal){
        this._isCheckedOut = boolVal;
    }

    get ratings(){
        return this._ratings;
    }
    getAverageRating(){
        let sumOfRating=this._ratings.reduce((cv,acc)=>{
            return cv+acc
        });
        let avgRating=sumOfRating/this._ratings.length;
        return avgRating;
    }
    toggleCheckOutStatus(bool){
        this._isCheckedOut=bool;
    }
    addRating(num){
        this._ratings.push(num);

    }
}

class Book extends Media{
    constructor(title,author,pages) {
        super(title);
        this._author=author;
        this._pages=pages;
    }
    get author(){
        return this._author;
    }
    get pages(){
        return this._pages;
    }
}

class Movie extends Media{
    constructor(title,director,runtime) {
        super(title);
        this._director=director;
        this._runtime=runtime;
    }
    get director(){
        return this._director;
    }
    get runtime(){
        return this._runtime;
    }
}

class CD extends Media{
    constructor(title,artist) {
        super(title);
        this._artist=artist;
        this._songs=[];
    }
    get artist(){
        return this._artist;
    }
    get songs(){
        return this._songs;
    }
    updateSongs(song){
        this._songs.push(song)
    }
}

const bourneIdentity= new Movie("Bourne Identity","John Woo",180)
console.log(bourneIdentity.getAverageRating())