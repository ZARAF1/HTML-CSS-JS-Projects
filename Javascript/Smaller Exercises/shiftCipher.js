class ShiftCipher{
    constructor(shift) {
        this.shift = shift;
    }
    encrypt(str){
        let num = this.shift;
        const codeArray = [];
        const characterArray=[];
        for (let i=0;i<str.length;i++){
            if(str.charCodeAt(i)+num < 123){
                codeArray.push(str.charCodeAt(i)+num)
            }
            else if (str.charCodeAt(i)+num > 122){
                let differenceFromTheEnd = str.charCodeAt(i)+num - 122;
                console.log(differenceFromTheEnd)

                let newlyDerivedValue=differenceFromTheEnd+64;
                codeArray.push(newlyDerivedValue)
            }
        }

        codeArray.forEach(element=>{
            characterArray.push(String.fromCharCode(element))
        })
        console.log(characterArray.join(' ').toUpperCase())
    }

}
const cipher = new ShiftCipher(1)
cipher.encrypt("hellz")
/*

const encrypt = (str, num)=>{
    const codeArray = [];
    const characterArray=[];
        for (let i=0;i<str.length;i++){
            if(str.charCodeAt(i)+num < 123){
                codeArray.push(str.charCodeAt(i)+num)
            }
            else if (str.charCodeAt(i)+num > 122){
                let differenceFromTheEnd = str.charCodeAt(i)+num - 122;
                console.log(differenceFromTheEnd)

                let newlyDerivedValue=differenceFromTheEnd+64;
                codeArray.push(newlyDerivedValue)
            }
        }



        codeArray.forEach(element=>{
            characterArray.push(String.fromCharCode(element))
        })
    return characterArray.join(' ').toUpperCase()
}

console.log(encrypt("hellz",1))
*/
