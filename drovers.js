const { database } = require("./database.js")                                           


const hireDrovers = (cattleToDrive) => {                                                //define function hireDrovers based on the paramter cattleToDrive
    const drovers = []                                                                  
    const allDrovers = database.drovers                                                 //setting allDrovers to the drovers array from the database module
    const numberNeeded = cattleToDrive / 10                                             //calculates numberNeeded based on cattleToDrive / 10
    


    for (let counter = 0; counter < numberNeeded; counter++) {                          //initializes var counter, will continue as long as numberNeede is greater than 0, incremeneted by 1 after each iteration
        const randomHerderId = Math.floor(Math.random() * allDrovers.length)            //generates a randomHerderId based on the length of allDrovers array
        drovers.push(allDrovers[randomHerderId])                                        //pushes to drovers by selecting an element from allDrovers array based on a randomly generated index randomHerderId
    }

    return drovers                                                                      
}

module.exports = { hireDrovers }