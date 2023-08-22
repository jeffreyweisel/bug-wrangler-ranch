/*takes the array journey as an argument and returns
 a new array that contains the elements of the journey array sorted in a random order.
*/
const randomize = (journey) => {
    return journey.sort(() => Math.random() - 0.5)     
}

module.exports = { randomize }
