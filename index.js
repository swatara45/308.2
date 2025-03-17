const PI = 3.1415;
let radius = 5;
const area = PI * radius ** 2;
console.log(area)  //78.53
let spacePerPlant = 0.8;
const startPlants = 20;
const totalPossiblePlants = area / spacePerPlant;
console.log(totalPossiblePlants)  //98.17

let week = 1; //week 3 = 162
let weeklyPlants = startPlants * 2 ** week;
let percentage = (weeklyPlants / totalPossiblePlants) * 100;

if (percentage >= 80) {
    console.log(`Week ${week}: ${percentage}% full - Prune`);
} else if (percentage >= 50) {
    console.log(`Week ${week}: ${percentage}% full - Monitor`);
} else {
    console.log(`Week ${week}: ${percentage}% full - Plant More`);
}


let startPlantsUpdated = 100; 
let updatedWeek = 10;  

const updatedWeeklyPlants = startPlantsUpdated * 2 ** updatedWeek;
console.log(updatedWeeklyPlants);  

const updatedTotalSpaceRequired = spacePerPlant * updatedWeeklyPlants;
console.log(updatedTotalSpaceRequired);  


const newRadius = Math.sqrt(updatedTotalSpaceRequired / PI);
console.log(newRadius); 


// Function to check if the space required exceeds available space
try {
    const totalPossiblePlants = area / spacePerPlant;  // Total possible plants that can fit in the available space
    console.log(`Total available space can hold ${totalPossiblePlants} plants.`);

    const totalSpaceRequired = spacePerPlant * startPlants;  // Total space required for the starting plants
    console.log(`Total space required for ${startPlants} plants is ${totalSpaceRequired} square units.`);

    if (totalSpaceRequired > area) {
        // If the required space exceeds the available area, throw an error
        throw new Error('The amount of space required exceeds the available space in the garden.');
    }

    console.log('The garden has enough space to hold the plants.');
} catch (error) {
    // Catch and log the error if the space exceeds available area
    console.log(`Error: ${error.message}`);
}

