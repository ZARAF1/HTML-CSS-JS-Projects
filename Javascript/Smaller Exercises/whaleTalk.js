let input = 'Heu'
input=input.toLowerCase();
let vowels=['a','e','i','o','u'];

let whaleTalk = [];

for (let i=0;i<vowels.length;i++){
    for (let j=0;j<input.length; j++){
        if (vowels[i]===input[j]){
            whaleTalk.push(vowels[i])
            if (vowels[i]==='u'){
                whaleTalk.push(vowels[i])
            }
            else if (vowels[i]==='e'){
                whaleTalk.push(vowels[i])
            }


        }
    }
}
console.log(whaleTalk)
