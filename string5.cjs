// ==== String Problem #5 ====
// Given an array of strings ["the", "quick", "brown", "fox"], convert it into a string "the quick brown fox."
// If the array is empty, return an empty string.

function string5(data){
    if(data.length ===0){
        return [];
    }
    return `"${data.join(' ')}"`
}

module.exports=string5;