/**
 * Simple Factory
 * In this example, a solution will be developed that 
 * does not satisfy the Factory-Method pattern but uses
 * a FactoryManager class that is responsible for 
 * building  any object. This solution breaks with the
 * Open-Closed Principle, in addition to having 'spaghetti 
 * code' in the creation of objects. The interesting thing is
 * that this same example is refactored into the following
 * example using the factory-method pattern. 
 */
import { CAR_TYPE, Car } from './factory.types';

// Creation of concrete classes
class Volvo implements Car {
    public operation(): string {
        return "Car: Volvo";
    }
}

class BMW implements Car {
    public operation(): string {
        return "Car: BMW";
    }
}

class Mercedes implements Car {
    public operation(): string {
        return "Car: Mercedes";
    }
}

// Finally, we implement CarManager class
class CarManager {
    constructor() {}
    createCar(type: CAR_TYPE): Car {
        switch (type) {
            case CAR_TYPE.VOLVO:
                return new Volvo();
            case CAR_TYPE.BMW:
                return new BMW();
            case CAR_TYPE.MERCEDES:
                return new Mercedes();
            default:
                throw new Error("Error: Invalid car make!");
        }
    }
}

const carManager = new CarManager();

const volvo = carManager.createCar(CAR_TYPE.VOLVO);
const bmw = carManager.createCar(CAR_TYPE.BMW);
const mercedes = carManager.createCar(CAR_TYPE.MERCEDES);

console.log(volvo.operation());
console.log(bmw.operation());
console.log(mercedes.operation());