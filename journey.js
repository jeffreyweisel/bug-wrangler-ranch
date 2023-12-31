const { randomize } = require("./utils.js")                                     //imports utils.js

//Creation of the rivers 
//createRivers generates a random number that represents the count of rivers to create and returns that number. Value will be beetween 1 and 3 
const createRivers = () => {
    const rivers = Math.floor(Math.random() * 3) + 1
    return rivers
}
//Creation of the mountains
const createMountains = () => {
    const mountains = Math.floor(Math.random() * 2) + 1
    return mountains
}
//Creation of the forests
const createForests = () => {
    const forests = Math.floor(Math.random() * 2) + 1
    return forests
}
//Create the plains
const createPlains = () => {
    const plains = Math.floor(Math.random() * 4) + 1
    return plains
}
    
/*create a randomized 
journey through different areas based on the counts generated by the functions*/
//journey array created from the random terrain created by the journeyMaker function
    const journeyMaker = () => {
    const journey = []                                                          
    const areas = {                                                             //defining areas function 
        rivers: createRivers(),
        forests: createForests(),
        mountains: createMountains(),
        plains: createPlains()
    }

    for (let riverNumber = 0; riverNumber < areas.rivers; riverNumber++) {      
        journey.push("rivers")                                                  
    }

    for (let forestNumber = 0; forestNumber < areas.forests; forestNumber++) {  //initializes forest number to 0, loop will continue as long as forestNumber < areas.forests, incremenets by 1 each iteration
        journey.push("forests")                                                 //"forests" is pushed into journey array
    }

    for (let mountainNumber = 0; mountainNumber < areas.mountains; mountainNumber++) {
        journey.push("mountains")
    }

    for (let plainNumber = 0; plainNumber < areas.plains; plainNumber++) {
        journey.push("plains")
    }

    return randomize(journey)                                                    //returns a randomized journey array based on functions
    
}


//exports the above functions to main.js
module.exports = {
    createRivers, createForests,
    createMountains, createPlains, journeyMaker
}