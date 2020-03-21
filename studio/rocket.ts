import {Payload} from './Payload';
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
        let categoryMass:number=0;
        for (let i = 0; i<items.length; i++){
            categoryMass += items[i].massKg;
        }
        return categoryMass;
    }

    currentMassKg():number {
        //create current Mass calculation here
        let totalMass = this.sumMass(this.cargoItems)+this.sumMass(this.astronauts);
        return totalMass;
    }
    canAdd (item:Payload):boolean {
        if (this.currentMassKg()+item.massKg <= this.totalCapacityKg){
            return true;
        }else{
            return false;
        }
    }
    addCargo(cargo: Cargo){
        //uses this.canAdd() to see if another item can be added, if true, adds CARGO to THIS.CARGOITEMS and returns true, else, returns false
        if (this.canAdd(cargo)===true){
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }
    addAstronaut(astronaut: Astronaut){
        //uses this.canAdd() to see if another astronaut can be added, if true, adds astronuat to this.astronauts and returns true, else returns false
        if (this.canAdd(astronaut)===true){
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}