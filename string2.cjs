// ==== String Problem #2 ====
// Given an IP address - "111.139.161.143". Split it into its component parts 111, 139, 161, 143 and return it in an array in numeric values. [111, 139, 161, 143].

// Support IPV4 addresses only. If there are other characters detected, return an empty array.

function string2(data){
    try {
        if(typeof(data) !=='string'){
            throw new Error("Input is not a string")
        }
        return data.split('.').join(',')
    } catch (error) {
        console.error("An error",error)
    }
}

module.exports=string2;