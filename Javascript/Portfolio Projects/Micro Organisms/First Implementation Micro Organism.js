// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase());
    }
    return newStrand;
};
const pAequorFactory=(num,funcParam)=>{
    return {
        specimenNum:num,
        dna:funcParam(),
        mutate(){
            let dnaBase=this.dna[Math.floor(Math.random()*this.dna.length)];
            let anotherRandomBase=returnRandBase();
            console.log(dnaBase)
            console.log(anotherRandomBase)
            if(dnaBase!==anotherRandomBase){
                dnaBase=anotherRandomBase;
            }
        },
        compareDNA(obj){
            let count=0;
            for(let i=0;i<this.dna.length;i++){
                if(this.dna[i]===obj.dna[i]){
                    count=count+1
                }
            }
            console.log(`Specimen #${this.specimenNum} has ${count/this.dna.length * 100}% DNA bases in common with #${obj.specimenNum}.`)
        },
        willLikelySurvive(){
            let countC=0;
            let countG=0;
            for (let i=0;i<this.dna.length;i++){
                if (this.dna[i]==="C"){
                    countC=countC+1;
                }
                else if(this.dna[i]==="G"){
                    countG=countG+1;
                }

            }

            if (countC/this.dna.length*100>=30 || countG/this.dna.length*100>=30){
                return true;
            }
            else{
                return false;
            }

        }
    }
}

const creatInstanceArray=()=> {
    let instancesArray = [];
    for (let i = 0; i < 30; i++) {
        instancesArray.push(pAequorFactory(i, mockUpStrand))
    }
    return instancesArray;
}

let instanceArray=creatInstanceArray();
console.log(instanceArray[0])r


