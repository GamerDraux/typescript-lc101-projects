// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Declare (5) Variables With Typelet spacecraftName: string = "Determination";
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
// Part 2: Print Days to Mars
var milesToMars = kilometersToMars * milesPerKilometer;
var hoursToMars = milesToMars / speedMPH;
var daysToMars = hoursToMars / 24;
// Code an output statement here (use a template literal):
// Part 3: Create a Function ("getDaysToLocation")
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMPH;
    }
    return Spacecraft;
}());
function getDaysToLocation(kilometersAway) {
    var milesAway = kilometersAway * this.milesPerKilometer;
    var hoursToLocation = milesAway / this.speedMph;
    return hoursToLocation / 24;
}
// Create an instance of the class here:
var spaceShuttle = new Spacecraft("Determination", 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
console.log(spaceShuttle.name + " will take " + spaceShuttle.getDaysToLocation(kilometersToMars) + " days to arrive at Mars");
console.log(spaceShuttle.name + " will take " + spaceShuttle.getDaysToLocation(kilometersToTheMoon) + " days to arrive at the Moon");
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
