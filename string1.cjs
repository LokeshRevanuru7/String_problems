// ==== String Problem #1 ====
// There are numbers that are stored in the format "$100.45", "$1,002.22", "-$123", and so on. Write a function to convert the given strings into their equivalent numeric format without any precision loss - 100.45, 1002.22, -123 and so on. There could be typing mistakes in the string so if the number is invalid, return 0. 

function string1(data){
    try {
        if(typeof(data) !=='string'){
            throw new Error("Input data must be string")
        }
        if(data.startsWith('$')){
            return data.replace('$','')
        }
        else{
            return 0
        }
    } catch (error) {
        console.error("An error:",error);
        return 0;
    }
}

module.exports=string1;