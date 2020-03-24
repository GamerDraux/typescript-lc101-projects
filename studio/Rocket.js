"use strict";
exports.__esModule = true;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        constructor (name, totalCapacityKg){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems=Cargo[];
        this.astronauts= Astronaut[];
        this.name=name;
        this.totalCapacityKg=totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        // returns sum of all items using each item's massKg property
        var categoryMass = 0;
        for (let item of items) {
            categoryMass += item.massKg;
        }
        return categoryMass;
    };
    Rocket.prototype.currentMassKg = function () {
        //create current Mass calculation here
        // uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    };
    Rocket.prototype.canAdd = function (item) {
        // returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        //uses this.canAdd() to see if another item can be added, if true, adds CARGO to THIS.CARGOITEMS and returns true, else, returns false
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        //uses this.canAdd() to see if another astronaut can be added, if true, adds astronuat to this.astronauts and returns true, else returns false
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
