// ==== String Problem #4 ====
// Given an object in the following format, return the full name in title case.
// {"first_name": "JoHN", "last_name": "SMith"}
// {"first_name": "JoHN", "middle_name": "doe", "last_name": "SMith"}

function string4(data){
    try {
        if(typeof(data) !=='object'){
            throw new Error("Input is not object")
        }
        let full_name=""
    for(let name in data){
        if(name=="first_name"){
            full_name +=data.first_name[0].toUpperCase()+data.first_name.slice(1).toLowerCase();
        }
        else if(name=='middle_name'){
            full_name +=" "+data.middle_name[0].toUpperCase()+data.middle_name.slice(1).toLowerCase();
        }
        else if(name=="last_name"){
            full_name +=" "+data.last_name[0].toUpperCase()+data.last_name.slice(1).toLowerCase();
        }
    }
    return full_name
    } catch (error) {
        console.error("An error:",error)
    }
}

module.exports=string4;