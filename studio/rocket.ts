import {Payload} from './Payload'
import {Cargo} from './Cargo';
import {Astronaut} from './Astronaut';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];
    constructor (name:string, totalCapacityKg: number){
        this.name=name;
        this.totalCapacityKg=totalCapacityKg;
    }
    sumMass(items:Payload[]):number{
        // returns sum of all items using each item's massKg property
        let categoryMass=0;
        for (let item of items){
            categoryMass += item.massKg;
        }
        return categoryMass;
    }

    currentMassKg():number {
        //create current Mass calculation here
        // uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
         return this.sumMass(this.cargoItems)+this.sumMass(this.astronauts);
    }
    canAdd (item:Payload):boolean {
        // returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
        if (this.currentMassKg()+item.massKg <= this.totalCapacityKg){
            return true;
        }else{
            return false;
        }
    }

    addCargo(cargo: Cargo):boolean{
        //uses this.canAdd() to see if another item can be added, if true, adds CARGO to THIS.CARGOITEMS and returns true, else, returns false
        if (this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }
    addAstronaut(astronaut: Astronaut):boolean{
        //uses this.canAdd() to see if another astronaut can be added, if true, adds astronuat to this.astronauts and returns true, else returns false
        if (this.canAdd(astronaut)===true){
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}