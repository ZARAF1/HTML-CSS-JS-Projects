// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * dnaBases.length)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}
/*
// 2
Look over the starter code. There are two helper functions: returnRandBase() and mockUpStrand().

DNA is comprised of four bases (Adenine, Thymine, Cytosine, and Guanine). When returnRandBase() is called, it will
randomly select a base and return the base ('A','T','C', or 'G').

mockUpStrand() is used to generate an array containing 15 bases to represent a single DNA strand with 15 bases.

You’ll use these helper functions later to create your objects that represent P. aequor.

// 3
Since you need to create multiple objects, create a factory function pAequorFactory() that has two parameters:

The first parameter is a number (no two organisms should have the same number).
The second parameter is an array of 15 DNA bases.
pAequorFactory() should return an object that contains the properties specimenNum and dna that correspond to the
parameters provided.

You’ll also add more methods to this returned object in the later steps.


// 4
Your team wants you to simulate P. aequor‘s high rate of mutation (change in its DNA).

To simulate a mutation, in pAequorFactory()‘s returned object, add the method .mutate().

.mutate() is responsible for randomly selecting a base in the object’s dna property and changing the current base to
a different base. Then .mutate() will return the object’s dna.

For example, if the randomly selected base is the 1st base and it is 'A', the base must be changed
to 'T', 'C', or 'G'. But it cannot be 'A' again.

// 5
Your research team wants to be able to compare the DNA sequences of different P. aequor. You’ll have to add a new method
(.compareDNA()) to the returned object of the factory function.

.compareDNA() has one parameter, another pAequor object.

The behavior of .compareDNA() is to compare the current pAequor‘s .dna with the passed in pAequor‘s .dna and compute how
many bases are identical and in the same locations. .compareDNA() does not return anything, but prints a message that
states the percentage of DNA the two objects have in common — use the .specimenNum to identify which pAequor objects
are being compared.

For example:

ex1 = ['A', 'C', 'T', 'G']
ex2 = ['C', 'A', 'T', 'T']
ex1 and ex2 only have the 3rd element in common ('T') and therefore, have 25% (1/4) of their DNA in common.
The resulting message would read something along the lines of: specimen #1 and specimen #2 have 25% DNA in common.
// 6

P. aequor have a likelier chance of survival if their DNA is made up of at least 60% 'C' or 'G' bases.

In the returned object of pAequorFactory(), add another method .willLikelySurvive().

.willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise,
.willLikelySurvive() returns false.

// i have used 30 percent to calculate WOOWOOWOOWOWOWOOWOWOWOWOOWOWOWOW
*/
const pAequorFactory =(specimenNum,dna)=>{
    return {
        specimenNum,
        dna,
        mutate(){
            let dna = this.dna;
            let randomNumber = Math.floor(Math.random()*dna.length);

            console.log(dna)
            let randomBase = dna[randomNumber]
            if(randomBase==='A'){
                let dnaBases = ['T', 'C', 'G']
                dna[randomNumber]=dnaBases[Math.floor(Math.random()*dnaBases.length)]
            }
            else if(randomBase==='T'){
                let dnaBases = ['A', 'C', 'G']
                dna[randomNumber]=dnaBases[Math.floor(Math.random()*dnaBases.length)]
            }
            else if(randomBase==='C'){
                let dnaBases = ['A', 'T', 'G']
                dna[randomNumber]=dnaBases[Math.floor(Math.random()*dnaBases.length)]
            }
            else if(randomBase==='G'){
                let dnaBases = ['A', 'C', 'T']
                dna[randomNumber]=dnaBases[Math.floor(Math.random()*dnaBases.length)]
            }
            return dna;
        },
        compareDNA(pAqueor){
            let newpAqueorObject= pAqueor;
            let ex1=this.dna;
            let ex2=newpAqueorObject.dna;
            let similarValues=[];
            ex1.forEach((org1,i)=>{
                ex2.forEach((org2,j)=>{
                    if ((org1===org2)&&(i===j)){
                        similarValues.push(i)
                        console.log(`Both organisms have ${org1}:${org2} in common at position ${i}:${j}`)
                    }
                })


            })
            console.log("similar values " + similarValues.length)
            console.log(`Specimen ${this.specimenNum} and ${newpAqueorObject.specimenNum} have ${Math.floor((similarValues.length/15)*100)}% of DNA in common.`)
        },
        willLikelySurvive(){
            let dna = this.dna;
            let countC=0;
            let countG=0;
            dna.forEach(element=>{
                if (element==="C"){
                    countC++;
                }
                else if (element==="G"){
                    countG++;
                }
            })
            if ((Math.floor((countC/15)*100)>30)||(Math.floor((countG/15)*100)>30)){
                console.log("Count C: "+ Math.floor((countC/15)*100) + "  Count G: "+Math.floor((countG/15)*100));
                return true;
            }
            else{
                console.log("Count C: "+ Math.floor((countC/15)*100) + "  Count G: "+Math.floor((countG/15)*100));
                return false;
            }
        }

        }
    }



const newPAqueor= pAequorFactory(1,mockUpStrand())
const anotherPAqueor = pAequorFactory(2, mockUpStrand())
console.log(newPAqueor.dna);
console.log(anotherPAqueor.dna)
newPAqueor.compareDNA(anotherPAqueor)
console.log("Will it survive ? : "+newPAqueor.willLikelySurvive())






