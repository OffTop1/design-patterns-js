/**
 * In this example, the problem posed in the previous 
 * example will be solved using the factory-method
 * pattern. The objective of this solution is to 
 * avoid the 'spaghetti code' that has been generated
 * in the carManager class and to allow respecting 
 * the Open-Closed Principle.
 */

/**
 * In this case, the objects that we want to build would 
 * be those corresponding th the Volvo, BMW, Mercedes
 * classes. These classes implement the Car interface.
 * All this part of code is identical to the one pre-
 * sented in the `simple-factory.ts` example.
 */
import { Car } from './factory.types';

class Volvo implements Car {
    public operation(): string {
        return '[Car]: Volvo'
    }
}

class BMW implements Car {
    public operation(): string {
        return '[Car]: BMW'
    }
}

class Mercedes implements Car {
    public operation(): string {
        return '[Car]: Mercedes'
    }
}

/**
 * Next, we create `Creator` class, which is responsible
 * for defining the `factoryMethod`, which must return 
 * an object that implements the `Car` interface. In 
 * addition, we will have the `someOperation` method
 * which makes use of the `factoryMethod` abstract method
 * which is developed in each of the concrete creator 
 * classes.
 */

abstract class Creator {

    public abstract factoryMethod(): Car;

    public someOperation(): string {
        const car = this.factoryMethod();
        return `Creator: The same creator's code has just worked with ${car.operation()}`;
    }
}

class VolvoCreator extends Creator {
    public factoryMethod(): Car {
        return new Volvo();
    }
}

class BMWCreator extends Creator {
    public factoryMethod(): Car {
        return new BMW();
    }
}

class MercedesCreator extends Creator {
    public factoryMethod(): Car {
        return new Mercedes();
    }
}

/**
 * In the last step, we apply the pattern using 
 * the written code from the `Client` or `Context`
 * class.
 * It is important to note that the `Client` function
 * does not require any knowledge of the `Creator`
 * on the type of object to be created. Allowing to
 * fully delegate responsibility to specific classes. 
 */
function client(creator: Creator) {
    console.log(`[Client]: I'm not aware of the creator's class, but it still works!`);
    console.log(creator.someOperation());
}

const volvoCreator = new VolvoCreator();
const bmwCreator = new BMWCreator();
const mercedesCreator = new MercedesCreator();

console.log("[App]: Launched with the VolvoCreator");
client(volvoCreator);

console.log('------------');

console.log("[App]: Launched with the BMWCreator");
client(bmwCreator);