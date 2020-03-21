"use strict";
exports.__esModule = true;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var categoryMass = 0;
        for (var i = 0; i < items.length; i++) {
            categoryMass += items[i].massKg;
        }
        return categoryMass;
    };
    Rocket.prototype.currentMassKg = function () {
        //create current Mass calculation here
        var totalMass = this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
        return totalMass;
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        //uses this.canAdd() to see if another item can be added, if true, adds CARGO to THIS.CARGOITEMS and returns true, else, returns false
        if (this.canAdd(cargo) === true) {
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
