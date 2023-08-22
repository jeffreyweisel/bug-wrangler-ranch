const { database } = require("./database.js")                       

const roundup = (herdSize) => {
    const cattle = []                                               
    const types = database.cattleTypes                              

/* for loop that will generate a list of cattle breeds by randomly selecting breeds 
from the available cattle types. The number of breeds to generate is determined by the herdSize parameter*/
   
    for (let counter = 0; counter < herdSize; counter++) {           
        const randomType = Math.floor(Math.random() * types.length) //generates a random index based on the length of types 
        const animal = types[randomType]                            //selecting an element from the types array based on randomType and assigning it to the variable animal
        cattle.push(animal.breed)                                     
    }

    return cattle                                                   
}


module.exports = { roundup }